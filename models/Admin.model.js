import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  AdminId :{type:String},
  name: { type: String, required: true },
  email: { type: String},
  password: { type: String }
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;