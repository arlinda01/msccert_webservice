import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as FaIcons from 'react-icons/fa';

const AdditionalServices: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>Additional Services - Expert Consulting & Training Solutions</title>
        <meta name="description" content="Comprehensive business solutions from MSC Certifications including energy efficiency, staff training, consulting, and technical assessments." />
        <meta name="keywords" content="energy efficiency, staff training, professional cards, consulting services, technology assessment, MSC Certifications" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>Additional Services: Beyond Certification</h1>
          <p className="iso-subtitle">
            MSC Certifications offers a comprehensive range of specialized services designed to support your organization's operational excellence, compliance, and continuous improvement goals. From energy optimization to staff development, we provide expert solutions tailored to your needs.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Our Service Portfolio</h2>
          <p className="section-intro">
            Comprehensive solutions to enhance your organization's performance and compliance:
          </p>

          <div className="certification-grid">
            <Link to="/services/additional/energy-efficiency" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaBolt({}) as any}
              </div>
              <h3>Energy Efficiency Programs</h3>
              <p>Reduce energy costs, lower CO₂ emissions, and optimize consumption through data-driven assessments and ISO 50001 alignment.</p>
            </Link>

            <Link to="/services/additional/staff-training" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaGraduationCap({}) as any}
              </div>
              <h3>Staff Training</h3>
              <p>Professional development programs covering quality management, food safety, environmental compliance, and industry-specific standards.</p>
            </Link>

            <Link to="/services/additional/professional-cards" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaIdCard({}) as any}
              </div>
              <h3>Professional Cards</h3>
              <p>Official certification cards for qualified professionals in regulated industries and technical fields.</p>
            </Link>

            <Link to="/evaluation-of-technological-lines-machinery-equipment" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaMicrochip({}) as any}
              </div>
              <h3>Technology & Equipment Assessment</h3>
              <p>Technical evaluation of production lines, machinery, and equipment for safety, compliance, and performance optimization.</p>
            </Link>

            <Link to="/technological-card" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaFileAlt({}) as any}
              </div>
              <h3>Technological Card</h3>
              <p>Detailed technical documentation and certification for manufacturing processes and production methodologies.</p>
            </Link>

            <Link to="/services/consulting" className="certification-card">
              <div className="card-icon">
                {FaIcons.FaBriefcase({}) as any}
              </div>
              <h3>Consulting Services</h3>
              <p>Expert guidance on management systems implementation, process optimization, and compliance strategy.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Why Choose MSC Certifications?</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Expert Knowledge</h3>
              <p>Our team combines technical expertise with practical industry experience across multiple sectors.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Tailored Solutions</h3>
              <p>We customize our services to match your specific industry requirements and organizational goals.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>International Standards</h3>
              <p>All our services align with internationally recognized best practices and compliance frameworks.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>Measurable Results</h3>
              <p>Data-driven approach ensuring tangible improvements in performance, efficiency, and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-intro">
            Our services support organizations across diverse sectors:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Manufacturing & Production</h4>
              <p>Process optimization, equipment assessment, and quality systems</p>
            </div>
            <div className="industry-focus-item">
              <h4>Food & Beverage</h4>
              <p>Food safety training, HACCP implementation, and quality control</p>
            </div>
            <div className="industry-focus-item">
              <h4>Construction & Engineering</h4>
              <p>Safety training, technical assessments, and project compliance</p>
            </div>
            <div className="industry-focus-item">
              <h4>Hospitality (HORECA)</h4>
              <p>Energy efficiency, food safety, and staff development programs</p>
            </div>
            <div className="industry-focus-item">
              <h4>Healthcare & Pharmaceuticals</h4>
              <p>Quality systems, professional certification, and compliance training</p>
            </div>
            <div className="industry-focus-item">
              <h4>Technology & IT</h4>
              <p>Information security, energy management, and process consulting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Let's Build Excellence Together</h2>
          <p>
            Partner with MSC Certifications for comprehensive solutions that drive performance, compliance, and sustainable growth.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Discuss Your Needs</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalServices;
