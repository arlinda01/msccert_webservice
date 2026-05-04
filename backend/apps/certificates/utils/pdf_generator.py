"""
PDF Generation Service for Certificates

Generates professionally designed A4 certificate PDFs using ReportLab's
canvas API for pixel-precise positioning matching the MSC certificate template.

Font: Poppins throughout (ExtraLight, Light, Regular, Medium, SemiBold).
Logo compliance: DA-PO-005 policy (accreditation symbol max 25x33mm on A4).

Supports Albanian (sq), Italian (it), and English (en) languages.
"""

from django.http import HttpResponse
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from io import BytesIO
import os


# ── Font registration ────────────────────────────────────────────────────

FONTS_DIR = os.path.join(
    os.path.dirname(os.path.dirname(__file__)),
    'static', 'certificates', 'fonts'
)

_fonts_registered = False


def _register_poppins():
    global _fonts_registered
    if _fonts_registered:
        return
    font_variants = {
        'Poppins-ExtraLight': 'Poppins-ExtraLight.ttf',
        'Poppins-Light': 'Poppins-Light.ttf',
        'Poppins': 'Poppins-Regular.ttf',
        'Poppins-Medium': 'Poppins-Medium.ttf',
        'Poppins-SemiBold': 'Poppins-SemiBold.ttf',
    }
    for name, filename in font_variants.items():
        path = os.path.join(FONTS_DIR, filename)
        if os.path.exists(path):
            pdfmetrics.registerFont(TTFont(name, path))
    _fonts_registered = True


# ── Multilingual text definitions ────────────────────────────────────────

