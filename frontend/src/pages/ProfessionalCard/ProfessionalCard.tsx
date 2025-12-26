import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';

const ProfessionalCard: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  return (
    <div className="iso-page">
      <Helmet>
        <title>{t('professionalCard.meta.title')}</title>
        <meta name="description" content={t('professionalCard.meta.description')} />
        <meta name="keywords" content={t('professionalCard.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>{t('professionalCard.hero.title')}</h1>
          <p className="iso-subtitle">
            {t('professionalCard.hero.subtitle1')}
          </p>
          <p className="iso-subtitle">
            {t('professionalCard.hero.subtitle2')}
          </p>
          <div className="hero-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary">{t('professionalCard.hero.cta1')}</Link>
            <Link to={routes.contact[currentLang]} className="btn btn-secondary">{t('professionalCard.hero.cta2')}</Link>
          </div>
        </div>
      </section>

      {/* What Is IDCP Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('professionalCard.whatIs.title')}</h2>
          <h3 style={{ fontSize: '1.5rem', color: '#01434f', marginBottom: '1.5rem', textAlign: 'center' }}>
            {t('professionalCard.whatIs.subtitle')}
          </h3>
          <p className="iso-text">
            {t('professionalCard.whatIs.description1')}
          </p>
          <p className="iso-text">
            {t('professionalCard.whatIs.description2')}
          </p>
          <p className="iso-text">
            {t('professionalCard.whatIs.description3')}
          </p>

          <div className="iso-role-box">
            <h3>{t('professionalCard.whatIs.roleBox.title')}</h3>
            <p>
              {t('professionalCard.whatIs.roleBox.description')}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('professionalCard.howItWorks.title')}</h2>
          <div className="ce-steps-grid">
            <div className="ce-step-card">
              <div className="ce-step-number">1</div>
              <h3>{t('professionalCard.howItWorks.step1.title')}</h3>
              <p>{t('professionalCard.howItWorks.step1.description')}</p>
            </div>
            <div className="ce-step-card">
              <div className="ce-step-number">2</div>
              <h3>{t('professionalCard.howItWorks.step2.title')}</h3>
              <p>{t('professionalCard.howItWorks.step2.description')}</p>
            </div>
            <div className="ce-step-card">
              <div className="ce-step-number">3</div>
              <h3>{t('professionalCard.howItWorks.step3.title')}</h3>
              <p>{t('professionalCard.howItWorks.step3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Contains Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('professionalCard.cardContains.title')}</h2>
          <div className="card-contains-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <li key={num} style={{
                  padding: '1rem 1.5rem',
                  marginBottom: '0.75rem',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                  borderLeft: '4px solid #2abad4',
                  color: '#333',
                  fontSize: '1.05rem'
                }}>
                  {t(`professionalCard.cardContains.item${num}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('professionalCard.benefits.title')}</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>{t('professionalCard.benefits.benefit1.title')}</h3>
              <p>
                {t('professionalCard.benefits.benefit1.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>{t('professionalCard.benefits.benefit2.title')}</h3>
              <p>
                {t('professionalCard.benefits.benefit2.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>{t('professionalCard.benefits.benefit3.title')}</h3>
              <p>
                {t('professionalCard.benefits.benefit3.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>{t('professionalCard.benefits.benefit4.title')}</h3>
              <p>
                {t('professionalCard.benefits.benefit4.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('professionalCard.industries.title')}</h2>
          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h3>{t('professionalCard.industries.construction.title')}</h3>
              <p>{t('professionalCard.industries.construction.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('professionalCard.industries.manufacturing.title')}</h3>
              <p>{t('professionalCard.industries.manufacturing.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('professionalCard.industries.energy.title')}</h3>
              <p>{t('professionalCard.industries.energy.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('professionalCard.industries.transport.title')}</h3>
              <p>{t('professionalCard.industries.transport.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('professionalCard.industries.horeca.title')}</h3>
              <p>{t('professionalCard.industries.horeca.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MSC Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('professionalCard.whyChoose.title')}</h2>
          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>{t('professionalCard.whyChoose.experts.title')}</h3>
              <p>{t('professionalCard.whyChoose.experts.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('professionalCard.whyChoose.templates.title')}</h3>
              <p>{t('professionalCard.whyChoose.templates.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('professionalCard.whyChoose.verification.title')}</h3>
              <p>{t('professionalCard.whyChoose.verification.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-cta-final">
        <div className="container">
          <h2>{t('professionalCard.cta.title')}</h2>
          <p>
            {t('professionalCard.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary">{t('professionalCard.cta.button')}</Link>
          </div>
          <p className="cta-footer">{t('professionalCard.cta.footer')}</p>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalCard;
