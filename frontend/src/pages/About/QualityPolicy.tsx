import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    FaUsers,
    FaUserGraduate,
    FaBalanceScale,
    FaShieldAlt,
    FaChartLine
} from 'react-icons/fa';

const QualityPolicy: FC = () => {
    return (
        <div className="about">
            <Helmet>
                <title>Quality Policy - MSC Certifications</title>
                <meta name="description" content="Learn about MSC Certifications' quality policy. We are committed to client-centered service, technical competence, and continuous improvement." />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>Quality Policy</h1>
                    <p className="about-subtitle">
                        Excellence in Every Certification We Deliver
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section section-white">
                <div className="container">
                    <p className="about-text centered" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        At MSC Certifications, quality is not just a standard we assess. It is the foundation of
                        everything we do.
                    </p>
                </div>
            </section>

            {/* Quality Zigzag */}
            <section className="section section-gray">
                <div className="container">
                    <div className="quality-zigzag">
                        <div className="quality-zigzag-item">
                            <div className="quality-zigzag-content">
                                <div className="quality-number">1</div>
                                <div className="quality-zigzag-text">
                                    <h4>Client-Centered Service</h4>
                                    <p>
                                        We listen, understand, and deliver certification services that meet client needs while
                                        maintaining strict impartiality and compliance with ISO/IEC 17021 requirements.
                                    </p>
                                </div>
                            </div>
                            <div className="quality-zigzag-icon">
                                <FaUsers />
                            </div>
                        </div>

                        <div className="quality-zigzag-item reverse">
                            <div className="quality-zigzag-icon">
                                <FaUserGraduate />
                            </div>
                            <div className="quality-zigzag-content">
                                <div className="quality-number">2</div>
                                <div className="quality-zigzag-text">
                                    <h4>Technical Competence</h4>
                                    <p>
                                        Our auditors are carefully selected, trained, and continuously evaluated to ensure
                                        expertise in their specialized fields and certification standards.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="quality-zigzag-item">
                            <div className="quality-zigzag-content">
                                <div className="quality-number">3</div>
                                <div className="quality-zigzag-text">
                                    <h4>Impartiality & Independence</h4>
                                    <p>
                                        All certification decisions are made free from commercial, financial, or other pressures
                                        that could compromise objectivity.
                                    </p>
                                </div>
                            </div>
                            <div className="quality-zigzag-icon">
                                <FaBalanceScale />
                            </div>
                        </div>

                        <div className="quality-zigzag-item reverse">
                            <div className="quality-zigzag-icon">
                                <FaShieldAlt />
                            </div>
                            <div className="quality-zigzag-content">
                                <div className="quality-number">4</div>
                                <div className="quality-zigzag-text">
                                    <h4>Regulatory Compliance</h4>
                                    <p>
                                        We operate in full accordance with national and international regulations, accreditation
                                        requirements, and data protection laws.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="quality-zigzag-item">
                            <div className="quality-zigzag-content">
                                <div className="quality-number">5</div>
                                <div className="quality-zigzag-text">
                                    <h4>Continuous Improvement</h4>
                                    <p>
                                        We regularly review and improve our processes, respond to feedback, and adapt to changes
                                        in standards, technology, and market expectations.
                                    </p>
                                </div>
                            </div>
                            <div className="quality-zigzag-icon">
                                <FaChartLine />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Message */}
            <section className="section section-white">
                <div className="container">
                    <div className="policy-footer">
                        <p>
                            This commitment to quality ensures that every certificate we issue represents a credible,
                            meaningful, and internationally recognized achievement.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-cta-final">
                <div className="container">
                    <h2>Experience Our Quality Commitment</h2>
                    <p>
                        Partner with a certification body that puts quality at the heart of everything we do.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary-large">Contact Us Today</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QualityPolicy;