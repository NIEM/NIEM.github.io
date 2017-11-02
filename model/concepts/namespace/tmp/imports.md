---
  title: XML Schema Imports
---


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
