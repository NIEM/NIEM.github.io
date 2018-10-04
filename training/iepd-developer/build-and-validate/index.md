---
title: Build and Validate
icon: fa-envelope-o
description: During the build and validate phase, you create XML schemas and artifacts and verify they meet NIEM standards.
---

{{ page.description}}

{% include icon-list.html links=page.links %}

Data objects identified in the mapping document appear in either the exchange, extension, or subset schemas. Associations and cardinality from the exchange content model are reflected in XML schemas.

## NIEM-Conformant XML Schema Generation

XML schemas that are typically created for an IEPD include subset, exchange, extension, constraint, and reference. A NIEM-conformant IEPD is required to constrain at least one schema that is either a NIEM reference schema or subset schema. XML schemas for NIEM-conformant exchanges can be created in two ways:

| Method | Process |
| --- | ---|
| Generation Through Tools | Automatically generate schemas based on an exchange content model, mapping document, or other inputs. |
| Coded by Hand | Start with existing schemas or NIEM schema templates, which can be derived from NIEM reference schemas. |

It is recommended that you start with tools and modify as needed.

### The NIEM Tools Catalog

The NIEM Tools catalog is a collection of different tools that aid in schema generation. For example, the Subset Schema Generation Tool ([SSGT](/reference/tools/ssgt/)) is often used to start schema development because it is easy to use and produces subset schemas and wantlists for use within an exchange. The SSGT can also be used for searching and browsing the NIEM data model and generating Wantlists.

Look for an appropriate tool at the [NIEM Tools Catalog]({{ site.data.links.tools_catalog }} "NIEM Tools Catalog").

### Code List Artifact

A code list is a file that consists of comma-separated value (csv), tabular data, which makes the list suitable for an IEPD schema:

- Each row is a "distinct entry" or set of code values.
- Each cell in the row has a value identified by its column header. 

The following table is an example of a code list for vehicle makes and models:

| ExampleTemplateCode | |
| --- | --- | --- |
| Example Code List Definition | |
| Code | Definition |
| FORD | Ford |
| HOND | Honda |
| TOYT | Toyota |

- The first row is the type name (ExampleTemplateCode).
- The second row is the code set definition (Example Code List Definition).
- The third row is the column labels (Code, Definition).
- Subsequent rows are the codes and definitions.

## Validate XML Schemas

### XML Schema Conformance

Schemas must conform to predefined rules and guidelines as defined in the NIEM Naming and Design Rules (NDR) and Model Package Description (MPD) Specification to promote increased levels of interoperability and reuse within exchanges. The NDR provides other general conformance guidelines and principles. XML schemas need to be checked for conformance both manually and through the use of tools because no tool currently exists that checks all of the NDR rules.

### XML Instance Validation

Schemas must be validated to prove conformance. Validation is the process of testing XML to ensure well-formed and NIEM-conformant schemas. You can leverage [NIEM tools]({{ site.data.links.tools_catalog }}) to make the validation process easier. Each XML element must validate against the schema definition of that element. XML instances may be validated through multiple schema validation passes, using multiple schemas for a single namespace.

Resolve errors with tools as far as they are capable; the remainder must be resolved manually.

#### NIEM Conformance Tool

The [NIEM Conformance Tool](https://tools.niem.gov/contesaNIEM/ "NIEM Conformance Tool"), based on the [Conformance Testing Assistant (ConTesA)](/reference/tools/contesa/  "Conformance Testing Assistant (ConTesA)"), is an available option to validate schema. This tool allows you to upload an IEPD, a set of schemas in a zip file, or an individual schema, and provides a summary report that lists the NDR rules that were checked with those that passed and those that failed. The NIEM Conformance Tool does not check all NDR rules as some rules are subject to interpretation and then must be manually checked.

{:.note}
>
> The NIEM Conformance Tool is available for evaluation and feedback purposes only; it is not the measure for NIEM conformance. It assists developers by identifying potential locations of non-conformance within IEPD artifacts (e.g., schemas, catalog, xml) using the latest published NIEM specifications.

#### Resolve Validation Errors

The NIEM Conformance Tool provides a summary report that lists the location of schema failures by line number and by XML object name. You should then do the following:

1. Resolve each validation error by reviewing the location of the error within the schema and the NDR rule(s) that was broken for that error.

2. Make modifications to the appropriate schema to address each validation error.

3. Run each schema through the Conformance Validation Tool to check for NIEM conformance.

4. Repeat the previous steps until all conformance errors have been resolved.

{:.note}
>
> Contact the [NIEM Help Desk]({{ site.data.links.niem_help_desk }} "NIEM Help Desk") if you are unable to resolve conformance errors or need additional assistance.

#### Manual Review Process

Do a manual review of each schema to address the NDR rules not checked within the Conformance Validation Tool. Manual review of schemas for NDR conformance is always necessary to verify conformance. Use the following steps:

1. Review the summary report from the Conformance Validation Tool to identify the NDR rules not checked through the tool.

2. Analyze each schema for adherence to each of the NDR rules that were not checked within the Conformance Validation Tool.

3. Make the appropriate changes to the schema(s) to resolve each issue per mistakes made in the manual review.

4. Validate the schemas again in the Conformance Validation Tool.
