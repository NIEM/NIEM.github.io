---
  title: CSC Types in JSON
  short: JSON
---

JSON does not have a syntax that directly corresponds to attributes or CSC types.  In this case, any attributes must be treated like regular properties, and a name must be assigned to a newly-created property that carries the type's original simple content.  NIEM uses `rdf:value` as this name.

## Instance example

```json
{
  "nc:AddressCategoryCode": {
    "@id": "a1",
    "rdf:value": "residential"
  }
}
```

`@id` is a reserved key in JSON-LD and should be used in JSON as the counterparts to `structures:id` and `structures:ref` in XML instances.

NIEM also allows for a simpler representation - one in which no attributes will be used.  In this case, the new `rdf:value` property may be omitted and the value may be carried directly on the original property:

```json
{
  "nc:AddressCategoryCode": "residential"
}
```

The specific format to be used should be determined at the exchange level.

## Schema example

```json
{
  "nc:AddressCategoryCodeType": {
    "description": "A data type for a kind of address.",
    "oneOf": [
      {
        "$ref": "#/definitions/nc:AddressCategoryCodeSimpleType"
      },
      {
        "type": "object",
        "properties": {
          "rdf:value": {
            "$ref": "#/definitions/nc:AddressCategoryCodeSimpleType"
          }
        }
      }
    ]
  }
}
```

Guidance on how to represent additional attributes from `structures` in JSON Schema is still under development.
