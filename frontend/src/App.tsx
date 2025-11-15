import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ISO9001 from './pages/ISO9001/ISO9001';
import ISOCertifications from './pages/ISOCertifications/ISOCertifications';
import CEMarking from './pages/CEMarking/CEMarking';
import EnergyEfficiency from './pages/EnergyEfficiency/EnergyEfficiency';
import AdditionalServices from './pages/AdditionalServices/AdditionalServices';
import Contact from './pages/Contact/Contact';
import CertificateList from './pages/CertificateList/CertificateList';
import StaticCertificate from './pages/StaticCertificate/StaticCertificate';
import QRCodePage from './pages/QRCodePage/QRCodePage';

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us/" element={<About />} />
            <Route path="/about-us/mission-vision/" element={<About />} />
            <Route path="/about-us/quality-policy/" element={<About />} />
            <Route path="/about-us/code-of-ethics/" element={<About />} />
            <Route path="/about-us/accreditation/" element={<About />} />
            <Route path="/about-us/partnerships/" element={<About />} />
            <Route path="/services/iso" element={<ISOCertifications />} />
            <Route path="/services/iso/iso-9001/quality-management" element={<ISO9001 />} />
            <Route path="/services/compliance/ce-marking" element={<CEMarking />} />
            <Route path="/services/additional" element={<AdditionalServices />} />
            <Route path="/services/additional/energy-efficiency" element={<EnergyEfficiency />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificates" element={<CertificateList />} />
            <Route path="/qr-code" element={<QRCodePage />} />
            <Route path="/certificate/2" element={<StaticCertificate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
