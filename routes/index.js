var express = require('express');
var router = express.Router();
const constController = require('../controllers/constController')


router.post('/api/post/single-constitution',  constController.postConstitution)

router.get('/api/get/all-constitution',  constController.getAllConstitution)

router.post('/api/get/single-constitution',  constController.getSingleConstitution)

const controllers = require('../controllers/caseContoller');
const upload = require('../middlewares/fileUpload');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', controllers.getcase);
router.post('/api/report', upload.array('caseImages', 5), controllers.postCase);


router.get('/post', function(req, res, next) {
  res.render('post', { title: 'Express' });
});

router.get('/hot', function(req, res, next) {
  res.render('hot', { title: 'Express' });
});


module.exports = router;
 