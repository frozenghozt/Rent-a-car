import express from "express";
const router = express.Router();
import Car from "../models/carsModel";

router.post("/cars", async (req, res) => {
  try {
    const { brand, model, price, years, doors, fuel, image } = req.body;
    const newCar = new Car({
      brand,
      model,
      price,
      years,
      doors,
      fuel,
      image,
    });
    const savedCar = await newCar.save();
    res.json(savedCar);
  } catch (err) {
    res.status(500).json((err: Error) => {
      error: err.message;
    });
  }
});

router.get("/searchcars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json((err: Error) => {
      error: err.message;
    });
  }
});

export default router;
