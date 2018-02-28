---
title: NIEM and JSON Frequently Asked Questions
links:
  - url: /json/whatis/
  - url: /json/whyuse/
  - url: /json/data/
---
- [What is NIEM?](../whatis): NIEM is best understood as a national program with a
  standards-based process for creating community-agreed reusable data
  definitions and for assembling those definitions into data resource
  specifications. This section describes;
  
  - [Reusable definitions](../whatis#components) and [NIEM data model](../whatis#datamodel)
  - Data resource specifications
  - [NIEM technical specifications](../whatis#specifications)
  - [NIEM governance](../whatis#governance)
  - [Different ways to use and participate in NIEM](../whatis#participate)

^
- [Why use NIEM with JSON?](../whyuse): NIEM is primarily about data understanding
  and interoperability. These things become difficult when there are many data
  resources, constructed and used by many developers or data analysts. NIEM can
  help when those problems emerge, by providing:
  
  - Meaningful data names and machine-readable documentation
  - Global identifiers for data components
  - Self-describing data
  - Reuse of community-agreed data definitions

^
- [What is NIEM JSON data?](../data): JSON data has a hierarchical
  structure based on simple values, arrays, and objects. NIEM JSON NIEM uses
  [JSON-LD](../json-ld) to handle what is supported in XML via XML Namespaces and XML ID
  and IDREF attributes. 
  
  - JSON-LD contexts allow short terms to designate URIs as property names.
  - JSON-LD's ID properties (e.g., `@id`) can
    identify links between data, as ID and IDREF do (e.g., NIEM `structures:id`
    and `structures:ref`)

^

{% include icon-list.html links=page.links %}
