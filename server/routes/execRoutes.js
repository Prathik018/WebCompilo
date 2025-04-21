const router = require('express').Router();
const { executeCode } = require('../controllers/execController');

router.post('/', executeCode);

module.exports = router;
