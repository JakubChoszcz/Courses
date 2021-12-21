const User = require('../models/User')
const Excercise = require('../models/Excercise')

const getUsers = async (req, res) => {
    try {
        const findUsers = await User.find({}).select({  __v: false });

        res.json( findUsers );
    } catch (error) {
        console.log(error);
    }
};

const postUser = async (req, res) => {
    try {
        const createUser = await User.create({ username: req.body.username });

        res.json({
            username: createUser.username,
            _id: createUser._id
        });
    } catch (error) {
        res.send(error.message)
    }
};

const postExcercise = async (req, res) => {
    try {
        const { _id } = req.params;
        const findUser = await User.findById(_id);

        if (findUser) {
            const { description, duration, date } = req.body;

            const newExcercise = {
                username: findUser.username,
                description,
                duration,
                date,
                user_id: findUser._id
            }

            if (!newExcercise.date.match(/^\d{4}-\d{2}-\d{2}$/)) {
                newExcercise.date = new Date().toISOString().slice(0, 10);
            }

            const createExcercise = await Excercise.create(newExcercise)

            res.json({
                username: createExcercise.username,
                description: createExcercise.description,
                duration: createExcercise.duration,
                date: createExcercise.date.toDateString(),
                _id: createExcercise.user_id
            })
        }
    } catch (error) {
        res.send(error._message);
    }
};

const getLog = async (req, res) => {
    try {
        const { _id } = req.params;
        const findUser = await User.findById(_id);

        if (findUser) {
            let queryObject = { 
                user_id: _id, 
                date: { 
                    $gte: new Date('0000-01-01'), 
                    $lt: new Date() 
                } 
            };

            if (req.query.from) {
                queryObject.date.$gte = new Date(req.query.from);
            };

            if (req.query.to) {
                queryObject.date.$lt = new Date(req.query.to);
            };

            const limit = Number(req.query.limit) || 0;

            const result = await Excercise
                .find( queryObject )
                .select({ _id: false, username: false, user_id: false, __v: false })
                .limit(limit);

            let excercises = result;

            excercises.forEach((item, id) => {
                excercises[id] = {
                    description: item.description,
                    duration: item.duration,
                    date: item.date.toDateString()
                }
            });

            res.json({
                _id: findUser._id,
                username: findUser.username,
                count: result.length,
                log: excercises
            })
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getUsers,
    postUser,
    postExcercise,
    getLog
};