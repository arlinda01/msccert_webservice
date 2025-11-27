import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    FaBalanceScale,
    FaLock,
    FaSearch,
    FaHandshake,
    FaGavel
} from 'react-icons/fa';

const CodeOfEthics: FC = () => {
    return (
        <div className="about">
            <Helmet>
                <title>Code of Ethics - MSC Certifications</title>
                <meta name="description" content="Discover MSC Certifications' Code of Ethics. We are committed to impartiality, confidentiality, objectivity, and professional conduct in all our engagements." />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>Code of Ethics</h1>
                    <p className="about-subtitle">
                        Integrity and Trust in Every Engagement
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section section-white">
                <div className="container">
                    <p className="about-text centered">
                        Ethics and integrity are at the core of how MSC Certifications operates.
                    </p>
                    <p className="about-text centered">
                        Our Code of Ethics defines the standards of behavior expected from all employees, auditors, and
                        representatives, ensuring fairness, confidentiality, and respect in every engagement.
                    </p>
                </div>
            </section>

            {/* Ethical Commitments */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Our Ethical Commitments</h2>

                    <div className="ethics-grid">
                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaBalanceScale />
                            </div>
                            <h4>Impartiality</h4>
                            <p>
                                Certification decisions are made independently of any commercial or personal interest.
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaLock />
                            </div>
                            <h4>Confidentiality</h4>
                            <p>
                                All client information is handled securely and used only for legitimate purposes.
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaSearch />
                            </div>
                            <h4>Objectivity</h4>
                            <p>
                                Audits and evaluations are evidence-based and transparent.
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaHandshake />
                            </div>
                            <h4>Respect and Professional Conduct</h4>
                            <p>
                                We treat clients, colleagues, and partners with fairness and courtesy.
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaGavel />
                            </div>
                            <h4>Compliance with Law</h4>
                            <p>
                                We operate in accordance with national and international regulations, accreditation
                                requirements, and data protection laws.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Message */}
            <section className="section section-white">
                <div className="container">
                    <div className="ethics-footer">
                        <p>
                            By following these principles, MSC Certifications ensures trust, credibility, and
                            professional integrity in every project.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-cta-final">
                <div className="container">
                    <h2>Work with a Partner You Can Trust</h2>
                    <p>
                        Experience ethical, transparent, and professional certification services.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary-large">Contact Us Today</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CodeOfEthics;