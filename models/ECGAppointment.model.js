import mongoose  from "mongoose";

const ECGSchema = new mongoose.Schema({
    userId:String,
    name: String,
    email: String,
    contactNo: String,
    date: String,
    time: String,
})

const ECGAppointment = mongoose.model('ECGAppointment', ECGSchema)

export default ECGAppointment;