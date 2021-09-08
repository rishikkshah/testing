const express = require("express");
const { updateNotice } = require("../db/Collection/noticeCollection");
const router = express.Router();

router.post("/", async (req, res) => {
  updateNotice(req.body);
});

module.exports = router;
