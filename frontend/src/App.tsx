import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

const App: FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
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
            {/* Legacy URL redirect - keep old URL working */}
            <Route path="/services/compliance/ce-marking" element={<CEMarking />} />
            <Route path="/services" element={<AdditionalServices />} />
            {/* Legacy URL redirect - keep old /services/additional URL working */}
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;