import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './StaticCertificate.css';

const StaticCertificate: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>

      <div className="certificate-detail">
        {/* Header */}
        <div className="detail-header">
          <div>
            <h2>CERT-2025-A1B2C3D4</h2>
            <h3>KOMMMPANII</h3>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <span className="status-badge status-expired">
              Expired
            </span>
          </div>
        </div>

        {/* Basic Information */}
        <div className="detail-section">
          <h4>Certificate Information</h4>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Standard</span>
              <span className="detail-value">ISO 9001:2015</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">IAF Code</span>
              <span className="detail-value">28</span>
            </div>
            <div className="detail-item detail-full">
              <span className="detail-label">Scope / Activity</span>
              <span className="detail-value">
                Prodhimi dhe shpërndarja e pajisjeve industriale
              </span>
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="detail-section">
          <h4>Important Dates</h4>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">First Issue Date</span>
              <span className="detail-value">15 Janar 2023</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Expiry Date</span>
              <span className="detail-value" style={{ color: '#4caf50' }}>
                15 Janar 2026
              </span>
            </div>
          </div>
        </div>

        {/* Sites */}
        <div className="detail-section">
          <h4>Certificate Sites (2)</h4>
          <div className="sites-list">
            <div className="site-card">
              <div className="site-header">
                Site 1: Fabrika Kryesore
              </div>
              <div style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Prodhimi i pajisjeve industriale dhe kontrolli i cilësisë
              </div>
              <div style={{ color: '#888', fontSize: '0.85rem' }}>
                Rr. Taulantia, Durrës
              </div>
            </div>
            <div className="site-card">
              <div className="site-header">
                Site 2: Qendra e Shpërndarjes
              </div>
              <div style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Ruajtja dhe shpërndarja e produkteve të gatshme
              </div>
              <div style={{ color: '#888', fontSize: '0.85rem' }}>
                Rr. Mark, Tiranë
              </div>
            </div>
          </div>
        </div>

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

export default StaticCertificate;