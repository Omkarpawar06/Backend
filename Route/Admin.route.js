import express from 'express';
import { HandleAdmin , HandleAdminSignup , getAdmins } from '../Controllers/admin.controller.js';

const router = express.Router();

router.post('/login', HandleAdmin);
router.post('/signup',HandleAdminSignup);
router.get('/getAdmins',getAdmins);

export default router;