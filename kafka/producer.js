
const kafka = require("kafka-node");

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const producer = new kafka.Producer(client);

producer.on("ready", () => console.log("Kafka Producer is ready"));
producer.on("error", (err) => console.error("Kafka Producer error:", err));

const sendVoteMessage = (message) => {
  const payloads = [{ topic: "poll-votes", messages: JSON.stringify(message) }];
  producer.send(payloads, (err, data) => {
    if (err) console.error("Error sending vote message:", err);
  });
};

module.exports = sendVoteMessage;
