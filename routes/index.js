var express = require('express');
var router = express.Router();
const { postCase, getcase } = require('../controllers/caseContoller');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', getcase);
router.post('/api/report', postCase);

module.exports = router;
