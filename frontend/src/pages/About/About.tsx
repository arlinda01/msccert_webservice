import { FC } from 'react';
import { Link } from 'react-router-dom';

const About: FC = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About MSC CERTIFICATIONS</h1>
          <p className="about-subtitle">
            Your Trusted Partner in International Standards and Compliance
          </p>
          <p className="about-intro">
            In a world where quality, safety, and compliance define business success, MSC CERTIFICATIONS stands as your reliable partner for achieving internationally recognized standards. We are an accredited certification and assessment body providing a complete portfolio of services in ISO certification, compliance marking, and technical evaluation — all delivered with professionalism, transparency, and local expertise.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <p className="about-text">
            MSC CERTIFICATIONS is an accredited organization specializing in assessment, inspection, and certification services according to international standards. Our mission is to help organizations meet global compliance requirements, enhance operational excellence, and strengthen their competitive position in the market.
          </p>
          <p className="about-text">
            Through our team of qualified auditors and technical experts, we combine international experience with deep understanding of local industries to deliver reliable, objective, and practical certification services.
          </p>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Our Mission and Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integrity and Impartiality</h3>
              <p>We ensure every audit and certification process is fair, objective, and evidence-based.</p>
            </div>
            <div className="value-card">
              <h3>Expertise and Professionalism</h3>
              <p>Our auditors are specialists in the specific industries and standards they evaluate.</p>
            </div>
            <div className="value-card">
              <h3>Continuous Improvement</h3>
              <p>We support clients not just to comply — but to evolve and grow sustainably.</p>
            </div>
            <div className="value-card">
              <h3>Trust and Transparency</h3>
              <p>We build long-term relationships founded on credibility and clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="services-overview">
            <div className="service-category">
              <h3 className="service-category-title">ISO Certification Services</h3>
              <p className="service-category-intro">
                We provide accredited certification for a wide range of international standards, including:
              </p>
              <ul className="services-list">
                <li>ISO 9001 – Quality Management</li>
                <li>ISO 14001 – Environmental Management</li>
                <li>ISO 22000 – Food Safety Management</li>
                <li>ISO 27001 – Information Security</li>
                <li>ISO 45001 – Health & Safety at Work</li>
                <li>ISO 22301 – Business Continuity</li>
                <li>ISO 37001 – Anti-Bribery Management</li>
                <li>ISO 39001 – Road Traffic Safety</li>
                <li>ISO 50001 – Energy Management</li>
                <li>HACCP</li>
                <li>CE Marking</li>
              </ul>
            </div>

            <div className="service-category">
              <h3 className="service-category-title">Additional and Technical Services</h3>
              <p className="service-category-intro">
                Beyond certification, MSC CERTIFICATIONS also offers specialized services that strengthen compliance and operational efficiency:
              </p>
              <ul className="services-list">
                <li>Energy Efficiency Programs</li>
                <li>Staff Training</li>
                <li>Professional Cards</li>
                <li>Evaluation of Technological Lines, Machinery, and Equipment</li>
                <li>Technological Cards</li>
              </ul>
            </div>
          </div>

          <p className="about-text centered">
            Each service is designed to deliver measurable value, enhance compliance, and support continuous improvement within your organization.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Why Choose MSC CERTIFICATIONS</h2>
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <h3>Specialized Industry Expertise</h3>
              <p>Auditors experienced in the exact sectors they evaluate.</p>
            </div>
            <div className="why-choose-card">
              <h3>Competitive Pricing</h3>
              <p>Transparent, fair, and cost-effective certification solutions.</p>
            </div>
            <div className="why-choose-card">
              <h3>Efficient Processes</h3>
              <p>Audit timelines calculated according to international accreditation rules.</p>
            </div>
            <div className="why-choose-card">
              <h3>Global Recognition</h3>
              <p>Accredited certificates trusted by authorities, clients, and partners worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section section-commitment">
        <div className="container">
          <h2>Our Commitment</h2>
          <p className="commitment-text">
            Whether you are seeking your first certification, renewing compliance, or optimizing your internal processes, MSC CERTIFICATIONS is here to guide you with expertise, integrity, and reliability. We turn complex standards into clear, achievable results — helping your business operate with confidence, quality, and global credibility.
          </p>
          <div className="commitment-cta">
            <Link to="/contact" className="btn btn-primary-large">Get Started Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
