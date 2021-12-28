const getAllJobs = async (req, res) => {
    res.send('get all jobs');
};

const getJob = async (req, res) => {
    res.send('get job');
};

const postJob = async (req, res) => {
    res.send('post job');
};

const patchJob = async (req, res) => {
    res.send('update job');
};

const deleteJob = async (req, res) => {
    res.send('delete job');
};  

module.exports = {
    getAllJobs,
    getJob,
    postJob,
    patchJob,
    deleteJob
};