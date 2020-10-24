import mongoose from "mongoose";

const carScheama = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  years: { type: Number, required: true },
  doors: { type: Number, required: true },
  fuel: { type: String, required: true },
  image: { type: String, required: true },
  showcase: { type: String, required: true },
  location: { type: Array, required: true },
});

const Car = mongoose.model("car", carScheama);

export default Car;
