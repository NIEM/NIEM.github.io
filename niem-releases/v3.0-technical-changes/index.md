---
title: NIEM 3.0 Technical Architecture Changes
short: 3.0 Architecture Updates
description: Highlights of the NIEM technical architecture from NIEM version 2.* to version 3.0.
---

The changes to the NIEM technical architecture from NIEM version 2.* to version 3.0 are highlighted below.

### Specifications

- NIEM Naming and Design Rules (NDR) updated from [version 1.3](https://reference.niem.gov/niem/specification/naming-and-design-rules/1.3/niem-ndr-1.3.pdf) to [version 3.0](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html)
- NIEM Model Package Description (MPD) updated from [version 1.1](https://reference.niem.gov/niem/specification/model-package-description/1.1/) to version [3.0](https://reference.niem.gov/niem/specification/model-package-description/3.0/)

### Changes

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
