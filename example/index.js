"use strict";

const jsonXmlify = require("../lib");

const xmlResult = jsonXmlify({
    name: {
        first: "Johnny",
        last: "B."
    },
    age: 42,
    hobbies: ["coding", "reading", "gaming"],
});

console.log("XML Result:", xmlResult);

console.log("XML Result with root element:", jsonXmlify({
    name: {
        first: "Johnny",
        last: "B."
    },
    age: 42,
    hobbies: ["coding", "reading", "gaming"],
}, { root: "person" }));

console.log("XML Result with root and beautify:", jsonXmlify({
    name: {
        first: "Johnny",
        last: "B."
    },
    age: 42,
    hobbies: ["coding", "reading", "gaming"],
}, { root: "person", beautify: true }));