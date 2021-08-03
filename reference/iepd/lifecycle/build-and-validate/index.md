---
title: Build and Validate
icon: fa-pencil
description: Create subset and extension schemas and sample instances based on the previous mapping and modeling work.  Verify that schemas and instances are valid and that they meet NIEM conformance requirements described by the NIEM Naming and Design Rules (NDR) specification.
---

{{ page.description}}

{:toc}
- TOC

Data objects identified in the mapping document appear in either the exchange, extension, or subset schemas. Associations and cardinality from the exchange content model are reflected in XML schemas.

## NIEM-Conformant XML Schema Generation

XML schemas that are typically created for an IEPD include subset, exchange, extension, constraint, and reference. A NIEM-conformant IEPD is required to constrain at least one schema that is either a NIEM reference schema or subset schema. XML schemas for NIEM-conformant exchanges can be created in two ways:

| Method | Process |
| --- | ---|
| Generation Through Tools | Automatically generate schemas based on an exchange content model, mapping document, or other inputs. |
| Coded by Hand | Start with existing schemas or NIEM schema templates, which can be derived from NIEM reference schemas. |

It is recommended that you start with tools and modify as needed.

### The NIEM Tools Catalog

The [NIEM Tools Catalog]({{ site.data.links.tools_catalog }} "NIEM Tools Catalog") is a collection of different tools that aid in schema generation. For example, the Subset Schema Generation Tool ([SSGT]({{ site.data.pages.ssgt | relative_url }})) is often used to start schema development because it is easy to use and produces subset schemas and wantlists for use within an exchange. The SSGT can also be used for searching and browsing the NIEM data model.

Look for an appropriate tool in the [NIEM Tools Catalog]({{ site.data.links.tools_catalog }} "NIEM Tools Catalog"). Use one or more tools to [create the artifacts and validate them]({{ "/training/iepd-developer/build-and-validate" | relative_url }}).
