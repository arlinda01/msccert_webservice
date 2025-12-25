import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/styles.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import MissionVision from './pages/About/MissionVision';
import QualityPolicy from './pages/About/QualityPolicy';
import CodeOfEthics from './pages/About/CodeOfEthics';
import Accreditation from './pages/About/Accreditation';
import Partnerships from './pages/About/Partnerships';
import ISO9001 from './pages/ISO9001/ISO9001';
import ISO14001 from './pages/ISO14001/ISO14001';
import ISO22301 from './pages/ISO22301/ISO22301';
import ISO27001 from './pages/ISO27001/ISO27001';
import ISO37001 from './pages/ISO37001/ISO37001';
import ISO39001 from './pages/ISO39001/ISO39001';
import ISO45001 from './pages/ISO45001/ISO45001';
import ISO50001 from './pages/ISO50001/ISO50001';
import HACCP from './pages/HACCP/HACCP';
import ISOCertifications from './pages/ISOCertifications/ISOCertifications';
import CEMarking from './pages/CEMarking/CEMarking';
import EnergyEfficiency from './pages/EnergyEfficiency/EnergyEfficiency';
import AdditionalServices from './pages/AdditionalServices/AdditionalServices';
import StaffTraining from './pages/StaffTraining/StaffTraining';
import ProfessionalCard from './pages/ProfessionalCard/ProfessionalCard';
import TechnologicalCard from './pages/TechnologicalCard/TechnologicalCard';
import EquipmentEvaluation from './pages/EquipmentEvaluation/EquipmentEvaluation';
import Contact from './pages/Contact/Contact';
import CertificateList from './pages/CertificateList/CertificateList';
import StaticCertificate from './pages/StaticCertificate/StaticCertificate';
import QRCodePage from './pages/QRCodePage/QRCodePage';
import CertificateVerify from './pages/CertificateVerify/CertificateVerify';
import FAQ from './pages/FAQ/FAQ';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import QuoteForm from './pages/QuoteForm/QuoteForm';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';
import { detectLanguageFromPath } from './config/routes';

// Component to sync language from URL
const LanguageSync: FC = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const urlLang = detectLanguageFromPath(location.pathname);
    if (i18n.language !== urlLang) {
      i18n.changeLanguage(urlLang);
    }
  }, [location.pathname, i18n]);

  return null;
};

