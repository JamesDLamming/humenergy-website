const { json } = require('express');
// const fetch = import('node-fetch');
const { sendProgramFormEmail } = require('./programFormEmailController');
const { accessSpreadsheet } = require('../services/googleSheetsService');

async function saveFormData(req, res) {
  const clientIP = req.ip; // or use req.headers['x-forwarded-for'] if behind a proxy
  const myIP = '::1'; // Replace with your IP address; currently setup for avoiding local host submission requirements
  if (clientIP === myIP) {
    console.log('Form submission from my IP, not saving data.');
    res.status(200).json('Not saved due to IP match');
  } else {
    try {
      const doc = await accessSpreadsheet();
      const sheet = doc.sheetsByTitle['formData'];
      const response = await sheet.addRow(req.body);

      const emailData = {
        email: req.body.email,
        message: JSON.stringify(req.body), // Customize as needed
      };

      // Send the notification email directly (no public HTTP endpoint)
      try {
        await sendProgramFormEmail(emailData);
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }

      res.json(response.data); // Send back the response data to the client
    } catch (error) {
      console.error('Error in saveFormData:', error);
      res.status(500).json({ error: error.message }); // Send detailed error message
    }
  }
}

module.exports = { saveFormData };
