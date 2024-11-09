
const { getLeaderboard } = require("../models/Leaderboard");

exports.getLeaderboard = async (req, res) => {
  const leaderboard = await getLeaderboard();
  res.json(leaderboard);
};
