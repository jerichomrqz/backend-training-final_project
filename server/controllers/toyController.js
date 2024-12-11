const mongoose = require('mongoose');
const Toy = require('../../models/toy');

// Open the Connection
mongoose.connect('mongodb://127.0.0.1:27017/toyApp')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    });

// New Toy Form - CREATE
exports.NewToyForm = (req, res) => {
    res.render('new');
};

// Add New Toy - CREATE
exports.addToy = async (req, res) => {
    const { name, category, quantity, price, description } = req.body;
    try {
        const newToy = new Toy({ name, category, quantity, price, description });
        await newToy.save();
        res.redirect('/toys?success=Toy item created successfully!');
    } catch (err) {
        console.error("Error Creating Toys:", err);
        res.redirect('/toys/new');
    }
};

// List of all Toys - READ
exports.listToys = async (req, res) => {
    try {
        const toys = await Toy.find({});
        res.render('index', { toys });
    } catch (err) {
        console.error("Error Fetching Toys:", err);
        res.send("Error Loading Toys");
    }
};

// View Specific Toy - READ
exports.viewToy = async (req, res) => {
    try{
        const toy = await Toy.findById(req.params.id);
        res.render('show', {toy});
    } catch (err) {
        console.error("Error showing Toy", err);
        res.send("Error showing toy")
    }
   
}

// Edit Toy Form - UPDATE
exports.editToy = async (req, res) => {
    try{
        const toy = await Toy.findById(req.params.id);
        res.render('edit', {toy});
    } catch (err){
        console.error("Error Editing Toys", err);
        res.redirect('/toys');
    }
}

// Update Toy - UPDATE
exports.updateToy = async (req, res) => {
    const {name, category, quantity, price, description} = req.body;
    try {
        await Toy.findByIdAndUpdate(req.params.id, { name, category, quantity, price, description});
        res.redirect('/toys?success=Toy item updated successfully!');
    } catch (err) {
        console.error("Error Updating Toy", err);
        res.redirect('/toys');
    }
}

// Delete Form - DELETE
exports.deleteConfirmation = async (req, res) => {
    try {
        const toy = await Toy.findById(req.params.id);
        res.render('delete', { toy });
    } catch (err) {
        console.error("Error Deleting Toy", err);
        res.redirect('/toys');
    }
}

// Delete Toy - DELETE
exports.deleteToy = async (req, res) => {
    try {
        await Toy.findByIdAndDelete(req.params.id);
        res.redirect('/toys?success=Toy item deleted successfully!');
    } catch (err){
        console.error("Error Deleting Toy", err);
        res.redirect('/toys');
    }
}
