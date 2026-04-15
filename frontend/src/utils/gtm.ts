declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const pushGtmEvent = (event: string, data: Record<string, unknown> = {}) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
};

export const gtmEvents = {
  contactFormSubmission: 'contact_form_submission',
  whatsappClick: 'whatsapp_click',
  phoneClick: 'phone_click',
  emailClick: 'email_click',
} as const;
