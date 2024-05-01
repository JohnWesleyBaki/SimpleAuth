const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

dotenv.config();




const mongoURI = "mongodb+srv://tani:poiuyt1234@cluster0.obzhyzv.mongodb.net/Exp";
// const mongoURI = process.env.MONGO_URI

MongoClient.connect(mongoURI)
  .then((client) => {
    console.log("MongoDB connected successfully");
   
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});