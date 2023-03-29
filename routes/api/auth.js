const express=require('express');
const router = express.Router();
// const uploadAvatar = require('../../controller/authController/uploadAvatar')
const {registration,login,logout, currentUser,uploadAvatar, verifycontroller,forgotEmail } = require('../../controller/authController/index')
 const auth= require('../../middlewares/auth')
const upload = require('../../middlewares/upload')
 const authenticate = require('../../middlewares/authenticate')

router.post('/users/signup', registration)

router.post('/users/login', login)

router.post('/users/logout',authenticate, logout )

router.get('/users/current',authenticate,currentUser )//':>???? get or post

router.patch('/users/avatars',authenticate, upload.single('avatar'),uploadAvatar)

router.get('/users/verify/:code',verifycontroller)

router.get('/users/forgot_email',forgotEmail )
// router.patch(
//     "/users/avatars",
//     authenticate,
//     upload.single("avatar"),
//     updateAvatar
//   );

module.exports = router;



