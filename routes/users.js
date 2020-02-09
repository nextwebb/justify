var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
// /user
router.get("/", userController.home)

module.exports = router;
