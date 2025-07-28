const http = require("http");
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    return res.send("Hello from the Server");
})

app.get('/about', (req, res)=>{
    return res.send("Hellow from the about senction " + req.query.name + req.query.age);
})



app.listen(5000, (req, res)=>{
    console.log("Server is Running...");
    
})