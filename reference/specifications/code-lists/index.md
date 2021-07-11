---
  title: NIEM Code Lists Specification
  short: Code Lists
  classID: CodeLists
  description: The Code Lists Specification adds support for new capabilities of NIEM code lists beyond the basic enumeration representations provided by XML and JSON schema.  Key features include the definition of codes in CSV or Genericode files, dynamic code lists via run-time binding, and multi-column code table support.
  icon: fa-book
  links:
    - url: /reference/specifications/code-lists/country-codes/
    - url: /reference/specifications/code-lists/genericode/
---

The **[Code Lists Specification]({{site.data.links.code_list_spec}})** adds support for new capabilities of NIEM code lists beyond the basic enumeration representations provided by XML and JSON schema (simple sets of fixed-schema code values and definitions).

{:toc}
- TOC

## Specification Resources

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

## FAQ

These are some questions that have been frequently asked about code lists, Genericode, and the NIEM Code Lists Specification.

**1. What if simple type enumerations don't match code list values?**

{:.answer}
> Any code lists constraint (e.g., an element value must match a code list) is layered on top of any other constraints, from XML Schema, Schematron, or even other code lists. So, if a simple type enumeration allowed codes <q>red</q>, <q>green</q>, and <q>blue</q>, while the Genericode code list allowed only <q>blue</q> and <q>purple</q>, then the only valid value for the element would be <q>blue</q>.

**2. Do you have to create a new code list type for each different code list you use?**

{:.answer}
> No. You have lots of options. If you're binding the code lists in schema (rather than run-time binding), you can encode each different code list in a separate element.
>
>  If you're doing run-time binding, you can use <code>cli:CodeType</code>, or you can hang the <code>cli:codeListURI</code> attribute on each type for which you want *run-time code list binding*.

**3. Can an authoritative source update a code list without updating NIEM?**

{:.answer}
> Absolutely. That's one of the main driving factors in the way the code lists specification is built and used. We expect authoritative sources to update code lists as they need to. It will be up to the code list publishers and users to make sure they are using the same versions of the code lists.

**4. Can an authoritative source update a code list without updating an IEPD?**

{:.answer}
> Yes, but you need to make sure that all the partner implementations of the IEPD are using the same strategy for updating their code lists. You probably don't want some systems using v1 of a code list and others using v13 of the code list.

**5. What if my Genericode file has no unique key column?**

{:.answer}
> It is a requirement of Genericode that every Genericode file have at least one key constraint. The NIEM Code Lists Specification respects that, and it means that people who create Genericode files need to make sure that their code lists files are valid and maintain key constraints.

**6. Does a referenced column have to be a key column?**

{:.answer}
> No. A reference to non-key columns might mean that you get multiple distinct entries that match your values. That's OK; that's how it is designed, but use caution.

**7. Can I only use Genericode code lists with NIEM 3.2 and later releases?**

{:.answer}
> No. You can use it with any NIEM 3-based IEPD. This includes NIEM 3.0, 3.1, and 3.2. We're not even telling you that you **can't** use it with other XML Schemas; you're just likely going to run into difficulties.

**8. Does a Genericode file have multiple code lists in it?**

{:.answer}
> No. The NIEM Code Lists Specification uses Genericode documents with document element <code>gc:CodeList</code>, which allow only one code list per document. If you need multiple code lists, use multiple code list documents.

**9. Can you convert Excel files to Genericode?**

{:.answer}
> Maybe. There are existing tools for working with Genericode files, as well as tools under development within the NIEM community. See [our Genericode page](genericode) for more details.

**10. When will I get a Genericode file from the NIEM Schema Subset Generation Tool (SSGT)?**

{:.answer}
> The SSGT will yield a Genericode file when one is referenced by a component that is selected for a wantlist. If an XML Schema type references a code list, that code list will be included in your subset.

**11. Where should I publish my code list documents?**

{:.answer}
> You should consider your code list documents to be part of a schema set, like XML Schema documents. If you are building an IEPD, then code list documents should be provided alongside the schemas in your IEPD. If you are publishing a domain update, code list documents should be part of your domain update.
>
> The NTAC will be providing guidelines on how to provide updates to code lists.

**12. How do I validate a Genericode file?**

{:.answer}
> See [our Genericode page](genericode) for code list tools that can validate Genericode documents.

**13. How do I validate a message against a Genericode file?**

{:.answer}
> Software to validate messages against code list documents is under development.

**14. How do I describe use of code lists in an IEPD?**

{:.answer}
> The IEPD specification uses XML Catalogs to define XML Schemas for validation. The NIEM Code Lists Specification describes how to use XML Catalogs to resolve code lists. Add your code lists to your IEPD's XML catalog. Additional guidance will be provided in the future.

## Additional Resources

See more information about the NIEM Code Lists Specification:

{% include icon-list.html links=page.links %}
