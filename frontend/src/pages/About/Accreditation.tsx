import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import {
    FaGlobeAmericas,
    FaHandsHelping,
    FaBalanceScale,
    FaChartLine
} from 'react-icons/fa';
import { routes, SupportedLanguage } from '../../config/routes';

const Accreditation: FC = () => {
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

    return (
        <div className="about">
            <Helmet>
                <title>{t('meta.accreditation.title')}</title>
                <meta name="description" content={t('meta.accreditation.description')} />
                <meta name="keywords" content={t('meta.accreditation.keywords')} />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>{t('accreditation.title')}</h1>
                    <p className="about-subtitle">
                        {t('accreditation.subtitle')}
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section section-white">
                <div className="container">
                    <h2 className="visually-hidden">About Our Accreditation</h2>
                    <div className="accreditation-intro">
                        <p className="about-text centered">
                            {t('accreditation.intro.description1')}
                        </p>
                        <p className="about-text centered">
                            {t('accreditation.intro.description2')}
                        </p>
                        <p className="about-text centered">
                            {t('accreditation.intro.description3')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Accreditation Matters */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">{t('accreditation.importance.title')}</h2>

                    <div className="accreditation-grid">
                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaGlobeAmericas />
                            </div>
                            <h3>{t('accreditation.importance.globalRecognition.title')}</h3>
                            <p>
                                {t('accreditation.importance.globalRecognition.description')}
                            </p>
                        </div>

                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaHandsHelping />
                            </div>
                            <h3>{t('accreditation.importance.trustIntegrity.title')}</h3>
                            <p>
                                {t('accreditation.importance.trustIntegrity.description')}
                            </p>
                        </div>

                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaBalanceScale />
                            </div>
                            <h3>{t('accreditation.importance.guaranteedImpartiality.title')}</h3>
                            <p>
                                {t('accreditation.importance.guaranteedImpartiality.description')}
                            </p>
                        </div>

                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaChartLine />
                            </div>
                            <h3>{t('accreditation.importance.continuousImprovement.title')}</h3>
                            <p>
                                {t('accreditation.importance.continuousImprovement.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Message */}
            <section className="section section-white">
                <div className="container">
                    <div className="accreditation-footer">
                        <p>
                            {t('accreditation.conclusion')}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-cta-final">
                <div className="container">
                    <h2>{t('accreditation.cta.title')}</h2>
                    <p>
                        {t('accreditation.cta.description')}
                    </p>
                    <div className="cta-buttons">
                        <Link to={routes.contact[currentLang]} className="btn btn-primary-large">{t('common.contactUs')}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Accreditation;