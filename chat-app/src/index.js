//--- Very importand to get the path for the public directory ---//
const path = require('path');
//--- require to load the http core module ---//
const http = require('http'); //** For the Sockets */
//--- Load Express ---//
const express = require('express');
//--- Load the library Socket.io ---//
const socketio = require('socket.io');
//--- Create the Express Application ---//
const app = express();
//--- Create the HTTP server using the Express app ---//
const server = http.createServer(app); //** For the Sockets */
//--- Connect socket.io to the HTTP server ---//
const io = socketio(server);
//---- Get the Port ----//
const port = process.env.PORT || 3000;
//--- Serve up the public directory/folder ---//
const publicDirectoryPath = path.join(__dirname, '../public');
//--- Use the Express Static middleware to provide path to the folder that is the "index.html" in the public folder. ---//
app.use(express.static(publicDirectoryPath));

//** Server (emit) -> Client (receive) - countUpdated */
//** Client (emit) -> Server (receive) - increment */

//--- Listen for new connection to Socket.io ---//
io.on('connection', (socket) => {
	console.log('New webSocket connection');
	//*** Emit it to that particular connection  */
	socket.emit('message', 'Welcome!');
	//** Emit to everyone EXCEPT the person that broadcast the event */
	socket.broadcast.emit('message', 'A new user has joined!');

	socket.on('sendMessage', (message) => {
		//*** Emit it to Everyone */
		io.emit('message', message);
	});

	socket.on('disconnect', () => {
		io.emit('message', 'A user has left!');
	});

	socket.on('sendLocation', (coords) => {
		io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`);
	});
});

//--- start the server up ---//
server.listen(port, () => {
	console.log(`Server is up on port ${port}!`); //** For the Sockets instead of 'app.listen' we change it to 'server.listen'*/
});
