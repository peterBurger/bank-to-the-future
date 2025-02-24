import React, { useState } from 'react';
import { validateField, isValidForm } from '../utils/validateApplicationForm';
import { usStates, countries } from '../utils/seedData';
import Modal from '../components/Modal';
import '../styles/global.css';
require('dotenv').config();

const FORM_URL = `${process.env.REACT_APP_SERVER_URL}/submit-application`;

const Application = () => {
  const initialFormState = {
    name_first: '',
    name_last: '',
    address_line_1: '',
    address_line_2: '',
    address_city: '',
    address_state: '',
    address_postal_code: '',
    address_country: '',
    document_ssn: '',
    email_address: '',
    birth_date: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '', confirmAction: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handlePreSubmit = (e) => {
    e.preventDefault();

    if (!isValidForm(formData, errors)) {
      setModalContent({
        title: 'Validation Error',
        message: 'Please fill in all required fields correctly',
        confirmAction: null,
      });
      setModalOpen(true);

      return;
    }

    setModalContent({
      title: 'Confirm Your Details',
      message: (
        <div className="form-summary">
          {Object.entries(formData).map(([key, value]) => (
            <div className="form-summary-row" key={key}>
              <div className="form-summary-key">{key.replace(/_/g, ' ')}</div>
              <div className="form-summary-value">
                {key === 'document_ssn' && value ? '••• •• ' + value.slice(-4) : value || ''}
              </div>
            </div>
          ))}
        </div>
      ),
      confirmAction: handleFinalSubmit,
    });

    setModalOpen(true);
  };

  const handleFinalSubmit = async () => {
    setModalOpen(false);

    try {
      const response = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data?.summary?.outcome) {
        const outcomeMessages = {
          'Approved': 'Great Scott! Your application has been APPROVED!',
          'Manual Review': 'Looks like Doc will need to REVIEW your application. We\'ll be in touch shortly!',
          'Denied': 'Sorry! According to Doc\'s calculations, your application was NOT APPROVED at this time.',
        };

        setModalContent({
          title: 'Application Status',
          message: outcomeMessages[data.summary.outcome],
          confirmAction: null,
        });

        setFormData(initialFormState);
      } else {
        setModalContent({
          title: 'Error',
          message: data?.message || 'Failed to submit application',
          confirmAction: null,
        });
      }
    } catch (error) {
      setModalContent({
        title: 'Server Error',
        message: 'Error submitting application. Please try again.',
        confirmAction: null,
      });
    }

    setModalOpen(true);
  };

  return (
    <div className="application-container">
      <div className="application-form">
        <h2>Let's get started</h2>

        <form onSubmit={handlePreSubmit}>
          <label>First Name*</label>
          <input type="text" name="name_first" value={formData.name_first} onChange={handleChange} required />
          {errors.name_first && <p className="error-message">{errors.name_first}</p>}

          <label>Last Name*</label>
          <input type="text" name="name_last" value={formData.name_last} onChange={handleChange} required />
          {errors.name_last && <p className="error-message">{errors.name_last}</p>}

          <label>Address Line 1*</label>
          <input type="text" name="address_line_1" value={formData.address_line_1} onChange={handleChange} required />
          {errors.address_line_1 && <p className="error-message">{errors.address_line_1}</p>}

          <label>Address Line 2</label>
          <input type="text" name="address_line_2" value={formData.address_line_2} onChange={handleChange} />

          <label>City*</label>
          <input type="text" name="address_city" value={formData.address_city} onChange={handleChange} required />
          {errors.address_city && <p className="error-message">{errors.address_city}</p>}

          <label>State*</label>
          <select name="address_state" value={formData.address_state} onChange={handleChange} required>
            <option value="" disabled>Select a State</option>
            {usStates.map((state) => (
              <option key={state.code} value={state.code}>{state.name} ({state.code})</option>
            ))}
          </select>
          {errors.address_state && <p className="error-message">{errors.address_state}</p>}

          <label>ZIP/Postal Code*</label>
          <input type="text" name="address_postal_code" value={formData.address_postal_code} onChange={handleChange} required />
          {errors.address_postal_code && <p className="error-message">{errors.address_postal_code}</p>}

          <label>Country*</label>
          <select name="address_country" value={formData.address_country} onChange={handleChange} required>
            <option value="" disabled>Select a Country</option>
            {countries.map((country) => (
                <option key={country.code} value={country.code}>{country.name} ({country.code})</option>
            ))}
          </select>
          {errors.address_country && <p className="error-message">{errors.address_country}</p>}

          <label>SSN*</label>
          <input type="password" name="document_ssn" placeholder="9 digits (no dashes)" maxLength="9" value={formData.document_ssn} onChange={handleChange} required />
          {errors.document_ssn && <p className="error-message">{errors.document_ssn}</p>}

          <label>Email Address*</label>
          <input type="email" name="email_address" value={formData.email_address} onChange={handleChange} required />
          {errors.email_address && <p className="error-message">{errors.email_address}</p>}

          <label>Birth Date*</label>
          <input type="date" name="birth_date" max={new Date().toISOString().substring(0,10)} value={formData.birth_date} onChange={handleChange} required />
          {errors.birth_date && <p className="error-message">{errors.birth_date}</p>}

          <button type="submit">Next</button>
        </form>

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title} message={modalContent.message} confirmAction={modalContent.confirmAction} />
      </div>
    </div>
  );
};

export default Application;
