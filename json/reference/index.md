---
title: A NIEM-JSON Reference Guide
short: Reference Guide
description: Provides normative and non-normative guidance on how NIEM and JSON are used, including lots of examples.
links:
  - url: /json/reference/names/
  - url: /json/reference/json-ld/
  - url: /json/reference/models/
  - url: /json/reference/json-schema/
  - url: /json/reference/advanced/
  - url: /json/reference/guidance/
---

Use of NIEM JSON does not require any use of XML; NIEM JSON exchanges are pure
JSON, with [JSON-LD](json-ld) providing some features of XML and [JSON
Schema](json-schema) providing some features of XML Schema. For users
already familiar with XML, the NTAC produced
[Non-Normative Guidance in Using NIEM with JSON](guidance).  This document lays
out how a NIEM IEPD describes a JSON message, by showing that XML elements,
attributes, and other features can be expressed as JSON objects. These
guidelines highlight the use of JSON-LD for namespace-qualified names, the RDF
conceptual model used by NIEM, and linked data methodologies.

The NIEM data model contains many community-agreed data definitions suitable for reuse.
The [names](names) of JSON object properties can reuse the [terms and
namespaces of NIEM data definitions](names), allowing for reuse of data
definitions across XML and JSON, and supporting JSON exchanges for data
previously defined for XML.

NIEM has published a [JSON-LD context for the NIEM 4.0
release](https://release.niem.gov/jsonld-context/niem-4.0-context.jsonld),
which provides a Uniform Resource Identifier (URI) mapping for each
conformant namespace used in NIEM. This provides JSON users an easy way for
JSON messages to use and reference the model, providing an easy-to-use
linked data approach to NIEM.
