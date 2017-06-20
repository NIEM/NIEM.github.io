---
title: Sample JSON Schema
---

This document is one of two. This one describes some options for using JSON
Schema that supports features of NIEM and JSON-LD.
[The other document](../../movement/json-schema-output) describes what Movement does now.

A JSON Schema structure that provides what you would expect from NIEM XML:
cardinality, enumeration options descriptions, substitution group, and
simple/complex types and their inherent relationships. Even though this solution
is a little more complicated to read, it still validates and leverages the NIEM
vocabulary and relationships. It also provides future adaptability for JSON-LD
context.

Advantages:

- Has cardinality, enum descriptions, substitution groups, and parent-child
  relationships/context
- JSON-LD adaptability/context for future NTAC implementations

Drawbacks:

- Larger/more complicated JSON Schema output
- Not as human readable
- Custom placeholder elements that are not common in JSON Schema
- Uses some NIEM specific types that align better with XML

## Sample Use Case Scenario

User picks 8 complex/simple elements for the exchange:

- Vehicle
    - VehicleAxleQuantity
    - VehicleIdentification 
        - IdentificationID
    - VehicleMSRPAmount
        - Amount
        - Currency 
            - CurrencyCode
            
## Sample JSON Schema output

```javascript
{% include_relative sample2.jsonld %}
```

## Summary of what you get with this approach

Uses more detailed JSON Schema notation to replicate NIEM simple and complex
type interactions for substitution groups and parent-child
relationships/context. It also provides “rdf:value” connotation for complicated
complex to simple types interactions.

### Enumerations

Enums are represented with a combination of “oneOf” JSON Schema keyword, arrays,
and definitions. This schema approach provides the description for each option
of an enum type element within the JSON Schema.

For example:

```javascript
"oneOf" : [
  { "enum": [ "1" ], "description": "…" },
  { "enum": [ "2" ], "description": "…" },
  { "enum": [ "3" ], "description": "…" }
]
```

### Simple types

Simple types take into consideration cardinality with a combination of “oneOf” JSON Schema keyword, arrays, items, and references. This schema approach allows developers to use single key to single value and/or single key to multiple values within their JSON objects.

For example:

```javascript
“Amount”: [ 12, 36 ]
```

### JSON-LD features

Defines “_base” placeholder for eventual JSON-LD implementation/context. This
placeholder approach will enable eventual JSON-LD context when NTAC establishes
NIEM JSON-LD normative libraries that will be hosted in NIEM.gov. A JSON-LD
context is used to map terms (i.e. properties with associated values in a JSON
document) to URLs—a term is a short word that expands to a URL.


Need something simplier? [This other sample](../../movement/json-schema-output) describes what Movement does now, a conventional JSON Schema output.
