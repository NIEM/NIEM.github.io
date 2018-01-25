---
  title: CCC Types in JSON
  short: JSON
---

- TOC
{:toc}

## Instance example

The example below shows element `nc:Vehicle`, which has a CCC type.  It contains an object with three properties.

Property `nc:VehicleIdentification` also has a CCC type, representing an identification object with one property of its own.

```json
{
  "nc:Vehicle": {
    "nc:VehicleAxleQuantity": 2,
    "nc:VehicleIdentification": {
      "nc:IdentificationID": "AX54C62"
    },
    "nc:VehicleMSRPAmount": 25000
  }
}
```

## Schema example

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "definitions": {
    "nc:VehicleType": {
      "description": "A data type for a conveyance designed to carry an operator, passengers and/or cargo, over land.",
      "allOf": [
        {
          "$ref": "#/definitions/nc:ConveyanceType"
        },
        {
          "type": "object",
          "properties": {
            "nc:VehicleAxleQuantity": {
              "$ref": "#/properties/nc:VehicleAxleQuantity"
            },
            "nc:VehicleIdentification": {
              "$ref": "#/properties/nc:VehicleIdentification"
            },
            "nc:VehicleMSRPAmount": {
              "$ref": "#/properties/nc:VehicleMSRPAmount"
            }
          }
        }
      ]
    }
}
```

{: .note}
- In NIEM, `nc:VehicleType` extends `nc:ConveyanceType`.  This is captured by the `allOf` syntax above, which creates a reference to the parent type, then defines the vehicle-specific properties below.

## Schema template

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "definitions": {
    "NAME": {
      "description": "A data type for ...",
      "allOf": [
        {
          "$ref": "#/definitions/PARENT_TYPE"
        },
        {
          "type": "object",
          "properties": {
            "PROPERTY_1": {
              "$ref": "#/properties/PROPERTY_1"
            },
            "PROPERTY_2": {
              "$ref": "#/properties/PROPERTY_2"
            }
          }
        }
      ]
    }
}
```

{: .note}
- Any attributes that CCC type contains should be represented the same way as elements, as properties under the JSON Schema `properties` key.
