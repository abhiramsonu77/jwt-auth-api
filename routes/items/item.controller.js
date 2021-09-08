const { error } = require("console");
var express = require("express");
var path = require("path");
var router = express.Router();
const items = require("../../models/itemModel");

let createItem = (req, res, next) => {
	const item = new items({
		id: req.body.id,
		itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
	});
	item
        .save()
		.then(() => {
			res.send(item);
		})
		.catch((err) => {
			res.send(err);
		});
};

let getAllItems = async (req, res, next) => {
	try {
		const itemsInfo = await items.find();
		res.send(itemsInfo);
	} catch (error) {
		res.send(error);
	}
};
let getItem = async (req, res, next) => {
	try {
		const id = req.params.itemId;
		const itemsInfo = await items.findOne({ id: id });

		if (!itemsInfo) {
			return res.status(404).send();
		} else {
			res.send(itemsInfo);
		}
	    } catch (error) {
		    res.status(404).send(error);
	    }
};

let updateItem = async (req, res, next) => {
	try {
		const id = req.params.itemId;
		const itemUpdate = await items.findOneAndUpdate({ id: id },
			{
				itemName: req.body.itemName,
                itemPrice: req.body.itemName
			}
		);
		if (!itemUpdate) {
			return res.status(404).send();
		} else {
			res.send(itemUpdate);
		}
	} catch (error) {
		res.send(error);
	}
};
let deleteItem = async (req, res, next) => {
	try {
		const id = req.params.itemId;
		const deleteItem = await items.findOneAndDelete({ id: id });
		console.log(deleteItem);
		if (!id) {
			return res.status(404).send(error);
		} else {
			res.send(deleteItem);
		}
	} catch (error) {
		res.status(404).send(error);
	}
};
module.exports = {
	createItem,
	getAllItems,
	getItem,
	updateItem,
	deleteItem
};
