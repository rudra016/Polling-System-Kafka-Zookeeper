const WebSocket = require("ws");

const clients = {};

const initWebSocketServer = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      const { pollId } = JSON.parse(message);
      clients[pollId] = clients[pollId] || [];
      clients[pollId].push(ws);
    });
  });
};

const broadcastUpdate = (pollId, data) => {
  if (clients[pollId]) {
    clients[pollId].forEach((ws) => ws.send(JSON.stringify(data)));
  }
};

module.exports = { initWebSocketServer, broadcastUpdate };
