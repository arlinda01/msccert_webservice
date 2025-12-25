import { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { certificateService } from '../../services/api';
import type { Certificate, CertificateStatus } from '../../types';
import QRCode from 'qrcode';

const CertificateDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    if (id) {
      loadCertificate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const loadCertificate = async (): Promise<void> => {
    if (!id) return;

    try {
      const data = await certificateService.getCertificate(id);
      setCertificate(data);
      setLoading(false);

      // Generate QR code for current page URL
      const currentUrl = window.location.href;
      const qrUrl = await QRCode.toDataURL(currentUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCodeUrl(qrUrl);
    } catch (error) {
      console.error('Error loading certificate:', error);
      setLoading(false);
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement('a');
    link.download = `certificate-${certificate?.certificate_number}-qr.png`;
    link.href = qrCodeUrl;
    link.click();
  };

  const getStatusClass = (status: CertificateStatus): string => {
    const statusMap: Record<CertificateStatus, string> = {
      'VALID': 'status-valid',
      'EXPIRED': 'status-expired',
      'SUSPENDED': 'status-suspended',
      'WITHDRAWN': 'status-withdrawn'
    };
    return `status-badge ${statusMap[status] || ''}`;
  };

  const getExpiryColor = (days: number | null): string => {
    if (days === null) return '#4caf50';
    if (days < 30) return '#f44336';
    if (days < 90) return '#ff9800';
    return '#4caf50';
  };

  if (loading) {
    return <div className="loading">Loading certificate...</div>;
  }

  if (!certificate) {
    return (
      <div className="container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
          Certificate not found
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>

      <div className="certificate-detail">
        {/* Header */}
        <div className="detail-header">
          <div>
            <h1>{certificate.certificate_number}</h1>
            <h2>{certificate.company_name}</h2>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <span className={getStatusClass(certificate.status)}>
              {certificate.status_display}
            </span>
          </div>
        </div>

        {/* Basic Information */}
        <div className="detail-section">
          <h3>Certificate Information</h3>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Standard</span>
              <span className="detail-value">{certificate.standard_display}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">IAF Code</span>
              <span className="detail-value">{certificate.iaf_code}</span>
            </div>
            <div className="detail-item detail-full">
              <span className="detail-label">Scope / Activity</span>
              <span className="detail-value">{certificate.scope_activity}</span>
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="detail-section">
          <h3>Important Dates</h3>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">First Issue Date</span>
              <span className="detail-value">{certificate.first_issue_date}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Expiry Date</span>
              <span
                className="detail-value"
                style={{ color: getExpiryColor(certificate.days_until_expiry) }}
              >
                {certificate.expiry_date}
                {certificate.days_until_expiry !== null &&
                  ` (${certificate.days_until_expiry} days left)`}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Next Maintenance</span>
              <span
                className="detail-value"
                style={{ color: certificate.is_maintenance_due ? '#f44336' : '#4caf50' }}
              >
                {certificate.next_maintenance_date}
                {certificate.is_maintenance_due && ' (OVERDUE)'}
              </span>
            </div>
            {certificate.last_maintenance_date && (
              <div className="detail-item">
                <span className="detail-label">Last Maintenance</span>
                <span className="detail-value">{certificate.last_maintenance_date}</span>
              </div>
            )}
          </div>
        </div>

        {/* Sites */}
        {certificate.sites && certificate.sites.length > 0 && (
          <div className="detail-section">
            <h3>Certificate Sites ({certificate.sites.length})</h3>
            <div className="sites-list">
              {certificate.sites.map((site) => (
                <div key={site.id} className="site-card">
                  <div className="site-header">
                    Site {site.site_number}: {site.name}
                  </div>
                  <div style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {site.scope_activity}
                  </div>
                  <div style={{ color: '#888', fontSize: '0.85rem' }}>
                    {site.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QR Code Section */}
        {qrCodeUrl && (
          <div className="detail-section" style={{ textAlign: 'center' }}>
            <h3>Certificate QR Code</h3>
            <p style={{ color: '#888', marginBottom: '1rem' }}>
              Scan this QR code to view this certificate page
            </p>
            <div style={{
              backgroundColor: '#fff',
              padding: '1.5rem',
              borderRadius: '8px',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              <img src={qrCodeUrl} alt="Certificate QR Code" style={{ display: 'block' }} />
            </div>
            <div>
              <button
                className="cta-button"
                onClick={downloadQRCode}
                style={{ marginBottom: '1rem' }}
              >
                Download QR Code
              </button>
            </div>
            <p style={{ color: '#666', fontSize: '0.85rem' }}>
              URL: {window.location.href}
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="certificate-cta">
          <h3>Looking to Get Certified?</h3>
          <p>
            Are you looking to get certified? Reach out to us and let us help you achieve your certification goals!
          </p>
          <button
            className="cta-button"
            onClick={() => navigate('/#contact')}
          >
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default CertificateDetail;
