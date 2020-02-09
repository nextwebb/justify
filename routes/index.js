var express = require('express');
var router = express.Router();
const { getcase,
    postCase,
    oneCase } = require('../controllers/caseContoller');
const upload = require('../middlewares/fileUpload');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/api/cases', getcase);
router.get('/api/cases/:id', oneCase)
router.post('/api/report', upload.array('caseImages', 5), postCase);

module.exports = router;
