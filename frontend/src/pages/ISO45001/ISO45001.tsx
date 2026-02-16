import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';
import { serviceSchema, breadcrumbSchema } from '../../utils/schemas';

const ISO45001: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  return (
    <div className="iso-page">
      <Helmet>
        <title>{t('iso45001.meta.title')}</title>
        <meta name="description" content={t('iso45001.meta.description')} />
        <meta name="keywords" content={t('iso45001.meta.keywords')} />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema('ISO 45001 Certification - Health & Safety', 'ISO 45001 Occupational Health and Safety Management System certification.', '/services/iso/iso-45001'))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'ISO Certifications', path: '/services/iso' },
            { name: 'ISO 45001', path: '/services/iso/iso-45001' }
          ]))}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>{t('iso45001.hero.title')}</h1>
          <p className="iso-subtitle">
            {t('iso45001.hero.subtitle')}
          </p>
          <Link
            to={routes.applyOnline[currentLang]}
            className="btn btn-primary btn-quote"
          >
            {t('common.applyOnline')}
          </Link>
        </div>
      </section>

      {/* What is ISO 45001 */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('iso45001.whatIs.title')}</h2>
          <p className="iso-text">
            {t('iso45001.whatIs.description')}
          </p>

          <div className="iso-role-box">
            <h3>{t('iso45001.whatIs.roleBox.title')}</h3>
            <p>
              {t('iso45001.whatIs.roleBox.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('iso45001.benefits.title')}</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>{t('iso45001.benefits.benefit1.title')}</h3>
              <p>{t('iso45001.benefits.benefit1.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>{t('iso45001.benefits.benefit2.title')}</h3>
              <p>{t('iso45001.benefits.benefit2.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>{t('iso45001.benefits.benefit3.title')}</h3>
              <p>{t('iso45001.benefits.benefit3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('iso45001.industryFocus.title')}</h2>
          <p className="section-intro">
            {t('iso45001.industryFocus.subtitle')}
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h3>{t('iso45001.industryFocus.construction.title')}</h3>
              <p>{t('iso45001.industryFocus.construction.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('iso45001.industryFocus.manufacturing.title')}</h3>
              <p>{t('iso45001.industryFocus.manufacturing.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('iso45001.industryFocus.logistics.title')}</h3>
              <p>{t('iso45001.industryFocus.logistics.description')}</p>
            </div>
            <div className="industry-focus-item">
              <h3>{t('iso45001.industryFocus.energy.title')}</h3>
              <p>{t('iso45001.industryFocus.energy.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('iso45001.mscAdvantage.title')}</h2>
          <p className="section-intro">
            {t('iso45001.mscAdvantage.subtitle')}
          </p>

          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>{t('iso45001.mscAdvantage.specializedAuditors.title')}</h3>
              <p>{t('iso45001.mscAdvantage.specializedAuditors.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('iso45001.mscAdvantage.practicalAudit.title')}</h3>
              <p>{t('iso45001.mscAdvantage.practicalAudit.description')}</p>
            </div>
            <div className="advantage-card">
              <h3>{t('iso45001.mscAdvantage.objectiveCertification.title')}</h3>
              <p>{t('iso45001.mscAdvantage.objectiveCertification.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('iso45001.process.title')}</h2>
          <p className="section-intro">
            {t('iso45001.process.subtitle')}
          </p>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h3>{t('iso45001.process.step1')}</h3>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h3>{t('iso45001.process.step2')}<br /><span className="process-detail">{t('iso45001.process.step2Detail')}</span></h3>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h3>{t('iso45001.process.step3')}</h3>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <h3>{t('iso45001.process.step4')}<br /><span className="process-detail">{t('iso45001.process.step4Detail')}</span></h3>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h3>{t('iso45001.process.step5')}<br /><span className="process-detail">{t('iso45001.process.step5Detail')}</span></h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>{t('iso45001.cta.title')}</h2>
          <p>
            {t('iso45001.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.quoteForm[currentLang].replace(':isoCode', 'iso-45001')} className="btn btn-primary">{t('common.getIsoQuote', { isoCode: 'ISO 45001' })}</Link>
          </div>
          <p className="cta-footer">
            {t('iso45001.cta.footer')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISO45001;
