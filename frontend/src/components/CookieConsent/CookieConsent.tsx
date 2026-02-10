import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './CookieConsent.css';

const CookieConsent: FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-consent-content">
        <p>{t('cookieConsent.message')}</p>
        <div className="cookie-consent-actions">
          <button className="btn btn-primary cookie-accept" onClick={handleAccept}>
            {t('cookieConsent.accept')}
          </button>
          <button className="btn btn-secondary cookie-decline" onClick={handleDecline}>
            {t('cookieConsent.decline')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
