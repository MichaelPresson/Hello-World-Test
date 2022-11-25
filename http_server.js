const express = require('express');
const app = express();
const cors = require('cors');


// allow cross-origin resource sharing (CORS)
app.use(cors());

// data parser - used to parse post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve static files from public directory
// -------------------------------------------
app.use(express.static('public'));

let port = process.env.PORT || 3000;

// start server
// -----------------------
app.listen(port, function () {
    console.log(`Running on port ${port}`);
});
