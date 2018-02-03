---
title: JSON for NIEM
links:
  - url: /json/data/
  - url: /json/names/
  - url: /json/json-ld/
  - url: /json/models/
  - url: /json/json-schema/
  - url: /json/advanced/
  - url: /json/guidance/
  - url: /json/outline/
---

NIEM is in the process of adopting [JSON (Javascript Object Notation)](data) as
a standard format for representing data based on the NIEM data model.

[JSON data](data) has a hierarchical structure based on simple values, arrays,
and objects.

The [names](names) of JSON object properties can reuse the
[terms and namespaces of NIEM data definitions](names), allowing for reuse of
data definitions across XML and JSON, and supporting JSON exchanges for data
previously defined for XML.

NIEM uses [json-ld](json-ld) to handle what is done in XML via XML Namespaces
and XML ID and IDREF attributes. JSON-LD contexts allow short terms to designate
URIs as property names. JSON-LD's ID properties (e.g., `@id`, or other
properties of type ID) can identify links between data, as ID and IDREF do
(e.g., NIEM `structures:id` and `structures:ref`)

NIEM has published a
[JSON-LD context for the NIEM 4.0 release](https://release.niem.gov/jsonld-context/niem-4.0-context.jsonld),
which provides a Uniform Resource Identifier (URI) mapping for each conformant
namespace used in NIEM. This provides JSON users an easy way for JSON messages
to use and reference the model, providing an easy-to-use linked data approach to
NIEM.

Use of NIEM JSON does not require any use of XML; NIEM JSON exchanges are pure
JSON, with JSON-LD providing some features previously provided by XML. For users
already familiar with XML, the NTAC produced
[Non-Normative Guidance in Using NIEM with JSON](guidance).  This document lays
out how a NIEM IEPD describes a JSON message, by showing that XML elements,
attributes, and other features can be expressed as JSON objects. These
guidelines highlight the use of JSON-LD for namespace-qualified names, the RDF
conceptual model used by NIEM, and linked data methodologies.

Future work will develop specifications defining NIEM JSON messages as a fully
NIEM-conformant representation of a NIEM IEPD. An
[outline of the JSON guidance](outline) provides a map of JSON pages, both those
already written and those to come later.

{% include icon-list.html links=page.links %}
