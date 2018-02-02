---
title: JSON Schema
---
[JSON schema](https://json-schema.org) provides  a JSON vocabulary for defining and validating 
JSON **instances**,  Each JSON schema defines **defined types** and **properties**.

**Defined types** are key-value pairs in which the value is one of the **JSON types**:
* **simple types**
	* `null`
	* `boolean`: either `true` or `false`
	* `number` or `integer`: e.g., `42` or `3.14.15926`
	* `string`: e.g., `"This is a string"`
* **complex types**
	* `object`: e.g., `{ "key1": "value1", "key2": "value2" }", "key2": "value2" }`
	* `array` : e.g., `["first", 2, "third"]`

**properties** key-value pairs in which the value is one of the **JSON type** or a **defined type**.

Numbers and integers may be restricted with the following keywords:
* `multipleOf`: limit the value to be a multiple of a given number
* `minimum`,`exclusiveMinimum`, `maximum`,`exclusiveMaximum`: restrict the range of values

Strings may be restricted with the following keywords:
* `minLength`,`maxLength`: limit the length of the string
* `pattern`: require the value to satisfy a regular expression
* `format`: require the format of the string to be one of the following
	* `date-time	: e.g., "1985-04-12T23:20:50.52Z"
	* `email	:`e.g., "inbox@example.com"
	* `hostname	: e.g., "server.example.com"`
	* `ipv4`, `ipv6	: e.g., "192.168.1.1"`
	* `uri`: e.g. "http://example.com"

Objects may contain one or more **properties** restricted with the following keywords:
* `properties`: a list of the properties that MAY be included in the object
* `required`: a list of properties that MUST be included in the object
* `additionalProperties`: allow  properties that are not listed in the type definition
* `minProperties`, `maxProperties`: limit the number of properties in the object
* `patternProperties`: define types for properties based on their name
* `dependencies`: add restrictions if certain conditions are met

Arrays may contain one or more `items` restricted with the following keywords:
* `type`: limit the type of each item
* `enum`: define the allowable values of each item with an array
* `minItems`, `maxItems`: limit the number or items
* `uniqueItems`: require each item to be unique

In addition, schemas may be combined with the following keywords:
* `allOf`:  must be valid against *all* of the subschemas
* `anyOf`: must be valid against *any* of the subschemas
* `oneOf`: must be valid against *exactly one* of the subschemas

An example JSON schema to request a court hearing is:

```json
{%include_relative schema.json %}
```

An example of a request based on the schema is:

```json
{%include_relative instance.json %}
```
