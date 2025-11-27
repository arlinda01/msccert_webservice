import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    FaUserTie,
    FaDollarSign,
    FaTachometerAlt,
    FaGlobeAmericas
} from 'react-icons/fa';

const About: FC = () => {
    return (
        <div className="about">
            <Helmet>
                <title>About MSC Certifications - Your Trusted Partner in ISO Certification</title>
                <meta name="description" content="MSC Certifications is an accredited certification body providing ISO certification, CE marking, and technical evaluation services with global recognition." />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>About MSC Certifications</h1>
                    <p className="about-subtitle">
                        Your Trusted Partner in International Standards and Compliance
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="section section-white">
                <div className="container">
                    <div className="who-we-are-grid">
                        <div className="who-we-are-content">
                            <h2 className="section-title" style={{ textAlign: 'left' }}>Who We Are</h2>
                            <p className="about-text" style={{ textAlign: 'left', margin: '0 0 1.5rem 0' }}>
                                In a world where quality, safety, and compliance define business success, MSC Certifications
                                stands as your reliable partner in achieving internationally recognized standards.
                            </p>
                            <p className="about-text" style={{ textAlign: 'left', margin: '0 0 1.5rem 0' }}>
                                Operating since 2024, MSC Certifications is an accredited certification and assessment body
                                recognized by the General Directorate of Accreditation (DPA), the national accreditation
                                authority of Albania.
                            </p>
                            <p className="about-text" style={{ textAlign: 'left', margin: '0 0 1.5rem 0' }}>
                                The DPA is a full member of the International Accreditation Forum (IAF) and European
                                Accreditation (EA), ensuring that all certificates issued by MSC Certifications are globally
                                recognized and accepted across industries and regions.
                            </p>
                            <p className="about-text" style={{ textAlign: 'left', margin: '0' }}>
                                We provide a complete portfolio of services in ISO certification, CE marking, and technical
                                evaluation, delivered with professionalism, transparency, and deep local insight.
                            </p>
                        </div>
                        <div className="who-we-are-image">
                            <img src="/logo.svg" alt="MSC Certifications Logo" className="who-we-are-logo" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Why Choose MSC Certifications</h2>
                    <div className="why-choose-grid">
                        <div className="why-choose-card">
                            <FaUserTie className="why-icon" />
                            <h3>Sector-Specific Audit Expertise</h3>
                            <p>Auditors experienced in the exact sectors and standards they evaluate.</p>
                        </div>
                        <div className="why-choose-card">
                            <FaDollarSign className="why-icon" />
                            <h3>Competitive and Transparent Pricing</h3>
                            <p>Fair, clear, and cost-effective certification solutions.</p>
                        </div>
                        <div className="why-choose-card">
                            <FaTachometerAlt className="why-icon" />
                            <h3>Efficient and Accredited Audit Processes</h3>
                            <p>Streamlined timelines following international accreditation standards.</p>
                        </div>
                        <div className="why-choose-card">
                            <FaGlobeAmericas className="why-icon" />
                            <h3>Globally Recognized Certificates</h3>
                            <p>Trusted by authorities, clients, and partners worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="section section-commitment">
                <div className="container">
                    <h2>Our Commitment</h2>
                    <p className="commitment-text">
                        Since 2024, MSC Certifications has been helping organizations operate with confidence, quality,
                        and integrity, turning complex standards into clear, measurable results trusted worldwide.
                    </p>
                    <div className="commitment-cta">
                        <Link to="/contact" className="btn btn-primary-large">Start Your Certification Journey</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;