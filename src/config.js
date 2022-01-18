require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";

module.exports = MONGODB_URI;
//export const PORT = process.env.PORT || 4000;