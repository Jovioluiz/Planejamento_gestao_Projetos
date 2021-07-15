const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    authSource: 'admin',
});

app.listen(3000);
