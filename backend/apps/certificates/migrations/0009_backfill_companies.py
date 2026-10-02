from django.db import migrations


def backfill_companies(apps, schema_editor):
    """
    Create one Company per distinct company_name among existing certificates
    and link them, so the admin company picker/autofill works for companies
    already in the system. Only sets the nullable `company` FK via queryset
    update(): company_name, address, QR codes and every other field are left
    untouched.
    """
    Certificate = apps.get_model('certificates', 'Certificate')
    Company = apps.get_model('certificates', 'Company')

    companies = {c.name.casefold(): c for c in Company.objects.all()}

    for cert_id, raw_name in Certificate.objects.filter(
        company__isnull=True
    ).values_list('id', 'company_name'):
        name = (raw_name or '').strip()
        if not name:
            continue
        key = name.casefold()
        company = companies.get(key)
        if company is None:
            company = Company.objects.create(name=name[:255])
            companies[key] = company
        Certificate.objects.filter(pk=cert_id).update(company=company)


class Migration(migrations.Migration):

    dependencies = [
        ('certificates', '0008_company_certificate_company'),
    ]

    operations = [
        migrations.RunPython(backfill_companies, migrations.RunPython.noop),
    ]