LANGUAGES = {
    'sq': {
        'title': 'CERTIFIKAT\u00cb',
        'cert_prefix': 'CERTIFIKOHET SE',
        'address_label': 'Adresa',
        'compliance_text': '\u00cbsht\u00eb n\u00eb p\u00ebrputhje me standardin',
        'activities_text': 'P\u00ebr aktivitetet e m\u00ebposhtme:',
        'iaf_label': 'Kodi EA/IAF',
        'first_issue': 'Emetimi i Par\u00eb',
        'modification_date': 'Data e Modifikimit',
        'expiry_date': 'Data e Skadenc\u00ebs',
        'executive_director': 'Drejtues Ekzekutiv',
        'admin_title': 'Administratore',
        'disclaimer': (
            'Vlefshmëria e kësaj certifikate është subjekt i mbikëqyrjeve vjetore dhe rishikimi të plotë të '
            '{management_system} çdo tre vjet. Vlefshmëria e kësaj certifikate është në përputhje '
            'me respektimin e rregullave të përcaktuara nga sistemet e MSC CERTIFICATIONS.'
        ),
        'footer_address': 'Rr. Ismail Qemali, Tiranë, Shqipëri',
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
        'admin_title': 'Administrator',
        'disclaimer': (
            'The validity of this certificate is subject to annual surveillance and a full review of the '
            '{management_system} every three years. The validity of this certificate is in compliance '
            'with the rules established by MSC CERTIFICATIONS systems.'
        ),
        'footer_address': 'Ismail Qemali St., Tirana, Albania',
    },
    'it': {
        'title': 'CERTIFICATO',
        'cert_prefix': 'SI CERTIFICA CHE IL',
        'address_label': 'Indirizzo',
        'compliance_text': '\u00c8 conforme ai requisiti della norma',
        'activities_text': 'Per il seguente campo di applicazione',
        'iaf_label': 'Codice EA/IAF',
        'first_issue': 'Prima Emissione',
        'modification_date': 'Data di modifica',
        'expiry_date': 'Data di scadenza',
        'executive_director': 'Direttore Esecutivo',
        'admin_title': 'Amministratore',
        'disclaimer': (
            'La validità di questo certificato è soggetta a sorveglianza annuale e a una revisione completa dei '
            '{management_system} ogni tre anni. La validità di questo certificato è conforme '
            'alle norme stabilite dai sistemi di MSC CERTIFICATIONS.'
        ),
        'footer_address': 'via Ismail Qemali, Tirana, Albania',
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
    BRAND_TEAL = colors.HexColor('#014450')
    WHITE = colors.white

    # Left stripe: 16mm per DA-PO-005 compliance & Doc3 spec
    STRIPE_WIDTH = 16 * mm  # 45.35 points

    # Layout zones
    HEADER_TOP = 25          # less top padding for logos (closer to page edge)
    FOOTER_BOTTOM = 20

    # Margins: 15mm padding from stripe on left, 15mm from page edge on right
    CONTENT_LEFT = STRIPE_WIDTH + 15 * mm
    CONTENT_RIGHT = PAGE_WIDTH - 15 * mm
    CONTENT_WIDTH = CONTENT_RIGHT - CONTENT_LEFT

    # DA-PO-005 compliance: accreditation symbol max 25x33mm on A4
    ACCRED_SYMBOL_MAX_W = 25 * mm  # ~70.87 points
    ACCRED_SYMBOL_MAX_H = 33 * mm  # ~93.54 points

    # Asset directory
    ASSETS_DIR = os.path.join(
        os.path.dirname(os.path.dirname(__file__)),
        'static', 'certificates', 'img'
    )

    # Poppins font name constants
    F_EXTRALIGHT = 'Poppins-ExtraLight'
    F_LIGHT = 'Poppins-Light'
    F_REGULAR = 'Poppins'
    F_MEDIUM = 'Poppins-Medium'
    F_SEMIBOLD = 'Poppins-SemiBold'

    def __init__(self, certificate, lang='sq'):
        _register_poppins()
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

    def _y_from_top(self, mm_from_top):
        """Convert spec Y (mm from top of page) to ReportLab Y (points from bottom)."""
        return self.PAGE_HEIGHT - (mm_from_top * mm)

    def _build_address_lines(self):
        """One line per address. If sites exist, list each (name + address);
        otherwise return the single main address line."""
        label = self.texts['address_label'].upper()
        sites = []
        try:
            sites = list(self.certificate.sites.all().order_by('site_number'))
        except Exception:
            sites = []

        if sites:
            lines = []
            main = (getattr(self.certificate, 'address', '') or '').strip()
            if main:
                lines.append(f'{label}: {main}')
            for s in sites:
                name = (getattr(s, 'name', '') or '').strip()
                addr = (getattr(s, 'address', '') or '').strip()
                if not addr:
                    continue
                prefix = f'{label} ({name})' if name else label
                lines.append(f'{prefix}: {addr}')
            return lines

        address = (getattr(self.certificate, 'address', '') or '').strip()
        return [f'{label}: {address}'] if address else []

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
        self._draw_background()
        self._draw_title()
        self._draw_body()
        self._draw_dates()
        self._draw_signature()
        self._draw_footer()

    # ── Background: full-page PNG with stripe, logos, watermark, badge ──

    def _draw_background(self):
        c = self.c
        bg_path = os.path.join(self.ASSETS_DIR, 'certificate_background.png')
        if not os.path.exists(bg_path):
            return
        try:
            c.drawImage(bg_path, 0, 0,
                        width=self.PAGE_WIDTH, height=self.PAGE_HEIGHT,
                        preserveAspectRatio=False, mask='auto')
        except Exception:
            pass

    # ── 2. Title: Poppins SemiBold 38, spaced ────────────────────────

    def _draw_title(self):
        c = self.c
        center_x = self.STRIPE_WIDTH + (self.PAGE_WIDTH - self.STRIPE_WIDTH) / 2

        # Title CERTIFICATO: baseline ~ Y 65.3mm from top (spec 3a)
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont(self.F_SEMIBOLD, 38)
        self._draw_spaced_text(center_x, self._y_from_top(65.3),
                               self.texts['title'], spacing=5, centered=True)
        c.restoreState()

        # Cert number: baseline ~ Y 75.4mm (spec 3b)
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont(self.F_MEDIUM, 9.6)
        cert_no = self.certificate.certificate_number or ''
        c.drawCentredString(center_x, self._y_from_top(75.4), f'No. {cert_no}')
        c.restoreState()

    # ── Body ─────────────────────────────────────────────────────────

    def _draw_body(self):
        c = self.c
        center_x = (self.CONTENT_LEFT + self.CONTENT_RIGHT) / 2
        std_info = self._get_standard_info()

        # 3c: SI CERTIFICA... - Light 11 - baseline Y 84.3mm
        cert_text = std_info['cert_text']
        c.saveState()
        c.setFillColor(self.BLACK)
        cert_font_size = 11
        while c.stringWidth(cert_text, self.F_LIGHT, cert_font_size) > self.CONTENT_WIDTH and cert_font_size > 7:
            cert_font_size -= 0.5
        c.setFont(self.F_LIGHT, cert_font_size)
        c.drawCentredString(center_x, self._y_from_top(84.3), cert_text)
        c.restoreState()

        # 3d/3e: Company name - SemiBold 33 - first line baseline Y 101.9mm
        c.saveState()
        c.setFillColor(self.BLACK)
        company = (self.certificate.company_name or '').upper()
        font_size = 33
        while c.stringWidth(company, self.F_SEMIBOLD, font_size) > self.CONTENT_WIDTH and font_size > 16:
            font_size -= 1
        c.setFont(self.F_SEMIBOLD, font_size)
        if c.stringWidth(company, self.F_SEMIBOLD, font_size) > self.CONTENT_WIDTH:
            self._draw_wrapped_text(center_x, self._y_from_top(101.9), company,
                                    self.F_SEMIBOLD, font_size,
                                    self.CONTENT_WIDTH, centered=True)
        else:
            c.drawCentredString(center_x, self._y_from_top(101.9), company)
        c.restoreState()

        # 3f/3g: Address - Regular 10 - baseline Y 127.3mm (wraps naturally)
        # When the cert has multiple sites, list each one; otherwise use the main address.
        addr_lines = self._build_address_lines()
        if addr_lines:
            c.saveState()
            c.setFillColor(self.BLACK)
            addr_font = 10
            longest = max(addr_lines, key=lambda s: c.stringWidth(s, self.F_REGULAR, addr_font))
            while c.stringWidth(longest, self.F_REGULAR, addr_font) > self.CONTENT_WIDTH and addr_font > 7:
                addr_font -= 0.5
            c.setFont(self.F_REGULAR, addr_font)
            line_y = self._y_from_top(127.3)
            line_height = addr_font + 3
            for line in addr_lines:
                if c.stringWidth(line, self.F_REGULAR, addr_font) > self.CONTENT_WIDTH:
                    line_y = self._draw_wrapped_text(center_x, line_y, line,
                                                    self.F_REGULAR, addr_font,
                                                    self.CONTENT_WIDTH, centered=True)
                else:
                    c.drawCentredString(center_x, line_y, line)
                    line_y -= line_height
            c.restoreState()

        # 3h: È conforme... - Light 11 - baseline Y 143.3mm
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont(self.F_LIGHT, 11)
        c.drawCentredString(center_x, self._y_from_top(143.3), self.texts['compliance_text'])
        c.restoreState()

        # 3i: ISO standard heading - SemiBold 28 - baseline Y 159.9mm
        c.saveState()
        c.setFillColor(self.BLACK)
        standard_display = self.certificate.get_standard_display()
        std_font = 28
        while c.stringWidth(standard_display, self.F_SEMIBOLD, std_font) > self.CONTENT_WIDTH and std_font > 16:
            std_font -= 1
        c.setFont(self.F_SEMIBOLD, std_font)
        c.drawCentredString(center_x, self._y_from_top(159.9), standard_display)
        c.restoreState()

        # 3j: Per il seguente... - Light 10 - baseline Y 173.1mm
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont(self.F_LIGHT, 10)
        c.drawCentredString(center_x, self._y_from_top(173.1), self.texts['activities_text'])
        c.restoreState()

        # 3k: Codice EA/IAF - Regular 9 - baseline Y 180.3mm
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont(self.F_REGULAR, 9)
        iaf_code = self.certificate.iaf_code or ''
        if iaf_code:
            c.drawCentredString(center_x, self._y_from_top(180.3),
                                f'{self.texts["iaf_label"]}: {iaf_code}')
        c.restoreState()

        # 3l: Scope - Medium 13.5 - baseline Y 199.5mm
        c.saveState()
        c.setFillColor(self.BLACK)
        scope = (self.certificate.scope_activity or '').upper()
        if not scope:
            c.restoreState()
            return
        scope_font = 13.5
        scope_max_width = self.CONTENT_WIDTH - 20
        if c.stringWidth(scope, self.F_MEDIUM, scope_font) > scope_max_width * 3:
            scope_font = 11
        elif c.stringWidth(scope, self.F_MEDIUM, scope_font) > scope_max_width * 2:
            scope_font = 12
        c.setFont(self.F_MEDIUM, scope_font)
        self._draw_wrapped_text(center_x, self._y_from_top(199.5), scope,
                                self.F_MEDIUM, scope_font,
                                scope_max_width, centered=True)
        c.restoreState()

    # ── 12. Dates: Regular 10 ────────────────────────────────────────

    def _draw_dates(self):
        c = self.c
        # Spec #4 column centers: 56.2, 111.9, 172.4 mm from left
        y = self._y_from_top(224.7)

        col_positions = [
            (56.2 * mm, self.texts['first_issue'],
             self._format_date(self.certificate.first_issue_date)),
            (111.9 * mm, self.texts['modification_date'],
             self._format_date(getattr(self.certificate, 'modification_date', None))),
            (172.4 * mm, self.texts['expiry_date'],
             self._format_date(self.certificate.expiry_date)),
        ]

        for col_x, label, value in col_positions:
            # Label: Regular 10 with underline
            c.saveState()
            c.setFillColor(self.BLACK)
            c.setFont(self.F_REGULAR, 10)
            label_width = c.stringWidth(label, self.F_REGULAR, 10)
            c.drawCentredString(col_x, y, label)
            # Underline the label
            c.setStrokeColor(self.BLACK)
            c.setLineWidth(0.4)
            c.line(col_x - label_width / 2, y - 2, col_x + label_width / 2, y - 2)
            c.restoreState()

            # Value: Regular 10 with underline
            c.saveState()
            c.setFillColor(self.BLACK)
            c.setFont(self.F_REGULAR, 10)
            value_width = c.stringWidth(value, self.F_REGULAR, 10)
            c.drawCentredString(col_x, y - 16, value)
            c.setStrokeColor(self.BLACK)
            c.setLineWidth(0.4)
            c.line(col_x - value_width / 2, y - 18, col_x + value_width / 2, y - 18)
            c.restoreState()

    # ── 13. Signature: Light & Regular 9 ─────────────────────────────

    def _draw_signature(self):
        c = self.c
        center_x = (self.CONTENT_LEFT + self.CONTENT_RIGHT) / 2
        # Spec #5: signature line at Y 252mm; Amministratore baseline Y 255.7mm
        line_y = self._y_from_top(252.0)

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

        # Spec #13: Light 9 for title, Regular 9 for org name
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont(self.F_LIGHT, 9)
        c.drawCentredString(center_x, line_y - 8, self.texts['admin_title'])
        c.restoreState()

        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont(self.F_REGULAR, 9)
        c.drawCentredString(center_x, line_y - 20, 'MSC CERTIFICATIONS')
        c.restoreState()

    # ── 14. Footer: ExtraLight 6 ─────────────────────────────────────

    def _draw_footer(self):
        c = self.c
        std_info = self._get_standard_info()
        management_system = std_info['management_system']
        center_x = (self.CONTENT_LEFT + self.CONTENT_RIGHT) / 2

        qr_size = 65
        badge_size = 22 * mm
        bottom = self.FOOTER_BOTTOM

        # QR Code (left) - spec 6a: X left 30.1mm
        self._draw_qr_code(30.1 * mm, bottom)

        # Approved badge (right) - spec 6c: X left 177.8mm, Y bottom 7.3mm from bottom
        self._draw_approved_badge(177.8 * mm, self._y_from_top(289.7))

        # Text between QR and badge - Spec #14: ExtraLight 6
        text_left = self.CONTENT_LEFT + qr_size + 18
        text_right = self.CONTENT_RIGHT - badge_size - 12
        text_center_x = (text_left + text_right) / 2
        text_max_width = text_right - text_left

        c.saveState()
        c.setFillColor(self.BLACK)

        disclaimer_text = self.texts['disclaimer'].format(management_system=management_system)

        text_y = bottom + qr_size - 8
        c.setFont(self.F_EXTRALIGHT, 6)
        text_y = self._draw_wrapped_text(
            text_center_x, text_y, disclaimer_text,
            self.F_EXTRALIGHT, 6, text_max_width, centered=True
        )

        text_y -= 3
        c.setFont(self.F_REGULAR, 6)
        c.drawCentredString(text_center_x, text_y,
                            'MSC CERTIFICATIONS Assessment & Certification')

        text_y -= 8
        c.setFont(self.F_EXTRALIGHT, 6)
        c.drawCentredString(text_center_x, text_y, self.texts['footer_address'])

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
            c.setFont(self.F_REGULAR, 6)
            c.drawCentredString(x + qr_size / 2, y - 9, 'CHECK CERT')
            c.restoreState()
        except Exception:
            pass

    def _draw_approved_badge(self, x, y):
        # The V-box image is part of the background; only overlay the
        # dynamic ISO standard + APPROVED text below it.
        c = self.c
        badge_w = 22 * mm
        c.saveState()
        c.setFillColor(self.BLACK)
        badge_cx = x + badge_w / 2
        c.setFont(self.F_REGULAR, 6)
        c.drawCentredString(badge_cx, y - 4, self.certificate.get_standard_display())
        c.setFont(self.F_REGULAR, 5.5)
        c.drawCentredString(badge_cx, y - 11, 'APPROVED')
        c.restoreState()

    # ── Utilities ────────────────────────────────────────────────────

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
            return '\u2014'
        return date_val.strftime('%d/%m/%Y')
