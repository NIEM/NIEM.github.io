---
  title: Namespaces in XML
---

- TOC
{:toc}

## XML Overview

XML Schema has been the typical representation for a NIEM namespace.

## Key rules and guidance

### Each namespace must have its own target namespace

This makes all schemas easy to reference individually and prevents one namespace from being defined across multiple files.

### A target namespace must be an absolute URI

Relative URIs are not allowed. An absolute URI, such as a URL or a URN, is universally identifiable.

### xs:include statements are not allowed

Imports are declared to reuse content from a schema with a target namespace; includes are declared for schemas without a target namespace.  Since NIEM schemas must have a target namespace, include statements may not be used.

## XML Schema template

A template for a 4.0 NIEM namespace is provided below.  Placeholders appear in upper case.  A few common namespace prefixes and import statements are also provided.

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

## Parts of a namespace

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

### Imports

#### Conformant namepace

TODO - import vs xsi:schemaLocation

To reuse elements, attributes, and types from an outside namespace, that namespace must be imported.  Each import requires both a namespace prefix declaration and an import statement:

`xmlns:IMPORT_PREFIX="IMPORT_URI"`

`<xs:import schemaLocation="IMPORT_PATH" namespace="IMPORT_URI"/>`

Example:

```xml
<xs:schema xmlns:nga="http://release.niem.gov/niem/codes/nga_datum/4.0/">

  <xs:import schemaLocation="../../codes/nga_datum/4.0/nga_datum.xsd" namespace="http://release.niem.gov/niem/codes/nga_datum/4.0/"/>

  ...
</xs:schema>
```

#### External namespace

Importing an external namespace (a namespace without a NIEM conformance target) requires two additional pieces of information in addition to the standard import: an external flag and a definition.

The flag is needed to identify the namespace as non-conformant.  This enables NIEM conformance rules to exclude external content and avoid throwing errors that do not apply. A definition is required since there is no guarantee an external schema will contain one.

External flag and definition on the import:

```xml
<xs:import schemaLocation="IMPORT_PATH" namespace="IMPORT_URI" appinfo:externalImportIndicator="true">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:import>
```

Example import of an external namespace (GML):

```xml
<xs:schema xmlns:gml="http://www.opengis.net/gml/3.2">

  <xs:import schemaLocation="../../../external/ogc/gml/3.2.1/gml.xsd" namespace="http://www.opengis.net/gml/3.2" appinfo:externalImportIndicator="true">
    <xs:annotation>
      <xs:documentation>
      Geography Markup Language (GML) version 3.2.1 schemas. See http://www.opengeospatial.org OGC document 07-036 for documentation: "The Geography Markup Language (GML) was originally developed within the Open Geospatial Consortium, Inc. (OGC). ISO 19136 was prepared by ISO/TC 211 jointly with the OGC." See http://schemas.opengis.net/gml/ for schemas.
      </xs:documentation>
    </xs:annotation>
  </xs:import>

</xs:schema>
```

### Appinfo

The appinfo namespace is used to support machine-readable documentation.

TODO - import vs xsi:schemaLocation

Because it is used only within annotation blocks, it is not necessary to import the namespace.  In addition to the namespace prefix declaration, `xsi:schemaLocation` is used to link the URI of this namespace to a specific file path:

```xml
<xs:schema
  xmlns:PREFIX="URI"`
  xsi:schemaLocation="URI PATH">
  ...
</xs:schema>
```

"xsi" stands for XML Schema Instance.

The `xsi:schemaLocation` attribute may contain multiple URI-Path pairs:

`xsi:schemaLocation="URI1 PATH1 URI2 PATH2"`

Example:

```xml
<xs:schema
  xsi:schemaLocation="http://release.niem.gov/niem/appinfo/4.0/ ../niem/utility/appinfo/4.0/appinfo.xsd

  xmlns:appinfo="http://release.niem.gov/niem/appinfo/4.0/">
  ...
</xs:schema>
```

### Conformance Targets

The conformanceTargets namespace defines the mechanism NIEM schemas use to declare which set(s) of rules they intend to conform to.  NIEM has multiple classes and versions of NDR rules (reference vs extension, 3.0 vs 4.0, etc.).  This enables a schema to be very explicit about which rules should be applied.

NDR rules are not the only possible conformance target.  Additional NIEM conformance targets may be defined in the future, and local ones be defined as well if desired.

Conformance target for a 4.0 reference schema document:

`ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument"`

Conformance target for a 4.0 extension schema document:

`ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ExtensionSchemaDocument"`

Both targets are very similar.  Only the fragment at the end is different (`#ReferenceSchemaDocument` vs `#ExtensionSchemaDocument`).

TODO - import vs xsi:schemaLocation

Like appinfo, the conformanceTargets namespace does not need to be imported.  Schemas use `xsi:schemaLocation` to link its URI to a specific file path.

```xml
<xs:schema
  xmlns:PREFIX="URI"`
  xsi:schemaLocation="URI PATH"
  ct:conformanceTargets="CONFORMANCE_TARGET_1 CONFORMANCE_TARGET_2 ...">
  ...
</xs:schema>
```

Example:

```xml
<xs:schema
  xsi:schemaLocation="http://release.niem.gov/niem/conformanceTargets/3.0/ ../niem/utility/conformanceTargets/3.0/conformanceTargets.xsd"

  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument"

  xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/">
  ...
</xs:schema>
```

Note that the 4.0 NIEM release reuses the 3.0 version of the conformanceTargets namespace.  No changes were applied to this namespace for 4.0, so the same namespace is used for both 3.0 and 4.0-based schemas.

### Local terminology

Local terminology is declared on the annotation element for the schema.  Either a literal or a definition is required for each term:

```xml
<xs:appinfo>
  <term:LocalTerm term="TERM" literal="LITERAL"/>
</xs:appinfo>
```

or

```xml
<xs:appinfo>
  <term:LocalTerm term="TERM" definition="DEFINITION"/>
</xs:appinfo>
```

Core 4.0 example (also includes the namespace definition via `xs:documentation`):

```xml
<xs:schema>
  <xs:annotation>
    <xs:documentation>NIEM Core.</xs:documentation>
    <xs:appinfo>
      <term:LocalTerm term="SSN" literal="Social Security Number"/>
      <term:LocalTerm term="ISO" literal="International Organization for Standardization"/>
      <term:LocalTerm term="Alpha3" definition="Three-letter"/>
      <term:LocalTerm term="Alpha2" definition="Two-letter"/>
      ...
    </xs:appinfo>
  </xs:annotation>
  ...
</xs:schema>
```

### Content

All of the information above is used to describe the given namespace and set up ways to reuse other namespaces.  The bulk of each namespace will be the list of type, element, and attribute declarations.  Examples of these are not provided here because each are described in detail in their own sections.

## XML instance template

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

Example:

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
