// catsdb.js
const mongoose = require('mongoose');

const connectCatsDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/pawfect', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Cats MongoDB connected');
  } catch (error) {
    console.error('Failed to connect to Cats MongoDB', error);
    process.exit(1);
  }
};

const catSchema = new mongoose.Schema({
  // Adjust the schema based on your cat data structure
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = { connectCatsDB, Cat };
