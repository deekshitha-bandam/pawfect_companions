// Dog.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PetDetails from './Petdetails';

const Dog = () => {
  const [selectedDog, setSelectedDog] = useState(null);
  const navigate = useNavigate();

  const dogsData = [
    { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: 2, image: 'golden-retriever.jpg' },
    { id: 2, name: 'Charlie', breed: 'Labrador', age: 3, image: 'labrador.jpg' },
    // Add more dog data as needed
  ];

  const handleDogClick = (dog) => {
    setSelectedDog(dog);

    // Check if the user is logged in (you can use your authentication logic here)
    const isLoggedIn = true; // Replace with your authentication check
    if (!isLoggedIn) {
      // If not logged in, redirect to the login page
      navigate('/login');
    }
  };

  return (
    <div>
      <h2>Available Dogs for Adoption</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dogsData.map((dog) => (
          <div key={dog.id} style={{ width: '300px', margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <img src={dog.image} alt={dog.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{dog.name}</h3>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age} years</p>
            <Link to={`/pet/${dog.id}`}>See Details</Link>
            <button onClick={() => handleDogClick(dog)}>Apply</button>
          </div>
        ))}
      </div>

      {/* Display PetDetails when a dog is selected */}
      {selectedDog && (
        <div>
          <PetDetails pet={selectedDog} />
        </div>
      )}
    </div>
  );
};

export default Dog;
