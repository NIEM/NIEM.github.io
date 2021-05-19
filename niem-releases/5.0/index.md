---
  title: NIEM 5.0 Release (Current)
  short: NIEM 5.0 (current)
  description: An overview of the NIEM 5.0 release.
  right: [1,2,3]
  widths: ["110px", "150px", "150px", "150px"]
---

NIEM 5.0 is a major release, published December 2020.  This is the most current NIEM release.

{:toc}
- TOC

## Resources

- Download the full [release package](https://github.com/NIEM/NIEM-Releases/archive/niem-5.0.zip) as a zip file

- View schemas and documentation on [release.niem.gov](https://release.niem.gov/niem/5.0) or [GitHub](https://github.com/NIEM/NIEM-Releases/tree/niem-5.0)

- Use online tools to explore the contents of NIEM 5.0:

  - [Schema Subset Generation Tool (SSGT)](https://tools.niem.gov/niemtools/ssgt/index.iepd) - search or build XML schema subsets for use in IEPDs

  - [Movement](https://beta.movement.niem.gov) - search elements

  - [Model Viewer](https://niem.github.io/model/) - browse namespaces and their contents

- Download the [component spreadsheet](https://release.niem.gov/niem/5.0/xlsx/niem-5.0.xlsx) or the [code spreadsheet](https://release.niem.gov/niem/5.0/xlsx/niem-5.0-codes.xlsx) to explore the contents of NIEM 5.0 in Excel

## Highlights

{:.box}
- Added **Controlled Unclassified Information** (cui) as auxiliary content

- Added **Statistics** (stat) as auxiliary content

- Added additional Public Health Emergency Operations Center (PH EOC) requirements to the **Emergency Management** domain

- Moved Core code elements to code namespaces to break the import dependencies, allowing easy updates in minor releases

- Harmonized FBI code sets across the NCIC, NDEx, UCR, and Justice namespaces

- Replaced the full GML external standard with a simplified NIEM profile

- Re-established the structures:sequenceID attribute allowing explicit ordering of repeated elements

- Simplified the folder layout in the release package, removing extra nesting and versions.

See the [NIEM 5.0 readme](https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/README.md) for a detailed list of changes.

## Specification Links

{% include specs/specification-list.html specIDs = "NDR-5.0, IEPD-5.0, JSON-5.0, Conformance-5.0, CodeLists-4.0, CTAS-3.0, HLVA-3.0" %}

## Specification Updates

### Naming and Design Rules (NDR) 5.0

The NIEM **Naming and Design Rules (NDR)** specification was updated from [version 4.0]({{site.data.links.ndr4}}) to [version 5.0]({{site.data.links.ndr5}}).

Key changes include:

{:.box}
- Simplified folder layout in the release package, removing version folders and unnecessary nesting [(#140)](https://github.com/NIEM/NIEM-Releases/issues/140)

- Changed the character encoding of the XML schemas from "US-ASCII" to "UTF-8" for better international support [(#125)](https://github.com/NIEM/NIEM-Releases/issues/125)

- Added attribute xml:lang to reference schemas [(#153)](https://github.com/NIEM/NIEM-Releases/issues/153)

- Updated structures and appinfo utility schemas to version 5.0 based on NDR updates [(#157)](https://github.com/NIEM/NIEM-Releases/issues/157)

- Reestablished the structures:sequenceID attribute [(#154)](https://github.com/NIEM/NIEM-Releases/issues/154)

- Updated the conformance targets to correspond with the new 5.0 version of the NDR

See the [NDR 5.0 changes]({{ "/reference/specifications/ndr/changes/#ndr-50-changes" | relative_url }}) for more.

## Release Stats

The following are some basic statistics for the 5.0 release.

NIEM 5.0 has 14 domains and 2 auxiliary namespaces.

**Summary Counts**

The table below breaks down property, type, and code counts by namespace group.

- The "Core" group represents a single namespace (NIEM Core).
- The "Domain" and "Code Set" groups combine the counts from multiple namespaces and are broken out in the subsequent tables.

{% include csv-table.html
      csv=site.data.model.stats.5_0.summary
      classes="table-auto"
      right=page.right
      widths=page.widths
%}

**Domain Counts**

The counts in the following table represent the namespaces that make up the "Domain" group in the summary table above.

{% include csv-table.html
      csv=site.data.model.stats.5_0.domains
      classes="table-auto"
      right=page.right
      widths=page.widths
%}

**Auxiliary Counts**

The counts in the following table represent the namespaces that make up the "Auxiliary" group in the summary table above.

{% include csv-table.html
      csv=site.data.model.stats.5_0.auxiliary
      classes="table-auto"
      right=page.right
      widths=page.widths
%}

**Code Counts**

The counts in the following table represent the namespaces that make up the "Code Set" group in the summary table above.

{% include csv-table.html
      csv=site.data.model.stats.5_0.codes
      classes="table-auto"
      right=page.right
      widths=page.widths
%}

<br/>
