---
  title: Reference Schema Documents
  short: Reference Schema Documents
  icon: fa-sitemap
  description: Description of reference schema documents.
  links:
    - url: /reference/artifacts/reference-schema-document/structure/
    - url: /reference/artifacts/reference-schema-document/usage/
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

{:.note}
> The rules for development of reference schema documents are more
> restrictive than all other NIEM components to enforce the documents’
> features:
> - Has a uniform document structure.
> - Does not restrict other data definitions.
> - Does not use XML Schema's restriction mechanism `xs:restriction`.
> - Made as regular and simple as possible.

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
As explained elsewhere, [extension schema documents (EXTs)](/reference/artifacts/extension-schema-document/)
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

## Quick Example

```xml
  <?xml version="1.0" encoding="US-ASCII"?>
  <xs:schema targetNamespace="http://release.niem.gov/niem/niem-core/4.0/" version="1" xsi:schemaLocation="http://release.niem.gov/niem/appinfo/4.0/ ../../appinfo/4.0/appinfo.xsd http://release.niem.gov/niem/conformanceTargets/3.0/ ../../conformanceTargets/3.0/conformanceTargets.xsd" ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/#ReferenceSchemaDocument" xmlns:niem-xs="http://release.niem.gov/niem/proxy/xsd/3.0/" xmlns:structures="http://release.niem.gov/niem/structures/3.0/" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:appinfo="http://release.niem.gov/niem/appinfo/3.0/" xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/" xmlns:nc="http://release.niem.gov/niem/niem-core/3.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <xs:import schemaLocation="../../proxy/xsd/3.0/xs.xsd" namespace="http://release.niem.gov/niem/proxy/xsd/3.0/"/>
    <xs:import schemaLocation="../../structures/3.0/structures.xsd" namespace="http://release.niem.gov/niem/structures/3.0/"/>
    <xs:element name="DateRepresentation" abstract="true"/>
    <xs:element name="DateTime" type="niem-xs:dateTime" substitutionGroup="nc:DateRepresentation"/>
  </xs:schema>
```

## Detailed Reference

{% include icon-list.html links=page.links %}
