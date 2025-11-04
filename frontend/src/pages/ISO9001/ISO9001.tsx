import { FC } from 'react';
import { Link } from 'react-router-dom';

const ISO9001: FC = () => {
  return (
    <div className="iso-page">
      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>ISO 9001: Achieve Certified Quality, Trust, and Operational Excellence</h1>
          <p className="iso-subtitle">
            Ready to move beyond basic quality? Accredited ISO 9001 certification helps you manage business risk,
            improve customer satisfaction, and unlock new market opportunities. This standard is vital for
            demonstrating true quality commitment.
          </p>
          <div className="iso-hero-buttons">
            <Link to="/contact" className="btn btn-primary-large">Request a Competitive Quote for ISO 9001</Link>
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
            <h3>Our Role as the Accredited Auditor:</h3>
            <p>
              We are <strong>MSC CERTIFICATIONS</strong>, the accredited, independent third-party body. We do not
              consult or implement the system. Our job is to conduct a rigorous audit to verify how effectively
              your QMS has been implemented. We objectively determine if your system meets the global criteria,
              leading to your official ISO 9001 certification.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Key Benefits: Efficiency, Reliability, and Trust</h2>
          <p className="section-intro">
            Implementing and certifying your QMS adds measurable, bottom-line value:
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Maximize Market Credibility</h3>
              <ul>
                <li>Instantly boosts client trust and global recognition.</li>
                <li>Ensures automatic qualification for key public and private tenders.</li>
              </ul>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Drive Operational Efficiency</h3>
              <ul>
                <li>Standardizes processes, eliminating waste and variation.</li>
                <li>Achieves immediate reduction in errors and product returns.</li>
              </ul>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Secure Customer Loyalty</h3>
              <ul>
                <li>Puts the customer at the center of every decision.</li>
                <li>Leads directly to higher customer retention.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industry Focus: Where Our Expertise Applies</h2>
          <p className="section-intro">
            ISO 9001 is the only management system applicable to every type of organization, regardless of size or
            sector. MSC CERTIFICATIONS provides specialized auditors to ensure your QMS is accurately tailored to
            your specific operating environment, including:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Manufacturing</h4>
              <p>Standardization of production lines, control of raw material quality, reduced scrap.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Professional Services (IT, Consulting)</h4>
              <p>Consistency of service delivery, managed contracts, and defined service levels.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Construction & Engineering</h4>
              <p>Quality control of works and materials, robust project management.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Logistics & Transport</h4>
              <p>Control of warehousing and distribution processes (supply chain assurance).</p>
            </div>
            <div className="industry-focus-item">
              <h4>Public Sector/Administration</h4>
              <p>Improving public service delivery and enhancing organizational transparency.</p>
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
      <section className="section section-cta-final">
        <div className="container">
          <h2>Ready to increase the trustworthiness of your business?</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary-large">Start Your ISO 9001 Assessment Today</Link>
          </div>
          <p className="cta-footer">
            Our certificates are issued by a fully accredited body and are recognized globally.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISO9001;
