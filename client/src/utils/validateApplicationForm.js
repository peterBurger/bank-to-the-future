export const validateField = (name, value) => {
  let error = '';

  switch (name) {
    case 'address_state':
      error = /^[A-Z]{2}$/.test(value) ? '' : 'State must be a valid two-letter code (e.g. NY)';
      break;
    case 'address_postal_code':
      error = /^\d{5}(\d{4})?$/.test(value) ? '' : 'Invalid ZIP/Postal Code';
      break;
    case 'address_country':
      error = value === 'US' ? '' : 'Country must be \'US\'';
      break;
    case 'document_ssn':
      error = /^\d{9}$/.test(value) ? '' : 'SSN must be 9 digits (no dashes)';
      break;
    case 'email_address':
      error = /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email format';
      break;
    case 'birth_date':
      if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(value)) {
        error = 'Invalid date';
      } else {
        // is not a fake date (e.g. feb 30)
        const parsedDate = new Date(value);

        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()) && value === parsedDate.toISOString().split('T')[0])) {
          error = 'Invalid date';
        }
      }
      break;
    default:
      break;
  }

  return error;
};

export const isValidForm = (formData, errors) => {
  const requiredFields = ['name_first', 'name_last', 'address_line_1', 'address_city', 'address_state', 'address_postal_code', 'address_country', 'document_ssn', 'email_address', 'birth_date'];

  for (let field of requiredFields) {
    if (!formData[field]) return false;
  }

  return Object.values(errors).every((error) => !error);
};
