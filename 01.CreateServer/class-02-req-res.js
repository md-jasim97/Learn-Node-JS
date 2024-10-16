const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.end('This is a Home page')
    } else if (req.url == '/about') {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.end('This is a about page')
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.end('This is a contact page')
    }

})


server.listen(4000)
console.log("Run Successful")