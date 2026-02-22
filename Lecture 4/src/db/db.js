const mongoose = require("mongoose");

// connect to the database
async function connectDB() {
    await mongoose.connect("mongo user name")


    console.log("Connected to DB")
}

module.exports = connectDB;
