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
  });
  
const Application = mongoose.model('applications', applicationSchema,"applications");
  
const collection = mongoose.model("collection",newSchema,"collections")

module.exports={collection,Application}