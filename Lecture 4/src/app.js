const express = require('express');
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json()); // IMPORTANT: to read req.body

/*
POST /notes => create a new note
GET /notes => get all notes
GET /notes/:id => get a note by id
PUT /notes/:id => update a note by id
DELETE /notes/:id => delete a note by id
*/

app.post("/notes", async (req, res) => {
    try {
        const data = req.body;

        await noteModel.create({
            title: data.title,
            description: data.description,
        });

        res.status(201).json({
            message: "Note created successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating note",
            error: error.message
        });
    }
});

app.get("/notes", async (req, res) => {
    try {
        const notes = await noteModel.find();

        res.status(200).json({
            message: "Notes fetched successfully",
            notes: notes
        });

    } catch (error) {
        res.status(500).json({
            message: "Error fetching notes",
            error: error.message
        });
    }
});

app.delete("/notes/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const deletedNote = await noteModel.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting note",
            error: error.message
        });
    }
});

app.patch("/notes/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const description = req.body.description;

        const updatedNote = await noteModel.findByIdAndUpdate(
            id,
            { description: description },
            { new: true } // returns updated document
        );

        if (!updatedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note updated successfully",
            note: updatedNote
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating note",
            error: error.message
        });
    }
});

module.exports = app;