// Cat.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cats from './output_pet_modified.json'; // Import the modified JSON file
import PetDetails from './Petdetails';

const Cat = () => {
  const [selectedCat, setSelectedCat] = useState(null);
  const navigate = useNavigate();

  const catsData = Cats; // Use the imported modified JSON data

  const handleCatClick = (cat) => {
    setSelectedCat(cat);
  
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
      <h2>Available Cats for Adoption</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {catsData.map((cat) => (
          <div key={cat.id} style={{ width: '250px', margin: '10px', padding: '20px', border: '1px solid #ccc' }}>
            {/* Assuming that 'photos' is an array of objects, and we're using the first photo */}
            <img src={cat.photos[0]?.medium} alt={cat.id} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{cat.id}</h3>
            <p>Type: {cat.type}</p>
            <p>Species: {cat.species}</p>
            <p>Breed: {cat.breeds}</p>
            <p>Age: {cat.age}</p>
            {/* Updated Link to use "/cats/${cat.id}" */}
            <Link to={`/cats/${cat.id}`}>See Details</Link>
            <button onClick={() => handleCatClick(cat)}>Adopt</button>
          </div>
        ))}
      </div>

      {/* Display PetDetails when a cat is selected */}
      {selectedCat && (
        <div>
          {/* Pass the selectedCat as a prop to PetDetails */}
          <PetDetails pet={selectedCat} />
        </div>
      )}
    </div>
  );
};

export default Cat;
