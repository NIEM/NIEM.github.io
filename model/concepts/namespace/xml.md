---
  title: Namespaces in XML
  tutorial: xml
---

- TOC
{:toc}

## Overview

XML Schema has been the typical representation for a NIEM namespace.

## XML Modeling

### xs:include statements are not allowed

Imports are declared to reuse content from a schema with a target namespace; includes are declared for schemas without a target namespace.  Since NIEM schemas must have a target namespace, include statements may not be used.

## Templates

### Full XML Schema

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

### Target namespace URI

The target namespace URI is declared as a schema attribute:

`targetNamespace="URI"`

Core 4.0 example:

```xml
<xs:schema targetNamespace="http://release.niem.gov/niem/niem-core/4.0/">
  ...
</xs:schema>
```

### Target namespace prefix

A prefix for the target namespace must be assigned:

`xmlns:PREFIX="URI"`

This is a namespace prefix declaration.  It binds the prefix to that URI, so the prefix may be used in the schema as an abbreviation for the full URI.

A namespace prefix declaration is local to the schema that defines it - another schema may assign a different prefix to a URI.  In NIEM, it is customary to use the same set of prefixes for consistency, but it is not required and users may assign their own prefixes in local schemas.

Core 4.0 example:

```xml
<xs:schema xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/">
  ...
</xs:schema>
```

Note that this URI is the same as the target namespace URI.

### Version

Version is a schema attribute that distinguishes different versions of a schema with the same URI and filename:

`version="VERSION"`

Alpha 1 pre-release example:

```xml
<xs:schema version="alpha1">
  ...
</xs:schema>
```

Release example:

```xml
<xs:schema version="1">
  ...
</xs:schema>
```

### Definition

A definition for the namespace is required:

```xml
<xs:schema>
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
  ...
</xs:schema>
```

Screening 4.0 domain example:

```xml
<xs:schema>
  <xs:annotation>
    <xs:documentation>The People Screening domain provides harmonized information sharing content within the Screening Portfolio of DHS. The Screening namespace is initially being populated with person screening information for immigrant and non-immigrant person types who have been encountered and identified by the Screening Portfolio Components. Screening expands on encounter-related NIEM elements currently included in the Immigration and Intelligence domains.</xs:documentation>
  </xs:annotation>
  ...
</xs:schema>
```

## XML instance

### Example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ext:SampleReport
  xmlns:ext="http://example.com/sample/extension/1.1/"
  xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://example.com/sample/extension/1.1/ ../xsd/extension/TemplateExtension.xsd">
  <nc:DateTime>2006-05-04T18:13:51.0Z</nc:DateTime>
</ext:SampleReport>
```

Namespace prefix declarations are made for the schema that the given instance is based on.  The URI of that schema must be link to a file path via `xsi:schemaLocation`, or alternatively, a XML catalog file must be used to specify this binding.

TODO: XML Catalog example

### Template

```xml
<?xml version="1.0" encoding="UTF-8"?>
<PREFIX:ROOT_ELEMENT_NAME
  xmlns:PREFIX="URI"
  xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="URI PATH">

  <!-- instance content -->

</PREFIX:ROOT_ELEMENT_NAME>
```
