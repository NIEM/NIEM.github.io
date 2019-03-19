---
  title: Facets in JSON
  short: JSON
---

## Kinds of Facets

See the corresponding [XML list]({{ "/reference/concepts/facet#kinds-of-facets" | relative_url }}) for definitions.

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
{: .table-auto}

{: .note}
>Draft 6 of the JSON Schema specification changes the types of `exclusiveMinimum` and `exclusiveMaximum` from booleans to numbers so that they may be used without also requiring `minimum` and `maximum`.

## Enumerations

Enumerations are defined within a simple type declaration in the `oneOf` array.  Each enumeration is defined as an object with `enum` and `description` properties.

{: .note}
> Defining enumerations in an array is a JSON Schema requirement.  Since NIEM requires definitions for enumerations, the object must be repeated with a single enumeration in each `enum` array and a corresponding `description`.

```json
{
  "oneOf" : [
    { "enum": [ "1" ], "description": "…" },
    { "enum": [ "2" ], "description": "…" },
    { "enum": [ "3" ], "description": "…" }
  ]
}
```

This example shows the definition of `iso_4217:CurrencyCodeSimpleType` with three enumerations:

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

## Numeric Range

This example shows a numeric simple type with a minimum and a maximum value:

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

{: .note}
>
>- The base type may be set to `number` instead of `integer` to allow for decimal values.
>- Add the properties `exclusiveMinimum: true` and `exclusiveMaximum: true` to make the range exclusive of the edge values.

## Generic Template

This template shows the definition of a simple type with a base:

```json
{
  "definitions": {
    "SIMPLE_TYPE": {
      "description": "TYPE_DEFINITION",
      "type": "BASE_TYPE",
      "FACET_KIND": "FACET_VALUE"
    },
  }
}
```

{: .note}
>
>- SIMPLE_TYPE - this should be a qualified name that ends with `SimpleType`.
>- BASE_TYPE - this should be either **string**, **number**, or **integer**.
>- FACET_KIND - this should be one of the values defined in the JSON facets table above.

Example of a string type with a maximum length:

```json
{
  "definitions": {
    "ext:NAMESimpleType": {
      "description": "A data type for...",
      "type": "string",
      "maxLength": 20
    },
  }
}
```
