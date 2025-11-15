import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ISO9001: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>ISO 9001 Certification - Accredited Quality Management Audits</title>
        <meta name="description" content="Achieve ISO 9001 with MSC Certifications. Boost global credibility, improve efficiency, and win more tenders. Start your QMS assessment today." />
        <meta name="keywords" content="ISO 9001 certification, QMS audit, ISO 9001 accredited, quality management system, ISO certification Albania, ISO 9001 benefits, quality auditor, ISO 9001 process, MSC Certifications" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>ISO 9001: Achieve Certified Quality, Trust, and Operational Excellence</h1>
          <p className="iso-subtitle">
            Ready to move beyond basic quality? Accredited ISO 9001 certification helps you manage business risk,
            improve customer satisfaction, and unlock new market opportunities. This standard is vital for
            demonstrating true quality commitment.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Request a Competitive Quote for ISO 9001</Link>
            <Link to="/online-assessment" className="btn btn-secondary">Start Your Free Readiness Assessment</Link>
          </div>
        </div>
      </section>

      {/* What is ISO 9001 */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What is ISO 9001? The International Language of Quality</h2>
          <p className="iso-text">
            ISO 9001 is the world's most recognized standard for a Quality Management System (QMS). When certified,
            your company is instantly speaking the same global language as its international partners, creating
            shared clarity around quality.
          </p>

          <div className="iso-role-box">
            <h3>Our Role as the Accredited Certification Body</h3>
            <p>
              We objectively determine if your system meets the global criteria, leading to your official ISO 9001 certification.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Key Benefits of Certification</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Global Recognition</h3>
              <p>Instant credibility with customers, partners, and regulators worldwide.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Improved Efficiency</h3>
              <p>Streamlined processes, fewer errors, and reduced waste.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Stronger Customer Loyalty</h3>
              <p>Quality-driven operations that put customer satisfaction first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industry Focus: Where Our Expertise Applies</h2>
          <p className="section-intro">
            MSC Certifications provides specialized auditors for tailored, sector-specific audits:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Manufacturing</h4>
              <p>Process consistency, reduced scrap</p>
            </div>
            <div className="industry-focus-item">
              <h4>Professional Services</h4>
              <p>Contract clarity, service reliability</p>
            </div>
            <div className="industry-focus-item">
              <h4>Construction</h4>
              <p>Material control, project oversight</p>
            </div>
            <div className="industry-focus-item">
              <h4>Logistics</h4>
              <p>Warehousing & distribution assurance</p>
            </div>
            <div className="industry-focus-item">
              <h4>Public Sector</h4>
              <p>Transparency and service delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">The MSC Advantage: Specialized Auditing</h2>
          <p className="section-intro">
            We compete by offering what large certifiers can't: specialized, local knowledge that adds real value.
          </p>

          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>Specialized Auditors</h3>
              <p>Guaranteed specialist with deep experience in your exact industry.</p>
            </div>
            <div className="advantage-card">
              <h3>Practical Audit</h3>
              <p>Transforms your QMS into a real business tool.</p>
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
            The path to ISO 9001 certification is straightforward, involving five clear stages:
          </p>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h4>Application and Contract</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h4>Certification Audit (Stage I & II)</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h4>Certificate Issuance</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <h4>Surveillance Audits (Year 1st & 2nd)</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h4>Re-certification (Year 3rd)</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Let's Get Started</h2>
          <p>
            Boost trust. Win tenders. Improve performance.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Start Your ISO 9001 Assessment</Link>
          </div>
          <p className="cta-footer">
            All certificates issued by MSC Certifications are fully accredited and globally recognized.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISO9001;
