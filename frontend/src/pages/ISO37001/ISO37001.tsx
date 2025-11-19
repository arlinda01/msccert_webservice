import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ISO37001: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>ISO 37001 Certification | Anti-Bribery Compliance Audits</title>
        <meta name="description" content="Prevent bribery risks with ISO 37001 certification. Prove ethical compliance, protect your reputation, and reduce legal exposure. Start your audit today." />
        <meta name="keywords" content="ISO 37001 certification, anti-bribery audit, ABMS, ethics compliance, anti-corruption management, ISO 37001 audit, MSC CERTIFICATIONS, integrity certification, compliance auditing" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>ISO 37001: Build a Culture of Integrity and Prevent Bribery</h1>
          <p className="iso-subtitle">
            ISO 37001 certification equips organizations with an internationally recognized framework to prevent, detect,
            and manage bribery risks. By adopting this standard, you strengthen internal controls and demonstrate a
            proactive commitment to ethical business practices.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Request a Quote for ISO 37001 Certification</Link>
            <Link to="/online-assessment" className="btn btn-secondary">Take a Free Anti-Bribery Readiness Check</Link>
          </div>
        </div>
      </section>

      {/* What is ISO 37001 */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Understanding ISO 37001</h2>
          <p className="iso-text">
            ISO 37001 is the global standard for Anti-Bribery Management Systems (ABMS). It sets out clear requirements for
            implementing policies, conducting due diligence, ensuring financial oversight, and establishing secure reporting
            mechanisms to manage bribery-related risks at every level of the organization.
          </p>

          <div className="iso-role-box">
            <h3>Our Role as the Certification Body</h3>
            <p>
              As an accredited, independent third-party certifier, MSC CERTIFICATIONS provides impartial audits to evaluate
              how effectively your ABMS meets ISO 37001 standards. We verify implementation without offering consulting
              services, ensuring full objectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Key Advantages of ISO 37001 Certification</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Lower Legal and Regulatory Exposure</h3>
              <p>Helps you avoid costly legal actions, fines, and exclusion from public or private contracts.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Strengthen Organizational Reputation</h3>
              <p>Signals to stakeholders that your company operates with transparency and accountability.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Reinforce Internal Integrity</h3>
              <p>Develops a documented culture of ethics that withstands external scrutiny and internal audits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industries That Benefit Most</h2>
          <p className="section-intro">
            Our anti-bribery audits are tailored to the specific risks of:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Construction</h4>
              <p>Safeguard against corruption in contracts and tenders.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Energy</h4>
              <p>Ensure compliance in complex, multi-jurisdictional operations.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Public Procurement</h4>
              <p>Meet transparency standards and eligibility criteria.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Professional Services</h4>
              <p>Build client confidence through ethical governance.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Pharmaceuticals</h4>
              <p>Mitigate bribery risks in sales, distribution, and clinical trials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Certification with Integrity</h2>
          <p className="section-intro">
            Our process includes:
          </p>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h4>Initial Application and Quotation</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h4>Documentation Review (Stage I Audit)</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h4>Implementation Assessment (Stage II Audit)</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <h4>Certification Decision</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h4>Ongoing Surveillance Audits</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">6</div>
              <h4>Re-certification every three years</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Take the next step toward verified anti-bribery compliance.</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Start Your ISO 37001 Certification Journey</Link>
          </div>
          <p className="cta-footer">
            Our certificates are issued by a fully accredited body and are recognized globally.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISO37001;