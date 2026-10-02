# -*- coding: utf-8 -*-
"""
Management command to seed demo Company + Certificate data so the
"select company" autocomplete/autofill in the Certificate admin can be
tried out without having to type real certificate data by hand.
"""
from datetime import date

from django.core.management.base import BaseCommand

from apps.certificates.models import Certificate, CertificateSite, Company


class Command(BaseCommand):
    help = 'Seeds demo companies and certificates to exercise company registration/autofill in admin'

    DEMO_COMPANIES = [
        {
            'company': {'name': 'Alpina Logistics Sh.p.k.'},
            'certificates': [
                {
                    'standard': 'ISO_9001_2015',
                    'status': 'VALID',
                    'company_name': 'Alpina Logistics Sh.p.k.',
                    'address': 'Rruga e Kavajes, Nr. 45, Tirane, Albania',
                    'scope_activity': 'Freight forwarding and warehousing services',
                    'iaf_code': 'IAF 31',
                    'first_issue_date': date(2022, 3, 10),
                    'expiry_date': date(2026, 3, 9),
                    'sites': [
                        {
                            'site_number': 2,
                            'name': 'Alpina Logistics - Durres Port Warehouse',
                            'scope_activity': 'Container storage and customs handling',
                            'address': 'Zona Portuale, Durres, Albania',
                        },
                    ],
                },
            ],
        },
        {
            'company': {'name': 'Beta Foods Industries'},
            'certificates': [
                {
                    'standard': 'ISO_22000_2018',
                    'status': 'VALID',
                    'company_name': 'Beta Foods Industries',
                    'address': 'Autostrada Tirane-Durres, Km 8, Albania',
                    'scope_activity': 'Production and packaging of dairy products',
                    'iaf_code': 'IAF 3',
                    'first_issue_date': date(2023, 6, 1),
                    'expiry_date': date(2026, 5, 31),
                },
                {
                    'standard': 'HACCP',
                    'status': 'VALID',
                    'company_name': 'Beta Foods Industries',
                    'address': 'Autostrada Tirane-Durres, Km 8, Albania',
                    'scope_activity': 'Production and packaging of dairy products',
                    'iaf_code': 'IAF 3',
                    'first_issue_date': date(2023, 6, 1),
                    'expiry_date': date(2026, 5, 31),
                },
            ],
        },
        {
            'company': {'name': 'Gamma Construction Group'},
            'certificates': [
                {
                    'standard': 'ISO_45001_2023',
                    'status': 'SUSPENDED',
                    'company_name': 'Gamma Construction Group',
                    'address': 'Bulevardi Bajram Curri, Nr. 12, Tirane, Albania',
                    'scope_activity': 'Civil and industrial construction works',
                    'iaf_code': 'IAF 28',
                    'first_issue_date': date(2021, 11, 15),
                    'expiry_date': date(2025, 11, 14),
                },
            ],
        },
        {
            'company': {'name': 'Delta Security Services'},
            'certificates': [
                {
                    'standard': 'ISO_27001_2022',
                    'status': 'EXPIRED',
                    'company_name': 'Delta Security Services',
                    'address': 'Rruga Myslym Shyri, Nr. 8, Tirane, Albania',
                    'scope_activity': 'Information security management for data center operations',
                    'iaf_code': 'IAF 33',
                    'first_issue_date': date(2020, 1, 20),
                    'expiry_date': date(2023, 1, 19),
                },
            ],
        },
    ]

    def handle(self, *args, **options):
        for entry in self.DEMO_COMPANIES:
            company, created = Company.objects.get_or_create(**entry['company'])
            status = 'Created' if created else 'Found existing'
            self.stdout.write(f"{status} company: {company.name}")

            for cert_data in entry['certificates']:
                sites = cert_data.pop('sites', [])
                certificate_number = (
                    f"MSC/{cert_data['standard']}/"
                    f"{cert_data['first_issue_date'].year}/{company.pk:03d}"
                )
                certificate, cert_created = Certificate.objects.get_or_create(
                    certificate_number=certificate_number,
                    defaults={**cert_data, 'company': company},
                )
                cert_status = 'Created' if cert_created else 'Found existing'
                self.stdout.write(
                    f"  {cert_status} certificate: {certificate.certificate_number} "
                    f"({certificate.get_standard_display()})"
                )

                if cert_created:
                    for site_data in sites:
                        CertificateSite.objects.get_or_create(
                            certificate=certificate,
                            site_number=site_data['site_number'],
                            defaults=site_data,
                        )
                        self.stdout.write(f"    Added site: {site_data['name']}")

        self.stdout.write(self.style.SUCCESS('\nDemo company/certificate data ready.'))
