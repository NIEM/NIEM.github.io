---
  title: Complex Types with Simple Content
  icon: fa-code
  description: A complex type with simple content (CSC) is a structure that represents a simple value and that may optionally contain attributes.
  links:
  - url: /model/concepts/type/csc/modeling/
  - url: /model/concepts/type/csc/xml/
  - url: /model/concepts/type/csc/json/
---

{% include_relative intro/index.md %}

## Use

Even though NIEM defines very few data attributes, attributes are used to support key NIEM features like referencing, linked data, metadata, and security markup.  This is the reason that NIEM requires element types be complex - so these features may be available for use in exchanges.

While there are few special requirements in order to use attributes along with complex content, some additional steps must be taken in NIEM to support the use of attributes with simple content.

## niem-xs

The `niem-xs` namespace is a proxy namespace, which provides alternate complex type representations for XML Schema base types.

XML Schema defines fundamental types, like `xs:string`, `xs:integer`, `xs:date`, and `xs:boolean`, but these are simple types.  NIEM creates corresponding complex types with simple content.

{: .example}
> Type `niem-xs:boolean` is a complex type with simple content.  It is based on the XML Schema simple type `xs:boolean`, which represents a true/false value.  It also adds attributes from the `structures` namespace to support the NIEM infrastructure.

## Code sets

Similar to the corresponding `niem-xs` proxy types (CSCs) and XML Schema simple types, code sets are created in NIEM as two corresponding types.

1. A simple type is created to define the code set via enumeration [facets](../../facet).  Since the type is simple, it can only contain a value; it cannot contain attributes.
1. A second type, a CSC type, is created.  Since a CSC type is complex, it can contain attributes, and since it has simple content, it can carry value.  The CSC type extends the original simple type with the facets and adds attributes from the `structures` namespace to support the NIEM infrastructure.

{: .example}
- Simple type `nc:AddressCategoryCodeSimpleType` defines enumerations like `business` and `residential`.
- CSC type `nc:AddressCategoryCodeType` extends the simple type with the facets, and adds attributes from `structures`.

As these types correspond so closely to each other, the names and definitions tend to be very similar.  The key distinction is the addition of "Simple" to the simple type's name.

To assign a code set to an element, the element must have the CSC version of the type.  This allows the element to use both the code set and any attributes that may be needed.

```xml
<!-- The element with the simple value.  No attributes are used here. -->
<nc:AddressCategoryCode>residential</nc:AddressCategoryCode>

<!-- The same element, this time with an attribute. -->
<nc:AddressCategoryCode structures:metadata="m1">residential</nc:AddressCategoryCode>
```

Attributes may not need to be defined for all elements, but NIEM cannot predetermine where they may or may not need to appear.  This will be determined by the requirements of the exchanges.  NIEM requires elements to use complex types with attributes from `structures` so that exchanges may decide locally when the attributes should be used.
