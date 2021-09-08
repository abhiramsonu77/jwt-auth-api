var express = require('express');

var router = express.Router();
const controller = require('./item.controller')

router.post('/', controller.createItem);
// GET All items listing.
router.get('/', controller.getAllItems);

//Get individual items

router.get('/:id', controller.getItem);

//Create a new Item



//Update item

router.patch('/:id', controller.updateItem);

//Delete item

router.delete('/:id', controller.deleteItem);

module.exports = router;
