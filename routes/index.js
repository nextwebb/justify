var express = require('express');
var router = express.Router();
const passport = require('passport')
const { getcase,
    postCase,
    oneCase,
    deleteCase,
    register,
    login } = require('../controllers/caseContoller');
const upload = require('../middlewares/fileUpload');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//AUTH
router.get('/api/register', register)
router.get('/api/login', login)

// AUTH
// POST
router.post('/register/members', passport.authenticate('local.register', {
    successMessage: 'okay am cool',
    failureMessage: "am not okay bros",
    // successRedirect: '/',
    // failureRedirect: '/register',
    failureFlash: true
}));

router.post('/login/members', passport.authenticate('local.login', {
    // successMessage: 'okay am cool'
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
    
}))



router.get('/api/cases', getcase);
router.get('/api/cases/:id', oneCase)
router.post('/api/report', upload.array('caseImages', 5), postCase);
router.delete('/api/cases/:id', deleteCase);

module.exports = router;
