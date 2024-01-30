import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// It is used to parse the incoming request body in JSON format.
app.use(bodyParser.json({ limit: "30mb", extended: true }));

// The urlencoded parser specifically handles the parsing of data sent through HTML form submissions.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// It's a middleware that adds the necessary headers to the HTTP response to allow cross-origin requests.
app.use(cors());

// MongoDB Atlas connection string

const CONNECTION_URL =
  "mongodb+srv://food-haven:food-haven.7550@cluster0.wdfuinu.mongodb.net/?retryWrites=true&w=majority";

// PORT
const PORT = process.env.PORT || 5000;

// Connecting to MongoDB Atlas

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch(() => (error) => console.log(error.message));
