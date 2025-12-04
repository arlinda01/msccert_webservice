import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as FaIcons from 'react-icons/fa';
import type { FAQ } from '../../../types';
import ISOSlider from '../../../components/ISOSlider/ISOSlider';

const HomeSq: FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const isoCards = [
    {
      to: "/sq/sherbimet/iso/iso-9001",
      icon: "FaAward" as const,
      title: "ISO 9001 (Menaxhimi i Cilësisë)",
      description: "Korniza për funksionim të qëndrueshëm, reduktim gabimesh dhe kualifikim për kontrata të mëdha.",
      benefits: ["Njohje Globale", "Efikasitet i Përmirësuar", "Besnikëri më e Fortë e Klientëve"]
    },
    {
      to: "/sq/sherbimet/iso/iso-45001",
      icon: "FaHardHat" as const,
      title: "ISO 45001 (Shëndeti & Siguria në Punë)",
      description: "Standard ndërkombëtar për parandalimin e aksidenteve dhe mbrojtjen e stafit.",
      benefits: ["Reduktim i Aksidenteve", "Përputhshmëri Ligjore", "Kosto më të Ulëta Sigurimi"]
    },
    {
      to: "/sq/sherbimet/iso/iso-14001",
      icon: "FaLeaf" as const,
      title: "ISO 14001 (Menaxhimi Mjedisor)",
      description: "Tregon përgjegjësi sociale, përputhje ligjore dhe ulje të kostove afatgjata.",
      benefits: ["Reduktim i Ndikimit Mjedisor", "Kursim Kostosh", "Përputhshmëri Rregullatore"]
    },
    {
      to: "/sq/sherbimet/iso/iso-27001",
      icon: "FaLock" as const,
      title: "ISO/IEC 27001 (Siguria e Informacionit)",
      description: "Mbrojtje e të dhënave dhe e infrastrukturës IT, duke garantuar përputhshmëri me GDPR.",
      benefits: ["Mbrojtje e të Dhënave", "Përputhshmëri GDPR", "Siguri Kibernetike e Përmirësuar"]
    },
    {
      to: "/sq/sherbimet/iso/iso-22301",
      icon: "FaShieldAlt" as const,
      title: "ISO 22301 (Vazhdimësia e Biznesit)",
      description: "Siguron që organizata juaj të rikuperohet shpejt pas ndërprerjeve.",
      benefits: ["Minimizim i Kohës së Ndërprerjes", "Mbrojtje e të Ardhurave", "Ruajtje e Operacioneve Kritike"]
    },
    {
      to: "/sq/sherbimet/iso/iso-37001",
      icon: "FaCertificate" as const,
      title: "ISO 37001 (Anti-Korrupsion)",
      description: "Sistem për parandalimin dhe zbulimin e korrupsionit — thelbësor për reputacion të pastër.",
      benefits: ["Reduktim i Rrezikut Ligjor", "Reputacion i Pastër", "Kualifikim për Tendera"]
    },
    {
      to: "/sq/sherbimet/iso/haccp",
      icon: "FaUtensils" as const,
      title: "HACCP (Siguria Ushqimore)",
      description: "Garanton gjurmueshmëri dhe cilësi për hyrje në tregje të rregulluara.",
      benefits: ["Përputhshmëri HORECA", "Siguri e Zinxhirit të Furnizimit", "Besim i Konsumatorit"]
    },
    {
      to: "/sq/sherbimet/iso/iso-39001",
      icon: "FaCar" as const,
      title: "ISO 39001 (Siguria Rrugore)",
      description: "Zvogëlon aksidentet dhe kostot operative për kompani me flota automjetesh.",
      benefits: ["Reduktim i Aksidenteve të Flotës", "Prima më të Ulëta Sigurimi", "Përmirësim i Sigurisë së Shoferëve"]
    },
    {
      to: "/sq/sherbimet/iso/iso-50001",
      icon: "FaBolt" as const,
      title: "ISO 50001 (Menaxhimi i Energjisë)",
      description: "Optimizon konsumin e energjisë dhe ul ndjeshëm faturat.",
      benefits: ["Reduktim i Faturave", "Kursime të Matshme", "Performancë Mjedisore"]
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "Sa zgjat procesi i certifikimit ISO?",
      answer: "Kohëzgjatja e procesit varet nga madhësia e kompanisë (njësitë që do të certifikohen, numri i punonjësve), kompleksiteti i proceseve. Në praktikë, grupit të auditimit i duhen minimalisht disa ditë por edhe javë punë."
    },
    {
      question: "Sa kushton certifikimi ISO?",
      answer: "Çmimi i certifikimit varet nga lloji apo sistemet ISO që kërkoni të integroni (një standard i vetëm apo disa standarde të integruara së bashku). Kompleksiteti i tyre bashkuar me kohëzgjatjen e procesit të auditimit përcaktojnë vlerën monetare të tij."
    },
    {
      question: "A ofron MSC CERTIFICATIONS konsulencë për të implementuar ISO?",
      answer: "Jo. MSC CERTIFICATIONS, si trup certifikues, nuk ofron konsulencë për implementimin e sistemit të menaxhimit tek klientët e vet, për të ruajtur paanshmërinë dhe përputhjen me kërkesat e ISO/IEC 17021. Ne mund të shpjegojmë kërkesat e standardit dhe gjetjet e auditit, por jo të ndërtojmë sistemin në vendin tuaj."
    },
    {
      question: "A ofron MSC CERTIFICATIONS audite të integruara për disa standarde njëkohësisht?",
      answer: "Po. Kur është e arsyeshme dhe e mundur, ne kombinojmë auditimin e disa standardeve në një audit të integruar, për të shmangur dublikimet dhe për të ulur ngarkesën operative për klientin."
    },
    {
      question: "A mund të transferoj certifikatën nga një trup tjetër certifikues?",
      answer: "Po, MSC CERTIFICATIONS mund të pranojë transferimin e certifikatave nga trupa të tjerë të akredituar, nëse plotësohen disa kushte (vlefshmëria e certifikatës ekzistuese, statusi i mospërputhjeve, dokumentacioni i auditit etj.). Procesi i transferimit vlerësohet rast pas rasti."
    },
    {
      question: "A mund të kryhet auditi edhe në mënyrë remote (online)?",
      answer: "Po, në disa raste dhe sipas rregullave të akreditimit, një pjesë e auditit mund të kryhet remote, veçanërisht për shqyrtim dokumentacioni. Aktivitetet kritike në terren kërkojnë prezencë fizike."
    }
  ];

  return (
    <div className="home">
      <Helmet>
        <title>Certifikim ISO & Auditime të Përputhshmërisë | MSC CERTIFICATIONS</title>
        <meta name="description" content="Shërbime të akredituara për certifikim ISO, të përshtatura sipas industrisë suaj. Ulni rreziqet, rrisni efikasitetin dhe fitoni besimin e tregut me MSC CERTIFICATIONS. Filloni me një vlerësim falas." />
        <meta name="keywords" content="certifikim ISO, auditim përputhshmërie, certifikim i akredituar, audit ISO Shqipëri, ISO 9001, ISO 45001, ISO 14001, MSC Certifications" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Partneri Juaj për Certifikim ISO, Përputhshmëri dhe Menaxhim Risku</h1>
          <p className="hero-subtitle">
            Siguroni të ardhmen e biznesit tuaj. MSC CERTIFICATIONS ofron shërbime të akredituara dhe me vlerë të shtuar për certifikim ISO, që ju ndihmojnë të minimizoni rreziqet, të rrisni efikasitetin operativ dhe të fitoni besimin e tregut.
          </p>

          {/* Hero Feature Icons */}
          <div className="hero-features">
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                {FaIcons.FaShieldAlt({}) as any}
              </div>
              <span>Akreditim Global</span>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                {FaIcons.FaUsers({}) as any}
              </div>
              <span>Auditorë Ekspertë</span>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                {FaIcons.FaCheckCircle({}) as any}
              </div>
              <span>Certifikim i Shpejtë</span>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                {FaIcons.FaGlobeAmericas({}) as any}
              </div>
              <span>Mbështetje Lokale</span>
            </div>
          </div>

        </div>
      </section>

      {/* MSC Difference Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Dallimi MSC: Pse të Zgjidhni Auditet Tona të Specializuara?</h2>
          <p className="section-intro">
            MSC CERTIFICATIONS garanton ekspertizë të thellë dhe të përshtatur për secilën industri.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon">
                {FaIcons.FaUsers({}) as any}
              </div>
              <h3>Auditues të Specializuar</h3>
              <p>
                Caktojmë auditues sipas sektorit dhe llojit të certifikimit, në mënyrë që gjetjet të jenë reale dhe të zbatueshme për aktivitetin tuaj.
              </p>
            </div>
            <div className="feature-card">
              <div className="card-icon">
                {FaIcons.FaGlobeAmericas({}) as any}
              </div>
              <h3>Ekspertizë Rregullatore</h3>
              <p>
                Vlerësojmë sistemet tuaja në dritën e kërkesave ligjore dhe kërkesave të tregut, veçanërisht në kontekstin e tenderëve dhe prokurimit publik.
              </p>
            </div>
            <div className="feature-card">
              <div className="card-icon">
                {FaIcons.FaChartLine({}) as any}
              </div>
              <h3>Audit që Sjell Vlerë</h3>
              <p>
                Identifikojmë mundësi për optimizim procesesh dhe kursim kostosh, duke e kthyer auditimin në investim biznesi, jo thjesht në detyrim formal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Certification Portfolio */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Portofoli Ynë Kryesor i Certifikimeve: Standarde Globale, Sukses Lokal</h2>
          <p className="section-intro">
            Ne certifikojmë sistemet që ndërtojnë besim dhe qëndrueshmëri, duke siguruar që ju të përmbushni praktikat më të mira ndërkombëtare dhe të mbeteni konkurrues në tregun vendas.
          </p>

          {/* ISO Certifications Slider */}
          <ISOSlider cards={isoCards} />
        </div>
      </section>

      {/* Specialized Business Solutions */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Zgjidhje të Specializuara për Biznesin: Përtej Certifikimit</h2>
          <p className="section-intro">
            Ne ofrojmë shërbime të integruara që rrisin kompetencën dhe kontrollin operacional:
          </p>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="card-icon">
                {FaIcons.FaBolt({}) as any}
              </div>
              <h4>Programet e Efiçencës Energjetike</h4>
              <p>
                Analizë dhe reduktim i konsumit të energjisë në ndërtesa dhe procese industriale, si dhe krijimi i kartave teknologjike të procesit të prodhimit.
              </p>
              <Link to="/sq/sherbimet/shtese/eficenca-energjetike" className="card-btn">Mëso Më Shumë</Link>
            </div>
            <div className="solution-card">
              <div className="card-icon">
                {FaIcons.FaGraduationCap({}) as any}
              </div>
              <h4>Trajnime Profesionale</h4>
              <p>
                Programe të bazuara në role dhe standarde ISO për rritjen e produktivitetit dhe përputhshmërisë me rregullat e sigurisë.
              </p>
              <Link to="/sq/sherbimet/shtese/trajnimi-stafit" className="card-btn">Mëso Më Shumë</Link>
            </div>
            <div className="solution-card">
              <div className="card-icon">
                {FaIcons.FaIdCard({}) as any}
              </div>
              <h4>Kartat Profesionale</h4>
              <p>
                Certifikime personale për sektorë profesional që vërtetojnë menjëherë kompetencën profesionale.
              </p>
              <Link to="/sq/sherbimet/shtese/karta-profesionale" className="card-btn">Mëso Më Shumë</Link>
            </div>
            <div className="solution-card">
              <div className="card-icon">
                {FaIcons.FaMicrochip({}) as any}
              </div>
              <h4>Vlerësim Teknik & Pajisjesh</h4>
              <p>
                Inspektim teknik i makinerive dhe linjave industriale për certifikim, siguri dhe planifikim investimesh.
              </p>
              <Link to="/sq/sherbimet/shtese/vleresim-pajisjesh" className="card-btn">Mëso Më Shumë</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Fokus Sektorial: Auditori i Besuar i Industrisë Suaj</h2>
          <p className="section-intro">
            Suksesi në certifikim kërkon njohuri specifike sektoriale. Ne jemi zgjedhja e besuar për liderët në sektorët me risk të lartë dhe rregullime të rrepta:
          </p>
          <div className="industries-list">
            <div className="industry-item">
              <div className="card-icon">
                {FaIcons.FaBuilding({}) as any}
              </div>
              <h4>Ndërtim & Infrastrukturë</h4>
              <p>Menaxhim risku, siguri produktesh dhe kontroll cilësie për projekte kapitale.</p>
            </div>
            <div className="industry-item">
              <div className="card-icon">
                {FaIcons.FaUtensils({}) as any}
              </div>
              <h4>Ushqim & HORECA</h4>
              <p>Siguri zinxhiri furnizimi nga prodhimi deri te konsumatori.</p>
            </div>
            <div className="industry-item">
              <div className="card-icon">
                {FaIcons.FaMicrochip({}) as any}
              </div>
              <h4>IT & Telekomunikacion</h4>
              <p>Mbrojtje të dhënash dhe vazhdimësi shërbimi në ekonominë digjitale.</p>
            </div>
            <div className="industry-item">
              <div className="card-icon">
                {FaIcons.FaIndustry({}) as any}
              </div>
              <h4>Prodhim & Energjitikë</h4>
              <p>Optimizim procesesh, ulje kostosh dhe përputhshmëri me rregulloret mjedisore.</p>
            </div>
            <div className="industry-item">
              <div className="card-icon">
                {FaIcons.FaAward({}) as any}
              </div>
              <h4>Sektor Publik & Tendera</h4>
              <p>Demonstrim i cilësisë, integritetit dhe sigurisë (ISO 9001, ISO 37001).</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Interactive Accordion */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Pyetje të Shpeshta (FAQ)</h2>
          <p className="section-intro">Përgjigje për pyetjet tuaja më të zakonshme:</p>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFAQ === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <svg
                    className="faq-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section section-cta-final">
        <div className="container">
          <h2>Filloni Udhëtimin Tuaj Drejt Cilësisë dhe Besimit</h2>
          <p>
            Bashkohuni me dhjetëra kompani në rajon që i besojnë MSC CERTIFICATIONS për të transformuar mënyrën si funksionojnë. Ofrojmë një vlerësim falas dhe pa detyrim, për të identifikuar sistemet ISO që sjellin vlerën më të lartë dhe reduktojnë më shumë riskun për biznesin tuaj.
          </p>
          <div className="cta-buttons">
            <Link to="/sq/kontakt" className="btn btn-primary-large">Kërkoni Ofertë të Detajuar & Vlerësim Falas</Link>
          </div>
          <p className="cta-footer">
            Të gjitha certifikatat tona janë të akredituara ndërkombëtarisht, duke garantuar njohje globale.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeSq;