
const { createPoll, getPollById, updatePollCount } = require("../models/Poll");
const sendVoteMessage = require("../kafka/producer");

exports.createPoll = async (req, res) => {
  const { question, options } = req.body;
  const poll = await createPoll(question, options);
  res.json(poll);
};


exports.vote = async (req, res) => {
    const pollId = req.params.id;
    const { optionId } = req.body;
    sendVoteMessage({ pollId, optionId });
    await updatePollCount(pollId, optionId);
    const updatedPoll = await getPollById(pollId);
    res.json(updatedPoll);
  };

exports.getPollResults = async (req, res) => {
  const pollId = req.params.id;
  const poll = await getPollById(pollId);
  res.json(poll);
};
