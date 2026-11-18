import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("heloo");
});

app.get("/about", (req, res) => {
  res.send([{ name: "ayush", age: 21 }]);
});

app.post("/about", (req, res) => {
  const obj = req.body;
  console.log(obj);
  res.send(obj);
});

app.listen(8000, () => {
  console.log("sever is running");
});
