import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Company Info */}
          <div className="footer-section footer-brand">
            <Link to="/">
              <img
                src="/MSC-GROUP-WHITE-LOGO.svg"
                alt="MSC Certifications"
                className="footer-logo"
              />
            </Link>
            <p className="footer-description">
              {t('footer.companyDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-links">
              <li><Link to="/about-us/">{t('nav.aboutUs')}</Link></li>
              <li><Link to="/services">{t('nav.ourServices')}</Link></li>
              <li><Link to="/contact">{t('footer.contact')}</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>{t('footer.services')}</h4>
            <ul className="footer-links">
              <li><Link to="/services/iso">{t('nav.isoCertifications')}</Link></li>
              <li><Link to="/services/ce-marking">{t('nav.ceMarking')}</Link></li>
              <li><Link to="/services/iso/haccp">{t('nav.haccp')}</Link></li>
              <li><Link to="/services/additional/energy-efficiency">{t('nav.energyEfficiency')}</Link></li>
              <li><Link to="/services/additional/staff-training">{t('nav.staffTraining')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>{t('nav.contactUs')}</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:info@msc-cert.com">info@msc-cert.com</a>
              </li>
              <li>
                <span className="contact-label">{t('footer.phone')}:</span>
                <a href="tel:+355672063632">+355 67 206 3632</a>
              </li>
              <li>
                <span className="contact-label">{t('footer.address')}:</span>
                <span>Str. Ismail Qemali<br/>Tirana, Albania</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} MSC Certifications. {t('footer.allRightsReserved')}</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">{t('footer.privacyPolicy')}</Link>
            <Link to="/terms-and-conditions">{t('footer.termsConditions')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;