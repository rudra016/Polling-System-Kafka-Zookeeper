
const db = require("../db");

exports.getLeaderboard = async () => {
  const result = await db.query(
    "SELECT id, jsonb_array_elements(options)->>'option' AS option, jsonb_array_elements(options)->>'count' AS count FROM polls ORDER BY count DESC LIMIT 10"
  );
  return result.rows;
};
