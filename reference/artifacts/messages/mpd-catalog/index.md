---
title: MPD Catalog
icon: fa-info
description: A MPD Catalog is an XML document that contains basic information about the package (name, description, purpose, etc.) and a listing of the package's key artifacts.  It is a required artifact in an IEPD.
---

{{ page.description }}

The MPD Catalog establishes identification metadata, conformance targets, purpose, general content, lineage, and other metadata. Metadata includes:

- Uniform Resource Identifier (URI)
- Name
- Version number
- The conformance target identifier
- A copy of all schema documents needed to validate any instance document class it defines
- (Optional) Alternate representations in addition to XML Schema (e.g., generic diagram, UML/XMI, database format, spreadsheet, etc.)
- (Optional) Miscellaneous other documentation or file artifacts for assisting with usage or implementation

## Conformance

The [MPD Specification]({{ site.data.pages.mpd | relative_url }}) defines a MPD Catalog as a conformance target, with a set of rules that must be followed in order to be considered conformant.

{:.note}
> The first step is to make sure that the catalog file validates against its **[MPD Catalog XML Schema]({{ site.data.links.mpd_catalog_xsd }})**.

See the following sections from the `MPD Specification` for more information about the catalog file:

- [5.1. NIEM MPD Catalog]({{ site.data.links.mpd_spec }}#section_5.1)
- [5.2 Metadata Concepts]({{ site.data.links.mpd_spec }}#section_5.2)
- [Appendix A. MPD Catalog XML Schema Document]({{ site.data.links.mpd_spec }}#appendix_A)
- [Appendix B. Example MPD Catalog Document for Cursor on Target]({{ site.data.links.mpd_spec }}#appendix_B)
