import express from "express";
import mongoose from "mongoose";
// import dns from "node:dns";

// dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectMongoDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://kayush3647_db_user:mPB3ae5o0GMLSzaD@cluster1.voaoyau.mongodb.net",
    );
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
