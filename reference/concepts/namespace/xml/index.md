---
  title: Namespaces in XML
  short: XML
  ndr:
  - spec:
    version: "5.0"
    rules:
    - number: 4-1
    - number: 4-2
    - number: 4-3
    - number: 4-4
    - number: 4-5
    - number: 4-6
    - number: 7-1
    - number: 7-2
    - number: 7-3
    - number: 7-4
    - number: 9-75
    - number: 9-76
    - number: 9-77
    - number: 9-78
    - number: 9-79
    - number: 9-80
    - number: 9-81
    - number: 9-86
    - number: 9-87
    - number: 9-88
    - number: 9-89
    - number: 9-90
    - number: 9-91
    - number: 9-92
    - number: 9-93
    - number: 9-94
    - number: 9-95
    - number: 9-96
    - number: 9-97
    - number: 10-45
    - number: 11-30
  - spec:
    version: "4.0"
    rules:
    - number: 4-1
    - number: 4-2
    - number: 4-3
    - number: 4-4
    - number: 4-5
    - number: 4-6
    - number: 7-1
    - number: 7-2
    - number: 7-3
    - number: 7-4
    - number: 9-75
    - number: 9-76
    - number: 9-77
    - number: 9-78
    - number: 9-79
    - number: 9-80
    - number: 9-81
    - number: 9-86
    - number: 9-87
    - number: 9-88
    - number: 9-89
    - number: 9-90
    - number: 9-91
    - number: 9-92
    - number: 9-93
    - number: 9-94
    - number: 9-95
    - number: 9-96
    - number: 9-97
---

- TOC
{:toc}

## Full Template

A template for 4.0 and 5.0 NIEM namespaces are provided below.

This should help give an overview of how a NIEM namespace looks in XML Schema, but each part will be broken out and explained in the section that follows.

Placeholders appear in upper case.  A few common namespace prefixes and import statements for 4.0 and 5.0 are also provided, but the relative paths in the import statements will need to be adjusted based on local directory layouts.

{: .tip}
> In order to use extension schema rules rather than reference schema rules, like for an IEPD extension namespace, change the end of the ct:conformanceTargets value from `#ReferenceSchemaDocument` to `#ExtensionSchemaDocument`.

**4.0 template**

```xml
<?xml version="1.0" encoding="US-ASCII"?>
<xs:schema
  targetNamespace="URI" version="VERSION"

  xsi:schemaLocation="http://release.niem.gov/niem/appinfo/4.0/ ../niem/utility/appinfo/4.0/appinfo.xsd
  http://release.niem.gov/niem/conformanceTargets/3.0/ ../niem/utility/conformanceTargets/3.0/conformanceTargets.xsd"

  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument"

  xmlns:PREFIX="URI"
  xmlns:appinfo="http://release.niem.gov/niem/appinfo/4.0/"
  xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/"
  xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/"
  xmlns:niem-xs="http://release.niem.gov/niem/proxy/xsd/4.0/"
  xmlns:structures="http://release.niem.gov/niem/structures/4.0/"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <xs:annotation>
    <xs:documentation>NAMESPACE_DEFINITION</xs:documentation>
    <xs:appinfo>
      <appinfo:LocalTerm term="TERM1" literal="LITERAL1"/>
      <appinfo:LocalTerm term="TERM2" definition="DEFINITION2"/>
    </xs:appinfo>
  </xs:annotation>

  <xs:import schemaLocation="IMPORT_PATH" namespace="IMPORT_URI"/>
  <xs:import schemaLocation="../niem/niem-core/4.0/niem-core.xsd"
             namespace="http://release.niem.gov/niem/niem-core/4.0/"/>
  <xs:import schemaLocation="../niem/utility/structures/4.0/structures.xsd"
             namespace="http://release.niem.gov/niem/structures/4.0/"/>

  <!-- element, attribute, and type declarations -->

</xs:schema>
```

**5.0 template**

```xml
<?xml version="1.0" encoding="US-ASCII"?>
<xs:schema
  targetNamespace="URI" version="VERSION" xml:lang="en-US"

  xsi:schemaLocation="http://release.niem.gov/niem/appinfo/5.0/ ../utility/appinfo.xsd
  http://release.niem.gov/niem/conformanceTargets/3.0/ ../utility/conformanceTargets.xsd"

  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/5.0/#ReferenceSchemaDocument"

  xmlns:PREFIX="URI"
  xmlns:appinfo="http://release.niem.gov/niem/appinfo/5.0/"
  xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/"
  xmlns:nc="http://release.niem.gov/niem/niem-core/5.0/"
  xmlns:niem-xs="http://release.niem.gov/niem/proxy/xsd/5.0/"
  xmlns:structures="http://release.niem.gov/niem/structures/5.0/"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <xs:annotation>
    <xs:documentation>NAMESPACE_DEFINITION</xs:documentation>
    <xs:appinfo>
      <appinfo:LocalTerm term="TERM1" literal="LITERAL1"/>
      <appinfo:LocalTerm term="TERM2" definition="DEFINITION2"/>
    </xs:appinfo>
  </xs:annotation>

  <xs:import namespace="IMPORT_URI" schemaLocation="IMPORT_PATH"/>
  <xs:import namespace="http://release.niem.gov/niem/niem-core/5.0/" schemaLocation="../niem-core.xsd"/>
  <xs:import namespace="http://release.niem.gov/niem/structures/5.0/" schemaLocation="../utility/structures.xsd"/>

  <!-- element, attribute, and type declarations -->

</xs:schema>
```

