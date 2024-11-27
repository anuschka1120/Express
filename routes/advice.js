var express = require('express');
var router = express.Router();
const request = require('request');

// ランダムなアドバイスを取得するルート
router.get('/', (req, res) => {
    const url = 'https://api.adviceslip.com/advice';

    request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const adviceData = JSON.parse(body);
            res.json(adviceData); // JSON形式でアドバイスを返す
        } else {
            res.status(response.statusCode).send('Failed to fetch advice');
        }
    });
});

module.exports = router;