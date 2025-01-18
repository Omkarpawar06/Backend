import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from "dotenv";
import useRoute  from "./Route/user.route.js"
import Appointmentroute  from "./Route/appointment.route.js";
import Adminroute from "./Route/Admin.route.js";   

const app = express();

// Middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 4002;
const MONGO_URI = process.env.MongoDBURI;

// connect to mongo db
mongoose.connect(MONGO_URI, { useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/user',useRoute)
app.use('/Appointment',Appointmentroute)
app.use('/Admin',Adminroute)

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT} `);
})