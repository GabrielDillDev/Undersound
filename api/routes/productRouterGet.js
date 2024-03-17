const express = require('express');
const router = express.Router();
const productControllerGet = require('../controllers/productControllerGet.js');

router.get('/produtos', productControllerGet);

module.exports = router;