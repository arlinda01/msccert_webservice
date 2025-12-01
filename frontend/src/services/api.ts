import axios, { AxiosInstance } from 'axios';
import type { Certificate } from '../types';

// Use environment variable for API base URL
// Falls back to relative /api path for production (nginx proxy)
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '/api';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Public certificate data (returned by verify endpoint)
export interface PublicCertificate {
  certificate_number: string;
  company_name: string;
  standard: string;
  status: string;
  first_issue_date: string;
  expiry_date: string;
  scope_activity: string;
  iaf_code: string;
  is_valid: boolean;
  sites: Array<{
    id: number;
    site_number: number;
    name: string;
    scope_activity: string;
    address: string;
  }>;
}

interface CertificateListResponse {
  results?: Certificate[];
  count?: number;
  next?: string | null;
  previous?: string | null;
}

export const certificateService = {
  // Get all certificates
  getAllCertificates: async (): Promise<CertificateListResponse | Certificate[]> => {
    const response = await api.get<CertificateListResponse | Certificate[]>('/certificates/');
    return response.data;
  },

  // Get single certificate
  getCertificate: async (id: string | number): Promise<Certificate> => {
    const response = await api.get<Certificate>(`/certificates/${id}/`);
    return response.data;
  },

  // Create certificate
  createCertificate: async (data: Partial<Certificate>): Promise<Certificate> => {
    const response = await api.post<Certificate>('/certificates/', data);
    return response.data;
  },

  // Update certificate
  updateCertificate: async (id: string | number, data: Partial<Certificate>): Promise<Certificate> => {
    const response = await api.put<Certificate>(`/certificates/${id}/`, data);
    return response.data;
  },

  // Delete certificate
  deleteCertificate: async (id: string | number): Promise<void> => {
    await api.delete(`/certificates/${id}/`);
  },

  // Get QR code
  getQRCode: async (id: string | number): Promise<{ qr_code: string }> => {
    const response = await api.get<{ qr_code: string }>(`/certificates/${id}/qr_code/`);
    return response.data;
  },

  // Perform maintenance
  performMaintenance: async (id: string | number): Promise<Certificate> => {
    const response = await api.post<Certificate>(`/certificates/${id}/perform_maintenance/`);
    return response.data;
  },

  // Get expiring soon
  getExpiringSoon: async (): Promise<Certificate[]> => {
    const response = await api.get<Certificate[]>('/certificates/expiring_soon/');
    return response.data;
  },

  // Get maintenance due
  getMaintenanceDue: async (): Promise<Certificate[]> => {
    const response = await api.get<Certificate[]>('/certificates/maintenance_due/');
    return response.data;
  },

  // Public: Verify certificate by secure UUID (no auth required)
  verifyCertificate: async (secureId: string): Promise<PublicCertificate> => {
    const response = await api.get<PublicCertificate>(`/certificates/verify/${secureId}/`);
    return response.data;
  },
};

export default api;
