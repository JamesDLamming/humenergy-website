const emailService = require('../services/emailService');

// Internal only: called from saveFormData, not exposed as a route.
async function sendProgramFormEmail({ email, message }) {
  await emailService.sendEmail({
    from: 'james@jameslamming.com',
    to: 'james@jameslamming.com',
    subject: 'New Program Finder Form Submission',
    text: `Email: ${email}\nMessage: ${message}`,
  });
}

module.exports = { sendProgramFormEmail };
