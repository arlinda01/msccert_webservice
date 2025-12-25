import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { certificateService } from '../../services/api';
import type { Certificate, CertificateStatus } from '../../types';

const CertificateList: FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadCertificates();
  }, []);

  const loadCertificates = async (): Promise<void> => {
    try {
      const data = await certificateService.getAllCertificates();
      if (Array.isArray(data)) {
        setCertificates(data);
      } else {
        setCertificates(data.results || []);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error loading certificates:', error);
      setLoading(false);
    }
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

  const handleCardClick = (id: string | number): void => {
    navigate(`/certificate/${id}`);
  };

  const getDaysColor = (days: number): string => {
    if (days < 30) return '#f44336';
    if (days < 90) return '#ff9800';
    return '#4caf50';
  };

  if (loading) {
    return <div className="loading">Loading certificates...</div>;
  }

  return (
    <div className="container">
      <h1 style={{ color: '#ffffff', marginBottom: '1rem' }}>
        ISO Certificates ({certificates.length})
      </h1>

      {certificates.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
          <p>No certificates found.</p>
        </div>
      ) : (
        <div className="certificate-list">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card"
              onClick={() => handleCardClick(cert.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleCardClick(cert.id)}
            >
              <div className="certificate-number">{cert.certificate_number}</div>
              <div className="certificate-company">{cert.company_name}</div>

              <div style={{ marginBottom: '1rem' }}>
                <span className={getStatusClass(cert.status)}>
                  {cert.status_display}
                </span>
              </div>

              <div className="certificate-info">
                <div className="info-row">
                  <span className="info-label">Standard:</span>
                  <span className="info-value">{cert.standard_display}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Issued:</span>
                  <span className="info-value">{cert.first_issue_date}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Expires:</span>
                  <span className="info-value">{cert.expiry_date}</span>
                </div>
                {cert.days_until_expiry !== null && (
                  <div className="info-row">
                    <span className="info-label">Days until expiry:</span>
                    <span
                      className="info-value"
                      style={{ color: getDaysColor(cert.days_until_expiry) }}
                    >
                      {cert.days_until_expiry} days
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertificateList;
