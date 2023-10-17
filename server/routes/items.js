const express = require('express')
const router = express.Router()

const items = [
	{id: 1, name: "Item 1"},
	{id: 2, name: "Item 2"},
	{id: 3, name: "Item 3"},
];
// GET request to fetch all items
router.get("/", (req, res) => {
	res.json(items);
});

// GET request to fetch a specific item by ID
router.get("/:id", (req, res) => {
    console.log(req.params);
	const itemId = parseInt(req.params.id);
	const item = items.find((item) => item.id === itemId);

	if (!item) {
		return res.status(404).json({message: "Item not found"});
	}

	res.json(item);
});

// PUT request to update an item by ID
router.put("/:id", (req, res) => {
	const itemId = parseInt(req.params.id);
	const updatedItem = req.body;

	const index = items.findIndex((item) => item.id === itemId);

	if (index === -1) {
		return res.status(404).json({message: "Item not found"});
	}

	items[index] = updatedItem;
	res.json({message: "Item updated", item: updatedItem});
});

// DELETE request to remove an item by ID
router.delete("/:id", (req, res) => {
	const itemId = parseInt(req.params.id);
	const index = items.findIndex((item) => item.id === itemId);

	if (index === -1) {
		return res.status(404).json({message: "Item not found"});
	}

	items.splice(index, 1);
	res.json({message: "Item deleted"});
});

module.exports = router;
