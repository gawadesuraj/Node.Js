const shortid = require("shortid");
const URL = require("../models/url.model.js")
//we use the short id package from the npm.com
const handleGenerateNewShortURL = async (req, res) => {
    const body = req.body;
    if(!body.url)return res.status(400).json({error: "url is required "})
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitedHistory: []
    })
    return res.json({id: shortId})
}

const handleGetAnalytics = async (req, res) => {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId})
    return res.json({
        totalClicks: result.visitedHistory.length,
        analytics: result.visitedHistory
    })
}
module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics
}