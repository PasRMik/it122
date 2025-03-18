import express from "express";
import cors from "cors";
import { getAll, getItem, addOrUpdateItem, deleteItem } from "./data.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

// Home Route (UI)
app.get("/", async (req, res) => {
    const games = await getAll();
    // Pass 'games' as a JSON string to the EJS template
    res.render("home", { items: JSON.stringify(games) });
});

app.get("/detail", async (req, res) => {
    const game = await getItem(req.query.title);
    if (game) {
        res.render("detail", { game });
    } else {
        res.status(404).send("Game not found");
    }
});

/* 
========================
   REST API ROUTES
========================
*/

// 1. Get all games (GET /api/games)
app.get("/api/games", async (req, res) => {
    const games = await getAll();
    res.json(games);
});

// 2. Get a single game (GET /api/games/:title)
app.get("/api/games/:title", async (req, res) => {
    const game = await getItem(req.params.title);
    if (game) {
        res.json(game);
    } else {
        res.status(404).json({ error: "Game not found" });
    }
});

// 3. Add or update a game (POST /api/games)
app.post("/api/games", async (req, res) => {
    const { title, developer, releaseYear, genre } = req.body;

    if (!title || !developer || !releaseYear || !genre) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const game = await addOrUpdateItem(req.body);
    res.status(200).json({ message: "Game added/updated successfully", game });
});

// 4. Delete a game (DELETE /api/games/:title)
app.delete("/api/games/:title", async (req, res) => {
    const success = await deleteItem(req.params.title);

    if (success) {
        res.json({ message: "Game deleted successfully" });
    } else {
        res.status(404).json({ error: "Game not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});