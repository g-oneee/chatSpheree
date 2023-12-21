const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();


const connectDB =async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    const conn =await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: true,
    });
    console.log(`mongodb connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = connectDB;
