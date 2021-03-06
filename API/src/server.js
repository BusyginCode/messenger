﻿require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("src/helpers/jwt");
const { socketHandler } = require("src/helpers/socket");
const errorHandler = require("src/helpers/error-handler");
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/static", express.static(path.join(__dirname, "../public")));

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use("/users", require("src/users/users.controller"));
app.use("/messages", require("src/messages/messages.controller"));

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;

server.listen(port, function() {
  console.log("Server listening on port " + port);
});

socketHandler(io);
