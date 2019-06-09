﻿const express = require("express");
const router = express.Router();
const userService = require("./user.service");

// routes
router.post("/login", authenticate);
router.post("/register", register);
router.get("/contacts", getContacts);
router.post("/addContact", addContact);
router.post("/deleteContact", removeContact);
router.get("/", getAll);
router.get("/me", getCurrent);
router.get("/:id", getById);
router.get("/search/:nickname", searchByNickname);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function authenticate(req, res, next) {
  userService
    .authenticate(req.body)
    .then(user =>
      user
        ? res.json(user)
        : res.status(400).json({ message: "Username or password is incorrect" })
    )
    .catch(err => next(err));
}

function register(req, res, next) {
  userService
    .create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function addContact(req, res, next) {
  userService
    .addContact(req.body)
    .then(contact => res.json(contact))
    .catch(err => next(err));
}

function removeContact(req, res, next) {
  userService
    .removeContact(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getContacts(req, res, next) {
  userService
    .getContacts(req.user.sub)
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  userService
    .getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  userService
    .getById(req.user.sub)
    .then(user => (user ? res.json(user) : res.sendStatus(404)))
    .catch(err => next(err));
}

function searchByNickname(req, res, next) {
  userService
    .searchByNickname(req.params.nickname)
    .then(users => (users ? res.json({ users }) : res.sendStatus(404)))
    .catch(err => next(err));
}

function getById(req, res, next) {
  userService
    .getById(req.params.id)
    .then(user => (user ? res.json(user) : res.sendStatus(404)))
    .catch(err => next(err));
}

function update(req, res, next) {
  userService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  userService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}
