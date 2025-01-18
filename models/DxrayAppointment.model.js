import mongoose  from "mongoose";

const dxraySchema = new mongoose.Schema({
    userId:String,
    name: String,
    email: String,
    contactNo: String,
    testType:String,
    date: String,
    time: String,
})

const DGAppointment = mongoose.model('DGAppointment', dxraySchema)

export default DGAppointment;