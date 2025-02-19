import mongoose from 'mongoose';
const { Schema } = mongoose;

// For security, connectionString should be in a separate file and excluded from git
const connectionString = "mongodb+srv://freehanddata:PascalDev@cluster0.mongodb.net/test?retryWrites=true";

mongoose.connect(connectionString, {
    dbName: 'freehanddata',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const gameSchema = new Schema({
 title: { type: String, required: true },
 developer: String,
 releaseYear: Number,
 
});

export const Book = mongoose.model('Game', gameSchema);