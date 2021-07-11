---
  title: NIEM 4.0 Release
  short: NIEM 4.0
  description: An overview of the NIEM 4.0 release.
  redirect_from:
  - /niem-4.0/
  - /niem-releases/v4.0-technical-changes/
  right: [1,2,3]
  widths: ["110px", "150px", "150px", "150px"]
---

NIEM 4.0 is a major release, published June 2017.

{:toc}
- TOC

## Resources

- Download the full [release package](https://github.com/NIEM/NIEM-Releases/archive/niem-4.0.zip) as a zip file

- View schemas and documentation on [release.niem.gov](https://release.niem.gov/niem/4.0) or [GitHub](https://github.com/NIEM/NIEM-Releases/tree/niem-4.0)

- Use online tools to explore the contents of NIEM 4.0:

  - [Schema Subset Generation Tool (SSGT)](https://tools.niem.gov/niemtools/ssgt/index.iepd) - search or build XML schema subsets for use in IEPDs
    <br/><span class="text-muted">(go to `Options` in the menu bar to switch to the 4.0 release)</span>

  - [Model Viewer](https://niem.github.io/model/) - browse namespaces and their contents

- Download the [component spreadsheet](https://release.niem.gov/niem/4.0/niem-4.0.xlsx) or the [code spreadsheet](https://release.niem.gov/niem/4.0/niem-4.0-codes.xlsx) to explore the contents of NIEM 4.0 in Excel

## Highlights

{:.box}
- Added the **Agriculture** (ag) domain

- The **Children, Youth, and Family Service** (cyfs) was merged into the **Human Services** (hs) domain

- Added a new `structures:uri` attribute to support references within and across documents (Linked Data)

- Added support for dynamic code lists that are identified at run-time via the new type `nc:CodeType`, as specified by the new NIEM Code Lists specification

- Added new components to support the international community

- Introduced a default JSON-LD context file to provide namespace URI abbreviations, similar to the use of namespace prefixes in XML

See the [NIEM 4.0 readme](https://github.com/NIEM/NIEM-Releases/blob/niem-4.0/README.md) for a detailed list of changes.

## Specification Links

{% include specs/specification-list.html specIDs = "NDR-4.0, MPD-3.0.1, JSON-4.0, Conformance-3.0, CodeLists-4.0, CTAS-3.0, HLVA-3.0" %}

## Specification Updates

### Naming and Design Rules (NDR) 4.0

The NIEM Naming and Design Rules (NDR) specification was updated from [version 3.0]({{site.data.links.ndr3}}) to [version 4.0]({{site.data.links.ndr4}}).

Change highlights:

{:.box}
- Began managing specification in a new [NIEM-NDR GitHub repo](https://github.com/NIEM/NIEM-NDR/)

- Eliminated warning rules that always fired

- Simplified RDF representation

- Relaxed rules on component naming from MUST to SHOULD

- Allowed valid ASCII characters in component names: A-Z a-z 0-9 - _ .

- Added support for the use of the Code Lists specification

- Added attribute `structures:uri` to support Linked Data (referencing data from outside the given message)

<details markdown="1">
<summary markdown="span">Change details include...</summary>
<br/>
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

</details>

### NIEM Code Lists 4.0

The NIEM Code Lists specification was updated from its original [version 1.0](https://reference.niem.gov/niem/specification/code-lists/1.0/niem-code-lists-1.0-2016-06-20.html) to [version 4.0](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html).

Key features of the specification include:

{:.box}
- Code lists may be managed via XML (Genericode) or spreadsheets/databases (CSV)

- Code lists may be versioned separately from XML Schema-based vocabularies

- Code lists may be identified at run time or at schema assembly time

- Allow for more complex code use cases

Changes include:

{:.box}
- Removed cli:CodeType from CLI schema. Merged CLI schemas into a single schema that's conformant to NIEM 3 and NIEM 4.

- Changed term "code list instance namespace" to "code lists instance namespace".

- Renamed term "code list schema appinfo namespace" to "code lists schema appinfo namespace".

- Added well-known column "uri".

## Release Stats

The following are statistics for the **4.0 release**.

NIEM 4.0 has [14 domains]({{ "reference/content#domains" | relative_url }}).

**Summary Counts**

The table below breaks down property, type, and code counts by namespace group.

- The "Core" group represents a single namespace (NIEM Core).
- The "Domain" and "Code Set" groups combine the counts from multiple namespaces and are broken out in the subsequent tables.

{% include csv-table.html
      csv=site.data.model.stats.4_0.summary
      classes="table-auto"
      right=page.right
      widths=page.widths
%}

**Domain Counts**

The counts in the following table represent the namespaces that make up the "Domain" group in the summary table above.

{% include csv-table.html
      csv=site.data.model.stats.4_0.domains
      classes="table-auto"
      right=page.right
      widths=page.widths
%}

**Code Counts**

The counts in the following table represent the namespaces that make up the "Code Set" group in the summary table above.

{% include csv-table.html
      csv=site.data.model.stats.4_0.codes
      classes="table-auto"
      right=page.right
      widths=page.widths
%}
