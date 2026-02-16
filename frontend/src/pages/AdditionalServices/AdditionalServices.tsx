import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ISOSlider from '../../components/ISOSlider/ISOSlider';
import { routes, SupportedLanguage } from '../../config/routes';
import { breadcrumbSchema } from '../../utils/schemas';

const AdditionalServices: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  const isoCards = [
    {
      to: routes.iso9001[currentLang],
      icon: "FaAward" as const,
      title: t('services.isoCards.iso9001.title'),
      description: t('services.isoCards.iso9001.description'),
      benefits: [t('services.isoCards.iso9001.benefits.0'), t('services.isoCards.iso9001.benefits.1'), t('services.isoCards.iso9001.benefits.2')]
    },
    {
      to: routes.iso14001[currentLang],
      icon: "FaLeaf" as const,
      title: t('services.isoCards.iso14001.title'),
      description: t('services.isoCards.iso14001.description'),
      benefits: [t('services.isoCards.iso14001.benefits.0'), t('services.isoCards.iso14001.benefits.1'), t('services.isoCards.iso14001.benefits.2')]
    },
    {
      to: routes.iso45001[currentLang],
      icon: "FaHardHat" as const,
      title: t('services.isoCards.iso45001.title'),
      description: t('services.isoCards.iso45001.description'),
      benefits: [t('services.isoCards.iso45001.benefits.0'), t('services.isoCards.iso45001.benefits.1'), t('services.isoCards.iso45001.benefits.2')]
    },
    {
      to: routes.haccp[currentLang],
      icon: "FaUtensils" as const,
      title: t('services.isoCards.haccp.title'),
      description: t('services.isoCards.haccp.description'),
      benefits: [t('services.isoCards.haccp.benefits.0'), t('services.isoCards.haccp.benefits.1'), t('services.isoCards.haccp.benefits.2')]
    },
    {
      to: routes.iso27001[currentLang],
      icon: "FaLock" as const,
      title: t('services.isoCards.iso27001.title'),
      description: t('services.isoCards.iso27001.description'),
      benefits: [t('services.isoCards.iso27001.benefits.0'), t('services.isoCards.iso27001.benefits.1'), t('services.isoCards.iso27001.benefits.2')]
    },
    {
      to: routes.iso22301[currentLang],
      icon: "FaShieldAlt" as const,
      title: t('services.isoCards.iso22301.title'),
      description: t('services.isoCards.iso22301.description'),
      benefits: [t('services.isoCards.iso22301.benefits.0'), t('services.isoCards.iso22301.benefits.1'), t('services.isoCards.iso22301.benefits.2')]
    },
    {
      to: routes.iso37001[currentLang],
      icon: "FaHandshake" as const,
      title: t('services.isoCards.iso37001.title'),
      description: t('services.isoCards.iso37001.description'),
      benefits: [t('services.isoCards.iso37001.benefits.0'), t('services.isoCards.iso37001.benefits.1'), t('services.isoCards.iso37001.benefits.2')]
    },
    {
      to: routes.iso39001[currentLang],
      icon: "FaCar" as const,
      title: t('services.isoCards.iso39001.title'),
      description: t('services.isoCards.iso39001.description'),
      benefits: [t('services.isoCards.iso39001.benefits.0'), t('services.isoCards.iso39001.benefits.1'), t('services.isoCards.iso39001.benefits.2')]
    },
    {
      to: routes.iso50001[currentLang],
      icon: "FaBolt" as const,
      title: t('services.isoCards.iso50001.title'),
      description: t('services.isoCards.iso50001.description'),
      benefits: [t('services.isoCards.iso50001.benefits.0'), t('services.isoCards.iso50001.benefits.1'), t('services.isoCards.iso50001.benefits.2')]
    }
  ];

  const complianceCards = [
    {
      to: routes.ceMarking[currentLang],
      icon: "FaCheckDouble" as const,
      title: t('services.complianceCards.ceMarking.title'),
      description: t('services.complianceCards.ceMarking.description'),
      benefits: [t('services.complianceCards.ceMarking.benefits.0'), t('services.complianceCards.ceMarking.benefits.1'), t('services.complianceCards.ceMarking.benefits.2')]
    },
    {
      to: routes.energyEfficiency[currentLang],
      icon: "FaBolt" as const,
      title: t('services.complianceCards.energyEfficiency.title'),
      description: t('services.complianceCards.energyEfficiency.description'),
      benefits: [t('services.complianceCards.energyEfficiency.benefits.0'), t('services.complianceCards.energyEfficiency.benefits.1'), t('services.complianceCards.energyEfficiency.benefits.2')]
    },
    {
      to: routes.equipmentEvaluation[currentLang],
      icon: "FaCogs" as const,
      title: t('services.complianceCards.equipmentEvaluation.title'),
      description: t('services.complianceCards.equipmentEvaluation.description'),
      benefits: [t('services.complianceCards.equipmentEvaluation.benefits.0'), t('services.complianceCards.equipmentEvaluation.benefits.1'), t('services.complianceCards.equipmentEvaluation.benefits.2')]
    }
  ];

  const workforceCards = [
    {
      to: routes.staffTraining[currentLang],
      icon: "FaGraduationCap" as const,
      title: t('services.workforceCards.staffTraining.title'),
      description: t('services.workforceCards.staffTraining.description'),
      benefits: [t('services.workforceCards.staffTraining.benefits.0'), t('services.workforceCards.staffTraining.benefits.1'), t('services.workforceCards.staffTraining.benefits.2')]
    },
    {
      to: routes.professionalCard[currentLang],
      icon: "FaIdCard" as const,
      title: t('services.workforceCards.professionalCard.title'),
      description: t('services.workforceCards.professionalCard.description'),
      benefits: [t('services.workforceCards.professionalCard.benefits.0'), t('services.workforceCards.professionalCard.benefits.1'), t('services.workforceCards.professionalCard.benefits.2')]
    },
    {
      to: routes.technologicalCard[currentLang],
      icon: "FaFileAlt" as const,
      title: t('services.workforceCards.technologicalCard.title'),
      description: t('services.workforceCards.technologicalCard.description'),
      benefits: [t('services.workforceCards.technologicalCard.benefits.0'), t('services.workforceCards.technologicalCard.benefits.1'), t('services.workforceCards.technologicalCard.benefits.2')]
    }
  ];

  return (
    <div className="iso-page">
      <Helmet>
        <title>{t('services.meta.title')}</title>
        <meta name="description" content={t('services.meta.description')} />
        <meta name="keywords" content={t('services.meta.keywords')} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]))}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>{t('services.hero.title')}</h1>
          <p className="iso-subtitle">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('services.whatWeOffer.title')}</h2>
          <p className="iso-text">
            {t('services.whatWeOffer.description1')}
          </p>
          <p className="iso-text">
            {t('services.whatWeOffer.description2')}
          </p>
        </div>
      </section>

      {/* ISO Certification Services */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('services.isoSection.title')}</h2>
          <p className="section-intro">
            {t('services.isoSection.subtitle')}
          </p>
          <ISOSlider cards={isoCards} />
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to={routes.isoServices[currentLang]} className="btn btn-secondary">{t('services.isoSection.viewAll')}</Link>
          </div>
        </div>
      </section>

      {/* Product and Compliance Services */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('services.complianceSection.title')}</h2>
          <p className="section-intro">
            {t('services.complianceSection.subtitle')}
          </p>
          <ISOSlider cards={complianceCards} />
        </div>
      </section>

      {/* Workforce Competence */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('services.workforceSection.title')}</h2>
          <p className="section-intro">
            {t('services.workforceSection.subtitle')}
          </p>
          <ISOSlider cards={workforceCards} />
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('services.industries.title')}</h2>
          <p className="section-intro">
            {t('services.industries.subtitle')}
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>{t('services.industries.construction.title')}</h3>
              <p>{t('services.industries.construction.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>{t('services.industries.food.title')}</h3>
              <p>{t('services.industries.food.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>{t('services.industries.it.title')}</h3>
              <p>{t('services.industries.it.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>{t('services.industries.manufacturing.title')}</h3>
              <p>{t('services.industries.manufacturing.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">5</div>
              <h3>{t('services.industries.publicSector.title')}</h3>
              <p>{t('services.industries.publicSector.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">6</div>
              <h3>{t('services.industries.logistics.title')}</h3>
              <p>{t('services.industries.logistics.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('services.accreditation.title')}</h2>
          <p className="iso-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            {t('services.accreditation.description')}
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to={routes.accreditation[currentLang]} className="btn btn-secondary">{t('services.accreditation.button')}</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>{t('services.cta.title')}</h2>
          <p>
            {t('services.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary">{t('services.cta.button')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalServices;