import mongoose from 'mongoose';
const { Schema } = mongoose;

// MongoDB Connection String 
const connectionString ="mongodb+srv://freehanddata:PascalDev@cluster0.1jw8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionString,{dbName:'freehanddata'})
  .then(() => console.log("Mongoose connected."))
  .catch(err => console.error("MongoDB connection error:", err));

mongoose.connection.on('error', err => {
  console.error("Mongoose connection error:", err);
});

// Game Schema
const gameSchema = new Schema({
    title: { type: String, required: true },
    developer: String,
    releaseYear: Number,
    genre: String
});

// Model
export const Game = mongoose.model('Game', gameSchema, 'videogames');