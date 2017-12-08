---
  title: Namespaces in XML
  training: xml
  next: property
---

- TOC
{:toc}

## Overview

A NIEM XML Schema follows the general pattern below:

```xml
<?xml version="1.0" encoding="US-ASCII"?>
<xs:schema
  <!-- -->
  <!-- target namespace URI and version -->

  <!-- xsi:schemaLocation assignments -->

  <!-- conformance target(s) -->

  <!-- namespace prefix declarations -->

  >

  <!-- namespace definition and local terminology -->

  <!-- import statements -->

  <!-- element, attribute, and type declarations -->

</xs:schema>
```

### Target namespace URI and Version

The target namespace URI and version are declared as schema attributes:

```xml
targetNamespace="URI"
```

```xml
version="VERSION"
```

Core 4.0 example:

```xml
<xs:schema targetNamespace="http://release.niem.gov/niem/niem-core/4.0/" version="1">
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

### Namespace prefix declarations

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

- the target namespace
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

## Full Template

A template for a 4.0 NIEM namespace is provided below.

Placeholders appear in upper case.  A few common namespace prefixes and import statements are also provided.

```xml
<?xml version="1.0" encoding="US-ASCII"?>
<xs:schema
  targetNamespace="URI" version="VERSION"

  xsi:schemaLocation="http://release.niem.gov/niem/appinfo/4.0/ ../niem/utility/appinfo/4.0/appinfo.xsd
  http://release.niem.gov/niem/conformanceTargets/3.0/ ../niem/utility/conformanceTargets/3.0/conformanceTargets.xsd"

  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument"

  xmlns:PREFIX="URI"
  xmlns:IMPORT_PREFIX="IMPORT_URI"
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
      <term:LocalTerm term="TERM1" literal="LITERAL1"/>
      <term:LocalTerm term="TERM2" definition="DEFINITION2"/>
    </xs:appinfo>
  </xs:annotation>

  <xs:import schemaLocation="IMPORT_PATH" namespace="IMPORT_URI"/>
  <xs:import schemaLocation="../niem/niem-core/4.0/niem-core.xsd" 
             namespace="http://release.niem.gov/niem/structures/4.0/"/>
  <xs:import schemaLocation="../niem/utility/structures/4.0/structures.xsd" 
             namespace="http://release.niem.gov/niem/niem-core/4.0/"/>

  <!-- element, attribute, and type declarations -->

</xs:schema>
```

{: .note}
Local terminology, which appears in the template above, is described in its own [section](../local-term).

## NIEM's profile of XML Schema

To promote consistency across a broad community, NIEM limits some of the features available in XML Schema that provide flexibility but may hurt interoperability or reusability.

A few of the key restrictions on the usage of XML Schema are listed below.  See the NDR for more.

### Local elements and attributes are not allowed

Local elements and attributes cannot be reused outside of the type in which they are defined, which conflicts with the NIEM principle of maximizing reusability.

### No anonymous types

Types defined anonymously can only be used by the elements that define them, which conflicts with the NIEM principle of maximizing reusability.

### xs:include statements are not allowed

Include statements are declared to combine multiple schema files into a single logical namespace with one target namespace.  Import statements are declared to reuse content from a schema with a target namespace.

NIEM requires that each XML Schema must have its own target namespace to provide unambiguous identification of content, so include statements may not be used.

### xs:choice statements are not allowed in reference schemas

The use of `xs:choice` can lead to ambiguity in some circumstances and are thus not allowed in NIEM reference schemas.  Element substitution is a common alternative.  

Extension schemas are allowed to use `xs:choice`.
