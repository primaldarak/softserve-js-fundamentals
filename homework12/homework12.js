const http = require("http");
const os = require("node:os");
const path = require("path");
const { personalmodule } = require("./personalmodule.js");

//## Task 1 ----------------------------------------------------------------

// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/html" });

//     response.write("<h1>System Information</h1>");
//     response.write(`<p>Current user name: ${os.userInfo().username}</p>`);
//     response.write(`<p>OS Type: ${os.type()}</p>`);
//     response.write(`<p>System work time: ${os.uptime() / 60} minutes</p>`);
//     response.write(`<p>Current work derectory: ${__dirname}</p>`);
//     response.write(`<p>Server file name: ${path.basename("../homework12/homework12.js")}</p>`);

//     response.end();
//   })
//   .listen(5000);

//## Task 2 ----------------------------------------------------------------

// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/html" });

//     response.write(`${personalmodule(os.userInfo().username)}`);
//     response.end();
//   })
//   .listen(5000);

console.log("Server running on port: 5000");
