---
  title: Extension Schema Documents
  short: EXT
  icon: fa-ellipsis-h
  description: EXTs are user-created NIEM schemas for custom content and may follow a more relaxed syntax, as specified by the NDR.  IEPD extension schemas are often EXTs.
  todo:
  - Extension schema documents are not the same things as extension schemas (which can optionally use the REF target).  Need to clarify this page so it refers to the NDR EXT target and relaxed rule set.
---

Extension schema documents (EXTs), like [reference schema documents (REFs)](../ref/),
are a fundamental part of NIEM model design. They contain components that
use, or are derived from, the components in REFs and express additional
vocabulary above and beyond the vocabulary available from REFs.

{:.note}
>An IEPD developer creates new data types or elements needed for the specific exchange with an extension schema document.

{:.features}
>
> - Use explicit Conformance Target specified in the [Naming and Design Rules (NDR)]({{site.data.links.ndr}}).
> - Define package-specific data elements and models.
> - Extend vocabulary above and beyond that available to REFs.
> - Augment an existing NIEM data type (through NIEM Type Augmentation).
> - Employ NIEM adapter types for components from an external standard that does not conform to NIEM.
> - Limit the behavior of existing NIEM data types through schema `xs:restriction`.
> - Can serve as the core schematic definitions of an IEPD.

{:.note}
> Refer to **[Namespaces in XML]({{ "/reference/concepts/namespace/xml/" | relative_url }})** for information about how to set up a new NIEM XML Schema.  Make sure to use the appropriate **EXT** conformance target (further described below).

<!--more-->

Because the application of extension schema documents does not diverge much from reference schema documents, they must satisfy the same documentation requirements of reference schema documents.

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
[adapter types and definitions]({{ "/reference/concepts/adapter/" | relative_url }}). Employment of EXTs in an IEPD, however, is entirely optional.

EXTs generally contain new data component declarations that may be derived from, or reference, existing NIEM data components. The definition or
declaration of each new data component in an extension schema document must include an
`xs:annotation` element that provides its semantics and NIEM-specific relationships.

## EXT Conformance Target

An EXT must include the appropriate conformance target, as defined by the NDR.  The conformance target identifier for a NDR 4.0-based EXT is:

> `http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ExtensionSchemaDocument`

Refer to the information about the [Conformance Targets Attribute Specification]({{ site.data.pages.ctas | relative_url }}) for more information.
