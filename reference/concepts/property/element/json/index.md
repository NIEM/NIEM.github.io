---
  title: Elements in JSON
  short: JSON
  todo: Check accuracy of reason behind property declaration
---

- TOC
{:toc}

## Instance example

```json
{
  "nc:Person": {
    "nc:PersonName" : {
      "nc:PersonGivenName": "John",
      "nc:PersonSurName": "Smith"
    }
  }
}
```

{: .note}
- `nc:Person` and `nc:PersonName` are elements that carry complex content.
- `nc:PersonGivenName` and `nc:PersonSurName` are elements that carry simple content (values).

## Schema example

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "nc:Person": {
      "description": "A human being.",
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

Note that this is different from the corresponding XML Schema syntax.  An XML type defines if a property that it contains appears once or multiple times.  If a person has two middle names, then the element `nc:PersonMiddleName` may appear in the instance multiple times.

In NIEM JSON, the property declares itself to have either the expected type, or an array of objects of the expected type.  Properties are keys in a JSON object - they can only appear once.

This syntax supports the simple case, where a property is defined to have only one of the given value (`"nc:PersonMiddleName"`).  It also supports the case where a property has multiple values, and must be accessed as an array, like `"nc:PersonMiddleName"[0]`, `"nc:PersonMiddleName"[1]`, etc.

Exchange schemas may subset this to choose the actual representation that is needed, but reference schemas should make both options available.

## Schema template

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "NAME": {
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
}
```
