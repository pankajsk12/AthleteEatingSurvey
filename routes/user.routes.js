const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');


router.post('/signup', userController.signUp);
router.post('/login', userController.login);
// router.post('/logout', userController.logout);
// // router.put('/:id', photoUpload.single('photo'), doctorController.update);
// // router.delete('/:id', doctorController.delete);

// router.get('/controlPanel', userController.getControlPanel)
// router.get('/waitTime', userController.getWaitTime)

module.exports = router;