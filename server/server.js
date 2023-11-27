const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { collection, Application } = require('./mongo');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Check if the server is running
app.get('/', cors(), (req, res) => {
  res.send('Server is running!');
});

// Login endpoint
app.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json('fail');
  }
});

// Endpoint to handle adoption applications
app.post('/apply', async (req, res) => {
  const { pet, applicantName, applicantEmail, applicantMessage } = req.body;

  const applicationData = {
    pet,
    applicantName,
    applicantEmail,
    applicantMessage,
  };

  try {
    const newApplication = new Application(applicationData);
    await newApplication.save();
    res.json('applicationSubmitted');
  } catch (error) {
    console.error(error);
    res.status(500).json('applicationFailed');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
