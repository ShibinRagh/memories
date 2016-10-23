var express = require('express');
var router = express.Router();

const adminApi = require('../controllers/adminApi.js');

router.post('/login', adminApi.login );
router.post('/register', adminApi.register );
router.get('/dashboard', adminApi.dashboard );


module.exports = router;
