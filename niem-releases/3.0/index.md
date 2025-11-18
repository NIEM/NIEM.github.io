---
  title: NIEM 3.0 Release
  short: NIEM 3.0
  description: An overview of the NIEM 3.0 release.
---

NIEM 3.0 is a major release, published October 2013.

{:toc}
- TOC

## Resources

- Download the full [release package](https://github.com/NIEM/NIEM-Releases/archive/niem-3.0.zip) as a zip file

- View schemas and documentation on [release.niem.gov](https://release.niem.gov/niem/3.0) or [GitHub](https://github.com/NIEM/NIEM-Releases/tree/niem-3.0)

- Use the online [Schema Subset Generation Tool (SSGT)]({{ site.data.links.ssgt }}) to search or build XML schema subsets for use in IEPDs
  <br/><span class="text-muted">(go to `Options` in the menu bar to switch to the 3.0 release)</span>

- Download the [component spreadsheet](https://release.niem.gov/niem/3.0/niem-3.0.xlsx) or the [code spreadsheet](https://release.niem.gov/niem/3.0/niem-3.0-codes.xlsx) to explore the contents of NIEM 3.0 in Excel

## Highlights

{:.box}
- **NIEM adopted a new annual release strategy** with a 3-year cycle: a major release one year would be followed by minor releases the next two years.

- Added the **Biometrics** (biom) domain - *replaced the ANSI NIST namespace from NIEM 2.0*

- The **Family Services** (fs) domain was renamed as **Children, Youth, and Family Services** (cyfs)

- **Military Operations** (mo) debuted as a domain update after the NIEM 3.0 release

- **[Augmentations]({{ "/reference/concepts/augmentation/element/" | relative_url }})** were revised to use element substitution instead of type extension.
  - This addressed challenges users had faced with the limits of type extension, which only allowed for the use of an augmentation for a type from a single domain.
  - Element substitution allows for IEPD developers to use multiple domain augmentations to be used in combination together.

- Extensive review and harmonization of Core components

- Simplified XML schema syntax of elements and types

- Added the `conformanceTargets` attribute to NIEM schemas to allow users to explicitly designate which NIEM specifications and rule sets are applicable

- Added support for local terminology, allowing namespaces to define subject area-specific terms that do not appear in standard dictionaries

See the [NIEM 3.0 change log spreadsheet](https://release.niem.gov/niem/3.0/niem-3.0-changelog.xlsx) for changes.

## Specification Links

{% include specs/specification-list.html specIDs = "NDR-3.0, MPD-3.0.1, Conformance-3.0, CTAS-3.0, HLVA-3.0" %}

## Specification Updates

Starting with NIEM 3.0, specification version numbers were adjusted to match the corresponding major NIEM release.

### Naming and Design Rules (NDR) 3.0

The Naming and Design Rules (NDR) specification was updated from [version 1.3](https://reference.niem.gov/niem/specification/naming-and-design-rules/1.3/niem-ndr-1.3.pdf) to [version 3.0](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html)

Changes include:

{:.box}
- Replaced conformant indicator with conformance targets for reference schema, extension schema, conformant schema document set and conformance instance XML document

- Updated the approach used for augmentations
  - Replaced the use of type substitution with element substitution
  - Added augmentation point elements to object and association types

- Added support for local vocabularies

- Added structures:ref and merged content and reference elements

- Added NDR Schematron rules to normatively define and validate conformance where possible.

- Replaced ComplexObjectType with ObjectType and AssociationType

- Added multiple representations of code lists (code, literal)

- Removed appinfo base

- Removed sequenceID, augmentation and metadata elements

- Replaced external adaptor type indicator with an attribute

- Added external import indicator

- Replaced applies-to element with substitution groups for augmentations and applies-to types and applies-to elements for metadata

- Replaced link metadata with relationship metadata

- Replaced appinfo annotation elements with attributes

- Replaced reference target annotations with XML schema type attribute

### Model Package Description (MPD) Specification 3.0

The NIEM Model Package Description (MPD) specification was updated from [version 1.1](https://reference.niem.gov/niem/specification/model-package-description/1.1/) to [version 3.0](https://reference.niem.gov/niem/specification/model-package-description/3.0/)

### Conformance Targets Attribute (CTAS) Specification 3.0 - *new*

The NIEM Conformance Targets Attribute (CTAS) specification was introduced as [version 3.0](https://reference.niem.gov/niem/specification/conformance-targets-attribute/3.0/NIEM-CTAS-3.0-2014-07-31.html)

### NIEM UML Profile

The NIEM UML Profile was updated to [version 3.0](https://reference.niem.gov/niem/specification/uml-profile/omg/3.0beta1/)

## Release Stats

The following are some basic statistics for the 3.0 release.

{% include page/release-stats.html csv=site.data.model.stats.stats-3_0 %}

<br/>
