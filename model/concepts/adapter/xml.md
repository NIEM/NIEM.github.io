---
  title: Adapters in XML
  training: xml
  next: association
---

- TOC
{:toc}

## XML example

Adapters appear in XML instances like other content.

```xml
<nc:LocationArea>
  <nc:LocationArea>
    <geo:Ellipse>    <!-- element with adapter type -->
      <xls:Ellipse>  <!-- external content from GML -->
        ...
      </xls:Ellipse>
    </geo:Ellipse>
  </nc:LocationArea>
</nc:Location>
```

## XML Schema example

The following is a subset from the Geospatial adapter schema in the NIEM 4.0 release.

- The import statement of the GML external namespace includes a definition
- The complex type declaration is an adapter type
  - it has attribute `appinfo:externalAdapterTypeIndicator="true`
  - the reference to the external element `gml:AbstractGeometry` also includes a definition
- Nothing special is required by the element below that uses this adapter type.  It is defined like any other NIEM element.

```xml
<xs:schema xmlns:gml="http://www.opengis.net/gml/3.2" ...>
  <xs:import schemaLocation="../../../external/ogc/gml/3.2.1/gml.xsd" namespace="http://www.opengis.net/gml/3.2" appinfo:externalImportIndicator="true">
    <xs:annotation>
      <xs:documentation>Geography Markup Language (GML) version 3.2.1 schemas...</xs:documentation>
    </xs:annotation>
  </xs:import>

  <xs:complexType name="GeometryType" appinfo:externalAdapterTypeIndicator="true">
    <xs:annotation>
      <xs:documentation>A data type that encapsulates a GML geometry element.</xs:documentation>
    </xs:annotation>
    <xs:complexContent>
      <xs:extension base="structures:ObjectType">
        <xs:sequence>
          <xs:element ref="gml:AbstractGeometry" minOccurs="1" maxOccurs="1">
            <xs:annotation>
              <xs:documentation>The AbstractGeometry element is the abstract head of the substitution group for all geometry elements of GML. This includes ...</xs:documentation>
            </xs:annotation>
          </xs:element>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>

  <xs:element name="Geometry" type="geo:GeometryType" nillable="true">
    <xs:annotation>
      <xs:documentation>A general-purpose GML geometry adapter.</xs:documentation>
    </xs:annotation>
  </xs:element>

</xs:schema>
```

## XML Schema template

```xml
<xs:schema>
  <xs:import schemaLocation="SCHEMA_LOC" namespace="URI" appinfo:externalImportIndicator="true">
    <xs:annotation>
      <xs:documentation>EXTERNAL NAMESPACE DEFINITION</xs:documentation>
    </xs:annotation>
  </xs:import>

  <xs:complexType name="NAMEType" appinfo:externalAdapterTypeIndicator="true">
    <xs:annotation>
      <xs:documentation>DEFINITION</xs:documentation>
    </xs:annotation>
    <xs:complexContent>
      <xs:extension base="structures:ObjectType">
        <xs:sequence>
          <xs:element ref="EXTERNAL_ELEMENT" minOccurs="1" maxOccurs="1">
            <xs:annotation>
              <xs:documentation>EXTERNAL_ELEMENT_DEFINITION</xs:documentation>
            </xs:annotation>
          </xs:element>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>

</xs:schema>
```
{: #training-adapter-template }

{% include copybutton.html id="training-adapter-template" %}
