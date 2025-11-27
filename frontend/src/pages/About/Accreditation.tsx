import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    FaGlobeAmericas,
    FaHandsHelping,
    FaBalanceScale,
    FaChartLine
} from 'react-icons/fa';

const Accreditation: FC = () => {
    return (
        <div className="about">
            <Helmet>
                <title>Our Accreditation - MSC Certifications</title>
                <meta name="description" content="MSC Certifications operates under formal accreditation by the General Directorate of Accreditation (DPA), ensuring globally recognized certificates." />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>Our Accreditation</h1>
                    <p className="about-subtitle">
                        Your Guarantee of Credibility and Global Recognition
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section section-white">
                <div className="container">
                    <div className="accreditation-intro">
                        <p className="about-text centered">
                            MSC Certifications operates under formal accreditation by the <strong>General Directorate of
                            Accreditation (DPA)</strong>, the official national accreditation body of Albania.
                        </p>
                        <p className="about-text centered">
                            The DPA is a full member of the <strong>International Accreditation Forum (IAF)</strong> and
                            the <strong>European Cooperation for Accreditation (EA)</strong>. This ensures that all
                            certificates issued by MSC Certifications are globally recognized and accepted under
                            international mutual recognition agreements (MLA/MRA).
                        </p>
                        <p className="about-text centered">
                            Accreditation confirms our technical competence, impartiality, and compliance with the
                            requirements of <strong>ISO/IEC 17021</strong> (Management System Certification) and other
                            relevant international standards. It is your assurance that our audits, assessments, and
                            certifications are performed to the highest professional and ethical standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Accreditation Matters */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Why Accreditation Matters</h2>

                    <div className="accreditation-grid">
                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaGlobeAmericas />
                            </div>
                            <h4>Global Recognition</h4>
                            <p>
                                Certificates issued under accredited status are accepted worldwide, ensuring
                                international market access and regulatory acceptance.
                            </p>
                        </div>

                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaHandsHelping />
                            </div>
                            <h4>Confidence and Trust</h4>
                            <p>
                                Accreditation builds confidence among clients, authorities, and stakeholders in the
                                credibility and objectivity of our certification processes.
                            </p>
                        </div>

                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaBalanceScale />
                            </div>
                            <h4>Impartiality Assurance</h4>
                            <p>
                                Independent surveillance by accreditation bodies guarantees our neutrality, fairness,
                                and consistency in decision-making.
                            </p>
                        </div>

                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaChartLine />
                            </div>
                            <h4>Continuous Improvement</h4>
                            <p>
                                Regular external assessments ensure that our systems remain effective, transparent, and
                                aligned with the latest ISO and IAF standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Message */}
            <section className="section section-white">
                <div className="container">
                    <div className="accreditation-footer">
                        <p>
                            At MSC Certifications, we take pride in maintaining our accredited status, your formal
                            assurance of quality, professionalism, and global credibility.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-cta-final">
                <div className="container">
                    <h2>Get Globally Recognized Certification</h2>
                    <p>
                        Partner with an accredited certification body trusted worldwide.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary-large">Contact Us Today</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Accreditation;