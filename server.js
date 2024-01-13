const express = require('express');
const path = require('path');
const { autoMailApp } = require('./src/app');

const app = express();
const port = 7000;

//GET '/' Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

//Listen Port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Run the function on start
autoMailApp();

//Run at random intervals of 45 to 120 seconds
setInterval(autoMailApp, (Math.random() * (120 - 45 + 1) + 45) * 1000);
