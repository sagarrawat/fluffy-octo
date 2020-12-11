var express = require('express');
var router = express.Router();
const user = require('../controller/crud');

/* GET users listing. */
router.post('/',user.adduser );

router.get('/:userid', user.getuser)

router.put('/:userid', user.updateuser);

router.delete('/:userid', user.deleteuser);

module.exports = router;
