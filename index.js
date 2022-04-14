import express from "express";
import path from "path";
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT ||3001 ;

let __dirname = path.resolve(path.dirname(""));

const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/floresta", (req, res) => {
  res.render("floresta.ejs");
});

app.get("/Plankerton", (req, res) => {
  res.render("plankerton.ejs");
});

app.get("/CannyValley", (req, res) => {
  res.render("CannyValley.ejs");
});

app.get("/TwinePeaks", (req, res) => {
  res.render("TwinePeaks.ejs");
});

app.listen(port, () => {
  console.log(`estou na porta ${port}`);
});
