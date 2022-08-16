// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app
const express = require('express')
const app = express();
/* Middleware*/

//Here we are configuring express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
// GET route
app.get('/all', sendData);

function sendData(req, res) {
    res.send(projectData);
    console.log(projectData)
    return projectData;
};
// POST route

app.post('/', addData);

function addData(req, res) {

    const data = req.body
    projectData = {
        temp: data.temp,
        user_response: data.user_response,
        date: data.date,
    }
    res.send(projectData);
    console.log(projectData)
}

