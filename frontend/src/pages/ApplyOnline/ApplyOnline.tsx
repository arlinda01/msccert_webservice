import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

interface ApplyFormData {
  certificationStandard: string;
  otherStandard: string;
  requestType: string;
  companyName: string;
  vatNumber: string;
  streetAddress: string;
  city: string;
  stateProvince: string;
  zipCode: string;
  country: string;
  phone: string;
  email: string;
  sector: string;
  ownersManagers: string;
  officeWorkers: string;
  workers: string;
  seasonalWorkers: string;
  temporaryWorkers: string;
  externalActivities: string;
  acceptTerms: boolean;
}

interface FormStatus {
  submitting: boolean;
  submitted: boolean;
  success: boolean;
  message: string;
}

const ApplyOnline: FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<ApplyFormData>({
    certificationStandard: '',
    otherStandard: '',
    requestType: '',
    companyName: '',
    vatNumber: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    zipCode: '',
    country: '',
    phone: '',
    email: '',
    sector: '',
    ownersManagers: '',
    officeWorkers: '',
    workers: '',
    seasonalWorkers: '',
    temporaryWorkers: '',
    externalActivities: '',
    acceptTerms: false
  });

  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, success: false, message: '' });

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/forms/apply-online/`, {
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
          message: t('applyOnline.form.successMessage')
        });
        setFormData({
          certificationStandard: '',
          otherStandard: '',
          requestType: '',
          companyName: '',
          vatNumber: '',
          streetAddress: '',
          city: '',
          stateProvince: '',
          zipCode: '',
          country: '',
          phone: '',
          email: '',
          sector: '',
          ownersManagers: '',
          officeWorkers: '',
          workers: '',
          seasonalWorkers: '',
          temporaryWorkers: '',
          externalActivities: '',
          acceptTerms: false
        });
      } else {
        setStatus({
          submitting: false,
          submitted: true,
          success: false,
          message: data.message || t('applyOnline.form.errorMessage')
        });
      }
    } catch {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: t('applyOnline.form.errorMessage')
      });
    }
  };

  const isoOptions = [
    { value: 'iso-9001', label: 'ISO 9001:2015' },
    { value: 'iso-14001', label: 'ISO 14001:2015' },
    { value: 'iso-22000', label: 'ISO 22000:2018' },
    { value: 'iso-22301', label: 'ISO 22301:2019' },
    { value: 'iso-27001', label: 'ISO 27001:2022' },
    { value: 'iso-37001', label: 'ISO 37001:2016' },
    { value: 'iso-39001', label: 'ISO 39001:2012' },
    { value: 'iso-45001', label: 'ISO 45001:2018' },
    { value: 'iso-50001', label: 'ISO 50001:2018' },
    { value: 'haccp', label: 'HACCP – Codex Alimentarius' },
    { value: 'other', label: t('applyOnline.form.standards.other') }
  ];

  return (
    <div className="apply-online-page">
      <Helmet>
        <title>{t('applyOnline.meta.title')}</title>
        <meta name="description" content={t('applyOnline.meta.description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>{t('applyOnline.hero.title')}</h1>
          <p className="contact-subtitle">{t('applyOnline.hero.subtitle')}</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section section-white">
        <div className="container">
          <div className="apply-form-container">

            {status.submitted && (
              <div className={`form-message ${status.success ? 'form-message-success' : 'form-message-error'}`}>
                {status.message}
              </div>
            )}

            <form className="apply-form" onSubmit={handleSubmit}>

              {/* Section 1: Certification Standard */}
              <div className="form-section">
                <h2>{t('applyOnline.form.sections.certification')}</h2>
                <div className="form-grid">
                  <div className="form-group form-group-full">
                    <label htmlFor="certificationStandard">{t('applyOnline.form.certificationStandard')} *</label>
                    <select
                      id="certificationStandard"
                      name="certificationStandard"
                      value={formData.certificationStandard}
                      onChange={handleChange}
                      required
                      disabled={status.submitting}
                    >
                      <option value="">{t('applyOnline.form.selectStandard')}</option>
                      {isoOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {formData.certificationStandard === 'other' && (
                    <div className="form-group form-group-full">
                      <label htmlFor="otherStandard">{t('applyOnline.form.otherStandard')} *</label>
                      <input
                        type="text"
                        id="otherStandard"
                        name="otherStandard"
                        value={formData.otherStandard}
                        onChange={handleChange}
                        placeholder={t('applyOnline.form.otherStandardPlaceholder')}
                        required
                        disabled={status.submitting}
                      />
                    </div>
                  )}

                  <div className="form-group form-group-full">
                    <label>{t('applyOnline.form.requestType')} *</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="requestType"
                          value="initial"
                          checked={formData.requestType === 'initial'}
                          onChange={handleChange}
                          required
                          disabled={status.submitting}
                        />
                        <span>{t('applyOnline.form.requestTypes.initial')}</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="requestType"
                          value="renovation"
                          checked={formData.requestType === 'renovation'}
                          onChange={handleChange}
                          disabled={status.submitting}
                        />
                        <span>{t('applyOnline.form.requestTypes.renovation')}</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="requestType"
                          value="transfer"
                          checked={formData.requestType === 'transfer'}
                          onChange={handleChange}
                          disabled={status.submitting}
                        />
                        <span>{t('applyOnline.form.requestTypes.transfer')}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Company Data */}
              <div className="form-section">
                <h2>{t('applyOnline.form.sections.companyData')}</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="companyName">{t('applyOnline.form.companyName')} *</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      disabled={status.submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vatNumber">{t('applyOnline.form.vatNumber')} *</label>
                    <input
                      type="text"
                      id="vatNumber"
                      name="vatNumber"
                      value={formData.vatNumber}
                      onChange={handleChange}
                      required
                      disabled={status.submitting}
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Address */}
              <div className="form-section">
                <h2>{t('applyOnline.form.sections.address')}</h2>
                <div className="form-grid">
                  <div className="form-group form-group-full">
                    <label htmlFor="streetAddress">{t('applyOnline.form.streetAddress')}</label>
                    <input
                      type="text"
                      id="streetAddress"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      disabled={status.submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">{t('applyOnline.form.city')}</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={status.submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="stateProvince">{t('applyOnline.form.stateProvince')}</label>
                    <input
                      type="text"
                      id="stateProvince"
                      name="stateProvince"
                      value={formData.stateProvince}
                      onChange={handleChange}
                      disabled={status.submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">{t('applyOnline.form.zipCode')}</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      disabled={status.submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">{t('applyOnline.form.country')}</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      disabled={status.submitting}
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Contact Info */}
              <div className="form-section">
                <h2>{t('applyOnline.form.sections.contact')}</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="phone">{t('applyOnline.form.phone')} *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={status.submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t('applyOnline.form.email')} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status.submitting}
                    />
                  </div>
                </div>
              </div>

              {/* Section 5: Business Information */}
              <div className="form-section">
                <h2>{t('applyOnline.form.sections.business')}</h2>
                <div className="form-grid">
                  <div className="form-group form-group-full">
                    <label htmlFor="sector">{t('applyOnline.form.sector')} *</label>
                    <input
                      type="text"
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      placeholder={t('applyOnline.form.sectorPlaceholder')}
                      required
                      disabled={status.submitting}
                    />
                  </div>

                  <div className="form-group-label form-group-full">
                    <label>{t('applyOnline.form.personnel')}</label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="ownersManagers">{t('applyOnline.form.ownersManagers')}</label>
                    <input
                      type="number"
                      id="ownersManagers"
                      name="ownersManagers"
                      value={formData.ownersManagers}
                      onChange={handleChange}
                      min="0"
                      disabled={status.submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="officeWorkers">{t('applyOnline.form.officeWorkers')}</label>
                    <input
                      type="number"
                      id="officeWorkers"
                      name="officeWorkers"
                      value={formData.officeWorkers}
                      onChange={handleChange}
                      min="0"
                      disabled={status.submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="workers">{t('applyOnline.form.workers')}</label>
                    <input
                      type="number"
                      id="workers"
                      name="workers"
                      value={formData.workers}
                      onChange={handleChange}
                      min="0"
                      disabled={status.submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="seasonalWorkers">{t('applyOnline.form.seasonalWorkers')}</label>
                    <input
                      type="number"
                      id="seasonalWorkers"
                      name="seasonalWorkers"
                      value={formData.seasonalWorkers}
                      onChange={handleChange}
                      min="0"
                      disabled={status.submitting}
                    />
                  </div>
                  <div className="form-group form-group-full">
                    <label htmlFor="temporaryWorkers">{t('applyOnline.form.temporaryWorkers')}</label>
                    <input
                      type="number"
                      id="temporaryWorkers"
                      name="temporaryWorkers"
                      value={formData.temporaryWorkers}
                      onChange={handleChange}
                      min="0"
                      disabled={status.submitting}
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label htmlFor="externalActivities">{t('applyOnline.form.externalActivities')}</label>
                    <textarea
                      id="externalActivities"
                      name="externalActivities"
                      rows={4}
                      value={formData.externalActivities}
                      onChange={handleChange}
                      placeholder={t('applyOnline.form.externalActivitiesPlaceholder')}
                      disabled={status.submitting}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Terms & Submit */}
              <div className="form-group form-group-checkbox">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    disabled={status.submitting}
                  />
                  <span dangerouslySetInnerHTML={{ __html: t('applyOnline.form.acceptTerms') }} />
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary-large apply-submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? t('applyOnline.form.submitting') : t('applyOnline.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyOnline;
