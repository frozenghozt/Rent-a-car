"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const carsModel_1 = __importDefault(require("../models/carsModel"));
router.post("/cars", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { brand, model, price, years, doors, fuel, image, showcase, } = req.body;
        const newCar = new carsModel_1.default({
            brand,
            model,
            price,
            years,
            doors,
            fuel,
            image,
            showcase,
        });
        const savedCar = yield newCar.save();
        res.json(savedCar);
    }
    catch (err) {
        res.status(500).json((err) => {
            error: err.message;
        });
    }
}));
router.get("/searchcars", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield carsModel_1.default.find();
        res.json(cars);
    }
    catch (err) {
        res.status(500).json((err) => {
            error: err.message;
        });
    }
}));
exports.default = router;
//# sourceMappingURL=router.js.map