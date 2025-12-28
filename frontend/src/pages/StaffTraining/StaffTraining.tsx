import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';

const StaffTraining: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  return (
    <div className="iso-page">
      <Helmet>
        <title>{t('staffTraining.meta.title')}</title>
        <meta name="description" content={t('staffTraining.meta.description')} />
        <meta name="keywords" content={t('staffTraining.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>{t('staffTraining.hero.title')}</h1>
          <p className="iso-subtitle">
            {t('staffTraining.hero.subtitle1')}
          </p>
          <p className="iso-subtitle">
            {t('staffTraining.hero.subtitle2')}
          </p>
        </div>
      </section>

      {/* What Is Staff Training Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('staffTraining.whatIs.title')}</h2>
          <p className="iso-text">
            {t('staffTraining.whatIs.description1')}
          </p>
          <p className="iso-text">
            {t('staffTraining.whatIs.description2')}
          </p>

          <div className="iso-role-box">
            <h3>{t('staffTraining.whatIs.modules.title')}</h3>
            <ul className="services-list">
              <li><strong>{t('staffTraining.whatIs.modules.quality.title')}</strong>: {t('staffTraining.whatIs.modules.quality.description')}</li>
              <li><strong>{t('staffTraining.whatIs.modules.environment.title')}</strong>: {t('staffTraining.whatIs.modules.environment.description')}</li>
              <li><strong>{t('staffTraining.whatIs.modules.safety.title')}</strong>: {t('staffTraining.whatIs.modules.safety.description')}</li>
            </ul>
          </div>

          <p className="iso-text" style={{ marginTop: '2rem' }}>
            {t('staffTraining.whatIs.delivery')}
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('staffTraining.benefits.title')}</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>{t('staffTraining.benefits.benefit1.title')}</h3>
              <p>
                {t('staffTraining.benefits.benefit1.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>{t('staffTraining.benefits.benefit2.title')}</h3>
              <p>
                {t('staffTraining.benefits.benefit2.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>{t('staffTraining.benefits.benefit3.title')}</h3>
              <p>
                {t('staffTraining.benefits.benefit3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Train Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('staffTraining.industries.title')}</h2>
          <p className="section-intro">
            {t('staffTraining.industries.subtitle')}
          </p>
          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h3>{t('staffTraining.industries.manufacturing.title')}</h3>
              <p>{t('staffTraining.industries.manufacturing.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('staffTraining.industries.construction.title')}</h3>
              <p>{t('staffTraining.industries.construction.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('staffTraining.industries.transport.title')}</h3>
              <p>{t('staffTraining.industries.transport.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('staffTraining.industries.horeca.title')}</h3>
              <p>{t('staffTraining.industries.horeca.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('staffTraining.industries.services.title')}</h3>
              <p>{t('staffTraining.industries.services.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('staffTraining.industries.public.title')}</h3>
              <p>{t('staffTraining.industries.public.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MSC Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('staffTraining.whyChoose.title')}</h2>
          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>{t('staffTraining.whyChoose.trainers.title')}</h3>
              <p>{t('staffTraining.whyChoose.trainers.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('staffTraining.whyChoose.programs.title')}</h3>
              <p>{t('staffTraining.whyChoose.programs.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('staffTraining.whyChoose.flexible.title')}</h3>
              <p>{t('staffTraining.whyChoose.flexible.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('staffTraining.whyChoose.results.title')}</h3>
              <p>{t('staffTraining.whyChoose.results.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-cta-final">
        <div className="container">
          <h2>{t('staffTraining.cta.title')}</h2>
          <p>
            {t('staffTraining.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary">{t('staffTraining.cta.button')}</Link>
          </div>
          <p className="cta-footer">{t('staffTraining.cta.footer')}</p>
        </div>
      </section>
    </div>
  );
};

export default StaffTraining;
