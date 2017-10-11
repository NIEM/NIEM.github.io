---
  title: Namespaces in XML
---

- TOC
{:toc}

## XML Overview

XML allows a single namespace to be represented by one or more schemas (multiple schemas are enabled via `xs:include` statements).  NIEM requires each namespace to be represented by a single schema only.

## XML Schema Namespace

### Defining the namespace

Match line numbers to the schema template below the table.

| Item | Field | Comments |
| ---- | ----- | -------- |
| This namespace |  |  |
|      | NamespaceURI | The unique ID (as a <a href="http://en.wikipedia.org/wiki/Uniform_Resource_Identifier">URI</a>) for the namespace |
|      | NamespacePref | An abbreviation to use in place of the full namespace URI<br><i>This abbreviation is used with qualified component names, e.g., "nc:Person"</i> |
|  | NamespaceDefinition | The definition of this namespace |
| Imported namespace(s) |  | <i>These fields will be repeated for each imported namespace</i> |
|  | ImportPrefix | An abbreviation to use in place of the full imported namespace URI |
|  | ImportURI | A unique identifier (as a URI) for the imported namespace |
|  | Import path | A relative or absolute path to the imported namespace |
| Local Terminology  | | <i>These fields will be repeated for each local term<br> Either a literal or a definition must be provided for each term </i> |
|  | Term | A word, phrase, acronym, or other string not defined in a standard dictionary |
|  | TermLiteral | The full text of an abbreviation or acronym |
|  | TermDefinition | A description of the local term |

### Schema template

```xml
<?xml version="1.0" encoding="US-ASCII"?>
<xs:schema
  targetNamespace="{$NamespaceURI}" version="1"

  xsi:schemaLocation="http://release.niem.gov/niem/appinfo/4.0/ ../niem/utility/appinfo/4.0/appinfo.xsd
  http://release.niem.gov/niem/conformanceTargets/3.0/ ../niem/utility/conformanceTargets/3.0/conformanceTargets.xsd"

  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument"

  xmlns:{$NamespacePrefix}="{$NamespaceURI}"
  xmlns:{$ImportPrefix}="{$ImportURI}"
  xmlns:appinfo="http://release.niem.gov/niem/appinfo/4.0/"
  xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/"
  xmlns:niem-xs="http://release.niem.gov/niem/proxy/xsd/4.0/"
  xmlns:structures="http://release.niem.gov/niem/structures/4.0/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <xs:annotation>
    <xs:documentation>{$NamespaceDefinition}</xs:documentation>
    <xs:appinfo>
      <term:LocalTerm term="{$Term}" literal="{$TermLiteral}"/>
    </xs:appinfo>
  </xs:annotation>

  <xs:import schemaLocation="{$ImportPath}" namespace="${ImportURI}"/>
  <xs:import schemaLocation="../niem/niem-core/4.0/niem-core.xsd" 
             namespace="http://release.niem.gov/niem/structures/4.0/"/>
  <xs:import schemaLocation="../niem/utility/structures/4.0/structures.xsd" 
             namespace="http://release.niem.gov/niem/niem-core/4.0/"/>

  <!-- element, attribute, and type declarations -->

</xs:schema>
```

## Referencing a namespace in an instance

### Instance template

| Field | Comments |
| ----- | -------- |
| NamespacePrefix | An abbreviation to use in place of the full namespace URI<br>       <i>This prefix typically matches the abbreviation used in the schema</i> |
| NamespaceURI | The target namespace URI of the referenced namespace<br> <i>Note that this URI must match the targetNamespace defined by the schema exactly</i> |
| NamespacePath | A relative or absolute path to the imported namespace |
| RootElementName | The name of the top-level element for the instance |

```xml
<?xml version="1.0" encoding="UTF-8"?>
<{$NamespacePrefix}:{$RootElementName}
  xmlns:{$NamespacePrefix}="{$NamespaceURI}"
  xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="{$NamespaceURI} {$NamespacePath}">

  <!-- instance content -->

</{$NamespacePrefix}:{$RootElementName}>
```
