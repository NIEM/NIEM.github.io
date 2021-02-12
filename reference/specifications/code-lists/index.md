---
  title: NIEM Code Lists Specification
  short: Code Lists
  classID: CodeLists
  description: The Code Lists Specification adds support for new capabilities of NIEM code lists beyond the basic enumeration representations provided by XML and JSON schema.  Key features include the definition of codes in CSV or Genericode files, dynamic code lists via run-time binding, and multi-column code table support.
  icon: fa-book
  links:
    - url: /reference/specifications/code-lists/country-codes/
    - url: /reference/specifications/code-lists/faq/
    - url: /reference/specifications/code-lists/genericode/
---

The **[Code Lists Specification]({{site.data.links.code_list_spec}})** adds support for new capabilities of NIEM code lists beyond the basic enumeration representations provided by XML and JSON schema (simple sets of fixed-schema code values and definitions).

{:toc}
- TOC

## Resources

{% include specs/specification-summary.html classID=page.classID %}

## Overview

The Code Lists Specification establishes methods for using code list artifacts with NIEM information exchange specifications.

**New code formats**

This specification adds support for the use of Genericode documents, as well as for CSV code lists.

**Static and dynamic code list support**

NIEM has traditionally supported static code lists, with code values and definitions defined in fixed schemas. Code updates require schema updates.  This specification supports this traditional method of defining code lists during the development of the the schemas, via annotations for XML Schema documents that bind to code lists.

This specification also introduces a feature requested by the NIEM user community - support for specifying code lists at run time.  This is done via binding code lists as additional data in the XML instance documents rather than as part of the fixed definitions in the schemas.

**Multi-column support**

Additionally, this specification introduces multi-column support for NIEM codes.  This enables additional information to be provided with codes beyond only the standard definition information supported by NIEM schemas.  Examples include code sets that capture both literals and definitions; code sets that provide definitions in multiple languages; and linked code sets, like state and county codes, or vehicle make and model codes.

{:.note}
> The Code Lists Specification does not replace the existing XML and JSON schema enumerations, which still represent the majority of code lists in NIEM.  This specification is additive, providing additional code list formats and support for new features, like dynamic code lists and linked columns.

## Examples

### Code CSV

An example of a code CSV is provided below.  CSVs may be simple, providing basic information like code value and definition; or complex, providing not only code values and definitions, but also additional representations or information as well.

Make code | Make description | Model code | Model description | Class
FORD | Ford | FUS | Fusion | Auto
FORD | Ford | F15 | F-150 | Pickup
HOND | Honda | CIV | Civic | Auto
HOND | Honda | CRV | CRV | SUV
HOND | Honda | ACC | Accord | Auto
TOYT | Toyota | COA | Corolla | Auto
TOYT | Toyota | CAM | Camry | Auto

CSVs may be linked to a URI via an XML catalog file.

### Run-Time (Dynamic) Binding

The example below shows an XML schema snippet that creates two code elements of type `nc:CodeType`.  This type enables code list information to be provided in instance messages.

```xml
  <xs:element name="VehicleMakeCode" type="nc:CodeType"
              substitutionGroup="nc:VehicleMakeAbstract">
    <xs:annotation>
      <xs:documentation>A code for a manufacturer of a vehicle.</xs:documentation>
    </xs:annotation>
  </xs:element>

  <xs:element name="VehicleModelCode" type="nc:CodeType"
              substitutionGroup="nc:VehicleModelAbstract">
    <xs:annotation>
      <xs:documentation>A code for a model of a vehicle.</xs:documentation>
    </xs:annotation>
  </xs:element>
```

The example below is an XML instance based on the schema snippet above:

{:.note}
> Because the schema does not identify a URI or column name of a code set, this information must be provided by the instance.

```xml
<?xml version="1.0" encoding="US-ASCII" standalone="yes"?>
<nc:Vehicle
    xmlns:cli="http://reference.niem.gov/niem/specification/code-lists/4.0/code-lists-instance/"
    xmlns:ext="http://example.org/namespace/extension-run-time"
    xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/">
  <ext:VehicleMakeCode
      cli:codeListURI="http://example.org/code-list/vehicle-make-model"
      cli:codeListColumnName="make"
    >DODG</ext:VehicleMakeCode>
  <ext:VehicleModelCode
      cli:codeListURI="http://example.org/code-list/vehicle-make-model"
      cli:codeListColumnName="model"
    >R15</ext:VehicleModelCode>
</nc:Vehicle>
```

### Schema-Time (Static) Binding

The XML schema example below creates static, schema-time bindings between the elements and and CSVs. URIs and column names are used to indicate the particular set of valid code values.

```xml
  <xs:element name="Vehicle" type="nc:VehicleType"
              substitutionGroup="nc:Vehicle">
    <xs:annotation>
      <xs:appinfo>
        <clsa:ComplexCodeListBinding
          codeListURI="http://example.org/code-list/vehicle-make-model">
          <clsa:ElementCodeListBinding
              elementName="ext:VehicleMakeCode"
              columnName="make"/>
          <clsa:ElementCodeListBinding
              elementName="ext:VehicleModelCode"
              columnName="model"/>
        </clsa:ComplexCodeListBinding>
      </xs:appinfo>
    </xs:annotation>
  </xs:element>

  <xs:element name="VehicleMakeCode" type="niem-xs:token"
              substitutionGroup="nc:VehicleMakeAbstract">
    <xs:annotation>
      <xs:documentation>A code for a manufacturer of a vehicle.</xs:documentation>
      <xs:appinfo>
        <clsa:SimpleCodeListBinding
            codeListURI="http://example.org/code-list/vehicle-make-model"
            columnName="make"/>
      </xs:appinfo>
    </xs:annotation>
  </xs:element>

  <xs:element name="VehicleModelCode" type="niem-xs:token"
              substitutionGroup="nc:VehicleModelAbstract">
    <xs:annotation>
      <xs:documentation>A code for a model of a vehicle.</xs:documentation>
      <xs:appinfo>
        <clsa:SimpleCodeListBinding
            codeListURI="http://example.org/code-list/vehicle-make-model"
            columnName="model"/>
      </xs:appinfo>
    </xs:annotation>
  </xs:element>
```

The example below is an XML instance based on the schema snippet above:

{:.note}
> Because bindings to CSVs have been made in the schema (URI and column name), they do not appear in the instance.

```xml
<?xml version="1.0" encoding="US-ASCII"?>
<ext:Vehicle xmlns:ext="http://example.org/namespace/extension-schema-time">
  <ext:VehicleMakeCode>DODG</ext:VehicleMakeCode>
  <ext:VehicleModelCode>R15</ext:VehicleModelCode>
</ext:Vehicle>
```

## Conformance Targets

The Code Lists Specification includes the following conformance targets:

{% include specs/targets-table.html url=site.data.links.ndr classID=page.classID %}

## Links

The NIEM Code Lists Specification is published at:

- [reference.niem.gov (HTML version)]({{ site.data.links.code_list_spec }})

The following resources are also available:

- [Full package (zip file), including examples]({{ site.data.links.code_list_spec_folder }})
- [GitHub repository]({{ site.data.links.code_list_spec_repo }})
- [Issue tracker]({{ site.data.links.code_list_spec_repo | append: "issues" }})
- [Release history]({{ site.data.links.code_list_spec_repo | append: "releases" }})

## See more

See more information about the NIEM Code Lists Specification:

{% include icon-list.html links=page.links %}
