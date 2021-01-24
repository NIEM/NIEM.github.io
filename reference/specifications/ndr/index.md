---
title: NIEM Naming and Design Rules (NDR) Specification
short: Naming and Design Rules (NDR)
icon: fa-book
description: The NIEM Naming and Design Rules (NDR) describe the architecture of the NIEM data model and its representation in XML.  It specifies principles and enforceable rules for NIEM data components and schemas.
links:
  - url: /reference/specifications/ndr/ref/
    group: target
  - url: /reference/specifications/ndr/ext/
    group: target
  - url: /reference/specifications/ndr/set/
    group: target
  - url: /reference/specifications/ndr/ref-vs-ext/
---

The **[NIEM Naming and Design Rules (NDR)]({{ site.data.links.ndr }})** describes the  architecture of the NIEM data model and its representation in XML.  It specifies principles and enforceable rules for NIEM data components and schemas.

{:.features}
- A description of the underlying NIEM data model
- Guiding principles behind the design of NIEM
- Rules for using XML Schema constructs in NIEM
- Rules for modeling and structuring NIEM-conformant schemas
- Rules for creating NIEM-conformant instances
- Rules for naming NIEM components
- Rules for extending NIEM-conformant components

These rules are intended to establish and, more importantly, enforce a degree of standardization across a broad set of users in order to improve precision and interoperability across the NIEM community.

<!--more-->

## Versions

{:.note}
> See the [NIEM-NDR GitHub repo]({{site.data.links.ndr_repo}}) for the issue tracker and latest draft updates.

- [NDR 5.0]({{site.data.links.ndr5}})
  - *Applicable to NIEM 5.0 and future 5.1 and 5.2-based schemas*
  - Simplified release folder layout
  - Changed character encoding of the XML schemas from "US-ASCII" to "UTF-8" and added schema-level attribute xml:lang for better international support
  - Reestablished the structures:sequenceID attribute
  - See more [5.0 key changes]({{site.data.pages.ndr5_updates}})
- [NDR 4.0]({{site.data.links.ndr4}})
  - *Applicable to NIEM 4.0, 4.1, and 4.2-based schemas*
  - Added attribute structures:uri to support linked data
  - Simplified underlying RDF representation
  - See more [4.0 key changes]({{site.data.pages.ndr4_updates}})
- [NDR 3.0]({{site.data.links.ndr3}})
  - *Applicable to NIEM 3.0, 3.1, and 3.2-based schemas*
  - Introduced normative schematron rules to enable consistent conformance validation
  - Updated NIEM's approach to augmentations
  - Replaced conformant indicator attribute with new conformance targets attribute
  - Added support for local vocabularies
  - Merged content and reference elements
  - See more [3.0 key changes]({{site.data.pages.ndr3_updates}})
- [NDR 1.3]({{site.data.links.ndr1_3}})

## NDR Conformance Targets

The NDR describes and defines rules for four different kinds of documents:

{% assign targets = page.links | where: "group", "target" %}
{% include icon-list.html links=targets %}

In addition to the list above, the NDR defines a **`Instance document`** - An XML instance that is valid to a [Schema document set](set/).

{:.note}
> The **[REF vs EXT](ref-vs-ext/)** page is a handy guide to compare the differences between the two primary rule sets.

## Conformance Validation

While some rules in the NDR require subjective judgment (like determining if component names and definitions are semantically meaningful), other rules are capable of being automated.  Starting with NDR version 3.0, such rules have been written as Schematron rules.  Schematron is an ISO specification that describes a validation language for assertions about XML documents.

Schematron representations of NDR rules provide several key benefits.  There is a single, normative interpretation of each rule.  This eliminates the possibility that different users might read read a free-text rule description and apply it in different ways.

Schematron rules can also be used to validate XML documents.  This makes it *substantially* easier for users to test NIEM REF and EXT XML schemas against the NDR to see if those schemas conform to the given NDR conformance target.

{:.note}
> Two common ways to test NDR conformance are to upload schemas to **[ConTesA]({{ site.data.pages.contesa | relative_url }})** (online tool) or use the **[Schematron validation]({{site.data.pages.oxygen_ndr | relative_url}})** functionality locally within Oxygen XML Editor.

## Rules

Refer to the **[NDR]({{ site.data.links.ndr }})** for the full set of rules.  Descriptions, principles, and/or examples often accompany each rule.  The NDR Table of Contents and the rules index in the Appendix can be used to jump directly to particular topics.

See the `Modeling` and `XML` sub-pages in the [Concepts section]({{ "/reference/concepts/" | relative_url }}) to a collection of rules relating to particular topics.  For example, the [Namespaces XML page]({{ "/reference/concepts/namespace/xml/" | relative_url }}) contains a list of NDR rules related to a namespace and its representation in NIEM XML (a XML schema).

### Example Rule

The image below shows a small excerpt from the NDR.

{:.note}
- Each rule shows which conformance targets they apply to.  In these cases, both rules apply to both REF and EXT schemas because they are labeled as `(REF, EXT)`
- `Rule 10-47` is a descriptive, free-text rule.  Conformance for this rule must be checked manually.
- `Rule 10-48` is written in Schematron and can be tested via [ConTesA]({{ site.data.pages.contesa | relative_url }}) or [Oxygen]({{site.data.pages.oxygen_ndr | relative_url}}).

{:.bordered}
![Example rules](assets/rule-examples.png)
