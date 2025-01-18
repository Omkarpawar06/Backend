import PathAppointment  from "../models/appointment.model.js";
import DGAppointment from "../models/DxrayAppointment.model.js";
import ECGAppointment from "../models/ECGAppointment.model.js";

export const setPathAppointment = async (req, res)=>{
    const { userId, category,name,contactNo,email, date,time,testType, } = req.body;
    try{
        const existingAppointment = await PathAppointment.findOne({userId, name})
        if(existingAppointment){
            return res.status(400).json({message: "You already have booked this appointment."})
        }

        const reserveSolt = await PathAppointment.findOne({date,time})
        if(reserveSolt){
            return res.status(400).json({message: "This time slot is already booked."})
        }

        const newAppointment = new PathAppointment({
            userId: userId,
            testCategory: category,
            name: name,
            contactNo: contactNo,
            email: email,
            date: date,
            time:time,
            testType:testType
        })

        await newAppointment.save()

        return res.status(200).json({message:'appointment booked.'})
    }catch(error){
        return res.status(400).json({message:'error creating appointment'})
    }
}

export const setDXrayAppointment = async (req,res) => {
    const { userId,name,contactNo,email, date,time,testType, } = req.body;
    try{
        const existingAppointment = await DGAppointment.findOne({userId, name})
        if(existingAppointment){
            return res.status(400).json({message: "You already have booked this appointment."})
        }

        const reserveSolt = await DGAppointment.findOne({date,time})
        if(reserveSolt){
            return res.status(400).json({message: "This time slot is already booked."})
        }

        const newAppointment = new DGAppointment({
            userId: userId,
            name: name,
            contactNo: contactNo,
            email: email,
            date: date,
            time: time,
            testType: testType,
        })

        await newAppointment.save()

        return res.status(200).json({message:'appointment booked.'})
    }catch(error){
        return res.status(400).json({message:'error creating appointment'})
    }

}

export const setECGAppointment = async (req,res) => {
    const { userId,name,contactNo,email, date,time,test } = req.body;
    try{
        const existingAppointment = await ECGAppointment.findOne({userId, name})
        if(existingAppointment){
            return res.status(400).json({message: "You already have booked this appointment."})
        }

        const reserveSolt = await ECGAppointment.findOne({date,time})
        if(reserveSolt){
            return res.status(400).json({message: "This time slot is already booked."})
        }

        const newAppointment = new ECGAppointment({
            userId: userId,
            name: name,
            contactNo: contactNo,
            email: email,
            date: date,
            time: time,
            testType:test
        })

        await newAppointment.save()

        return res.status(200).json({message:'appointment booked.'})
    }catch(error){
        return res.status(400).json({message:'error creating appointment'})
    }

}

// export const getPathAppointments = async (req,res) => {
//     try{
//         const appointment = await PathAppointment.find()
//         res.status(201).json({ message: "Signup successful", appointment });
//       }catch(error){
//         console.log(error)
//         res.status(500).json({ message: "Internal server Error." });
//     }
// }

// export const getDGAppointments = async (req,res) => {
//     try{
//         const appointment = await DGAppointment.find()
//         res.status(201).json({ message: "Signup successful", appointment });
//     }catch(error){
//           console.log(error)
//         res.status(500).json({ message: "Internal server Error." });
//       }
// }

// export const getECGAppointments = async (req,res) => {
//     try{
//         const appointment = await ECGAppointment.find()
//         res.status(201).json({ message: "Signup successful", appointment });
//     }catch(error){
//           console.log(error)
//         res.status(500).json({ message: "Internal server Error." });
//       }
// }

// Pathology Appointments
export const getPathAppointments = async (req, res) => {
    try {
      const { userId } = req.query;
  
      // If userId is present, find appointments for that user; otherwise, return all appointments
      const appointment = userId 
        ? await PathAppointment.find({ userId }) 
        : await PathAppointment.find();
  
      res.status(200).json({ message: "Appointments retrieved successfully", appointment });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error." });
    }
  };
  
  // Diagnostic Appointments
  export const getDGAppointments = async (req, res) => {
    try {
      const { userId } = req.query;
  
      // If userId is present, find appointments for that user; otherwise, return all appointments
      const appointment = userId 
        ? await DGAppointment.find({ userId }) 
        : await DGAppointment.find();
  
      res.status(200).json({ message: "Appointments retrieved successfully", appointment });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error." });
    }
  };
  
  // ECG Appointments
  export const getECGAppointments = async (req, res) => {
    try {
      const { userId } = req.query;
  
      // If userId is present, find appointments for that user; otherwise, return all appointments
      const appointment = userId 
        ? await ECGAppointment.find({ userId }) 
        : await ECGAppointment.find();
  
      res.status(200).json({ message: "Appointments retrieved successfully", appointment });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error." });
    }
  };
  