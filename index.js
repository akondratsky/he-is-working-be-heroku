const express = require('express');
const app = express();
const cors = require('cors');

let serverRunTime = null;
let lastUpdateTime = null;

app.use(cors())

const port = process.env.PORT || 8080;

app.get('/api/get', (req, res) => {
    res.json({
        serverRunTime,
        lastUpdateTime
    });
});

app.get('/api/update', (req, res) => {
    lastUpdateTime = Date.now();
    res.send('ok');
});

app.listen(port, () => {
    console.log('server listened')
    serverRunTime = Date.now();
});
