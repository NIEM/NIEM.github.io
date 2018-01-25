---
title: Names for JSON data
links:
  - url: /json/names/reuse/
  - url: /json/names/syntax/
  - url: /json/names/namespaces/
---

An object within a JSON document is composed of keys with corresponding values,
for example:

```javascript
{% include_relative short-names.json %}
```

In this example, each key is a string. When exchanging data with in JSON, each
participant needs to agree on basic facts about the data:

* What are the allowed names for values and objects within the JSON document?
* What do the various names mean?
* What are the allowed values for a given name? 

NIEM defines a methodology for [defining and reusing names for data](reuse).

NIEM data names follow [a specific syntax](syntax), based on the ISO 11179 standard.

NIEM names are [grouped by namespaces](namespaces), distinguishing names that would otherwise
be ambiguous or conflicting, and identifying names from specific versions of
vocabularies.

Next: [JSON-LD](../json-ld)
