const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const toyRoutes = require('./server/routes/toyRoutes');
const app = express();


// Middleware and Views Setup
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Execute Route
app.use('/', toyRoutes);

// Server
app.listen(3000, () => {
    console.log("Running on port 3000!");
});
