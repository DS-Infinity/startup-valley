const mongoose = require("mongoose");

async function connectToDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("JAI SHREE RAM - connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDB;
