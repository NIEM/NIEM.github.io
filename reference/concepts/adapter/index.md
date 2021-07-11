---
  title: Adapters
  icon: fa-wrench
  icon-new: fa-plug
  description: An adapter is a mechanism to use components from a non-conformant external standard within a NIEM-conformant namespace.
  redirect_from:
    - /reference/concepts/adapter/modeling/
    - /reference/concepts/adapter/xml/
    - /reference/concepts/adapter/json/
---

Adapters are the mechanism NIEM uses to allow content from external standards without causing conformance validation errors.

{:toc}
- TOC

An adapter is a type that contains an external property.  It is marked as an adapter in the schema so that NIEM conformance rules skip over its external (non-conformant) contents instead of throwing errors.  Otherwise, an adapter type looks and acts like a standard NIEM type.

{: .example}
> `geo:SurfaceType` is an adapter type in NIEM that contains element `Surface` from GML, an external standard.  It can be used normally by other NIEM components.  Because it is an adapter type, NDR conformance tests will not throw errors if the element from the GML external standard does not follow NIEM rules.

<!--more-->

![Adapter image](images/adapter.png)

## Modeling guidance

### Adapter flag

An adapter type must have attribute `appinfo:externalAdapterTypeIndicator` with a value of `true` in its schema declaration.

### Parent type

An adapter type must extend `structures:ObjectType`.

### External content

The sub-properties from an adapter type must be from external namespaces.

An adapter type simply wraps external content; it should not be used to build larger objects.  Other NIEM types may be created that combine regular content with elements that have adapter types.

### Extra documentation

NIEM requires that all namespaces and components be documented.  Because external standards might not have this documentation, or might not have this documentation in a consistent manner as NIEM, NIEM requires all usages of external namespaces and components to be documented.

### No extensions

Adapter types may not be extended by other types.  Each adapter type is meant to represent a single concept from an external namespace and stand alone.

### No external ID attributes

NIEM defines structures:id to enable references between components.  For consistency, the use of external attributes with an ID type is not allowed so as not to bypass this standard mechanism.

### IEPD exceptions

#### External attributes

In an extension namespace, a non-adapter type is allowed to directly contain a reference to an external attribute as long as a definition is also provided with the reference.

## XML

### XML example

Adapters appear in XML instances like other content.

```xml
<nc:LocationArea>
  <nc:LocationArea>
    <geo:Ellipse>    <!-- NIEM element with an adapter type -->
      <xls:Ellipse>  <!-- External element from GML -->
        <!-- GML content -->
      </xls:Ellipse>
    </geo:Ellipse>
  </nc:LocationArea>
</nc:Location>
```

### XML Schema example

The following is a subset from the Geospatial adapter schema in the NIEM 4.0 release.

{: .note}
- The import statement of the GML external namespace includes a definition and attribute `appinfo:externalImportIndicator="true"`.
- The complex type declaration is an adapter type, with attribute `appinfo:externalAdapterTypeIndicator="true`.
- The reference to the external element `gml:AbstractGeometry` also includes a definition.
- Nothing special is required by the element below that uses this adapter type.  The type can now be used like any other type.

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

### XML Schema template

```xml
<xs:schema>
  <xs:import schemaLocation="PATH" namespace="URI" appinfo:externalImportIndicator="true">
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

## JSON

Guidance is not yet available for adapters and the use of external standards in JSON.

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.adapter %}
