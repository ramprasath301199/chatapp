const { Server } = require("socket.io")
const PORT = 3000;
const server = new Server({ cors: { origin: "http://localhost:4200" } });
server.on("connection", (socket) => {
    socket.on('message', (data) => {
        console.log(data);
        var date = new Date();
        var fulltime = `${date.getHours()}:${date.getMinutes()}`
        socket.broadcast.emit('received', { data: data, msg: "This is Testing Data From The Server", time: fulltime })
    })
})
server.listen(PORT);