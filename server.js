const express = require('express');
const path = require('path');
const { autoMail } = require('./src/app');

const app = express();
const port = 7000;


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Run the function on start
autoMail();

//Run at random intervals of 45 to 120 seconds
setInterval(autoMail, (Math.random() * (120 - 45 + 1) + 45) * 1000);
