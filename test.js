"use strict";

const assert = require("assert");
const jsonXmlify = require("../lib");

describe("jsonXmlify", function() {
    it("should convert simple JSON to XML without root", function() {
        const input = { foo: "bar", num: 42 };
        const expected = "<foo>bar</foo><num>42</num>";
        assert.strictEqual(jsonXmlify(input), expected);
    });

    it("should wrap with root element if options.root is provided", function() {
        const input = { foo: "bar", num: 42 };
        const expected = "<root><foo>bar</foo><num>42</num></root>";
        assert.strictEqual(jsonXmlify(input, { root: "root" }), expected);
    });

    it("should pretty-print XML if beautify is true", function() {
        const input = { foo: "bar", num: 42 };
        const expected = `<root>\n  <foo>bar</foo>\n  <num>42</num>\n</root>`;
        assert.strictEqual(jsonXmlify(input, { root: "root", beautify: true }), expected);
    });

    it("should handle nested objects", function() {
        const input = { a: { b: { c: 1 } } };
        const expected = "<a><b><c>1</c></b></a>";
        assert.strictEqual(jsonXmlify(input), expected);
    });

    it("should handle arrays as objects", function() {
        const input = { arr: [1, 2, 3] };
        const expected = "<arr><0>1</0><1>2</1><2>3</2></arr>";
        assert.strictEqual(jsonXmlify(input), expected);
    });

    it("should throw on non-object input", function() {
        assert.throws(() => jsonXmlify(null), TypeError);
        assert.throws(() => jsonXmlify(42), TypeError);
        assert.throws(() => jsonXmlify("foo"), TypeError);
    });
});
