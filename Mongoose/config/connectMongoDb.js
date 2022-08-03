const mongoose = require("mongoose");

const connectMongoDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Database connected"))
    .catch(() => console.log(err));
};

module.exports = connectMongoDb;
