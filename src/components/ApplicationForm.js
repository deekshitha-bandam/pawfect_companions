// src/components/ApplicationForm.js
import React, { useState } from 'react';

const ApplicationForm = ({ pet }) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantMessage, setApplicantMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission, e.g., send data to a server
    console.log('Application submitted:', { pet, applicantName, applicantEmail, applicantMessage });
  };

  return (
    <div>
      <h2>Adoption Application Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Your Email:
          <input
            type="email"
            value={applicantEmail}
            onChange={(e) => setApplicantEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Message to Adoption Center:
          <textarea
            value={applicantMessage}
            onChange={(e) => setApplicantMessage(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
