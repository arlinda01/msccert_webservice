import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as FaIcons from 'react-icons/fa';
import ISOSlider from '../../components/ISOSlider/ISOSlider';

const ISOCertifications: FC = () => {
  const isoCards = [
    {
      to: "/services/iso/iso-9001",
      icon: "FaAward" as const,
      title: "ISO 9001 - Quality Management",
      description: "The world's most recognized standard for quality management systems, ensuring consistent product and service delivery.",
      benefits: ["Global Recognition", "Improved Efficiency", "Stronger Customer Loyalty"]
    },
    {
      to: "/services/iso/iso-14001",
      icon: "FaLeaf" as const,
      title: "ISO 14001 - Environmental Management",
      description: "Reduce environmental impact, improve sustainability, and demonstrate environmental responsibility.",
      benefits: ["Reduce Environmental Impact", "Cost Savings", "Regulatory Compliance"]
    },
    {
      to: "/services/iso/iso-22301",
      icon: "FaShieldAlt" as const,
      title: "ISO 22301 - Business Continuity",
      description: "Prepare for disruptions and ensure business resilience in the face of unexpected events.",
      benefits: ["Minimize Downtime", "Protect Revenue", "Maintain Critical Operations"]
    },
    {
      to: "/services/iso/iso-27001",
      icon: "FaLock" as const,
      title: "ISO 27001 - Information Security",
      description: "Protect sensitive information and demonstrate robust information security management.",
      benefits: ["Data Protection", "GDPR Compliance", "Enhanced Cyber Security"]
    },
    {
      to: "/services/iso/iso-37001",
      icon: "FaCertificate" as const,
      title: "ISO 37001 - Anti-Bribery Management",
      description: "Implement controls to prevent, detect, and address bribery and corruption risks.",
      benefits: ["Reduce Legal Risk", "Clean Reputation", "Tender Qualification"]
    },
    {
      to: "/services/iso/iso-39001",
      icon: "FaCar" as const,
      title: "ISO 39001 - Road Traffic Safety",
      description: "Reduce road traffic deaths and serious injuries related to your organization's operations.",
      benefits: ["Reduce Fleet Accidents", "Lower Insurance Premiums", "Improve Driver Safety"]
    },
    {
      to: "/services/iso/iso-45001",
      icon: "FaHardHat" as const,
      title: "ISO 45001 - Health & Safety at Work",
      description: "Create safer workplaces, reduce workplace injuries, and improve employee well-being.",
      benefits: ["Reduce Workplace Accidents", "Legal Compliance", "Lower Insurance Costs"]
    },
    {
      to: "/services/iso/iso-50001",
      icon: "FaBolt" as const,
      title: "ISO 50001 - Energy Management",
      description: "Optimize energy use, reduce costs, and minimize environmental impact through systematic energy management.",
      benefits: ["Reduce Utility Bills", "Measurable Savings", "Environmental Performance"]
    },
    {
      to: "/services/iso/haccp",
      icon: "FaUtensils" as const,
      title: "HACCP - Food Safety",
      description: "Critical food safety management system focused on preventing hazards in food production.",
      benefits: ["HORECA Compliance", "Supply Chain Security", "Consumer Trust"]
    }
  ];

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

          <ISOSlider cards={isoCards} />
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
