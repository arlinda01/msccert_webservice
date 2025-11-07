import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { certificateService } from '../../services/api';
import './CertificateRegister.css';

interface FormData {
  standard: string;
  company_name: string;
  first_issue_date: string;
  expiry_date: string;
  scope_activity: string;
  iaf_code: string;
  next_maintenance_date: string;
}

const CertificateRegister: FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    standard: 'ISO_9001_2015',
    company_name: '',
    first_issue_date: '',
    expiry_date: '',
    scope_activity: '',
    iaf_code: '',
    next_maintenance_date: '',
  });

  const standards = [
    { value: 'ISO_9001_2015', label: 'ISO 9001:2015' },
    { value: 'ISO_14001_2015', label: 'ISO 14001:2015' },
    { value: 'ISO_22000_2018', label: 'ISO 22000:2018' },
    { value: 'ISO_27001_2022', label: 'ISO 27001:2022' },
    { value: 'ISO_37001_2025', label: 'ISO 37001:2025' },
    { value: 'ISO_39001_2012', label: 'ISO 39001:2012' },
    { value: 'ISO_45001_2023', label: 'ISO 45001:2023' },
    { value: 'HACCP', label: 'HACCP: Hazard Analysis and Critical Control Points' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const certificate = await certificateService.createCertificate(formData);
      // Redirect to the certificate detail page
      navigate(`/certificate/${certificate.id}`);
    } catch (err: any) {
      console.error('Error creating certificate:', err);
      setError(err.response?.data?.message || 'Failed to create certificate. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="register-page">
        <h1>Register New Certificate</h1>
        <p className="subtitle">Create a new ISO certification record</p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="certificate-form">
          <div className="form-group">
            <label htmlFor="standard">ISO Standard *</label>
            <select
              id="standard"
              name="standard"
              value={formData.standard}
              onChange={handleChange}
              required
            >
              {standards.map((std) => (
                <option key={std.value} value={std.value}>
                  {std.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="company_name">Company Name *</label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              required
              placeholder="Enter company name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="iaf_code">IAF Code *</label>
            <input
              type="text"
              id="iaf_code"
              name="iaf_code"
              value={formData.iaf_code}
              onChange={handleChange}
              required
              placeholder="e.g., 28"
            />
          </div>

          <div className="form-group">
            <label htmlFor="scope_activity">Scope of Activity *</label>
            <textarea
              id="scope_activity"
              name="scope_activity"
              value={formData.scope_activity}
              onChange={handleChange}
              required
              placeholder="Describe the scope of certification or business activity"
              rows={4}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first_issue_date">First Issue Date *</label>
              <input
                type="date"
                id="first_issue_date"
                name="first_issue_date"
                value={formData.first_issue_date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="expiry_date">Expiry Date *</label>
              <input
                type="date"
                id="expiry_date"
                name="expiry_date"
                value={formData.expiry_date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="next_maintenance_date">Next Maintenance Date *</label>
            <input
              type="date"
              id="next_maintenance_date"
              name="next_maintenance_date"
              value={formData.next_maintenance_date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate('/certificates')}
              className="btn-secondary"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Certificate'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificateRegister;