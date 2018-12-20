"use strict";
let curry = require("./curry.js");
let map = require("./map.js");

const mapWith = function mapWith(fn) {
    return curry(map)(fn);
};

module.exports = mapWith;
