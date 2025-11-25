import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const TechnologicalCard: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>Technological Card Services | Standardize & Control Production - MSC CERTIFICATIONS</title>
        <meta name="description" content="Define and optimize your production process with MSC CERTIFICATIONS. Create standardized, audit-ready Technological Cards for quality and efficiency." />
        <meta name="keywords" content="technological card, process card, production documentation, manufacturing process control, standardize production, industrial efficiency, quality documentation, ISO audit preparation, MSC CERTIFICATIONS" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>Technological Card: Define, Standardize, and Optimize Your Production Process</h1>
          <p className="iso-subtitle">
            Ready to make your production process fully transparent, efficient, and compliant?
          </p>
          <p className="iso-subtitle">
            A Technological Card is the foundation for consistent quality and controlled manufacturing. It details every operation step, resource, and parameter — ensuring that every product is made the right way, every time.
          </p>
          <div className="hero-buttons">
            <Link to="/contact-us" className="btn btn-primary">Request a Technological Card Service Quote</Link>
            <Link to="/online-audit-page" className="btn btn-secondary">Start Your Free Process Assessment</Link>
          </div>
        </div>
      </section>

      {/* What Is Technological Card Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Is a Technological Card?</h2>
          <h3 style={{ fontSize: '1.5rem', color: '#01434f', marginBottom: '1.5rem' }}>
            The Blueprint of Production
          </h3>
          <p className="iso-text">
            A Technological Card (also known as a Process Card or Operation Sheet) is a structured document that defines the method, sequence, and technical conditions required to produce or assemble a specific product.
          </p>
          <p className="iso-text">
            It specifies materials, equipment, labor norms, and quality controls, serving as a clear guideline for operators and engineers.
          </p>
          <p className="iso-text">
            Each card becomes an integral part of your production documentation system — ensuring process repeatability, traceability, and compliance with quality and safety standards.
          </p>

          <div className="iso-role-box">
            <h3>Our Role as Your Industrial Documentation Partner</h3>
            <p>
              We assist manufacturers in preparing, reviewing, and verifying Technological Cards that meet industry, safety, and regulatory standards.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Key Benefits: Precision, Compliance, and Control</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Standardize Operations</h3>
              <p>
                Ensure all personnel follow identical, approved production steps, eliminating variability and errors.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Improve Efficiency</h3>
              <p>
                Reduce waste, downtime, and rework through clearly defined parameters and optimized workflows.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Enhance Quality and Safety</h3>
              <p>
                Maintain consistent product quality and safe working practices across all production runs.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>Support Certification and Audits</h3>
              <p>
                Demonstrate process control during ISO and regulatory inspections with comprehensive documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industry Focus: Where Technological Cards Add Value</h2>
          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Manufacturing and Assembly Plants</h4>
              <p>Production lines, assembly operations, quality checkpoints</p>
            </div>
            <div className="industry-focus-item">
              <h4>Food and Chemical Processing</h4>
              <p>Recipe control, batch processing, safety-critical operations</p>
            </div>
            <div className="industry-focus-item">
              <h4>Construction and Fabrication Works</h4>
              <p>Fabrication procedures, welding specifications, material handling</p>
            </div>
            <div className="industry-focus-item">
              <h4>Automotive and Aerospace Production</h4>
              <p>Precision assembly, testing protocols, traceability requirements</p>
            </div>
            <div className="industry-focus-item">
              <h4>Maintenance and Repair Operations</h4>
              <p>Service procedures, part replacement, calibration processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Why Choose MSC CERTIFICATIONS?</h2>
          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>Experienced Engineers</h3>
              <p>Deep process knowledge in your sector with proven expertise across industries.</p>
            </div>
            <div className="advantage-card">
              <h3>Accurate Documentation</h3>
              <p>Based on real operational data and industry best practices for maximum reliability.</p>
            </div>
            <div className="advantage-card">
              <h3>Compliance Assurance</h3>
              <p>Ready for audits, certifications, and client reviews with complete confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Ready to document your process with precision and unlock production efficiency?</h2>
          <p>
            Partner with MSC CERTIFICATIONS to develop Technological Cards that deliver control, quality, and confidence.
          </p>
          <div className="cta-buttons">
            <Link to="/contact-us" className="btn btn-primary">Start Your Technological Card Project Today</Link>
          </div>
          <p className="cta-footer">Precision documentation for precision manufacturing.</p>
        </div>
      </section>
    </div>
  );
};

export default TechnologicalCard;
