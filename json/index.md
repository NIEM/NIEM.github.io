---
title: NIEM and JSON
links:
  - url: /json/whatis/
  - url: /json/whyuse/
  - url: /json/data/
  - url: /json/names/
  - url: /json/json-ld/
  - url: /json/models/
  - url: /json/json-schema/
  - url: /json/advanced/
  - url: /json/guidance/
  - url: /json/outline/
---

Until recently, XML has been the single format for NIEM data. NIEM is now in the
process of adopting [JSON (Javascript Object Notation)](data/simple) as a second
standard format for representing data based on the NIEM data model.

These pages are designed to provide an easy introduction to the purpose of NIEM,
the reasons to use NIEM with JSON data, and the developer knowledge needed to
put NIEM JSON into practice. They are intended for:

* Developers who know JSON but know nothing of NIEM or XML
* Developers familiar with NIEM XML
  - Who want a JSON version of an existing NIEM XML data exchange
  - Who only want to compare NIEM JSON with NIEM XML
* Data scientists wanting to easily understand and wrangle their data sources
* Data stewards wanting to provide data sources that are easily understood
  and wrangled
* Managers wondering if NIEM JSON is right for their project

This is the starting page for learning about NIEM and JSON. Readers will
probably follow links to the content of interest and bypass the rest. Some
starting choices are:

- [What is NIEM?](whatis): NIEM is best understood as an organization with a
  standards-based process for creating community-agreed reusable data
  definitions and for assembling those definitions into data resource
  specifications. This section describes;
  
  - Reusable definitions and the NIEM data model
  - Data resource specifications
  - NIEM technical specifications
  - NIEM governance
  - Different ways to use and participate in NIEM

^
- [Why use NIEM with JSON?](whyuse): NIEM is primarily about data understanding
  and interoperability. These things become difficult when there are many data
  resources, constructed and used by many developers or data analysts. NIEM can
  help when those problems emerge, by providing:
  
  - Meaningful data names and machine-readable documentation
  - Global identifiers for data components
  - Self-describing data
  - Reuse of community-agreed data definitions

^
- [What is NIEM JSON data?](data): JSON data has a hierarchical
  structure based on simple values, arrays, and objects. NIEM JSON NIEM uses
  [JSON-LD](json-ld) to handle what is done in XML via XML Namespaces and XML ID
  and IDREF attributes. 
  
  - JSON-LD contexts allow short terms to designate URIs as property names.
  - JSON-LD's ID properties (e.g., `@id`, or other properties of type ID) can
    identify links between data, as ID and IDREF do (e.g., NIEM `structures:id`
    and `structures:ref`)

^
- How to use the NIEM model with JSON: The NIEM data model contains many
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
