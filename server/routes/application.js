const express = require('express');
const { validateApplication } = require('../utils/validateApplication');
const router = express.Router();
require('dotenv').config();

const ALLOY_API_URL = process.env.REACT_APP_ALLOY_API_URL;
const ALLOY_API_USERNAME = process.env.REACT_APP_ALLOY_API_USERNAME;
const ALLOY_API_PASSWORD = process.env.REACT_APP_ALLOY_API_PASSWORD;

router.post('/submit-application', async (req, res) => {
  const errors = validateApplication(req.body);

  if (Object.keys(errors).length > 0) {
    console.error(errors);

    return res.status(400).json({
      error: 'Bad request',
      message: 'Backend form validation failed',
      details: errors,
    });
  }

  try {
    const authHeader = 'Basic ' + Buffer.from(`${ALLOY_API_USERNAME}:${ALLOY_API_PASSWORD}`).toString('base64');

    const response = await fetch(ALLOY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(req.body),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error(responseData);

      return res.status(response.status).json({
        error: responseData?.error?.type || 'API Error',
        message: responseData?.error?.message || 'API Error (see details)',
        details: responseData,
      });
    }

    res.json(responseData);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Error submitting to Alloy API',
      details: error,
    });
  }
});

module.exports = router;
