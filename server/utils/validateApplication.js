const validateStateCode = (state) => /^[A-Z]{2}$/.test(state);
const validatePostalCode = (zip) => /^\d{5}(\d{4})?$/.test(zip);
const validateSSN = (ssn) => /^\d{9}$/.test(ssn);
const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
const validateDate = (date) => {
  if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date)) {
    return false;
  }
  // is not a fake date (e.g. feb 30)
  const parsedDate = new Date(date);

  return parsedDate instanceof Date && !isNaN(parsedDate.getTime()) && date === parsedDate.toISOString().split('T')[0];
};

const validateApplication = (data) => {
  let errors = {};

  if (!data.name_first) errors.name_first = 'First Name is required';
  if (!data.name_last) errors.name_last = 'Last Name is required';
  if (!data.address_line_1) errors.address_line_1 = 'Address Line 1 is required';
  if (!data.address_city) errors.address_city = 'City is required';
  if (!data.address_state || !validateStateCode(data.address_state)) {
    errors.address_state = 'State must be a valid two-letter code (e.g. NY)';
  }
  if (!data.address_postal_code || !validatePostalCode(data.address_postal_code)) {
    errors.address_postal_code = 'Invalid ZIP/Postal Code';
  }
  if (data.address_country !== 'US') {
    errors.address_country = 'Country must be \'US\'';
  }
  if (!data.document_ssn || !validateSSN(data.document_ssn)) {
    errors.document_ssn = 'SSN must be 9 digits (no dashes)';
  }
  if (!data.email_address || !validateEmail(data.email_address)) {
    errors.email_address = 'Invalid email format';
  }
  if (!data.birth_date || !validateDate(data.birth_date)) {
    errors.birth_date = 'Date of Birth must be in YYYY-MM-DD format';
  }

  return errors;
};

module.exports = { validateApplication };
