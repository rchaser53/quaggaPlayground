const http = require('http')
const app = require('express')();
const request = require('request')
const fs = require('fs')

const options = {
    url: process.env.URL,
    encoding: null,
    headers: {
        'Authorization': process.env.LINE_TOKEN
    }
};

request(options, (err, res, body) => {
    if (err) throw err;
    console.log(res.statusCode)

    fs.writeFile('./poyo.jpg', res.body,  (err) => {
        if (err) throw err;
    })
})