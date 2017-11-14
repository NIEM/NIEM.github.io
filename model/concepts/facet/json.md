---
  title: Facets in JSON
  tutorial: json
---

- TOC
{:toc}

## Enumerations

Enumerations are defined within a simple type declaration in the `oneOf` array.  Each enumeration is defined as an object with `enum` and `description` properties.

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

```json
{
  "definitions": {
    "QUALIFIED_SIMPLE_TYPE": {
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
{: #tutorial-facet-json }

{% include copybutton.html id="tutorial-facet-json" %}

## Other Facets

TBD: JSON guidance under development.
