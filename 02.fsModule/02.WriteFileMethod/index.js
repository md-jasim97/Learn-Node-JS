


let http = require('http')
let fs = require('fs');
const { error } = require('console');

let server = http.createServer((req, res) => {
    if (req.url == '/') {

        // Async File System (fs) write file method
        // fs.writeFile('Home.docx', "Node JS File Create", (error) => {
        //     if (error) {
        //         res.writeHead(200, { 'Content-Type': "text/html" })
        //         res.write('Opps.. Something is wrong.')
        //         res.end();
        //     } else {
        //         res.writeHead(200, { 'Content-Type': "text/html" })
        //         res.write("File Create Successful")
        //         res.end();
        //     }
        // })

        // Sync File System (fs) read file method
        let error = fs.writeFileSync('HomeSnyc.html', "New Document Create");
        if (error) {
            res.writeHead(200, { 'Content-Type': "text/html" })
            res.write("File create fail")
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': "text/html" })
            res.write("File create successful.")
            res.end();
        }
    }

});

server.listen(4000)
console.log('Server run Successful')


const users = {
    name: 'Md Jasim Uddin',
    age: 22,
    designation: "MERN Stack Web Developer",
    Adderss: "Nachole, Chapainawabganj"
}


