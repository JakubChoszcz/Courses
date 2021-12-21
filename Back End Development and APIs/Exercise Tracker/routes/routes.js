const express = require('express');
const router = express.Router();
const {
    getUsers,
    postUser,
    postExcercise,
    getLog
} = require('../controllers/controllers');

router.route('/').get(getUsers).post(postUser);
router.route('/:_id/exercises').post(postExcercise);
router.route('/:_id/logs').get(getLog);

module.exports = router;