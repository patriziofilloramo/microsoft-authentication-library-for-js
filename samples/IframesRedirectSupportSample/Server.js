// http messaging
const http = require("http:");
const fileSystem = require("fs");
const path = require("path");

// server info
const host_name = "localhost";
const host_port = 8000;


// client info
const client1_port = 8001;
const client2_port = 8002;

// create a host server
const host_server = http.createServer((req, res) => {
    serveAsset("host", req.url, res)
}).listen(host_port, host_name, () => {
    console.log(`Server running at http://${host_name}:${host_port}/`);
});;

// create client1 server
const client1_server = http.createServer((req, res) => {
    serveAsset("client1", req.url, res)
}).listen(client1_port, host_name, () => {
    console.log(`Client running at http://${hostname}:${client_port}/`);
});

// create client2 server
const client2_server = http.createServer((req, res) => {
  serveAsset("client2", req.url, res)
}).listen(client2_port, host_name, () => {
  console.log(`Client2 running at http://${hostname}:${client_port2}/`);
});

function serveAsset(rootPath, url, res) {
    // default root route to index.html in the folder
    if (url === '/') url = 'index.html';

    const filePath = path.join(__dirname, rootPath, url)
    const readStream = fileSystem.createReadStream(filePath)
      .on('error', function() {
        res.statusCode = 404;
        res.end();
      });

    if (/^.*\.js$/.test(url)) {
      res.setHeader('Content-Type', 'text/javascript');
    } else {
      res.setHeader('Content-Type', 'text/html');
    }
    readStream.pipe(res);
}



