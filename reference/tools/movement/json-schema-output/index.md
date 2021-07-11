---
title: Movement and JSON Schema
description: The current status of Movement's support of NIEM JSON subsets.
---

{:toc}
- TOC

## Target audience

Movement was build on the assumption of two types of JSON users:

1. <b>Those who would like to leverage only the NIEM terms and definitions when building custom JSON objects for a lightweight exchange.</b>

   For this user type, we have the current JSON Schema output of the Beta Movement Tool. It's as simple as we can make it—through a lightweight version of the model content, and the ability to only select simple types from it, you can auto generate a conventional JSON Schema. Some may argue it's too simple, and for others it's exactly what they need. We realize that this is a different approach to what NIEM has traditionally offered, such as hierocracy and relationships of model content. We've built it as much as we can without broad user feedback. We would like to start the conversation to find out what you'd like to add back—it's in Beta until we do.

1. <b>Those who would like to leverage the content in NIEM as well as its relationships for more complex exchanges that require context.</b>

   This user type requires JSON Schema functionality that is more reflective of what you can do today with NIEM in XML--it takes into consideration things like reusability, hierarchy structure, and cardinality. This solution also establishes the foundation upon which JSON-Linked Data (JSON-LD) can occur. To learn more about this approach and access guidance for how to use it, visit <a href="http://niem.github.io/json">our JSON landing page on GitHub</a>.

   In addition, starting with the NIEM 4.0 release, NIEM provides a default <a href="http://release.niem.gov/jsonld-context/niem-4.0-context.jsonldJSON-LD">JSON-LD context for NIEM namespaces</a>. The JSON-LD context is a JSON file that identifies, for every namespace for NIEM content, the namespace prefix and its corresponding namespace URI.

  Help us drive this effort forward by telling us what functionalities you will actually use!

We drafted up a sample use case scenario for you to visualize both approaches to help understand details for each.

## What Movement puts out today

Movement provides standard JSON Schema best practices and types, is human and machine readable, and validates your simple type JSON objects while leveraging NIEM terms and definitions.

Advantages:

- Smaller/more concise JSON Schema output
- Readable
- No custom placeholder elements
- Uses JSON specific types

Drawbacks:

- Lack of cardinality, enum descriptions, substitution groups, and parent-child structured relationships/context
- No JSON-LD adaptability

## Sample Use Case Scenario

User picks 4 simple elements for the exchange:

- VehicleAxleQuantity
- IdentificationID
- Amount
- CurrencyCode

## Sample JSON Schema output

```json
{% include_relative sample.jsonld %}
```

## Tool output summary

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

Need a more robust solution? Please see the [NIEM JSON section]({{"/json"|relative_url}}) for the guidance on how to build JSON Schema that supports more features of NIEM and JSON-LD.
