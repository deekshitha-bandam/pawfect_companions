// AdoptionForm.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AdoptionForm = () => {
  const location = useLocation();
  const applicationDetails = location.state && location.state.applicationDetails;
  const navigate = useNavigate();

  const handleOkClick = () => {
    // Redirect to the home page
    navigate('/homelog');
  };

  return (
    <div>
      <h2>Adoption Application Details</h2>
      {applicationDetails ? (
        <div>
            <p> These are your appliation details</p>
          <p>
            <strong>Name:</strong> {applicationDetails.applicantName}
          </p>
          <p>
            <strong>Email:</strong> {applicationDetails.applicantEmail}
          </p>
          <p>
            <strong>Message:</strong> {applicationDetails.applicantMessage}
          </p>
          <p>You will be soon informed about the adoption. Thank you for using our website.Explore more in our page.</p>
        </div>
      ) : (
        <p>No application details found.</p>
      )}

      {/* OK button to redirect to the home page */}
      <button onClick={handleOkClick}>OK</button>
    </div>
  );
};

export default AdoptionForm;
