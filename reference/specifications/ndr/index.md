---
  title: NIEM Naming and Design Rules (NDR) Specification
  short: Naming and Design Rules (NDR)
  icon: fa-book
  classID: NDR
  description: The NIEM Naming and Design Rules (NDR) describe the architecture of the NIEM data model and its representation in XML.  It specifies principles and enforceable rules for NIEM data components and schemas.
  links:
    - url: /reference/specifications/ndr/changes/
    - url: /reference/specifications/ndr/ref-vs-ext/
---

The **[NIEM Naming and Design Rules (NDR)]({{ site.data.links.ndr }})** describes the  architecture of the NIEM data model and its representation in XML.  It specifies principles and enforceable rules for NIEM data components and schemas.

{:toc}
- TOC

## Overview

NDR rules are intended to establish and, more importantly, enforce a degree of standardization across a broad set of users in order to improve precision and interoperability across the NIEM community.

{:.features}
- A description of the underlying NIEM data model
- Guiding principles behind the design of NIEM
- Rules for using XML Schema constructs in NIEM
- Rules for modeling and structuring NIEM-conformant schemas
- Rules for creating NIEM-conformant instances
- Rules for naming NIEM components
- Rules for extending NIEM-conformant components

## Resources

{% include specs/specification-summary.html classID=page.classID %}

## Conformance Targets

The NDR describes and defines rules for four different kinds of documents, each identified by its own NDR conformance target.

Refer to the section about the [Conformance Targets Attribute Specification]({{ site.data.pages.ctas | relative_url }}) for more information, including how to specify a conformance target in a NIEM schema.

{% include specs/targets-table.html classID=page.classID %}

### Reference Schema Document (REF)

Reference schema documents (REFs) are NIEM schemas that provide authoritative definitions of broadly reusable schema components and follow a stricter syntax, as specified by the NDR.  NIEM release schemas are REFs.

The conformance rules for reference schema documents are generally stricter than those for extension schema documents (EXTs).  This is because REFs are intended for reuse and must be defined in a way that supports a broad variety of requirements.

{:.features}
- Has a uniform document structure.
- Does not restrict other data definitions.
- Does not use XML Schema's restriction mechanism `xs:restriction`.
- Does not use schema groups such as `xs:choice` or `xs:any`.
- Requires [augmentation points]({{ "/reference/concepts/augmentation/point/" | relative_url }}) to support additional content from other namespaces
- Typically contains data components with relaxed cardinality (0 to unbounded)
- Made as regular and simple as possible.

### Extension Schema Document (EXT)

Extension Schema Documents (EXTs) are NIEM schemas for special-purpose content that is not expected to be reused outside of the specific package in which it is defined.  EXTs may thus follow a slightly more relaxed syntax, as specified by the NDR.  IEPD extension schemas are usually EXTs, but may be designated as REFs instead if needed.

Extension schema documents (EXTs), like reference schema documents (REFs), are a fundamental part of NIEM model design. They contain components that use, extend, or limit the components defined in REFs and express additional vocabulary above and beyond the vocabulary available from REFs.

{:.features}
- Defines package-specific data elements and models.
- Extends vocabulary above and beyond that available to REFs.
- Can [augment]({{ "/reference/concepts/augmentation/element/" | relative_url }}) existing NIEM types with additional content.
- Can limit the behavior of existing NIEM data types through schema `xs:restriction`.
- Can constrain cardinality for specific requirements
- Can serve as the core schematic definitions of an IEPD.

### Conformant Schema Document Set (SET)

A Conformant Schema Document Set (SET) is a single conceptual XML schema that represents the sum of the rules and definitions defined within a collection of NIEM REF and EXT XML schemas, such as an IEPD.

{:.features}
- Conceptual artifact for collection of schemas
- Resolves to exactly one Schema
- Capable of validating Schema Instance Documents
- Self-contained, with no unresolved references

Because schema document sets are composed of NIEM-conformant schema documents (either REF or EXT), each member document must adhere to the rules designated by their individual conformance targets. Furthermore, the document set must also adhere to the rules applicable to the conformance target SET.

A SET defines a schema that may be used to validate an instance document. This rule ensures that a SET under consideration contains definitions for everything that it references; it has everything necessary to do a complete validation of instance documents without any unresolved references.

### Conformant Instance Document (INS)

An Conformance Instance XML Document (INS) is an XML instance document which is valid against a conformant schema document set (SET).

{:.features}
- Document element is locally schema-valid
- Each element of the document is defined by a conformant REF or EXT schema

## Conformance Validation

While some rules in the NDR require subjective judgment (like determining if component names and definitions are semantically meaningful), other rules are capable of being automated.  Starting with NDR version 3.0, such rules have been written as Schematron rules.  Schematron is an ISO specification that describes a validation language for assertions about XML documents.

Schematron representations of NDR rules provide several key benefits.  There is a single, normative interpretation of each rule.  This eliminates the possibility that different users might read read a free-text rule description and apply it in different ways.

Schematron rules can also be used to validate XML documents.  This makes it *substantially* easier for users to test NIEM REF and EXT XML schemas against the NDR to see if those schemas conform to the given NDR conformance target.

{:.note}
> Two common ways to test NDR conformance are to upload schemas to **[ConTesA]({{ site.data.pages.contesa | relative_url }})** (online tool) or use the NDR rules with the **[Schematron validation]({{site.data.pages.oxygen_ndr | relative_url}})** functionality locally within the Oxygen XML Editor.

## Example Rules

Refer to the **[NDR]({{ site.data.links.ndr }})** for the full set of rules.  Descriptions, principles, and/or examples often accompany each rule.  The NDR Table of Contents and the rules index in the Appendix can be used to jump directly to particular topics.

See the `Modeling` and `XML` sub-pages in the [Concepts section]({{ "/reference/concepts/" | relative_url }}) to a collection of rules relating to particular topics.  For example, the [Namespaces XML page]({{ "/reference/concepts/namespace/xml/" | relative_url }}) contains a list of NDR rules related to a namespace and its representation in NIEM XML (a XML schema).

**Example Rule**

The image below shows a small excerpt from the NDR.

{:.note}
- Each rule shows which conformance targets they apply to.  In these cases, both rules apply to both REF and EXT schemas because they are labeled as `(REF, EXT)`
- `Rule 10-47` is a descriptive, free-text rule.  Conformance for this rule must be checked manually.
- `Rule 10-48` is written in Schematron and can be tested via [ConTesA]({{ site.data.pages.contesa | relative_url }}) or [Oxygen]({{site.data.pages.oxygen_ndr | relative_url}}).

{:.bordered}
![Example rules](assets/rule-examples.png)

## See more

See more information about the Naming and Design Rules Specification:

{% include icon-list.html links=page.links %}
