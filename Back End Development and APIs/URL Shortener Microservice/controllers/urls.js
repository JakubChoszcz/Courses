const shortId = require('shortid');
const validUrl = require('valid-url');
const Url = require('../models/Url');

const postUrl = async (req, res) => {
    const { url } = req.body;
    const urlCode = shortId.generate();

    if(!validUrl.isWebUri(url)) {
        res.json({
            error: 'invalid url'
        })
    } else {
        try {
            let findOne = await Url.findOne({ original_url: url });

            if (findOne) {
                res.json({
                    original_url: findOne.original_url,
                    short_url: findOne.short_url
                })
            } else {
                findOne = new Url({
                    original_url: url,
                    short_url: urlCode
                })
                await findOne.save()
                res.json({
                    original_url: findOne.original_url,
                    short_url: findOne.short_url
                })
            }
        } catch (error) {
            console.log(error);
            res.send('Server error...')
        }
    }
};

const getUrl = async (req, res) => {
    try {
        const urlObject = await Url.findOne({ short_url: req.params.short_url })

        if (urlObject) {
            return res.redirect(urlObject.original_url);
        } else {
            return res.send('No URL found...');
        }
    } catch (error) {
        console.log(error);    
    }
};

module.exports = {
    postUrl,
    getUrl
};