import express from 'express'
import { userAuth } from '../controllers/userController.js'
const router = express.Router()

router.post('/auth', userAuth)

export default router