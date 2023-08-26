import express from 'express'
import { userAuth, userLogout, userRegister, getUserProfile, updateUserProfile } from '../controllers/userController.js'
const router = express.Router()

router.post('/auth', userAuth)

export default router