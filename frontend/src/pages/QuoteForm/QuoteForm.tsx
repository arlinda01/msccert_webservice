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
  'iso-22000': 'ISO_22000',
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
  'iso-22000': 'ISO 22000:2018',
  'haccp': 'HACCP',
  'ce-marking': 'CE Marking',
};

const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
  const [emailError, setEmailError] = useState<string | null>(null);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  // Flow: contact (step 0) -> sections (step 1..N) -> review (last step)
  const [currentStep, setCurrentStep] = useState<number | 'review' | 'success'>('contact' as any);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Step types: 'contact', 0, 1, 2... (section indices), 'review'
  type StepType = 'contact' | number | 'review' | 'success';
  const currentStepTyped = currentStep as StepType;

  const backendIsoCode = isoCode ? isoCodeMap[isoCode] : null;
  const displayName = isoCode ? isoDisplayNames[isoCode] : '';

  const totalSections = form?.sections?.length || 0;
  // contact + sections + review
  const totalSteps = 1 + totalSections + 1;

  useEffect(() => {
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
    if (field === 'email') {
      setEmailError(null);
    }
  };

  const validateContact = (): boolean => {
    return !!(
      contactInfo.company_name.trim() &&
      contactInfo.contact_person.trim() &&
      contactInfo.email.trim() &&
      isValidEmail(contactInfo.email) &&
      contactInfo.phone.trim()
    );
  };

  const validateCurrentSection = (): boolean => {
    if (typeof currentStepTyped !== 'number' || !form) return true;
    const section = form.sections[currentStepTyped];
    if (!section) return true;

    for (const question of section.questions) {
      if (!answers[question.id] || answers[question.id].trim() === '') {
        return false;
      }
    }
    return true;
  };

  const getCurrentStepNumber = (): number => {
    if (currentStepTyped === 'contact') return 1;
    if (typeof currentStepTyped === 'number') return currentStepTyped + 2;
    if (currentStepTyped === 'review') return totalSteps;
    return 1;
  };

  const getStepLabel = (stepIndex: number): string => {
    if (stepIndex === 0) return t('quoteForm.steps.contact');
    if (stepIndex <= totalSections) {
      const section = form?.sections[stepIndex - 1];
      if (section) return getLocalizedText(section.title, section.title_sq, section.title_it);
      return '';
    }
    return t('quoteForm.steps.review');
  };

  const canNavigateToStep = (stepIndex: number): boolean => {
    // Can always go back to contact (step 0)
    if (stepIndex === 0) return true;
    // Can go to section steps if contact is valid
    if (stepIndex <= totalSections) {
      if (!validateContact()) return false;
      // Check all previous sections are complete
      for (let i = 0; i < stepIndex - 1; i++) {
        const section = form?.sections[i];
        if (section) {
          for (const question of section.questions) {
            if (!answers[question.id] || answers[question.id].trim() === '') {
              return false;
            }
          }
        }
      }
      return true;
    }
    // Review step: all must be valid
    if (stepIndex === totalSteps - 1) {
      if (!validateContact()) return false;
      for (let i = 0; i < totalSections; i++) {
        const section = form?.sections[i];
        if (section) {
          for (const question of section.questions) {
            if (!answers[question.id] || answers[question.id].trim() === '') {
              return false;
            }
          }
        }
      }
      return true;
    }
    return false;
  };

  const navigateToStep = (stepIndex: number) => {
    if (!canNavigateToStep(stepIndex)) return;
    if (stepIndex === 0) {
      setCurrentStep('contact' as any);
    } else if (stepIndex <= totalSections) {
      setCurrentStep(stepIndex - 1);
    } else {
      setCurrentStep('review' as any);
    }
    window.scrollTo(0, 0);
  };

  const goToNextStep = () => {
    if (currentStepTyped === 'contact') {
      if (!isValidEmail(contactInfo.email)) {
        setEmailError(t('quoteForm.errors.invalidEmail') || 'Please enter a valid email address');
        return;
      }
      if (totalSections > 0) {
        setCurrentStep(0);
      } else {
        setCurrentStep('review' as any);
      }
    } else if (typeof currentStepTyped === 'number') {
      if (currentStepTyped < totalSections - 1) {
        setCurrentStep(currentStepTyped + 1);
      } else {
        setCurrentStep('review' as any);
      }
    }
    window.scrollTo(0, 0);
  };

  const goToPreviousStep = () => {
    if (currentStepTyped === 'review') {
      if (totalSections > 0) {
        setCurrentStep(totalSections - 1);
      } else {
        setCurrentStep('contact' as any);
      }
    } else if (typeof currentStepTyped === 'number') {
      if (currentStepTyped > 0) {
        setCurrentStep(currentStepTyped - 1);
      } else {
        setCurrentStep('contact' as any);
      }
    }
    window.scrollTo(0, 0);
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

      setCurrentStep('success' as any);
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
            <h1>{t('quoteForm.selectService.title')}</h1>
            <p className="quote-subtitle">
              {t('quoteForm.selectService.subtitle')}
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

  const currentSection = typeof currentStepTyped === 'number' ? form.sections[currentStepTyped] : null;

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

      {/* Step Indicators */}
      {currentStepTyped !== 'success' && (
        <section className="progress-section">
          <div className="container">
            <div className="step-indicators">
              {Array.from({ length: totalSteps }).map((_, index) => {
                const stepNum = getCurrentStepNumber();
                const isActive = index === stepNum - 1;
                const isCompleted = index < stepNum - 1;
                const isClickable = canNavigateToStep(index);
                return (
                  <div
                    key={index}
                    className={`step-indicator ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isClickable ? 'clickable' : ''}`}
                    onClick={() => isClickable ? navigateToStep(index) : undefined}
                    role={isClickable ? 'button' : undefined}
                    tabIndex={isClickable ? 0 : undefined}
                  >
                    <div className="step-circle">
                      {isCompleted ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className="step-label">{getStepLabel(index)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Form Content */}
      <section className="form-section">
        <div className="container">
          {/* Contact Information Step (FIRST) */}
          {currentStepTyped === 'contact' && (
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
                    className={emailError ? 'input-error' : ''}
                    required
                  />
                  {emailError && <span className="field-error">{emailError}</span>}
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
                  className="btn btn-primary"
                  onClick={goToNextStep}
                  disabled={!validateContact()}
                >
                  {t('common.next')}
                </button>
              </div>
            </div>
          )}

          {/* Section Steps (Questions) */}
          {typeof currentStepTyped === 'number' && currentSection && (
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
                        <span className="required">*</span>
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
                <button
                  className="btn btn-secondary"
                  onClick={goToPreviousStep}
                >
                  {t('common.back')}
                </button>
                <button
                  className="btn btn-primary"
                  onClick={goToNextStep}
                  disabled={!validateCurrentSection()}
                >
                  {t('common.next')}
                </button>
              </div>
            </div>
          )}

          {/* Review Step */}
          {currentStepTyped === 'review' && (
            <div className="form-step review-step">
              <h2>{t('quoteForm.review.title')}</h2>
              <p className="step-description">{t('quoteForm.review.description')}</p>

              <div className="review-section">
                <div className="review-section-header">
                  <h3>{t('quoteForm.contactInfo.title')}</h3>
                  <button className="edit-step-btn" onClick={() => navigateToStep(0)}>
                    {t('common.edit')}
                  </button>
                </div>
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

              <p className="expert-note">{t('quoteForm.review.expertNote')}</p>

              <div className="form-group-checkbox">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    required
                  />
                  <span dangerouslySetInnerHTML={{ __html: t('quoteForm.review.acceptTerms') }} />
                </label>
              </div>
              <div className="form-group-checkbox">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={acceptPrivacy}
                    onChange={(e) => setAcceptPrivacy(e.target.checked)}
                    required
                  />
                  <span dangerouslySetInnerHTML={{ __html: t('quoteForm.review.acceptPrivacy') }} />
                </label>
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
                  disabled={submitting || !acceptTerms || !acceptPrivacy}
                >
                  {submitting ? t('common.loading') : t('common.submit')}
                </button>
              </div>
            </div>
          )}

          {/* Success Step */}
          {currentStepTyped === 'success' && (
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
