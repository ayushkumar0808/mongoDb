import express from "express";
import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kayush3647_db_user:mPB3ae5o0GMLSzaD@cluster1.voaoyau.mongodb.net",
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

const app = express();
connectMongoDb();

app.listen(8000, () => {
  console.log("sever is running");
});
