import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import {
    FaUserTie,
    FaDollarSign,
    FaTachometerAlt,
    FaGlobeAmericas
} from 'react-icons/fa';
import { routes, SupportedLanguage } from '../../config/routes';
import { organizationSchema, breadcrumbSchema } from '../../utils/schemas';

const About: FC = () => {
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

    return (
        <div className="about">
            <Helmet>
                <title>{t('meta.about.title')}</title>
                <meta name="description" content={t('meta.about.description')} />
                <script type="application/ld+json">{JSON.stringify(organizationSchema())}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{name: 'Home', path: '/'}, {name: 'About Us', path: '/about-us'}]))}</script>
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>{t('about.title')}</h1>
                    <p className="about-subtitle">
                        {t('about.subtitle')}
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="section section-white">
                <div className="container">
                    <div className="who-we-are-grid">
                        <div className="who-we-are-content">
                            <h2 className="section-title" style={{ textAlign: 'left' }}>{t('about.whoWeAre.title')}</h2>
                            <p className="about-text" style={{ textAlign: 'left', margin: '0 0 1.5rem 0' }}>
                                {t('about.intro')}
                            </p>
                            <p className="about-text" style={{ textAlign: 'left', margin: '0 0 1.5rem 0' }}>
                                {t('about.description1')}
                            </p>
                            <p className="about-text" style={{ textAlign: 'left', margin: '0 0 1.5rem 0' }}>
                                {t('about.description2')}
                            </p>
                            <p className="about-text" style={{ textAlign: 'left', margin: '0' }}>
                                {t('about.description3')}
                            </p>
                        </div>
                        <div className="who-we-are-image">
                            <img src="/logo.svg" alt="MSC Certifications Logo" className="who-we-are-logo" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">{t('about.whyChooseUs.title')}</h2>
                    <div className="why-choose-grid">
                        <div className="why-choose-card">
                            <FaUserTie className="why-icon" />
                            <h3>{t('about.missionValues.expertise.title')}</h3>
                            <p>{t('about.whyChooseUs.reason1')}</p>
                        </div>
                        <div className="why-choose-card">
                            <FaDollarSign className="why-icon" />
                            <h3>{t('about.missionValues.trust.title')}</h3>
                            <p>{t('about.whyChooseUs.reason2')}</p>
                        </div>
                        <div className="why-choose-card">
                            <FaTachometerAlt className="why-icon" />
                            <h3>{t('about.missionValues.improvement.title')}</h3>
                            <p>{t('about.whyChooseUs.reason3')}</p>
                        </div>
                        <div className="why-choose-card">
                            <FaGlobeAmericas className="why-icon" />
                            <h3>{t('about.missionValues.integrity.title')}</h3>
                            <p>{t('about.whyChooseUs.reason4')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="section section-commitment">
                <div className="container">
                    <h2>{t('about.commitment.title')}</h2>
                    <p className="commitment-text">
                        {t('about.commitment.description')}
                    </p>
                    <div className="commitment-cta">
                        <Link to={routes.contact[currentLang]} className="btn btn-primary-large">{t('nav.contactUs')}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
