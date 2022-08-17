const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test",{
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 1000,
  })
  .then(() => {
    console.log("database connect succesfully");
  })
  .catch((err) => console.log(err));

module.exports = mongoose;
