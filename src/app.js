const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const connection = mongoose.connect('mongodb+srv://heitor:heitor@cluster0-joi8h.mongodb.net/omini?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);