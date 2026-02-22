const mongoose = require("mongoose");


const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})



const noteModel = mongoose.model("note", noteSchema); // this is mostly used to interact with the database, it is a class that we can use to create new notes and save them to the database, and also to find notes in the database.

module.exports = noteModel;