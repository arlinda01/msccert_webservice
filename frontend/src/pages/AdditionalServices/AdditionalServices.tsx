import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ISOSlider from '../../components/ISOSlider/ISOSlider';

const AdditionalServices: FC = () => {
  const isoCards = [
    {
      to: "/services/iso/iso-9001",
      icon: "FaAward" as const,
      title: "ISO 9001 - Quality Management",
      description: "The world's most recognized standard for quality management systems.",
      benefits: ["Global Recognition", "Improved Efficiency", "Customer Loyalty"]
    },
    {
      to: "/services/iso/iso-14001",
      icon: "FaLeaf" as const,
      title: "ISO 14001 - Environmental",
      description: "Reduce environmental impact and demonstrate sustainability.",
      benefits: ["Reduce Impact", "Cost Savings", "Compliance"]
    },
    {
      to: "/services/iso/iso-45001",
      icon: "FaHardHat" as const,
      title: "ISO 45001 - Health & Safety",
      description: "Create safer workplaces and improve employee well-being.",
      benefits: ["Reduce Accidents", "Legal Compliance", "Lower Insurance"]
    },
    {
      to: "/services/iso/haccp",
      icon: "FaUtensils" as const,
      title: "ISO 22000 / HACCP",
      description: "Food safety management for the entire food chain.",
      benefits: ["HORECA Compliance", "Consumer Trust", "Supply Security"]
    },
    {
      to: "/services/iso/iso-27001",
      icon: "FaLock" as const,
      title: "ISO 27001 - Information Security",
      description: "Protect sensitive information and manage cyber risks.",
      benefits: ["Data Protection", "GDPR Compliance", "Cyber Security"]
    },
    {
      to: "/services/iso/iso-22301",
      icon: "FaShieldAlt" as const,
      title: "ISO 22301 - Business Continuity",
      description: "Prepare for disruptions and ensure business resilience.",
      benefits: ["Minimize Downtime", "Protect Revenue", "Critical Ops"]
    },
    {
      to: "/services/iso/iso-37001",
      icon: "FaHandshake" as const,
      title: "ISO 37001 - Anti-Bribery",
      description: "Prevent, detect, and address bribery and corruption risks.",
      benefits: ["Reduce Legal Risk", "Clean Reputation", "Tender Qualification"]
    },
    {
      to: "/services/iso/iso-39001",
      icon: "FaCar" as const,
      title: "ISO 39001 - Road Traffic Safety",
      description: "Reduce road traffic deaths and serious injuries.",
      benefits: ["Fleet Safety", "Lower Insurance", "Driver Protection"]
    },
    {
      to: "/services/iso/iso-50001",
      icon: "FaBolt" as const,
      title: "ISO 50001 - Energy Management",
      description: "Optimize energy use and reduce costs systematically.",
      benefits: ["Lower Bills", "Measurable Savings", "Green Performance"]
    }
  ];

  const complianceCards = [
    {
      to: "/services/ce-marking",
      icon: "FaCheckDouble" as const,
      title: "CE Marking",
      description: "EU product conformity assessment for market access in the European Economic Area.",
      benefits: ["EU Market Access", "Product Safety", "Legal Compliance"]
    },
    {
      to: "/services/additional/energy-efficiency",
      icon: "FaBolt" as const,
      title: "Energy Efficiency Audits",
      description: "Reduce costs and CO2 emissions through energy analysis and optimization.",
      benefits: ["Cost Reduction", "CO2 Reduction", "Sustainability"]
    },
    {
      to: "/services/additional/equipment-evaluation",
      icon: "FaCogs" as const,
      title: "Machinery & Equipment Evaluation",
      description: "Technical assessments to optimize performance and ensure compliance.",
      benefits: ["Performance Audit", "Compliance Check", "Value Assessment"]
    }
  ];

  const workforceCards = [
    {
      to: "/services/additional/staff-training",
      icon: "FaGraduationCap" as const,
      title: "Staff Training",
      description: "ISO-aligned training programs for quality, safety, and environmental competencies.",
      benefits: ["Skill Development", "ISO Alignment", "Team Performance"]
    },
    {
      to: "/services/additional/professional-card",
      icon: "FaIdCard" as const,
      title: "Professional Cards",
      description: "Job role definition ensuring clear responsibilities and qualifications.",
      benefits: ["Role Clarity", "Compliance Docs", "Qualification Proof"]
    },
    {
      to: "/services/additional/technological-card",
      icon: "FaFileAlt" as const,
      title: "Technological Cards",
      description: "Process control documentation for manufacturing consistency.",
      benefits: ["Process Control", "Quality Assurance", "Manufacturing Docs"]
    }
  ];

  return (
    <div className="iso-page">
      <Helmet>
        <title>Certification, Compliance & Training Services | MSC CERTIFICATIONS</title>
        <meta name="description" content="Explore accredited ISO certification, compliance, and technical training services from MSC CERTIFICATIONS. Build trust, efficiency, and sustainable growth." />
        <meta name="keywords" content="ISO certification services, compliance audits, staff training, product evaluation, CE marking, ISO auditor, workforce competence, accredited certification, MSC CERTIFICATIONS" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="iso-subtitle">
            Accredited Certification, Compliance, and Training for Every Industry. At MSC CERTIFICATIONS, we provide a complete portfolio of internationally accredited services designed to strengthen your organization's trust, safety, and performance.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="iso-text">
            MSC CERTIFICATIONS provides a comprehensive range of internationally accredited certification, inspection, and training services. Our approach combines technical expertise, local market insight, and accredited credibility — turning compliance into a driver for competitive advantage.
          </p>
          <p className="iso-text">
            Whether you need ISO certification, CE marking, workforce development, or compliance auditing, our team of experienced professionals is ready to support your organization's growth and success.
          </p>
        </div>
      </section>

      {/* ISO Certification Services */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">ISO Certification Services</h2>
          <p className="section-intro">
            Build credibility, reduce risk, and achieve international recognition with our accredited ISO certification services:
          </p>
          <ISOSlider cards={isoCards} />
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services/iso" className="btn btn-secondary">View All ISO Certifications</Link>
          </div>
        </div>
      </section>

      {/* Product and Compliance Services */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Product & Compliance Services</h2>
          <p className="section-intro">
            Ensure your products and operations meet legal and market access requirements:
          </p>
          <ISOSlider cards={complianceCards} />
        </div>
      </section>

      {/* Workforce Competence */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Workforce Competence & Development</h2>
          <p className="section-intro">
            Build a qualified, compliant, and motivated team with our professional development services:
          </p>
          <ISOSlider cards={workforceCards} />
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-intro">
            Tailored certification and compliance audits for high-risk and regulated industries:
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Construction & Infrastructure</h3>
              <p>Safety systems, quality management, and project compliance.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Food & HORECA</h3>
              <p>Food safety, HACCP, and hygiene compliance.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>IT & Telecommunications</h3>
              <p>Information security and data protection.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3>Manufacturing & Energy</h3>
              <p>Quality systems and energy management.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">5</div>
              <h3>Public Sector & Tenders</h3>
              <p>Anti-bribery and governance compliance.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">6</div>
              <h3>Logistics & Transport</h3>
              <p>Road traffic safety and fleet management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Accreditation & Integrity</h2>
          <p className="iso-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            All services are delivered under international accreditation and in accordance with ISO/IEC 17021. Our work is guided by impartiality, transparency, and technical excellence, ensuring your certification is globally recognized and trusted.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/about-us/accreditation/" className="btn btn-secondary">Learn About Our Accreditation</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Start Your Certification or Compliance Project</h2>
          <p>
            Partner with MSC CERTIFICATIONS to build the systems, competence, and credibility your business needs to compete globally.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Request a Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalServices;