const express = require('express')
const app = express()
const port = 3000

const rp = require('request-promise');
const $ = require('cheerio');

const url = 'https://www.afiniti.com/';

app.get('/', (req, res) => {
    rp(url)
        .then(function(html) {
            //success!
            console.log($('a', html).length);
            console.log($('a', html));
        }).catch(function(err) {
            //handle error
        });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});