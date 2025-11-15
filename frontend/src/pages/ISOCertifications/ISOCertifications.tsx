import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as FaIcons from 'react-icons/fa';

const ISOCertifications: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>ISO Certifications - International Standards for Quality & Compliance</title>
        <meta name="description" content="Achieve internationally recognized ISO certifications with MSC Certifications. From quality management to information security, we offer comprehensive certification services." />
        <meta name="keywords" content="ISO certification, ISO standards, quality management, environmental management, food safety, information security, MSC Certifications" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>ISO Certifications: Global Standards for Excellence</h1>
          <p className="iso-subtitle">
            ISO certifications demonstrate your commitment to international best practices in quality, safety, and efficiency. MSC Certifications provides accredited certification services across all major ISO standards, helping your organization gain global recognition and competitive advantage.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Request a Certification Quote</Link>
          </div>
        </div>
      </section>

      {/* What are ISO Standards */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Are ISO Standards?</h2>
          <p className="iso-text">
            ISO (International Organization for Standardization) standards are globally recognized frameworks that help organizations implement best practices across various aspects of their operations. These standards ensure consistency, quality, and reliability - making them essential for businesses operating in competitive and regulated markets.
          </p>
          <p className="iso-text">
            Achieving ISO certification demonstrates to customers, partners, and regulators that your organization meets rigorous international requirements.
          </p>
        </div>
      </section>

      {/* Our ISO Certification Services */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Our ISO Certification Services</h2>
          <p className="section-intro">
            MSC Certifications offers accredited certification for the following ISO standards:
          </p>

          <div className="certification-grid">
            <Link to="/services/iso/iso-9001/quality-management" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaAward({}) as any}
              </div>
              <h3>ISO 9001</h3>
              <h4>Quality Management</h4>
              <p>The world's most recognized standard for quality management systems, ensuring consistent product and service delivery.</p>
            </Link>

            <Link to="/services/iso/iso-14001/environmental-management" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaLeaf({}) as any}
              </div>
              <h3>ISO 14001</h3>
              <h4>Environmental Management</h4>
              <p>Reduce environmental impact, improve sustainability, and demonstrate environmental responsibility.</p>
            </Link>

            <Link to="/services/iso/iso-22000/food-safety-management" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaUtensils({}) as any}
              </div>
              <h3>ISO 22000</h3>
              <h4>Food Safety Management</h4>
              <p>Ensure food safety throughout the supply chain with comprehensive hazard control.</p>
            </Link>

            <Link to="/services/iso/iso-27001/information-security" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaLock({}) as any}
              </div>
              <h3>ISO 27001</h3>
              <h4>Information Security</h4>
              <p>Protect sensitive information and demonstrate robust information security management.</p>
            </Link>

            <Link to="/services/iso/iso-45001/health-and-safety-at-work" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaHardHat({}) as any}
              </div>
              <h3>ISO 45001</h3>
              <h4>Health & Safety at Work</h4>
              <p>Create safer workplaces, reduce workplace injuries, and improve employee well-being.</p>
            </Link>

            <Link to="/services/iso/iso-22301/business-continuity" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaShieldAlt({}) as any}
              </div>
              <h3>ISO 22301</h3>
              <h4>Business Continuity</h4>
              <p>Prepare for disruptions and ensure business resilience in the face of unexpected events.</p>
            </Link>

            <Link to="/services/iso/iso-37001/anti-bribery-management" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaCertificate({}) as any}
              </div>
              <h3>ISO 37001</h3>
              <h4>Anti-Bribery Management</h4>
              <p>Implement controls to prevent, detect, and address bribery and corruption risks.</p>
            </Link>

            <Link to="/services/iso/iso-39001/road-traffic-safety" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaCar({}) as any}
              </div>
              <h3>ISO 39001</h3>
              <h4>Road Traffic Safety</h4>
              <p>Reduce road traffic deaths and serious injuries related to your organization's operations.</p>
            </Link>

            <Link to="/services/iso/iso-50001/energy-management" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaBolt({}) as any}
              </div>
              <h3>ISO 50001</h3>
              <h4>Energy Management</h4>
              <p>Optimize energy use, reduce costs, and minimize environmental impact through systematic energy management.</p>
            </Link>

            <Link to="/services/haccp-certification" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaCheckCircle({}) as any}
              </div>
              <h3>HACCP</h3>
              <h4>Hazard Analysis</h4>
              <p>Critical food safety management system focused on preventing hazards in food production.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Why Choose ISO Certification?</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Global Recognition</h3>
              <p>ISO certifications are recognized worldwide, opening doors to international markets and partnerships.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Competitive Advantage</h3>
              <p>Demonstrate your commitment to quality and excellence, setting you apart from competitors.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Operational Excellence</h3>
              <p>Streamline processes, reduce waste, and improve efficiency across your organization.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>Customer Confidence</h3>
              <p>Build trust with customers and stakeholders through verified compliance with international standards.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">5</div>
              <h3>Risk Management</h3>
              <p>Identify and mitigate risks systematically, protecting your organization and stakeholders.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">6</div>
              <h3>Tender Requirements</h3>
              <p>Meet mandatory certification requirements for public and private sector tenders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Ready to Achieve ISO Certification?</h2>
          <p>
            Partner with MSC Certifications for accredited, globally recognized ISO certification services.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Start Your Certification Journey</Link>
          </div>
          <p className="cta-footer">
            All certificates issued by MSC Certifications are fully accredited and internationally recognized.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISOCertifications;
