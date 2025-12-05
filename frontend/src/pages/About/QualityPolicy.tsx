import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import {
    FaCheckCircle,
    FaUserGraduate,
    FaHeart,
    FaBalanceScale,
    FaChartLine
} from 'react-icons/fa';
import { routes, SupportedLanguage } from '../../config/routes';

const QualityPolicy: FC = () => {
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

    return (
        <div className="about">
            <Helmet>
                <title>{t('meta.qualityPolicy.title')}</title>
                <meta name="description" content={t('meta.qualityPolicy.description')} />
                <meta name="keywords" content={t('meta.qualityPolicy.keywords')} />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>{t('qualityPolicy.title')}</h1>
                    <p className="about-subtitle">
                        {t('qualityPolicy.commitment.title')}
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section section-white">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <p className="about-text centered" style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                            {t('qualityPolicy.commitment.description1')}
                        </p>
                        <p className="about-text centered" style={{ fontSize: '1.15rem', lineHeight: '1.9' }}>
                            {t('qualityPolicy.commitment.description2')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Quality Objectives */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>{t('qualityPolicy.objectives.title')}</h2>

                    <div className="quality-zigzag">
                        <div className="quality-zigzag-item">
                            <div className="quality-zigzag-content">
                                <div className="quality-number">1</div>
                                <div className="quality-zigzag-text">
                                    <h4>{t('qualityPolicy.objectives.compliance.title')}</h4>
                                    <p>
                                        {t('qualityPolicy.objectives.compliance.description')}
                                    </p>
                                </div>
                            </div>
                            <div className="quality-zigzag-icon">
                                <FaCheckCircle />
                            </div>
                        </div>

                        <div className="quality-zigzag-item reverse">
                            <div className="quality-zigzag-icon">
                                <FaUserGraduate />
                            </div>
                            <div className="quality-zigzag-content">
                                <div className="quality-number">2</div>
                                <div className="quality-zigzag-text">
                                    <h4>{t('qualityPolicy.objectives.competence.title')}</h4>
                                    <p>
                                        {t('qualityPolicy.objectives.competence.description')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="quality-zigzag-item">
                            <div className="quality-zigzag-content">
                                <div className="quality-number">3</div>
                                <div className="quality-zigzag-text">
                                    <h4>{t('qualityPolicy.objectives.satisfaction.title')}</h4>
                                    <p>
                                        {t('qualityPolicy.objectives.satisfaction.description')}
                                    </p>
                                </div>
                            </div>
                            <div className="quality-zigzag-icon">
                                <FaHeart />
                            </div>
                        </div>

                        <div className="quality-zigzag-item reverse">
                            <div className="quality-zigzag-icon">
                                <FaBalanceScale />
                            </div>
                            <div className="quality-zigzag-content">
                                <div className="quality-number">4</div>
                                <div className="quality-zigzag-text">
                                    <h4>{t('qualityPolicy.objectives.impartiality.title')}</h4>
                                    <p>
                                        {t('qualityPolicy.objectives.impartiality.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Continuous Improvement */}
            <section className="section section-white">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', background: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                            <FaChartLine style={{ fontSize: '2rem', color: '#fff' }} />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', color: '#2c3e50', marginBottom: '1.5rem' }}>{t('qualityPolicy.continuousImprovement.title')}</h2>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.9' }}>
                            {t('qualityPolicy.continuousImprovement.description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-cta-final">
                <div className="container">
                    <h2>{t('qualityPolicy.cta.title')}</h2>
                    <p>
                        {t('qualityPolicy.cta.description')}
                    </p>
                    <div className="cta-buttons">
                        <Link to={routes.contact[currentLang]} className="btn btn-primary-large">{t('common.contactUs')}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QualityPolicy;