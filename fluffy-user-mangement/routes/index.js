var express = require('express');
var router = express.Router();
const user = require('../user/crud');

/* GET users listing. */
router.post('/', user.adduser );

router.get('/:user-id', user.getuser );

module.exports = router;
