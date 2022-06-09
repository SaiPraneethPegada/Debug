const express = require('express');
// const router = express.Router();

const app = express();

// const { signUp, signIn } = require("../services/auth.service");
const {signUp} = require("../services/auth.service");
const {signIn} = require("../services/auth.service");

app.post("/signup", signUp);
app.post("/signin", signIn);

module.exports = app;