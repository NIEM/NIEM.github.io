---
  title: NIEM 2.0 Release
  short: NIEM 2.0
  description: An overview of the NIEM 2.0 release.
---

NIEM 2.0 is a major release, published July 2007.

{:toc}
- TOC

## Resources

- Download the full [release package](https://github.com/NIEM/NIEM-Releases/archive/niem-2.0.zip) as a zip file

- View schemas and documentation on [release.niem.gov](https://release.niem.gov/niem/2.0) or [GitHub](https://github.com/NIEM/NIEM-Releases/tree/niem-2.0)

- Use the online [Schema Subset Generation Tool (SSGT)](https://tools.niem.gov/niemtools/ssgt/index.iepd) to search or build XML schema subsets for use in IEPDs
  <br/><span class="text-muted">(go to `Options` in the menu bar to switch to the 2.0 release)</span>

- Download the [component spreadsheet](https://release.niem.gov/niem/2.0/niem-2.0.xls) to explore the contents of NIEM 2.0 in Excel

## Highlights

NIEM changed its philosophy from 1.0 on NIEM Core and moved away from the idea that it could reflect what the community most often used in practice or could easily support.  NIEM Core (nc) was consolidated from the Universal Core (U) and Common Core (c) namespaces in NIEM 1.0.  It became the designated place for content that did not belong to a single authoritative source and should thus be managed collaboratively by the NIEM Business Architecture Committee, which includes representatives from all NIEM domains.

{:.box}
- Merged Universal Core (u) and Common Core (c) into a single **NIEM Core** (nc) namespace
- Included an ANSI NIST namespace to represent Biometrics data
- Reviewed Core and moved a number of justice-specific components into the Justice domain
- Performed additional harmonization work across the domains

See the [NIEM 2.0 change log](https://release.niem.gov/niem/2.0/changelog.html) for a list of changes.

## Specification Links

{% include specs/specification-list.html specIDs = "NDR-1.3, Conformance-1.0" %}
