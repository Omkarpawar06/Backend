import express from 'express';
import {HandleLogin , HandleSignup} from '../Controllers/user.controller.js';

const router = express.Router();

router.post('/login', HandleLogin);
router.post('/signup', HandleSignup);

export default router;