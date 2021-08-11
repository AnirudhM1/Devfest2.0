// Importing libraries
const express = require('express');
const app = express();
const cors = require('cors');

// Dev dependencies 
if (process.env.NODE_ENV !== 'production') {
	const morgan = require('morgan');
	app.use(morgan('dev'));
	require('dotenv').config();
}

// Config
require('./config/dbconfig');

// Middleware
app.use(cors());

// Home route
app.get('/', (req, res) => {
	res.send('HOME ROUTE');
})


const PORT = process.env.PORT || 8000;
app.listen(PORT ,() => {
    console.log("Connected to port", PORT);
})

