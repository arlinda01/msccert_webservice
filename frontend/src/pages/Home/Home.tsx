import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import type { FAQ } from '../../types';

const Home: FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "How long does the ISO certification process take?",
      answer: "The duration depends on the size and complexity of your organization, and your existing documentation. A small, well-prepared company might take 3-6 months from initial setup to final audit. Our initial gap analysis provides a clear timeline."
    },
    {
      question: "How much does ISO certification cost?",
      answer: "Costs vary based on the number of employees, the scope of the standard (e.g., ISO 9001 vs. ISO 27001), and the audit days required. We offer competitive and transparent pricing, providing a detailed quote after a free consultation and scope definition."
    },
    {
      question: "Is the certificate globally recognized?",
      answer: "Yes. All certificates issued through MSC CERTIFICATIONS are backed by internationally accredited bodies (IAF members). This ensures the certificate is recognized and accepted worldwide, including in the EU and SEE markets."
    },
    {
      question: "Do I need to implement multiple ISO standards?",
      answer: "Many organizations benefit from an Integrated Management System (IMS), combining standards like ISO 9001, 14001, and 45001. This saves time and resources by unifying documentation and audits. We can advise on the most beneficial combination for your business goals."
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Partner for ISO Certification, Compliance, and Risk Management</h1>
          <p className="hero-subtitle">
            Secure your business future. MSC CERTIFICATIONS provides accredited, value-added ISO certification services,
            helping you minimize risk, increase operational efficiency, and earn market trust. We are your specialized,
            local partner committed to transforming your management systems into a competitive advantage.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Request a Free Consultation</Link>
            <Link to="/free-online-assessment" className="btn btn-secondary">Get a Free Online Assessment</Link>
          </div>
        </div>
      </section>

      {/* MSC Difference Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">The MSC Difference: Why Choose Our Specialized Audits?</h2>
          <p className="section-intro">
            In the certification market, having a well-known logo isn't enough, you deserve an assessment that drives
            real improvement and profitability. Unlike multinational bodies that rely on generic auditors,
            MSC CERTIFICATIONS guarantees deep, contextual expertise within your specific industry.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Sector-Specific Experts</h3>
              <p>
                We match your industry. We provide a construction risk expert for building firms or a financial
                compliance specialist for banks. This ensures your audit is solution-oriented and applicable to
                your real-world operations.
              </p>
            </div>
            <div className="feature-card">
              <h3>Local Market Insight</h3>
              <p>
                We understand the nuances and regulatory pressures of the local and regional markets, making your
                system more robust against actual operational and legal risks, particularly in public procurement.
              </p>
            </div>
            <div className="feature-card">
              <h3>Auditing for Value</h3>
              <p>
                Our process actively identifies genuine cost-saving opportunities and process efficiencies,
                transforming the audit fee into an investment, not just an expense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Certification Portfolio */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Our Core Certification Portfolio: Global Standards, Local Success</h2>
          <p className="section-intro">
            We certify the systems that build trust and resilience, ensuring you meet global best practices
            while remaining competitive locally.
          </p>

          {/* Quality, Safety, and Environment */}
          <div className="certification-category">
            <h3 className="category-title">Quality, Safety, and Environment</h3>
            <div className="certification-grid">
              <div className="certification-card">
                <h4>ISO 9001 (Quality Management)</h4>
                <p>
                  The framework for operational consistency, significantly reducing errors, and qualifying your
                  business for major contracts and public tenders.
                </p>
                <Link to="/services/iso/iso-9001/quality-management" className="card-link">Learn More →</Link>
              </div>
              <div className="certification-card">
                <h4>ISO 45001 (Occupational Health & Safety)</h4>
                <p>
                  The international standard for preventing workplace injuries and illness, protecting your staff,
                  and mitigating high legal and insurance risks.
                </p>
                <Link to="/services/iso/iso-45001/health-and-safety-at-work" className="card-link">Learn More →</Link>
              </div>
              <div className="certification-card">
                <h4>ISO 14001 (Environmental Management)</h4>
                <p>
                  Demonstrates corporate social responsibility, secures legal compliance, and reduces long-term
                  operational costs through better resource management.
                </p>
                <Link to="/services/iso/iso-14001/environmental-management" className="card-link">Learn More →</Link>
              </div>
            </div>
          </div>

          {/* Information, Resilience, and Integrity */}
          <div className="certification-category">
            <h3 className="category-title">Information, Resilience, and Integrity</h3>
            <div className="certification-grid">
              <div className="certification-card">
                <h4>ISO/IEC 27001 (Information Security)</h4>
                <p>
                  Essential for protecting sensitive data, securing IT infrastructure, and achieving GDPR-level
                  compliance for client and partner confidence.
                </p>
                <Link to="/services/iso/iso-27001/information-security" className="card-link">Learn More →</Link>
              </div>
              <div className="certification-card">
                <h4>ISO 22301 (Business Continuity)</h4>
                <p>
                  Focuses on organizational resilience, ensuring rapid recovery (RTO/RPO) after major disruptions
                  to minimize financial loss and maintain critical services.
                </p>
                <Link to="/services/iso/iso-22301/business-continuity" className="card-link">Learn More →</Link>
              </div>
              <div className="certification-card">
                <h4>ISO 37001 (Anti-Bribery)</h4>
                <p>
                  Establishes systems for prevention and detection, critical for reducing penal risk and ensuring
                  a clean reputation, especially in high-exposure public tenders.
                </p>
                <Link to="/services/iso/iso-37001/anti-bribery-management" className="card-link">Learn More →</Link>
              </div>
            </div>
          </div>

          {/* Specialized Compliance and Sector Focus */}
          <div className="certification-category">
            <h3 className="category-title">Specialized Compliance and Sector Focus</h3>
            <div className="certification-grid">
              <div className="certification-card">
                <h4>ISO 22000 (Food Safety)</h4>
                <p>
                  Guarantees product integrity and traceability, securing access to regulated markets and meeting
                  HORECA and retailer requirements.
                </p>
                <Link to="/services/iso/iso-22000/food-safety-management" className="card-link">Learn More →</Link>
              </div>
              <div className="certification-card">
                <h4>ISO 39001 (Road Traffic Safety - RTS)</h4>
                <p>
                  Minimizes accidents and fatalities for companies with large fleets, leading to lower operating
                  costs, insurance premiums, and better fleet performance.
                </p>
                <Link to="/services/iso/iso-39001/road-traffic-safety" className="card-link">Learn More →</Link>
              </div>
              <div className="certification-card">
                <h4>ISO 50001 (Energy Management)</h4>
                <p>
                  A systematic approach to optimizing energy use, leading to measurable reductions in utility bills
                  and demonstrating verifiable performance to stakeholders.
                </p>
                <Link to="/services/iso/iso-50001/energy-management" className="card-link">Learn More →</Link>
              </div>
              <div className="certification-card">
                <h4>CE Marking (Product Compliance)</h4>
                <p>
                  The mandatory legal sign that allows your industrial and consumer products free circulation and
                  sale within the entire European (EU/SEE) market.
                </p>
                <Link to="/services/compliance/ce-marking" className="card-link">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Business Solutions */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Specialized Business Solutions: Beyond Certification</h2>
          <p className="section-intro">
            We offer integrated services that enhance competency and operational control:
          </p>
          <div className="solutions-grid">
            <div className="solution-card">
              <h4>Energy Efficiency Programs</h4>
              <p>
                Structured programs focusing on analyzing and reducing energy consumption in commercial buildings
                and processes for immediate cost savings.
              </p>
              <Link to="/services/additional/energy-efficiency" className="card-link">Learn More →</Link>
            </div>
            <div className="solution-card">
              <h4>Staff Training</h4>
              <p>
                Role-based programs aligned with ISO competencies (9001, 45001, etc.) to increase productivity,
                improve quality, and ensure regulatory safety compliance.
              </p>
              <Link to="/services/additional/staff-training" className="card-link">Learn More →</Link>
            </div>
            <div className="solution-card">
              <h4>Professional Cards</h4>
              <p>
                Personal certification used in regulated industries (e.g., HVAC technicians, welders) to instantly
                prove competence, securing access to specific projects and job markets.
              </p>
              <Link to="/services/additional/professional-cards" className="card-link">Learn More →</Link>
            </div>
            <div className="solution-card">
              <h4>Technology & Equipment Assessment</h4>
              <p>
                Technical evaluation of industrial machinery, technological lines, and equipment for certification,
                safety, and investment planning.
              </p>
              <Link to="/evaluation-of-technological-lines-machinery-equipment" className="card-link">Learn More →</Link>
            </div>
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Industry Focus: We Are Your Sector's Trusted Auditor</h2>
          <p className="section-intro">
            Certification success demands specific sectoral knowledge. We are the trusted choice for leaders in
            high-risk and highly regulated sectors:
          </p>
          <div className="industries-list">
            <div className="industry-item">
              <h4>Construction & Infrastructure</h4>
              <p>Risk management, quality assurance, and product compliance for major capital projects.</p>
            </div>
            <div className="industry-item">
              <h4>Food & HORECA</h4>
              <p>Securing the supply chain and ensuring global safety standards are met from production to consumption.</p>
            </div>
            <div className="industry-item">
              <h4>IT & Telecommunications</h4>
              <p>Data protection, system integrity, and service continuity in the digital economy.</p>
            </div>
            <div className="industry-item">
              <h4>Manufacturing & Energy</h4>
              <p>Process optimization, energy cost reduction, and compliance with strict environmental regulations.</p>
            </div>
            <div className="industry-item">
              <h4>Public Sector & Tenders</h4>
              <p>Demonstrating critical adherence to quality, integrity, and safety requirements (ISO 9001, ISO 37001).</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Interactive Accordion */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions (FAQ)</h2>
          <p className="section-intro">Answering your most pressing questions about the certification process:</p>
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
          <h2>Start Your Journey Towards Quality and Trust</h2>
          <p>
            Join hundreds of businesses across the region that trust MSC CERTIFICATIONS to transform their operations.
            We offer a complimentary, no-obligation assessment to identify the ISO systems that deliver the highest
            measurable value and greatest risk reduction for your business.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary-large">Request a Detailed Quote and Free Assessment</Link>
          </div>
          <p className="cta-footer">
            All our certifications are backed by internationally accredited bodies, ensuring global recognition.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
