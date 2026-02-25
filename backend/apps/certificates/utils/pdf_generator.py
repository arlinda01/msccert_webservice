"""
PDF Generation Service for Certificates

Generates professionally designed A4 certificate PDFs using ReportLab's
canvas API for pixel-precise positioning matching the MSC certificate template.

Supports Albanian (sq), Italian (it), and English (en) languages.
"""

from django.http import HttpResponse
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from io import BytesIO
import os


# ── Multilingual text definitions ──────────────────────────────────────────

LANGUAGES = {
    'sq': {
        'title': 'CERTIFIKATË',
        'cert_prefix': 'CERTIFIKOHET SE',
        'address_label': 'Adresa',
        'compliance_text': 'Është në përputhje me standardin',
        'activities_text': 'Për aktivitetet e mëposhtme:',
        'iaf_label': 'Kodi EA/IAF',
        'first_issue': 'Emetimi i Parë',
        'modification_date': 'Data e Modifikimit',
        'expiry_date': 'Data e Skadencës',
        'executive_director': 'Drejtues Ekzekutiv',
        'disclaimer': (
            'Vlefshmëria e kësaj certifikate është subjekt i mbikëqyrjeve vjetore dhe rishikimi të plotë të '
            '{management_system} çdo tre vjet. Vlefshmëria e kësaj certifikate është në përputhje '
            'me respektimin e rregullave të përcaktuara nga sistemet e MSC CERTIFICATIONS.'
        ),
    },
    'en': {
        'title': 'CERTIFICATE',
        'cert_prefix': 'IT IS CERTIFIED THAT THE',
        'address_label': 'Address',
        'compliance_text': 'Is in compliance with the standard',
        'activities_text': 'For the following activities:',
        'iaf_label': 'EA/IAF Code',
        'first_issue': 'First Issue',
        'modification_date': 'Modification Date',
        'expiry_date': 'Expiry Date',
        'executive_director': 'Executive Director',
        'disclaimer': (
            'The validity of this certificate is subject to annual surveillance and a full review of the '
            '{management_system} every three years. The validity of this certificate is in compliance '
            'with the rules established by MSC CERTIFICATIONS systems.'
        ),
    },
    'it': {
        'title': 'CERTIFICATO',
        'cert_prefix': 'SI CERTIFICA CHE IL',
        'address_label': 'Indirizzo',
        'compliance_text': 'È conforme allo standard',
        'activities_text': 'Per le seguenti attività:',
        'iaf_label': 'Codice EA/IAF',
        'first_issue': 'Prima Emissione',
        'modification_date': 'Data di Modifica',
        'expiry_date': 'Data di Scadenza',
        'executive_director': 'Direttore Esecutivo',
        'disclaimer': (
            'La validità di questo certificato è soggetta a sorveglianza annuale e a una revisione completa del '
            '{management_system} ogni tre anni. La validità di questo certificato è conforme '
            'alle regole stabilite dai sistemi MSC CERTIFICATIONS.'
        ),
    },
}


