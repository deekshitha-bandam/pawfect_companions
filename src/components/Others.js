// Other.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PetDetails from './Petdetails';

const Other = () => {
  const [selectedOther, setSelectedOther] = useState(null);
  const navigate = useNavigate();

  const othersData = [
    { id: 1, name: 'Nibbles', type: 'Hamster', age: 1, image: 'hamster.jpg' },
    { id: 2, name: 'Sparky', type: 'Small Horse', age: 3, image: 'small-horse.jpg' },
    // Add more other pets data as needed
  ];

  const handleOtherClick = (other) => {
    setSelectedOther(other);

    // Check if the user is logged in (you can use your authentication logic here)
    const isLoggedIn = true; // Replace with your authentication check
    if (!isLoggedIn) {
      // If not logged in, redirect to the login page
      navigate('/login');
    }
  };

  return (
    <div>
      <h2>Other Pets Available for Adoption</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {othersData.map((other) => (
          <div key={other.id} style={{ width: '300px', margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <img src={other.image} alt={other.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{other.name}</h3>
            <p>Type: {other.type}</p>
            <p>Age: {other.age} years</p>
            <Link to={`/pet/${other.id}`}>See Details</Link>
            <button onClick={() => handleOtherClick(other)}>Apply</button>
          </div>
        ))}
      </div>

      {/* Display PetDetails when an other pet is selected */}
      {selectedOther && (
        <div>
          <PetDetails pet={selectedOther} />
        </div>
      )}
    </div>
  );
};

export default Other;
