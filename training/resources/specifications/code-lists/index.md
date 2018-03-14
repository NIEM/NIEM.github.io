---
title: Code Lists
links:
  - url: /training/resources/specifications/code-lists/country-codes/
  - url: /training/resources/specifications/code-lists/faq/
  - url: /training/resources/specifications/code-lists/genericode/
---

- TOC
{:toc}

{% include_relative intro/index.md %}

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

### Static binding

The XML schema example below creates static, design-time bindings between the elements and and CSVs.  URIs and column names are used to indicate the particular set of valid code values.

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

### Run-time binding

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

## Links

The NIEM Code Lists Specification is published at:

- [reference.niem.gov (HTML version)]({{ site.data.links.code_list_spec }})

The following resources are also available:

- [Full package (zip file), including examples]({{ site.data.links.code_list_spec_folder }})
- [GitHub repository]({{ site.data.links.code_list_spec_repo }})
- [Issue tracker]({{ site.data.links.code_list_spec_repo | append: "issues" }})
- [Release history]({{ site.data.links.code_list_spec_repo | append: "releases" }})
