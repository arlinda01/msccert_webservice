import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MissionVision: FC = () => {
    return (
        <div className="about">
            <Helmet>
                <title>Mission & Vision - MSC Certifications</title>
                <meta name="description" content="Discover the mission and vision of MSC Certifications. We empower organizations to achieve international excellence through accredited certification services." />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>Mission & Vision</h1>
                    <p className="about-subtitle">
                        Driving Excellence Through International Standards
                    </p>
                </div>
            </section>

            {/* Mission & Vision Content */}
            <section className="section section-white">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mission-card">
                            <h3>Our Mission</h3>
                            <p>
                                At MSC Certifications, our mission is to empower organizations to achieve international
                                excellence through accredited certification, inspection, and training services.
                            </p>
                            <p>
                                We are committed to providing objective, transparent, and technically competent
                                assessments that strengthen client confidence, improve performance, and promote
                                sustainable development.
                            </p>
                            <p className="highlight-text">
                                We believe certification is more than a document. It's a tool for continuous improvement
                                and global recognition.
                            </p>
                        </div>

                        <div className="vision-card">
                            <h3>Our Vision</h3>
                            <p>
                                To be recognized as a leading certification and compliance body in the region, known for
                                credibility, professionalism, and client trust.
                            </p>
                            <p>
                                We aim to set the benchmark for integrity, expertise, and value-added certification,
                                helping businesses of all sizes compete confidently in international markets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h4>Integrity</h4>
                            <p>Acting impartially and ethically in every audit and decision.</p>
                        </div>
                        <div className="value-card">
                            <h4>Competence</h4>
                            <p>Using qualified experts specialized in each industry sector.</p>
                        </div>
                        <div className="value-card">
                            <h4>Transparency</h4>
                            <p>Communicating clearly and honestly with clients.</p>
                        </div>
                        <div className="value-card">
                            <h4>Continuous Improvement</h4>
                            <p>Adapting to evolving standards and best practices.</p>
                        </div>
                        <div className="value-card">
                            <h4>Customer Focus</h4>
                            <p>Providing professional and responsive service.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-cta-final">
                <div className="container">
                    <h2>Ready to Start Your Certification Journey?</h2>
                    <p>
                        Partner with MSC Certifications and experience our commitment to excellence firsthand.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary-large">Contact Us Today</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MissionVision;