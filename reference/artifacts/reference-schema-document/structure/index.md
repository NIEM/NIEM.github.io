---
  title: Reference Schema Document Structure
  short: Structure
  icon: fa-sitemap
  description: Reference Schema Document Structure
---

Reference Schema Documents are a composition of NIEM conceptual components compatible with 
the NIEM conformance target REF. In such a way, Reference Schema Documents (REF) are
specified more generally by a NIEM conformant Schema Document header.

## Reference Schema Document Template

The following provides a conformant template layout for building a REF.
In general, REFs will use each of the components named in the Variable Replacement Table.

### Variable Replacement Table

{:.note}
> This Variable Replacement Table references [Naming and Design Rules (NDR)]({{site.data.links.ndr}}).

| Variable | Description | Usage | Reason |
|:--|:--|:--|:--|
| `{$NIEMRelease}` | The version number of the NIEM release referenced by this schema document | Required | Must reference a valid NIEM release |
| `{$ThisNamespacePrefix}` | Prefix of the namespace to which this schema document belongs | Optional | Defined as a convenience for internal referencing of the target namespace of this schema document |
| `{$ThisNamespaceURI}` | URI of the namespace to which this schema document belongs | Required | {%- capture ndr_stuff -%}{%- include ndr-rule-simple.html number="9-83" -%}<br/>{%- include ndr-rule-simple.html number="9-84" -%}{%- endcapture -%}{{- ndr_stuff | normalize_whitespace -}} |
| `{$OtherNamespacePrefix}` | The schema prefix of a namespace referenced by a namespace URI (Uniform Resource Identifier) | Optional | Required if other namespaces are referenced in this schema document |
| `{$OtherNamespaceURI}` | URI of a namespace used by this schema document | Optional | Required if other namespaces are referenced in this schema document |
| `{$DocumentVersion}` | The version of this schema document | Required | {%- capture ndr_stuff -%}{%- include ndr-rule-simple.html number="9-85" -%}{%- endcapture -%}{{- ndr_stuff | normalize_whitespace -}} |
| `{$DocumentDescription}` | The description of this schema document | Required | {%- capture ndr_stuff -%}{%- include ndr-rule-simple.html number="9-82" -%}{%- endcapture -%}{{- ndr_stuff | normalize_whitespace -}} |
| `{$Term}` | A well-known acronym or abbreviation used in this schema document | Optional | Used for machine-readable annotations |
| `{$TermLiteral}` | The full value of an acronym or abbreviation used in this schema | Optional | {%- capture ndr_stuff -%}{%- include ndr-rule-simple.html number="10-75" -%}{%- endcapture -%}{{- ndr_stuff | normalize_whitespace -}} |
| `{$ImportURI}` | URI of the schema namespace to import | Required | {%- capture ndr_stuff -%}{%- include ndr-rule-simple.html number="9-90" -%}{%- endcapture -%}{{- ndr_stuff | normalize_whitespace -}} |
| `{$ImportRelativeSchemaPath}` | Path to a schema document, relative to the location of the current schema within the Information Exchange Specification (IES) directory structure | Required | N/A |

### Pattern

```xml
  <?xml version="1.0" encoding="US-ASCII"?>
  <xs:schema 
      xmlns:xs="http://www.w3.org/2001/XMLSchema"
      xmlns:nc="http://release.niem.gov/niem/niem-core/{$NIEMRelease}/"
      xmlns:appinfo="http://release.niem.gov/niem/appinfo/{$NIEMRelease}/"
      xmlns:structures="http://release.niem.gov/niem/structures/{$NIEMRelease}/"
      xmlns:ct="http://release.niem.gov/niem/conformanceTargets/{$NIEMRelease}/"
      xmlns:term="http://release.niem.gov/niem/localTerminology/{$NIEMRelease}/"

      xmlns:{$OtherNamespacePrefix}="{$OtherNamespaceURI}"
      targetNamespace="{$ThisNamespaceURI}"
      xmlns:{$ThisNamespacePrefix}="{$ThisNamespaceURI}"
      version="{$DocumentVersion}"

      xsi:schemaLocation="http://release.niem.gov/niem/appinfo/{$NIEMRelease}/ ../../appinfo/{$NIEMRelease}/appinfo.xsd
                          http://release.niem.gov/niem/conformanceTargets/{$NIEMRelease}/ ../../conformanceTargets/{$NIEMRelease}/conformanceTargets.xsd
                          http://release.niem.gov/niem/localTerminology/{$NIEMRelease}/ ../../localTerminology/{$NIEMRelease}/localTerminology.xsd"
      ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/{$NIEMRelease}/#ReferenceSchemaDocument"

      elementFormDefault="qualified"
      attributeFormDefault="unqualified">

    <xs:annotation>
      <xs:documentation>{$DocumentDescription}</xs:documentation>
      <xs:appinfo>
        <term:LocalTerm term="{$Term}" literal="{$TermLiteral}"/>
      </xs:appinfo>
    </xs:annotation>

    <xs:import schemaLocation="{$ImportRelativeSchemaPath}" namespace="{$ImportURI}"/>

    <!-- ******** Schema components ******** -->

  </xs:schema>
```