const App: FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <LanguageSync />
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            {/* English Routes (default) */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us/" element={<About />} />
            <Route path="/about-us/mission-vision/" element={<MissionVision />} />
            <Route path="/about-us/quality-policy/" element={<QualityPolicy />} />
            <Route path="/about-us/code-of-ethics/" element={<CodeOfEthics />} />
            <Route path="/about-us/accreditation/" element={<Accreditation />} />
            <Route path="/about-us/partnerships/" element={<Partnerships />} />
            <Route path="/services/iso" element={<ISOCertifications />} />
            <Route path="/services/iso/iso-9001" element={<ISO9001 />} />
            <Route path="/services/iso/iso-14001" element={<ISO14001 />} />
            <Route path="/services/iso/iso-22301" element={<ISO22301 />} />
            <Route path="/services/iso/iso-27001" element={<ISO27001 />} />
            <Route path="/services/iso/iso-37001" element={<ISO37001 />} />
            <Route path="/services/iso/iso-39001" element={<ISO39001 />} />
            <Route path="/services/iso/iso-45001" element={<ISO45001 />} />
            <Route path="/services/iso/iso-50001" element={<ISO50001 />} />
            <Route path="/services/iso/haccp" element={<HACCP />} />
            <Route path="/services/ce-marking" element={<CEMarking />} />
            <Route path="/services/compliance/ce-marking" element={<CEMarking />} />
            <Route path="/services" element={<AdditionalServices />} />
            <Route path="/services/additional" element={<Navigate to="/services" replace />} />
            <Route path="/services/additional/energy-efficiency" element={<EnergyEfficiency />} />
            <Route path="/services/additional/staff-training" element={<StaffTraining />} />
            <Route path="/services/additional/professional-card" element={<ProfessionalCard />} />
            <Route path="/services/additional/technological-card" element={<TechnologicalCard />} />
            <Route path="/services/additional/equipment-evaluation" element={<EquipmentEvaluation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/certificates" element={<CertificateList />} />
            <Route path="/qr-code" element={<QRCodePage />} />
            <Route path="/certificate/2" element={<StaticCertificate />} />
            <Route path="/certificate/:secureId" element={<CertificateVerify />} />
            <Route path="/quote/:isoCode" element={<QuoteForm />} />
            <Route path="/get-quote" element={<QuoteForm />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Albanian Routes */}
            <Route path="/sq/" element={<Home />} />
            <Route path="/sq/rreth-nesh/" element={<About />} />
            <Route path="/sq/rreth-nesh/misioni-dhe-vizioni/" element={<MissionVision />} />
            <Route path="/sq/rreth-nesh/politika-e-cilesise/" element={<QualityPolicy />} />
            <Route path="/sq/rreth-nesh/kodi-i-etikes/" element={<CodeOfEthics />} />
            <Route path="/sq/rreth-nesh/akreditimi/" element={<Accreditation />} />
            <Route path="/sq/rreth-nesh/partneritetet/" element={<Partnerships />} />
            <Route path="/sq/sherbimet/iso" element={<ISOCertifications />} />
            <Route path="/sq/sherbimet/iso/iso-9001" element={<ISO9001 />} />
            <Route path="/sq/sherbimet/iso/iso-14001" element={<ISO14001 />} />
            <Route path="/sq/sherbimet/iso/iso-22301" element={<ISO22301 />} />
            <Route path="/sq/sherbimet/iso/iso-27001" element={<ISO27001 />} />
            <Route path="/sq/sherbimet/iso/iso-37001" element={<ISO37001 />} />
            <Route path="/sq/sherbimet/iso/iso-39001" element={<ISO39001 />} />
            <Route path="/sq/sherbimet/iso/iso-45001" element={<ISO45001 />} />
            <Route path="/sq/sherbimet/iso/iso-50001" element={<ISO50001 />} />
            <Route path="/sq/sherbimet/iso/haccp" element={<HACCP />} />
            <Route path="/sq/sherbimet/markimi-ce" element={<CEMarking />} />
            <Route path="/sq/sherbimet" element={<AdditionalServices />} />
            <Route path="/sq/sherbimet/eficenca-energjetike" element={<EnergyEfficiency />} />
            <Route path="/sq/sherbimet/trajnimi-i-stafit" element={<StaffTraining />} />
            <Route path="/sq/sherbimet/karta-profesionale" element={<ProfessionalCard />} />
            <Route path="/sq/sherbimet/karta-teknologjike" element={<TechnologicalCard />} />
            <Route path="/sq/sherbimet/vleresimi-i-pajisjeve" element={<EquipmentEvaluation />} />
            <Route path="/sq/kontakt" element={<Contact />} />
            <Route path="/sq/pyetje-te-shpeshta" element={<FAQ />} />
            <Route path="/sq/kushtet-dhe-afatet" element={<TermsConditions />} />
            <Route path="/sq/certifikatat" element={<CertificateList />} />
            <Route path="/sq/certifikata/:secureId" element={<CertificateVerify />} />
            <Route path="/sq/kerkese-oferte/:isoCode" element={<QuoteForm />} />
            <Route path="/sq/merr-oferte" element={<QuoteForm />} />
            <Route path="/sq/blog" element={<Blog />} />
            <Route path="/sq/blog/:slug" element={<BlogPost />} />

            {/* Italian Routes */}
            <Route path="/it/" element={<Home />} />
            <Route path="/it/chi-siamo/" element={<About />} />
            <Route path="/it/chi-siamo/missione-e-visione/" element={<MissionVision />} />
            <Route path="/it/chi-siamo/politica-della-qualita/" element={<QualityPolicy />} />
            <Route path="/it/chi-siamo/codice-etico/" element={<CodeOfEthics />} />
            <Route path="/it/chi-siamo/accreditamento/" element={<Accreditation />} />
            <Route path="/it/chi-siamo/partnership/" element={<Partnerships />} />
            <Route path="/it/servizi/iso" element={<ISOCertifications />} />
            <Route path="/it/servizi/iso/iso-9001" element={<ISO9001 />} />
            <Route path="/it/servizi/iso/iso-14001" element={<ISO14001 />} />
            <Route path="/it/servizi/iso/iso-22301" element={<ISO22301 />} />
            <Route path="/it/servizi/iso/iso-27001" element={<ISO27001 />} />
            <Route path="/it/servizi/iso/iso-37001" element={<ISO37001 />} />
            <Route path="/it/servizi/iso/iso-39001" element={<ISO39001 />} />
            <Route path="/it/servizi/iso/iso-45001" element={<ISO45001 />} />
            <Route path="/it/servizi/iso/iso-50001" element={<ISO50001 />} />
            <Route path="/it/servizi/iso/haccp" element={<HACCP />} />
            <Route path="/it/servizi/marcatura-ce" element={<CEMarking />} />
            <Route path="/it/servizi" element={<AdditionalServices />} />
            <Route path="/it/servizi/efficienza-energetica" element={<EnergyEfficiency />} />
            <Route path="/it/servizi/formazione-del-personale" element={<StaffTraining />} />
            <Route path="/it/servizi/tessera-professionale" element={<ProfessionalCard />} />
            <Route path="/it/servizi/tessera-tecnologica" element={<TechnologicalCard />} />
            <Route path="/it/servizi/valutazione-attrezzature" element={<EquipmentEvaluation />} />
            <Route path="/it/contatti" element={<Contact />} />
            <Route path="/it/domande-frequenti" element={<FAQ />} />
            <Route path="/it/termini-e-condizioni" element={<TermsConditions />} />
            <Route path="/it/certificati" element={<CertificateList />} />
            <Route path="/it/certificato/:secureId" element={<CertificateVerify />} />
            <Route path="/it/richiesta-preventivo/:isoCode" element={<QuoteForm />} />
            <Route path="/it/richiedi-preventivo" element={<QuoteForm />} />
            <Route path="/it/blog" element={<Blog />} />
            <Route path="/it/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
