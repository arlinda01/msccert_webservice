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
            <h3>Sample Company Ltd.</h3>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <span className="status-badge status-valid">
              Valid/Active
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
                Quality management systems for manufacturing and distribution of industrial equipment
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
              <span className="detail-value">January 15, 2023</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Expiry Date</span>
              <span className="detail-value" style={{ color: '#4caf50' }}>
                January 15, 2026 (365 days left)
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Next Maintenance</span>
              <span className="detail-value" style={{ color: '#4caf50' }}>
                January 15, 2025
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Last Maintenance</span>
              <span className="detail-value">January 15, 2024</span>
            </div>
          </div>
        </div>

        {/* Sites */}
        <div className="detail-section">
          <h4>Certificate Sites (2)</h4>
          <div className="sites-list">
            <div className="site-card">
              <div className="site-header">
                Site 1: Main Manufacturing Facility
              </div>
              <div style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Manufacturing of industrial equipment and quality control
              </div>
              <div style={{ color: '#888', fontSize: '0.85rem' }}>
                123 Industrial Park, Manufacturing District, City, Country
              </div>
            </div>
            <div className="site-card">
              <div className="site-header">
                Site 2: Distribution Center
              </div>
              <div style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Storage and distribution of finished products
              </div>
              <div style={{ color: '#888', fontSize: '0.85rem' }}>
                456 Logistics Avenue, Distribution Zone, City, Country
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="certificate-cta">
          <h3>Looking to Get Certified?</h3>
          <p>
            Are you looking to get certified, or do you need an online assessment?
            Reach out to us and let us help you achieve your certification goals!
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