import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ISO39001: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>ISO 39001 Certification | Road Safety & Fleet Risk Audits</title>
        <meta name="description" content="ISO 39001 certification helps reduce traffic risks and improve fleet safety. Get certified with MSC CERTIFICATIONS. Start your RTS assessment today." />
        <meta name="keywords" content="ISO 39001 certification, road safety audit, RTS management, fleet safety, transport risk, ISO 39001 audit, MSC CERTIFICATIONS, traffic risk management, driver safety" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>ISO 39001: Improve Road Safety and Fleet Risk Management</h1>
          <p className="iso-subtitle">
            ISO 39001 certification delivers a structured approach to reducing road traffic incidents, enhancing driver
            safety, and improving operational performance. This international standard is designed for organizations with
            significant road exposure — including transport fleets, logistics networks, and service-based operations.
          </p>
        </div>
      </section>

      {/* What is ISO 39001 */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Is ISO 39001?</h2>
          <p className="iso-text">
            ISO 39001 is the global standard for Road Traffic Safety (RTS) Management Systems. It provides a systematic
            framework for organizations to identify, assess, and control traffic-related risks. It is especially relevant
            to companies operating vehicle fleets or managing transportation logistics.
          </p>
          <p className="iso-text">
            The standard integrates safety objectives, driver training programs, in-vehicle telemetry, and accident
            investigation procedures to establish continuous improvement in road safety performance. It enables high-exposure
            organizations to minimize risk to employees, contractors, and the public.
          </p>

          <div className="iso-role-box">
            <h3>How We Certify Your Road Safety System</h3>
            <p>
              We provide independent ISO 39001 certification that proves your organization controls road traffic risk in a
              serious, evidence-based way. By assessing how you manage vehicles, drivers, routes, and contractors, we turn
              your road safety performance into verifiable assurance for clients, authorities, and major contractors who
              need a safe, reliable partner.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Benefits of ISO 39001 Certification</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Fewer Accidents and Fatalities</h3>
              <p>Improves safety outcomes through structured monitoring, training, and corrective actions.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Lower Costs and Insurance Premiums</h3>
              <p>Reduces accident-related downtime, legal exposure, and operational costs.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Enhanced Fleet Performance and Reputation</h3>
              <p>Demonstrates public accountability while optimizing driver behavior and vehicle usage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Who Should Use ISO 39001?</h2>
          <p className="section-intro">
            ISO 39001 is ideal for organizations with road transport responsibilities or significant driving exposure. Common sectors include:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Transport & Logistics</h4>
              <p>Manage freight movement with lower incident rates.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Courier Services</h4>
              <p>Protect drivers and ensure consistent delivery reliability.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Utilities & Infrastructure</h4>
              <p>Reduce road risk for mobile field operations.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Fleet Management Companies</h4>
              <p>Increase control over performance, safety, and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Certification Roadmap</h2>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h4>Submit Application and Receive Quotation</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h4>Stage I Audit<br /><span className="process-detail">(Review of road safety documentation)</span></h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h4>Stage II Audit<br /><span className="process-detail">(Evaluation of implementation and evidence)</span></h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <h4>Certification Decision</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h4>Annual Surveillance Audits</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">6</div>
              <h4>Re-certification<br /><span className="process-detail">(After three years)</span></h4>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Take action to reduce traffic risk and demonstrate your commitment to road safety.</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Start Your ISO 39001 Certification</Link>
          </div>
          <p className="cta-footer">
            All certificates issued by MSC Certifications are fully accredited and globally recognized.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISO39001;