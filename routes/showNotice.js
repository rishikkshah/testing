const express = require("express");
const createNotice = require("../utilities/pdf");
const { getNoticeData } = require("../db/Collection/noticeCollection");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const data = await getNoticeData(req.params.id);
  createNotice(res, data[0]);
});

module.exports = router;
