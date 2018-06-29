---
  title: Extension Schema Documents
  short: Extension Schema Documents
  icon: fa-sitemap
  description: Description of extension schema documents.
  links:
    - url: /reference/artifacts/extension-schema-document/structure/
    - url: /reference/artifacts/extension-schema-document/usage/
---

Extension schema documents (EXTs), like [reference schema documents (REFs)](/reference/artifacts/reference-schema-document/),
are a fundamental part of NIEM model design. They contain components that
use, or are derived from, the components in REFs and express additional
vocabulary above and beyond the vocabulary available from REFs.

{:.features}
>
> - Use explicit Conformance Target specified in the [Naming and Design Rules (NDR)]({{site.data.links.ndr}}).
> - Define package-specific data elements and models.
> - Extend vocabulary above and beyond that avaliable to REFs.
> - Augment an existing NIEM data type (through NIEM Type Augmentation).
> - Employ NIEM adapter types for components from an external standard that does not conform to NIEM.
> - Limit the behavior of existing NIEM data types through schema `xs:restriction`.
> - Can serve as the core schematic definitions of an IEPD.

{:.note}
> Because the application of extension schema documents does not
> diverge much from reference schema documents, they must satisfy
> the same documentation requirements of reference schema documents.

<!--more-->

## Why Extension Schema Documents

An EXT is used to either extend or limit the behavior
of data and data types defined in REFs. Similar to REFs,
EXTs define the authoritative definitions for elements and data types used within an
exchange. To simplify automatic schema processing and reduce the potential for confusion
and error, NIEM principles state that each NIEM-conformant namespace SHOULD be defined
by exactly one REF or EXT.

A developer who determines that NIEM is missing elements required for a given information
exchange may use EXTs to account for such requirement shortfalls. An EXT may contain data
components built from REFs or from non-conformant external schemas through the use of
[adapter types and definitions](/reference/concepts/adapter). Employment of EXTs in an IEPD, however, is entirely optional.

EXTs generally contain new data component declarations that may be derived from, or reference, existing NIEM data components. The definition or
declaration of each new data component in an extension schema document must include an
`xs:annotation` element that provides its semantics and NIEM-specific relationships.

## EXT Example

```xml
  <?xml version="1.0" encoding="US-ASCII"?>
  <xs:schema targetNamespace="http://release.niem.gov/niem/niem-core/4.0/" version="1" xsi:schemaLocation="http://release.niem.gov/niem/appinfo/4.0/ ../../appinfo/4.0/appinfo.xsd http://release.niem.gov/niem/conformanceTargets/3.0/ ../../conformanceTargets/3.0/conformanceTargets.xsd" ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/#ExtensionSchemaDocument" xmlns:niem-xs="http://release.niem.gov/niem/proxy/xsd/3.0/" xmlns:structures="http://release.niem.gov/niem/structures/3.0/" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:appinfo="http://release.niem.gov/niem/appinfo/3.0/" xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/" xmlns:nc="http://release.niem.gov/niem/niem-core/3.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <xs:import schemaLocation="../../proxy/xsd/3.0/xs.xsd" namespace="http://release.niem.gov/niem/proxy/xsd/3.0/"/>
    <xs:import schemaLocation="../../structures/3.0/structures.xsd" namespace="http://release.niem.gov/niem/structures/3.0/"/>
    <xs:element name="DateRepresentation" abstract="true"/>
    <xs:element name="DateTime" type="niem-xs:dateTime" substitutionGroup="nc:DateRepresentation"/>
  </xs:schema>
```

## Detailed Reference

{% include icon-list.html links=page.links %}
