const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.post('/create-user', controller.addUser);
router.post('/update-user', controller.updateUser);
router.post('/delete-user', controller.deleteUser);

module.exports = router;