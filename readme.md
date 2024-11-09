# High-Concurrency Polling System with Kafka, Zookeeper, WebSockets, and PostgreSQL

This project is a high-concurrency polling system that supports multiple users voting on polls in real-time, with a resilient design to ensure no votes are lost, even in case of failures. The system utilizes Kafka and Zookeeper for messaging and fault tolerance, PostgreSQL for data storage, and WebSockets for real-time updates.

## Features

- Create polls with options
- Vote on polls and store votes in Kafka
- Real-time poll updates via WebSockets
- Leaderboard feature to show the most voted options across all polls
- Fault-tolerant voting using Kafka and Zookeeper

## Prerequisites

1. **Node.js**: [Download and Install Node.js](https://nodejs.org/)
2. **PostgreSQL**: [Install PostgreSQL](https://www.postgresql.org/download/)
3. **Kafka** and **Zookeeper**: [Kafka Quickstart Guide](https://kafka.apache.org/quickstart)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/high-concurrency-polling-system.git
cd high-concurrency-polling-system
```
