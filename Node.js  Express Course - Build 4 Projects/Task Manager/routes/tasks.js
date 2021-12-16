const express = require('express');
const router = express.Router();

const { 
    getAllTasks,
    postTask,
    getTask,
    patchTask,
    deleteTask,
    putTask
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(postTask);
router.route('/:id').get(getTask).patch(patchTask).delete(deleteTask).put(putTask);

module.exports = router;