// ApplicationForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  submitMessage: {
    marginTop: '15px',
    color: '#4caf50',
    fontWeight: 'bold',
  },
};

const ApplicationForm = ({ petId }) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantMessage, setApplicantMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
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
        firstName,
        lastName,
        city,
        state,
      });

      setSubmitMessage(response.data.message);
      const applicationDetails = {
        applicantName,
        applicantEmail,
        applicantMessage,
        firstName,
        lastName,
        city,
        state,
      };

      // Redirect to AdoptionForm page and pass application details in the state
      navigate('/adoptionform', { state: { applicationDetails } });
    } catch (error) {
      setSubmitMessage('Failed to submit application');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Adoption Application Form</h2>
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <label style={styles.label}>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Your Name:
          <input
            type="text"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Your Email:
          <input
            type="email"
            value={applicantEmail}
            onChange={(e) => setApplicantEmail(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Message to Adoption Center:
          <textarea
            value={applicantMessage}
            onChange={(e) => setApplicantMessage(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          Submit Application
        </button>
      </form>

      {submitMessage && <p style={styles.submitMessage}>{submitMessage}</p>}
    </div>
  );
};

export default ApplicationForm;
