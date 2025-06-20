"use strict";

/**
 * jsonXmlify
 * A JSON to XML converter.
 *
 * @name jsonXmlify
 * @function
 * @param {Object} inputJSON The JSON object to convert.
 * @param {Object} options Optional options object:
 * 
 *    - `root` {String} Optional root element name. If not provided, no root element is added.
 *    - `beautify` {Boolean} If true, output will be pretty-printed with indentation and newlines.
 * 
 * @return {String} The XML representation of the input JSON.
 */
module.exports = function jsonXmlify (inputJSON, options) {
    if (typeof inputJSON !== 'object' || inputJSON === null) {
        throw new TypeError('Input must be a non-null object');
    }
    options = options || {};
    const rootElement = options.root;
    const beautify = !!options.beautify;
    const xmlParts = [];
    const indentChar = '  ';

    function convertToXML(obj, currentRoot, indentLevel) {
        const indent = beautify ? indentChar.repeat(indentLevel) : '';
        if (currentRoot) {
            xmlParts.push(beautify ? `${indent}<${currentRoot}>\n` : `<${currentRoot}>`);
        }
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (typeof value === 'object' && value !== null) {
                    convertToXML(value, key, indentLevel + 1);
                } else {
                    const childIndent = beautify ? indentChar.repeat(indentLevel + 1) : '';
                    const newline = beautify ? '\n' : '';
                    xmlParts.push(`${childIndent}<${key}>${value}</${key}>${newline}`);
                }
            }
        }
        if (currentRoot) {
            xmlParts.push(beautify ? `${indent}</${currentRoot}>\n` : `</${currentRoot}>`);
        }
    }

    convertToXML(inputJSON, rootElement, 0);
    return beautify ? xmlParts.join('').trim() : xmlParts.join('');
}