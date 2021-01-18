var express = require('express');
var router = express.Router();
const user = require('../controller/crud');
const auth=require('../controller/authentication');

/* GET users listing. */
router.post('/',user.adduser );

router.get('/:userid', user.getuser)

router.put('/:userid', user.updateuser);

router.delete('/:userid', user.deleteuser);

router.get('/',user.userlisting);

// login and adding new user
router.post('/login', auth.login);

router.post('/forgetpassword',auth.forgetpassword);

module.exports = router;
