---
  title: NIEM Naming and Design Rules (NDR) Specification 3.0 Changes
  short: Changes
  description: Review the major changes made to the NDR from version 1.3 to version 3.0.
  icon: fa-pencil
---

The NIEM Naming and Design Rules (NDR) specification was updated from [version 1.3]({{site.data.links.ndr1_3}}) to [version 3.0]({{site.data.links.ndr3}}).

**Changes include:**

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
