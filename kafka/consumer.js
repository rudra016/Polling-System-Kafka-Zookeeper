const kafka = require("kafka-node");
const { updatePollCount } = require("../models/Poll");
const { broadcastUpdate } = require("../websockets/websocketServer");
const { getPollById } = require("../models/Poll");

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const consumer = new kafka.Consumer(client, [{ topic: "poll-votes" }], { autoCommit: true });

consumer.on("message", async (message) => {
    try {
        // console.log("Received message:", message.value);
        const { pollId, option } = (message.value);
        // console.log(`Poll ID: ${pollId}, Option: ${option}`); 
        await updatePollCount(pollId, option);
        const pollData = await getPollById(pollId);
        broadcastUpdate(pollId, pollData);
    } catch (error) {
        console.error("Error processing message (consumer):", error);
    }
});


const initKafkaConsumer = () => consumer.on("error", (err) => console.error("Kafka Consumer error:", err));

module.exports = { initKafkaConsumer };
