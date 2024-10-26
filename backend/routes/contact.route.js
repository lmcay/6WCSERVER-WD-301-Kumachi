const express = require("express");
const contactRoute = express.Router();
const ContactModel = require("../models/Contact");

// Create a new contact message
contactRoute.post("/submit", async (req, res, next) => {
  try {
    const newContact = await ContactModel.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
});

// Get all contact messages
contactRoute.get("/", async (req, res, next) => {
  try {
    const messages = await ContactModel.find();
    res.json(messages);
  } catch (error) {
    next(error);
  }
});

// Get a specific contact message by ID
contactRoute.get("/:id", async (req, res, next) => {
  try {
    const message = await ContactModel.findById(req.params.id);
    if (!message) return res.status(404).json({ msg: "Message not found" });
    res.json(message);
  } catch (error) {
    next(error);
  }
});

// Update a contact message by ID
contactRoute.put("/update/:id", async (req, res, next) => {
  try {
    const updatedMessage = await ContactModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMessage)
      return res.status(404).json({ msg: "Message not found" });
    res.json(updatedMessage);
  } catch (error) {
    next(error);
  }
});

// Delete a contact message by ID
contactRoute.delete("/delete/:id", async (req, res, next) => {
  try {
    const deletedMessage = await ContactModel.findByIdAndDelete(req.params.id);
    if (!deletedMessage)
      return res.status(404).json({ msg: "Message not found" });
    res
      .status(200)
      .json({ msg: "Message deleted successfully", deletedMessage });
  } catch (error) {
    next(error);
  }
});

// Delete all contact messages
contactRoute.delete("/delete-all", async (req, res, next) => {
  try {
    const deletedData = await ContactModel.deleteMany({});
    res
      .status(200)
      .json({ msg: "All messages deleted successfully", deletedData });
  } catch (error) {
    next(error);
  }
});

module.exports = contactRoute;
