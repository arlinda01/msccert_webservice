import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { routes, SupportedLanguage } from '../../config/routes';
import { faqSchema, breadcrumbSchema } from '../../utils/schemas';
import './FAQ.css';

const FAQ: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqSections = [
    {
      title: t('faq.sections.general.title'),
      items: [
        {
          question: t('faq.sections.general.q1.question'),
          answer: t('faq.sections.general.q1.answer')
        },
        {
          question: t('faq.sections.general.q2.question'),
          answer: t('faq.sections.general.q2.answer')
        },
        {
          question: t('faq.sections.general.q3.question'),
          answer: t('faq.sections.general.q3.answer')
        },
        {
          question: t('faq.sections.general.q4.question'),
          answer: t('faq.sections.general.q4.answer')
        },
        {
          question: t('faq.sections.general.q5.question'),
          answer: t('faq.sections.general.q5.answer')
        }
      ]
    },
    {
      title: t('faq.sections.isoCertification.title'),
      items: [
        {
          question: t('faq.sections.isoCertification.q1.question'),
          answer: t('faq.sections.isoCertification.q1.answer')
        },
        {
          question: t('faq.sections.isoCertification.q2.question'),
          answer: t('faq.sections.isoCertification.q2.answer')
        },
        {
          question: t('faq.sections.isoCertification.q3.question'),
          answer: t('faq.sections.isoCertification.q3.answer')
        }
      ]
    },
    {
      title: t('faq.sections.complianceCE.title'),
      items: [
        {
          question: t('faq.sections.complianceCE.q1.question'),
          answer: t('faq.sections.complianceCE.q1.answer')
        }
      ]
    },
    {
      title: t('faq.sections.additionalServices.title'),
      items: [
        {
          question: t('faq.sections.additionalServices.q1.question'),
          answer: t('faq.sections.additionalServices.q1.answer')
        },
        {
          question: t('faq.sections.additionalServices.q2.question'),
          answer: t('faq.sections.additionalServices.q2.answer')
        },
        {
          question: t('faq.sections.additionalServices.q3.question'),
          answer: t('faq.sections.additionalServices.q3.answer')
        },
        {
          question: t('faq.sections.additionalServices.q4.question'),
          answer: t('faq.sections.additionalServices.q4.answer')
        },
        {
          question: t('faq.sections.additionalServices.q5.question'),
          answer: t('faq.sections.additionalServices.q5.answer')
        }
      ]
    },
    {
      title: t('faq.sections.processPractices.title'),
      items: [
        {
          question: t('faq.sections.processPractices.q1.question'),
          answer: t('faq.sections.processPractices.q1.answer')
        },
        {
          question: t('faq.sections.processPractices.q2.question'),
          answer: t('faq.sections.processPractices.q2.answer')
        },
        {
          question: t('faq.sections.processPractices.q3.question'),
          answer: t('faq.sections.processPractices.q3.answer')
        },
        {
          question: t('faq.sections.processPractices.q4.question'),
          answer: t('faq.sections.processPractices.q4.answer')
        }
      ]
    }
  ];

  const allFaqItems = faqSections.flatMap(s => s.items);

  return (
    <div className="faq-page">
      <Helmet>
        <title>{t('meta.faq.title')}</title>
        <meta name="description" content={t('meta.faq.description')} />
        <meta name="keywords" content={t('meta.faq.keywords')} />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema(allFaqItems))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]))}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>{t('faq.title')}</h1>
          <p className="about-subtitle">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section section-white">
        <div className="container">
          <p className="about-text centered" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            {t('faq.intro')}
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section section-gray">
        <div className="container">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="faq-section">
              <h2 className="faq-section-title">{section.title}</h2>
              <div className="faq-items">
                {section.items.map((item, itemIndex) => {
                  const key = `${sectionIndex}-${itemIndex}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={itemIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button
                        className="faq-question"
                        onClick={() => toggleItem(sectionIndex, itemIndex)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                        <div className="faq-answer-content">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-cta-final">
        <div className="container">
          <h2>{t('faq.stillHaveQuestions.title')}</h2>
          <p>
            {t('faq.stillHaveQuestions.description')}
          </p>
          <div className="cta-buttons">
            <Link to={routes.contact[currentLang]} className="btn btn-primary-large">{t('common.contactUs')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
