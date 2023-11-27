// Dog.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dogs from './output_pet.json'; // Import the JSON file directly
import PetDetails from './Petdetails';


const Dog = () => {
  const [selectedDog, setSelectedDog] = useState(null);
  const navigate = useNavigate();

  const dogsData = Dogs; // Use the imported JSON data

  const handleDogClick = (dog) => {
    setSelectedDog(dog);
  
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
      <h2>Available Dogs for Adoption</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dogsData.map((dog) => (
          <div key={dog.id} style={{ width: '250px', margin: '10px', padding: '20px', border: '1px solid #ccc' }}>
            {/* Assuming that 'photos' is an array of objects, and we're using the first photo */}
            <img src={dog.photos[0]?.medium} alt={dog.id} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{dog.id}</h3>
            <p>Type: {dog.type}</p>
            <p>Species: {dog.species}</p>
            <p>Breed: {dog.breeds}</p>
            <p>Age: {dog.age}</p>
            {/* Updated Link to use "/dogs/${dog.id}" */}
            <Link to={`/dogs/${dog.id}`}>See Details</Link>
            <button onClick={() => handleDogClick(dog)}>Adopt</button>
          </div>
        ))}
      </div>

      {/* Display PetDetails when a dog is selected */}
      {selectedDog && (
        <div>
          {/* Pass the selectedDog as a prop to PetDetails */}
          <PetDetails pet={selectedDog} />
        </div>
      )}
    </div>
  );
};

export default Dog;
