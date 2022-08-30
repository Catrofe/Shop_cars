import mongoose from "mongoose"

mongoose.connect("mongodb+srv://root:root@cluster0.uevqz6h.mongodb.net/test");

let db = mongoose.connection;

export default db;