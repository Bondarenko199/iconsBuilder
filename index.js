// const http = require('http');
// const dateTime = require('./newModule');
//
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(dateTime.myDateTime);
// }).listen(9000);

import fs from 'fs';
import {h} from './h.js'

const data = (
    h({name: 'p', attributes: {'class': 'test', 'data-test': ''}, children: [
        h({name: 'p', attributes: {'class': 'test', 'data-test': ''}, children: [
            h({name: 'p', attributes: {'class': 'test', 'data-test': ''}}),
            h({name: 'p', attributes: {'class': 'test', 'data-test': ''}, children: 'Hello World!'}),
            h({name: 'p', attributes: {'class': 'test', 'data-test': ''}, children: 'Hello World!'})
        ]})
    ]})
);

fs.writeFile('./index.html', data, () => fs.readFile('./index.html', 'utf8', (err, contents) => (
    console.log(err ? err : contents)
)));
