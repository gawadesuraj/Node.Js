const express = require("express");
const { handleGenerateNewShortURL, handleGetAnalytics } = require("../controllers/urlController");
const router = express.Router();

router.post('/url', handleGenerateNewShortURL)
router.get('/analytics/:shortId', handleGetAnalytics)

module.exports = router