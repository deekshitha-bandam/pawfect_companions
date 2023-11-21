// Cat.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PetDetails from './Petdetails';

const Cat = () => {
  const [selectedCat, setSelectedCat] = useState(null);
  const navigate = useNavigate();

  const catsData = [
    { id: 1, name: 'Whiskers', breed: 'Siamese', age: 1, image: 'siamese.jpg' },
    { id: 2, name: 'Mittens', breed: 'Persian', age: 2, image: 'persian.jpg' },
    // Add more cat data as needed
  ];

  const handleCatClick = (cat) => {
    setSelectedCat(cat);

    // Check if the user is logged in (you can use your authentication logic here)
    const isLoggedIn = true; // Replace with your authentication check
    if (!isLoggedIn) {
      // If not logged in, redirect to the login page
      navigate('/login');
    }
  };

  return (
    <div>
      <h2>Available Cats for Adoption</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {catsData.map((cat) => (
          <div key={cat.id} style={{ width: '300px', margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{cat.name}</h3>
            <p>Breed: {cat.breed}</p>
            <p>Age: {cat.age} years</p>
            <Link to={`/pet/${cat.id}`}>See Details</Link>
            <button onClick={() => handleCatClick(cat)}>Apply</button>
          </div>
        ))}
      </div>

      {/* Display PetDetails when a cat is selected */}
      {selectedCat && (
        <div>
          <PetDetails pet={selectedCat} />
        </div>
      )}
    </div>
  );
};

export default Cat;
