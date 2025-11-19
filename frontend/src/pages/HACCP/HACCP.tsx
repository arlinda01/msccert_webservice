import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HACCP: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>HACCP Certification | Food Safety & Compliance Audits</title>
        <meta name="description" content="Get HACCP certified with MSC CERTIFICATIONS. Prevent food safety risks, meet legal standards, and build consumer trust. Start your assessment now." />
        <meta name="keywords" content="HACCP certification, food safety audit, HACCP system, ISO 22000, Codex Alimentarius, EU Regulation 852/2004, food safety compliance, HACCP plan, MSC Certifications, HACCP training" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>HACCP: Ensure Food Safety, Compliance, and Consumer Confidence</h1>
          <p className="iso-subtitle">
            Ready to guarantee the highest level of food safety and regulatory compliance? HACCP (Hazard Analysis and
            Critical Control Points) is the globally recognized system for identifying, evaluating, and controlling food
            safety hazards throughout production, processing, and distribution. Certification demonstrates your commitment
            to delivering safe, high-quality food products — every time.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Request a HACCP Certification Quote</Link>
            <Link to="/online-assessment" className="btn btn-secondary">Start Your HACCP Readiness Assessment</Link>
          </div>
        </div>
      </section>

      {/* What is HACCP */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Is HACCP? The Global Standard for Food Safety Management</h2>
          <p className="iso-text">
            HACCP is a preventive approach to food safety that focuses on controlling potential hazards — biological,
            chemical, or physical — before they occur. Rather than relying on end-product testing, HACCP ensures food
            safety at every step of the process, from raw material handling to final packaging and distribution.
          </p>
          <p className="iso-text">
            The system is recognized by major international regulations and standards, including the Codex Alimentarius,
            EU Regulation (EC) No 852/2004, and ISO 22000.
          </p>

          <div className="iso-role-box">
            <h3>Our Role as the Accredited Certification Partner</h3>
            <p>
              We position your company as a trustworthy food supplier by independently confirming that your HACCP system
              actually protects consumers from risk. Our certification sends a clear signal to retailers, distributors,
              and authorities that your processes are controlled, traceable, and aligned with recognized food safety.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Key Benefits: Safety, Trust, and Market Access</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Ensure Food Safety and Compliance</h3>
              <p>Prevent contamination risks and meet legal requirements.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Build Customer and Retailer Confidence</h3>
              <p>Demonstrate your brand's commitment to high-quality, safe products.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Access New Markets and Partnerships</h3>
              <p>Many retailers and distributors require HACCP certification.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>Reduce Operational Risks and Losses</h3>
              <p>Identify critical points and prevent costly recalls or incidents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industry Focus: Where HACCP Applies</h2>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Food Processing and Manufacturing</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Beverage and Dairy Production</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Catering and Hospitality</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Retail and Food Distribution</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Packaging and Logistics for Food Products</h4>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Why Choose MSC: Trusted Expertise in Food Safety Certification</h2>

          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>Accredited Auditors</h3>
              <p>Specialists with real food industry experience.</p>
            </div>
            <div className="advantage-card">
              <h3>Transparent Certification</h3>
              <p>Objective assessment based on evidence.</p>
            </div>
            <div className="advantage-card">
              <h3>Integrated Approach</h3>
              <p>Combine HACCP with ISO 22000, ISO 9001, or GMP for complete compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Ready to secure your food safety system and earn global trust?</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Start Your HACCP Certification Process Today</Link>
          </div>
          <p className="cta-footer">
            All certificates issued by MSC Certifications are fully accredited and globally recognized.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HACCP;