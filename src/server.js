const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const barbells = [];

app.get("/barbells", (req, res) => {
  res.json(barbells);
});

app.post("/barbells", (req, res) => {
  const newItem = {
    id: Date.now(),
    ...req.body,
  };

  barbells.push(newItem);

  res.json(newItem);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server started"));