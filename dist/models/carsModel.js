"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const carScheama = new mongoose_1.default.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: String, required: true },
    years: { type: Number, required: true },
    doors: { type: Number, required: true },
    fuel: { type: String, required: true },
    image: { type: String, required: true },
    showcase: { type: String, required: true },
});
const Car = mongoose_1.default.model("car", carScheama);
exports.default = Car;
//# sourceMappingURL=carsModel.js.map