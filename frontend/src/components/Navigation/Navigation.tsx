import { FC, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage, switchLanguageRoute, detectLanguageFromPath } from '../../config/routes';

const Navigation: FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  // Get localized path for a route
  const getPath = (routeKey: keyof typeof routes): string => {
    return routes[routeKey][currentLang];
  };

  const changeLanguage = (newLang: SupportedLanguage): void => {
    const currentUrlLang = detectLanguageFromPath(location.pathname);
    const newPath = switchLanguageRoute(location.pathname, currentUrlLang, newLang);
    i18n.changeLanguage(newLang);
    navigate(newPath);
    setOpenDropdown(null);
  };

  const getCurrentFlag = (): string => {
    switch (currentLang) {
      case 'sq':
        return '/albania.png';
      case 'it':
        return '/italy.png';
      default:
        return '/united-kingdom.png';
    }
  };

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
          <Link to={getPath('home')} onClick={closeMenu}>
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
          <li><Link to={getPath('home')} onClick={closeMenu}>{t('nav.home')}</Link></li>

          <li className={`nav-dropdown ${openDropdown === 'about' ? 'active' : ''}`}>
            <div className="nav-dropdown-header">
              <Link to={getPath('about')} onClick={closeMenu}>{t('nav.aboutUs')}</Link>
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
              <li><Link to={getPath('missionVision')} onClick={closeMenu}>{t('nav.missionVision')}</Link></li>
              <li><Link to={getPath('qualityPolicy')} onClick={closeMenu}>{t('nav.qualityPolicy')}</Link></li>
              <li><Link to={getPath('codeOfEthics')} onClick={closeMenu}>{t('nav.codeOfEthics')}</Link></li>
              <li><Link to={getPath('accreditation')} onClick={closeMenu}>{t('nav.accreditation')}</Link></li>
              <li><Link to={getPath('faq')} onClick={closeMenu}>{t('nav.faq')}</Link></li>
            </ul>
          </li>

          <li className={`nav-dropdown ${openDropdown === 'iso' ? 'active' : ''}`}>
            <div className="nav-dropdown-header">
              <Link to={getPath('isoServices')} onClick={closeMenu}>{t('nav.isoCertifications')}</Link>
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
              <li><Link to={getPath('iso9001')} onClick={closeMenu}>{t('nav.iso9001')}</Link></li>
              <li><Link to={getPath('iso14001')} onClick={closeMenu}>{t('nav.iso14001')}</Link></li>
              <li><Link to={getPath('iso22301')} onClick={closeMenu}>{t('nav.iso22301')}</Link></li>
              <li><Link to={getPath('iso27001')} onClick={closeMenu}>{t('nav.iso27001')}</Link></li>
              <li><Link to={getPath('iso37001')} onClick={closeMenu}>{t('nav.iso37001')}</Link></li>
              <li><Link to={getPath('iso39001')} onClick={closeMenu}>{t('nav.iso39001')}</Link></li>
              <li><Link to={getPath('iso45001')} onClick={closeMenu}>{t('nav.iso45001')}</Link></li>
              <li><Link to={getPath('iso50001')} onClick={closeMenu}>{t('nav.iso50001')}</Link></li>
              <li><Link to={getPath('haccp')} onClick={closeMenu}>{t('nav.haccp')}</Link></li>
            </ul>
          </li>


          <li className={`nav-dropdown ${openDropdown === 'additional' ? 'active' : ''}`}>
            <div className="nav-dropdown-header">
              <Link to={getPath('services')} onClick={closeMenu}>{t('nav.ourServices')}</Link>
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
              <li><Link to={getPath('ceMarking')} onClick={closeMenu}>{t('nav.ceMarking')}</Link></li>
              <li><Link to={getPath('energyEfficiency')} onClick={closeMenu}>{t('nav.energyEfficiency')}</Link></li>
              <li><Link to={getPath('staffTraining')} onClick={closeMenu}>{t('nav.staffTraining')}</Link></li>
              <li><Link to={getPath('professionalCard')} onClick={closeMenu}>{t('nav.professionalCards')}</Link></li>
              <li><Link to={getPath('technologicalCard')} onClick={closeMenu}>{t('nav.technologicalCard')}</Link></li>
              <li><Link to={getPath('equipmentEvaluation')} onClick={closeMenu}>{t('nav.equipmentEvaluation')}</Link></li>
            </ul>
          </li>

          <li><Link to={getPath('blog')} onClick={closeMenu}>{t('nav.blog')}</Link></li>
          <li><Link to={getPath('contact')} onClick={closeMenu}>{t('nav.contactUs')}</Link></li>

          <li className="mobile-only nav-actions-mobile">
            <Link to={getPath('generalQuote')} className="nav-btn nav-btn-primary" onClick={closeMenu}>
              {t('nav.getQuote')}
            </Link>
          </li>
          <li className="mobile-only nav-actions-mobile">
            <div className="language-switcher-mobile">
              <button
                className="language-dropdown-toggle-mobile"
                onClick={() => toggleDropdown('language-mobile')}
                aria-label="Select Language"
              >
                <img src={getCurrentFlag()} alt="Language" className="flag-icon" />
                <span>{t('nav.language')}</span>
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10z"/>
                </svg>
              </button>
              <ul className={`language-dropdown-menu-mobile ${openDropdown === 'language-mobile' ? 'active' : ''}`}>
                <li>
                  <button className="lang-option-mobile" aria-label="English" title="English" onClick={() => changeLanguage('en')}>
                    <img src="/united-kingdom.png" alt="English" className="flag-icon" />
                    <span>English</span>
                  </button>
                </li>
                <li>
                  <button className="lang-option-mobile" aria-label="Albanian" title="Shqip" onClick={() => changeLanguage('sq')}>
                    <img src="/albania.png" alt="Albanian" className="flag-icon" />
                    <span>Shqip</span>
                  </button>
                </li>
                <li>
                  <button className="lang-option-mobile" aria-label="Italian" title="Italiano" onClick={() => changeLanguage('it')}>
                    <img src="/italy.png" alt="Italian" className="flag-icon" />
                    <span>Italiano</span>
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="nav-actions desktop-only">
          <Link to={getPath('generalQuote')} className="nav-btn nav-btn-primary" onClick={closeMenu}>
            {t('nav.getQuote')}
          </Link>

          <div className="language-switcher">
            <button
              className="language-dropdown-toggle"
              onClick={() => toggleDropdown('language')}
              aria-label="Select Language"
            >
              <img src={getCurrentFlag()} alt="Language" className="flag-icon" />
              <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z"/>
              </svg>
            </button>
            <ul className={`language-dropdown-menu ${openDropdown === 'language' ? 'active' : ''}`}>
              <li>
                <button className="lang-option" aria-label="English" title="English" onClick={() => changeLanguage('en')}>
                  <img src="/united-kingdom.png" alt="English" className="flag-icon" />
                  <span>English</span>
                </button>
              </li>
              <li>
                <button className="lang-option" aria-label="Albanian" title="Shqip" onClick={() => changeLanguage('sq')}>
                  <img src="/albania.png" alt="Albanian" className="flag-icon" />
                  <span>Shqip</span>
                </button>
              </li>
              <li>
                <button className="lang-option" aria-label="Italian" title="Italiano" onClick={() => changeLanguage('it')}>
                  <img src="/italy.png" alt="Italian" className="flag-icon" />
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
