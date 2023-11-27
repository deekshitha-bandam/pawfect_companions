// PetDetails.js
import React from 'react';

const PetDetails = ({ pet }) => {
  return (
    <div>
      <h2>{pet.id}</h2>
      <p>Breed: {pet.breeds.primary}</p>
      <p>Age: {pet.age}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PetDetails;
