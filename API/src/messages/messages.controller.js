const express = require("express");
const router = express.Router();
const messagesService = require("./messages.service");

router.get("/:sender/:recipient", getChannelMessages);
router.post("/add", addMessage);

module.exports = router;

function getChannelMessages(req, res, next) {
  messagesService
    .getChannelMessages(req.params.sender, req.params.recipient)
    .then(messages => res.json(messages))
    .catch(err => next(err));
}

function addMessage(req, res, next) {
  messagesService
    .getChannelMessages(req.body)
    .then(messages => res.json(messages))
    .catch(err => next(err));
}
