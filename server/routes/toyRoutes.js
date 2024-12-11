const express = require('express');
const router = express.Router();
const toyController = require('../controllers/toyController');

// Define all routes

// New Toy Form - CREATE
router.get('/toys/new', toyController.NewToyForm);

// Add a new toy - CREATE
router.post('/toys', toyController.addToy);

// List all toys/Homepage - READ
router.get('/toys', toyController.listToys);

// View Specific Toy/Homepage - READ
router.get('/toys/:id', toyController.viewToy);

// Edit Toy Form - UPDATE
router.get('/toys/:id/edit', toyController.editToy);

// Update Toy - UPDATE
router.patch('/toys/:id/edit', toyController.updateToy);

// Delete Form - DELETE
router.get('/toys/:id/delete', toyController.deleteConfirmation);

// Delete Toy - DELETE
router.delete('/toys/:id', toyController.deleteToy)

module.exports = router;
