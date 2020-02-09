var express = require('express');
var router = express.Router();
const controllers = require('../controllers/caseContoller');
const upload = require('../middlewares/fileUpload');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/api/cases', controllers.getcase);
router.post('/api/report', upload.array('caseImages', 5), controllers.postCase);

module.exports = router;
 