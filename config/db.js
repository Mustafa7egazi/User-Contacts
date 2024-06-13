const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to database")
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}


module.exports = {connectToDB};

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to database"))
//   .catch((error) => console.log("Failed to connect database", error));