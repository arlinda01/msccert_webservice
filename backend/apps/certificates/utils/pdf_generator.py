"""
PDF Generation Service for Certificates

This module handles the generation of PDF documents for certificates,
separating business logic from view code.
"""

from django.http import HttpResponse
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
import os


class CertificatePDFGenerator:
    """
    Service class for generating certificate PDFs
    """

    # PDF Styling Constants
    TITLE_FONT_SIZE = 24
    CERT_NUM_FONT_SIZE = 16
    DETAIL_FONT_SIZE = 11
    QR_TITLE_FONT_SIZE = 14

    # Colors
    COLOR_PRIMARY = '#2c3e50'
    COLOR_SECONDARY = '#3498db'
    COLOR_BACKGROUND = '#ecf0f1'
    COLOR_BORDER = '#bdc3c7'

    # Sizes
    COLUMN_WIDTH_LABEL = 2 * inch
    COLUMN_WIDTH_VALUE = 4.5 * inch
    QR_CODE_SIZE = 2 * inch
    SPACER_SMALL = 0.2 * inch
    SPACER_MEDIUM = 0.3 * inch
    SPACER_LARGE = 0.5 * inch

    def __init__(self, certificate):
        """
        Initialize PDF generator with a certificate instance

        Args:
            certificate: Certificate model instance
        """
        self.certificate = certificate

    def generate(self):
        """
        Generate and return PDF as HttpResponse

        Returns:
            HttpResponse with PDF content
        """
        # Create PDF response
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = (
            f'attachment; filename="certificate_{self.certificate.certificate_number}.pdf"'
        )

        # Create PDF document
        doc = SimpleDocTemplate(response, pagesize=A4)
        elements = []

        # Build PDF elements
        elements.extend(self._build_header())
        elements.extend(self._build_details_table())
        elements.extend(self._build_qr_section())

        # Build PDF
        doc.build(elements)
        return response

    def _build_header(self):
        """
        Build PDF header with title and certificate number

        Returns:
            List of PDF elements
        """
        elements = []
        styles = getSampleStyleSheet()

        # Title
        title_style = ParagraphStyle(
            'CustomTitle',
            parent=styles['Heading1'],
            fontSize=self.TITLE_FONT_SIZE,
            textColor=colors.HexColor(self.COLOR_PRIMARY),
            alignment=TA_CENTER,
            spaceAfter=30,
        )
        elements.append(Paragraph("ISO CERTIFICATE", title_style))
        elements.append(Spacer(1, self.SPACER_MEDIUM))

        # Certificate Number
        cert_num_style = ParagraphStyle(
            'CertNumber',
            parent=styles['Heading2'],
            fontSize=self.CERT_NUM_FONT_SIZE,
            textColor=colors.HexColor(self.COLOR_SECONDARY),
            alignment=TA_CENTER,
        )
        elements.append(
            Paragraph(f"Certificate No: {self.certificate.certificate_number}", cert_num_style)
        )
        elements.append(Spacer(1, self.SPACER_MEDIUM))

        return elements

    def _build_details_table(self):
        """
        Build certificate details table

        Returns:
            List of PDF elements
        """
        elements = []

        # Certificate details data
        data = [
            ['Company Name:', self.certificate.company_name],
            ['Standard:', self.certificate.get_standard_display()],
            ['Status:', self.certificate.get_status_display()],
            ['IAF Code:', self.certificate.iaf_code],
            ['First Issue Date:', str(self.certificate.first_issue_date)],
            ['Expiry Date:', str(self.certificate.expiry_date)],
            ['Next Maintenance:', str(self.certificate.next_maintenance_date)],
            ['Scope/Activity:', self.certificate.scope_activity],
        ]

        # Create table
        table = Table(data, colWidths=[self.COLUMN_WIDTH_LABEL, self.COLUMN_WIDTH_VALUE])
        table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (0, -1), colors.HexColor(self.COLOR_BACKGROUND)),
            ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor(self.COLOR_PRIMARY)),
            ('ALIGN', (0, 0), (0, -1), 'LEFT'),
            ('ALIGN', (1, 0), (1, -1), 'LEFT'),
            ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
            ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
            ('FONTSIZE', (0, 0), (-1, -1), self.DETAIL_FONT_SIZE),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
            ('TOPPADDING', (0, 0), (-1, -1), 12),
            ('GRID', (0, 0), (-1, -1), 1, colors.HexColor(self.COLOR_BORDER)),
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ]))

        elements.append(table)
        elements.append(Spacer(1, self.SPACER_LARGE))

        return elements

    def _build_qr_section(self):
        """
        Build QR code section

        Returns:
            List of PDF elements
        """
        elements = []
        styles = getSampleStyleSheet()

        # Check if QR code exists
        if not self.certificate.qr_code:
            return elements

        # QR Code Title
        qr_title_style = ParagraphStyle(
            'QRTitle',
            parent=styles['Heading3'],
            fontSize=self.QR_TITLE_FONT_SIZE,
            textColor=colors.HexColor(self.COLOR_PRIMARY),
            alignment=TA_CENTER,
        )
        elements.append(Paragraph("Scan for Live Status", qr_title_style))
        elements.append(Spacer(1, self.SPACER_SMALL))

        # QR Code Image
        qr_path = self.certificate.qr_code.path
        if os.path.exists(qr_path):
            try:
                qr_img = Image(qr_path, width=self.QR_CODE_SIZE, height=self.QR_CODE_SIZE)
                qr_img.hAlign = 'CENTER'
                elements.append(qr_img)
            except Exception as e:
                # Log error but don't fail PDF generation
                print(f"Error adding QR code to PDF: {e}")

        return elements