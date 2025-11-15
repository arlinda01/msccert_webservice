import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const EnergyEfficiency: FC = () => {
  return (
    <div className="iso-page">
      <Helmet>
        <title>Energy Efficiency Audits - Cut Energy Costs & CO₂ Emissions</title>
        <meta name="description" content="Lower energy use, reduce emissions, and gain stability with MSC Certifications. Start your expert energy efficiency assessment today." />
        <meta name="keywords" content="energy efficiency audit, energy assessment, ISO 50001 certification, reduce energy consumption, CO₂ reduction, sustainable energy performance, energy optimization, MSC Certifications" />
      </Helmet>

      {/* Hero Section */}
      <section className="iso-hero">
        <div className="container">
          <h1>Energy Efficiency: Reduce Costs, Emissions, and Energy Risks</h1>
          <p className="iso-subtitle">
            Energy efficiency is no longer optional - it's a strategic advantage. Our Energy Efficiency Assessment Program is a structured, data-driven approach to measure, analyze, and reduce energy consumption across buildings, processes, and equipment. The goal: lower your costs, minimize environmental impact, and build resilience against fluctuating energy prices.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Request an Energy Efficiency Assessment</Link>
          </div>
        </div>
      </section>

      {/* What is Energy Efficiency */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Is Energy Efficiency?</h2>
          <p className="iso-text">
            Energy efficiency is about achieving the same or higher productivity with less energy input. Through advanced monitoring and analysis, we identify where, how, and why energy is being wasted - and provide a clear roadmap for improvement.
          </p>

          <div className="iso-role-box">
            <h3>This structured program includes:</h3>
            <ul className="services-list">
              <li>Measurement and verification of energy use</li>
              <li>Analysis of operational efficiency</li>
              <li>Identification of technical and behavioral savings opportunities</li>
              <li>Implementation and monitoring support</li>
            </ul>
          </div>

          <p className="iso-text" style={{ marginTop: '2rem' }}>
            The process aligns with international standards such as <strong>ISO 50001: Energy Management Systems</strong> and supports both compliance and sustainability goals.
          </p>
        </div>
      </section>

      {/* Why Invest */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Why Invest in Energy Efficiency?</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3>Immediate Cost Reduction</h3>
              <p>
                Cut electricity, gas, and fuel bills through measurable efficiency gains - often achieving payback within months.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3>Lower Carbon Footprint</h3>
              <p>
                Reducing energy waste directly decreases CO₂ emissions, helping meet corporate sustainability targets and ESG reporting requirements.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3>Protection Against Energy Price Volatility</h3>
              <p>
                Efficient operations are less affected by rising or unstable energy markets, increasing long-term business resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Who Benefits</h2>
          <p className="section-intro">
            Our program is designed for organizations across multiple sectors:
          </p>

          <div className="industry-focus-list">
            <div className="industry-focus-item">
              <h4>Manufacturing and Industrial Plants</h4>
              <p>Optimize production processes and reduce operational energy costs</p>
            </div>
            <div className="industry-focus-item">
              <h4>Commercial and Office Buildings</h4>
              <p>Improve HVAC efficiency and lighting systems</p>
            </div>
            <div className="industry-focus-item">
              <h4>Hotels, Restaurants, and Catering (HORECA)</h4>
              <p>Reduce energy consumption in high-usage environments</p>
            </div>
            <div className="industry-focus-item">
              <h4>Retail Chains and Shopping Centers</h4>
              <p>Lower electricity costs across multiple locations</p>
            </div>
            <div className="industry-focus-item">
              <h4>Data Centers and IT Facilities</h4>
              <p>Optimize cooling and power distribution systems</p>
            </div>
            <div className="industry-focus-item">
              <h4>Transportation, Energy, and Utility Providers</h4>
              <p>Enhance operational efficiency and sustainability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Your Partner in Sustainable Performance</h2>
          <p className="section-intro" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            At MSC Certifications, we combine engineering expertise with international best practices to deliver practical, data-backed energy solutions. Our approach drives measurable savings, ensures compliance, and enhances your environmental reputation.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-cta-final">
        <div className="container">
          <h2>Start Your Energy Efficiency Program Today</h2>
          <p>
            Reduce costs, lower emissions, and build resilience against energy price volatility.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Request an Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyEfficiency;
