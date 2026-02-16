import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';
import { serviceSchema, breadcrumbSchema } from '../../utils/schemas';

const EquipmentEvaluation: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  return (
    <div className="iso-page">
      <Helmet>
        <title>{t('equipmentEvaluation.meta.title')}</title>
        <meta name="description" content={t('equipmentEvaluation.meta.description')} />
        <meta name="keywords" content={t('equipmentEvaluation.meta.keywords')} />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema('Equipment Evaluation', 'Equipment evaluation and certification services.', '/services/additional/equipment-evaluation'))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Equipment Evaluation', path: '/services/additional/equipment-evaluation' },
          ]))}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>{t('equipmentEvaluation.hero.title')}</h1>
          <p className="iso-subtitle">
            {t('equipmentEvaluation.hero.subtitle1')}
          </p>
          <p className="iso-subtitle">
            {t('equipmentEvaluation.hero.subtitle2')}
          </p>
        </div>
      </section>

      {/* What Is Equipment Evaluation Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('equipmentEvaluation.whatIs.title')}</h2>
          <h3 style={{ fontSize: '1.25rem', color: '#01434f', marginBottom: '1.5rem', textAlign: 'center' }}>
            {t('equipmentEvaluation.whatIs.subtitle')}
          </h3>
          <p className="iso-text">
            {t('equipmentEvaluation.whatIs.description1')}
          </p>
          <p className="iso-text">
            {t('equipmentEvaluation.whatIs.description2')}
          </p>

          <div className="iso-role-box">
            <h3>{t('equipmentEvaluation.whatIs.roleBox.title')}</h3>
            <p>
              {t('equipmentEvaluation.whatIs.roleBox.description')}
            </p>
            <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>{t('equipmentEvaluation.whatIs.roleBox.servicesTitle')}</h3>
            <ul className="services-list">
              <li>{t('equipmentEvaluation.whatIs.roleBox.service1')}</li>
              <li>{t('equipmentEvaluation.whatIs.roleBox.service2')}</li>
              <li>{t('equipmentEvaluation.whatIs.roleBox.service3')}</li>
              <li>{t('equipmentEvaluation.whatIs.roleBox.service4')}</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              {t('equipmentEvaluation.whatIs.roleBox.result')}
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('equipmentEvaluation.benefits.title')}</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>{t('equipmentEvaluation.benefits.benefit1.title')}</h3>
              <p>
                {t('equipmentEvaluation.benefits.benefit1.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>{t('equipmentEvaluation.benefits.benefit2.title')}</h3>
              <p>
                {t('equipmentEvaluation.benefits.benefit2.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>{t('equipmentEvaluation.benefits.benefit3.title')}</h3>
              <p>
                {t('equipmentEvaluation.benefits.benefit3.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>{t('equipmentEvaluation.benefits.benefit4.title')}</h3>
              <p>
                {t('equipmentEvaluation.benefits.benefit4.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('equipmentEvaluation.industries.title')}</h2>
          <p className="section-intro">
            {t('equipmentEvaluation.industries.subtitle')}
          </p>
          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h3>{t('equipmentEvaluation.industries.manufacturing.title')}</h3>
              <p>{t('equipmentEvaluation.industries.manufacturing.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('equipmentEvaluation.industries.energy.title')}</h3>
              <p>{t('equipmentEvaluation.industries.energy.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('equipmentEvaluation.industries.construction.title')}</h3>
              <p>{t('equipmentEvaluation.industries.construction.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('equipmentEvaluation.industries.automotive.title')}</h3>
              <p>{t('equipmentEvaluation.industries.automotive.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('equipmentEvaluation.industries.pharma.title')}</h3>
              <p>{t('equipmentEvaluation.industries.pharma.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Process Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('equipmentEvaluation.process.title')}</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h3>{t('equipmentEvaluation.process.step1.title')}</h3>
              <p>{t('equipmentEvaluation.process.step1.description')}</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h3>{t('equipmentEvaluation.process.step2.title')}</h3>
              <p>{t('equipmentEvaluation.process.step2.description')}</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h3>{t('equipmentEvaluation.process.step3.title')}</h3>
              <p>{t('equipmentEvaluation.process.step3.description')}</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <h3>{t('equipmentEvaluation.process.step4.title')}</h3>
              <p>{t('equipmentEvaluation.process.step4.description')}</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h3>{t('equipmentEvaluation.process.step5.title')}</h3>
              <p>{t('equipmentEvaluation.process.step5.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('equipmentEvaluation.whyChoose.title')}</h2>
          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>{t('equipmentEvaluation.whyChoose.engineers.title')}</h3>
              <p>{t('equipmentEvaluation.whyChoose.engineers.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('equipmentEvaluation.whyChoose.transparent.title')}</h3>
              <p>{t('equipmentEvaluation.whyChoose.transparent.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('equipmentEvaluation.whyChoose.actionable.title')}</h3>
              <p>{t('equipmentEvaluation.whyChoose.actionable.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-cta-final">
        <div className="container">
          <h2>{t('equipmentEvaluation.cta.title')}</h2>
          <p>
            {t('equipmentEvaluation.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary">{t('equipmentEvaluation.cta.button')}</Link>
          </div>
          <p className="cta-footer">{t('equipmentEvaluation.cta.footer')}</p>
        </div>
      </section>
    </div>
  );
};

export default EquipmentEvaluation;
