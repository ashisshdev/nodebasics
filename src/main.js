// Initialisation 
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/note.js');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbUri = 'mongodb+srv://ashish:1234@myfirstmongodb.ym6cthg.mongodb.net/notesDb';
// now as long as my db is not connected, I should not be able to access my routes
mongoose.connect(dbUri).then(function () {

    console.log("Db up and running");

    // Routing 
    app.get('/', function (req, res) {
        res.send("This is root path");
    });

    const noteRouter = require('./routes/notes.js');
    app.use("/notes", noteRouter);

}).catch(function () {
    console.log('connection error');
});

// Starting the server at port
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    /// as soon as out app runs on the specified port, this function is called
    console.log("Server is live");
});