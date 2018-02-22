---
  title: Roles in JSON
  short: JSON
---

- TOC
{:toc}

## Role types

### Inline instance example

{:.note}
> In the instance example below, the basic information about the person (name, birthdate) appears **under** the nc:RoleOfPerson element.

```json
{
  "j:CrashDriver": {
    "nc:RoleOfPerson": {
      "nc:PersonName": {
        "nc:PersonFullName": "John Doe"
      },
      "nc:PersonBirthDate": {
        "nc:Date": "1966-06-06"
      }
    },
    "j:CrashDriverViolationCode": "A10",
    "j:CrashDrivingViolationCode": "S16"
  }
}
```

### Reference instance example

{:.note}
> In the instance example below, the basic information about the person (name, birthdate) is **linked** from the nc:RoleOfPerson element to element nc:Person, which is defined elsewhere in the instance.

```json
{
  "j:CrashDriver": {
    "nc:RoleOfPerson": {
      "@id": "BRAVO"
      }
    },
    "j:CrashDriverViolationCode": "A10",
    "j:CrashDrivingViolationCode": "S16"
  },

  "nc:RoleOfPerson": {
    "@id": "BRAVO",
    "nc:PersonName": {
      "nc:PersonFullName": "John Doe"
    },
    "nc:PersonBirthDate": {
      "nc:Date": "1966-06-06"
    }
  }
}
```

### Schema example

This example shows a role type (CrashDriverType) and an element with that type (CrashDriver).

{: .note}
- The role type
  - uses one role-of element (nc:RoleOfPerson)
  - adds additional role-specific properties
  - extends structures:ObjectType (not nc:PersonType)
- The element of the role type (CrashDriver) requires no special syntax or features.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "j:CrashDriver": {
      "description": "A motor vehicle driver involved into a traffic accident.",
      "oneOf": [
        {
          "$ref": "#/definitions/j:CrashDriverType"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/j:CrashDriverType"
          }
        }
      ]
    }
  }

  "definitions": {
    "j:CrashDriverType": {
      "description": "A data type for a motor vehicle driver involved in a traffic accident.",
      "allOf": [
        {
          "$ref": "#/definitions/_base"
        },
        {
          "type": "object",
          "properties": {
            "nc:RoleOfPerson": {
              "$ref": "#/properties/nc:RoleOfPerson"
            },
            "j:CrashDriverViolation": {
              "$ref": "#/properties/j:CrashDriverViolation"
            },
            "j:CrashDrivingViolation": {
              "$ref": "#/properties/j:CrashDrivingViolation"
            }
          }
        }
      ]
    }
  }
}
```

### Schema template

{:.note}
- In the template below...
  - One or more role-of elements may be referenced to represent the object(s) of the role.
  - One or more additional properties may be referenced, representing the role-specific content.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
  }

  "definitions": {
    "ROLETYPE": {
      "description": "A data type for ...",
      "allOf": [
        {
          "$ref": "#/definitions/_base"
        },
        {
          "type": "object",
          "properties": {
            "ROLE-OF-PROPERTY": {
              "$ref": "#/properties/ROLE-OF-PROPERTY"
            },
            "ADDITIONAL-PROPERTY": {
              "$ref": "#/properties/ADDITIONAL-PROPERTY"
            }
          }
        }
      ]
    }
  }
}
```

## Role-of element

### Schema example

The example below shows the definition of role-of element "RoleOfPerson" from Core.

{:.note}
- The role-of element has the type of the object being represented, in this case, nc:PersonType.
- The role-of element must substitute element "nc:RoleOfAbstract"

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "nc:RoleOfProperty": {
      "description": "A person of whom the role object is a function.",
      "oneOf": [
        {
          "$ref": "#/definitions/nc:PersonType"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/nc:PersonType"
          }
        }
      ]
    }
  }
}
```

### Schema template

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "nc:RoleOfNAME": {
      "description": "DEFINITION",
      "oneOf": [
        {
          "$ref": "#/definitions/OBJECT-TYPE"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/OBJECT-TYPE"
          }
        }
      ]
    }
  }
}
```
