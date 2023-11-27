// Others.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OtherPets from './otherpets'; // Import the JSON file
import PetDetails from './Petdetails';

const Others = () => {
  const [selectedOther, setSelectedOther] = useState(null);
  const navigate = useNavigate();

  const othersData = OtherPets; // Use the imported JSON data

  const handleOtherClick = (other) => {
    setSelectedOther(other);
  
    // Check if the user is logged in (you can use your authentication logic here)
    const isLoggedIn = true; // Replace with your authentication check
    if (!isLoggedIn) {
      // If not logged in, redirect to the login page
      navigate('/login');
    } else {
      // If logged in, redirect to the application form page
      navigate('/applicationform');
    }
  };

  return (
    <div>
      <h2>Other Pets Available for Adoption</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {othersData.map((other) => (
          <div key={other.id} style={{ width: '250px', margin: '10px', padding: '20px', border: '1px solid #ccc' }}>
            {/* Assuming that 'photos' is an array of objects, and we're using the first photo */}
            <img src={other.photos[0]?.medium} alt={other.id} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{other.id}</h3>
            <p>Type: {other.type}</p>
            <p>Species: {other.species}</p>
            <p>Age: {other.age}</p>
            {/* Updated Link to use "/others/${other.id}" */}
            <Link to={`/others/${other.id}`}>See Details</Link>
            <button onClick={() => handleOtherClick(other)}>Adopt</button>
          </div>
        ))}
      </div>

      {/* Display PetDetails when an other pet is selected */}
      {selectedOther && (
        <div>
          {/* Pass the selectedOther as a prop to PetDetails */}
          <PetDetails pet={selectedOther} />
        </div>
      )}
    </div>
  );
};

export default Others;
