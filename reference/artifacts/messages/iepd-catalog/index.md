---
title: IEPD Catalog
icon: fa-info
redirect_from: /reference/artifacts/messages/mpd-catalog/
description: An IEPD Catalog is an XML document that contains basic information about the package (name, description, purpose, etc.) and a listing of the package's key artifacts.  It is a required artifact in an IEPD.
---

{{ page.description }}

The IEPD Catalog establishes identification metadata, conformance targets, purpose, general content, lineage, and other metadata. Metadata includes:

- Uniform Resource Identifier (URI)
- Name
- Version number
- The conformance target identifier
- A copy of all schema documents needed to validate any instance document class it defines
- (Optional) Alternate representations in addition to XML Schema (e.g., generic diagram, UML/XMI, database format, spreadsheet, etc.)
- (Optional) Miscellaneous other documentation or file artifacts for assisting with usage or implementation

## Conformance

The [IEPD Specification]({{ site.data.pages.mpd | relative_url }}) defines a IEPD Catalog as a conformance target, with a set of rules that must be followed in order to be considered conformant.

{:.note}
> The first step is to make sure that the catalog file validates against its **[IEPD Catalog XML Schema]({{ site.data.links.mpd_catalog_xsd }})**.

See the following sections from the `IEPD Specification` for more information about the catalog file:

- [5.1. NIEM IEPD Catalog]({{ site.data.links.mpd_spec }}#section_5.1)
- [5.2 Metadata Concepts]({{ site.data.links.mpd_spec }}#section_5.2)
- [Appendix A. IEPD Catalog XML Schema Document]({{ site.data.links.mpd_spec }}#appendix_A)
- [Appendix B. Example IEPD Catalog Document for Cursor on Target]({{ site.data.links.mpd_spec }}#appendix_B)
