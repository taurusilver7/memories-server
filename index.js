import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env.local" });

// config application
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// database config & app listeners
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
mongoose
  .connect(process.env.CONNECTION_URL, options)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port:${process.env.PORT}`)
    )
  )
  .catch((err) => console.error(err.message));

mongoose.set("useFindAndModify", false);
