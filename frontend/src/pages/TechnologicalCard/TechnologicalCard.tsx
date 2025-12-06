import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';

const TechnologicalCard: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  return (
    <div className="iso-page">
      <Helmet>
        <title>{t('technologicalCard.meta.title')}</title>
        <meta name="description" content={t('technologicalCard.meta.description')} />
        <meta name="keywords" content={t('technologicalCard.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>{t('technologicalCard.hero.title')}</h1>
          <p className="iso-subtitle">
            {t('technologicalCard.hero.subtitle1')}
          </p>
          <p className="iso-subtitle">
            {t('technologicalCard.hero.subtitle2')}
          </p>
          <div className="hero-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary">{t('technologicalCard.hero.cta1')}</Link>
            <Link to={routes.contact[currentLang]} className="btn btn-secondary">{t('technologicalCard.hero.cta2')}</Link>
          </div>
        </div>
      </section>

      {/* What Is Technological Card Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('technologicalCard.whatIs.title')}</h2>
          <h3 style={{ fontSize: '1.5rem', color: '#01434f', marginBottom: '1.5rem' }}>
            {t('technologicalCard.whatIs.subtitle')}
          </h3>
          <p className="iso-text">
            {t('technologicalCard.whatIs.description1')}
          </p>
          <p className="iso-text">
            {t('technologicalCard.whatIs.description2')}
          </p>
          <p className="iso-text">
            {t('technologicalCard.whatIs.description3')}
          </p>

          <div className="iso-role-box">
            <h3>{t('technologicalCard.whatIs.roleBox.title')}</h3>
            <p>
              {t('technologicalCard.whatIs.roleBox.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('technologicalCard.benefits.title')}</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>{t('technologicalCard.benefits.benefit1.title')}</h3>
              <p>
                {t('technologicalCard.benefits.benefit1.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>{t('technologicalCard.benefits.benefit2.title')}</h3>
              <p>
                {t('technologicalCard.benefits.benefit2.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>{t('technologicalCard.benefits.benefit3.title')}</h3>
              <p>
                {t('technologicalCard.benefits.benefit3.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>{t('technologicalCard.benefits.benefit4.title')}</h3>
              <p>
                {t('technologicalCard.benefits.benefit4.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('technologicalCard.industries.title')}</h2>
          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>{t('technologicalCard.industries.manufacturing.title')}</h4>
              <p>{t('technologicalCard.industries.manufacturing.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h4>{t('technologicalCard.industries.foodChemical.title')}</h4>
              <p>{t('technologicalCard.industries.foodChemical.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h4>{t('technologicalCard.industries.construction.title')}</h4>
              <p>{t('technologicalCard.industries.construction.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h4>{t('technologicalCard.industries.automotive.title')}</h4>
              <p>{t('technologicalCard.industries.automotive.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h4>{t('technologicalCard.industries.maintenance.title')}</h4>
              <p>{t('technologicalCard.industries.maintenance.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('technologicalCard.whyChoose.title')}</h2>
          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>{t('technologicalCard.whyChoose.engineers.title')}</h3>
              <p>{t('technologicalCard.whyChoose.engineers.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('technologicalCard.whyChoose.documentation.title')}</h3>
              <p>{t('technologicalCard.whyChoose.documentation.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('technologicalCard.whyChoose.compliance.title')}</h3>
              <p>{t('technologicalCard.whyChoose.compliance.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-cta-final">
        <div className="container">
          <h2>{t('technologicalCard.cta.title')}</h2>
          <p>
            {t('technologicalCard.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary">{t('technologicalCard.cta.button')}</Link>
          </div>
          <p className="cta-footer">{t('technologicalCard.cta.footer')}</p>
        </div>
      </section>
    </div>
  );
};

export default TechnologicalCard;
