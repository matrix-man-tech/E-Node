import express from 'express';
const router = express.Router();
import asynchandler from '../middleware/asyncHandler.js';
import { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUser,
    getAllUsers,
    getUserById,
    updateUserProfile,
    deleteUser} from '../controllers/userController.js';
import { admin, protect } from '../middleware/authMiddleware.js';


router.route('/').post(registerUser).get(getAllUsers)
router.post('/logout',logoutUser)
router.post('/login',authUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/:id').delete(admin,deleteUser).get(getUserById).put(updateUser)


export default router