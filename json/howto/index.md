---
title: How to use NIEM and JSON
links:
  - url: /json/names/
  - url: /json/json-ld/
  - url: /json/models/
  - url: /json/json-schema/
  - url: /json/advanced/
  - url: /json/guidance/
---

The NIEM data model contains many
  community-agreed data definitions suitable for reuse. 
  
   - The [names](names) of JSON object properties can reuse the [terms and
     namespaces of NIEM data definitions](names), allowing for reuse of data
     definitions across XML and JSON, and supporting JSON exchanges for data
     previously defined for XML.

  - NIEM has published a [JSON-LD context for the NIEM 4.0
    release](https://release.niem.gov/jsonld-context/niem-4.0-context.jsonld),
    which provides a Uniform Resource Identifier (URI) mapping for each
    conformant namespace used in NIEM. This provides JSON users an easy way for
    JSON messages to use and reference the model, providing an easy-to-use
    linked data approach to NIEM.

Use of NIEM JSON does not require any use of XML; NIEM JSON exchanges are pure
JSON, with JSON-LD providing some features of XML and JSON
Schema providing some features of XML Schema. For users
already familiar with XML, the NTAC produced
[Non-Normative Guidance in Using NIEM with JSON](guidance).  This document lays
out how a NIEM IEPD describes a JSON message, by showing that XML elements,
attributes, and other features can be expressed as JSON objects. These
guidelines highlight the use of JSON-LD for namespace-qualified names, the RDF
conceptual model used by NIEM, and linked data methodologies.

NIEM JSON is a work in progress. These pages are intended to help developers,
data scientists, and managers understand the different ways they might use NIEM
and JSON together. An [outline of the JSON guidance](outline) provides a map of
JSON pages, both those already written and those to come later.  Technical
specifications now on the drawing board will define NIEM JSON conformance
targets to accompany the existing NIEM XML conformance targets. Open source
tools in the planning stage will help developers switch between JSON and XML
(and perhaps other serializations) by creating translators for runtime data and
conversions for build-time artifacts.

The intent is to make the NIEM approach valuable to anyone wanting to
create or apply community agreement on data semantics, using these to
provide precise definitions of data available through any sort of API,
or to document and harmonize published data resources for data
analytics. 

{% include icon-list.html links=page.links %}
