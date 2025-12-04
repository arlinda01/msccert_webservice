import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ISO50001: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>ISO 50001 Certification | Energy Management System Audits</title>
        <meta name="description" content="Cut energy costs and CO₂ emissions with ISO 50001 certification. Prove sustainability performance with MSC CERTIFICATIONS. Start your audit today." />
        <meta name="keywords" content="ISO 50001 certification, ISO 50001 audit, Energy management system certification, Energy management audit, Accredited ISO 50001 certification, ISO 50001 Albania, MSC CERTIFICATIONS" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>ISO 50001: Improve Energy Performance and Meet Sustainability Goals</h1>
          <p className="iso-subtitle">
            ISO 50001 certification helps you implement a structured energy management system to reduce energy consumption,
            cut CO₂ emissions, and align with global sustainability expectations. This international standard supports
            continuous improvement in energy use through real-time data, strategic planning, and performance monitoring.
          </p>
        </div>
      </section>

      {/* What is ISO 50001 */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Is ISO 50001?</h2>
          <p className="iso-text">
            ISO 50001 is the international standard for Energy Management Systems (EnMS) that helps organizations
            systematically control and reduce their energy use. It provides a clear framework to improve energy performance,
            cut costs, and lower CO₂ emissions in a measurable, verifiable way.
          </p>

          <div className="iso-role-box">
            <h3>Third-Party Certification from MSC Certifications</h3>
            <p>
              Our role in ISO 50001 certification is to recognize and validate organizations that manage energy in a structured,
              efficient, and responsible way. Through our audits and certification, we give you a trusted mark that your
              operations are aligned with best practice in energy performance, cost control, and CO₂ reduction.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Benefits of ISO 50001 Certification</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Lower Energy Costs and Carbon Emissions</h3>
              <p>Use metering and performance analysis to cut utility costs and reduce environmental impact.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Verified Energy Efficiency</h3>
              <p>Demonstrate measurable energy improvement to customers, regulators, and investors.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Compliance and Incentives</h3>
              <p>Meet environmental regulations and qualify for government or private energy incentives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industries That Benefit from ISO 50001</h2>
          <p className="section-intro">
            This standard is applicable to all sectors with significant energy usage, including:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Manufacturing</h4>
              <p>Improve machine efficiency and monitor energy-intensive processes.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Commercial Buildings</h4>
              <p>Track HVAC, lighting, and utilities.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Data Centers</h4>
              <p>Optimize cooling, storage, and server load.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Transport</h4>
              <p>Reduce energy across fleets and logistics.</p>
            </div>
            <div className="industry-focus-item">
              <h4>Utilities</h4>
              <p>Support operational transparency and consumption control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">ISO 50001 Certification Process</h2>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h4>Submit Application and Receive a Quote</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h4>Stage I Audit<br /><span className="process-detail">(Documentation and system review)</span></h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h4>Stage II Audit<br /><span className="process-detail">(Evidence and implementation evaluation)</span></h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <h4>Certification Issued upon Conformity</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h4>Annual Surveillance Audits</h4>
            </div>
            <div className="process-step">
              <div className="process-step-number">6</div>
              <h4>Re-certification<br /><span className="process-detail">(Every 3 years)</span></h4>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Take control of your energy efficiency strategy today.</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Start Your ISO 50001 Certification</Link>
          </div>
          <p className="cta-footer">
            All certificates issued by MSC Certifications are fully accredited and globally recognized.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISO50001;