import { FC, useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../../services/api';
import './SearchCertificate.css';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  certificate_number: string;
  company_name: string;
}

const SearchCertificate: FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    certificate_number: '',
    company_name: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await api.post('/certificates/search/', formData);

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          certificate_number: '',
          company_name: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="search-certificate-page">
      <section className="search-certificate-hero">
        <div className="container">
          <h1>{t('searchCertificate.hero.title')}</h1>
          <p>{t('searchCertificate.hero.subtitle')}</p>
        </div>
      </section>

      <section className="search-certificate-content">
        <div className="container">
          <div className="search-form-wrapper">
            <h2>{t('searchCertificate.form.title')}</h2>
            <p className="form-description">{t('searchCertificate.form.description')}</p>

            {submitStatus === 'success' && (
              <div className="alert alert-success">
                {t('searchCertificate.form.success')}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="alert alert-error">
                {t('searchCertificate.form.error')}
              </div>
            )}

            <form onSubmit={handleSubmit} className="search-certificate-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">{t('searchCertificate.form.firstName')} *</label>
                  <input
                    type="text"
                    id="first_name"
                    value={formData.first_name}
                    onChange={(e) => handleChange('first_name', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">{t('searchCertificate.form.lastName')} *</label>
                  <input
                    type="text"
                    id="last_name"
                    value={formData.last_name}
                    onChange={(e) => handleChange('last_name', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('searchCertificate.form.email')} *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="certificate_number">{t('searchCertificate.form.certificateNumber')} *</label>
                <input
                  type="text"
                  id="certificate_number"
                  value={formData.certificate_number}
                  onChange={(e) => handleChange('certificate_number', e.target.value)}
                  placeholder={t('searchCertificate.form.certificateNumberPlaceholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company_name">{t('searchCertificate.form.companyName')} *</label>
                <input
                  type="text"
                  id="company_name"
                  value={formData.company_name}
                  onChange={(e) => handleChange('company_name', e.target.value)}
                  required
                />
              </div>

              <p className="expert-note">{t('searchCertificate.form.expertNote')}</p>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                  />
                  <span dangerouslySetInnerHTML={{ __html: t('searchCertificate.form.acceptTerms') }} />
                </label>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={submitting || !acceptTerms}>
                {submitting ? t('common.sending') : t('searchCertificate.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchCertificate;
