---
  title: NIEM 5.1 Release
  short: NIEM 5.1
  description: An overview of the NIEM 5.1 release.
---

{:toc}
- TOC

NIEM 5.1 is a minor release, published December 2021.

## Resources

- Download the full [release package](https://github.com/NIEM/NIEM-Releases/archive/niem-5.1.zip) as a zip file

- View schemas and documentation on [release.niem.gov](https://release.niem.gov/niem/5.1) or [GitHub](https://github.com/NIEM/NIEM-Releases/tree/niem-5.1)

- Use online tools to explore the contents of NIEM 5.1:

  - <p markdown="1">[Schema Subset Generation Tool (SSGT)]({{ site.data.links.ssgt }}) - search or build XML schema subsets for use in IEPDs </p>

  - <p markdown="1">[Movement](https://beta.movement.niem.gov) - search elements </p>

- Download the [component spreadsheet](https://release.niem.gov/niem/5.1/xlsx/niem-5.1.xlsx) or the [code spreadsheet](https://release.niem.gov/niem/5.1/xlsx/niem-5.1-codes.xlsx) to explore the contents of NIEM 5.1 in Excel

- See the [Community Activities](/community) section on this site for additional information about this release:

  - <p markdown="1">[Sample XML instances and schema](/community/biometrics/sample/) from the Biometrics domain.</p>

  - <p markdown="1">[An overview and the development methodology](/community/cyber/) from the new Cyber domain.</p>

  <!-- - [Model Viewer](https://niem.github.io/model/) - browse namespaces and their contents -->

## Highlights

The following is a summary of the major changes made in this release.  More details are available from the [5.1 issues](https://github.com/NIEM/NIEM-Releases/issues?page=1&q=is%3Aissue+label%3A5.1) in the NIEM Releases issue tracker, and the change log spreadsheet in the release package.

{:.box}
- **Biometrics domain**
  - Added additional DNA-related content ([#152](https://github.com/NIEM/NIEM-Releases/issues/152))
  - Updated pedigree content ([#224](https://github.com/NIEM/NIEM-Releases/issues/224))
  - Restored original DNAPedigree components from 4.1 for backward compatibility ([#227](https://github.com/NIEM/NIEM-Releases/issues/227))

- **CUI**
  - Split the single Limited Dissemination Control (LDC) code set into separate document marking and portion marking LDC code sets ([#233](https://github.com/NIEM/NIEM-Releases/issues/223))

- **Cyber domain** (new)
  - Added content supporting Federal Incident Reporting Requirements (FIRR) ([#209](https://github.com/NIEM/NIEM-Releases/issues/209))
  - Added content supporting State, Local, Tribal, and Territorial (SLTT) Agency Cyber Incident Reporting Requirements (CIRR) ([#215](https://github.com/NIEM/NIEM-Releases/issues/215))

- **Emergency Management domain**
  - Added flood damage claim content from OpenFEMA ([#208](https://github.com/NIEM/NIEM-Releases/issues/208))

- **Justice domain**
  - Moved Justice elements with a NCIC data type to the NCIC namespace ([#214](https://github.com/NIEM/NIEM-Releases/issues/214))

- **Military Operations domain**
  - Added content from the Joint Non-Kinetic Effectiveness (JNKE) IEPD ([#210](https://github.com/NIEM/NIEM-Releases/issues/210))

- **NCIC codes**
  - Re-added 4.2 code sets that were removed from the 5.0 release due to harmonization efforts across the FBI and Justice code sets for legacy support. ([#211](https://github.com/NIEM/NIEM-Releases/issues/211))
  - Removed ncic:BOATCodeType as it is no longer being used ([#218](https://github.com/NIEM/NIEM-Releases/issues/218))
  - Updated codes for NIEM 5.1, with changes to the MAK, VMA, and VMO code sets ([#219](https://github.com/NIEM/NIEM-Releases/issues/219))

## Specification Links

{% include specs/specification-list.html specIDs = "NDR-5.0, IEPD-5.0, JSON-5.0, Conformance-5.0, CodeLists-4.0, CTAS-3.0, HLVA-3.0" %}

## Release Stats

The following are some basic statistics for the 5.1 release.

{% include page/release-stats.html csv=site.data.model.stats.stats-5_1 %}

<br/>
