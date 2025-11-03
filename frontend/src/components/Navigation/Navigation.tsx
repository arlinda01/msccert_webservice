import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdownName: string): void => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link to="/" onClick={closeMenu}>
            <img
              src="/MSC-GROUP-WHITE-LOGO.svg"
              alt="MSC CERTIFICATIONS"
              className={styles.logoImage}
            />
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={isMenuOpen ? styles.active : ''}></span>
          <span className={isMenuOpen ? styles.active : ''}></span>
          <span className={isMenuOpen ? styles.active : ''}></span>
        </button>

        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>

          <li className={`${styles.navDropdown} ${openDropdown === 'about' ? styles.active : ''}`}>
            <span onClick={() => toggleDropdown('about')}>
              About Us
              <svg className={styles.dropdownArrow} width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z"/>
              </svg>
            </span>
            <ul className={styles.dropdownMenu}>
              <li><Link to="/about/mission-vision" onClick={closeMenu}>Mission & Vision</Link></li>
              <li><Link to="/about/quality-policy" onClick={closeMenu}>Quality Policy</Link></li>
              <li><Link to="/about/code-of-ethics" onClick={closeMenu}>Code of Ethics</Link></li>
              <li><Link to="/about/accreditation" onClick={closeMenu}>Accreditation</Link></li>
              <li><Link to="/about/partnerships" onClick={closeMenu}>Partnerships</Link></li>
            </ul>
          </li>

          <li className={`${styles.navDropdown} ${openDropdown === 'iso' ? styles.active : ''}`}>
            <span onClick={() => toggleDropdown('iso')}>
              ISO Certifications
              <svg className={styles.dropdownArrow} width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z"/>
              </svg>
            </span>
            <ul className={styles.dropdownMenu}>
              <li><Link to="/services/iso/iso-9001/quality-management" onClick={closeMenu}>ISO 9001 – Quality Management</Link></li>
              <li><Link to="/services/iso/iso-14001/environmental-management" onClick={closeMenu}>ISO 14001 – Environmental Management</Link></li>
              <li><Link to="/services/iso/iso-22000/food-safety-management" onClick={closeMenu}>ISO 22000 – Food Safety Management</Link></li>
              <li><Link to="/services/iso/iso-27001/information-security" onClick={closeMenu}>ISO 27001 – Information Security</Link></li>
              <li><Link to="/services/iso/iso-45001/health-and-safety-at-work" onClick={closeMenu}>ISO 45001 – Health & Safety at Work</Link></li>
              <li><Link to="/services/iso/iso-22301/business-continuity" onClick={closeMenu}>ISO 22301 – Business Continuity</Link></li>
              <li><Link to="/services/iso/iso-37001/anti-bribery-management" onClick={closeMenu}>ISO 37001 – Anti-Bribery Management</Link></li>
              <li><Link to="/services/iso/iso-39001/road-traffic-safety" onClick={closeMenu}>ISO 39001 – Road Traffic Safety</Link></li>
              <li><Link to="/services/iso/iso-50001/energy-management" onClick={closeMenu}>ISO 50001 – Energy Management</Link></li>
              <li><Link to="/services/haccp-certification" onClick={closeMenu}>HACCP</Link></li>
            </ul>
          </li>

          <li className={`${styles.navDropdown} ${openDropdown === 'compliance' ? styles.active : ''}`}>
            <span onClick={() => toggleDropdown('compliance')}>
              Compliance & Marking
              <svg className={styles.dropdownArrow} width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z"/>
              </svg>
            </span>
            <ul className={styles.dropdownMenu}>
              <li><Link to="/services/compliance/ce-marking" onClick={closeMenu}>CE Marking</Link></li>
            </ul>
          </li>

          <li className={`${styles.navDropdown} ${openDropdown === 'additional' ? styles.active : ''}`}>
            <span onClick={() => toggleDropdown('additional')}>
              Additional Services
              <svg className={styles.dropdownArrow} width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z"/>
              </svg>
            </span>
            <ul className={styles.dropdownMenu}>
              <li><Link to="/services/additional/energy-efficiency" onClick={closeMenu}>Energy Efficiency Programs</Link></li>
              <li><Link to="/services/additional/staff-training" onClick={closeMenu}>Staff Training</Link></li>
              <li><Link to="/services/additional/professional-cards" onClick={closeMenu}>Professional Cards</Link></li>
              <li><Link to="/evaluation-of-technological-lines-machinery-equipment" onClick={closeMenu}>Technology & Equipment Assessment</Link></li>
              <li><Link to="/technological-card" onClick={closeMenu}>Technological Card</Link></li>
              <li><Link to="/services/consulting" onClick={closeMenu}>Consulting</Link></li>
            </ul>
          </li>

          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          {/*<li><Link to="/customer-stories" onClick={closeMenu}>Customer Stories</Link></li>*/}
          {/*<li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>*/}
          {/*<li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li>*/}
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
