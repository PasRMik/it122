import { Game } from "./models/game.js";

// Get All games from MongoDB
export async function getAll() {
    return await Game.find();
}

// Get a single game by title
export async function getItem(title) {
    return await Game.findOne({ title });
}

// Add or update a game
export async function addOrUpdateItem(gameData) {
    return await Game.findOneAndUpdate(
        { title: gameData.title }, // Search by title
        gameData, // Update with new data
        { upsert: true, new: true } // Create if not found, return updated data
    );
}

// Delete a game
export async function deleteItem(title) {
    const result = await Game.deleteOne({ title });
    return result.deletedCount > 0;
}
