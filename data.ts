import { Game } from "./models/game"; // Assuming Game is properly typed in TypeScript

// Get All games from MongoDB
export async function getAll(): Promise<Game[]> {
    return await Game.find();
}

// Get a single game by title
export async function getItem(title: string): Promise<Game | null> {
    return await Game.findOne({ title });
}

// Add or update a game
export async function addOrUpdateItem(gameData: Game): Promise<Game> {
    return await Game.findOneAndUpdate(
        { title: gameData.title }, // Search by title
        gameData, // Update with new data
        { upsert: true, new: true } // Create if not found, return updated data
    );
}

// Delete a game
export async function deleteItem(title: string): Promise<boolean> {
    const result = await Game.deleteOne({ title });
    return result.deletedCount > 0;
}