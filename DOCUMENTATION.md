## Documentation

You can see below the API reference of this module.

### `jsonXmlify(inputJSON, options)`
A JSON to XML converter.

#### Params

- **Object** `inputJSON`: The JSON object to convert.
- **Object** `options`: Optional options object:
   - `root` {String} Optional root element name. If not provided, no root element is added.
   - `beautify` {Boolean} If true, output will be pretty-printed with indentation and newlines.

#### Return
- **String** The XML representation of the input JSON.

