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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = exports.deleteCategory = exports.addNewCategory = exports.showCategoryById = exports.showCategories = void 0;
const category_model_1 = require("../models/category.model");
const showCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.Category.find();
});
exports.showCategories = showCategories;
const showCategoryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.Category.findById(id);
});
exports.showCategoryById = showCategoryById;
const addNewCategory = (newCategory) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.Category.create(newCategory);
});
exports.addNewCategory = addNewCategory;
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.Category.findByIdAndDelete(id);
});
exports.deleteCategory = deleteCategory;
const updateCategory = (id, category) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.Category.findByIdAndUpdate(id, category, { new: true });
});
exports.updateCategory = updateCategory;
