import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ISO14001: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>ISO 14001 Certification | Environmental Management Audits</title>
        <meta name="description" content="Get ISO 14001 certified with MSC CERTIFICATIONS. Cut waste, prove legal compliance, and lead sustainably. Start your EMS assessment today." />
        <meta name="keywords" content="ISO 14001 certification, EMS audit, environmental management system, sustainability certification, ISO 14001 accredited, legal compliance, resource efficiency, waste reduction, MSC Certifications" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>ISO 14001: Achieve Environmental Compliance and Sustainability</h1>
          <p className="iso-subtitle">
            Demonstrate your commitment to the environment, reduce operational waste, and ensure compliance with strict
            legal requirements. Accredited ISO 14001 certification is essential for businesses seeking sustainability,
            cost savings, and enhanced corporate responsibility.
          </p>
        </div>
      </section>

      {/* What is ISO 14001 */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What is ISO 14001? The System for Environmental Management</h2>
          <p className="iso-text">
            ISO 14001 is the globally recognized standard for an Environmental Management System (EMS). It establishes a
            structured system for identifying environmental aspects, fulfilling legal requirements, and systematically
            reducing your impact. The framework integrates clear objectives, monitoring, and preparedness for environmental
            emergencies.
          </p>

          <div className="iso-role-box">
            <h3>Our Role as Your Accredited Auditor</h3>
            <p>
              MSC CERTIFICATIONS is the accredited, independent third-party body. We perform a thorough audit to check how
              well your EMS is used in practice. This assessment gives you official certification.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Key Benefits: Cost Reduction, Compliance, and Image</h2>
          <p className="section-intro">
            Implementing and certifying your EMS to the ISO 14001 standard adds measurable, bottom-line value:
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Drive Resource and Cost Savings</h3>
              <p>Achieves significant reduction in waste and emissions. Lowers operating costs through optimization and conservation of resources.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Ensure Demonstrable Legal Compliance</h3>
              <p>Establishes systems for continuous identification and adherence to strict environmental laws and regulations. Demonstrates clear, verifiable compliance to authorities, clients, and other interested parties.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Enhance Corporate Image</h3>
              <p>Significantly boosts your image as a responsible and sustainable partner. Secures a competitive edge in tenders where environmental performance is required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industry Focus: Our Environmental Expertise</h2>
          <p className="section-intro">
            ISO 14001 is valuable for any organization with a measurable environmental footprint. We specialize in auditing businesses across sectors, including:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Manufacturing</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Construction</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Transport & Logistics</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Energy</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Agriculture</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Tourism</h4>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Why MSC? Specialized Environmental Auditing</h2>

          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>Specialized Auditors</h3>
              <p>We guarantee a specialist with deep experience in environmental law and resource management.</p>
            </div>
            <div className="advantage-card">
              <h3>Practical Audit</h3>
              <p>Our assessment is practical and transforms your EMS into a real business tool for ongoing environmental performance.</p>
            </div>
            <div className="advantage-card">
              <h3>Objective Certification</h3>
              <p>Guaranteed global recognition based on objective, documented evidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Our Certification Process</h2>
          <p className="section-intro">
            Gaining ISO 14001 certification follows a clear, five-stage path designed for efficiency:
          </p>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h4>Application and Contract</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h4>Certification Audit<br /><span className="process-detail">(Stage I & II)</span></h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h4>Certificate Issuance</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <h4>Surveillance Audits<br /><span className="process-detail">(Year 1 & 2)</span></h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h4>Re-certification<br /><span className="process-detail">(Year 3)</span></h4>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Ready to cut costs, ensure compliance, and secure your reputation as a sustainable leader?</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Start Your ISO 14001 Assessment Today</Link>
          </div>
          <p className="cta-footer">
            All certificates issued by MSC Certifications are fully accredited and globally recognized.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISO14001;