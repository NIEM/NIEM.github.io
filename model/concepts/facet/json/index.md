---
  title: Facets in JSON
  short: JSON
  training: json
  next: adapter
---

- TOC
{:toc}

## Kinds of Facets

See the [XML list with definitions](.#kinds-of-facets).

| XML Facet      | JSON Facet | Text | Num | Date |
| -------------- | ---------- |:----:|:---:|:----:|
| enumeration    | enum       |   X  |     |      |
| fractionDigits | n/a        |      |     |      |
| length         | minLength<br>maxLength| X | |  |
| maxLength      | maxLength  |   X  |     |      |
| minLength      | minLength  |   X  |     |      |
| minExclusive   | minimum<br>exclusiveMinimum: true |  | X |   |
| minInclusive   | minimum    |      |  X  |      |
| maxExclusive   | maximum<br>exclusiveMaximum: true |  | X |   |
| maxInclusive   | maximum    |      |  X  |      |
| pattern        | pattern    |   X  |     |      |
| totalDigits    | n/a        |      |     |      |
| whiteSpace     | n/a        |      |     |      |

Note that Draft 6 of the JSON Schema specification changes the types of `exclusiveMinimum` and `exclusiveMaximum` from booleans to numbers so that they may be used without also requiring `minimum` and `maximum`.

## Enumerations

Enumerations are defined within a simple type declaration in the `oneOf` array.  Each enumeration is defined as an object with `enum` and `description` properties.

- Defining enums in an array is a JSON Schema requirement, to allow for defining all enumerations together.  Since NIEM requires definitions on enumerations, the enum keyword is repeated, with only a single enumeration in each array.

```json
{
  "oneOf" : [
    { "enum": [ "1" ], "description": "…" },
    { "enum": [ "2" ], "description": "…" },
    { "enum": [ "3" ], "description": "…" }
  ]
}
```

### Example

The example below shows the definition of iso_4217:CurrencyCodeSimpleType, with three enumerations.

```json
{
  "definitions": {
    "iso_4217:CurrencyCodeSimpleType": {
      "type": "string",
      "description": "A data type for a currency that qualifies a monetary amount.",
      "oneOf": [
        {
          "enum": [ "EUR" ],
          "description": "Euro"
        },
        {
          "enum": [ "GBP" ],
          "description": "Pound Sterling"
        },
        {
          "enum": [ "USD" ],
          "description": "US Dollar"
        }
      ]
    }
  }
}
```

### Template

This template shows a simple type with two enumerations.

- The type name should be qualified, and it should end with "CodeSimpleType" since it defines enumerations.

```json
{
  "definitions": {
    "PREFIX:NAMECodeSimpleType": {
      "type": "string",
      "description": "TYPE_DEFINITION",
      "oneOf": [
        {
          "enum": [ "ENUM_1" ],
          "description": "DEFINITION_1"
        },
        {
          "enum": [ "ENUM_2" ],
          "description": "DEFINITION_2"
        }
      ]
    }
  }
}
```

## Numeric Range Example

This example shows a numeric simple type with a minimum and a maximum value.

- The base type may be set to `number` instead of `integer` to allow for decimal values.
- Add the properties `exclusiveMinimum: true` and `exclusiveMaximum: true` to make the range exclusive of the edge values.

```json
{
  "definitions": {
    "my:CustomRangeSimpleType": {
      "description": "A data type for ...",
      "type": "integer",
      "minimum": 0,
      "maximum": 100
    },
  }
}
```

## Other Facets

### Generic Template

This template shows the definition of a simple type with a base.

- The type name should be a qualified name that ends with "SimpleType".
- The base type should be either "string", "number", or "integer".
- The facet kind should be one of the values defined in the JSON facets table above.

```json
{
  "definitions": {
    "PREFIX:NAMESimpleType": {
      "description": "TYPE_DEFINITION",
      "type": "PREFIX:BASE_TYPE",
      "FACET_KIND": "FACET_VALUE"
    },
  }
}
```

### Example

```json
{
  "definitions": {
    "my:NonNegativeIntegerSimpleType": {
      "description": "A data type for...",
      "type": "string",
      "maxLength": 20
    },
  }
}
```
