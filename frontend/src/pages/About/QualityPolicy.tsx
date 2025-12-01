import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    FaCheckCircle,
    FaUserGraduate,
    FaHeart,
    FaBalanceScale,
    FaChartLine
} from 'react-icons/fa';

const QualityPolicy: FC = () => {
    return (
        <div className="about">
            <Helmet>
                <title>Quality Policy | MSC CERTIFICATIONS</title>
                <meta name="description" content="MSC CERTIFICATIONS ensures quality, impartiality, and professionalism in full compliance with ISO/IEC 17021 and accreditation bodies DPA, IAF & EA, fostering continuous improvement." />
                <meta name="keywords" content="quality policy, ISO/IEC 17021, accreditation DPA, IAF, EA, certification body, impartiality, integrity, audit quality, continuous improvement, MSC Certifications" />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>Commitment to Quality</h1>
                    <p className="about-subtitle">
                        Excellence Through Continuous Improvement
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section section-white">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <p className="about-text centered" style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                            At MSC CERTIFICATIONS, we are fully committed to delivering accredited certification and assessment services that uphold the highest standards of quality, impartiality, and professionalism.
                        </p>
                        <p className="about-text centered" style={{ fontSize: '1.15rem', lineHeight: '1.9' }}>
                            We believe that quality is not a target but a continuous journey of improvement. Through our Quality Policy, we ensure that every service complies with international accreditation requirements and provides measurable value, reliability, and client trust.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quality Objectives */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>Quality Objectives</h2>

                    <div className="quality-zigzag">
                        <div className="quality-zigzag-item">
                            <div className="quality-zigzag-content">
                                <div className="quality-number">1</div>
                                <div className="quality-zigzag-text">
                                    <h4>Compliance with International Standards</h4>
                                    <p>
                                        All certification and auditing activities are conducted in accordance with ISO/IEC 17021 and the accreditation criteria established by DPA, IAF, and EA. This ensures that all certificates issued by MSC CERTIFICATIONS are valid, reliable, and internationally recognized.
                                    </p>
                                </div>
                            </div>
                            <div className="quality-zigzag-icon">
                                <FaCheckCircle />
                            </div>
                        </div>

                        <div className="quality-zigzag-item reverse">
                            <div className="quality-zigzag-icon">
                                <FaUserGraduate />
                            </div>
                            <div className="quality-zigzag-content">
                                <div className="quality-number">2</div>
                                <div className="quality-zigzag-text">
                                    <h4>Competence of Personnel</h4>
                                    <p>
                                        We ensure that all auditors, inspectors, and technical experts are qualified, regularly trained, and evaluated to maintain high levels of technical competence and professional excellence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="quality-zigzag-item">
                            <div className="quality-zigzag-content">
                                <div className="quality-number">3</div>
                                <div className="quality-zigzag-text">
                                    <h4>Client Satisfaction</h4>
                                    <p>
                                        Client trust is our key indicator of quality. We systematically collect feedback, analyze results, and implement continuous improvement actions to enhance service quality and client experience.
                                    </p>
                                </div>
                            </div>
                            <div className="quality-zigzag-icon">
                                <FaHeart />
                            </div>
                        </div>

                        <div className="quality-zigzag-item reverse">
                            <div className="quality-zigzag-icon">
                                <FaBalanceScale />
                            </div>
                            <div className="quality-zigzag-content">
                                <div className="quality-number">4</div>
                                <div className="quality-zigzag-text">
                                    <h4>Impartiality and Integrity</h4>
                                    <p>
                                        All certification decisions are made based solely on objective evidence, free from any commercial, financial, or personal influence. Integrity and independence are central to every audit and certification we perform.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Continuous Improvement */}
            <section className="section section-white">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', background: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                            <FaChartLine style={{ fontSize: '2rem', color: '#fff' }} />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', color: '#2c3e50', marginBottom: '1.5rem' }}>Continuous Improvement</h2>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.9' }}>
                            MSC CERTIFICATIONS continuously monitors, reviews, and improves its management system to ensure it remains effective, transparent, and aligned with international best practices. This commitment strengthens trust, consistency, and value for every client and partner we serve.
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