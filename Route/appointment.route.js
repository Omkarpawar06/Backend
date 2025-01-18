import express from 'express'
import { setPathAppointment , setDXrayAppointment , setECGAppointment ,getDGAppointments,getPathAppointments, getECGAppointments} from '../Controllers/appointment.controller.js';
const router = express.Router()

router.post('/bookPathAppointment',setPathAppointment)
router.post('/bookDXrayAppointment',setDXrayAppointment)
router.post('/bookECGAppointment',setECGAppointment)
router.get('/getAppointments',getPathAppointments)
router.get('/getDGAppointments',getDGAppointments)
router.get('/getECGAppointments',getECGAppointments)


export default router;