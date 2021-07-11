---
  title: Complex Types with Simple Content
  icon: fa-code
  description: A complex type with simple content (CSC) is a structure that represents a simple value and that may optionally contain attributes.
  redirect_from:
  - /reference/concepts/type/csc/modeling/
  - /reference/concepts/type/csc/xml/
  - /reference/concepts/type/csc/json/
---

A complex type with simple content (CSC) is a common type style in XML, but does not exist in JSON.  "Complex type" means that the type may carry attributes.  "Simple content" means that the type carries a value, rather than an object.

{:toc}
- TOC

**Example**

```xml
<nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
```

Element `nc:PersonMiddleName` above carries the value "Q" because the type has simple content and an attribute because the type is complex.

<!--more-->

## CSC types in NIEM

Even though NIEM defines very few data attributes, attributes are used to support key NIEM features like referencing, linked data, metadata, and security markup.  This is the reason that NIEM requires element types be complex - so these features may be available for use in exchanges.

While there are few special requirements in order to use attributes along with complex content, some additional steps must be taken in NIEM to support the use of attributes with simple content.

### niem-xs namespace

The `niem-xs` namespace is a proxy namespace, which provides alternate complex type representations for built-in XML Schema simple types.

XML Schema defines fundamental types like `xs:string`, `xs:integer`, `xs:date`, and `xs:boolean`, but these are simple types.  NIEM creates corresponding complex types with simple content.

{: .example}
> Type `niem-xs:boolean` is a complex type with simple content.  It is based on the XML Schema simple type `xs:boolean`, which represents a true or false value.  It also adds attributes from the `structures` namespace to support the NIEM infrastructure.

### Code sets

Similar to the corresponding `niem-xs` proxy types (CSCs) and XML Schema simple types, code sets are created in NIEM as two corresponding types:

- A simple type is created to define the code set via enumeration [facets](../../facet).  Since the type is simple, it can only contain a value; it cannot contain attributes.
- A second type, a CSC type, is created.  Because a CSC type is complex, it can contain attributes, and because it has simple content, it can carry value.  The CSC type extends the original simple type with the facets and adds attributes from the `structures` namespace to support the NIEM infrastructure.

{: .example}
>
>- Simple type `nc:AddressCategoryCodeSimpleType` defines enumerations like `business` and `residential`.
>- CSC type `nc:AddressCategoryCodeType` extends the simple type with the facets, and adds attributes from `structures`.

Because these types correspond so closely to each other, the names and definitions tend to be very similar.  The key distinction is the addition of "Simple" to the simple type's name.

To assign a code set to an element, the element must have the CSC version of the type.  This allows the element to use both the code set and any attributes that may be needed.

```xml
<!-- The element with the simple value.  No attributes are used here. -->
<nc:AddressCategoryCode>residential</nc:AddressCategoryCode>

<!-- The same element, this time with an attribute. -->
<nc:AddressCategoryCode structures:metadata="m1">residential</nc:AddressCategoryCode>
```

Attributes may not need to be defined for all elements, but NIEM cannot predetermine where they may or may not need to appear.  This will be determined by the requirements of the exchanges.  NIEM requires elements to use complex types with attributes from `structures` so that exchanges may decide locally when the attributes should be used.

## Modeling guidance

### Extension

A CSC type must extend either a simple type or another CSC type.

### Structures attribute group

In NIEM XML, a CSC type that extends a simple type must also include a reference to `structures:SimpleObjectAttributeGroup`.  This is an attribute group that contains all of the attributes needed to support the NIEM infrastructure.

### Code types

A CSC type that is based on a simple type with enumerations (codes) must have a name that ends with `CodeType`.

## XML

### Instance example

```xml
<nc:AddressCategoryCode structures:id="a1">residential</nc:AddressCategoryCode>
```

### Schema example

```xml
<xs:complexType name="AddressCategoryCodeType">
  <xs:annotation>
    <xs:documentation>A data type for a kind of address.</xs:documentation>
  </xs:annotation>
  <xs:simpleContent>
    <xs:extension base="nc:AddressCategoryCodeSimpleType">
      <xs:attributeGroup ref="structures:SimpleObjectAttributeGroup"/>
    </xs:extension>
  </xs:simpleContent>
</xs:complexType>
```

{: .note}
>
>- The CSC type extends a simple type.
>- The CSC type references an attribute group from `structures`.

### Schema template

```xml
<xs:complexType name="NAMEType">
  <xs:annotation>
    <xs:documentation>A data type for ...</xs:documentation>
  </xs:annotation>
  <xs:simpleContent>
    <xs:extension base="SIMPLETYPE">
      <xs:attributeGroup ref="structures:SimpleObjectAttributeGroup"/>
    </xs:extension>
  </xs:simpleContent>
</xs:complexType>
```

## JSON

JSON does not have a syntax that directly corresponds to attributes or CSC types.  In this case, any attributes must be treated like regular properties, and a name must be assigned to a newly-created property that carries the type's original simple content.  NIEM uses `rdf:value` as this name.

### Instance example

```json
{
  "nc:AddressCategoryCode": {
    "@id": "a1",
    "rdf:value": "residential"
  }
}
```

`@id` is a reserved key in JSON-LD and should be used in JSON as the counterparts to `structures:id` and `structures:ref` in XML instances.

NIEM also allows for a simpler representation - one in which no attributes will be used.  In this case, the new `rdf:value` property may be omitted and the value may be carried directly on the original property:

```json
{
  "nc:AddressCategoryCode": "residential"
}
```

The specific format to be used should be determined at the exchange level.

### Schema example

```json
{
  "nc:AddressCategoryCodeType": {
    "description": "A data type for a kind of address.",
    "oneOf": [
      {
        "$ref": "#/definitions/nc:AddressCategoryCodeSimpleType"
      },
      {
        "type": "object",
        "properties": {
          "rdf:value": {
            "$ref": "#/definitions/nc:AddressCategoryCodeSimpleType"
          }
        }
      }
    ]
  }
}
```

Guidance on how to represent additional attributes from `structures` in JSON Schema is still under development.

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.csc %}
