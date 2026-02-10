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


class CertificatePDFGenerator:
    """
    Service class for generating certificate PDFs matching the MSC template.
    Uses ReportLab canvas API for precise layout control.
    """

    # Page dimensions (A4)
    PAGE_WIDTH, PAGE_HEIGHT = A4  # 595.27 x 841.89 points

    # Colors
    BRAND_TEAL = colors.HexColor('#01434f')
    ACCENT_CYAN = colors.HexColor('#2abad4')
    TEXT_DARK = colors.HexColor('#1a1a1a')
    TEXT_GRAY = colors.HexColor('#666666')
    WHITE = colors.white

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

    def _draw_page(self):
        """Draw the complete certificate page."""
        self._draw_decorative_stripe()
        self._draw_header()
        self._draw_title()
        self._draw_body()
        self._draw_dates()
        self._draw_signature()
        self._draw_footer()

    # ── Decorative elements ──────────────────────────────────────────

    def _draw_decorative_stripe(self):
        """Draw the teal diagonal stripe on the left edge."""
        c = self.c
        c.saveState()
        c.setFillColor(self.BRAND_TEAL)
        # Left edge decorative stripe - diagonal parallelogram
        path = c.beginPath()
        path.moveTo(0, self.PAGE_HEIGHT)
        path.lineTo(28, self.PAGE_HEIGHT)
        path.lineTo(28, 0)
        path.lineTo(0, 0)
        path.close()
        c.drawPath(path, fill=1, stroke=0)

        # Accent cyan thin stripe
        c.setFillColor(self.ACCENT_CYAN)
        path2 = c.beginPath()
        path2.moveTo(28, self.PAGE_HEIGHT)
        path2.lineTo(32, self.PAGE_HEIGHT)
        path2.lineTo(32, 0)
        path2.lineTo(28, 0)
        path2.close()
        c.drawPath(path2, fill=1, stroke=0)
        c.restoreState()

    # ── Header section (logos) ───────────────────────────────────────

    def _draw_header(self):
        """Draw the header with MSC logo on left and accreditation badges on right."""
        c = self.c
        y_top = self.PAGE_HEIGHT - 55

        # MSC Logo (left side) - draw as text since SVG conversion not available
        self._draw_msc_logo(50, y_top)

        # Right side: DA badge + IAF logo + accreditation text
        self._draw_accreditation_badges(y_top)

    def _draw_msc_logo(self, x, y):
        """Draw the MSC logo. Uses image if available, otherwise draws text."""
        c = self.c
        logo_path = os.path.join(self.ASSETS_DIR, 'msc_logo.png')

        if os.path.exists(logo_path):
            try:
                c.drawImage(logo_path, x, y - 35, width=120, height=40,
                            preserveAspectRatio=True, mask='auto')
                return
            except Exception:
                pass

        # Fallback: Draw MSC logo as styled text
        c.saveState()
        # "MSC" in accent cyan
        c.setFillColor(self.ACCENT_CYAN)
        c.setFont('Helvetica-Bold', 28)
        c.drawString(x, y - 25, 'MSC')

        # "CERTIFICATIONS" in brand teal
        c.setFillColor(self.BRAND_TEAL)
        c.setFont('Helvetica', 8)
        c.drawString(x, y - 37, 'CERTIFICATIONS')
        c.restoreState()

    def _draw_accreditation_badges(self, y_top):
        """Draw DA badge and IAF logo on the right side of the header."""
        c = self.c
        right_x = self.PAGE_WIDTH - 60

        # DA badge
        da_path = os.path.join(self.ASSETS_DIR, 'da_badge.png')
        if os.path.exists(da_path):
            try:
                c.drawImage(da_path, right_x - 120, y_top - 40, width=55, height=32,
                            preserveAspectRatio=True, mask='auto')
            except Exception:
                pass

        # IAF logo
        iaf_path = os.path.join(self.ASSETS_DIR, 'iaf_logo.png')
        if os.path.exists(iaf_path):
            try:
                c.drawImage(iaf_path, right_x - 55, y_top - 40, width=55, height=32,
                            preserveAspectRatio=True, mask='auto')
            except Exception:
                pass

        # Accreditation number text
        c.saveState()
        c.setFillColor(self.TEXT_GRAY)
        c.setFont('Helvetica', 7)
        c.drawRightString(right_x, y_top - 50, 'CS 017 18.11.24')
        c.restoreState()

    # ── Title section ────────────────────────────────────────────────

    def _draw_title(self):
        """Draw the CERTIFIKATË title and certificate number."""
        c = self.c
        center_x = self.PAGE_WIDTH / 2
        y = self.PAGE_HEIGHT - 130

        # Decorative line above title
        c.saveState()
        c.setStrokeColor(self.ACCENT_CYAN)
        c.setLineWidth(1.5)
        c.line(center_x - 120, y + 25, center_x + 120, y + 25)
        c.restoreState()

        # "CERTIFIKATË" - large, letter-spaced
        c.saveState()
        c.setFillColor(self.BRAND_TEAL)
        title = 'CERTIFIKATË'
        # Draw with letter spacing
        c.setFont('Helvetica-Bold', 36)
        self._draw_spaced_text(center_x, y, title, spacing=6, centered=True)
        c.restoreState()

        # Certificate number - italic style
        c.saveState()
        c.setFillColor(self.TEXT_GRAY)
        c.setFont('Helvetica-Oblique', 13)
        cert_num = f'No. {self.certificate.certificate_number}'
        c.drawCentredString(center_x, y - 30, cert_num)
        c.restoreState()

        # Decorative line below cert number
        c.saveState()
        c.setStrokeColor(self.ACCENT_CYAN)
        c.setLineWidth(1.5)
        c.line(center_x - 120, y - 45, center_x + 120, y - 45)
        c.restoreState()

    # ── Body section ─────────────────────────────────────────────────

    def _draw_body(self):
        """Draw the main certificate body text."""
        c = self.c
        center_x = self.PAGE_WIDTH / 2
        y = self.PAGE_HEIGHT - 230

        # "CERTIFIKOHET SE SISTEMI I MANAXHIMIT TË CILËSISË I KOMPANISË"
        c.saveState()
        c.setFillColor(self.TEXT_DARK)
        c.setFont('Helvetica', 10)
        c.drawCentredString(center_x, y,
                            'CERTIFIKOHET SE SISTEMI I MANAXHIMIT TË CILËSISË I KOMPANISË')
        c.restoreState()

        # Company name - large bold
        y -= 40
        c.saveState()
        c.setFillColor(self.BRAND_TEAL)
        c.setFont('Helvetica-Bold', 26)
        company = self.certificate.company_name.upper()
        # Handle long company names by reducing font size
        font_size = 26
        while c.stringWidth(company, 'Helvetica-Bold', font_size) > 450 and font_size > 14:
            font_size -= 1
        c.setFont('Helvetica-Bold', font_size)
        c.drawCentredString(center_x, y, company)
        c.restoreState()

        # Address
        y -= 30
        address = getattr(self.certificate, 'address', '') or ''
        if address:
            c.saveState()
            c.setFillColor(self.TEXT_DARK)
            c.setFont('Helvetica', 11)
            c.drawCentredString(center_x, y, f'Adresa: {address}')
            c.restoreState()

        # "Është në përputhje me standardin"
        y -= 35
        c.saveState()
        c.setFillColor(self.TEXT_DARK)
        c.setFont('Helvetica', 11)
        c.drawCentredString(center_x, y, 'Është në përputhje me standardin')
        c.restoreState()

        # Standard name - large bold teal
        y -= 35
        c.saveState()
        c.setFillColor(self.ACCENT_CYAN)
        c.setFont('Helvetica-Bold', 24)
        standard_display = self.certificate.get_standard_display()
        c.drawCentredString(center_x, y, standard_display)
        c.restoreState()

        # "Për aktivitetet e mëposhtme:"
        y -= 35
        c.saveState()
        c.setFillColor(self.TEXT_DARK)
        c.setFont('Helvetica', 10)
        c.drawCentredString(center_x, y, 'Për aktivitetet e mëposhtme:')
        c.restoreState()

        # IAF Code
        y -= 22
        c.saveState()
        c.setFillColor(self.TEXT_DARK)
        c.setFont('Helvetica', 10)
        c.drawCentredString(center_x, y, f'Kodi EA/IAF: {self.certificate.iaf_code}')
        c.restoreState()

        # Scope activity - CAPS bold
        y -= 30
        c.saveState()
        c.setFillColor(self.BRAND_TEAL)
        c.setFont('Helvetica-Bold', 11)
        scope = self.certificate.scope_activity.upper()
        # Wrap long text
        self._draw_wrapped_text(center_x, y, scope, 'Helvetica-Bold', 11, 440, centered=True)
        c.restoreState()

    # ── Dates section ────────────────────────────────────────────────

    def _draw_dates(self):
        """Draw the three-column date section."""
        c = self.c
        y_label = self.PAGE_HEIGHT - 580
        y_value = y_label - 20

        # Horizontal line above dates
        c.saveState()
        c.setStrokeColor(self.ACCENT_CYAN)
        c.setLineWidth(0.5)
        c.line(70, y_label + 20, self.PAGE_WIDTH - 70, y_label + 20)
        c.restoreState()

        # Three columns
        col_positions = [
            (self.PAGE_WIDTH * 0.22, 'Emetimi i Parë', self._format_date(self.certificate.first_issue_date)),
            (self.PAGE_WIDTH * 0.50, 'Data e Modifikimit', self._format_date(getattr(self.certificate, 'modification_date', None))),
            (self.PAGE_WIDTH * 0.78, 'Data e Skadencës', self._format_date(self.certificate.expiry_date)),
        ]

        for col_x, label, value in col_positions:
            # Label
            c.saveState()
            c.setFillColor(self.TEXT_GRAY)
            c.setFont('Helvetica', 9)
            c.drawCentredString(col_x, y_label, label)
            c.restoreState()

            # Value
            c.saveState()
            c.setFillColor(self.BRAND_TEAL)
            c.setFont('Helvetica-Bold', 11)
            c.drawCentredString(col_x, y_value, value)
            c.restoreState()

        # Horizontal line below dates
        c.saveState()
        c.setStrokeColor(self.ACCENT_CYAN)
        c.setLineWidth(0.5)
        c.line(70, y_value - 15, self.PAGE_WIDTH - 70, y_value - 15)
        c.restoreState()

    # ── Signature section ────────────────────────────────────────────

    def _draw_signature(self):
        """Draw the signature area."""
        c = self.c
        center_x = self.PAGE_WIDTH / 2
        y = self.PAGE_HEIGHT - 650

        # Signature image
        sig_path = os.path.join(self.ASSETS_DIR, 'signature.png')
        if os.path.exists(sig_path):
            try:
                c.drawImage(sig_path, center_x - 50, y, width=100, height=40,
                            preserveAspectRatio=True, mask='auto')
            except Exception:
                pass

        # Line under signature
        c.saveState()
        c.setStrokeColor(self.TEXT_GRAY)
        c.setLineWidth(0.5)
        c.line(center_x - 60, y - 5, center_x + 60, y - 5)
        c.restoreState()

        # "Drejtues Ekzekutiv"
        c.saveState()
        c.setFillColor(self.BRAND_TEAL)
        c.setFont('Helvetica-Bold', 9)
        c.drawCentredString(center_x, y - 18, 'Drejtues Ekzekutiv')
        c.restoreState()

        # "MSC CERTIFICATIONS"
        c.saveState()
        c.setFillColor(self.TEXT_GRAY)
        c.setFont('Helvetica', 8)
        c.drawCentredString(center_x, y - 30, 'MSC CERTIFICATIONS')
        c.restoreState()

    # ── Footer section ───────────────────────────────────────────────

    def _draw_footer(self):
        """Draw the footer with disclaimer, QR code, and approved badge."""
        c = self.c
        y = 120

        # Horizontal separator
        c.saveState()
        c.setStrokeColor(self.ACCENT_CYAN)
        c.setLineWidth(1)
        c.line(40, y + 10, self.PAGE_WIDTH - 40, y + 10)
        c.restoreState()

        # Disclaimer text
        c.saveState()
        c.setFillColor(self.TEXT_GRAY)
        c.setFont('Helvetica', 6.5)
        disclaimer_lines = [
            'Ky certifikatë mbetet pronë e MSC CERTIFICATIONS dhe duhet të kthehet me kërkesë. Përdorimi i kësaj',
            'certifikate i nënshtrohet rregullave dhe kushteve të MSC CERTIFICATIONS. Vlefshmëria e kësaj',
            'certifikate mund të verifikohet përmes skanimit të kodit QR ose duke kontaktuar MSC CERTIFICATIONS.',
        ]
        text_y = y - 5
        for line in disclaimer_lines:
            c.drawCentredString(self.PAGE_WIDTH / 2, text_y, line)
            text_y -= 9
        c.restoreState()

        # Company info
        c.saveState()
        c.setFillColor(self.BRAND_TEAL)
        c.setFont('Helvetica-Bold', 7.5)
        c.drawCentredString(self.PAGE_WIDTH / 2, text_y - 5,
                            'MSC CERTIFICATIONS Assessment & Certification')
        c.setFont('Helvetica', 7)
        c.setFillColor(self.TEXT_GRAY)
        c.drawCentredString(self.PAGE_WIDTH / 2, text_y - 16,
                            'Rr Ismail Qemali, Tiranë, Shqipëri')
        c.drawCentredString(self.PAGE_WIDTH / 2, text_y - 27,
                            'info@msc-cert.com    www.msc-cert.com')
        c.restoreState()

        # QR Code (bottom left)
        self._draw_qr_code(55, 20)

        # Approved badge (bottom right)
        self._draw_approved_badge(self.PAGE_WIDTH - 130, 18)

    def _draw_qr_code(self, x, y):
        """Draw QR code with CHECK CERT label."""
        c = self.c

        if not self.certificate.qr_code:
            return

        qr_path = self.certificate.qr_code.path
        if not os.path.exists(qr_path):
            return

        try:
            qr_size = 70
            c.drawImage(qr_path, x, y, width=qr_size, height=qr_size,
                        preserveAspectRatio=True, mask='auto')

            # "CHECK CERT" label below QR code
            c.saveState()
            c.setFillColor(self.BRAND_TEAL)
            c.setFont('Helvetica-Bold', 7)
            c.drawCentredString(x + qr_size / 2, y - 10, 'CHECK CERT')
            c.restoreState()
        except Exception:
            pass

    def _draw_approved_badge(self, x, y):
        """Draw approved/accreditation badge on bottom right."""
        c = self.c
        badge_path = os.path.join(self.ASSETS_DIR, 'approved_badge.png')

        if os.path.exists(badge_path):
            try:
                c.drawImage(badge_path, x, y, width=75, height=75,
                            preserveAspectRatio=True, mask='auto')
                return
            except Exception:
                pass

        # Fallback: draw a simple accreditation text badge
        c.saveState()
        c.setStrokeColor(self.BRAND_TEAL)
        c.setLineWidth(1)
        badge_cx = x + 37
        badge_cy = y + 37
        c.circle(badge_cx, badge_cy, 30, stroke=1, fill=0)
        c.setFillColor(self.BRAND_TEAL)
        c.setFont('Helvetica-Bold', 6)
        c.drawCentredString(badge_cx, badge_cy + 8, 'APPROVED')
        c.setFont('Helvetica', 5.5)
        standard_short = self.certificate.get_standard_display()
        c.drawCentredString(badge_cx, badge_cy - 2, standard_short)
        c.setFont('Helvetica', 5)
        c.drawCentredString(badge_cx, badge_cy - 12, 'MSC CERT')
        c.restoreState()

    # ── Utility methods ──────────────────────────────────────────────

    def _draw_spaced_text(self, x, y, text, spacing=4, centered=False):
        """Draw text with custom letter spacing."""
        c = self.c
        font_name = c._fontname
        font_size = c._fontsize

        if centered:
            total_width = 0
            for char in text:
                total_width += c.stringWidth(char, font_name, font_size) + spacing
            total_width -= spacing  # Remove last spacing
            x = x - total_width / 2

        for char in text:
            c.drawString(x, y, char)
            x += c.stringWidth(char, font_name, font_size) + spacing

    def _draw_wrapped_text(self, x, y, text, font_name, font_size, max_width, centered=False):
        """Draw text that wraps within max_width."""
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

        for i, line in enumerate(lines):
            line_y = y - (i * (font_size + 4))
            if centered:
                c.drawCentredString(x, line_y, line)
            else:
                c.drawString(x, line_y, line)

    @staticmethod
    def _format_date(date_val):
        """Format a date value for display on the certificate."""
        if date_val is None:
            return '—'
        return date_val.strftime('%d.%m.%Y')
