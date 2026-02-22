const mongoose = require("mongoose");

// connect to the database
async function connectDB() {
    await mongoose.connect("xyfz") // replace xyz with your connection string


    console.log("Connected to DB")
}

module.exports = connectDB;
