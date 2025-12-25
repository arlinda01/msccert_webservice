import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Contact: FC = () => {
  const { t } = useTranslation();

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
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')} *</label>
                  <input type="text" id="name" name="name" placeholder={t('contact.form.namePlaceholder')} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')} *</label>
                  <input type="email" id="email" name="email" placeholder={t('contact.form.emailPlaceholder')} required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input type="tel" id="phone" name="phone" placeholder={t('contact.form.phonePlaceholder')} />
                </div>

                <div className="form-group">
                  <label htmlFor="company">{t('contact.form.company')}</label>
                  <input type="text" id="company" name="company" placeholder={t('contact.form.companyPlaceholder')} />
                </div>

                <div className="form-group">
                  <label htmlFor="service">{t('contact.form.subject')} *</label>
                  <select id="service" name="service" required>
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
                  <textarea id="message" name="message" rows={6} placeholder={t('contact.form.messagePlaceholder')} required></textarea>
                </div>

                <button type="submit" className="btn btn-primary-large">{t('contact.form.submit')}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
