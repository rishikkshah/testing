require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB successfully connected!"))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;
