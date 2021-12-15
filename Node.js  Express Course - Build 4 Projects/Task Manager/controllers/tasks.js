const getAllTasks = (req, res) => {
    res.send('GET - all items');
};

const postTask = (req, res) => {
    res.json(req.body.name);
};

const getTask = (req, res) => {
    res.json(req.params);
};

const patchTask = (req, res) => {
    res.json(req.params);
};

const deleteTask = (req, res) => {
    res.json(req.params);
};

module.exports = {
    getAllTasks,
    postTask,
    getTask,
    patchTask,
    deleteTask
};