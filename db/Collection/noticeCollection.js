const mongoose = require("../connection");

const { noticeSchema } = require("../schema");

//notice table
const noticeModel = mongoose.model("notice", noticeSchema);

//function to insert data into notice table
const insertNotice = async (data) => {
  const { title, body, date, refno } = data;
  try {
    const noticeDoc = new noticeModel({
      title,
      body,
      date,
      refno,
    });
    noticeDoc.save();
    console.log("updated!1");
  } catch (err) {
    return err;
  }
};

const updateNotice = async (data) => {
  try {
    console.log(data);
    await noticeModel.findOneAndReplace({ _id: data.id }, data);
    console.log("updated!!");
  } catch (e) {
    console.log(e);
  }
};
//function to get data fromt eh notice table

const getNotices = async () => {
  try {
    const data = await noticeModel.find();
    return data.reverse();
  } catch (err) {
    return err;
  }
};

const getNoticeData = async (id) => {
  try {
    const data = await noticeModel.find({ _id: id });
    return data;
  } catch (err) {
    return err;
  }
};

module.exports = { insertNotice, getNotices, getNoticeData, updateNotice };
