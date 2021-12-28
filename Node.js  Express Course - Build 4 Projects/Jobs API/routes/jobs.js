const express = require('express');
const router = express.Router();

const {
    getAllJobs,
    getJob,
    postJob,
    patchJob,
    deleteJob
} = require('../controllers/jobs');

router.route('/').post(postJob).get(getAllJobs);
router.route('/:id').get(getJob).delete(deleteJob).patch(patchJob);

module.exports = router;