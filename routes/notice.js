const express = require("express");
const { getNotices } = require("../db/Collection/noticeCollection");
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await getNotices();
  res.send(data);
});

module.exports = router;