{: .note}
[Local terminology](../../local-term), [elements](../../property/element), [attributes](../../property/attribute), and [types](../../type), which appear in the template above, are described in their own sections.

## The Pieces

### Target URI, Version, and Language

The target namespace URI, version, and language are declared as schema attributes:

{:.note}
> `xml:lang` is a newly-added requirement to NDR 5.0.

```xml
targetNamespace="URI"
```

```xml
version="VERSION"
```

```xml
xml:lang="LANG"
```

Core 5.0 example:

```xml
<xs:schema targetNamespace="http://release.niem.gov/niem/niem-core/5.0/" version="1" xml:lang="en-US">
  ...
</xs:schema>
```

### xsi:SchemaLocation

`xsi:schemaLocation` is used to bind one or more URIs to their locations.  NIEM uses this in places where a namespace is referenced but does not have to be imported (metadata on the schema itself).

The value of the attribute is a string of one or more "URI LOCATION" pairs.

```xml
xsi:schemaLocation="URI1 LOC1 URI2 LOC2 ..."
```

In 4.0, `xsi:schemaLocation` is used for the conformance targets namespace and the appinfo namespace.

```xml
<xs:schema
  xsi:schemaLocation="http://release.niem.gov/niem/appinfo/4.0/ ../niem/utility/appinfo/4.0/appinfo.xsd
  http://release.niem.gov/niem/conformanceTargets/3.0/ ../niem/utility/conformanceTargets/3.0/conformanceTargets.xsd">
  ...
</xs:schema>
```

### Conformance Targets

Conformance targets are URIs that identify rules to apply to check conformance.

```xml
ct:conformanceTargets="URI"
```

If there are multiple conformance targets, separate each URI with a space.

```xml
ct:conformanceTargets="URI1 URI2 ..."
```

The namespace prefix `ct` corresponds to URI `http://release.niem.gov/niem/conformanceTargets/3.0/`

{: .note}
> The conformance targets namespace did not change in the NIEM 4.0 release, so it remains at version 3.0.

NIEM 4.0-based example of a namespace targeting the NDR 4.0 reference rules:

```xml
<xs:schema
  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument"
  >
  ...
</xs:schema>
```

NIEM 4.0-based example of a namespace (like an extension schema) targeting the NDR 4.0 extension rules:

```xml
<xs:schema
  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ExtensionSchemaDocument"
  >
  ...
</xs:schema>
```

See the section about the [Conformance Targets Attribute Specification](../../../specifications/conformance-targets/) for more information.

### Namespace prefixes

Prefixes should be assigned for each namespace that is referenced, and also for the current namespace.

```xml
xmlns:PREFIX="URI"
```

This statement binds the prefix to the given URI, so the prefix may be used in the schema as an abbreviation for the full URI.

Core 4.0 namespace prefix example:

```xml
<xs:schema
  xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/">
  ...
</xs:schema>
```

Prefixes should be assigned for:

- the current namespace
- imported namespaces
- xsi:schemaLocation namespaces
- the XML Schema namespace (xs)
- the XML Schema Instance namespace (xsi)

NIEM namespaces that are not required but that are commonly used include:

- Core
- niem-xs
- structures

The target and imported namespaces will vary based on the given schema, but the remaining ones from the lists above appear as the following in NIEM 4.0:

```xml
<xs:schema
  xmlns:appinfo="http://release.niem.gov/niem/appinfo/4.0/"
  xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/"
  xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/"
  xmlns:niem-xs="http://release.niem.gov/niem/proxy/xsd/4.0/"
  xmlns:structures="http://release.niem.gov/niem/structures/4.0/"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
</xs:schema>
```

### Definition

A definition for the namespace is required.

```xml
<xs:annotation>
  <xs:documentation>DEFINITION</xs:documentation>
</xs:annotation>
```

The definition is represented as annotation documentation on the xs:schema root node.

CBRN 4.0 domain example:

```xml
<xs:schema>
  <xs:annotation>
    <xs:documentation>Chemical, Biological, Radiological, and Nuclear Domain</xs:documentation>
  </xs:annotation>
  ...
</xs:schema>
```

### Imports

Import statements (or catalog files) are required in order to reuse content from other namespaces.

An import statement lists the URI and either the absolute or the relative path of the namespace to be imported.

```xml
<xs:import schemaLocation="IMPORT_PATH" namespace="IMPORT_URI"/>
```

Example import of Core 4.0:

```xml
<xs:import schemaLocation="../niem/niem-core/4.0/niem-core.xsd"
           namespace="http://release.niem.gov/niem/structures/4.0/"/>
```

## NIEM's profile of XML Schema

To promote consistency across a broad community, NIEM limits some of the features available in XML Schema that provide flexibility but may hurt interoperability or reusability.

A few of the key restrictions on the usage of XML Schema are listed below.  See the NDR for more.

### No local elements

Local elements and attributes cannot be reused outside of the type in which they are defined, which conflicts with the NIEM principle of maximizing reusability.

### No anonymous types

Types defined anonymously can only be used by the elements that define them, which conflicts with the NIEM principle of maximizing reusability.

### No xs:include

Include statements are declared to combine multiple schema files into a single logical namespace with one target namespace.  Import statements are declared to reuse content from a schema with a target namespace.

NIEM requires that each XML Schema must have its own target namespace to provide unambiguous identification of content, so include statements may not be used.

### No xs:choice (ref only)

The use of `xs:choice` can lead to ambiguity in some circumstances and are thus not allowed in NIEM reference schemas.  Element substitution is a common alternative.

Extension schemas are allowed to use `xs:choice`.

## References

{% include ndr-references.html list=page.ndr %}
