let http = require('http')
let server = http.createServer((req, res) => {
    res.end('Hello Node JS')
});

server.listen(4000)
console.log('Server run Successful')