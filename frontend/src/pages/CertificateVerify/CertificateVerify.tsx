import { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { certificateService, PublicCertificate } from '../../services/api';
import './CertificateVerify.css';

const CertificateVerify: FC = () => {
  const { secureId } = useParams<{ secureId: string }>();
  const navigate = useNavigate();
  const [certificate, setCertificate] = useState<PublicCertificate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (secureId) {
      loadCertificate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secureId]);

  const loadCertificate = async (): Promise<void> => {
    if (!secureId) return;

    try {
      setLoading(true);
      setError(null);
      const data = await certificateService.verifyCertificate(secureId);
      setCertificate(data);
    } catch (err) {
      console.error('Error loading certificate:', err);
      setError('Certificate not found or invalid verification link.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusClass = (status: string): string => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('valid') || statusLower.includes('active')) {
      return 'status-badge status-valid';
    } else if (statusLower.includes('expired')) {
      return 'status-badge status-expired';
    } else if (statusLower.includes('suspended')) {
      return 'status-badge status-suspended';
    } else if (statusLower.includes('withdrawn')) {
      return 'status-badge status-withdrawn';
    }
    return 'status-badge';
  };

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="verify-container">
        <div className="verify-loading">
          <div className="loading-spinner"></div>
          <p>Verifying certificate...</p>
        </div>
      </div>
    );
  }

  if (error || !certificate) {
    return (
      <div className="verify-container">
        <div className="verify-error">
          <div className="error-icon">!</div>
          <h2>Certificate Not Found</h2>
          <p>{error || 'The certificate you are looking for could not be found.'}</p>
          <p className="error-hint">Please check the URL or scan the QR code again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="verify-container">
      <div className="verify-card">
        {/* Header with verification badge */}
        <div className="verify-header">
          <div className="verify-badge">
            <span className="verify-icon">{certificate.is_valid ? '✓' : '!'}</span>
            <span className="verify-text">
              {certificate.is_valid ? 'Verified Certificate' : 'Certificate Status'}
            </span>
          </div>
        </div>

        {/* Certificate Status */}
        <div className="certificate-status-section">
          <span className={getStatusClass(certificate.status)}>
            {certificate.status}
          </span>
        </div>

        {/* Main Certificate Info */}
        <div className="certificate-main-info">
          <h1 className="certificate-number">{certificate.certificate_number}</h1>
          <h2 className="company-name">{certificate.company_name}</h2>
        </div>

        {/* Certificate Details */}
        <div className="certificate-details">
          <div className="detail-row">
            <span className="detail-label">Standard</span>
            <span className="detail-value">{certificate.standard}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">IAF Code</span>
            <span className="detail-value">{certificate.iaf_code}</span>
          </div>

          <div className="detail-row full-width">
            <span className="detail-label">Scope of Certification</span>
            <span className="detail-value scope">{certificate.scope_activity}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">First Issue Date</span>
            <span className="detail-value">{formatDate(certificate.first_issue_date)}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Expiry Date</span>
            <span className="detail-value">{formatDate(certificate.expiry_date)}</span>
          </div>
        </div>

        {/* Sites Section */}
        {certificate.sites && certificate.sites.length > 0 && (
          <div className="sites-section">
            <h3>Certified Sites ({certificate.sites.length})</h3>
            <div className="sites-list">
              {certificate.sites.map((site) => (
                <div key={site.id} className="site-item">
                  <div className="site-header">
                    <span className="site-number">Site {site.site_number}</span>
                    <span className="site-name">{site.name}</span>
                  </div>
                  <div className="site-scope">{site.scope_activity}</div>
                  <div className="site-address">{site.address}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="verify-footer">
          <p className="issuer">Issued by MSC Certification</p>
          <p className="verification-note">
            This certificate can be verified at any time by scanning the QR code or visiting this URL.
          </p>
          <button
            className="home-button"
            onClick={() => navigate('/')}
          >
            Go To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateVerify;