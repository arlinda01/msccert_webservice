"""
PDF Generation Service for Certificates

Generates professionally designed A4 certificate PDFs using ReportLab's
canvas API for pixel-precise positioning matching the MSC certificate template.
"""

from django.http import HttpResponse
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from io import BytesIO
import os


# ISO standard to Albanian management system description mapping
STANDARD_DESCRIPTIONS = {
    'ISO_9001_2015': {
        'code': 'Q',
        'management_system': 'Sistemeve të Menaxhimit të Cilësisë',
        'cert_text': 'CERTIFIKOHET SE SISTEMI I MENAXHIMIT TË CILËSISË I KOMPANISË',
    },
    'ISO_14001_2015': {
        'code': 'E',
        'management_system': 'Sistemeve të Menaxhimit të Mjedisit',
        'cert_text': 'CERTIFIKOHET SE SISTEMI I MENAXHIMIT TË MJEDISIT I KOMPANISË',
    },
    'ISO_45001_2023': {
        'code': 'OHS',
        'management_system': 'Sistemeve të Menaxhimit të Sigurisë dhe Shëndetit në Punë',
        'cert_text': 'CERTIFIKOHET SE SISTEMI I MENAXHIMIT TË SIGURISË DHE SHËNDETIT NË PUNË I KOMPANISË',
    },
    'ISO_22000_2018': {
        'code': 'FS',
        'management_system': 'Sistemeve të Menaxhimit të Sigurisë Ushqimore',
        'cert_text': 'CERTIFIKOHET SE SISTEMI I MENAXHIMIT TË SIGURISË USHQIMORE I KOMPANISË',
    },
    'ISO_27001_2022': {
        'code': 'IS',
        'management_system': 'Sistemeve të Menaxhimit të Sigurisë së Informacionit',
        'cert_text': 'CERTIFIKOHET SE SISTEMI I MENAXHIMIT TË SIGURISË SË INFORMACIONIT I KOMPANISË',
    },
    'ISO_50001_2018': {
        'code': 'En',
        'management_system': 'Sistemeve të Menaxhimit të Energjisë',
        'cert_text': 'CERTIFIKOHET SE SISTEMI I MENAXHIMIT TË ENERGJISË I KOMPANISË',
    },
    'ISO_37001_2025': {
        'code': 'AB',
        'management_system': 'Sistemeve të Menaxhimit Kundër Ryshfetit',
        'cert_text': 'CERTIFIKOHET SE SISTEMI I MENAXHIMIT KUNDËR RYSHFETIT I KOMPANISË',
    },
    'ISO_39001_2012': {
        'code': 'RT',
        'management_system': 'Sistemeve të Menaxhimit të Sigurisë në Trafikun Rrugor',
        'cert_text': 'CERTIFIKOHET SE SISTEMI I MENAXHIMIT TË SIGURISË NË TRAFIKUN RRUGOR I KOMPANISË',
    },
    'ISO_22301_2019': {
        'code': 'BC',
        'management_system': 'Sistemeve të Menaxhimit të Vazhdimësisë së Biznesit',
        'cert_text': 'CERTIFIKOHET SE SISTEMI I MENAXHIMIT TË VAZHDIMËSISË SË BIZNESIT I KOMPANISË',
    },
    'HACCP': {
        'code': 'FS',
        'management_system': 'Sistemeve HACCP',
        'cert_text': 'CERTIFIKOHET SE SISTEMI HACCP I KOMPANISË',
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

    def __init__(self, certificate):
        self.certificate = certificate
        self.c = None

    def generate(self):
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = (
            f'attachment; filename="certificate_{self.certificate.certificate_number}.pdf"'
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
        return STANDARD_DESCRIPTIONS.get(self.certificate.standard, {
            'code': '',
            'management_system': 'Sistemeve të Menaxhimit',
            'cert_text': 'CERTIFIKOHET SE SISTEMI I MENAXHIMIT I KOMPANISË',
        })

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
        y = self.PAGE_HEIGHT - 180

        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica-Bold', 36)
        self._draw_spaced_text(center_x, y, 'CERTIFIKATË', spacing=5, centered=True)
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

        y = self.PAGE_HEIGHT - 260

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
        y -= 48
        c.saveState()
        c.setFillColor(self.BLACK)
        company = self.certificate.company_name.upper()
        font_size = 30
        while c.stringWidth(company, 'Helvetica-Bold', font_size) > self.CONTENT_WIDTH and font_size > 14:
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
            addr_text = f'Adresa: {address}'
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
        c.drawCentredString(center_x, y, 'Është në përputhje me standardin')
        c.restoreState()

        # Standard name - large bold
        y -= 35
        c.saveState()
        c.setFillColor(self.BLACK)
        standard_display = self.certificate.get_standard_display()
        std_font = 24
        while c.stringWidth(standard_display, 'Helvetica-Bold', std_font) > self.CONTENT_WIDTH and std_font > 14:
            std_font -= 1
        c.setFont('Helvetica-Bold', std_font)
        c.drawCentredString(center_x, y, standard_display)
        c.restoreState()

        # "Për aktivitetet e mëposhtme:"
        y -= 32
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica', 10.5)
        c.drawCentredString(center_x, y, 'Për aktivitetet e mëposhtme:')
        c.restoreState()

        # IAF Code
        y -= 20
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica', 10)
        c.drawCentredString(center_x, y, f'Kodi EA/IAF: {self.certificate.iaf_code}')
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
        y = self.PAGE_HEIGHT - 620

        col_positions = [
            (self.PAGE_WIDTH * 0.22, 'Emetimi i Parë',
             self._format_date(self.certificate.first_issue_date)),
            (self.PAGE_WIDTH * 0.50, 'Data e Modifikimit',
             self._format_date(getattr(self.certificate, 'modification_date', None))),
            (self.PAGE_WIDTH * 0.78, 'Data e Skadencës',
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
        y = self.PAGE_HEIGHT - 680

        # Try model signature first, then fall back to static file
        sig_drawn = False
        if self.certificate.signature:
            try:
                sig_path = self.certificate.signature.path
                if os.path.exists(sig_path):
                    c.drawImage(sig_path, center_x - 50, y, width=100, height=40,
                                preserveAspectRatio=True, mask='auto')
                    sig_drawn = True
            except Exception:
                pass

        if not sig_drawn:
            sig_path = os.path.join(self.ASSETS_DIR, 'signature.png')
            if os.path.exists(sig_path):
                try:
                    c.drawImage(sig_path, center_x - 50, y, width=100, height=40,
                                preserveAspectRatio=True, mask='auto')
                except Exception:
                    pass

        # Line under signature
        c.saveState()
        c.setStrokeColor(self.BLACK)
        c.setLineWidth(0.5)
        c.line(center_x - 55, y - 3, center_x + 55, y - 3)
        c.restoreState()

        # "Drejtues Ekzekutiv"
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica-Bold', 9)
        c.drawCentredString(center_x, y - 16, 'Drejtues Ekzekutiv')
        c.restoreState()

        # "MSC CERTIFICATIONS"
        c.saveState()
        c.setFillColor(self.BLACK)
        c.setFont('Helvetica', 8)
        c.drawCentredString(center_x, y - 28, 'MSC CERTIFICATIONS')
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

        disclaimer_text = (
            f'Vlefshmëria e kësaj certifikate është subjekt i mbikëqyrjeve vjetore dhe rishikimi të plotë të '
            f'{management_system} çdo tre vjet. Vlefshmëria e kësaj certifikate është në përputhje '
            f'me respektimin e rregullave të përcaktuara nga sistemet e MSC CERTIFICATIONS.'
        )

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
