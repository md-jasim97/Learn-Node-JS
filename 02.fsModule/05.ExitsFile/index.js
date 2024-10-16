


let http = require('http')
let fs = require('fs');

let server = http.createServer((req, res) => {
    if (req.url == '/') {

        // Async File System (fs) Rename file method

        fs.exists("DataFile.txt", (isExists) => {
            if (isExists) {
                res.writeHead(200, { 'Content-Type': "text/html" })
                res.write('Data Info Exists')
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': "text/html" })
                res.write("Data Info No Exists")
                res.end();
            }
        })

        // Sync File System (fs) read file method


        // let isExits = fs.existsSync ('DataFile.txt');
        // if (isExits) {
        //     res.writeHead(200, { 'Content-Type': "text/html" })
        //     res.write("Data File Exits Here..")
        //     res.end();
        // } else {
        //     res.writeHead(200, { 'Content-Type': "text/html" })
        //     res.write("Data File No Exits Here..")
        //     res.end();
        // }


    }

});

server.listen(4000)
console.log('Server run Successful')

/*
const users = {
    name: 'Md Jasim Uddin',
    age: 22,
    designation: "MERN Stack Web Developer",
    Adderss: "Nachole, Chapainawabganj"
}
*/

