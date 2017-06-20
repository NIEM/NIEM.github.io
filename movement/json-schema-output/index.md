---
title: Movement and JSON Schema
---

We need your feedback on NIEM JSON!

Before we can finalize the NIEM JSON Schema solution, we need to hear from
actual JSON users. Please review the content on this page and provide your
feedback on what you see, don’t see, and want to see.

We are assuming there are two types of JSON users:

1. <b>Those who would like to leverage only the NIEM terms and definitions when
   building custom JSON objects for a lightweight exchange.</b>

   For this user type, we have the current JSON Schema output of the Beta
   Movement Tool. It’s as simple as we can make it—through a lightweight version
   of the model content, and the ability to only select simple types from it,
   you can auto generate a conventional JSON Schema. Some may argue it’s too
   simple, and for others it’s exactly what they need. We realize that this is a
   different approach to what NIEM has traditionally offered, such as hierocracy
   and relationships of model content. We’ve built it as much as we can without
   broad user feedback. We would like to start the conversation to find out what
   you’d like to add back—it’s in Beta until we do.

2. <b>Those who would like to leverage the content in NIEM as well as its
   relationships for more complex exchanges that require context.</b>

   This user type requires JSON Schema functionality that is more reflective of what you
   can do today with NIEM in XML--it takes into consideration things like
   reusability, hierarchy structure, and cardinality. This solution also
   establishes the foundation upon which JSON-Linked Data (JSON-LD) can
   occur. Ideally, the vision for the use of JSON Schema with JSON-LD is
   for NIEM to host JSON-LD normative dictionaries online for the schemas to map
   its terms and definitions to the NIEM JSON-LD established context. Help us drive this effort forward by telling us what
   functionalities you will actually use!

We drafted up a sample use case scenario for you to visualize both
approaches to help understand details for each.

This document is one of two. This one describes what Movement does now (see below).
[The other document](../../json/sample-schema/) describes some options for using
JSON Schema that supports more features of NIEM and JSON-LD.

## What Movement puts out today

Movement provides standard JSON Schema best practices and types, is human and
machine readable, and validates your simple type JSON objects while
leveraging NIEM terms and definitions.

Advantages:

- Smaller/more concise JSON Schema output
- Readable
- No custom placeholder elements
- Uses JSON specific types

Drawbacks:

- Lack of cardinality, enum descriptions, substitution groups, and parent-child
  relationships/context
- No JSON-LD adaptability

## Sample Use Case Scenario

User picks 4 simple elements for the exchange:

- VehicleAxleQuantity
- IdentificationID
- Amount
- CurrencyCode

## Sample JSON Schema output

```javascript
{% include_relative sample.jsonld %}
```

## Summary of what you get as the tool output

Uses conventional JSON Schema notation to replicate NIEM simple types.

### Enums

Enums are represented in the conventional JSON Schema way. This schema approach does not provide the description for each option of an enum type element within the JSON Schema.

For example:

```javascript
"enum": ["1","2","3"]
```

### Simple types

Simple types do not take cardinality into consideration. This schema approach allows developers to use single key to single value within their JSON objects.

For example:

```javascript
"Amount": 12 
```

### JSON-LD features

Does not take into account eventual JSON-LD adaptability or context.


Need a more robust solution? [This other sample](../../json/sample-schema/) describes some options for using
JSON Schema that supports more features of NIEM and JSON-LD.


