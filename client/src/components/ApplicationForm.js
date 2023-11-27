import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = ({ petId }) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantMessage, setApplicantMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const navigate = useNavigate();
    const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send application data to the server
      const response = await axios.post('http://localhost:8000/apply', {
        petId,
        applicantName,
        applicantEmail,
        applicantMessage,
      });

      setSubmitMessage(response.data.message);
      const applicationDetails = {
        applicantName,
        applicantEmail,
        applicantMessage,
      };
  
      // Redirect to AdoptionForm page and pass application details in the state
      navigate('/adoptionform', { state: { applicationDetails } });
    } catch (error) {
      setSubmitMessage('Failed to submit application');
    }
  };

  return (
    <div>
      <h2>Adoption Application Form</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Include other form fields as needed */}
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

      {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
};

export default ApplicationForm;
