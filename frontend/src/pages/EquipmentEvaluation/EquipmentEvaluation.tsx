import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const EquipmentEvaluation: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>Machinery & Equipment Evaluation | Industrial Performance Audits - MSC CERTIFICATIONS</title>
        <meta name="description" content="Maximize asset performance and value with MSC CERTIFICATIONS. Get objective equipment evaluations for compliance, ROI, and operational efficiency." />
        <meta name="keywords" content="equipment evaluation, machinery audit, industrial performance audit, asset valuation, technology line assessment, operational efficiency, technical inspection, ROI evaluation, MSC CERTIFICATIONS" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>Evaluation of Technological Lines, Machinery and Equipment</h1>
          <p className="iso-subtitle">
            Ready to maximize productivity and extend the life of your industrial assets?
          </p>
          <p className="iso-subtitle">
            Professional evaluation of technological lines, machinery, and equipment helps you verify operational performance, identify modernization needs, and understand the true market value of your equipment. It's the foundation for smart investment, safe operation, and sustainable growth.
          </p>
          <div className="hero-buttons">
            <Link to="/contact-us" className="btn btn-primary">Request a Competitive Evaluation Quote</Link>
            <Link to="/online-audit-page" className="btn btn-secondary">Schedule Your Free Technical Readiness Check</Link>
          </div>
        </div>
      </section>

      {/* What Is Equipment Evaluation Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Is Equipment Evaluation?</h2>
          <h3 style={{ fontSize: '1.5rem', color: '#01434f', marginBottom: '1.5rem' }}>
            The Science Behind Industrial Efficiency
          </h3>
          <p className="iso-text">
            Equipment and technological line evaluation is the structured assessment of industrial machinery and systems to determine their technical condition, operational efficiency, and financial worth.
          </p>
          <p className="iso-text">
            Through inspections, diagnostics, and performance analysis, the process reveals how effectively your assets operate — and whether upgrading, maintaining, or replacing them offers the best return on investment.
          </p>

          <div className="iso-role-box">
            <h3>Our Role as Independent Evaluators</h3>
            <p>
              We are MSC CERTIFICATIONS, a fully independent, accredited inspection and certification body. We don't sell or service equipment — our responsibility is to provide objective, data-driven evaluations that ensure transparency and confidence.
            </p>
            <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Our experts conduct:</h4>
            <ul className="services-list">
              <li>On-site technical inspections and diagnostics</li>
              <li>Performance and energy-efficiency assessments</li>
              <li>Safety and environmental compliance checks</li>
              <li>Market and residual value analysis</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              The result: a certified evaluation report trusted by manufacturers, investors, and regulators.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Key Benefits: Clarity, Performance, and Value</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Optimize Production Efficiency</h3>
              <p>
                Identify bottlenecks, improve throughput, and reduce downtime with data-driven insights.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Support Investment Decisions</h3>
              <p>
                Make confident choices about modernization or equipment replacement based on real data.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Ensure Compliance and Safety</h3>
              <p>
                Meet regulatory, environmental, and occupational safety standards with verified assessments.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>Establish Accurate Asset Value</h3>
              <p>
                Reliable data for accounting, insurance, and strategic planning purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industry Focus: Where Our Expertise Applies</h2>
          <p className="section-intro">
            We assess machinery and technological systems in:
          </p>
          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Manufacturing and Processing Plants</h4>
              <p>Production machinery, assembly lines, quality control systems</p>
            </div>
            <div className="industry-focus-item">
              <h4>Energy, Utilities, and Heavy Industry</h4>
              <p>Power generation equipment, industrial boilers, heavy machinery</p>
            </div>
            <div className="industry-focus-item">
              <h4>Construction and Engineering</h4>
              <p>Construction equipment, fabrication machinery, lifting systems</p>
            </div>
            <div className="industry-focus-item">
              <h4>Automotive, Chemical, and Food Production</h4>
              <p>Specialized production lines, processing equipment, automation systems</p>
            </div>
            <div className="industry-focus-item">
              <h4>Pharmaceutical and Packaging Operations</h4>
              <p>Clean room equipment, packaging lines, quality testing instruments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Process Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Our Evaluation Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h4>Application and Data Review</h4>
              <p>Initial consultation and documentation gathering</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h4>On-Site Inspection and Diagnostics</h4>
              <p>Comprehensive technical assessment and testing</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h4>Technical and Economic Analysis</h4>
              <p>Performance evaluation and value determination</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <h4>Evaluation Report Issuance</h4>
              <p>Detailed findings and recommendations</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">5</div>
              <h4>Periodic Reassessment or Re-evaluation</h4>
              <p>Ongoing monitoring and updates as needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">The MSC Advantage: Objective, Expert, Reliable</h2>
          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>Specialized Engineers</h3>
              <p>Deep expertise in your industrial sector with proven technical knowledge.</p>
            </div>
            <div className="advantage-card">
              <h3>Transparent Results</h3>
              <p>Fully evidence-based evaluations with complete objectivity and integrity.</p>
            </div>
            <div className="advantage-card">
              <h3>Actionable Insights</h3>
              <p>Practical recommendations to enhance performance and maximize ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Ready to discover the true potential and value of your equipment?</h2>
          <p>
            Partner with MSC CERTIFICATIONS for a professional evaluation that drives efficiency and confidence.
          </p>
          <div className="cta-buttons">
            <Link to="/contact-us" className="btn btn-primary">Start Your Equipment Evaluation Today</Link>
          </div>
          <p className="cta-footer">Independent evaluation for informed decisions.</p>
        </div>
      </section>
    </div>
  );
};

export default EquipmentEvaluation;
