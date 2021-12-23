---
  title: NIEM 4.2 Release
  short: NIEM 4.2
  description: An overview of the NIEM 4.2 release.
---

NIEM 4.2 is a minor release, published October 2019.

{:toc}
- TOC

## Resources

- Download the full [release package](https://github.com/NIEM/NIEM-Releases/archive/niem-4.2.zip) as a zip file

- View schemas and documentation on [release.niem.gov](https://release.niem.gov/niem/4.2) or [GitHub](https://github.com/NIEM/NIEM-Releases/tree/niem-4.2)

- Use online tools to explore the contents of NIEM 4.2:

  - [Schema Subset Generation Tool (SSGT)](https://tools.niem.gov/niemtools/ssgt/index.iepd) - search or build XML schema subsets for use in IEPDs
    <br/><span class="text-muted">(go to `Options` in the menu bar to switch to the 4.2 release)</span>

  - [Model Viewer](https://niem.github.io/model/) - browse namespaces and their contents

- Download the [component spreadsheet](https://release.niem.gov/niem/4.2/niem-4.2.xlsx) or the [code spreadsheet](https://release.niem.gov/niem/4.2/niem-4.2-codes.xlsx) to explore the contents of NIEM 4.2 in Excel

## Highlights

{:.box}
- Added and updated DNA and pedigree components in the **Biometrics** domain

- Added components to the **Emergency Management** domain to support the Public Health Emergency Operations Center (PH EOC) Minimum Data Set

- Updated Core-dependent code tables [(#35)](https://github.com/NIEM/NIEM-Releases/issues/35)
  - Census county codes [(#45)](https://github.com/NIEM/NIEM-Releases/issues/45)
  - Census / DOT commodity codes [(#48)](https://github.com/NIEM/NIEM-Releases/issues/48)
  - DEA drug codes [(#49)](https://github.com/NIEM/NIEM-Releases/issues/49)
  - Dept of Labor occupation codes [(#50)](https://github.com/NIEM/NIEM-Releases/issues/50)
  - Census FIPS state codes [(#51)](https://github.com/NIEM/NIEM-Releases/issues/51)
  - HazMat codes [(#53)](https://github.com/NIEM/NIEM-Releases/issues/53)
  - HL7 FHIR religion codes [(#54)](https://github.com/NIEM/NIEM-Releases/issues/54)
  - ISO 4217 currency codes [(#55)](https://github.com/NIEM/NIEM-Releases/issues/55)
  - ISO 639-3 language codes [(#56)](https://github.com/NIEM/NIEM-Releases/issues/56)
  - OmniClass facility codes [(#57)](https://github.com/NIEM/NIEM-Releases/issues/57)

- Updated FBI code sets

- Updated GENC Code Lists CSVs to version 3-10 and added XML schema enumeration representations

See the [NIEM 4.2 readme](https://github.com/NIEM/NIEM-Releases/blob/niem-4.2/README.md) for a list of changes.

## Specification Links

{% include specs/specification-list.html specIDs = "NDR-4.0, MPD-3.0.1, JSON-4.0, Conformance-3.0, CodeLists-4.0, CTAS-3.0, HLVA-3.0" %}

## Release Stats

The following are some basic statistics for the 4.2 release.

{% include page/release-stats.html csv=site.data.model.stats.stats-4_2 %}

<br/>
