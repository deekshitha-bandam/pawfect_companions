const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/pawfect")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const applicationSchema = new mongoose.Schema({
  pet: String,
  applicantName: String,
  applicantEmail: String,
  applicantMessage: String,
  firstName: String,
  lastName: String,
  city: String,
  state: String,

  });
  const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'applications',
      },
    ],
    donations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'donations', // Assume you have a donations model
      },
    ],
  });
  
  
const User = mongoose.model('users', userSchema);
  
const Application = mongoose.model('applications', applicationSchema,"applications");
  
const collection = mongoose.model("collection",newSchema,"collections")

module.exports = { collection, Application, User };
