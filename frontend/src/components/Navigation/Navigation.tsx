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
              src="/logo.svg"
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


          <li className={`nav-dropdown ${openDropdown === 'additional' ? 'active' : ''}`}>
            <div className="nav-dropdown-header">
              <Link to="/services" onClick={closeMenu}>Our Services</Link>
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown('additional')}
                aria-label="Toggle Our Services menu"
              >
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z"/>
                </svg>
              </button>
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/services/ce-marking" onClick={closeMenu}>CE Marking</Link></li>
              <li><Link to="/services/additional/energy-efficiency" onClick={closeMenu}>Energy Efficiency Programs</Link></li>
              <li><Link to="/services/additional/staff-training" onClick={closeMenu}>Staff Training</Link></li>
              <li><Link to="/services/additional/professional-card" onClick={closeMenu}>Professional Cards</Link></li>
              <li><Link to="/services/additional/technological-card" onClick={closeMenu}>Technological Card</Link></li>
              <li><Link to="/services/additional/equipment-evaluation" onClick={closeMenu}>Equipment Evaluation</Link></li>
            </ul>
          </li>

          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>

          <li className="mobile-only nav-actions-mobile">
            <Link to="/free-online-assessment" className="nav-btn nav-btn-secondary" onClick={closeMenu}>
              Online Assessment
            </Link>
          </li>
          <li className="mobile-only nav-actions-mobile">
            <Link to="/contact" className="nav-btn nav-btn-primary" onClick={closeMenu}>
              Get a Quote
            </Link>
          </li>
          <li className="mobile-only nav-actions-mobile">
            <div className="language-switcher-mobile">
              <button
                className="language-dropdown-toggle-mobile"
                onClick={() => toggleDropdown('language-mobile')}
                aria-label="Select Language"
              >
                <img src="/united-kingdom.png" alt="English" className="flag-icon" />
                <span>Language</span>
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z"/>
                </svg>
              </button>
              <ul className={`language-dropdown-menu-mobile ${openDropdown === 'language-mobile' ? 'active' : ''}`}>
                <li>
                  <button className="lang-option-mobile" aria-label="English" title="English">
                    <img src="/united-kingdom.png" alt="English" className="flag-icon" />
                    <span>English</span>
                  </button>
                </li>
                <li>
                  <button className="lang-option-mobile" aria-label="Albanian" title="Shqip">
                    <img src="/albania.png" alt="Albanian" className="flag-icon" />
                    <span>Shqip</span>
                  </button>
                </li>
                <li>
                  <button className="lang-option-mobile" aria-label="Italian" title="Italiano">
                    <span className="flag-circle flag-it"></span>
                    <span>Italiano</span>
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="nav-actions desktop-only">
          <Link to="/free-online-assessment" className="nav-btn nav-btn-secondary" onClick={closeMenu}>
            Online Assessment
          </Link>
          <Link to="/contact" className="nav-btn nav-btn-primary" onClick={closeMenu}>
            Get a Quote
          </Link>

          <div className="language-switcher">
            <button
              className="language-dropdown-toggle"
              onClick={() => toggleDropdown('language')}
              aria-label="Select Language"
            >
              <img src="/united-kingdom.png" alt="English" className="flag-icon" />
              <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z"/>
              </svg>
            </button>
            <ul className={`language-dropdown-menu ${openDropdown === 'language' ? 'active' : ''}`}>
              <li>
                <button className="lang-option" aria-label="English" title="English">
                  <img src="/united-kingdom.png" alt="English" className="flag-icon" />
                  <span>English</span>
                </button>
              </li>
              <li>
                <button className="lang-option" aria-label="Albanian" title="Shqip">
                  <img src="/albania.png" alt="Albanian" className="flag-icon" />
                  <span>Shqip</span>
                </button>
              </li>
              <li>
                <button className="lang-option" aria-label="Italian" title="Italiano">
                  <span className="flag-circle flag-it"></span>
                  <span>Italiano</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
