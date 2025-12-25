import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';

const HACCP: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  return (
    <div className="iso-page">
      <Helmet>
        <title>{t('haccp.meta.title')}</title>
        <meta name="description" content={t('haccp.meta.description')} />
        <meta name="keywords" content={t('haccp.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>{t('haccp.hero.title')}</h1>
          <p className="iso-subtitle">
            {t('haccp.hero.subtitle')}
          </p>
          <Link
            to={routes.quoteForm[currentLang].replace(':isoCode', 'haccp')}
            className="btn btn-primary btn-quote"
          >
            {t('common.getIsoQuote', { isoCode: 'HACCP' })}
          </Link>
        </div>
      </section>

      {/* What is HACCP */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('haccp.whatIs.title')}</h2>
          <p className="iso-text">
            {t('haccp.whatIs.description')}
          </p>

          <div className="iso-role-box">
            <h3>{t('haccp.whatIs.roleBox.title')}</h3>
            <p>
              {t('haccp.whatIs.roleBox.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('haccp.benefits.title')}</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>{t('haccp.benefits.benefit1.title')}</h3>
              <p>{t('haccp.benefits.benefit1.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>{t('haccp.benefits.benefit2.title')}</h3>
              <p>{t('haccp.benefits.benefit2.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>{t('haccp.benefits.benefit3.title')}</h3>
              <p>{t('haccp.benefits.benefit3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('haccp.industryFocus.title')}</h2>
          <p className="section-intro">
            {t('haccp.industryFocus.subtitle')}
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h3>{t('haccp.industryFocus.production.title')}</h3>
              <p>{t('haccp.industryFocus.production.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('haccp.industryFocus.horeca.title')}</h3>
              <p>{t('haccp.industryFocus.horeca.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('haccp.industryFocus.retail.title')}</h3>
              <p>{t('haccp.industryFocus.retail.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('haccp.industryFocus.logistics.title')}</h3>
              <p>{t('haccp.industryFocus.logistics.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('haccp.mscAdvantage.title')}</h2>
          <p className="section-intro">
            {t('haccp.mscAdvantage.subtitle')}
          </p>

          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>{t('haccp.mscAdvantage.specializedAuditors.title')}</h3>
              <p>{t('haccp.mscAdvantage.specializedAuditors.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('haccp.mscAdvantage.practicalAudit.title')}</h3>
              <p>{t('haccp.mscAdvantage.practicalAudit.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('haccp.mscAdvantage.objectiveCertification.title')}</h3>
              <p>{t('haccp.mscAdvantage.objectiveCertification.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('haccp.process.title')}</h2>
          <p className="section-intro">
            {t('haccp.process.subtitle')}
          </p>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h3>{t('haccp.process.step1')}</h3>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h3>{t('haccp.process.step2')}<br /><span className="process-detail">{t('haccp.process.step2Detail')}</span></h3>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h3>{t('haccp.process.step3')}</h3>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <h3>{t('haccp.process.step4')}<br /><span className="process-detail">{t('haccp.process.step4Detail')}</span></h3>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h3>{t('haccp.process.step5')}<br /><span className="process-detail">{t('haccp.process.step5Detail')}</span></h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>{t('haccp.cta.title')}</h2>
          <p>
            {t('haccp.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary">{t('haccp.cta.button')}</Link>
          </div>
          <p className="cta-footer">
            {t('haccp.cta.footer')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default HACCP;
