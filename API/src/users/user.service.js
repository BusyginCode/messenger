﻿const config = require("src/config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("src/helpers/db");
const saveAvatar = require("./helpers/saveAvatar");
const User = db.User;

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  searchByNickname,
  getContacts,
  addContact,
  removeContact,
  delete: _delete
};

async function authenticate({ nickname, password }) {
  const user = await User.findOne({ nickname });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      ...userWithoutHash,
      token
    };
  }
}

async function getAll() {
  const all = await User.find().select("-hash");
  return all;
}

async function searchByNickname(nickname) {
  const searched = await User.find({ nickname: new RegExp(nickname, "i") })
    .limit(5)
    .select("-hash");
  return searched;
}

async function getById(id) {
  const user = await User.findById(id).select("-hash");
  return user;
}

async function create(userParam) {
  if (await User.findOne({ nickname: userParam.nickname })) {
    throw new Error('Nickname "' + userParam.nickname + '" is already taken');
  }

  let newUser = { ...userParam };

  newUser.avatar = await saveAvatar(userParam);
  newUser.hash = bcrypt.hashSync(userParam.password, 10);

  const user = new User({ ...newUser });

  await user.save();
  const loginedUser = await authenticate({
    nickname: user.nickname,
    password: userParam.password
  });

  return loginedUser;
}

async function update(id, userParam) {
  const user = await User.findById(id);

  // validate
  if (!user) throw new Error("User not found");
  if (
    user.nickname !== userParam.nickname &&
    (await User.findOne({ nickname: userParam.nickname }))
  ) {
    throw new Error('Nickname "' + userParam.nickname + '" is already taken');
  }

  // hash password if it was entered
  if (userParam.password) {
    userParam.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // copy userParam properties to user
  Object.assign(user, userParam);

  await user.save();
}

async function addContact({ userId, contactId }) {
  const user = await User.findById(userId);
  const contact = await User.findById(contactId);

  // validate
  if (!user) throw new Error("User not found");
  if (!contact) throw new Error("Contact not found");

  user.contacts = [contactId, ...user.contacts.filter(c => c !== contactId)];
  contact.contacts = [userId, ...contact.contacts.filter(c => c !== userId)];

  await user.save();
  await contact.save();

  return contact;
}

async function removeContact({ userId, contactId }) {
  const user = await User.findById(userId);
  const contact = await User.findById(contactId);

  // validate
  if (!user) throw new Error("User not found");
  if (!contact) throw new Error("Contact not found");

  user.contacts = user.contacts.filter(c => c !== contactId);
  contact.contacts = contact.contacts.filter(c => c !== userId);

  await user.save();
  await contact.save();
}

async function getContacts(id) {
  const user = await User.findById(id);
  const contacts = [];
  for (let i of user.contacts) {
    contacts.push(await User.findById(i));
  }

  return contacts;
}

async function _delete(id) {
  await User.findByIdAndRemove(id);
}
