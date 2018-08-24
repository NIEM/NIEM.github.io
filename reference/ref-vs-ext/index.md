---
title: Reference vs. Extension Schema
description: The differences in NIEM Naming and Design Rules (NDR) between reference (REF) and extension (EXT) schema documents.
---

The [NIEM Naming and Design Rules version
3.0](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html)
defines two classes of conformant XML Schema documents:

* [REF: Reference schema
document](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_4.1.1):
a schema document that is intended to provide the authoritative definitions of
broadly reusable schema components.
* [EXT: Extension schema
document](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_4.1.2):
a schema document that is intended to provide definitions of schema components
that are intended for reuse within a more narrow scope than those defined by a
reference schema document.

## Rules:

The following sections outline differences in NDR rules between REF and EXT schema documents.

### Conformance targets

REF and EXT schema documents have different [conformance target
identifiers](https://reference.niem.gov/niem/specification/conformance-targets-attribute/3.0/NIEM-CTAS-3.0-2014-07-31.html#definition_conformance_target_identifier). All
REF and EXT schema documents must have a conformance target identifier, which
tells readers of the schema what class of schema document it is. The conformance
target identifiers are different for REF and EXT. These two rules identify the
conformance target for each type of schema document.

* [Rule 4-5, Schema claims reference schema conformance target (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_4-5)
* [Rule 4-6, Schema claims extension conformance target (EXT)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_4-6)

### Extension and restriction

REF schema documents must use `xs:extension` to derive complex types. EXT schema
documents are allowed to use `xs:restriction` for complex types. These rules
require `xs:extension` for REF schemas. EXT schema documents are allowed to
use `xs:extension` and `xs:restriction`.

* [Rule 9-29, Complex content uses extension (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-29)
* [Rule 9-32, Simple content uses extension (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-32)

These rules ensure that REF and EXT have `xs:sequence` as the top-level model compositors; they are different rules because REF requires `xs:extension`, while EXT also allows `xs:restriction`

* [Rule 9-61, xs:sequence must be child of xs:extension (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-61)
* [Rule 9-62, xs:sequence must be child of xs:extension or xs:restriction (EXT)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-62)

### Block and final

REF schema documents are not allowed to use `block` and `final`, which restrict
extension and reuse of elements and complex types. EXT schemas are allowed to
use these. These restrictions are placed on elements, complex types and on the
schema, where defaults are set.

* [Rule 9-33, No complex type disallowed substitutions (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-33)
* [Rule 9-34, No complex type disallowed derivation (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-34)
* [Rule 9-42, No element disallowed substitutions (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-42)
* [Rule 9-43, No element disallowed derivation (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-43)
* [Rule 9-85, No disallowed substitutions (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-85)
* [Rule 9-86, No disallowed derivations (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-86)

### Nillable

REF elements must be nillable.

* [Rule 9-46, Element declaration is nillable (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-46)

### Choice

EXT schemas are allowed to use `xs:choice`. REF schemas are not allowed to use
`xs:choice`. (Neither type of schema can use `xs:all`).

* [Rule 9-63, No xs:choice (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-63)

Since REF schemas are not allowed to use `xs:choice`, these rules are applied only to EXT schemas.

* [Rule 9-59, Model group does not affect meaning (EXT)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-59)
* [Rule 9-64, xs:choice must be child of xs:sequence (EXT)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-64)

These rules limit cardinality on `xs:choice`, applicable only to EXT schema documents.

* [Rule 9-67, Choice has minimum cardinality 1 (EXT)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-67)
* [Rule 9-68, Choice has maximum cardinality 1 (EXT)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-68)

### Wildcards

REF schema documents can't use wildcards.

* [Rule 9-69, No use of xs:any (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-69)
* [Rule 9-70, No use of xs:anyAttribute (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_9-70)

### Augmentation points

REF schema documents must include augmentations on complex types.

* [Rule 10-21, Augmentable type has augmentation point element (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_10-21)
* [Rule 10-27, Augmentation point reference is optional (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_10-27)
* [Rule 10-28, Augmentation point reference is unbounded (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_10-28)

### External adapters

REF schemas are not allowed to use attributes from external (not
NIEM-conformant) schemas. EXT schemas are allowed to reference external
attributes.

* [Rule 10-13, External attribute use only in external adapter type (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_10-13)

This rule applies only to REF, but probably should be applied to EXT as well.

* [Rule 10-69, External adapter type indicator annotates complex type (REF)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_10-69)
