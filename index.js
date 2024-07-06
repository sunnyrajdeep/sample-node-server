require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
// const jwt = require('_helpers/jwt');
// const errorHandler = require('_helpers/error-handler');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
console.log('starting server')
// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 2000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});