---
  title: Simple Types in JSON
  short: JSON
---

- TOC
{:toc}

## Instance example

The following shows an example of a property with a value based on a simple type:

```json
{
  "nc:AddressCategoryCode": "residential"
}
```

## Schema example

```json
{
  "nc:AddressCategoryCodeSimpleType": {
    "type": "string",
    "description": "A data type for a kind of address.",
    "oneOf": [
      {
        "enum": [ "business" ],
        "description": "business"
      },
      {
        "enum": [ "residential" ],
        "description": "residential"
      }
    ]
  }
}
```

See [here](../../../facet/json) for examples of simple types with other kinds facets.

## Schema template

The following is a template for a simple type with an enumeration:

```json
{
  "NAME": {
    "type": "BASE_TYPE",
    "description": "A data type for ...",
    "oneOf": [
      {
        "enum": [ "CODE" ],
        "description": "DEFINITION"
      }
    ]
  }
}
```

The following is a template for a simple type with an enumeration:

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
