---
title: NIEM and JSON site outline
---

This page provides a map to the pages and topics covered by the NIEM JSON
guidance.

- [JSON home](..)
    - [This page: outline](.): A version of the outline, which links to all
      the pages in the JSON guidance, summarizes what they're about, and describes why

    - [data](../data): Overview of JSON Data
        - Simple flat JSON
        - "FName" etc
        - Order of keys not significant
        - values:
            - objects
                - keys & values
            - text
            - names
            - arrays
            - numbers
            - booleans & null
- [names](../names): Names for data
    - [names/reuse](../names/reuse): Reuse of names and definitions
    - [names/syntax](../names/syntax): Descriptive naming
        - including names based on ISO-11179 
    - [names/namespaces](../names/namespaces): Domain-based naming (NIEM domains)
- [json-ld](../json-ld): JSON-LD
    - [json-ld/context](../json-ld/context): JSON-LD contexts for namespaces and short names
    - [json-ld/identifiers](../json-ld/identifiers): Identifiers in JSON-LD: use of `@id`, URIs, and names of individuals
    - [json-ld/syntax](../json-ld/syntax): Syntax of objects and arrays
    - [json-ld/expanded](../json-ld/expanded): An example of JSON-LD expansion.
    - [json-ld/processing](../json-ld/processing): Processing JSON-LD using
      standard operations, including expansion, compaction, contexts, and
      optional use of arrays
                    
<hr/>

INSTANCES ONLY ABOVE HERE. NO CLASSES ABOVE HERE

<hr/>

- [models](../models): Content models
    - [models/categories](../models/categories): Schemas and instances (JSON schema)
        - IEPD vs IEP
        - categories vs. individuals
        - templates vs. instances
    - [models/reuse](../models/reuse): Reusable data definitions
        - classes & properties
        - global data definitions
    - [models/has-a](../models/has-a): Hierarchical models
        - Hierarchical models 
        - JSON properties
        - Cardinality (minItems, maxItems)
    - [models/releases](./models/releases): The NIEM model
        - Spreadsheets
        - Movement
        - XML Schemas
        - The structures need to match what's in the NIEM model
        - Field values need to match what's in the NIEM model

    - [subset](../subset): Strategies, justification, rationale for subsetting NIEM release

        - [subset/attributes](../subset/attributes): Reusing attributes vs. omitting attributes
            - rdf:value vs simple-typed properties
            - if reusing attributes on a complex type with simple content
                - the property would have a value that's an object
                - the attributes would be properties of that object
                - the simple content would have property rdf:value
                    - rdf:value could be aliased using a context to something simpler, like 'text'
            - if not using any attributes
                - the property could have a value that's a simple type
                - attributes omitted
                - anything like rdf:value omitted

<hr/>

NO JSON SCHEMA ABOVE HERE

<hr/>

- [json-schema](../json-schema)
    - In-schema references (JSON identifiers)
        - not really references
        - URIs
    - Cross-schema references (JSON pointers)
- [rdf-schema](../rdf-schema)
- [xml](../xml)
    - NIEM JSON's relationship to XML
    - content from old guidance doc
    - XML details
    - XSD details
    - augmentations
- [exchange-specification](../exchange-specification)
    - How to specify an exchange for JSON
    - Determine business data content
    - Specify JSON representation of content
    - human readable documentation
    - JSON schema
    - Document the JSON information exchange
- [advanced](../advanced)
    - Advanced NIEM concepts
    - Associations
    - Augmentations
    - Metadata
    - Roles
    - Advanced JSON LD
    - putting `@context` in a HTTP header
