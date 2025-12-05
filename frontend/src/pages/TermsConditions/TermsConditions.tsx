import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';
import './TermsConditions.css';

const TermsConditions: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  return (
    <div className="terms-page">
      <Helmet>
        <title>{t('meta.termsConditions.title')}</title>
        <meta name="description" content={t('meta.termsConditions.description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>{t('termsConditions.title')}</h1>
          <p className="about-subtitle">
            {t('termsConditions.lastUpdated')}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section section-white">
        <div className="container">
          <div className="terms-content">
            <div className="terms-section">
              <h2>{t('termsConditions.sections.introduction.title')}</h2>
              <p>
                {t('termsConditions.sections.introduction.content')}
              </p>
            </div>

            <div className="terms-section">
              <h2>{t('termsConditions.sections.services.title')}</h2>
              <p>
                {t('termsConditions.sections.services.content')}
              </p>
            </div>

            <div className="terms-section">
              <h2>{t('termsConditions.sections.intellectualProperty.title')}</h2>
              <p>
                {t('termsConditions.sections.intellectualProperty.content')}
              </p>
            </div>

            <div className="terms-section">
              <h2>{t('termsConditions.sections.websiteUsage.title')}</h2>
              <p>
                {t('termsConditions.sections.websiteUsage.content')}
              </p>
            </div>

            <div className="terms-section">
              <h2>{t('termsConditions.sections.liability.title')}</h2>
              <p>
                {t('termsConditions.sections.liability.content')}
              </p>
            </div>

            <div className="terms-section">
              <h2>{t('termsConditions.sections.externalLinks.title')}</h2>
              <p>
                {t('termsConditions.sections.externalLinks.content')}
              </p>
            </div>

            <div className="terms-section">
              <h2>{t('termsConditions.sections.privacy.title')}</h2>
              <p>
                {t('termsConditions.sections.privacy.content')}
              </p>
            </div>

            <div className="terms-section">
              <h2>{t('termsConditions.sections.changes.title')}</h2>
              <p>
                {t('termsConditions.sections.changes.content')}
              </p>
            </div>

            <div className="terms-section">
              <h2>{t('termsConditions.sections.jurisdiction.title')}</h2>
              <p>
                {t('termsConditions.sections.jurisdiction.content')}
              </p>
            </div>

            <div className="terms-section">
              <h2>{t('termsConditions.sections.contact.title')}</h2>
              <p>{t('termsConditions.sections.contact.content')}</p>
              <p>
                <strong>Email:</strong> <a href={`mailto:${t('termsConditions.sections.contact.email')}`}>{t('termsConditions.sections.contact.email')}</a><br />
                <strong>{t('footer.address')}:</strong> {t('termsConditions.sections.contact.address')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-cta-final">
        <div className="container">
          <h2>{t('termsConditions.cta.title')}</h2>
          <p>
            {t('termsConditions.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary-large">{t('common.contactUs')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
