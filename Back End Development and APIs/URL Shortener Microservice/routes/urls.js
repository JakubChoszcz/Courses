const express = require('express');
const router = express.Router();

const {
    postUrl,
    getUrl
} = require('../controllers/urls')

router.route('/').post(postUrl);
router.route('/:short_url').get(getUrl);

module.exports = router;