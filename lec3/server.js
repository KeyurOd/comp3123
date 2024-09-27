const os = require('os');
const http = require('http');
const fs = require('fs');
const path = require( 'path');

//console.log(os.cpus ());
//console.log(os.homdir());
//console.log (os);

http.createServer((req, res)=>{
    console.log(req.url);
    console.log(req.method);
    if(req.url == '/'){
        res.writeHead(200,{ 'Content-Type': 'text/html' });
        res.write('<h1>Home Page</h1>');
    }

    if(req.url == '/about'){
        res.writeHead(200,{ 'Content-Type': 'text/html' });
        res.write('<h1>About page</h1>');
    }

    if(req.url == '/student'){
        res.writeHead(200,{ 'Content-Type': 'text/html' });
        res.write('<h1>Student page</h1>');
        const stud = {
            name :'Keyur',
            age : 24,
            course: 'Computer science'
        }
        res.write(JSON.stringify(stud));
    }
    //res.write('Hello world!');
    res.end();
}).listen(3000 , ()=>{
    console.log ('Server is running on port 3000');
});