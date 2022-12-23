---
  title: NIEM 5.2 Release (Current)
  short: NIEM 5.2 (current)
  description: An overview of the draft NIEM 5.2 release.
  redirect_from: /niem-releases/current/
---

{:toc}
- TOC

NIEM 5.2 is a minor release, published December 2022.  This is the most current NIEM release.

## Resources

- Download the full [release package](https://github.com/NIEM/NIEM-Releases/archive/niem-5.2.zip) as a zip file

- View schemas and documentation on [release.niem.gov](https://release.niem.gov/niem/5.2) or [GitHub](https://github.com/NIEM/NIEM-Releases/tree/niem-5.2)

- Use online tools to explore the contents of NIEM 5.2:

  - <p markdown="1">[Schema Subset Generation Tool (SSGT)](https://tools.niem.gov/niemtools/ssgt/index.iepd) - search or build XML schema subsets for use in IEPDs. <br/>*Note: The 5.2 update of the SSGT is still in progress and will be available soon.* </p>

  <!-- - <p markdown="1">[Movement](https://beta.movement.niem.gov) - search elements </p> -->

- Download the [component spreadsheet](https://release.niem.gov/niem/5.2/xlsx/niem-5.2.xlsx) or the [code spreadsheet](https://release.niem.gov/niem/5.2/xlsx/niem-5.2-codes.xlsx) to explore the contents of NIEM 5.2 in Excel

- Submit a [new issue](https://github.com/NIEM/NIEM-Releases/issues/new) or email feedback to <niem-comments@lists.gatech.edu>

- View all [5.2 issues](https://github.com/NIEM/NIEM-Releases/issues?q=is%3Aissue+label%3A5.2)

## Highlights

The following is a summary of the major changes made in this release:

{:.box}
- **Biometrics domain**
  - Added and updated content for DNA categories and encodings. ([#238](https://github.com/NIEM/NIEM-Releases/issues/238))
- **Cyber domain**
  - Added and modified content to support State, Local, Tribal, and Territorial (SLTT) Agency Cyber Incident Reporting Requirements (CIRR) and Cyber-Physical System (CPS) Incident Reporting Requirements ([#233](https://github.com/NIEM/NIEM-Releases/issues/233)).
- **Learning and Development domain** (new)
  - Added content about courses, course sections, students, and employment positions. ([#235](https://github.com/NIEM/NIEM-Releases/issues/235))
- **Justice domain**
  - Updated the FBI's National Crime Information Center (NCIC) codes ([#239](https://github.com/NIEM/NIEM-Releases/issues/239))
- **MilOps domain**
  - Added Minimum Essential Metadata (MEM) content ([#234](https://github.com/NIEM/NIEM-Releases/issues/234))
  - Added U.S. Message Text Format (USMTF) content as a subdomain, with information about military operations, missions, resources, readiness, and training ([#236](https://github.com/NIEM/NIEM-Releases/issues/236))
- **FIPS county codes**
  - Updated FIPS 3-digit and 5-digit county codes ([#243](https://github.com/NIEM/NIEM-Releases/issues/243))
- **ISO 639-5 language family codes**
  - Added the ISO 639-5 language family code set ([#240](https://github.com/NIEM/NIEM-Releases/issues/240))

## Specification Links

{% include specs/specification-list.html specIDs = "NDR-5.0, IEPD-5.0, JSON-5.0, Conformance-5.0, CodeLists-4.0, CTAS-3.0, HLVA-3.0" %}

## Release Stats

The following are some basic statistics for the 5.1 release.

{% include page/release-stats.html csv=site.data.model.stats.stats-5_2 %}

<br/>
