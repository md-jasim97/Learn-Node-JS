
const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
    let myUrl = 'https://ostad.app/dashboard/my-courses/6425bf5b105c7b8066e16154?name=jasim'
    let urlDetails = new URL(myUrl);

    let hostName = urlDetails.host;
    let pathName = urlDetails.pathname;
    let search = urlDetails.search;

    res.write("Host Name : " + hostName + '\n');
    res.write("Path Name : " + pathName + '\n');
    res.write("Search : " + search);
    res.end();
})

server.listen(4000)
console.log("Server run successful")