---
  title: Substitutable Elements in JSON
  short: JSON
  todo: additionalProperties?  JSON-LD support?
---

- TOC
{:toc}

## Instance example

A substitutable element can be used in place of the element defined as the head of its substitution group.  This should appear in JSON similar to the way it appear in XML.

The example below shows the substitution of element `nc:Date` for element `nc:DateRepresentation`, which does not appear in the instance.

JSON example:

```json
{
  "nc:Person" : {
    "nc:PersonBirthDate" : {
      "nc:Date"  : "1950-06-30"
    }
  }
}
```

## Schema

Substitutions are not declared in JSON Schema.

A JSON Schema with the `additionalProperties` keyword set to true will allow for the addition of properties not defined in the schema.  This is how substitutions can be permitted.

```json
{
   "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": true,
  "properties": {
    ...
  },
  "definitions": {
    ...
  }
}
```
