const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// Body Parser middleware
app.use(express.json());

// DB config
const db = config.get('mongoURI');

// Connect to mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB connected successfully ... !!!'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));