var express = require('express');
var router = express.Router();
const constController = require('../controllers/constController')


router.post('/api/post/single-constitution',  constController.postConstitution)

router.get('/api/get/all-constitution',  constController.getAllConstitution)

router.post('/api/get/single-constitution',  constController.getSingleConstitution)



module.exports = router;
