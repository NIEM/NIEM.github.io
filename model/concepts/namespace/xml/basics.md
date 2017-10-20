---
  title: Namespace Basics
---

Namespaces have several characteristics that have straight-forward representations in XML schema.

- TOC
{:toc}

## Target namespace URI

The target namespace URI is declared as a schema attribute:

`targetNamespace="URI"`

Core 4.0 example:

```xml
<xs:schema targetNamespace="http://release.niem.gov/niem/niem-core/4.0/">
  ...
</xs:schema>
```

## Target namespace prefix

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

## Version

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

## Definition

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
