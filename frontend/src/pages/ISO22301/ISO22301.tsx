import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ISO22301: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>ISO 22301 Certification | Business Continuity Audit Services</title>
        <meta name="description" content="Get ISO 22301 certified with MSC CERTIFICATIONS. Prove resilience, reduce downtime, and protect your operations. Start your continuity audit now." />
        <meta name="keywords" content="ISO 22301 certification, business continuity audit, BCMS, operational resilience, disaster recovery, continuity planning, risk assessment, MSC CERTIFICATIONS, accredited certification" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>ISO 22301: Safeguard Business Continuity, Reputation, and Compliance</h1>
          <p className="iso-subtitle">
            Ready to move beyond basic disaster recovery? ISO 22301 certification helps you anticipate disruption, reduce
            downtime, and instill confidence in customers, insurers, and regulators. It's the global standard for
            operational resilience and continuity.
          </p>
        </div>
      </section>

      {/* What is ISO 22301 */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Is ISO 22301?</h2>
          <p className="iso-text">
            ISO 22301 is the international standard for Business Continuity Management Systems (BCMS). It defines how to
            identify critical business operations, assess disruption risks, and implement structured recovery strategies—such
            as Recovery Time Objective (RTO) and Recovery Point Objective (RPO). Certification proves your ability to
            maintain operations during unexpected events.
          </p>

          <div className="iso-role-box">
            <h3>Our Role as the Accredited Auditor</h3>
            <p>
              MSC CERTIFICATIONS is a fully accredited, independent third-party body. Our role is to audit your Business
              Continuity Management Systems (BCMS) and determine its compliance with ISO 22301 requirements through
              objective evidence and structured evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Key Benefits</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Minimize Downtime and Loss</h3>
              <p>Structured risk analysis and response planning reduce operational and financial impact during crises.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Improve Recovery and Testing</h3>
              <p>Regularly tested plans ensure your teams respond efficiently when incidents occur.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Build Trust</h3>
              <p>Prove your resilience to stakeholders, regulators, clients, and insurers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industry Focus</h2>
          <p className="section-intro">
            Our audits are tailored to your specific industry, including:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Finance & Banking</h4>
              <p>Assure transaction and data availability.</p>
            </div>
            <div className="industry-focus-item">
              <h4>IT & Hosting</h4>
              <p>Meet uptime commitments and mitigate cyber risks.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Telecom</h4>
              <p>Ensure network reliability and service continuity.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Logistics</h4>
              <p>Reduce delivery disruption across your supply chain.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Critical Services</h4>
              <p>Maintain essential operations under stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Why MSC CERTIFICATIONS?</h2>
          <p className="section-intro">
            We offer specialist auditors with deep industry expertise. Our audits are practical, business-aligned, and globally recognized.
          </p>
        </div>
      </section>

      {/* Certification Process */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Certification Process</h2>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h4>Application & Quotation</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h4>Stage I Audit<br /><span className="process-detail">(Documentation review)</span></h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h4>Stage II Audit<br /><span className="process-detail">(Implementation assessment)</span></h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <h4>Certification Issuance</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h4>Annual Surveillance Audits</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">6</div>
              <h4>Re-certification<br /><span className="process-detail">(Year 3)</span></h4>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Ready to certify your business continuity?</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Start Your ISO 22301 Assessment Today</Link>
          </div>
          <p className="cta-footer">
            All certificates issued by MSC Certifications are fully accredited and globally recognized.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISO22301;