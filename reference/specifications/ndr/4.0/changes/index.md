---
  title: NIEM Naming and Design Rules (NDR) Specification 4.0 Changes
  short: Changes
  description: Review the major changes made to the NDR from version 3.0 to version 4.0.
  icon: fa-pencil
---

The NIEM Naming and Design Rules (NDR) specification was updated from [version 3.0]({{site.data.links.ndr3}}) to [version 4.0]({{site.data.links.ndr4}}).

{:toc}
- TOC

Changes include:

**Updated version from 3.0 to 4.0**, affecting:

- Namespaces: structures, appinfo, NDR functions namespace
- Conformance target identifiers: REF, EXT

**Now managing specification on GitHub** (<https://github.com/NIEM/NIEM-NDR/>) for:

- Revisions/updates/errata: posted to the document repository
- Comments/issues: posted as GitHub issues

**NDR Section 2.4.2 - Schematron updates**

- Eliminated warning rules (`sch:report`) that always fire
- Added attribute (`role="warning"`) to warning rules
- Broke apart overly-large rule on standard opening phrases into smaller rules

**NDR Section 5 - RDF updates**

- Simplified RDF representation
  - RDF is much simpler than v3, with direct properties instead of reification
  - Allows for more direct JSON representation via JSON-LD
- Removed RDF representation for metadata types

**NDR Section 6 & 8 - XML processing and defaults**

- Improved discussion of infoset augmentation, `fixed`, and `default`
- Allow use of fixed on attribute uses that are required in an instance

**NDR Section 10 & 11 - Naming**

- Relaxed rules on component naming from MUST to SHOULD (USMTF)
- Allow all valid ASCII characters in component names
  - Allowed: "A"-"Z", "a"-"z", "0"-"9", "-", "_", "."

**NDR Section 10 & 11 - Codes**

- Allow code elements and code types to be represented by methods other than enumerations
- Described as correspondence to a list of conceptual entities
- Relaxed rules for structure/content of code elements and types
- Relaxed naming rules for code elements and types

**NDR Section 12 - Linked data approach**

- Added attribute `structures:uri`
- Defined `structures:id` and `structures:ref` in terms of `structures:uri` (Appendix B)
- Allow properties of objects to be distributed across multiple objects with the same identifier
  - Removed requirement that elements with `structures:ref` have no properties
- Major rewrite to section 12.1, 12.2, addressing data's meaning, identity, and references

**Miscellaneous**

- Grammar, spelling, and narrative improvements
- Moved content of the *Local Terminology* namespace (`term`) into the *Application Information* namespace (`appinfo`)
- Explicitly allow structures namespace to be subset

([See full diffs](https://github.com/NIEM/NIEM-NDR/compare/niem-ndr-3.0...niem-ndr-4.0#diff-ba7b4561c4e855f66491aec616812509))
