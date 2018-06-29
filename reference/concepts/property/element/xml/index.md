---
  title: Elements in XML
  short: XML
---

- TOC
{:toc}

## Instance example

```xml
<nc:Person>
  <nc:PersonName structures:id="a123">
    <nc:PersonGivenName>John</nc:PersonGivenName>
    <nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
    <nc:PersonSurName>Smith</nc:PersonSurName>
  </nc:PersonName>
</nc:Person>
```

{: .note}
- `nc:Person` is an element that carries complex content.
- `nc:PersonName` is an element that carries complex content and an attribute.
- `nc:PersonGivenName` and `nc:PersonSurName` are elements that carry simple content (values).
- `nc:PersonMiddleName` is an element that carries simple content (a value) and an attribute.

## Schema example

Despite the variations, each of the elements above is defined the same way in a schema.  The different representations are defined by the element's type, not by the element itself.

```xml
<!-- Element with complex content -->
<xs:element name="Person" type="nc:PersonType" nillable="true">
  <xs:annotation>
    <xs:documentation>A human being.</xs:documentation>
  </xs:annotation>
</xs:element>

<!-- Element with simple content -->
<xs:element name="PersonMiddleName" type="nc:PersonNameTextType" nillable="true">
  <xs:annotation>
    <xs:documentation>A middle name of a person.</xs:documentation>
  </xs:annotation>
</xs:element>
```

## Schema template

```xml
<xs:element name="NAME" type="TYPE" nillable="true">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:element>
```

## Schema restrictions

The following is a list of restrictions that the NIEM NDR defines relating to XML element declarations.

### Prohibited types

- xs:anySimpleType
- xs:anyType

These types are not allowed to prevent elements acting as wildcards.  Substitutions and augmentations should be used instead.

### Prohibited attributes

The following attributes may not be used in the declaration of an element in an XML Schema:

- block
- final
- default
- fixed

NIEM is designed to be extensible and customizable, in order to support a wide-ranging variety of requirements.  The `block` and `final` attributes above prevent further customization by subsequent schemas.

The `default` and `fixed` attributes can result in unexpected behavior.  A validating parser may construct values for an element assigned a default or fixed value in its schema; a non-validating parser will not.  Preventing these attributes ensures that the information in an instance is not altered, depending on which parser is used to process the data.
