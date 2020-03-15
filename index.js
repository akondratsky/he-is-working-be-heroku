const express = require('express');
const app = express();
const cors = require('cors');

let serverRunTime = null;
let lastUpdateTime = null;

const ips = {};

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

app.get('/api/ipsaver', (req, res) => {
    const { name, ip } = req.query;
    if (ip) {
        ips.name = ip;
        res.send('ok');
        return;
    }
    if (!name) {
        res.status(404);
        res.send();
        return;
    }
    res.send(ips.name);
});

app.listen(port, () => {
    console.log('server listened')
    serverRunTime = Date.now();
});
