const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
  connect: () => {
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,useCreateIndex:true
    });
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("Connected to Database..");
    });
    connection.on("error", (error) => {
      console.log("Error connecting to database", +error);
    });
  },
};
