var router = require("express").Router();
var fetchController = require("../../controlla/fetch");

router.get("/", fetchController.scrapeHeadlines);

module.exports = router;