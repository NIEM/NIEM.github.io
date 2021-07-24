---
  title: Code Lists
  icon: fa-table
  description: NIEM Code Lists are special files that support the use of enhanced code lists in NIEM, beyond the basic capabilities provided by XML and JSON schema enumerations.
---

Code List Artifacts (Code Lists) provide a method to specify categorical descriptors for data used within exchanges and IEPs. Code Lists in NIEM use one of two formats: Comma-Separated Values (CSV), or Genericode.

{:toc}
- TOC

{:.features}
- simple machine-readable formats (CSV or Genericode)
- ability to specify code list references at Schema-Time (static) or Run-Time (dynamic)
- XML catalog support for URIs to actual code list files
- rules for matching abbreviated values to corresponding codes specified within a code list file
- serves as the basis for IEPDs and Extension Schema Documents

{:.note}
> Code Lists, while functionally identical to schema enumerations, do not replace the established convention or deprecate the use of schema enumeration.

<!--more-->

## Overview

In general, data exchanged between senders and receivers tend to be categorical or have distinct value ranges. One method of specifying that data within an exchange is by codifying them into [NIEM Enumeration Facets]({{ "/reference/concepts/facet/#enumerations" | relative_url }}). However, it might be easier to create a self-contained artifact to hold the associations. We call this artifact a Code List.

"Codes" is the general term NIEM uses to identify associative identifiers with more verbose data or data ranges (e.g., MON for Monday; 2000-3000 for sets of numbers).

Code Lists provide a tabular format for specifying *codes* and their associated data. Code Lists are most often used to limit possible values for an element. If Code Lists are reusable by many exchanges, they have the potential to be integrated into NIEM Core or a NIEM domain. An example of a code list in NIEM core is `nc:LocationCountryFIPS10-4Code`, which is used in the example below. The possible values for that particular element are country codes.

### Quick Example

We can summarize [Section 2.9, *Code Lists*](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html#section_2.9) as follows:

- A code list is a set of distinct entries with a corresponding set of columns.
- Think of it as a table: rows are distinct entries, columns are code list columns, and individual cells are code values.

{:.example}
> In this example of a code list for vehicle makes and models, note the following:
>
> - The code list is the table
> - The distinct entries are the rows (excluding the header)
> - The code values are the entries of the individual table cells (e.g., **FORD**, **Toyota**, **Camry**, etc.)

Make code | Make description | Model code | Model description | Class
|---|---|---|---|---|
FORD | Ford | FUS | Fusion | Auto
FORD | Ford | F15 | F-150 | Pickup
HOND | Honda | CIV | Civic | Auto
HOND | Honda | CRV | CRV | SUV
HOND | Honda | ACC | Accord | Auto
TOYT | Toyota | COA | Corolla | Auto
TOYT | Toyota | CAM | Camry | Auto

## Structure

The following sections provide details on the parts that make up a code list.

### Terminology

binding
: The correspondence between a set of data values, such as data within an XML document, and a set of columns within a code list

code list identifier
: An absolute URI that identifies a code list

column identifier
: An absolute URI in a Genericode code list document (GC-CLD) that identifies a column as a well-known column

column name
: A string in a CSV file code list document (CSV-CLD) file that identifies a column as a well-known column

well-known column
: A column in a CSV-CLD or GC-CLD that has well-understood semantics, i.e., the semantics are generally understood

\#code
: A binding that uses the column name "code" to refer to a well-known column

\#range
: A binding that uses the column name "range" to refer to range columns (columns that describe ranges of values)

### Comma-Separated Values (CSV) Files

A CSV code list document MUST be a CSV file with the following features:

- Has a CSV header.
- No column names are empty.

A CSV file may act as a CSV code list document when it has the following characteristics:

- **Code list identifiers** - the CSV file does not specify its code list identifiers. Each CSV file contains a single code list. The CSV file MAY be resolved to any code list identifier.
- **Distinct entries** - each CSV record of the CSV file constitutes a distinct entry.
- **Code values** - each CSV field corresponds to a code value.
- **Column names** - the column name of a code value is the CSV column name corresponding by position within the CSV header to the position of the CSV field within its CSV record.

A column in a CSV file is a well-known column when its CSV column name is the same as the column name of a well-known column.

A reference to column #code is matched, in order, to the following:

- a column with CSV column name of code, or
- the first column of the CSV file.

A code value in a CSV file has no type; its data type is empty.

## Specifying a Code List

A code list document is a file or resource that contains one or more code lists. It is a conformance target of the [Code Lists](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html) specification. A code list document MUST conform to all rules of this specification that apply to this conformance target. An XML document with an effective conformance target identifier of [#CodeListDocument](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html#section_3.1) MUST be a code list document.

The specification for an implementation of a code list document by a resource class (such as with Genericode or CSV) needs to specify the following characteristics:

{:.box}
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
