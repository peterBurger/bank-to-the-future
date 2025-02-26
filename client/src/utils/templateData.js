/* Home > FeaturesSection *****************************************************/
const features = [
  {
    emoji: <i class="fa-solid fa-piggy-bank"></i>,
    title: 'Flux Savings Account',
    description: 'Your money, compounding at gigawatts of interest.',
    linkText: 'Start Saving Today >',
  },
  {
    emoji: <i class="fa-solid fa-fingerprint"></i>,
    title: 'DeLorean Fraud Detection',
    description: 'Biff\'s scams don\'t stand a chance—our AI sees them before they even happen.',
    linkText: 'Experience Unmatched Security >',
  },
  {
    emoji: <i class="fa-solid fa-person-snowboarding"></i>,
    title: 'Hoverboard Transactions',
    description: 'Frictionless e-payments that glide like Marty McFly!',
    linkText: 'Send Money To a Friend >',
  },
];

/* Application ****************************************************************/
const usStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
];

const countries = [
  { code: 'US', name: 'United States' },
];

const outcomeMessages = {
  'Approved': <div><p><i className="fa-solid fa-circle-check outcome-icon"></i></p><p className="outcome-message">Great Scott! Your application is approved!</p></div>,
  'Manual Review': <div><p><i className="fa-solid fa-magnifying-glass outcome-icon"></i></p><p className="outcome-message">Hmm. Looks like your application needs a closer review. I'll get back to you!</p></div>,
  'Denied': <div><p><i className="fa-solid fa-triangle-exclamation outcome-icon"></i></p><p className="outcome-message">Sorry! According to my calculations, your application isnn't approved at this time.</p></div>,
};

/* MISC ***********************************************************************/
const snippets = {
  sending: 'Sending...',
};


export { usStates, countries, features, outcomeMessages, snippets};
