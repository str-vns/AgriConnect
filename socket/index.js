const io = require('socket.io')(8900,{
    cors: {
        origin: "http://localhost:5173",
    }
})

let users = [];

const addUser = (userId, socketId) => {
  const existingUser = users.find(user => user.userId === userId);
  // !users.some((user) => user.userId === userId) &&
  //   users.push({ userId, socketId });
    if (existingUser) {
      existingUser.socketId = socketId;
      existingUser.isOnline = true; 
    } else {
      users.push({ userId, socketId, isOnline: true }); // Add new user with online status
    }
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
  
};

io.on("connection", (socket) => {
  console.log("a user connected.");
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

 
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    if (user && user.socketId) {
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
    } else {
      console.log(`User with receiverId ${receiverId} not found or doesn't have a valid socketId.`);
    }
  });


  socket.on("disconnect", () => {
    const disconnectedUser = users.find(user => user.socketId === socket.id);
    console.log("a user disconnected!");
    io.emit("getUsers", users);
    if (disconnectedUser) {
      disconnectedUser.isOnline = false; 
          removeUser(socket.id);
    }
  });
});