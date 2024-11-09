
const express = require("express");
const pollRoutes = require("./routes/pollRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const { initWebSocketServer } = require("./websockets/websocketServer");
const { initKafkaConsumer } = require("./kafka/consumer");

const app = express();
app.use(express.json());


app.use("/polls", pollRoutes);
app.use("/leaderboard", leaderboardRoutes);


const server = app.listen(3000, () => console.log("Server running on port 3000"));


initWebSocketServer(server);
initKafkaConsumer();
