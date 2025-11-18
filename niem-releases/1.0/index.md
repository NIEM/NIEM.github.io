---
  title: NIEM 1.0 Release
  short: NIEM 1.0
  description: An overview of the NIEM 1.0 release.
---

NIEM 1.0 is a major release, published November 2006.

{:toc}
- TOC

## Resources

- Download the full [release package](https://github.com/NIEM/NIEM-Releases/archive/niem-1.0.zip) as a zip file

- View schemas and documentation on [release.niem.gov](https://release.niem.gov/niem/1.0) or [GitHub](https://github.com/NIEM/NIEM-Releases/tree/niem-1.0)

- Use the online [Schema Subset Generation Tool (SSGT)]({{ site.data.links.ssgt }}) to search or build XML schema subsets for use in IEPDs
  <br/><span class="text-muted">(go to `Options` in the menu bar to switch to the 1.0 release)</span>

- Download the [component spreadsheet](https://release.niem.gov/niem/1.0/niem-1.0.xls) to explore the contents of NIEM 1.0 in Excel

## Highlights

The success of the [Global Justice XML Data Model (GJXDM)](https://it.ojp.gov/initiatives/gjxdm) for the justice community led to the creation of NIEM with a multi-domain model.  GJXDM content was refactored into two core namespaces and a new Justice domain; other new domains were added.

{:.box}
- Added **NIEM Core**, represented as two namespaces:
  - *Universal Core* (u) - meant to represent very stable components used in almost all messages
  - *Common Core* (c) - meant to represent components understood by almost all NIEM users
- Added the **Emergency Management** (em) domain
- Added the **Immigration** (im) domain
- Added the **Infrastructure Protection** (ip) domain
- Added the **Intelligence** (intel) domain
- Added the **International Trade** (it) domain
- Added the **Justice** (j) domain
- Added the **Screening** (scr) domain
- Added the Geography Markup Language (GML) as an external standard
- Added support for IC-ISM security markup metadata
- Represented augmentations via type extension and type substitution

## Release Stats

The following are some basic statistics for the 1.0 release.

{% include page/release-stats.html csv=site.data.model.stats.stats-1_0 %}

<br/>
