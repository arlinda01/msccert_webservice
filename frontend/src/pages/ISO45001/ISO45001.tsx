import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ISO45001: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>ISO 45001 Certification | Accredited Health & Safety Audits</title>
        <meta name="description" content="Get ISO 45001 certified by MSC CERTIFICATIONS. Prove workplace safety, reduce accidents, and cut liability costs. Book a readiness audit today." />
        <meta name="keywords" content="ISO 45001 certification, occupational health and safety audit, OHSMS, workplace safety management, ISO 45001 audit Albania, risk reduction, MSC CERTIFICATIONS, safety compliance" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>ISO 45001: Protect Employees, Reduce Accidents, and Lower Liability</h1>
          <p className="iso-subtitle">
            Minimize workplace injuries, prevent occupational diseases, and reduce costly downtime. Accredited ISO 45001
            certification is the global standard for prioritizing employee health and safety, directly lowering insurance
            and liability risks.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Request a Competitive Quote for ISO 45001</Link>
            <Link to="/online-assessment" className="btn btn-secondary">Start Your Free Readiness Assessment</Link>
          </div>
        </div>
      </section>

      {/* What is ISO 45001 */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What is ISO 45001? The Framework for a Safe Workplace</h2>
          <p className="iso-text">
            ISO 45001 establishes an Occupational Health and Safety Management System (OH&SMS). It is a system that prevents
            work-related injuries and illnesses. It provides a clear, internationally recognized framework to protect workers
            and demonstrate responsible, compliant management to employees, clients, and regulators.
          </p>

          <div className="iso-role-box">
            <h3>Trust and Validation: Your Accredited Partner</h3>
            <p>
              MSC CERTIFICATIONS is an accredited, independent authority. Our role in ISO 45001 certification is to provide
              credible assurance that people's safety in your company is a real priority. We turn your commitment to safe
              working conditions into clear, verifiable evidence for employees, clients, and authorities, showing that you
              manage risk responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Main Benefits: Safety Culture, Risk Reduction, and Cost Savings</h2>
          <p className="section-intro">
            Certifying your OH&SMS adds measurable, strategic value:
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Fewer Accidents and Disruptions</h3>
              <p>Reduces workplace accidents and injuries. Minimizes costly operational interruptions and delays.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Stronger Safety Culture and Morale</h3>
              <p>Builds a proactive culture of safety and responsibility among staff. Improves employee commitment and morale.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Reduced Financial Costs</h3>
              <p>Lowers expenses related to absences, insurance premiums, and liability claims/fines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industry Focus: Risk Management Expertise</h2>
          <p className="section-intro">
            ISO 45001 is essential for sectors with high physical risk exposure. We specialize in auditing businesses in sectors such as:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Manufacturing</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Construction</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Transport and Logistics</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Energy</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Mining</h4>
            </div>
            <div className="industry-focus-item">
              <h4>Professional Services</h4>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Audit Quality & Health and Safety Expertise</h2>
          <p className="section-intro">
            We offer dedicated, local expertise that guarantees value beyond a simple certificate:
          </p>

          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>Local Law Experts</h3>
              <p>Our auditors truly understand local safety laws and the hazards specific to your industry.</p>
            </div>
            <div className="advantage-card">
              <h3>Shop-Floor Focus</h3>
              <p>Our assessment is practical, verifying real-world safety controls and employee participation effectiveness.</p>
            </div>
            <div className="advantage-card">
              <h3>International Recognition</h3>
              <p>We ensure international acceptance for your certification, based on objective proof of genuine safety performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Our Certification Process</h2>
          <p className="section-intro">
            Gaining ISO 45001 certification follows a clear, five-stage path designed for efficiency:
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
              <h4>Surveillance Audits (Year 1 & 2)</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h4>Re-certification (Year 3)</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Ready to achieve a zero-harm workplace and secure major cost savings?</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Start Your ISO 45001 Assessment Today</Link>
          </div>
          <p className="cta-footer">
            All certificates issued by MSC Certifications are fully accredited and globally recognized.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISO45001;