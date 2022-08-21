const express= require("express");
const { body } = require("express-validator");
const controller=require("./../Controllers/categoryController");
const router = express.Router();

router.route("/category")
    .get(controller.getAllCategory)
    .post([
        body("id").isNumeric("id should be number"),
        body("name").isAlpha("name shuld be charter")],
        validationMW,
        controller.createCategory)
    .put(controller.updateCategory)
    .delete(controller.deleteCategory)

    module.exports=router;