// AddDogForm.js
import React, { useState } from 'react';

const AddDogForm = ({ onAddDog }) => {
  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogAge, setDogAge] = useState('');

  const handleAddDog = () => {
    // Validate the form fields
    if (!dogName || !dogBreed || !dogAge) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new dog object
    const newDog = {
      id: Math.floor(Math.random() * 1000), // Generate a temporary ID
      name: dogName,
      breed: dogBreed,
      age: dogAge,
      // Add more fields as needed
    };

    // Call the provided callback function to add the dog
    onAddDog(newDog);

    // Reset the form fields
    setDogName('');
    setDogBreed('');
    setDogAge('');
  };

  return (
    <div>
      <h2>Add a Dog</h2>
      <form>
        <label>
          Dog Name:
          <input type="text" value={dogName} onChange={(e) => setDogName(e.target.value)} />
        </label>
        <br />
        <label>
          Dog Breed:
          <input type="text" value={dogBreed} onChange={(e) => setDogBreed(e.target.value)} />
        </label>
        <br />
        <label>
          Dog Age:
          <input type="text" value={dogAge} onChange={(e) => setDogAge(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAddDog}>
          Add Dog
        </button>
      </form>
    </div>
  );
};

export default AddDogForm;
