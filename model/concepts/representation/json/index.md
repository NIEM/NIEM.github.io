---
  title: Representation Pattern in JSON
  short: JSON
---

- TOC
{:toc}

## Instance example

The example below shows an element with type nc:DateType.

{:.note}
- Property "nc:Date" is used as the representation of a date.
- The date also includes a margin of error duration.  In this cases, the date is plus or minus a period of 3 months.

```json
{
  "nc:ActivityDate": {
    "nc:Date": "2017-06-01",
    "nc:DateMarginOfErrorDuration": "P3M"
  }
}
```

## Schema example

The example below shows..

- The declaration of type nc:DateType, which follows the representation pattern.
- The declaration of several representation element.

{:.note}
> Because JSON Schema does not support substitution groups, representation properties should be added directly to the type.  In XML Schema, the representations would be created as substitutable for an abstract element instead.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "nc:Date": {
      "description": "A full date.",
      "oneOf": [
        {
          "$ref": "#/definitions/niem-xs:date"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/niem-xs:date"
          }
        }
      ]
    },

    "nc:DateTime": {
      "description": "A full date and time.",
      "oneOf": [
        {
          "$ref": "#/definitions/niem-xs:dateTime"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/niem-xs:dateTime"
          }
        }
      ]
    }
  }

  "definitions": {
    "nc:DateType": {
      "description": "A data type for a calendar date.",
      "allOf": [
        {
          "$ref": "#/definitions/_base"
        },
        {
          "type": "object",
          "properties": {
            "nc:Date": {
              "$ref": "#/properties/nc:Date"
            },
            "nc:DateTime": {
              "$ref": "#/properties/nc:DateTime"
            },
            "nc:ZuluDateTime": {
              "$ref": "#/properties/nc:ZuluDateTime"
            },
            "nc:DateMarginOfErrorDuration": {
              "$ref": "#/properties/nc:DateMarginOfErrorDuration"
            }
          }
        }
      ]
    }
  }
}
```

## Schema template

The template belows shows the declaration of a type following the representation pattern, plus two representation properties.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "REPRESENTATION-1": {
      "description": "DEFINITION",
      "oneOf": [
        {
          "$ref": "#/definitions/TYPE"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TYPE"
          }
        }
      ]
    },

    "REPRESENTATION-2": {
      "description": "DEFINITION",
      "oneOf": [
        {
          "$ref": "#/definitions/TYPE"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TYPE"
          }
        }
      ]
    }
  }

  "definitions": {
    "REPRESENTATION-TYPE": {
      "description": "A data type for ...",
      "allOf": [
        {
          "$ref": "#/definitions/_base"
        },
        {
          "type": "object",
          "properties": {
            "REPRESENTATION-1": {
              "$ref": "#/properties/REPRESENTATION-1"
            },
            "REPRESENTATION-2": {
              "$ref": "#/properties/REPRESENTATION-2"
            },
            "ADDITIONAL-CONTENT": {
              "$ref": "#/properties/ADDITIONAL-CONTENT"
            }
          }
        }
      ]
    }
  }
}
```
