---
  title: Code List Usage
  short: Usage
  icon: fa-sitemap
  description: Code List Usage
---

## Specifying a Code List

A code list document is a file or resource that contains one or more code lists. It is a conformance target of the [Code Lists](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html) specification. A code list document MUST conform to all rules of this specification that apply to this conformance target. An XML document with an effective conformance target identifier of [#CodeListDocument](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html#section_3.1) MUST be a code list document.

The specification for an implementation of a code list document by a resource class (such as with Genericode or CSV) needs to specify the following characteristics:

- Candidate code list identifiers. Some code list documents specify what URIs may be used to reference the code list. Some resources may feature multiple code lists within a single resource, and the specification must describe how a specific code list is identified within the resource.
- the mapping between features of the resource and distinct entries
- the mapping between features of the resource and code values
- the mapping between features of the resource and column names
- the method of identifying a column as being a well-known column (described in [Section 7, Well-known columns and references](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html#section_7))
- the method of identifying well-known column reference #code (described in [Section 7, Well-known columns and references](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html#section_7))
- the method of identifying the data type of a code value, which can be a data type defined by an XML Schema, or empty

These characteristics are described for Genericode files in [Section 6, Genericode code lists](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html#section_6). They are described for CSV files in [Section 5, Comma-separated values (CSV) code lists](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html#section_5).

A CSV code list document is a code list document. It is a conformance target of this specification. A CSV code list document MUST conform to all rules of this specification that apply to this conformance target. The conformance target identifier for this conformance target is [#CSVCodeListDocument](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html#section_3.3).

## Binding in XML

XML content in a message may be identified as corresponding to content of a code list. This correspondence is referred to as a code list binding, connecting the XML content to the code list. 

A code list binding is an assigned correspondence between a set of data values, such as data within an XML document, and a set of columns within a code list, identified via a code list identifier and a set of column names.

A code list binding has the following properties:

- a code list identifier
- a set of column/value pairs, each having
  - a column reference: either a column name or a well-known column reference, and
  - a data value
- a boolean value (constraining)

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
