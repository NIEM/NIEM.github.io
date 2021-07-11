---
  title: Attributes
  icon: fa-at
  description: An attribute is a property that may carry a simple value only.
  redirect_from:
  - /reference/concepts/property/attribute/modeling/
  - /reference/concepts/property/attribute/xml/
---

In NIEM, there are two basic kinds of properties: elements and attributes.

**Attributes** can only ever be used to represent simple content (a value).  They do not exist independently; they must be carried by an element.

**Elements** can be used to represent simple content (a value) or complex content (an object).  In either case, an element can also carry attributes.

- TOC
{:toc}

**Example:**

```xml
<nc:Person>
  <nc:PersonName structures:id="a123">
    <nc:PersonGivenName>John</nc:PersonGivenName>
    <nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
    <nc:PersonSurName>Smith</nc:PersonSurName>
  </nc:PersonName>
</nc:Person>
```

This example lists 5 elements (each beginning with `nc:Person`) and 2 attributes (`structures:id` and `nc:personNameInitialIndicator`).

Attributes cannot be extended, substituted, augmented, or have multiple occurrences.  Additionally, because NIEM uses attributes for referencing and linking data, metadata, and security markup, elements should be used over attributes whenever possible in order to support these features.  Over 99% of the properties in NIEM are elements.

<!--more-->

## When to use

Attributes may be defined sparingly, when it makes sense for something to be tightly-coupled with an element and will not need the other features that elements enable.  This decision may come down to a judgment call.

In the example above, it makes sense for the property representing the name initial indicator to be an attribute.  There never needs to be more than one value per name, it should not need to be locally extended, it should not need to carry metadata or references.

## Modeling guidance

Attributes share the same modeling rules and guidelines as regular properties, with the following exceptions:

### Name casing

NIEM attribute names must appear in lower camel case (lowerCamelCase).  The first letter must be in lower case.

### Simple type

Attributes must have a simple type (value only).

### Prohibited types

An attribute may not be assigned any of the following types:

- xs:ID
- xs:IDREF
- xs:IDREFS
- xs:ENTITY
- xs:ENTITIES
- xs:anySimpleType

This prevents attributes from being used for referencing other data (NIEM already supports this with `structures:id`, `structures:ref`, and `structures:uri`), representing data that is not in an XML format, and wildcards.

### No defaults values

An attribute may not have a default value assigned.

A validating parser may take an instance that does not have such an attribute present and construct the attribute with the default value in its place.  A non-validating parser will not.  This rule was established to make sure an instance represents the exact same data, no matter which tool or parser is used.

### No optional fixed values

An optional attribute may not have a fixed value.

Similar to the rule about default values, a validating parser may take an instance in which the optional attribute does not appear and construct an attribute with the fixed value in its place.  A non-validating parser will not.  Again, an instance must represent the exact same data, not matter which tool or parser is used.

This rule does not apply to required fixed attributes.  That is because a required attribute must appear in the message, and it must have the fixed value.  In this case, there is nothing for a validating parser to construct.

## XML

### Instance example

This example shows the use of two attributes: `structures:id` and `nc:personNameInitialIndicator`.

```xml
<nc:Person>
  <nc:PersonName structures:id="a123">
    <nc:PersonGivenName>John</nc:PersonGivenName>
    <nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
    <nc:PersonSurName>Smith</nc:PersonSurName>
  </nc:PersonName>
</nc:Person>
```

### Schema example

```xml
<xs:attribute name="personNameInitialIndicator" type="xs:boolean">
  <xs:annotation>
    <xs:documentation>
      True if value represents the first letter or initials of a persons name; false otherwise.
    </xs:documentation>
  </xs:annotation>
</xs:attribute>
```

### Schema template

```xml
<xs:attribute name="NAME" type="TYPE">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:attribute>
```

## JSON

JSON does not have a similar notion to attributes as in XML.  Because of this, attributes must be represented in JSON in a different manner.

Looking at the example of a person with a name from before, we can see how elements and attributes appear in XML:

```xml
<nc:Person>
  <nc:PersonName structures:id="a123">
    <nc:PersonGivenName>John</nc:PersonGivenName>
    <nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
    <nc:PersonSurName>Smith</nc:PersonSurName>
  </nc:PersonName>
</nc:Person>
```

In JSON, this would appear as:

```json
{
  "nc:Person": {
    "nc:PersonName" : {
      "structures:id": "a123",
      "nc:PersonGivenName": "John",
      "nc:PersonMiddleName": {
        "rdf:value": "Q",
        "nc:personNameInitialIndicator": true
      },
      "nc:PersonSurName": "Smith"
    }
  }
}
```

Here, we see that JSON properties just contain objects or values - no attributes.  NIEM attributes are represented as regular properties.

### Complex content

For NIEM elements that contain an attribute and complex content (child elements), the translation is straight-forward: the attribute should appear in JSON in the same manner as the other elements.

XML example:

```xml
<nc:Person>
  <nc:PersonName structures:id="a123">
    <nc:PersonGivenName>John</nc:PersonGivenName>
    <nc:PersonSurName>Smith</nc:PersonSurName>
  </nc:PersonName>
</nc:Person>
```

{: .note}
> XML element `nc:PersonName` contains one attribute and two elements.

JSON example:

```json
{
  "nc:Person": {
    "nc:PersonName" : {
      "structures:id": "a123",
      "nc:PersonGivenName": "John",
      "nc:PersonSurName": "Smith"
    }
  }
}
```

{: .note}
> JSON property `nc:PersonName` contains three properties.

### Simple content

A bigger change occurs for XML elements that contain attributes and simple content (a value).

XML example:

```xml
<nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
```

{: .note}
> XML element `nc:PersonMiddleName` contains one attribute and one value.

JSON example:

```json
{
  "nc:PersonMiddleName": {
    "rdf:value": "Q",
    "nc:personNameInitialIndicator": true
  }
}
```

{: .note}
- JSON property `nc:PersonMiddleName` contains two properties.
- `rdf:value` is a new property that only appears in JSON.

Because JSON does not have attributes, the NIEM attribute `nc:personNameInitialIndicator` must be treated like a regular property.  This requires the addition of a new property to hold the element's original value, so a new name must be provided.  NIEM uses the name `rdf:value` for this kind of case.

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.attribute %}
