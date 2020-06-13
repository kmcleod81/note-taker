const express = require('express');
const app = express();
const path = require('path');


const PORT = 8080;

// requiring paths to routes folder
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// middleware that is needed to use POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))