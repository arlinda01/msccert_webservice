import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './TermsConditions.css';

const TermsConditions: FC = () => {
  return (
    <div className="terms-page">
      <Helmet>
        <title>Terms and Conditions | MSC Certifications</title>
        <meta name="description" content="Read the terms and conditions governing the use of MSC Certifications website and services, based in Tirana, Albania." />
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p className="about-subtitle">
            Last updated: November 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section section-white">
        <div className="container">
          <div className="terms-content">
            <div className="terms-section">
              <h2>1. Introduction</h2>
              <p>
                This website is operated by MSC CERTIFICATIONS ("we", "our", "us"). By accessing and using this website, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using our website or services.
              </p>
            </div>

            <div className="terms-section">
              <h2>2. Services</h2>
              <p>
                MSC CERTIFICATIONS provides ISO certification, compliance auditing, and related consulting services. All descriptions, materials, or offers published on this website are for informational purposes only and do not constitute a binding contract or offer.
              </p>
              <p>
                We reserve the right to modify, update, or remove content at any time without prior notice.
              </p>
            </div>

            <div className="terms-section">
              <h2>3. Intellectual Property Rights</h2>
              <p>
                All content available on this website, including but not limited to text, images, graphics, videos, and logos, is the property of MSC CERTIFICATIONS or its licensors. Any reproduction, distribution, or modification of content without our prior written permission is strictly prohibited.
              </p>
              <p>
                You may download or print extracts for personal, non-commercial use only, provided that all copyright notices remain intact.
              </p>
            </div>

            <div className="terms-section">
              <h2>4. Use of Website</h2>
              <p>By using this website, you agree to:</p>
              <ul>
                <li>Access it only for lawful purposes;</li>
                <li>Avoid any behavior that may harm or interfere with the website's normal operation;</li>
                <li>Not attempt to gain unauthorized access to our systems or data.</li>
              </ul>
              <p>
                Any misuse of the site or violation of these terms may result in restricted access or legal action.
              </p>
            </div>

            <div className="terms-section">
              <h2>5. Limitation of Liability</h2>
              <p>MSC CERTIFICATIONS shall not be held liable for any direct, indirect, incidental, or consequential damages arising from:</p>
              <ul>
                <li>The use or inability to use this website;</li>
                <li>Any technical errors, omissions, or interruptions;</li>
                <li>Any actions taken based on the information provided herein.</li>
              </ul>
              <p>
                While we strive for accuracy, we do not guarantee that all content is complete or up to date.
              </p>
            </div>

            <div className="terms-section">
              <h2>6. External Links</h2>
              <p>
                Our website may include links to third-party websites for your convenience. We do not control or endorse the content, policies, or practices of these websites and accept no responsibility for any loss or damage arising from their use.
              </p>
            </div>

            <div className="terms-section">
              <h2>7. Privacy and Data Protection</h2>
              <p>
                Your use of this website is also governed by our <Link to="/privacy-policy">Privacy Policy</Link>. By submitting forms or contacting us through this site, you consent to the collection and processing of your personal data in accordance with applicable privacy laws and our stated policy.
              </p>
            </div>

            <div className="terms-section">
              <h2>8. Modifications to the Terms</h2>
              <p>
                We reserve the right to revise or update these Terms and Conditions at any time. All changes will be effective immediately upon posting on this page. Your continued use of the website after such changes constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <div className="terms-section">
              <h2>9. Governing Law and Jurisdiction</h2>
              <p>
                These Terms and Conditions are governed by the laws of the Republic of Albania. Any disputes arising in connection with the use of this website or its content shall be subject to the exclusive jurisdiction of the competent courts in Tirana, Albania.
              </p>
            </div>

            <div className="terms-section">
              <h2>10. Contact</h2>
              <p>If you have any questions regarding these Terms and Conditions, please contact us:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:info@msc-certifications.com">info@msc-certifications.com</a><br />
                <strong>Address:</strong> Ismail Qemali Street, Tirana, Albania
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-cta-final">
        <div className="container">
          <h2>Questions About Our Terms?</h2>
          <p>
            If you need clarification on any of our terms and conditions, don't hesitate to reach out.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary-large">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;