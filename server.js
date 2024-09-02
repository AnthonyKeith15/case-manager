const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fs = require('fs'); // Import the file system module

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

let chatMessages = []; // Store chat messages

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve JSON data from cases.json file
app.get('/cases', (req, res) => {
    fs.readFile('cases.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading cases data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Send all previous chat messages to the newly connected client
    socket.emit('load messages', chatMessages);

    // Listen for new messages from the client
    socket.on('new message', ({ message, sender }) => {
        const chatMessage = { message, sender };
        chatMessages.push(chatMessage); // Store the message with the username
        io.emit('new message', chatMessage); // Broadcast the message to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
