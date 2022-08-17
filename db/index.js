const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://habib:1234@cluster0.hobpfic.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 1000,
    }
  )
  .then(() => {
    console.log("database connect succesfully");
  })
  .catch((err) => console.log(err));

module.exports = mongoose;
