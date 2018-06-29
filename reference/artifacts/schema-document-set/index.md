---
  title: Schema Document Set
  short: Schema Document Set
  icon: fa-sitemap
  description: Description of schema document set.
---

A Schema Document Set (SET) is a conceptual NIEM artifact that
normalizes the rules and restrictions as they apply to a
collection of NIEM-conformant schema documents. This conceptual
artifact composes exactly one *Schema*, which is the sum rules
and definitions defined within the set capable of validating
Schema Instance Documents.

{:.features}
>
> - Explicit Conformance Target specified in the [Naming and Design Rules (NDR)]({{site.data.links.ndr}})
> - Conceptual artifact for collection of schemas
> - Resolves to exactly one Schema
> - Capable of validating Schema Instance Documents

{:.note}
> Because Schema Document Sets are composed of NIEM-conformant schema
> documents (either `REF` or `EXT`), each member document must adhere to
> the rules disignated by their individual conformance targets. Furthermore,
> the document set must also adhere to the rules applicable to the conformance
> target `SET`.

<!--more-->

## What is a Schema Document Set

A conformant Schema Document Set (SET) is a collection of schema documents that together are capable of validating a conformant Schema Instance Document. A SET defines a *Schema* that may be used to validate an instance document. This rule ensures that a SET under consideration contains definitions for everything that it references; it has everything necessary to do a complete validation of instance documents without any unresolved references.

As an artifact, `SET` is only useful in the discussion of NIEM package artifacts like IEPDs or IEPs.
