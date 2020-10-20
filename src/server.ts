import express from "express";
import mongoose from "mongoose";
import cors from "cors";
require("dotenv").config();
import router from "./routes/router";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.MONGODB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connected.");
  }
);

app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
