import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface FormStatus {
  submitting: boolean;
  submitted: boolean;
  success: boolean;
  message: string;
}

const Contact: FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, success: false, message: '' });

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/forms/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: t('contact.form.successMessage') || data.message
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          submitting: false,
          submitted: true,
          success: false,
          message: data.message || t('contact.form.errorMessage') || 'Failed to send message. Please try again.'
        });
      }
    } catch {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: t('contact.form.errorMessage') || 'Failed to send message. Please try again or contact us directly.'
      });
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>{t('contact.meta.title')}</title>
        <meta name="description" content={t('contact.meta.description')} />
        <meta name="keywords" content={t('contact.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>{t('contact.hero.title')}</h1>
          <p className="contact-subtitle">
            {t('contact.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section section-white">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>{t('contact.info.title')}</h2>
              <p className="contact-description">
                {t('contact.info.description')}
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{t('contact.info.address.title')}</h3>
                    <p>{t('contact.info.address.line1')}<br/>{t('contact.info.address.line2')}</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{t('contact.info.email.title')}</h3>
                    <p><a href={`mailto:${t('contact.info.email.address')}`}>{t('contact.info.email.address')}</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{t('contact.info.phone.title')}</h3>
                    <p><a href="tel:+355672063632">{t('contact.info.phone.number')}</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{t('contact.info.hours.title')}</h3>
                    <p>{t('contact.info.hours.weekdays')}<br/>{t('contact.info.hours.weekend')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>{t('contact.form.title')}</h2>

              {status.submitted && (
                <div className={`form-message ${status.success ? 'form-message-success' : 'form-message-error'}`}>
                  {status.message}
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.phonePlaceholder')}
                    disabled={status.submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">{t('contact.form.company')}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t('contact.form.companyPlaceholder')}
                    disabled={status.submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t('contact.form.subject')} *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status.submitting}
                  >
                    <option value="">{t('contact.form.subjectPlaceholder')}</option>
                    <option value="certification">{t('contact.form.subjects.certification')}</option>
                    <option value="ce-marking">{t('contact.form.subjects.ceMarking')}</option>
                    <option value="training">{t('contact.form.subjects.training')}</option>
                    <option value="quote">{t('contact.form.subjects.quote')}</option>
                    <option value="other">{t('contact.form.subjects.other')}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                    disabled={status.submitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary-large"
                  disabled={status.submitting}
                >
                  {status.submitting ? t('contact.form.submitting') || 'Sending...' : t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
