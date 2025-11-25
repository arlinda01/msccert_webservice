import {FC, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {
    FaBullseye,
    FaClipboardCheck,
    FaBalanceScale,
    FaCertificate,
    FaHandshake,
    FaRocket,
    FaEye,
    FaCheckCircle,
    FaUsers,
    FaShieldAlt,
    FaUserTie,
    FaGavel,
    FaHandsHelping,
    FaChartLine,
    FaUserGraduate,
    FaLock,
    FaSearch,
    FaGlobeAmericas,
    FaIndustry,
    FaGraduationCap,
    FaLandmark,
    FaMicroscope,
    FaDollarSign,
    FaTachometerAlt
} from 'react-icons/fa';
import type {IconType} from 'react-icons';

const About: FC = () => {
    const location = useLocation();

    useEffect(() => {
        // Map URL paths to section IDs
        const pathToSection: { [key: string]: string } = {
            '/about-us/mission-vision': 'mission-vision',
            '/about-us/mission-vision/': 'mission-vision',
            '/about-us/quality-policy': 'quality-policy',
            '/about-us/quality-policy/': 'quality-policy',
            '/about-us/code-of-ethics': 'code-of-ethics',
            '/about-us/code-of-ethics/': 'code-of-ethics',
            '/about-us/accreditation': 'accreditation',
            '/about-us/accreditation/': 'accreditation',
            '/about-us/partnerships': 'partnerships',
            '/about-us/partnerships/': 'partnerships',
        };

        const sectionId = pathToSection[location.pathname];

        if (sectionId) {
            // Small delay to ensure the DOM is ready
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({behavior: 'smooth', block: 'start'});
                }
            }, 100);
        } else {
            // If on /about-us or /about-us/, scroll to top
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }, [location]);

    // @ts-ignore
    // @ts-ignore
    return (
        <div className="about">
            {/* Hero Section with Navigation */}
            <section className="about-hero">
                <div className="container">
                    <h1>About MSC Certifications</h1>
                    <p className="about-subtitle">
                        Your Trusted Partner in International Standards and Compliance
                    </p>
                    <div className="about-intro-large">
                        <p>
                            In a world where quality, safety, and compliance define business success, MSC Certifications
                            stands as your
                            reliable partner in achieving internationally recognized standards.
                        </p>
                        <p>
                            Operating since 2024, MSC Certifications is an accredited certification and assessment body
                            recognized by the
                            General Directorate of Accreditation (DPA), the national accreditation authority of Albania.
                        </p>
                    </div>
                    <div className="about-intro-small">
                        <p>
                            The DPA is a full member of the International Accreditation Forum (IAF) and European
                            Accreditation (EA),
                            ensuring that all certificates issued by MSC Certifications are globally recognized and
                            accepted across
                            industries and regions.
                        </p>
                        <p>
                            We provide a complete portfolio of services in ISO certification, CE marking, and technical
                            evaluation,
                            delivered with professionalism, transparency, and deep local insight.
                        </p>
                    </div>

                    {/* Section Navigation */}
                    <div className="about-nav">
                        <Link to="/about-us/mission-vision/" className="about-nav-link">
                            <FaBullseye/> Mission & Vision
                        </Link>
                        <Link to="/about-us/quality-policy/" className="about-nav-link">
                            <FaClipboardCheck/> Quality Policy
                        </Link>
                        <Link to="/about-us/code-of-ethics/" className="about-nav-link">
                            <FaBalanceScale/> Code of Ethics
                        </Link>
                        <Link to="/about-us/accreditation/" className="about-nav-link">
                            <FaCertificate/> Accreditation
                        </Link>
                        <Link to="/about-us/partnerships/" className="about-nav-link">
                            <FaHandshake/> Partnerships
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="section section-white">
                <div className="container">
                    <div className="who-we-are-grid">
                        <div className="who-we-are-content">
                            <h2 className="section-title" style={{textAlign: 'left'}}>Who We Are</h2>
                            <p className="about-text" style={{textAlign: 'left', margin: '0 0 1.5rem 0'}}>
                                MSC Certifications is an accredited organization specializing in inspection, auditing, and
                                certification
                                services in accordance with international standards.
                            </p>
                            <p className="about-text" style={{textAlign: 'left', margin: '0 0 1.5rem 0'}}>
                                Our mission is to help organizations meet global compliance requirements, improve operational
                                efficiency,
                                and strengthen their competitive position.
                            </p>
                            <p className="about-text" style={{textAlign: 'left', margin: '0'}}>
                                With a team of qualified auditors and technical experts, we combine international expertise with
                                local
                                understanding, ensuring reliable, objective, and practical certification outcomes.
                            </p>
                        </div>
                        <div className="who-we-are-image">
                            <img src="/logo.svg" alt="MSC Certifications Logo" className="who-we-are-logo" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission-vision" className="section section-gray">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Mission & Vision</h2>
                    </div>

                    <div className="mission-vision-grid">
                        <div className="mission-card">
                            <h3>Our Mission</h3>
                            <p>
                                At MSC Certifications, our mission is to empower organizations to achieve international
                                excellence
                                through accredited certification, inspection, and training services.
                            </p>
                            <p>
                                We are committed to providing objective, transparent, and technically competent
                                assessments that
                                strengthen client confidence, improve performance, and promote sustainable development.
                            </p>
                            <p className="highlight-text">
                                We believe certification is more than a document. It's a tool for continuous improvement
                                and
                                global recognition.
                            </p>
                        </div>

                        <div className="vision-card">
                            <h3>Our Vision</h3>
                            <p>
                                To be recognized as a leading certification and compliance body in the region, known for
                                credibility,
                                professionalism, and client trust.
                            </p>
                            <p>
                                We aim to set the benchmark for integrity, expertise, and value-added certification,
                                helping businesses
                                of all sizes compete confidently in international markets.
                            </p>
                        </div>
                    </div>

                    <h3 className="subsection-title-small">Our Core Values</h3>
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

            {/* Quality Policy */}
            <section id="quality-policy" className="section section-white">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Quality Policy</h2>
                    </div>

                    <p className="about-text centered">
                        At MSC Certifications, quality is not just a standard we assess. It is the foundation of
                        everything we do.
                    </p>

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

                    <div className="policy-footer">
                        <p>
                            This commitment to quality ensures that every certificate we issue represents a credible,
                            meaningful,
                            and internationally recognized achievement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Code of Ethics */}
            <section id="code-of-ethics" className="section section-gray">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Code of Ethics</h2>
                    </div>

                    <p className="about-text centered">
                        Ethics and integrity are at the core of how MSC Certifications operates.
                    </p>
                    <p className="about-text centered">
                        Our Code of Ethics defines the standards of behavior expected from all employees, auditors, and
                        representatives, ensuring fairness, confidentiality, and respect in every engagement.
                    </p>

                    <h3 className="subsection-title-small">Our Ethical Commitments</h3>

                    <div className="ethics-grid">
                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaBalanceScale/>
                            </div>
                            <h4>Impartiality</h4>
                            <p>
                                Certification decisions are made independently of any commercial or personal interest.
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaLock/>
                            </div>
                            <h4>Confidentiality</h4>
                            <p>
                                All client information is handled securely and used only for legitimate purposes.
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaSearch/>
                            </div>
                            <h4>Objectivity</h4>
                            <p>
                                Audits and evaluations are evidence-based and transparent.
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaHandshake/>
                            </div>
                            <h4>Respect and Professional Conduct</h4>
                            <p>
                                We treat clients, colleagues, and partners with fairness and courtesy.
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaGavel/>
                            </div>
                            <h4>Compliance with Law</h4>
                            <p>
                                We operate in accordance with national and international regulations, accreditation
                                requirements,
                                and data protection laws.
                            </p>
                        </div>
                    </div>

                    <div className="ethics-footer">
                        <p>
                            By following these principles, MSC Certifications ensures trust, credibility, and
                            professional
                            integrity in every project.
                        </p>
                    </div>
                </div>
            </section>

            {/* Accreditation */}
            <section id="accreditation" className="section section-white">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Accreditation: Your Guarantee of Credibility</h2>
                    </div>

                    <div className="accreditation-intro">
                        <p className="about-text centered">
                            MSC Certifications operates under formal accreditation by the <strong>General Directorate of
                            Accreditation (DPA)</strong>, the official national accreditation body of Albania.
                        </p>
                        <p className="about-text centered">
                            The DPA is a full member of the <strong>International Accreditation Forum (IAF)</strong> and
                            the
                            <strong> European Cooperation for Accreditation (EA)</strong>. This ensures that all
                            certificates
                            issued by MSC Certifications are globally recognized and accepted under international mutual
                            recognition agreements (MLA/MRA).
                        </p>
                        <p className="about-text centered">
                            Accreditation confirms our technical competence, impartiality, and compliance with the
                            requirements
                            of <strong>ISO/IEC 17021</strong> (Management System Certification) and other relevant
                            international
                            standards. It is your assurance that our audits, assessments, and certifications are
                            performed to
                            the highest professional and ethical standards.
                        </p>
                    </div>

                    <h3 className="subsection-title-small">Why Accreditation Matters</h3>

                    <div className="accreditation-grid">
                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaGlobeAmericas/>
                            </div>
                            <h4>Global Recognition</h4>
                            <p>
                                Certificates issued under accredited status are accepted worldwide, ensuring
                                international market
                                access and regulatory acceptance.
                            </p>
                        </div>

                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaHandsHelping/>
                            </div>
                            <h4>Confidence and Trust</h4>
                            <p>
                                Accreditation builds confidence among clients, authorities, and stakeholders in the
                                credibility
                                and objectivity of our certification processes.
                            </p>
                        </div>

                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaBalanceScale/>
                            </div>
                            <h4>Impartiality Assurance</h4>
                            <p>
                                Independent surveillance by accreditation bodies guarantees our neutrality, fairness,
                                and consistency
                                in decision-making.
                            </p>
                        </div>

                        <div className="accreditation-card">
                            <div className="accreditation-icon">
                                <FaChartLine/>
                            </div>
                            <h4>Continuous Improvement</h4>
                            <p>
                                Regular external assessments ensure that our systems remain effective, transparent, and
                                aligned with
                                the latest ISO and IAF standards.
                            </p>
                        </div>
                    </div>

                    <div className="accreditation-footer">
                        <p>
                            At MSC Certifications, we take pride in maintaining our accredited status, your formal
                            assurance of
                            quality, professionalism, and global credibility.
                        </p>
                    </div>
                </div>
            </section>

            {/* Partnerships */}
            <section id="partnerships" className="section section-gray">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Partnerships</h2>
                        <p className="section-subtitle">Working Together for Global Compliance and Growth</p>
                    </div>

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

                    <h3 className="subsection-title-small">Our Partnership Network</h3>

                    <div className="partnerships-grid">
                        <div className="partnership-card">
                            <div className="partnership-icon">
                                <FaIndustry/>
                            </div>
                            <h4>Industry Associations</h4>
                            <p>
                                We cooperate with industry associations that promote best practices, technical
                                innovation, and
                                continuous improvement.
                            </p>
                        </div>

                        <div className="partnership-card">
                            <div className="partnership-icon">
                                <FaGraduationCap/>
                            </div>
                            <h4>Training Providers</h4>
                            <p>
                                Delivering professional education and capacity-building aligned with ISO frameworks.
                            </p>
                        </div>

                        <div className="partnership-card">
                            <div className="partnership-icon">
                                <FaLandmark/>
                            </div>
                            <h4>Regulatory and Accreditation Bodies</h4>
                            <p>
                                Ensuring compliance, transparency, and global recognition.
                            </p>
                        </div>

                        <div className="partnership-card">
                            <div className="partnership-icon">
                                <FaMicroscope/>
                            </div>
                            <h4>Technical Experts and Laboratories</h4>
                            <p>
                                Supporting product testing, validation, and conformity assessments.
                            </p>
                        </div>
                    </div>

                    <h3 className="subsection-title-small">Why Partnerships Matter</h3>

                    <div className="partnership-benefits">
                        <div className="benefit-item">
                            <FaCheckCircle className="benefit-icon"/>
                            <p>Expand our technical expertise and global reach.</p>
                        </div>
                        <div className="benefit-item">
                            <FaCheckCircle className="benefit-icon"/>
                            <p>Maintain transparency, consistency, and trust across all certification activities.</p>
                        </div>
                        <div className="benefit-item">
                            <FaCheckCircle className="benefit-icon"/>
                            <p>Deliver integrated and multidisciplinary solutions that add measurable value.</p>
                        </div>
                    </div>

                    <div className="partnership-footer">
                        <p>
                            Every partnership is founded on mutual respect, professionalism, and ethical cooperation,
                            ensuring
                            that together, we raise the global standard of certification excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Why Choose MSC Certifications</h2>
                    <div className="why-choose-grid">
                        <div className="why-choose-card">
                            <FaUserTie className="why-icon"/>
                            <h3>Sector-Specific Audit Expertise</h3>
                            <p>Auditors experienced in the exact sectors and standards they evaluate.</p>
                        </div>
                        <div className="why-choose-card">
                            <FaDollarSign className="why-icon"/>
                            <h3>Competitive and Transparent Pricing</h3>
                            <p>Fair, clear, and cost-effective certification solutions.</p>
                        </div>
                        <div className="why-choose-card">
                            <FaTachometerAlt className="why-icon"/>
                            <h3>Efficient and Accredited Audit Processes</h3>
                            <p>Streamlined timelines following international accreditation standards.</p>
                        </div>
                        <div className="why-choose-card">
                            <FaGlobeAmericas className="why-icon"/>
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
                        and
                        integrity, turning complex standards into clear, measurable results trusted worldwide.
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