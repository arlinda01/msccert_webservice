import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img
              src="/MSC-GROUP-WHITE-LOGO.svg"
              alt="MSC Certifications"
              className="logo-image"
            />
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>

          <li className={`nav-dropdown ${openDropdown === 'about' ? 'active' : ''}`}>
            <div className="nav-dropdown-header">
              <Link to="/about-us/" onClick={closeMenu}>About Us</Link>
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown('about')}
                aria-label="Toggle About Us menu"
              >
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z"/>
                </svg>
              </button>
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/about-us/mission-vision/" onClick={closeMenu}>Mission & Vision</Link></li>
              <li><Link to="/about-us/quality-policy/" onClick={closeMenu}>Quality Policy</Link></li>
              <li><Link to="/about-us/code-of-ethics/" onClick={closeMenu}>Code of Ethics</Link></li>
              <li><Link to="/about-us/accreditation/" onClick={closeMenu}>Accreditation</Link></li>
              <li><Link to="/about-us/partnerships/" onClick={closeMenu}>Partnerships</Link></li>
            </ul>
          </li>

          <li className={`nav-dropdown ${openDropdown === 'iso' ? 'active' : ''}`}>
            <div className="nav-dropdown-header">
              <Link to="/services/iso" onClick={closeMenu}>ISO Certifications</Link>
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown('iso')}
                aria-label="Toggle ISO Certifications menu"
              >
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z"/>
                </svg>
              </button>
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/services/iso/iso-9001" onClick={closeMenu}>ISO 9001 – Quality Management</Link></li>
              <li><Link to="/services/iso/iso-14001" onClick={closeMenu}>ISO 14001 – Environmental Management</Link></li>
              <li><Link to="/services/iso/iso-22301" onClick={closeMenu}>ISO 22301 – Business Continuity</Link></li>
              <li><Link to="/services/iso/iso-27001" onClick={closeMenu}>ISO 27001 – Information Security</Link></li>
              <li><Link to="/services/iso/iso-37001" onClick={closeMenu}>ISO 37001 – Anti-Bribery Management</Link></li>
              <li><Link to="/services/iso/iso-39001" onClick={closeMenu}>ISO 39001 – Road Traffic Safety</Link></li>
              <li><Link to="/services/iso/iso-45001" onClick={closeMenu}>ISO 45001 – Health & Safety at Work</Link></li>
              <li><Link to="/services/iso/iso-50001" onClick={closeMenu}>ISO 50001 – Energy Management</Link></li>
              <li><Link to="/services/iso/haccp" onClick={closeMenu}>HACCP – Food Safety</Link></li>
            </ul>
          </li>

          <li className={`nav-dropdown ${openDropdown === 'compliance' ? 'active' : ''}`}>
            <div className="nav-dropdown-header">
              <Link to="/services/compliance" onClick={closeMenu}>Compliance & Marking</Link>
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown('compliance')}
                aria-label="Toggle Compliance & Marking menu"
              >
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z"/>
                </svg>
              </button>
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/services/compliance/ce-marking" onClick={closeMenu}>CE Marking</Link></li>
            </ul>
          </li>

          <li className={`nav-dropdown ${openDropdown === 'additional' ? 'active' : ''}`}>
            <div className="nav-dropdown-header">
              <Link to="/services/additional" onClick={closeMenu}>Additional Services</Link>
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown('additional')}
                aria-label="Toggle Additional Services menu"
              >
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z"/>
                </svg>
              </button>
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/services/additional/energy-efficiency" onClick={closeMenu}>Energy Efficiency Programs</Link></li>
              <li><Link to="/services/additional/staff-training" onClick={closeMenu}>Staff Training</Link></li>
              <li><Link to="/services/additional/professional-cards" onClick={closeMenu}>Professional Cards</Link></li>
              <li><Link to="/evaluation-of-technological-lines-machinery-equipment" onClick={closeMenu}>Technology & Equipment Assessment</Link></li>
              <li><Link to="/technological-card" onClick={closeMenu}>Technological Card</Link></li>
              <li><Link to="/services/consulting" onClick={closeMenu}>Consulting</Link></li>
            </ul>
          </li>

          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
