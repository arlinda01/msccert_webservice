import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const MissionVision: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="about">
            <Helmet>
                <title>{t('meta.missionVision.title')}</title>
                <meta name="description" content={t('meta.missionVision.description')} />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>{t('missionVision.title')}</h1>
                    <p className="about-subtitle">
                        {t('missionVision.vision.description')}
                    </p>
                </div>
            </section>

            {/* Mission & Vision Content */}
            <section className="section section-white">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mission-card">
                            <h3>{t('missionVision.mission.title')}</h3>
                            <p>{t('missionVision.mission.description1')}</p>
                            <p>{t('missionVision.mission.description2')}</p>
                            <p className="highlight-text">{t('missionVision.mission.description3')}</p>
                        </div>

                        <div className="vision-card">
                            <h3>{t('missionVision.vision.title')}</h3>
                            <p>{t('missionVision.vision.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">{t('missionVision.coreValues.title')}</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h4>{t('missionVision.coreValues.integrity.title')}</h4>
                            <p>{t('missionVision.coreValues.integrity.description')}</p>
                        </div>
                        <div className="value-card">
                            <h4>{t('missionVision.coreValues.competence.title')}</h4>
                            <p>{t('missionVision.coreValues.competence.description')}</p>
                        </div>
                        <div className="value-card">
                            <h4>{t('missionVision.coreValues.transparency.title')}</h4>
                            <p>{t('missionVision.coreValues.transparency.description')}</p>
                        </div>
                        <div className="value-card">
                            <h4>{t('missionVision.coreValues.continuousImprovement.title')}</h4>
                            <p>{t('missionVision.coreValues.continuousImprovement.description')}</p>
                        </div>
                        <div className="value-card">
                            <h4>{t('missionVision.coreValues.clientFocus.title')}</h4>
                            <p>{t('missionVision.coreValues.clientFocus.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-cta-final">
                <div className="container">
                    <h2>{t('common.contactUs')}</h2>
                    <p>{t('about.commitment.description')}</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary-large">{t('nav.contactUs')}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MissionVision;