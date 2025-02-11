import express from "express";
import { getAll, getItem } from "./data.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    const games = getAll();
    res.render("home", { games });
});

app.get("/detail", (req, res) => {
    const game = getItem(req.query.title);
    if (game) {
        res.render("detail", { game });
    } else {
        res.status(404).send("Game not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});