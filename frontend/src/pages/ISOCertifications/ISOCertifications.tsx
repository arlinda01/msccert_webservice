import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import * as FaIcons from 'react-icons/fa';
import ISOSlider from '../../components/ISOSlider/ISOSlider';
import { routes, SupportedLanguage } from '../../config/routes';
import { breadcrumbSchema } from '../../utils/schemas';

const ISOCertifications: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  const isoCards = [
    {
      to: routes.iso9001[currentLang],
      icon: "FaAward" as const,
      title: t('isoCertifications.cards.iso9001.title'),
      description: t('isoCertifications.cards.iso9001.description'),
      benefits: [
        t('isoCertifications.cards.iso9001.benefits.0'),
        t('isoCertifications.cards.iso9001.benefits.1'),
        t('isoCertifications.cards.iso9001.benefits.2')
      ]
    },
    {
      to: routes.iso14001[currentLang],
      icon: "FaLeaf" as const,
      title: t('isoCertifications.cards.iso14001.title'),
      description: t('isoCertifications.cards.iso14001.description'),
      benefits: [
        t('isoCertifications.cards.iso14001.benefits.0'),
        t('isoCertifications.cards.iso14001.benefits.1'),
        t('isoCertifications.cards.iso14001.benefits.2')
      ]
    },
    {
      to: routes.iso22301[currentLang],
      icon: "FaShieldAlt" as const,
      title: t('isoCertifications.cards.iso22301.title'),
      description: t('isoCertifications.cards.iso22301.description'),
      benefits: [
        t('isoCertifications.cards.iso22301.benefits.0'),
        t('isoCertifications.cards.iso22301.benefits.1'),
        t('isoCertifications.cards.iso22301.benefits.2')
      ]
    },
    {
      to: routes.iso27001[currentLang],
      icon: "FaLock" as const,
      title: t('isoCertifications.cards.iso27001.title'),
      description: t('isoCertifications.cards.iso27001.description'),
      benefits: [
        t('isoCertifications.cards.iso27001.benefits.0'),
        t('isoCertifications.cards.iso27001.benefits.1'),
        t('isoCertifications.cards.iso27001.benefits.2')
      ]
    },
    {
      to: routes.iso37001[currentLang],
      icon: "FaCertificate" as const,
      title: t('isoCertifications.cards.iso37001.title'),
      description: t('isoCertifications.cards.iso37001.description'),
      benefits: [
        t('isoCertifications.cards.iso37001.benefits.0'),
        t('isoCertifications.cards.iso37001.benefits.1'),
        t('isoCertifications.cards.iso37001.benefits.2')
      ]
    },
    {
      to: routes.iso39001[currentLang],
      icon: "FaCar" as const,
      title: t('isoCertifications.cards.iso39001.title'),
      description: t('isoCertifications.cards.iso39001.description'),
      benefits: [
        t('isoCertifications.cards.iso39001.benefits.0'),
        t('isoCertifications.cards.iso39001.benefits.1'),
        t('isoCertifications.cards.iso39001.benefits.2')
      ]
    },
    {
      to: routes.iso45001[currentLang],
      icon: "FaHardHat" as const,
      title: t('isoCertifications.cards.iso45001.title'),
      description: t('isoCertifications.cards.iso45001.description'),
      benefits: [
        t('isoCertifications.cards.iso45001.benefits.0'),
        t('isoCertifications.cards.iso45001.benefits.1'),
        t('isoCertifications.cards.iso45001.benefits.2')
      ]
    },
    {
      to: routes.iso50001[currentLang],
      icon: "FaBolt" as const,
      title: t('isoCertifications.cards.iso50001.title'),
      description: t('isoCertifications.cards.iso50001.description'),
      benefits: [
        t('isoCertifications.cards.iso50001.benefits.0'),
        t('isoCertifications.cards.iso50001.benefits.1'),
        t('isoCertifications.cards.iso50001.benefits.2')
      ]
    },
    {
      to: routes.iso22000[currentLang],
      icon: "FaUtensils" as const,
      title: t('isoCertifications.cards.iso22000.title'),
      description: t('isoCertifications.cards.iso22000.description'),
      benefits: [
        t('isoCertifications.cards.iso22000.benefits.0'),
        t('isoCertifications.cards.iso22000.benefits.1'),
        t('isoCertifications.cards.iso22000.benefits.2')
      ]
    },
    {
      to: routes.haccp[currentLang],
      icon: "FaUtensils" as const,
      title: t('isoCertifications.cards.haccp.title'),
      description: t('isoCertifications.cards.haccp.description'),
      benefits: [
        t('isoCertifications.cards.haccp.benefits.0'),
        t('isoCertifications.cards.haccp.benefits.1'),
        t('isoCertifications.cards.haccp.benefits.2')
      ]
    }
  ];

  return (
    <div className="iso-page">
      <Helmet>
        <title>{t('isoCertifications.meta.title')}</title>
        <meta name="description" content={t('isoCertifications.meta.description')} />
        <meta name="keywords" content={t('isoCertifications.meta.keywords')} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'ISO Certifications', path: '/services/iso' },
          ]))}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>{t('isoCertifications.hero.title')}</h1>
          <p className="iso-subtitle">
            {t('isoCertifications.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* What are ISO Standards */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('isoCertifications.whatIs.title')}</h2>
          <p className="iso-text">
            {t('isoCertifications.whatIs.description1')}
          </p>
          <p className="iso-text">
            {t('isoCertifications.whatIs.description2')}
          </p>
        </div>
      </section>

      {/* Our ISO Certification Services */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('isoCertifications.ourServices.title')}</h2>
          <p className="section-intro">
            {t('isoCertifications.ourServices.subtitle')}
          </p>

          <ISOSlider cards={isoCards} />
        </div>
      </section>

      {/* Benefits */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('isoCertifications.benefits.title')}</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>{t('isoCertifications.benefits.benefit1.title')}</h3>
              <p>{t('isoCertifications.benefits.benefit1.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>{t('isoCertifications.benefits.benefit2.title')}</h3>
              <p>{t('isoCertifications.benefits.benefit2.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>{t('isoCertifications.benefits.benefit3.title')}</h3>
              <p>{t('isoCertifications.benefits.benefit3.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>{t('isoCertifications.benefits.benefit4.title')}</h3>
              <p>{t('isoCertifications.benefits.benefit4.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">5</div>
              <h3>{t('isoCertifications.benefits.benefit5.title')}</h3>
              <p>{t('isoCertifications.benefits.benefit5.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">6</div>
              <h3>{t('isoCertifications.benefits.benefit6.title')}</h3>
              <p>{t('isoCertifications.benefits.benefit6.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>{t('isoCertifications.cta.title')}</h2>
          <p>
            {t('isoCertifications.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary">{t('isoCertifications.cta.button')}</Link>
          </div>
          <p className="cta-footer">
            {t('isoCertifications.cta.footer')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISOCertifications;
