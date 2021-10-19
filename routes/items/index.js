var express = require('express');

var router = express.Router();
const controller = require('./item.controller')

const authenticate = require("../auth/tokenVerification");

//Create a new Item

router.post('/', authenticate , controller.createItem);
// GET All items listing.
router.get('/', authenticate, controller.getAllItems);

//Get individual items

router.get('/:id', authenticate,controller.getItem);


//Update item

router.patch('/:id', authenticate, controller.updateItem);

//Delete item

router.delete('/:id', authenticate, controller.deleteItem);

module.exports = router;
