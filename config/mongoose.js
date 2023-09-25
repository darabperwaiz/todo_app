// Requiring mongoosed module for connect mongodb
const mongoose = require('mongoose');

main().catch(err => console.log(err))

// Mongodb connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/todo_db')
    console.log("Connection Successfully running")
}