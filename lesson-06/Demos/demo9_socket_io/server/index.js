const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express(); // Express app
const server = http.createServer(app); // Creates HTTP Server
const io = new Server(server, { cors: { origin: '*' } }); // Attach Socket.IO to the HTTP server

const PORT = 3000;

// Handle new socket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Listen for messages from client
  socket.on('chat mesaage', (msg) => {
    console.log('Message received:', msg);

    // Broadcast message to all clients
    io.emit('chat mesaagge', msg);

    // Broadcast message to the spesific client
    socket.emit('server reply', 'Server got your mesage');
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
