---
  title: Reference Schema Documents
  short: REF
  icon: fa-cubes
  description: REFs are NIEM schemas that provide authoritative definitions of broadly reusable schema components and follow a stricter syntax, as specified by the NDR.  NIEM release schemas are REFs.
  todo:
  - Needs review.
  - NIEM recommends again extension schema REFs?
---

Reference schema documents are one of the principal NIEM artifacts.
They provide the authoritative definitions of broadly reusable
schema components (e.g., data elements, types) from a given
namespace (e.g., Core (nc), Screening (scr)).

{:.features}
>
> - Explicit Conformance Target specified in the Naming and Design Rules (NDR)
> - Broadest and most fundamental definitions of namespace components
> - Provides authoritative semantics for namespace components
> - Serves as the basis for IEPDs and Extension Schema Documents

The rules for development of reference schema documents are more restrictive than all other NIEM components to enforce the documents' features:

- Has a uniform document structure.
- Does not restrict other data definitions.
- Does not use XML Schema's restriction mechanism `xs:restriction`.
- Made as regular and simple as possible.

{:.note}
> Refer to **[Namespaces in XML]({{ "/reference/concepts/namespace/xml/" | relative_url }})** for information about how to set up a new NIEM XML Schema.  Make sure to use the appropriate **REF** conformance target (further described below).

<!--more-->

## Why Reference Schema Documents

A NIEM Reference Schema Document (REF) is a collection of authoritative
definitions for the reusable schema components defined within its target namespace.
REFs include the NIEM Core schema documents, NIEM domain schema documents, and NIEM
domain update schema documents as well as a REF defined within an IEPD (however NIEM
recommends against defining a REF in that way).

The conformance rules for reference schema documents are generally stricter than those
for other classes of NIEM-conformant schema documents. For example, they are not
allowed to use schema groups such as `xs:choice` or `xs:any` that other schema documents
may contain. REFs are the primary definitions for data components; as such, they are not
allowed to use schema complex type restriction mechanisms.

Every REF includes an `xs:annotation` element that defines its semantic meaning allowing
for a more transparent understanding of why the REF was created and how it's to be used.
As explained elsewhere, [extension schema documents (EXTs)](../ext/)
are also authoritative
definitions, but in a local sense. They are authoritative within a given IEPD, and
therefore, must also satisfy the same rigorous documentation rules as REFs.

Typically REFs contain data components with the most relaxed cardinality (0 to
unbounded). If necessary, cardinality in REFs may be constrained to model reality. For
example, a `nc:Location2DGeospatialCoordinateType` contains both a
`nc:GeographicCoordinateLatitude` element and a `nc:GeographicCoordinateLongitude`
element. Each of these elements has cardinality `minOccurs="1"` and `maxOccurs="1"`. Any
other cardinality for these elements has no meaning. On the other hand, one might claim
that NIEM should constrain `nc:PersonType` to a single occurrence of the element
`nc:PersonBirthDate`. Every person has one, and only one, birth date. In reality,
criminal persons often present multiple identities with multiple birth dates;
the capability to represent such is an important data requirement for NIEM.

## REF Conformance Target

A REF must include the appropriate conformance target, as defined by the NDR.  The conformance target identifier for a NDR 4.0-based REF is:

> `http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument`

Refer to the information about the [Conformance Targets Attribute Specification]({{ site.data.pages.ctas | relative_url }}) for more information.
