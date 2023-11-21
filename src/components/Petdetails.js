// src/components/PetDetails.js
import React, { useState } from 'react';
import ApplicationForm from './ApplicationForm';

const PetDetails = ({ pet }) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApplyClick = () => {
    // You can add additional logic here, such as checking if the user is logged in
    setShowApplicationForm(true);
  };

  return (
    <div>
      <h2>{pet.name}</h2>
      <img src={pet.image} alt={pet.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age} years</p>
      {/* Add more details about the pet */}
      <button onClick={handleApplyClick}>Apply</button>

      {/* Display the application form when "Apply" is clicked */}
      {showApplicationForm && <ApplicationForm pet={pet} />}
    </div>
  );
};

export default PetDetails;
