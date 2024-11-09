
const db = require("../db");

exports.createPoll = async (question, options) => {
  const result = await db.query(
    "INSERT INTO polls (question, options) VALUES ($1, $2) RETURNING *",
    [question, JSON.stringify(options.map(option => ({ option, count: 0 })))],
  );
  return result.rows[0];
};

exports.getPollById = async (pollId) => {
  const result = await db.query("SELECT * FROM polls WHERE id = $1", [pollId]);
  return result.rows[0];
};

exports.updatePollCount = async (pollId, optionId) => {
    const pollResult = await db.query("SELECT options FROM polls WHERE id = $1", [pollId]);
    const options = pollResult.rows[0].options;


    // console.log("Fetched options:", options);

    const index = optionId - 1; 
    if (index < 0 || index >= options.length) {
        throw new Error("Invalid optionId");
    }


    if (typeof options[index].count !== 'number') {
        console.warn(`Option at index ${index} doesn't have a valid count. Initializing count to 0.`);
        options[index].count = 0; 
    }
    options[index].count += 1;
    // console.log("Updated options:", options);
    await db.query("UPDATE polls SET options = $1 WHERE id = $2", [JSON.stringify(options), pollId]);
};

  
  
