import express from 'express';
const router = express.Router();
import {
  userAuth,
  userLogout,
  userRegister,
  getUserProfile,
  updateUserProfile
} from '../controllers/userController.js';

router.post('/', userRegister);
router.post('/auth', userAuth);
router.post('/logout', userLogout)
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router;
