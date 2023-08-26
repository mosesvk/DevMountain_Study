import express from 'express';
import {
  userAuth,
  userLogout,
  userRegister,
  getUserProfile,
  updateUserProfile
} from '../controllers/userController.js';
const router = express.Router();

router.post('/', userAuth);
router.post('/auth', userAuth);
router.post('/logout', userLogout)
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router;
