"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    sale: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.Product = mongoose_1.default.model("Product", productSchema);
