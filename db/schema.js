const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  date: {
    type: String,
  },
  refno: {
    type: String,
  },
});

module.exports = { noticeSchema };
