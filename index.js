const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;

//Http request logger middleware
app.use(logger('dev'));
app.use(cors());
app.use(express.json());

//GET method route
app.get('/',(req,res) => {
    return res.status(200).json({message:"GET request to the homepage"});
});

app.post('/',(req,res) => {
    return res.status(201).json({message:"POST request to the homepage"});
});

app.put('/',(req,res) => {
    return res.status(200).json({message:"PUT request to the homepage"});;
});

app.delete('/',(req,res) => {
    return res.status(200).json({message:"DELETE request to the homepage"});
});


app.listen(port,() => {
    console.log(`Server running at http:\\localhost:${port}`)
});