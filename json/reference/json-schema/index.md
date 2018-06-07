---
title: JSON Schema
links:
  - url: /json/reference/json-schema/references/
  - url: /json/reference/json-schema/sample/
---
[JSON schema](https://json-schema.org) provides  a JSON vocabulary for defining and validating
JSON **instances**.

Each schema includes one or more key-value pairs or **keywords**, including
a `type` keyword set to a JSON simple value (`null`, `boolean`, `number`, `integer` or `string`),
`array` or `object` as defined in [JSON data](../../faq/data):

All schemas may include the following keywords:
* A`description` keyword to provide a definition for this type or property.
* An `$id` keyword to provide a base URL for referencing this schema, type or property.
* A `$ref` keyword to provide a [JSON pointer](./references) to another schema, type or property,

Other keywords are specific to the `type` as follows:
* Numbers and integers may be restricted with the following keywords:
	* `multipleOf`: limit the value to be a multiple of a given number
	* `minimum`,`exclusiveMinimum`, `maximum`,`exclusiveMaximum`: restrict the range of values
* Strings may be restricted with the following keywords:
	* `minLength`,`maxLength`: limit the length of the string
	* `pattern`: require the value to satisfy a regular expression
	* `format`: require the value to match a certain format`(e.g. date-time`, `email`, `ipv4`, `uri`)
* Arrays may contain one or more `items` restricted with the following keywords:
	* `type`: limit the type of each item
	* `enum`: define the allowable values of each item with an array
	* `minItems`, `maxItems`: limit the number or items
	* `uniqueItems`: require each item to be unique
* Objects may contain one or more **properties** restricted with the following keywords:
	* `properties`: list properties that MAY be included in the object
	* `required`: list properties that MUST be included in the object
	* `additionalProperties`: allow  properties that are not listed in the type definition
	* `minProperties`, `maxProperties`: limit the number of properties in the object
	* `patternProperties`: define types for properties based on their name
	* `dependencies`: add restrictions if certain conditions are met

In addition, schemas may be combined with the following keywords:
* `allOf`:  must be valid against *all* of the subschemas
* `anyOf`: must be valid against *any* of the subschemas
* `oneOf`: must be valid against *exactly one* of the subschemas

An simple example of a JSON schema to request a court hearing is:

```json
{%include_relative schema.json %}
```

An example of a JSON request based on the schema is:

```json
{%include_relative instance.json %}
```
A complete NIEM-conforming example of a JSON court scheduling exchange adapted from the LegalXML Electronic Court Filing (ECF) 5.0 specification is [also available](./sample)

{% include icon-list.html links=page.links %}
