---
title: JSON-LD
---

NIEM JSON documents are expressed using JSON-LD. JSON-LD is a method of using
JSON to expressed lined data, including RDF and OWL data. There are tools
available that transform JSON-LD data in various ways.

JSON-LD is a pattern of using JSON that maps to Resource Description Format
(RDF). NIEM has a mapping to RDF, as described by
[the NIEM Naming and Design Rules, section 5, *The NIEM conceptual model*](https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html#section_5).
The expression of NIEM data in JSON-LD is, basically, the JSON-LD form of the
RDF data that NIEM XML data would represent. 

For most people, that's too much information, and it's sufficient to know that
NIEM JSON data follows the structure and names of NIEM XML data.

JSON-LD allows a message to use short names as object keys, but still have those
keys represent full URIs, which can represent the qualified names used in NIEM
XML. The short names can have used XML qualified name syntax (e.g.,
`nc:Vehicle`), or can have a short syntax defined by an exchange developer
(e.g., `vehicle`). These names are specified by [a JSON-LD context](context),
which is a JSON document (or part of a JSON-LD document).

JSON-LD provides a simple way of [expressing the identifier of an object, using a
construct called `@id`](identifiers). These identifiers handle the
identification and referencing that are handled by NIEM's `structures:id`,
`structures:ref`, and `structures:uri` attrributes.

NEXT: [NIEM content](models)
