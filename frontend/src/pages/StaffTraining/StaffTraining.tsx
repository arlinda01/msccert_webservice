import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const StaffTraining: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>Staff Training Programs | ISO-Aligned Workforce Development - MSC CERTIFICATIONS</title>
        <meta name="description" content="Boost staff performance, safety, and compliance with ISO-based training by MSC CERTIFICATIONS. Tailored programs for every industry. Start today." />
        <meta name="keywords" content="ISO staff training, workforce development, ISO 9001 training, ISO 45001 training, employee competence, compliance training, safety training, corporate training programs, MSC CERTIFICATIONS" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>Staff Training: Build Competence, Safety, and Performance</h1>
          <p className="iso-subtitle">
            Empower your team with the skills and awareness to perform safely, efficiently, and in full compliance with international standards.
          </p>
          <p className="iso-subtitle">
            MSC CERTIFICATIONS provides role-based and competency-focused training programs, designed to meet the specific needs of your industry and aligned with ISO 9001, ISO 14001, and ISO 45001 requirements.
          </p>
          <div className="hero-buttons">
            <Link to="/contact-us" className="btn btn-primary">Request a Staff Training Proposal</Link>
            <Link to="/online-audit-page" className="btn btn-secondary">Book a Free Training Needs Assessment</Link>
          </div>
        </div>
      </section>

      {/* What Is Staff Training Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Is Staff Training?</h2>
          <p className="iso-text">
            Our Staff Training Program is a structured learning system developed to strengthen the skills, knowledge, and awareness of your workforce.
          </p>
          <p className="iso-text">
            Each course is tailored to the employee's role, level of responsibility, and industry, ensuring practical competence and measurable improvement.
          </p>

          <div className="iso-role-box">
            <h3>Training modules can include:</h3>
            <ul className="services-list">
              <li><strong>Quality Management (ISO 9001)</strong> — process control, documentation, customer focus</li>
              <li><strong>Environmental Management (ISO 14001)</strong> — sustainability, waste reduction, environmental impact</li>
              <li><strong>Occupational Health & Safety (ISO 45001)</strong> — risk prevention, emergency response, safe working behavior</li>
            </ul>
          </div>

          <p className="iso-text" style={{ marginTop: '2rem' }}>
            All programs are developed according to adult learning principles and can be delivered on-site, online, or in hybrid format.
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Key Benefits: Performance, Compliance, and Retention</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Increase Productivity and Quality</h3>
              <p>
                Well-trained employees perform with greater accuracy, consistency, and efficiency — directly improving product and service quality.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Strengthen Compliance and Safety</h3>
              <p>
                Ensure full adherence to internal policies, legal requirements, and ISO standards. Reduce accidents and enhance safety culture.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Reduce Errors and Staff Turnover</h3>
              <p>
                Competent, confident employees make fewer mistakes and are more engaged, leading to stronger retention and lower training costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Train Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Who We Train</h2>
          <p className="section-intro">
            We deliver customized programs across all industries:
          </p>
          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Manufacturing and Industrial Operations</h4>
              <p>Production teams, quality control, safety officers</p>
            </div>
            <div className="industry-focus-item">
              <h4>Construction and Engineering</h4>
              <p>Site supervisors, project managers, safety coordinators</p>
            </div>
            <div className="industry-focus-item">
              <h4>Transport and Logistics</h4>
              <p>Drivers, warehouse staff, operations managers</p>
            </div>
            <div className="industry-focus-item">
              <h4>Hospitality (HORECA)</h4>
              <p>Front-line staff, kitchen teams, management</p>
            </div>
            <div className="industry-focus-item">
              <h4>Service and Call Centers</h4>
              <p>Customer service representatives, team leads</p>
            </div>
            <div className="industry-focus-item">
              <h4>Public Administration and Healthcare</h4>
              <p>Administrative staff, healthcare providers, compliance officers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MSC Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Why Choose MSC CERTIFICATIONS</h2>
          <div className="advantage-cards">
            <div className="advantage-card">
              <h3>Certified Trainers and Auditors</h3>
              <p>Experts with real industry experience and proven track records in their fields.</p>
            </div>
            <div className="advantage-card">
              <h3>Standards-Aligned Programs</h3>
              <p>Fully compliant with ISO frameworks and international best practices.</p>
            </div>
            <div className="advantage-card">
              <h3>Flexible Delivery</h3>
              <p>On-site or remote training adapted to your schedule and operational needs.</p>
            </div>
            <div className="advantage-card">
              <h3>Measured Results</h3>
              <p>Post-training evaluations and performance tracking to ensure lasting impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Investing in your people is investing in your performance.</h2>
          <p>
            Partner with MSC CERTIFICATIONS to develop skilled, compliant, and motivated teams that drive excellence every day.
          </p>
          <div className="cta-buttons">
            <Link to="/contact-us" className="btn btn-primary">Start Your Staff Training Program Today</Link>
          </div>
          <p className="cta-footer">Professional training that delivers real results.</p>
        </div>
      </section>
    </div>
  );
};

export default StaffTraining;
