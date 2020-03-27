const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express(); // http://localhost:3333/

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);
