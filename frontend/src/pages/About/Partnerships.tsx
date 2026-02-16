import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import {
    FaIndustry,
    FaGraduationCap,
    FaLandmark,
    FaMicroscope,
    FaCheckCircle
} from 'react-icons/fa';
import { breadcrumbSchema } from '../../utils/schemas';

const Partnerships: FC = () => {
    const { t } = useTranslation();
    return (
        <div className="about">
            <Helmet>
                <title>Partnerships - MSC Certifications</title>
                <meta name="description" content="Discover MSC Certifications' strategic partnerships. We collaborate with industry associations, training providers, and regulatory bodies for global compliance." />
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{name: 'Home', path: '/'}, {name: 'About Us', path: '/about-us'}, {name: 'Partnerships', path: '/about-us/partnerships'}]))}</script>
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>Partnerships</h1>
                    <p className="about-subtitle">
                        Working Together for Global Compliance and Growth
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section section-white">
                <div className="container">
                    <p className="about-text centered">
                        At MSC Certifications, we believe collaboration is the foundation of progress.
                    </p>
                    <p className="about-text centered">
                        We build strategic partnerships with organizations that share our values of quality, safety,
                        sustainability, and integrity.
                    </p>
                    <p className="about-text centered">
                        These collaborations strengthen our ability to deliver specialized, accredited, and value-driven
                        certification, compliance, and training services across multiple sectors.
                    </p>
                </div>
            </section>

            {/* Partnership Network */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Our Partnership Network</h2>

                    <div className="partnerships-grid">
                        <div className="partnership-card">
                            <div className="partnership-icon">
                                <FaIndustry />
                            </div>
                            <h3>Industry Associations</h3>
                            <p>
                                We cooperate with industry associations that promote best practices, technical
                                innovation, and continuous improvement.
                            </p>
                        </div>

                        <div className="partnership-card">
                            <div className="partnership-icon">
                                <FaGraduationCap />
                            </div>
                            <h3>Training Providers</h3>
                            <p>
                                Delivering professional education and capacity-building aligned with ISO frameworks.
                            </p>
                        </div>

                        <div className="partnership-card">
                            <div className="partnership-icon">
                                <FaLandmark />
                            </div>
                            <h3>Regulatory and Accreditation Bodies</h3>
                            <p>
                                Ensuring compliance, transparency, and global recognition.
                            </p>
                        </div>

                        <div className="partnership-card">
                            <div className="partnership-icon">
                                <FaMicroscope />
                            </div>
                            <h3>Technical Experts and Laboratories</h3>
                            <p>
                                Supporting product testing, validation, and conformity assessments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partnerships Matter */}
            <section className="section section-white">
                <div className="container">
                    <h2 className="section-title">Why Partnerships Matter</h2>

                    <div className="partnership-benefits">
                        <div className="benefit-item">
                            <FaCheckCircle className="benefit-icon" />
                            <p>Expand our technical expertise and global reach.</p>
                        </div>
                        <div className="benefit-item">
                            <FaCheckCircle className="benefit-icon" />
                            <p>Maintain transparency, consistency, and trust across all certification activities.</p>
                        </div>
                        <div className="benefit-item">
                            <FaCheckCircle className="benefit-icon" />
                            <p>Deliver integrated and multidisciplinary solutions that add measurable value.</p>
                        </div>
                    </div>

                    <div className="partnership-footer" style={{ marginTop: '3rem' }}>
                        <p>
                            Every partnership is founded on mutual respect, professionalism, and ethical cooperation,
                            ensuring that together, we raise the global standard of certification excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-cta-final">
                <div className="container">
                    <h2>Become a Partner</h2>
                    <p>
                        Join our network of trusted partners committed to excellence and global standards.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary-large">{t('common.contactUs')}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partnerships;