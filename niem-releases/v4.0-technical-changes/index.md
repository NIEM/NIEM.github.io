---
title: NIEM Technical Architecture Changes for NIEM v4.0
short: 4.0 Architecture Updates
description: What was changed in the NIEM technical architecture from NIEM version 3.* to version 4.0.
---

Changes to the NIEM Technical Architecture from NIEM version 3.* to version 4.0.

### Documents:
* NIEM Naming and Design Rules:
    * [NIEM NDR version 3.0](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html)
    * [NIEM NDR version 4.0](https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html)
    * [View the differences in the text version of the NDR from v3 to v4 on GitHub](https://github.com/NIEM/NIEM-NDR/compare/niem-ndr-3.0...niem-ndr-4.0#diff-ba7b4561c4e855f66491aec616812509)
* [NIEM Code Lists Specification v4.0](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html)

### Changes

* Updated version from 3.0 to 4.0, affecting:
  * Namespaces: structures, appinfo, NDR functions namespace
  * Conformance target identifiers: REF, EXT
* Now pointing to GitHub repository (<https://github.com/NIEM/NIEM-NDR/>) for:
  * Revisions/updates/errata: posted to the document repository
  * Comments/issues: posted as GitHub issues
* Grammar, spelling, and narrative improvements
* Moved content of the *Local Terminology* namespace (`term`) into the
  *Application Information* namespace (`appinfo`)
* Explicitly allow structures namespace to be subset
* NDR Section 2.4.2 - Schematron updates
  * Eliminated warning rules (`sch:report`) that always fire
  * Added attribute (`role="warning"`) to warning rules
  * Broke apart overly-large rule on standard opening phrases into smaller rules
* NDR Section 12 - Linked data approach
  * Added attribute `structures:uri`
  * Defined `structures:id` and `structures:ref` in terms of `structures:uri` (Appendix B)
  * Allow properties of objects to be distributed across multiple objects with
    the same identifier
    * Removed requirement that elements with `structures:ref` have no properties
  * Major rewrite to section 12.1, 12.2, addressing data's meaning, identity, and references
* NDR Section 5 - RDF updates
  * Simplified RDF representation
    * RDF is much simpler than v3, with direct properties instead of reification
    * Allows for more direct JSON representation via JSON-LD
  * Removed RDF representation for metadata types
* NDR Section 6 & 8 - XML processing and defaults
  * Improved discussion of infoset augmentation, `fixed`, and `default`
  * Allow use of fixed on attribute uses that are required in an instance
* NDR Section 10 & 11 - Naming
  * Relaxed rules on component naming from MUST to SHOULD (USMTF)
  * Allow all valid ASCII characters in component names
    * Allowed: "A"-"Z", "a"-"z", "0"-"9", "-", "_", "."
* Codes
  * Updated NIEM Code Lists Specification for v4
    * Code lists may be managed via XML (Genericode) or spreadsheets/databases (CSV)
    * Code lists may be versioned separately from XML Schema-based vocabularies
    * Code lists may be identified at run time or at schema assembly time
    * Allow for more complex use cases
  * NDR Section 10 & 11:  Allow code elements and code types to be represented by methods other than enumerations
    * Described as correspondence to a list of conceptual entities
    * Relaxed rules for structure/content of code elements and types
    * Relaxed naming rules for code elements and types