# ISO standard descriptions per language
STANDARD_DESCRIPTIONS = {
    'ISO_9001_2015': {
        'code': 'Q',
        'sq': {
            'management_system': 'Sistemeve të Menaxhimit të Cilësisë',
            'cert_text': 'SISTEMI I MENAXHIMIT TË CILËSISË I KOMPANISË',
        },
        'en': {
            'management_system': 'Quality Management Systems',
            'cert_text': 'QUALITY MANAGEMENT SYSTEM OF THE COMPANY',
        },
        'it': {
            'management_system': 'Sistemi di Gestione della Qualità',
            'cert_text': 'SISTEMA DI GESTIONE DELLA QUALITÀ DELL\'AZIENDA',
        },
    },
    'ISO_14001_2015': {
        'code': 'E',
        'sq': {
            'management_system': 'Sistemeve të Menaxhimit të Mjedisit',
            'cert_text': 'SISTEMI I MENAXHIMIT TË MJEDISIT I KOMPANISË',
        },
        'en': {
            'management_system': 'Environmental Management Systems',
            'cert_text': 'ENVIRONMENTAL MANAGEMENT SYSTEM OF THE COMPANY',
        },
        'it': {
            'management_system': 'Sistemi di Gestione Ambientale',
            'cert_text': 'SISTEMA DI GESTIONE AMBIENTALE DELL\'AZIENDA',
        },
    },
    'ISO_45001_2023': {
        'code': 'OHS',
        'sq': {
            'management_system': 'Sistemeve të Menaxhimit të Sigurisë dhe Shëndetit në Punë',
            'cert_text': 'SISTEMI I MENAXHIMIT TË SIGURISË DHE SHËNDETIT NË PUNË I KOMPANISË',
        },
        'en': {
            'management_system': 'Occupational Health and Safety Management Systems',
            'cert_text': 'OCCUPATIONAL HEALTH AND SAFETY MANAGEMENT SYSTEM OF THE COMPANY',
        },
        'it': {
            'management_system': 'Sistemi di Gestione della Salute e Sicurezza sul Lavoro',
            'cert_text': 'SISTEMA DI GESTIONE DELLA SALUTE E SICUREZZA SUL LAVORO DELL\'AZIENDA',
        },
    },
    'ISO_22000_2018': {
        'code': 'FS',
        'sq': {
            'management_system': 'Sistemeve të Menaxhimit të Sigurisë Ushqimore',
            'cert_text': 'SISTEMI I MENAXHIMIT TË SIGURISË USHQIMORE I KOMPANISË',
        },
        'en': {
            'management_system': 'Food Safety Management Systems',
            'cert_text': 'FOOD SAFETY MANAGEMENT SYSTEM OF THE COMPANY',
        },
        'it': {
            'management_system': 'Sistemi di Gestione della Sicurezza Alimentare',
            'cert_text': 'SISTEMA DI GESTIONE DELLA SICUREZZA ALIMENTARE DELL\'AZIENDA',
        },
    },
    'ISO_27001_2022': {
        'code': 'IS',
        'sq': {
            'management_system': 'Sistemeve të Menaxhimit të Sigurisë së Informacionit',
            'cert_text': 'SISTEMI I MENAXHIMIT TË SIGURISË SË INFORMACIONIT I KOMPANISË',
        },
        'en': {
            'management_system': 'Information Security Management Systems',
            'cert_text': 'INFORMATION SECURITY MANAGEMENT SYSTEM OF THE COMPANY',
        },
        'it': {
            'management_system': 'Sistemi di Gestione della Sicurezza delle Informazioni',
            'cert_text': 'SISTEMA DI GESTIONE DELLA SICUREZZA DELLE INFORMAZIONI DELL\'AZIENDA',
        },
    },
    'ISO_50001_2018': {
        'code': 'En',
        'sq': {
            'management_system': 'Sistemeve të Menaxhimit të Energjisë',
            'cert_text': 'SISTEMI I MENAXHIMIT TË ENERGJISË I KOMPANISË',
        },
        'en': {
            'management_system': 'Energy Management Systems',
            'cert_text': 'ENERGY MANAGEMENT SYSTEM OF THE COMPANY',
        },
        'it': {
            'management_system': 'Sistemi di Gestione dell\'Energia',
            'cert_text': 'SISTEMA DI GESTIONE DELL\'ENERGIA DELL\'AZIENDA',
        },
    },
    'ISO_37001_2025': {
        'code': 'AB',
        'sq': {
            'management_system': 'Sistemeve të Menaxhimit Kundër Ryshfetit',
            'cert_text': 'SISTEMI I MENAXHIMIT KUNDËR RYSHFETIT I KOMPANISË',
        },
        'en': {
            'management_system': 'Anti-Bribery Management Systems',
            'cert_text': 'ANTI-BRIBERY MANAGEMENT SYSTEM OF THE COMPANY',
        },
        'it': {
            'management_system': 'Sistemi di Gestione Anticorruzione',
            'cert_text': 'SISTEMA DI GESTIONE ANTICORRUZIONE DELL\'AZIENDA',
        },
    },
    'ISO_39001_2012': {
        'code': 'RT',
        'sq': {
            'management_system': 'Sistemeve të Menaxhimit të Sigurisë në Trafikun Rrugor',
            'cert_text': 'SISTEMI I MENAXHIMIT TË SIGURISË NË TRAFIKUN RRUGOR I KOMPANISË',
        },
        'en': {
            'management_system': 'Road Traffic Safety Management Systems',
            'cert_text': 'ROAD TRAFFIC SAFETY MANAGEMENT SYSTEM OF THE COMPANY',
        },
        'it': {
            'management_system': 'Sistemi di Gestione della Sicurezza Stradale',
            'cert_text': 'SISTEMA DI GESTIONE DELLA SICUREZZA STRADALE DELL\'AZIENDA',
        },
    },
    'ISO_22301_2019': {
        'code': 'BC',
        'sq': {
            'management_system': 'Sistemeve të Menaxhimit të Vazhdimësisë së Biznesit',
            'cert_text': 'SISTEMI I MENAXHIMIT TË VAZHDIMËSISË SË BIZNESIT I KOMPANISË',
        },
        'en': {
            'management_system': 'Business Continuity Management Systems',
            'cert_text': 'BUSINESS CONTINUITY MANAGEMENT SYSTEM OF THE COMPANY',
        },
        'it': {
            'management_system': 'Sistemi di Gestione della Continuità Operativa',
            'cert_text': 'SISTEMA DI GESTIONE DELLA CONTINUITÀ OPERATIVA DELL\'AZIENDA',
        },
    },
    'HACCP': {
        'code': 'FS',
        'sq': {
            'management_system': 'Sistemeve HACCP',
            'cert_text': 'SISTEMI HACCP I KOMPANISË',
        },
        'en': {
            'management_system': 'HACCP Systems',
            'cert_text': 'HACCP SYSTEM OF THE COMPANY',
        },
        'it': {
            'management_system': 'Sistemi HACCP',
            'cert_text': 'SISTEMA HACCP DELL\'AZIENDA',
        },
    },
}


