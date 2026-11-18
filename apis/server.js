import express from "express";
import mongoose from "mongoose";
// import dns from "node:dns";

// dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectMongoDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected:", connection.connection.host);
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

const app = express();
connectMongoDb();

app.listen(8000, () => {
  console.log("sever is running");
});
