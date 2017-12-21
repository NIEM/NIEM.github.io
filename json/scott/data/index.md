---
title: JSON data
---

JSON data often appears as a simple, flat list of (key, value) pairs, as
in the example on the left.  JSON data can also be complex, with
nested objects and arrays of objects or values, as in the example on
the right.

```
{                                {
  "lname": "Wimsey",               "name": {
  "gname": "Peter",                  "lname": "Wimsey",
  "date": "1893-05-04",              "gname": [ "Peter","Death","Bredon" ],
  "lat": 51.835,                   },
  "lon": -0.417                    "date": "1893-05-04,
}                                  "lat": 51.835,
                                   "lon": -0.417
                                 }
```

JSON data is made up of objects, arrays, strings, numbers, and the
special tokens `true`, `false`, and `null`.  A JSON object is represented as
a pair of curly brackets surrounding a list of comma-separated _key:value_ pairs. An
array is represented as a pair of square brackets surrounding a list
of elements.

The above two JSON examples are both valid examples of NIEM-JSON data.
People with NIEM-XML experience are accustomed to NIEM data having a
very different appearance, and might wish to consult [Comparing
NIEM-JSON and NIEM-XML](./comparison).

Objects, arrays, and scalars in NIEM-JSON are interpreted as
a collection of assertions about entities.  See [Interpreting
NIEM-JSON data](./concepts).

The rules for interpreting NIEM-JSON are consistent with the rules for
interpreting [JSON-LD: A JSON-based serialization for linked
data](https://www.w3.org/TR/json-ld/). In fact, NIEM-JSON data _is_
JSON-LD data. NIEM uses JSON-LD to:

* Provide URIs for each [data element](./data-element) in NIEM-JSON data

* Provide URIs for selected objects in NIEM-JSON data

While NIEM-JSON is JSON-LD, consumers are not obligated to process it
that way. Developers have three options:

* They may process NIEM-JSON as plain JSON data. No understanding of
  JSON-LD is required.
  
* They may process NIEM-JSON using JSON-LD tools; these can render the
  data in compacted or expanded form, which can simplify
  post-processing.
  
* They may process NIEM-JSON as RDF, using Linked Data technologies
  such as SPARQL, because [JSON-LD is a concrete RDF
  syntax](https://www.w3.org/TR/json-ld/#relationship-to-rdf). 
  
More details may be found in [#Processing NIEM-JSON data](tbd).
