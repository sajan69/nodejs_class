const fs = require('fs');
const path = require('path');
const os = require('os');
// import the fs module
//Library Management System


//Booking system for a a travel agency where user can book a vehicles and get the details of the booking.

//Node js
//browser api
//Common js
// fs,path,http,https,os,events,util,querystring,stream,assert,child_process,cluster,http2,net,readline,repl,tls,udp,url,util,zlib

// const fs = requestAnimationFrame('fs');   //file system
console.log(os.platform());


fs.readFile('hi.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
}); //read the file
fs.writeFile('hello.txt', 'Hello World.', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File Created');
}); //write the file
fs.appendFile('hello.txt', 'My name is sajan adhikari.', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File appended');
}); //append the file
fs.rename('hello.txt', 'hello1.txt', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File Renamed');
}); //rename the file

