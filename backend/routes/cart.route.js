const express = require('express');
const cartRoute = express.Router();
let CartModel = require('../models/Cart');

// Create a new cart item
cartRoute.route('/insert-item').post(async (req, res, next) => {
  try {
    const data = await CartModel.create(req.body);
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Get all cart items
cartRoute.route('/').get(async (req, res, next) => {
  try {
    const data = await CartModel.find();
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Get a specific cart item by ID
cartRoute.route('/:id').get(async (req, res, next) => {
    try {
      const data = await CartModel.findById(req.params.id);
      res.json(data);
    } catch (error) {
      return next(error);
    }
  });


// Update a cart item
cartRoute.route('/update-item/:id').put(async (req, res, next) => {
  try {
    const data = await CartModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(data);
    console.log('Cart successfully updated!');
  } catch (error) {
    return next(error);
  }
});

// Delete
cartRoute.route('/delete-item/:id').delete(async (req, res, next) => {
  try {
    const data = await CartModel.findByIdAndDelete(req.params.id);  // Use findByIdAndDelete
    if (!data) {
      return res.status(404).json({ msg: "Cart item not found" });
    }
    res.status(200).json({ msg: "Cart item deleted successfully", data });
  } catch (error) {
    return next(error);
  }
});

// Delete all
cartRoute.route('/delete-all/').delete(async (req, res, next) => {
    try {
      const data = await CartModel.deleteMany({});  // Use findByIdAndDelete
      if (!data) {
        return res.status(404).json({ msg: "not found" });
      }
      res.status(200).json({ msg: "Cart items deleted successfully", data });
    } catch (error) {
      return next(error);
    }
  });

module.exports = cartRoute;