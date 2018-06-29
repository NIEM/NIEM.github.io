---
  title: Associations in JSON
  short: JSON
---

- TOC
{:toc}

## Instance example

{:.note}
- The following two examples show an association between a person and a telephone number.
- The date range and description elements are additional properties relating to this association.

### Inline

The content of the elements in this association are inline.

```json
{
  "scr:PersonPhoneAssociation": {
    "nc:AssociationDateRange": {
      "nc:StartDate": {
        "nc:Date": "2015-01-01"
      },
      "nc:EndDate": {
        "nc:Date": "2016-06-30"
      }
    },

    "nc:AssociationDescriptionText": "The person made multiple calls to the given telephone number.",

    "nc:Person": {
      "nc:PersonName": {
        "nc:PersonFullName": "John Doe"
      }
    },

    "nc:TelephoneNumber": {
      "nc:FullTelephoneNumber": {
        "nc:TelephoneNumberFullID": "212-555-1212"
      }
    }
  }
}
```

### Reference

The person element in this association is defined as a reference to a person described elsewhere in this document, outside of the association.  It can be common for one or more properties to be represented as references rather than inline.

```json
{
  "scr:PersonPhoneAssociation": {
    "nc:AssociationDateRange": {
      "nc:StartDate": {
        "nc:Date": "2015-01-01"
      },
      "nc:EndDate": {
        "nc:Date": "2016-06-30"
      }
    },

    "nc:AssociationDescriptionText": "The person made multiple calls to the given telephone number.",

    "nc:Person": {
      "@id": "P1"
    },

    "nc:TelephoneNumber": {
      "nc:FullTelephoneNumber": {
        "nc:TelephoneNumberFullID": "212-555-1212"
      }
    }
  },

  "nc:Person": {
    "@id": "P1"
    "nc:PersonName": {
      "nc:PersonFullName": "John Doe"
    }
  }
}
```

## Schema example

This example shows the creation of an association type and element.

For both the inline and the reference examples above, the schema will be created the same way.

{:.note}
- The association type...
  - name ends with "AssociationType"
  - definition begins with "A data type for a relationship"
  - extends nc:AssociationType, allowing it to inherit the association date range and description properties
- The association element...
  - name ends with "Association"
  - definition begins with "An association ..."

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "scr:PersonPhoneAssociation": {
      "description": "An association between a PERSON and a PHONE.",
      "oneOf": [
        {
          "$ref": "#/definitions/scr:PersonPhoneAssociation"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/scr:PersonPhoneAssociation"
          }
        }
      ]
    }
  }

  "definitions": {
    "scr:PersonPhoneAssociationType": {
      "description": ">A data type for a relationship between a PERSON and a PHONE.",
      "allOf": [
        {
          "$ref": "#/definitions/nc:AssociationType"
        },
        {
          "type": "object",
          "properties": {
            "nc:Person": {
              "$ref": "#/properties/nc:Person"
            },
            "nc:TelephoneNumber": {
              "$ref": "#/properties/nc:TelephoneNumber"
            }
          }
        }
      ]
    }
  }
}
```

## Schema template

The template below declares an association type and element.

Multiple properties may be added to the association type to capture the primary objects of the association, and optionally any additional properties that further describe the association.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "NAMEAssociation": {
      "description": "An association between ...",
      "oneOf": [
        {
          "$ref": "#/definitions/NAMEAssociation"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/NAMEAssociation"
          }
        }
      ]
    }
  }

  "definitions": {
    "NAMEAssociationType": {
      "description": ">A data type for a relationship ...",
      "allOf": [
        {
          "$ref": "#/definitions/nc:AssociationType"
        },
        {
          "type": "object",
          "properties": {
            "ASSOCIATION-OBJECT": {
              "$ref": "#/properties/ASSOCIATION-OBJECT"
            },
            "ASSOCIATION-PROPERTY": {
              "$ref": "#/properties/ASSOCIATION-PROPERTY"
            }
          }
        }
      ]
    }
  }
}
```
