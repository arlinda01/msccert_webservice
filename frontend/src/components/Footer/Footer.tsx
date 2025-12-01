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
                alt="MSC Certifications"
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
              <li><Link to="/about-us/">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/iso">ISO Certifications</Link></li>
              <li><Link to="/services/ce-marking">CE Marking</Link></li>
              <li><Link to="/services/iso/haccp">HACCP</Link></li>
              <li><Link to="/services/additional/energy-efficiency">Energy Efficiency</Link></li>
              <li><Link to="/services/additional/staff-training">Staff Training</Link></li>
              <li><Link to="/services/additional">Additional Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:info@msc-cert.com">info@msc-cert.com</a>
              </li>
              <li>
                <span className="contact-label">Phone:</span>
                <a href="tel:+355672063632">+355 67 206 3632</a>
              </li>
              <li>
                <span className="contact-label">Address:</span>
                <span>Str. Ismail Qemali<br/>Tirana, Albania</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} MSC Certifications. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;