//server ko create krna

const express = require('express');


const app = express()
app.use(express.json())


const notes = []

// title, description
// POST / notes
app.post("/notes",(req, res)=>{
    notes.push(req.body)

    res.status(201).json({
        message:"note created successfully"
    })
})

//GET 
app.get('/notes',(req,res)=>{

    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})

//Delete/notes/15
app.delete('/notes/:index',(req,res)=>{

    const index =req.params.index //15
    delete notes[index]

    res.status(200).json({
        message:"note deleted successfuly"
    })
})

app.patch('/notes/:index',(req, res)=>{
    const index = req.params.index
    const description = req.body.description
    notes[index].description = description

    res.status(200).json({
        message :"note updated successfully"
    })
})

module.exports = app;