const http = require('http');
const port = 5000;
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req, res) => {
    const url = req.url;

    // Home Page
    if (url === '/') {
        console.log(url);
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage);
        res.end();
    } 
    // About Page
    else if (url === '/about') {
        console.log(url);
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>');
        res.end();
    } 
    // Styles
    else if (url === '/styles.css') {
        console.log(url);
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles);
        res.end();
    } 
    // Image
    else if (url === '/logo.svg') {
        console.log(url);
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage);
        res.end();
    } 
    // Logic
    else if (url === '/browser-app.js') {
        console.log(url);
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic);
        res.end();
    } 
    // 404
    else {
        console.log(url);
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>');
        res.end();
    }
})

server.listen(port)