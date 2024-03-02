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
exports.deleteCategory = exports.updateCategoryHandler = exports.deleteCategoryHandler = exports.addNewCategoryHandler = exports.showCategoryByIdHandler = exports.showCategoryHandler = void 0;
const category_service_1 = require("../services/category.service");
Object.defineProperty(exports, "deleteCategory", { enumerable: true, get: function () { return category_service_1.deleteCategory; } });
const showCategoryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, category_service_1.showCategories)();
    try {
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.showCategoryHandler = showCategoryHandler;
const showCategoryByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, category_service_1.showCategoryById)(req.params.id);
    try {
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.showCategoryByIdHandler = showCategoryByIdHandler;
const addNewCategoryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield (0, category_service_1.addNewCategory)(req.body);
    try {
        res.status(200).json({ message: "new user added", newUser });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.addNewCategoryHandler = addNewCategoryHandler;
const deleteCategoryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userToKill = yield (0, category_service_1.deleteCategory)(req.params.id);
    try {
        res.status(200).json(userToKill);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteCategoryHandler = deleteCategoryHandler;
const updateCategoryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const upgradeUser = yield (0, category_service_1.updateCategory)(req.params.id, req.body);
    try {
        res.status(200).json(upgradeUser);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateCategoryHandler = updateCategoryHandler;
