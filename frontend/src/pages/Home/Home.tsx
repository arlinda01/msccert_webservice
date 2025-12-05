import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import * as FaIcons from 'react-icons/fa';
import type { FAQ } from '../../types';
import ISOSlider from '../../components/ISOSlider/ISOSlider';
import { routes, SupportedLanguage } from '../../config/routes';

const Home: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const isoCards = [
    {
      to: routes.iso9001[currentLang],
      icon: "FaAward" as const,
      title: t('home.certificationPortfolio.iso9001.title'),
      description: t('home.certificationPortfolio.iso9001.description'),
      benefits: ["Global Recognition", "Improved Efficiency", "Stronger Customer Loyalty"]
    },
    {
      to: routes.iso45001[currentLang],
      icon: "FaHardHat" as const,
      title: t('home.certificationPortfolio.iso45001.title'),
      description: t('home.certificationPortfolio.iso45001.description'),
      benefits: ["Reduce Workplace Accidents", "Legal Compliance", "Lower Insurance Costs"]
    },
    {
      to: routes.iso14001[currentLang],
      icon: "FaLeaf" as const,
      title: t('home.certificationPortfolio.iso14001.title'),
      description: t('home.certificationPortfolio.iso14001.description'),
      benefits: ["Reduce Environmental Impact", "Cost Savings", "Regulatory Compliance"]
    },
    {
      to: routes.iso27001[currentLang],
      icon: "FaLock" as const,
      title: t('home.certificationPortfolio.iso27001.title'),
      description: t('home.certificationPortfolio.iso27001.description'),
      benefits: ["Data Protection", "GDPR Compliance", "Enhanced Cyber Security"]
    },
    {
      to: routes.iso22301[currentLang],
      icon: "FaShieldAlt" as const,
      title: t('home.certificationPortfolio.iso22301.title'),
      description: t('home.certificationPortfolio.iso22301.description'),
      benefits: ["Minimize Downtime", "Protect Revenue", "Maintain Critical Operations"]
    },
    {
      to: routes.iso37001[currentLang],
      icon: "FaCertificate" as const,
      title: t('home.certificationPortfolio.iso37001.title'),
      description: t('home.certificationPortfolio.iso37001.description'),
      benefits: ["Reduce Legal Risk", "Clean Reputation", "Tender Qualification"]
    },
    {
      to: routes.haccp[currentLang],
      icon: "FaUtensils" as const,
      title: t('home.certificationPortfolio.iso22000.title'),
      description: t('home.certificationPortfolio.iso22000.description'),
      benefits: ["HORECA Compliance", "Supply Chain Security", "Consumer Trust"]
    },
    {
      to: routes.iso39001[currentLang],
      icon: "FaCar" as const,
      title: t('home.certificationPortfolio.iso39001.title'),
      description: t('home.certificationPortfolio.iso39001.description'),
      benefits: ["Reduce Fleet Accidents", "Lower Insurance Premiums", "Improve Driver Safety"]
    },
    {
      to: routes.iso50001[currentLang],
      icon: "FaBolt" as const,
      title: t('home.certificationPortfolio.iso50001.title'),
      description: t('home.certificationPortfolio.iso50001.description'),
      benefits: ["Reduce Utility Bills", "Measurable Savings", "Environmental Performance"]
    }
  ];

  const faqs: FAQ[] = [
    {
      question: t('home.faq.q1.question'),
      answer: t('home.faq.q1.answer')
    },
    {
      question: t('home.faq.q2.question'),
      answer: t('home.faq.q2.answer')
    },
    {
      question: t('home.faq.q3.question'),
      answer: t('home.faq.q3.answer')
    },
    {
      question: t('home.faq.q4.question'),
      answer: t('home.faq.q4.answer')
    },
    {
      question: t('home.faq.q5.question'),
      answer: t('home.faq.q5.answer')
    },
    {
      question: t('home.faq.q6.question'),
      answer: t('home.faq.q6.answer')
    }
  ];

  return (
    <div className="home">
      <Helmet>
        <title>{t('meta.home.title')}</title>
        <meta name="description" content={t('meta.home.description')} />
        <meta name="keywords" content={t('meta.home.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{t('home.hero.title')}</h1>
          <p className="hero-subtitle">
            {t('home.hero.subtitle')}
          </p>

          {/* Hero Feature Icons */}
          <div className="hero-features">
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                {FaIcons.FaShieldAlt({}) as any}
              </div>
              <span>{t('home.heroFeatures.globallyAccredited')}</span>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                {FaIcons.FaUsers({}) as any}
              </div>
              <span>{t('home.heroFeatures.expertAuditors')}</span>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                {FaIcons.FaCheckCircle({}) as any}
              </div>
              <span>{t('home.heroFeatures.fastCertification')}</span>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                {FaIcons.FaGlobeAmericas({}) as any}
              </div>
              <span>{t('home.heroFeatures.localSupport')}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Core Certification Portfolio - Right after Hero */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('home.certificationPortfolio.title')}</h2>
          <p className="section-intro">
            {t('home.certificationPortfolio.subtitle')}
          </p>

          {/* ISO Certifications Slider */}
          <ISOSlider cards={isoCards} />
        </div>
      </section>

      {/* MSC Difference Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('home.mscDifference.title')}</h2>
          <p className="section-intro">
            {t('home.mscDifference.subtitle')}
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon">
                {FaIcons.FaUsers({}) as any}
              </div>
              <h3>{t('home.mscDifference.specializedAuditors.title')}</h3>
              <p>
                {t('home.mscDifference.specializedAuditors.description')}
              </p>
            </div>
            <div className="feature-card">
              <div className="card-icon">
                {FaIcons.FaGlobeAmericas({}) as any}
              </div>
              <h3>{t('home.mscDifference.regulatoryExpertise.title')}</h3>
              <p>
                {t('home.mscDifference.regulatoryExpertise.description')}
              </p>
            </div>
            <div className="feature-card">
              <div className="card-icon">
                {FaIcons.FaChartLine({}) as any}
              </div>
              <h3>{t('home.mscDifference.valueAudit.title')}</h3>
              <p>
                {t('home.mscDifference.valueAudit.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Business Solutions */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('home.specializedSolutions.title')}</h2>
          <p className="section-intro">
            {t('home.specializedSolutions.subtitle')}
          </p>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="card-icon">
                {FaIcons.FaBolt({}) as any}
              </div>
              <h4>{t('home.specializedSolutions.energyEfficiency.title')}</h4>
              <p>
                {t('home.specializedSolutions.energyEfficiency.description')}
              </p>
              <Link to={routes.energyEfficiency[currentLang]} className="card-btn">{t('common.learnMore')}</Link>
            </div>
            <div className="solution-card">
              <div className="card-icon">
                {FaIcons.FaGraduationCap({}) as any}
              </div>
              <h4>{t('home.specializedSolutions.staffTraining.title')}</h4>
              <p>
                {t('home.specializedSolutions.staffTraining.description')}
              </p>
              <Link to={routes.staffTraining[currentLang]} className="card-btn">{t('common.learnMore')}</Link>
            </div>
            <div className="solution-card">
              <div className="card-icon">
                {FaIcons.FaIdCard({}) as any}
              </div>
              <h4>{t('home.specializedSolutions.professionalCards.title')}</h4>
              <p>
                {t('home.specializedSolutions.professionalCards.description')}
              </p>
              <Link to={routes.professionalCard[currentLang]} className="card-btn">{t('common.learnMore')}</Link>
            </div>
            <div className="solution-card">
              <div className="card-icon">
                {FaIcons.FaMicrochip({}) as any}
              </div>
              <h4>{t('home.specializedSolutions.techAssessment.title')}</h4>
              <p>
                {t('home.specializedSolutions.techAssessment.description')}
              </p>
              <Link to={routes.equipmentEvaluation[currentLang]} className="card-btn">{t('common.learnMore')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t('home.industryFocus.title')}</h2>
          <p className="section-intro">
            {t('home.industryFocus.subtitle')}
          </p>
          <div className="industries-list">
            <div className="industry-item">
              <div className="card-icon">
                {FaIcons.FaBuilding({}) as any}
              </div>
              <h4>{t('home.industryFocus.construction.title')}</h4>
              <p>{t('home.industryFocus.construction.description')}</p>
            </div>
            <div className="industry-item">
              <div className="card-icon">
                {FaIcons.FaUtensils({}) as any}
              </div>
              <h4>{t('home.industryFocus.foodHoreca.title')}</h4>
              <p>{t('home.industryFocus.foodHoreca.description')}</p>
            </div>
            <div className="industry-item">
              <div className="card-icon">
                {FaIcons.FaMicrochip({}) as any}
              </div>
              <h4>{t('home.industryFocus.itTelecom.title')}</h4>
              <p>{t('home.industryFocus.itTelecom.description')}</p>
            </div>
            <div className="industry-item">
              <div className="card-icon">
                {FaIcons.FaIndustry({}) as any}
              </div>
              <h4>{t('home.industryFocus.manufacturingEnergy.title')}</h4>
              <p>{t('home.industryFocus.manufacturingEnergy.description')}</p>
            </div>
            <div className="industry-item">
              <div className="card-icon">
                {FaIcons.FaAward({}) as any}
              </div>
              <h4>{t('home.industryFocus.publicSector.title')}</h4>
              <p>{t('home.industryFocus.publicSector.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Interactive Accordion */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t('home.faq.title')}</h2>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFAQ === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <svg
                    className="faq-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section section-cta-final">
        <div className="container">
          <h2>{t('home.cta.title')}</h2>
          <p>
            {t('home.cta.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary-large">{t('common.requestQuote')}</Link>
          </div>
          <p className="cta-footer">
            {t('home.cta.accreditedNote')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
