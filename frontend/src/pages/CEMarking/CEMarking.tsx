import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';

const CEMarking: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  return (
    <div className="iso-page">
      <Helmet>
        <title>{t('ceMarking.meta.title')}</title>
        <meta name="description" content={t('ceMarking.meta.description')} />
        <meta name="keywords" content={t('ceMarking.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>{t('ceMarking.hero.title')}</h1>
          <p className="iso-subtitle">
            {t('ceMarking.hero.subtitle')}
          </p>
          <Link
            to={routes.quoteForm[currentLang].replace(':isoCode', 'ce-marking')}
            className="btn btn-primary btn-quote"
          >
            {t('common.getIsoQuote', { isoCode: 'CE Marking' })}
          </Link>
        </div>
      </section>

      {/* What is CE Marking */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('ceMarking.whatIs.title')}</h2>
          <p className="iso-text">
            {t('ceMarking.whatIs.description1')}
          </p>
          <p className="iso-text">
            {t('ceMarking.whatIs.description2')}
          </p>

          <div className="iso-role-box">
            <h3>{t('ceMarking.whatIs.roleBox.title')}</h3>
            <p>
              {t('ceMarking.whatIs.roleBox.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('ceMarking.benefits.title')}</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>{t('ceMarking.benefits.benefit1.title')}</h3>
              <p>
                {t('ceMarking.benefits.benefit1.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>{t('ceMarking.benefits.benefit2.title')}</h3>
              <p>
                {t('ceMarking.benefits.benefit2.description')}
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>{t('ceMarking.benefits.benefit3.title')}</h3>
              <p>
                {t('ceMarking.benefits.benefit3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Requiring CE Marking */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('ceMarking.industries.title')}</h2>
          <p className="section-intro">
            {t('ceMarking.industries.subtitle')}
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h3>{t('ceMarking.industries.electrical.title')}</h3>
              <p>{t('ceMarking.industries.electrical.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('ceMarking.industries.machinery.title')}</h3>
              <p>{t('ceMarking.industries.machinery.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('ceMarking.industries.toys.title')}</h3>
              <p>{t('ceMarking.industries.toys.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('ceMarking.industries.medical.title')}</h3>
              <p>{t('ceMarking.industries.medical.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('ceMarking.industries.construction.title')}</h3>
              <p>{t('ceMarking.industries.construction.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('ceMarking.industries.ppe.title')}</h3>
              <p>{t('ceMarking.industries.ppe.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Achieve CE Marking */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('ceMarking.process.title')}</h2>
          <p className="section-intro">
            {t('ceMarking.process.subtitle')}
          </p>

          <div className="ce-steps-grid">
            <div className="ce-step-card">
              <div className="ce-step-number">1</div>
              <h3>{t('ceMarking.process.step1.title')}</h3>
              <p>{t('ceMarking.process.step1.description')}</p>
            </div>

            <div className="ce-step-card">
              <div className="ce-step-number">2</div>
              <h3>{t('ceMarking.process.step2.title')}</h3>
              <p>{t('ceMarking.process.step2.description')}</p>
            </div>

            <div className="ce-step-card">
              <div className="ce-step-number">3</div>
              <h3>{t('ceMarking.process.step3.title')}</h3>
              <p>{t('ceMarking.process.step3.description')}</p>
            </div>

            <div className="ce-step-card">
              <div className="ce-step-number">4</div>
              <h3>{t('ceMarking.process.step4.title')}</h3>
              <p>{t('ceMarking.process.step4.description')}</p>
            </div>

            <div className="ce-step-card">
              <div className="ce-step-number">5</div>
              <h3>{t('ceMarking.process.step5.title')}</h3>
              <p>{t('ceMarking.process.step5.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta-final">
        <div className="container">
          <h2>{t('ceMarking.cta.title')}</h2>
          <p>
            {t('ceMarking.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary">{t('ceMarking.cta.button')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CEMarking;