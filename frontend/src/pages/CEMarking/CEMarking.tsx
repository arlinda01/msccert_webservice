import { FC } from 'react';
import { Link } from 'react-router-dom';

const CEMarking: FC = () => {
  return (
    <div className="iso-page">
      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>CE Marking: Demonstrate Product Compliance for the EU Market</h1>
          <p className="iso-subtitle">
            CE Marking is a mandatory conformity mark that enables products to be legally sold in the European Economic Area (EEA).
            By affixing the CE mark, the manufacturer declares that the product complies with all applicable EU safety, health, and environmental protection requirements outlined in relevant directives and regulations.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Request CE Marking Support</Link>
            <Link to="/online-assessment" className="btn btn-secondary">Check Your Product's CE Readiness</Link>
          </div>
        </div>
      </section>

      {/* What is CE Marking */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Is CE Marking?</h2>
          <p className="iso-text">
            CE (Conformité Européenne) Marking is a legal declaration by the manufacturer that a product meets the essential requirements of all applicable EU legislation. It is not a quality mark but a regulatory compliance requirement.
          </p>
          <p className="iso-text">
            CE Marking allows for the free movement of products within the EU and EEA and demonstrates that a product has undergone appropriate conformity assessment procedures.
          </p>

          <div className="iso-role-box">
            <h3>Our Role as a Certification Partner</h3>
            <p>
              <strong>MSC Certifications</strong> conducts assessments and audits as part of the CE conformity route, depending on the applicable directive (e.g., Machinery Directive, Medical Device Regulation).
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Benefits of CE Marking for Manufacturers</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Legal Access to EU/EEA Markets</h3>
              <p>
                CE Marking is mandatory for many regulated products. Without it, legal sale or distribution within the EU/EEA is not permitted.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Confidence from Consumers and Authorities</h3>
              <p>
                The CE mark assures buyers and regulators that the product meets essential safety and performance criteria.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Simplified Audits Through Harmonized Standards</h3>
              <p>
                Products compliant with harmonized European standards benefit from easier conformity assessments and market surveillance audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Requiring CE Marking */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Industries Requiring CE Marking</h2>
          <p className="section-intro">
            CE Marking applies to a broad range of products sold in the EU. Common industries include:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Electrical and Electronic Equipment</h4>
              <p>LVD, EMC, RoHS compliance</p>
            </div>
            <div className="industry-focus-item">
              <h4>Machinery</h4>
              <p>Safety of moving parts, automation, and control systems</p>
            </div>
            <div className="industry-focus-item">
              <h4>Toys</h4>
              <p>Mechanical and chemical safety per Toy Safety Directive</p>
            </div>
            <div className="industry-focus-item">
              <h4>Medical Devices</h4>
              <p>MDR compliance with clinical and post-market data</p>
            </div>
            <div className="industry-focus-item">
              <h4>Construction Products</h4>
              <p>CE under the Construction Products Regulation (CPR)</p>
            </div>
            <div className="industry-focus-item">
              <h4>Personal Protective Equipment (PPE)</h4>
              <p>Risk categorization and testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Achieve CE Marking */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Steps to Achieve CE Marking</h2>
          <p className="section-intro">
            Follow this structured process to ensure your products meet EU compliance requirements
          </p>

          <div className="ce-steps-grid">
            <div className="ce-step-card">
              <div className="ce-step-number">1</div>
              <h3>Identify Applicable EU Directives</h3>
              <p>Confirm product-specific essential requirements and regulations</p>
            </div>

            <div className="ce-step-card">
              <div className="ce-step-number">2</div>
              <h3>Select Conformity Assessment</h3>
              <p>Determine the appropriate route based on your product category and risk classification</p>
            </div>

            <div className="ce-step-card">
              <div className="ce-step-number">3</div>
              <h3>Compile Technical Documentation</h3>
              <p>Prepare comprehensive technical files demonstrating compliance with essential requirements</p>
            </div>

            <div className="ce-step-card">
              <div className="ce-step-number">4</div>
              <h3>Affix the CE Mark</h3>
              <p>Once conformity is verified, affix the CE mark to your product</p>
            </div>

            <div className="ce-step-card">
              <div className="ce-step-number">5</div>
              <h3>Issue EU Declaration</h3>
              <p>Prepare and sign the declaration stating compliance with all applicable directives</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Ensure Your Products Meet Legal Entry Requirements</h2>
          <p>
            Build trust across the EU market with proper CE Marking certification. Start your compliance journey with MSC Certifications today.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
            <Link to="/online-assessment" className="btn btn-secondary">Free Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CEMarking;