import Admin from "../models/Admin.model.js";
import bcryptjs from 'bcryptjs'

export const HandleAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email: email });
    const isPasswordValid = await bcryptjs.compare(password, admin.password);
    if (!admin || admin.email !== email || !isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password." });
    } else {
      res.status(200).json({ message: "Login successful", _id: admin._id });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server Error." });
  }
};

export const HandleAdminSignup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const latestAdmin = await Admin.findOne().sort({ AdminId: -1 });

    let newAdminId;
    if (latestAdmin && latestAdmin.AdminId) {
      const latestAdminIdNum = parseInt(
        latestAdmin.AdminId.replace("Admin", ""),
        10
      );
      newAdminId = `Admin${String(latestAdminIdNum + 1).padStart(2, "0")}`;
    } else {
      newAdminId = "Admin01";
    }
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists." });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newAdmin = new Admin({
      AdminId: newAdminId,
      name: name,
      email: email,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(201).json({ message: "Signup successful", AdminId: newAdminId });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server Error." });
  }
};

export const getAdmins = async (req,res) => {
  try{
    const admins = await Admin.find()
    res.status(201).json({ message: "Signup successful", admins });
  }catch(error){
    res.status(500).json({ message: "Internal server Error." });
  }
}

