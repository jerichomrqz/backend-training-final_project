const mongoose = require('mongoose');
const Toy = require('../models/toy');

// Open the Connection
mongoose.connect('mongodb://127.0.0.1:27017/toyApp')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

// Created instance of the data, then save
const seedDb  = async() => {
    const toys = new Toy({
        name: "Gwen",
        category: "Photocard",
        quantity: 1,
        price: 300,
        description: "PC"
    })
    await toys.save();
}

seedDb().then(() =>{
    mongoose.connection.close();
})