import { FC, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';
import api from '../../services/api';
import './QuoteForm.css';

interface FormQuestion {
  id: string;
  question_text: string;
  question_text_sq: string;
  question_text_it: string;
  question_type: string;
  is_required: boolean;
  options: Array<{
    value: string;
    label: string;
    label_sq: string;
    label_it: string;
  }>;
  order: number;
}

interface FormSection {
  id: string;
  title: string;
  title_sq: string;
  title_it: string;
  description?: string;
  description_sq?: string;
  description_it?: string;
  order: number;
  questions: FormQuestion[];
}

interface FormTemplate {
  id: string;
  name: string;
  name_sq: string;
  name_it: string;
  description: string;
  description_sq: string;
  description_it: string;
  iso_standard: string;
  sections: FormSection[];
}

interface ContactInfo {
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  address?: string;
  additional_notes?: string;
}

// Map URL isoCode to backend ISO standard code
const isoCodeMap: Record<string, string> = {
  'iso-9001': 'ISO_9001',
  'iso-14001': 'ISO_14001',
  'iso-22301': 'ISO_22301',
  'iso-27001': 'ISO_27001',
  'iso-37001': 'ISO_37001',
  'iso-39001': 'ISO_39001',
  'iso-45001': 'ISO_45001',
  'iso-50001': 'ISO_50001',
  'haccp': 'HACCP',
  'ce-marking': 'GENERAL',
};

// Map ISO code to display name
const isoDisplayNames: Record<string, string> = {
  'iso-9001': 'ISO 9001:2015',
  'iso-14001': 'ISO 14001:2015',
  'iso-22301': 'ISO 22301:2019',
  'iso-27001': 'ISO 27001:2022',
  'iso-37001': 'ISO 37001:2016',
  'iso-39001': 'ISO 39001:2012',
  'iso-45001': 'ISO 45001:2018',
  'iso-50001': 'ISO 50001:2018',
  'haccp': 'HACCP',
  'ce-marking': 'CE Marking',
};

const QuoteForm: FC = () => {
  const { isoCode } = useParams<{ isoCode: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  const [form, setForm] = useState<FormTemplate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    company_name: '',
    contact_person: '',
    email: '',
    phone: '',
    address: '',
    additional_notes: '',
  });

  // Current step: section index (0, 1, 2...), 'contact', 'review', 'success'
  // Flow: sections first, then contact info, then review
  const [currentStep, setCurrentStep] = useState<number | 'contact' | 'review' | 'success'>(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const backendIsoCode = isoCode ? isoCodeMap[isoCode] : null;
  const displayName = isoCode ? isoDisplayNames[isoCode] : '';

  const totalSections = form?.sections?.length || 0;
  const totalSteps = totalSections + 2; // contact + sections + review

  useEffect(() => {
    // Reset states when ISO code changes
    setError(null);
    setLoading(true);
    setForm(null);

    const fetchForm = async () => {
      if (!backendIsoCode) {
        setError('Invalid ISO code');
        setLoading(false);
        return;
      }

      try {
        const response = await api.get(`/forms/public/forms/?iso_standard=${backendIsoCode}`);
        const data = response.data;

        if (data.results && data.results.length > 0) {
          setForm(data.results[0]);
        } else if (Array.isArray(data) && data.length > 0) {
          setForm(data[0]);
        } else {
          setError('Form not found. Please contact us for more information.');
        }
      } catch (err) {
        console.error('Error fetching form:', err);
        setError('Failed to load form. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [backendIsoCode]);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleContactChange = (field: keyof ContactInfo, value: string) => {
    setContactInfo(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateContact = (): boolean => {
    return !!(
      contactInfo.company_name.trim() &&
      contactInfo.contact_person.trim() &&
      contactInfo.email.trim() &&
      contactInfo.phone.trim()
    );
  };

  const goToNextStep = () => {
    if (typeof currentStep === 'number') {
      if (currentStep < totalSections - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep('contact');
      }
    } else if (currentStep === 'contact') {
      setCurrentStep('review');
    }
    window.scrollTo(0, 0);
  };

  const goToPreviousStep = () => {
    if (currentStep === 'review') {
      setCurrentStep('contact');
    } else if (currentStep === 'contact') {
      setCurrentStep(totalSections - 1);
    } else if (typeof currentStep === 'number') {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    }
    window.scrollTo(0, 0);
  };

  const getCurrentStepNumber = (): number => {
    if (typeof currentStep === 'number') return currentStep + 1;
    if (currentStep === 'contact') return totalSections + 1;
    if (currentStep === 'review') return totalSteps;
    return 1;
  };

  const handleSubmit = async () => {
    if (!form) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      await api.post('/forms/public/submit/submit/', {
        form_template: form.id,
        company_name: contactInfo.company_name,
        contact_person: contactInfo.contact_person,
        email: contactInfo.email,
        phone: contactInfo.phone,
        address: contactInfo.address,
        additional_notes: contactInfo.additional_notes,
        answers: Object.entries(answers).map(([questionId, value]) => ({
          question: questionId,
          answer_value: value,
        })),
      });

      setCurrentStep('success');
      window.scrollTo(0, 0);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      const errorMessage = err.response?.data?.detail || err.response?.data?.errors || 'Submission failed';
      setSubmitError(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
    } finally {
      setSubmitting(false);
    }
  };

  const getLocalizedText = (en: string, sq: string, it?: string): string => {
    if (currentLang === 'sq') return sq || en;
    if (currentLang === 'it') return it || en;
    return en;
  };

  const getOptionLabel = (option: { label: string; label_sq: string; label_it?: string }): string => {
    if (currentLang === 'sq') return option.label_sq || option.label;
    if (currentLang === 'it') return option.label_it || option.label;
    return option.label;
  };

  if (loading) {
    return (
      <div className="quote-form-page">
        <div className="container">
          <div className="loading-state">
            <div className="spinner"></div>
            <p>{t('common.loading')}</p>
          </div>
        </div>
      </div>
    );
  }

  // If no ISO code provided, show selection page
  if (!isoCode) {
    const availableServices = [
      { code: 'iso-9001', name: 'ISO 9001:2015', desc: t('nav.iso9001') },
      { code: 'iso-14001', name: 'ISO 14001:2015', desc: t('nav.iso14001') },
      { code: 'iso-22301', name: 'ISO 22301:2019', desc: t('nav.iso22301') },
      { code: 'iso-27001', name: 'ISO 27001:2022', desc: t('nav.iso27001') },
      { code: 'iso-37001', name: 'ISO 37001:2016', desc: t('nav.iso37001') },
      { code: 'iso-39001', name: 'ISO 39001:2012', desc: t('nav.iso39001') },
      { code: 'iso-45001', name: 'ISO 45001:2018', desc: t('nav.iso45001') },
      { code: 'iso-50001', name: 'ISO 50001:2018', desc: t('nav.iso50001') },
      { code: 'haccp', name: 'HACCP', desc: t('nav.haccp') },
      { code: 'ce-marking', name: 'CE Marking', desc: t('nav.ceMarking') },
    ];

    return (
      <div className="quote-form-page">
        <Helmet>
          <title>{t('quoteForm.title')} | MSC Certifications</title>
        </Helmet>

        <section className="quote-hero">
          <div className="container">
            <h1>{t('quoteForm.selectService.title') || 'Select a Service'}</h1>
            <p className="quote-subtitle">
              {t('quoteForm.selectService.subtitle') || 'Choose the certification or service you are interested in:'}
            </p>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <div className="service-selection-grid">
              {availableServices.map((service) => (
                <Link
                  key={service.code}
                  to={routes.quoteForm[currentLang].replace(':isoCode', service.code)}
                  className="service-selection-card"
                >
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error || !form) {
    return (
      <div className="quote-form-page">
        <div className="container">
          <div className="error-state">
            <h2>{t('common.error')}</h2>
            <p>{error || 'Form not available'}</p>
            <Link to={routes.contact[currentLang]} className="btn btn-primary">
              {t('common.contactUs')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentSection = typeof currentStep === 'number' ? form.sections[currentStep] : null;

  return (
    <div className="quote-form-page">
      <Helmet>
        <title>{displayName} {t('quoteForm.title')} | MSC Certifications</title>
        <meta name="description" content={getLocalizedText(form.description, form.description_sq, form.description_it)} />
      </Helmet>

      {/* Hero Section */}
      <section className="quote-hero">
        <div className="container">
          <h1>{displayName} {t('quoteForm.title')}</h1>
          <p className="quote-subtitle">
            {getLocalizedText(form.description, form.description_sq, form.description_it)}
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      {currentStep !== 'success' && (
        <section className="progress-section">
          <div className="container">
            <div className="progress-bar-container">
              <div className="progress-info">
                <span>{t('quoteForm.step')} {getCurrentStepNumber()} {t('quoteForm.of')} {totalSteps}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${(getCurrentStepNumber() / totalSteps) * 100}%` }}
                ></div>
              </div>
              <div className="progress-label">
                {typeof currentStep === 'number' && getLocalizedText(currentSection?.title || '', currentSection?.title_sq || '', currentSection?.title_it || '')}
                {currentStep === 'contact' && t('quoteForm.steps.contact')}
                {currentStep === 'review' && t('quoteForm.steps.review')}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Form Content */}
      <section className="form-section">
        <div className="container">
          {/* Section Steps (Questions first) */}
          {typeof currentStep === 'number' && currentSection && (
            <div className="form-step section-step">
              <h2>{getLocalizedText(currentSection.title, currentSection.title_sq, currentSection.title_it)}</h2>
              {currentSection.description && (
                <p className="step-description">
                  {getLocalizedText(currentSection.description, currentSection.description_sq || '', currentSection.description_it || '')}
                </p>
              )}

              <div className="questions-list">
                {currentSection.questions.map((question, qIndex) => (
                  <div key={question.id} className="question-item">
                    <div className="question-number">{qIndex + 1}</div>
                    <div className="question-content">
                      <p className="question-text">
                        {getLocalizedText(question.question_text, question.question_text_sq, question.question_text_it)}
                        {question.is_required && <span className="required">*</span>}
                      </p>
                      <div className="answer-options">
                        {question.options.map((option) => (
                          <label key={option.value} className={`radio-option ${answers[question.id] === option.value ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name={question.id}
                              value={option.value}
                              checked={answers[question.id] === option.value}
                              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            />
                            <span className="radio-label">{getOptionLabel(option)}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="form-actions">
                {currentStep > 0 && (
                  <button
                    className="btn btn-secondary"
                    onClick={goToPreviousStep}
                  >
                    {t('common.back')}
                  </button>
                )}
                <button
                  className="btn btn-primary"
                  onClick={goToNextStep}
                >
                  {t('common.next')}
                </button>
              </div>
            </div>
          )}

          {/* Contact Information Step (after questions) */}
          {currentStep === 'contact' && (
            <div className="form-step contact-step">
              <h2>{t('quoteForm.contactInfo.title')}</h2>
              <p className="step-description">{t('quoteForm.contactInfo.description')}</p>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="company_name">{t('quoteForm.contactInfo.companyName')} *</label>
                  <input
                    type="text"
                    id="company_name"
                    value={contactInfo.company_name}
                    onChange={(e) => handleContactChange('company_name', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact_person">{t('quoteForm.contactInfo.contactPerson')} *</label>
                  <input
                    type="text"
                    id="contact_person"
                    value={contactInfo.contact_person}
                    onChange={(e) => handleContactChange('contact_person', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('quoteForm.contactInfo.email')} *</label>
                  <input
                    type="email"
                    id="email"
                    value={contactInfo.email}
                    onChange={(e) => handleContactChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t('quoteForm.contactInfo.phone')} *</label>
                  <input
                    type="tel"
                    id="phone"
                    value={contactInfo.phone}
                    onChange={(e) => handleContactChange('phone', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="address">{t('quoteForm.contactInfo.address')}</label>
                  <input
                    type="text"
                    id="address"
                    value={contactInfo.address}
                    onChange={(e) => handleContactChange('address', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-actions">
                <button
                  className="btn btn-secondary"
                  onClick={goToPreviousStep}
                >
                  {t('common.back')}
                </button>
                <button
                  className="btn btn-primary"
                  onClick={goToNextStep}
                  disabled={!validateContact()}
                >
                  {t('common.next')}
                </button>
              </div>
            </div>
          )}

          {/* Review Step */}
          {currentStep === 'review' && (
            <div className="form-step review-step">
              <h2>{t('quoteForm.review.title')}</h2>
              <p className="step-description">{t('quoteForm.review.description')}</p>

              <div className="review-section">
                <h3>{t('quoteForm.contactInfo.title')}</h3>
                <div className="review-grid">
                  <div className="review-item">
                    <span className="label">{t('quoteForm.contactInfo.companyName')}:</span>
                    <span className="value">{contactInfo.company_name}</span>
                  </div>
                  <div className="review-item">
                    <span className="label">{t('quoteForm.contactInfo.contactPerson')}:</span>
                    <span className="value">{contactInfo.contact_person}</span>
                  </div>
                  <div className="review-item">
                    <span className="label">{t('quoteForm.contactInfo.email')}:</span>
                    <span className="value">{contactInfo.email}</span>
                  </div>
                  <div className="review-item">
                    <span className="label">{t('quoteForm.contactInfo.phone')}:</span>
                    <span className="value">{contactInfo.phone}</span>
                  </div>
                  {contactInfo.address && (
                    <div className="review-item full-width">
                      <span className="label">{t('quoteForm.contactInfo.address')}:</span>
                      <span className="value">{contactInfo.address}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="review-section">
                <h3>{t('quoteForm.review.responseSummary')}</h3>
                <p className="summary-note">{t('quoteForm.review.summaryNote')}</p>
                <div className="response-summary">
                  {Object.entries(answers).length > 0 ? (
                    <p>{Object.entries(answers).length} {t('quoteForm.review.questionsAnswered')}</p>
                  ) : (
                    <p>{t('quoteForm.review.noAnswers')}</p>
                  )}
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="additional_notes">{t('quoteForm.assessment.additionalNotes')}</label>
                <textarea
                  id="additional_notes"
                  value={contactInfo.additional_notes}
                  onChange={(e) => handleContactChange('additional_notes', e.target.value)}
                  rows={4}
                  placeholder={t('quoteForm.assessment.additionalNotesPlaceholder')}
                />
              </div>

              {submitError && (
                <div className="error-message">
                  {submitError}
                </div>
              )}

              <div className="form-actions">
                <button
                  className="btn btn-secondary"
                  onClick={goToPreviousStep}
                  disabled={submitting}
                >
                  {t('common.back')}
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  {submitting ? t('common.loading') : t('common.submit')}
                </button>
              </div>
            </div>
          )}

          {/* Success Step */}
          {currentStep === 'success' && (
            <div className="form-step success-step">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2>{t('quoteForm.success.title')}</h2>
              <p>{t('quoteForm.success.message')}</p>
              <p className="success-note">{t('quoteForm.success.note')}</p>
              <div className="form-actions">
                <Link to={routes.home[currentLang]} className="btn btn-primary">
                  {t('quoteForm.success.goHome')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default QuoteForm;
