import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';
import { serviceSchema, breadcrumbSchema } from '../../utils/schemas';

const EnergyEfficiency: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  return (
    <div className="iso-page">
      <Helmet>
        <title>{t('energyEfficiency.meta.title')}</title>
        <meta name="description" content={t('energyEfficiency.meta.description')} />
        <meta name="keywords" content={t('energyEfficiency.meta.keywords')} />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema('Energy Efficiency Certification', 'Energy efficiency audit and certification services.', '/services/additional/energy-efficiency'))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Energy Efficiency', path: '/services/additional/energy-efficiency' },
          ]))}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>{t('energyEfficiency.hero.title')}</h1>
          <p className="iso-subtitle">
            {t('energyEfficiency.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* What is Energy Efficiency */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('energyEfficiency.whatIs.title')}</h2>
          <p className="iso-text">
            {t('energyEfficiency.whatIs.description')}
          </p>

          <div className="iso-role-box">
            <h3>{t('energyEfficiency.whatIs.businessImportance.title')}</h3>
            <ul className="services-list">
              <li>{t('energyEfficiency.whatIs.businessImportance.point1')}</li>
              <li>{t('energyEfficiency.whatIs.businessImportance.point2')}</li>
              <li>{t('energyEfficiency.whatIs.businessImportance.point3')}</li>
              <li>{t('energyEfficiency.whatIs.businessImportance.point4')}</li>
            </ul>
          </div>

          <div className="iso-role-box" style={{ marginTop: '2rem' }}>
            <h3>{t('energyEfficiency.whatIs.keyFunctions.title')}</h3>
            <ul className="services-list">
              <li>{t('energyEfficiency.whatIs.keyFunctions.point1')}</li>
              <li>{t('energyEfficiency.whatIs.keyFunctions.point2')}</li>
              <li>{t('energyEfficiency.whatIs.keyFunctions.point3')}</li>
              <li>{t('energyEfficiency.whatIs.keyFunctions.point4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('energyEfficiency.whyChooseUs.title')}</h2>
          <div className="iso-role-box" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ul className="services-list">
              <li>{t('energyEfficiency.whyChooseUs.point1')}</li>
              <li>{t('energyEfficiency.whyChooseUs.point2')}</li>
              <li>{t('energyEfficiency.whyChooseUs.point3')}</li>
              <li>{t('energyEfficiency.whyChooseUs.point4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('energyEfficiency.benefits.title')}</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>{t('energyEfficiency.benefits.benefit1.title')}</h3>
              <p>{t('energyEfficiency.benefits.benefit1.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>{t('energyEfficiency.benefits.benefit2.title')}</h3>
              <p>{t('energyEfficiency.benefits.benefit2.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>{t('energyEfficiency.benefits.benefit3.title')}</h3>
              <p>{t('energyEfficiency.benefits.benefit3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('energyEfficiency.whoBenefits.title')}</h2>
          <p className="section-intro">
            {t('energyEfficiency.whoBenefits.subtitle')}
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h3>{t('energyEfficiency.whoBenefits.manufacturing.title')}</h3>
              <p>{t('energyEfficiency.whoBenefits.manufacturing.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('energyEfficiency.whoBenefits.commercial.title')}</h3>
              <p>{t('energyEfficiency.whoBenefits.commercial.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('energyEfficiency.whoBenefits.horeca.title')}</h3>
              <p>{t('energyEfficiency.whoBenefits.horeca.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('energyEfficiency.whoBenefits.retail.title')}</h3>
              <p>{t('energyEfficiency.whoBenefits.retail.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('energyEfficiency.whoBenefits.datacenters.title')}</h3>
              <p>{t('energyEfficiency.whoBenefits.datacenters.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('energyEfficiency.whoBenefits.utilities.title')}</h3>
              <p>{t('energyEfficiency.whoBenefits.utilities.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('energyEfficiency.partner.title')}</h2>
          <p className="section-intro" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            {t('energyEfficiency.partner.description')}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>{t('energyEfficiency.cta.title')}</h2>
          <p>
            {t('energyEfficiency.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary">{t('energyEfficiency.cta.button')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyEfficiency;
