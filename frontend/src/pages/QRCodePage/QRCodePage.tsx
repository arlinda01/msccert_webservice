import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode';
import './QRCodePage.css';

const QRCodePage: FC = () => {
  const navigate = useNavigate();
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    generateQRCode();
  }, []);

  const generateQRCode = async () => {
    // Generate QR code for certificate/2 page
    const certificateUrl = `${window.location.origin}/certificate/2`;

    try {
      const qrUrl = await QRCode.toDataURL(certificateUrl, {
        width: 400,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCodeUrl(qrUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement('a');
    link.download = 'certificate-qr-code.png';
    link.href = qrCodeUrl;
    link.click();
  };

  const goToCertificate = () => {
    navigate('/certificate/2');
  };

  return (
    <div className="container">
      <div className="qr-page">
        <h1>Certificate QR Code</h1>
        <p className="subtitle">Scan or download this QR code to access the certificate</p>

        <div className="qr-content">
          {qrCodeUrl ? (
            <>
              <div className="qr-display">
                <img src={qrCodeUrl} alt="Certificate QR Code" />
              </div>

              <div className="qr-info">
                <p className="qr-url">
                  <strong>Certificate URL:</strong><br />
                  {window.location.origin}/certificate/2
                </p>

                <div className="qr-actions">
                  <button
                    className="btn-primary"
                    onClick={downloadQRCode}
                  >
                    Download QR Code
                  </button>
                  <button
                    className="btn-secondary"
                    onClick={goToCertificate}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="loading">Generating QR code...</div>
          )}
        </div>

        <div className="instructions">
          <h3>How to Use</h3>
          <ol>
            <li>Click "Download QR Code" to save the QR code image</li>
            <li>Print the QR code or share it digitally</li>
            <li>When scanned, the QR code will open the certificate page</li>
            <li>The certificate page shows all certification details and status</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;