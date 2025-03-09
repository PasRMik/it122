import mongoose from 'mongoose';
const { Schema } = mongoose;

// MongoDB Connection String 
const connectionString = "mongodb://freehanddata:PascalDev@cluster0.mongodb.net:27017/test?retryWrites=true";

mongoose.connect(connectionString)
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
export const Game = mongoose.model('Game', gameSchema);