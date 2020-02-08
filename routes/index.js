var express = require('express');
var router = express.Router();
const controllers = require('../controllers/caseContoller');
const upload = require('../middlewares/fileUpload');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', controllers.getcase);
router.post('/api/report', upload.array('caseImages', 5), controllers.postCase);

router.get('/const', function(req, res, next) {
  res.render('const', { title: 'Express' });
});

module.exports = router;
 