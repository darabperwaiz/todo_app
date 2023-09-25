// Requiring mongoosed module for connect mongodb
const mongoose = require('mongoose');

main().catch(err => console.log(err))

// Mongodb connection
async function main() {
    await mongoose.connect('mongodb+srv://darabperwaiz87:j9901sV8ESJ5cRX2@cluster0.hzpn6oc.mongodb.net/todo_db')
    console.log("Connection Successfully running")
}