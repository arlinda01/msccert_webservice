export interface Certificate {
  id: string | number;
  certificate_number: string;
  company_name: string;
  standard: string;
  standard_display: string;
  issue_date?: string;
  first_issue_date: string;
  expiry_date: string;
  status: CertificateStatus;
  status_display: string;
  scope?: string;
  scope_activity: string;
  iaf_code: string;
  sites: Site[];
  days_until_expiry: number | null;
  next_maintenance_date: string;
  last_maintenance_date?: string;
  is_maintenance_due: boolean;
}

export type CertificateStatus = 'VALID' | 'EXPIRED' | 'SUSPENDED' | 'WITHDRAWN';

export interface Site {
  id: string | number;
  site_number: string;
  name: string;
  address: string;
  scope_activity: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
