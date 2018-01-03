---
title: JSON-LD processing
---

JSON-LD provides a specification,
[JSON-LD 1.1 Processing Algorithms and API](https://json-ld.org/spec/latest/json-ld-api/),
whic provides standard operations for processing JSON-LD. These operations allow
JSON data to be transformed to various formats for different purposes, and
enables the meaning of data that uses local terminology to be widely comprehended.

The specification describes operations for expansion, compaction, flattening,
and converting to or from RDF. This page highlights only the expansion and
compaction algorithms; see
[the specification](https://json-ld.org/spec/latest/json-ld-api/) for
information about the other operations.

## Expansion

The expansion algorithm removes JSON-LD contexts from a message, cooking any
alises defined in the context directly into the data. In addition, anywhere an
array could occur, it places an array. An overview is provided in
[section 2.1, Expansion](https://json-ld.org/spec/latest/json-ld-api/#expansion).

For example:

```json
{
  "@context": {
    "nc": "http://release.niem.gov/niem/niem-core/4.0/#"
  },
  "nc:PersonPreferredName": "Morty"
}
```

This data, processed by the expansion algorithm, is expanded to:

```json
[
  {
    "http://release.niem.gov/niem/niem-core/4.0/#PersonPreferredName": [
      {
        "@value": "Morty"
      }
    ]
  }
]
```

## Compaction

The compaction operation is the inverse of the expansion algorithm, encoding
JSON-LD data based on a given context. For example, given the expanded data
above, compacted against the context:

```json
{
    "nc": "http://release.niem.gov/niem/niem-core/4.0/#"
}
```

...yields the JSON data:

```json
{
  "@context": {
    "nc": "http://release.niem.gov/niem/niem-core/4.0/#"
  },
  "nc:PersonPreferredName": "Morty"
}
```

When compacted against an empty context:

```json
{
}
```

...it yields JSON data that does not depend on any context, but which has a
simplified form:

```json
{
  "http://release.niem.gov/niem/niem-core/4.0/#PersonPreferredName": "Morty"
}
```

The data could be compacted against a context that provides a short local name
for the term:

```json
{ 
  "nick": "http://release.niem.gov/niem/niem-core/4.0/#PersonPreferredName"
}
```

...yielding compacted data that uses the short term:

```json
{
  "nick": "Morty"
}
```

