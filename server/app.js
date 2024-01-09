import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); //
const __dirname = path.dirname(__filename); //
const app = express();

const port = 5004;

app.use(express.static(path.join(__dirname, "dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist"));
});

app.listen(port, (req, res) => {
  console.log(`Listening on Port Number ${port}`);
});