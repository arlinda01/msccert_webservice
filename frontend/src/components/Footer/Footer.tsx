import { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
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
                alt="MSC CERTIFICATIONS"
                className="footer-logo"
              />
            </Link>
            <p className="footer-description">
              Your trusted partner for ISO certification, compliance, and risk management solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about/mission-vision">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/iso/iso-9001/quality-management">ISO 9001</Link></li>
              <li><Link to="/services/iso/iso-14001/environmental-management">ISO 14001</Link></li>
              <li><Link to="/services/iso/iso-27001/information-security">ISO 27001</Link></li>
              <li><Link to="/services/iso/iso-45001/health-and-safety-at-work">ISO 45001</Link></li>
              <li><Link to="/services/compliance/ce-marking">CE Marking</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:info@msccertifications.com">info@msccertifications.com</a>
              </li>
              <li>
                <span className="contact-label">Phone:</span>
                <a href="tel:+1234567890">+123 456 7890</a>
              </li>
              <li>
                <span className="contact-label">Address:</span>
                <span>Your Business Address</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} MSC CERTIFICATIONS. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
