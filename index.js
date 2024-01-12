const express = require('express');
// const { getUnrepliedMessages } = require('./controllers/messageController');
const { authorize } = require('./controllers/authController');

const app = express();
const port = 7000;

app.get("/", (req, res) => res.send("This is backend for auto gmail"))

app.get("/mail", (req, res) => {
    authorize();
    res.send("Auto Mail Enabled");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