class CertificatePDFGenerator:
    PAGE_WIDTH, PAGE_HEIGHT = A4  # 595.27 x 841.89 points

    # Colors
    BLACK = colors.HexColor('#000000')
    BRAND_TEAL = colors.HexColor('#01434f')
    ACCENT_CYAN = colors.HexColor('#2abad4')
    WHITE = colors.white

    # Layout zones (top-down)
    HEADER_TOP = 60          # Distance from page top to header
    FOOTER_BOTTOM = 20       # Bottom of footer elements
    FOOTER_HEIGHT = 75       # Height of footer zone (QR + badge)

    # Margins
    CONTENT_LEFT = 50
    CONTENT_RIGHT = 545
    CONTENT_WIDTH = 495

    # Asset directory
    ASSETS_DIR = os.path.join(
        os.path.dirname(os.path.dirname(__file__)),
        'static', 'certificates', 'img'
    )

    def __init__(self, certificate, lang='sq'):
        self.certificate = certificate
        self.lang = lang if lang in LANGUAGES else 'sq'
        self.texts = LANGUAGES[self.lang]
        self.c = None

    def generate(self):
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = (
            f'attachment; filename="certificate_{self.certificate.certificate_number}_{self.lang}.pdf"'
        )

        buffer = BytesIO()
        self.c = canvas.Canvas(buffer, pagesize=A4)
        self.c.setTitle(f"Certificate - {self.certificate.certificate_number}")

        self._draw_page()

        self.c.save()
        pdf = buffer.getvalue()
        buffer.close()
        response.write(pdf)
        return response

    def _get_standard_info(self):
        std_data = STANDARD_DESCRIPTIONS.get(self.certificate.standard, None)
        if not std_data:
            return {
                'code': '',
                'management_system': 'Management Systems',
                'cert_text': self.texts['cert_prefix'] + ' MANAGEMENT SYSTEM OF THE COMPANY',
            }
        lang_data = std_data.get(self.lang, std_data.get('sq', {}))
        return {
            'code': std_data.get('code', ''),
            'management_system': lang_data.get('management_system', ''),
            'cert_text': self.texts['cert_prefix'] + ' ' + lang_data.get('cert_text', ''),
        }

    def _draw_page(self):
        self._draw_decorative_stripe()
        self._draw_header()
        self._draw_title()
        self._draw_body()
        self._draw_dates()
        self._draw_signature()
        self._draw_footer()

    # ── Decorative stripe ─────────────────────────────────────────────

    def _draw_decorative_stripe(self):
        c = self.c
        c.saveState()
        c.setFillColor(self.BRAND_TEAL)
        c.rect(0, 0, 28, self.PAGE_HEIGHT, fill=1, stroke=0)
        c.setFillColor(self.ACCENT_CYAN)
        c.rect(28, 0, 4, self.PAGE_HEIGHT, fill=1, stroke=0)
        c.restoreState()

    # ── Header ────────────────────────────────────────────────────────

    def _draw_header(self):
        c = self.c
        y_top = self.PAGE_HEIGHT - self.HEADER_TOP
        logo_height = 38

        # MSC Logo (left)
        self._draw_msc_logo(self.CONTENT_LEFT, y_top, logo_height)

        # DA badge
        da_path = os.path.join(self.ASSETS_DIR, 'da_badge.png')
        if os.path.exists(da_path):
            try:
                c.drawImage(da_path, self.CONTENT_RIGHT - 120, y_top - logo_height,
                            width=55, height=logo_height,
                            preserveAspectRatio=True, mask='auto')
            except Exception:
                pass

        # IAF logo
        iaf_path = os.path.join(self.ASSETS_DIR, 'iaf_logo.png')
        if os.path.exists(iaf_path):
            try:
                c.drawImage(iaf_path, self.CONTENT_RIGHT - 55, y_top - logo_height,
                            width=55, height=logo_height,
                            preserveAspectRatio=True, mask='auto')
            except Exception:
                pass

    def _draw_msc_logo(self, x, y, height):
        c = self.c
        logo_path = os.path.join(self.ASSETS_DIR, 'msc_logo.png')

        if os.path.exists(logo_path):
            try:
                c.drawImage(logo_path, x, y - height, width=120, height=height,
                            preserveAspectRatio=True, mask='auto')
                return
            except Exception:
                pass

        # Fallback text logo
        c.saveState()
        c.setFillColor(self.ACCENT_CYAN)
        c.setFont('Helvetica-Bold', 26)
        c.drawString(x, y - 24, 'MSC')
        c.setFillColor(self.BRAND_TEAL)
        c.setFont('Helvetica', 7.5)
        c.drawString(x, y - 35, 'CERTIFICATIONS')
        c.restoreState()

    # ── Title ─────────────────────────────────────────────────────────

    def _draw_title(self):
        c = self.c
        center_x = self.PAGE_WIDTH / 2
        # Shifted down from 180 to 200 for better vertical centering
        y = self.PAGE_HEIGHT - 200

        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica-Bold', 36)
        self._draw_spaced_text(center_x, y, self.texts['title'], spacing=5, centered=True)
        c.restoreState()

        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica-Oblique', 13)
        c.drawCentredString(center_x, y - 30, f'No. {self.certificate.certificate_number}')
        c.restoreState()

    # ── Body ──────────────────────────────────────────────────────────

    def _draw_body(self):
        c = self.c
        center_x = self.PAGE_WIDTH / 2
        std_info = self._get_standard_info()

        # Shifted down from 260 to 290 for better vertical centering
        y = self.PAGE_HEIGHT - 290

        # ISO-specific certification text
        cert_text = std_info['cert_text']
        c.saveState()
        c.setFillColor(self.BLACK)
        cert_font_size = 11
        while c.stringWidth(cert_text, 'Helvetica', cert_font_size) > self.CONTENT_WIDTH and cert_font_size > 7:
            cert_font_size -= 0.5
        c.setFont('Helvetica', cert_font_size)
        c.drawCentredString(center_x, y, cert_text)
        c.restoreState()

        # Company name - BIG UPPERCASE
        y -= 52
        c.saveState()
        c.setFillColor(self.BLACK)
        company = self.certificate.company_name.upper()
        font_size = 36
        while c.stringWidth(company, 'Helvetica-Bold', font_size) > self.CONTENT_WIDTH and font_size > 16:
            font_size -= 1
        c.setFont('Helvetica-Bold', font_size)
        c.drawCentredString(center_x, y, company)
        c.restoreState()

        # Address
        y -= 30
        address = getattr(self.certificate, 'address', '') or ''
        if address:
            c.saveState()
            c.setFillColor(self.BLACK)
            addr_font = 11
            addr_text = f'{self.texts["address_label"]}: {address}'
            while c.stringWidth(addr_text, 'Helvetica', addr_font) > self.CONTENT_WIDTH and addr_font > 7:
                addr_font -= 0.5
            c.setFont('Helvetica', addr_font)
            c.drawCentredString(center_x, y, addr_text)
            c.restoreState()

        # "Është në përputhje me standardin"
        y -= 35
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica', 11)
        c.drawCentredString(center_x, y, self.texts['compliance_text'])
        c.restoreState()

        # Standard name - large bold
        y -= 38
        c.saveState()
        c.setFillColor(self.BLACK)
        standard_display = self.certificate.get_standard_display()
        std_font = 30
        while c.stringWidth(standard_display, 'Helvetica-Bold', std_font) > self.CONTENT_WIDTH and std_font > 16:
            std_font -= 1
        c.setFont('Helvetica-Bold', std_font)
        c.drawCentredString(center_x, y, standard_display)
        c.restoreState()

        # "Për aktivitetet e mëposhtme:"
        y -= 32
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica', 10.5)
        c.drawCentredString(center_x, y, self.texts['activities_text'])
        c.restoreState()

        # IAF Code
        y -= 20
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica', 10)
        c.drawCentredString(center_x, y, f'{self.texts["iaf_label"]}: {self.certificate.iaf_code}')
        c.restoreState()

        # Scope activity - bold, adaptive
        y -= 30
        c.saveState()
        c.setFillColor(self.BLACK)
        scope = self.certificate.scope_activity.upper()
        scope_font = 12
        scope_max_width = self.CONTENT_WIDTH - 20
        test_line = scope
        if c.stringWidth(test_line, 'Helvetica-Bold', scope_font) > scope_max_width * 3:
            scope_font = 10
        elif c.stringWidth(test_line, 'Helvetica-Bold', scope_font) > scope_max_width * 2:
            scope_font = 11
        c.setFont('Helvetica-Bold', scope_font)
        self._draw_wrapped_text(center_x, y, scope, 'Helvetica-Bold', scope_font,
                                scope_max_width, centered=True)
        c.restoreState()

    # ── Dates (above signature) ───────────────────────────────────────

    def _draw_dates(self):
        c = self.c
        y = self.PAGE_HEIGHT - 640

        col_positions = [
            (self.PAGE_WIDTH * 0.22, self.texts['first_issue'],
             self._format_date(self.certificate.first_issue_date)),
            (self.PAGE_WIDTH * 0.50, self.texts['modification_date'],
             self._format_date(getattr(self.certificate, 'modification_date', None))),
            (self.PAGE_WIDTH * 0.78, self.texts['expiry_date'],
             self._format_date(self.certificate.expiry_date)),
        ]

        for col_x, label, value in col_positions:
            c.saveState()
            c.setFillColor(self.BLACK)
            c.setFont('Helvetica', 9)
            c.drawCentredString(col_x, y, label)
            c.restoreState()

            c.saveState()
            c.setFillColor(self.BLACK)
            c.setFont('Helvetica-Bold', 11)
            c.drawCentredString(col_x, y - 16, value)
            c.restoreState()

    # ── Signature (below dates) ───────────────────────────────────────

    def _draw_signature(self):
        c = self.c
        center_x = self.PAGE_WIDTH / 2
        line_y = self.PAGE_HEIGHT - 730

        # Signature image above the line
        sig_width = 130
        sig_height = 55
        sig_drawn = False

        if self.certificate.signature:
            try:
                sig_path = self.certificate.signature.path
                if os.path.exists(sig_path):
                    c.drawImage(sig_path, center_x - sig_width / 2, line_y + 5,
                                width=sig_width, height=sig_height,
                                preserveAspectRatio=True, mask='auto')
                    sig_drawn = True
            except Exception:
                pass

        if not sig_drawn:
            sig_path = os.path.join(self.ASSETS_DIR, 'signature.png')
            if os.path.exists(sig_path):
                try:
                    c.drawImage(sig_path, center_x - sig_width / 2, line_y + 5,
                                width=sig_width, height=sig_height,
                                preserveAspectRatio=True, mask='auto')
                except Exception:
                    pass

        # Line under signature
        c.saveState()
        c.setStrokeColor(self.BLACK)
        c.setLineWidth(0.5)
        c.line(center_x - 70, line_y, center_x + 70, line_y)
        c.restoreState()

        # "Drejtues Ekzekutiv"
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica-Bold', 9)
        c.drawCentredString(center_x, line_y - 14, self.texts['executive_director'])
        c.restoreState()

        # "MSC CERTIFICATIONS"
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica', 8)
        c.drawCentredString(center_x, line_y - 26, 'MSC CERTIFICATIONS')
        c.restoreState()

    # ── Footer ────────────────────────────────────────────────────────

    def _draw_footer(self):
        c = self.c
        std_info = self._get_standard_info()
        management_system = std_info['management_system']

        qr_size = 65
        badge_size = 70
        bottom = self.FOOTER_BOTTOM

        # Separator line
        c.saveState()
        c.setStrokeColor(self.ACCENT_CYAN)
        c.setLineWidth(0.8)
        c.line(self.CONTENT_LEFT, bottom + qr_size + 12,
               self.CONTENT_RIGHT, bottom + qr_size + 12)
        c.restoreState()

        # QR Code (left)
        self._draw_qr_code(self.CONTENT_LEFT + 5, bottom)

        # Approved badge (right)
        self._draw_approved_badge(self.CONTENT_RIGHT - badge_size - 5, bottom)

        # Text between QR and badge
        text_left = self.CONTENT_LEFT + qr_size + 18
        text_right = self.CONTENT_RIGHT - badge_size - 12
        text_center_x = (text_left + text_right) / 2
        text_max_width = text_right - text_left

        c.saveState()
        c.setFillColor(self.BLACK)

        disclaimer_text = self.texts['disclaimer'].format(management_system=management_system)

        # Start text at same vertical level as QR top / badge top
        text_y = bottom + qr_size - 8
        c.setFont('Helvetica', 5.5)
        text_y = self._draw_wrapped_text(
            text_center_x, text_y, disclaimer_text,
            'Helvetica', 5.5, text_max_width, centered=True
        )

        text_y -= 3
        c.setFont('Helvetica-Bold', 6)
        c.drawCentredString(text_center_x, text_y,
                            'MSC CERTIFICATIONS Assessment & Certification')

        text_y -= 8
        c.setFont('Helvetica', 5.5)
        c.drawCentredString(text_center_x, text_y,
                            'Rr Ismail Qemali, Tiranë, Shqipëri')

        text_y -= 8
        c.drawCentredString(text_center_x, text_y,
                            'info@msc-cert.com    www.msc-cert.com')

        c.restoreState()

    def _draw_qr_code(self, x, y):
        c = self.c
        if not self.certificate.qr_code:
            return

        qr_path = self.certificate.qr_code.path
        if not os.path.exists(qr_path):
            return

        try:
            qr_size = 65
            c.drawImage(qr_path, x, y, width=qr_size, height=qr_size,
                        preserveAspectRatio=True, mask='auto')

            c.saveState()
            c.setFillColor(self.BLACK)
            c.setFont('Helvetica-Bold', 6.5)
            c.drawCentredString(x + qr_size / 2, y - 9, 'CHECK CERT')
            c.restoreState()
        except Exception:
            pass

    def _draw_approved_badge(self, x, y):
        c = self.c
        badge_path = os.path.join(self.ASSETS_DIR, 'approved_badge.png')
        badge_img_height = 50
        text_below_y = y  # Text goes below the image

        if os.path.exists(badge_path):
            try:
                # Draw badge image in upper part of the zone
                c.drawImage(badge_path, x, y + 20, width=70, height=badge_img_height,
                            preserveAspectRatio=True, mask='auto')
            except Exception:
                pass

        # Standard name + APPROVED text below the check mark
        c.saveState()
        c.setFillColor(self.BLACK)
        badge_cx = x + 35
        c.setFont('Helvetica-Bold', 7)
        c.drawCentredString(badge_cx, text_below_y + 10, self.certificate.get_standard_display())
        c.setFont('Helvetica-Bold', 6.5)
        c.drawCentredString(badge_cx, text_below_y, 'APPROVED')
        c.restoreState()

    # ── Utilities ─────────────────────────────────────────────────────

    def _draw_spaced_text(self, x, y, text, spacing=4, centered=False):
        c = self.c
        font_name = c._fontname
        font_size = c._fontsize

        if centered:
            total_width = sum(
                c.stringWidth(ch, font_name, font_size) + spacing for ch in text
            ) - spacing
            x = x - total_width / 2

        for char in text:
            c.drawString(x, y, char)
            x += c.stringWidth(char, font_name, font_size) + spacing

    def _draw_wrapped_text(self, x, y, text, font_name, font_size, max_width, centered=False):
        c = self.c
        words = text.split()
        lines = []
        current_line = ''

        for word in words:
            test_line = f'{current_line} {word}'.strip()
            if c.stringWidth(test_line, font_name, font_size) <= max_width:
                current_line = test_line
            else:
                if current_line:
                    lines.append(current_line)
                current_line = word
        if current_line:
            lines.append(current_line)

        line_height = font_size + 3
        for i, line in enumerate(lines):
            line_y = y - (i * line_height)
            if centered:
                c.drawCentredString(x, line_y, line)
            else:
                c.drawString(x, line_y, line)

        return y - (len(lines) * line_height)

    @staticmethod
    def _format_date(date_val):
        if date_val is None:
            return '—'
        return date_val.strftime('%d.%m.%Y')
