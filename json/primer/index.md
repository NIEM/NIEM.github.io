---
title: A NIEM JSON Primer
---

This NIEM JSON Primer is a non-normative document designed to provide
an easy introduction to the purpose of NIEM, the reasons to use NIEM
with JSON data, and the developer knowledge needed to put NIEM JSON
into practice. It is a companion to the [NIEM JSON
guidance](../outline), and to future normative specifications for NIEM
JSON. It is intended for

* Developers who know JSON but know nothing of NIEM
* Developers familiar with NIEM XML
  - Who want a JSON version of an existing NIEM XML data exchange
  - Who only want to compare NIEM JSON with NIEM XML
* Data scientists wanting to easily understand and wrangle their data sources
* Data stewards wanting to provide data sources that are easily understood
  and wrangled
* Managers wondering if NIEM JSON is right for their project

Each reader may follow links to the content of interest and bypass the
rest. The starting choices are:

- [What is NIEM?](./whatis) NIEM is best understood as an organization
  with a standards-based process for creating community-agreed
  reusable data definitions and for assembling those definitions into
  data resource specifications. This section
  describes;
  
  - Reusable definitions and the NIEM data model
  - Data resource specifications
  - NIEM technical specifications
  - NIEM governance
  - Different ways to use and participate in NIEM
  - A brief history of NIEM JSON

^
- [Why use NIEM with JSON?](./whyuse) NIEM is primarily about data
  understanding and interoperability. These things become difficult
  when there are many data resources, constructed and used by many
  developers or data analysts. NIEM can help when those problems
  emerge, by providing:
  
  - Meaningful data names and machine-readable documentation
  - Global identifiers for data components
  - Self-describing data

^
- [What is NIEM JSON data?](./data) What does it mean, what does it
  look like, what rules does it follow?

  - Interpreting NIEM JSON data
  - NIEM and JSON-LD
  - Comparison of NIEM JSON and NIEM XML

^
- How is NIEM JSON content specified? Sometimes understanding is not
  enough, and developers need to know which data elements are
  required, optional, or forbidden, and not merely what they mean.
  
  - NIEM and JSON Schema
  - Comparison of NIEM JSON Schema and NIEM XML Schema

^
- How is NIEM JSON data produced and consumed? NIEM is entirely
  focused on the syntax and semantics of the data, so it works with
  any data transport or application programming approach. Developers
  can process NIEM JSON

  - As plain JSON
  - As JSON-LD
  - As RDF
  
^
- How are NIEM JSON and NIEM XML related to RDF? NIEM has always been
  founded on the RDF metamodel. NIEM JSON helps to clarify and
  solidify that foundation.
  
^
- Readers may choose to jump straight to a worked example of NIEM
  JSON. The example shows a progression from

  - Using NIEM to supply meaning for existing JSON data
  - Defining NIEM-based data components to create NIEM JSON data
  - Creating constraints for NIEM JSON data
  - Packaging definitions and constraints into a data exchange
    specification

^
- There is also an example of developing a JSON version of an existing
  XML-based exchange specification.
  
^
- Finally, there is an example of converting information between NIEM
  JSON, NIEM XML, and NIEM RDF data formats. Eventually this
  conversion can be automated based on information contained in a
  NIEM-based exchange specification
  
NIEM JSON is a work in progress. This primer is intended to help
developers, data scientists, and managers understand the different
ways they might use NIEM and JSON together. More technical details are
available in the guidance. Technical specifications now on the drawing
board will define NIEM JSON conformance targets to accompany the
existing NIEM XML conformance targets. Open source tools in the
planning stage will help developers switch between JSON and XML (and
perhaps other serializations) by creating translators for runtime data
and conversions for build-time artifacts. 

The intent is to make the NIEM approach valuable to anyone wanting to
create or apply community agreement on data semantics, using these to
provide precise definitions of data available through any sort of API,
or to document and harmonize published data resources for data
analytics.
