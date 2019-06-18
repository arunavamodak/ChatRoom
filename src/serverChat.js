// create server
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);

const io = socketIO(server);



// connection established between client and server

io.on("connection", (socket) => {
    console.log("Client Connected");

    socket.on("client:message", (data) => {
        //console.log(data.username);
        //console.log(data.message);
        data.fromMe = false;
        // console.log(data);
        // message broadcast in the chat group
        socket.broadcast.emit("server:message", data);


    })
    socket.on("client:typing", (data) => {
        console.log(data);
        //console.log("is typing");
        socket.broadcast.emit("server:typing", data);


    })
})

server.listen(4009, () => {
    console.log("listening the port");
})