// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes

// Start up an instance of app
const express = require('express')
const app = express();
/* Middleware*/

const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 5500;
const server = app.listen(port, listening)
function listening() {
    console.log(`server is running on port ${port}`)
}
app.get('/all', sendData);

function sendData(req, res) {
    res.send(projectData);
    return projectData;
};

app.post('/', addData);

function addData(req, res) {

    const data = req.body
    projectData = {
        temp: data.temp,
        user_response,
        date: newDate,
    }
    res.send(projectData);
}

