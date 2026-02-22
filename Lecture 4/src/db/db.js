const mongoose = require("mongoose");

// connect to the database
async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:arNfnm3jClmajRRF@yt-complete-backend.v3jfyw5.mongodb.net/halley")


    console.log("Connected to DB")
}

module.exports = connectDB;
