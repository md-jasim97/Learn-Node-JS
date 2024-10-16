


let http = require('http')
let fs = require('fs')

let server = http.createServer((req, res) => {
    if (req.url == '/') {

        // Async File System (fs) read file method
        fs.readFile('Home.html', (error, data) => {
            res.writeHead(200, { 'Content-Type': "text/html" })
            res.write(data)
            res.end();
        })

        // Sync File System (fs) read file method
        // let myData = fs.readFileSync('Home.html')
        // res.writeHead(200, { 'Content-Type': "text/html" })
        // res.write(myData)
        // res.end();
    }

});

server.listen(4000)
console.log('Server run Successful')


