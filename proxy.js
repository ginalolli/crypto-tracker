
const express = require('express');
const request = require('request');
const path = require('path');
const app = express();

const API_KEY = '3e822602-308a-4195-8b86-8e22423c7885';
const API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10&convert=USD';

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle the /crypto endpoint for the API requests
app.get('/crypto', (req, res) => {
    request({
        url: API_URL,
        headers: {
            'X-CMC_PRO_API_KEY': API_KEY
        }
    }, (error, response, body) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(body);
        }
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Proxy server running on http://localhost:3000');
});

