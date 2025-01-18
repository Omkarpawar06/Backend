import mongoose from "mongoose";
 
const appoinmentSchema = new mongoose.Schema({
    userId:String,
    name: String,
    email: String,
    contactNo: String,
    testType:String,
    date: String,
    time: String,
    testCategory:String
})

const PathAppointment = mongoose.model('PathAppointment', appoinmentSchema)

export default PathAppointment; 
