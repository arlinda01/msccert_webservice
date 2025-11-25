import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ProfessionalCard: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>Professional Card Services | Role Definition & Workforce Compliance - MSC CERTIFICATIONS</title>
        <meta name="description" content="Standardize job roles and ensure labor compliance with MSC CERTIFICATIONS. Define responsibilities, improve training, and boost operational clarity." />
        <meta name="keywords" content="professional card, workforce compliance, role definition, HR documentation, ISO 45001 workforce, occupational competence, job responsibility card" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>Professional Card: Define Roles, Ensure Competence, and Strengthen Compliance</h1>
          <p className="iso-subtitle">
            Ready to formalize your workforce structure and demonstrate professional competence across your organization?
          </p>
          <p className="iso-subtitle">
            A Professional Card clearly defines the duties, responsibilities, qualifications, and safety requirements for each position — ensuring compliance, consistency, and operational excellence.
          </p>
          <div className="hero-buttons">
            <Link to="/contact-us" className="btn btn-primary">Request a Professional Card Service Quote</Link>
            <Link to="/online-audit-page" className="btn btn-secondary">Start Your Workforce Compliance Review</Link>
          </div>
        </div>
      </section>

      {/* What Is Professional Card Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Is a Professional Card?</h2>
          <h3 style={{ fontSize: '1.5rem', color: '#01434f', marginBottom: '1.5rem' }}>
            The Framework for Workforce Standardization
          </h3>
          <p className="iso-text">
            A Professional Card is an official document that describes a specific job role or occupation within your organization.
          </p>
          <p className="iso-text">
            It outlines the required skills, education, responsibilities, tools used, and working conditions for that role. This documentation forms the foundation for HR management, labor compliance, training, and safety assurance.
          </p>
          <p className="iso-text">
            Each Professional Card ensures that every employee's function is clearly defined — reducing ambiguity, improving accountability, and ensuring regulatory alignment.
          </p>

          <div className="iso-role-box">
            <h3>Our Role as Independent Verifiers</h3>
            <p>
              We help companies develop and verify Professional Cards that meet both national labor standards and international best practices (such as ISO 9001 and ISO 45001).
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Key Benefits: Structure, Compliance, and Transparency</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Clarity in Responsibilities</h3>
              <p>
                Define clear duties and expectations for every position, eliminating role confusion and overlap.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Compliance with Labor Standards</h3>
              <p>
                Meet legal, health, and safety documentation requirements, ensuring full regulatory alignment.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Improved Training and Evaluation</h3>
              <p>
                Build targeted training plans and fair performance reviews based on clear role definitions.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>Organizational Efficiency</h3>
              <p>
                Avoid role overlap and improve workforce coordination across all departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industry Focus: Where Professional Cards Add Value</h2>
          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Manufacturing and Industrial Operations</h4>
              <p>Production roles, technical positions, safety-critical functions</p>
            </div>
            <div className="industry-focus-item">
              <h4>Construction and Engineering</h4>
              <p>Site managers, engineers, specialized tradespeople</p>
            </div>
            <div className="industry-focus-item">
              <h4>Energy and Utilities</h4>
              <p>Technical operators, maintenance staff, safety officers</p>
            </div>
            <div className="industry-focus-item">
              <h4>Transport and Logistics</h4>
              <p>Drivers, dispatchers, warehouse supervisors</p>
            </div>
            <div className="industry-focus-item">
              <h4>Public Administration and Services</h4>
              <p>Administrative positions, public service roles</p>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Advantage Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Building Workforce Integrity with MSC CERTIFICATIONS</h2>
          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>Expert Documentation Specialists</h3>
              <p>Deep regulatory knowledge and experience across multiple industries and standards.</p>
            </div>
            <div className="advantage-card">
              <h3>Fully Compliant Templates</h3>
              <p>Tailored to your national and industry standards, ensuring complete compliance.</p>
            </div>
            <div className="advantage-card">
              <h3>Independent Verification</h3>
              <p>Objective assessment ensuring objectivity and credibility for all stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Ready to formalize and document your workforce structure with precision?</h2>
          <p>
            Partner with MSC CERTIFICATIONS to create Professional Cards that establish clarity, compliance, and confidence across your organization.
          </p>
          <div className="cta-buttons">
            <Link to="/contact-us" className="btn btn-primary">Start Your Professional Card Project Today</Link>
          </div>
          <p className="cta-footer">Professional documentation for professional organizations.</p>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalCard;
