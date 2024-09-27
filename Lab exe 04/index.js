const express = require('express');
const app = express();
const SERVER_PORT = 3000;

app.get('/hello', (req, res) => {
    res.status(201)
    res. send ( '<h1>Hello Express JS</h1>');
 });

//Query string parameters
//http://localhost:3000/user?firstname=Pritesh&lastname=Patel
 app.get('/user', (req, res) => {
    console.log(req.query)
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.send(`First Name: ${firstname}, Last Name: ${lastname}`);
 })

//Expects path parameters
//http://localhost:3000/user/pritesh/Patel
 app.post('/user/:firstname/:lastname', (req, res) => {
    console.log(req.params)
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.send(`First Name: ${firstname}, Last Name: ${lastname}`);
 })


 app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
 });



