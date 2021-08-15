const mongoose = require('mongoose');

// Connecting to mongodb database via mongoose
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/devfest-hackathon',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
).catch((e) => console.error('Error:', e))

// Checking if mongoose is connected to the database
const db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected');
});

