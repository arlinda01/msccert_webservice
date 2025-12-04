import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const FAQ: FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqSections: FAQSection[] = [
    {
      title: 'General Questions',
      items: [
        {
          question: '1. What does MSC CERTIFICATIONS do?',
          answer: 'MSC CERTIFICATIONS is an accredited certification and assessment body providing ISO certification, CE marking, and specialized compliance services. We conduct audits, evaluations, and inspections to ensure your organization meets international standards for quality, safety, environmental performance, and compliance.'
        },
        {
          question: '2. What industries do you serve?',
          answer: (
            <>
              We work with clients across all major industries, including:
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>Manufacturing</li>
                <li>Construction</li>
                <li>Logistics</li>
                <li>Food production</li>
                <li>Hospitality (HORECA)</li>
                <li>Healthcare</li>
                <li>IT</li>
                <li>Public administration</li>
              </ul>
            </>
          )
        },
        {
          question: '3. How long does the certification process take?',
          answer: 'The duration depends on the size and complexity of your organization and the standard you\'re certifying for. Typically, ISO certification can take from a few weeks to a few months, including the audit and reporting phases.'
        },
        {
          question: '4. What is the difference between certification and consultancy?',
          answer: 'Certification is an independent assessment of compliance with a standard. Consultancy involves helping you build the system. MSC CERTIFICATIONS provides only auditing and certification — not consultancy — ensuring impartiality and full compliance with accreditation rules.'
        },
        {
          question: '5. Are your certificates internationally recognized?',
          answer: 'Yes. All MSC CERTIFICATIONS certificates are issued under international accreditation, recognized globally by regulators, clients, and tendering bodies.'
        }
      ]
    },
    {
      title: 'ISO Certification',
      items: [
        {
          question: '6. Which ISO standards can you certify?',
          answer: (
            <>
              We offer accredited certification for:
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>ISO 9001 – Quality Management</li>
                <li>ISO 14001 – Environmental Management</li>
                <li>ISO 22000 – Food Safety</li>
                <li>ISO 27001 – Information Security</li>
                <li>ISO 45001 – Health & Safety</li>
                <li>ISO 22301 – Business Continuity</li>
                <li>ISO 37001 – Anti-Bribery</li>
                <li>ISO 39001 – Road Traffic Safety</li>
                <li>ISO 50001 – Energy Management</li>
                <li>HACCP – Food Safety Risk Management</li>
              </ul>
            </>
          )
        },
        {
          question: '7. Why should my company become ISO certified?',
          answer: 'ISO certification demonstrates your commitment to quality, safety, and efficiency. It improves client trust, supports compliance, reduces risks, and increases eligibility for public and private contracts.'
        },
        {
          question: '8. What happens during an ISO audit?',
          answer: 'Our auditors review your processes, documentation, and implementation of the standard\'s requirements. The audit identifies both strengths and areas for improvement. If all requirements are met, your organization receives an official certificate.'
        }
      ]
    },
    {
      title: 'Compliance & Marking',
      items: [
        {
          question: '9. What is CE Marking and who needs it?',
          answer: 'CE Marking is mandatory for many products sold in the European Economic Area (EEA). It shows that your product complies with EU safety, health, and environmental regulations. We provide assessment and conformity audits to help you achieve compliance.'
        }
      ]
    },
    {
      title: 'Additional Services',
      items: [
        {
          question: '10. What is an Energy Efficiency Program?',
          answer: 'It\'s a structured approach to measure, analyze, and reduce energy consumption in your operations. We perform audits and help you identify opportunities to lower costs, reduce CO₂ emissions, and improve sustainability.'
        },
        {
          question: '11. What is a Technological Card?',
          answer: 'A Technological Card is a technical document that defines the production process, materials, and equipment needed for manufacturing consistency and quality control.'
        },
        {
          question: '12. What is a Professional Card?',
          answer: 'A Professional Card describes a specific job role, responsibilities, and qualifications, ensuring each employee\'s duties are clearly defined and compliant with labor standards.'
        },
        {
          question: '13. Do you provide staff training?',
          answer: 'Yes. We offer role-based and competency-driven training programs aligned with ISO 9001, ISO 14001, and ISO 45001 standards — improving performance, safety, and compliance.'
        },
        {
          question: '14. Do you perform equipment and technological line evaluations?',
          answer: 'Yes. We conduct technical assessments of production lines, machinery, and equipment to evaluate condition, efficiency, and compliance — essential for modernization or insurance purposes.'
        }
      ]
    },
    {
      title: 'Process & Practicalities',
      items: [
        {
          question: '15. How can I request a certification or service quote?',
          answer: (
            <>
              Simply fill out the <Link to="/contact" style={{ color: '#3498db' }}>Contact Form</Link> or call our office. Our team will provide a customized proposal based on your organization's size, scope, and standards.
            </>
          )
        },
        {
          question: '16. What happens after certification?',
          answer: 'We conduct annual surveillance audits to verify continued compliance and help ensure ongoing improvement. Certificates are valid for three years, after which a full recertification audit is performed.'
        },
        {
          question: '17. Do you operate internationally?',
          answer: 'Yes. While based in Albania, MSC CERTIFICATIONS serves clients across the region and beyond through a network of accredited auditors.'
        },
        {
          question: '18. How do I know which ISO or compliance service I need?',
          answer: 'If you\'re unsure, our team will assess your organization\'s activities, risks, and goals and recommend the most relevant standard or compliance program.'
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <Helmet>
        <title>Frequently Asked Questions | ISO Certification & Compliance | MSC CERTIFICATIONS</title>
        <meta name="description" content="Find answers to the most common questions about ISO certification, CE marking, audits, and compliance with MSC CERTIFICATIONS." />
        <meta name="keywords" content="FAQ, ISO certification, compliance audit, CE Marking, accredited certification body, ISO auditor, DPA accreditation, international certification, ISO Albania" />
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Frequently Asked Questions (FAQ)</h1>
          <p className="about-subtitle">
            MSC CERTIFICATIONS — Your Questions Answered
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section section-white">
        <div className="container">
          <p className="about-text centered" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            At MSC CERTIFICATIONS, we believe clarity builds confidence. Below, you'll find answers to the most common questions about our certification and compliance services. If you don't see your question here, feel free to <Link to="/contact" style={{ color: '#3498db' }}>contact our team</Link> — we're here to help.
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
          <h2>Still Have Questions?</h2>
          <p>
            We'd love to help. Contact us today to discuss your certification, compliance, or training needs — and take the next step toward internationally recognized excellence.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary-large">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;