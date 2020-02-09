var express = require('express');
var router = express.Router();
const constController = require('../controllers/constController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/post/single-constitution',  constController.postConstitution)

router.get('/api/get/all-constitution',  constController.getAllConstitution)

router.get('/api/post/single-constitution:id',  constController.getSingleConstitution)

module.exports = router;
