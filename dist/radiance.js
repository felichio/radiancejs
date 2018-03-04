"use strict";

// let curry = require("../source/curry.js");
// let map = require("../source/map.js");
// let mapWith = require("../source/mapWith.js");

let modules = [
    {
        name: "curry",
        path: "../source/"
    },
    {
        name: "map",
        path: "../source/"
    },
    {
        name: "mapWith",
        path: "../source/"
    },
]


modules.forEach(m => module.exports[m.name] = require(`${m.path + m.name}`));
