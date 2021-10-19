const { error } = require("console");
var express = require("express");
require("dotenv").config();
var path = require("path");
var router = express.Router();
const register = require("../../models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


let registerUser = async (req, res, next) => {
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	const user = new register({
		name: req.body.name,
		email: req.body.email,
		password: hashPassword
	});
	try {
		const saveUser = await user.save();
		res.send(saveUser);
	} catch (err) {
		res.status(400).send(err);
	}
};

let loginUser = async (req, res, next) => {
	const user = await register.findOne({ email: req.body.email });
	if (!user) {
		return res.status(400).send("user is not found");
	}
        const validpassword = await bcrypt.compare(req.body.password, user.password);
        if (!validpassword) {
            return res.status(400).send("invalid password");
        }

	const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
	res.json({ token: token });
};

module.exports = { registerUser, loginUser };