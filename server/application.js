// application.js
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/pawfect', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected for applications');
  })
  .catch((error) => {
    console.error('MongoDB connection failed for applications:', error);
  });

const applicationSchema = new mongoose.Schema({
  pet: String,
  applicantName: String,
  applicantEmail: String,
  applicantMessage: String,
});

const Application = mongoose.model('applications', applicationSchema);

module.exports = Application;
