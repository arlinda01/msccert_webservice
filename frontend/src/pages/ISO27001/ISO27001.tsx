import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ISO27001: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>ISO 27001 Certification | Information Security & GDPR Compliance</title>
        <meta name="description" content="Protect data, meet GDPR, and earn client trust with ISO 27001 certification. Get accredited auditing from MSC CERTIFICATIONS. Start your ISMS audit now." />
        <meta name="keywords" content="ISO 27001 certification, ISMS audit, information security management, GDPR compliance certification, ISO 27001 audit Albania, MSC CERTIFICATIONS, data protection audit, cybersecurity certification, accredited ISO 27001" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>ISO 27001: Protect Data, Ensure GDPR Compliance & Build Trust</h1>
          <p className="iso-subtitle">
            Safeguard your critical information assets against threats and breaches. Accredited ISO/IEC 27001 certification
            is the worldwide standard for security controls. It helps organizations comply with laws like GDPR.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Request a Competitive Quote for ISO 27001</Link>
            <Link to="/online-assessment" className="btn btn-secondary">Start Your Free Readiness Assessment</Link>
          </div>
        </div>
      </section>

      {/* What is ISO 27001 */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What is ISO 27001? The System for Digital Resilience</h2>
          <p className="iso-text">
            ISO 27001 is the leading international standard for Information Security Management. It requires organizations
            to identify risks to their data and apply technical, organizational, and legal controls to protect the
            confidentiality, integrity, and availability of information.
          </p>

          <div className="iso-role-box">
            <h3>Independent Oversight: Your Accredited Auditor</h3>
            <p>
              Our role in ISO 27001 certification is to provide independent assurance that these controls are real, effective,
              and consistently applied. Through our audits and certification, we offer your clients, partners, and regulators
              reliable proof that their data is handled securely and in line with globally recognized best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Key Benefits: Protection, Compliance, and Confidence</h2>
          <p className="section-intro">
            Certifying your ISMS adds measurable, strategic value:
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Strong Defense Against Data Leaks</h3>
              <p>Guarantees defense against data leakage and unauthorized access. Systematically protects your valuable information assets.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Legal and Contractual Compliance</h3>
              <p>Provides the foundation for meeting GDPR and other legal obligations. Fulfills strict security requirements demanded by partners.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Increased Client and Partner Trust</h3>
              <p>Significantly boosts the confidence of customers in your ability to manage sensitive data securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industry Focus: Data Security Expertise</h2>
          <p className="section-intro">
            ISO/IEC 27001 is vital for any organization handling sensitive data. We specialize in auditing businesses in sectors such as:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>IT and Software Providers</h4>
            </div>
            <div className="industry-focus-item">
              <h4>FinTech and Banks (Financial Services)</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Telecommunications</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Professional Services</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Healthcare and Public Sector</h4>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Audit Quality & Cybersecurity Expertise</h2>
          <p className="section-intro">
            We offer specialized, local expertise that adds measurable value beyond just a certificate:
          </p>

          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>Security Experts</h3>
              <p>Our auditors truly understand information risk and modern threats, focusing on control effectiveness.</p>
            </div>
            <div className="advantage-card">
              <h3>A Practical Check-up</h3>
              <p>Our audit is practical, designed to verify the real-world functionality of your technical and administrative controls.</p>
            </div>
            <div className="advantage-card">
              <h3>Verified Recognition</h3>
              <p>We ensure global recognition for your certification, founded solely on objective proof of your ISMS performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Ready to secure your digital future and demonstrate industry-leading information governance?</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Start Your ISO 27001 Assessment Today</Link>
          </div>
          <p className="cta-footer">
            All certificates issued by MSC Certifications are fully accredited and globally recognized.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISO27001;