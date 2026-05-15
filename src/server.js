import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const indexPath = path.resolve(__dirname, "../dist/index.html");
app.use(express.static(path.join(__dirname, "../dist")));

app.use((req, res) => {
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(err);
      res.status(err.status || 500).send(err.message);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server started"));
