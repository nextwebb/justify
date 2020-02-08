var express = require('express');
var router = express.Router();
const { postCase }  = require('../controllers/caseContoller');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', postCase);

module.exports = router;
