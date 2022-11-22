"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
app.use(body_parser_1.json());
app.listen(3000, function () {
    console.log("Listening on Port - 3000");
});
