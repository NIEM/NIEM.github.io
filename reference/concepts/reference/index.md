---
  title: References
  description: A reference is used to link to content defined elsewhere.
  icon: fa-share
  redirect_from:
  - /reference/concepts/reference/modeling/
  - /reference/concepts/reference/xml/
  - /reference/concepts/reference/json/
---

References are used in instances or messages to point to content defined elsewhere.

{:toc}
- TOC

## Overview

A common reason to use references is to avoid repeating data.  In addition to avoiding duplication, it clearly links multiple occurrences to the same object.  Just because two properties have the same content (e.g., the same name), they are not necessarily the same.

In order to use references, a unique ID must first be assigned to where the content is defined.  That ID can then be references elsewhere.  Almost all properties in NIEM (those with complex types) carry attributes that let you define an ID or a reference.

<!--more-->

### Linked Data

In addition to referencing content defined in the same instance document, it is also possible to reference content defined outside of the instance document.  Resources defined elsewhere may be referenced by a NIEM property via a uniform resource identifier (URI).

This capability was introduced in NIEM 4.0 in support of Linked Data and the semantic web.

## Modeling guidance

References are handled differently in the NIEM XML and NIEM JSON representations.  Please see these sections for more guidance.

### Do not recreate

Note that in either representation, NIEM already uses or provides the infrastructure needed to create and reference identifiers.  This functionality should be used as is for consistency; custom id / referencing mechanisms should not be added.

### No type validation

References in XML and JSON are not type-checked via standard validation.  This means that it will be possible to provide references to incompatible content, such as an identifier for a vehicle element when an identifier for a person element was expected.

This lack of validation does allow for greater flexibility in defining references.  It is not necessary for one element to link to another element of the same name.  Though not enforcement by validation, an element of a given type may link to...

- a different element with the same type
- an element with a type derived from or a parent of the given type
- an element that represents a role or base object of the given type

## XML

### Mechanism

NIEM defines three attributes in utility schema structures.xsd in support of referencing:

{:.box}
- structures:id
- structures:ref
- structures:uri

These attributes are added to the following NIEM constructs:

{:.box}
- structures:ObjectType
- structures:AssociationType
- structures:MetadataType
- structures:AugmentationType
- structures:SimpleObjectAttributeGroup

Because all NIEM elements have a type that either extends, inherits from, or reuses one of these constructs, the ability to create and reference IDs are automatically available across the model, without any additional setup required.

#### structures:id

Local identifiers may be created in an instance through the use of attribute `structures:id`.

This attribute has type `xs:ID`, which requires a unique value within an instance.

#### structures:ref

Local elements may be referenced in an instance through the use of attribute `structures:ref`.

This attribute has type `xs:IDREF`, which requires that its value appear elsewhere in an instance as the value of an attribute of type `xs:ID`.  For NIEM, this means that a `structures:ref` attribute value must correspond to a unique `structures:id` value.

#### structures:uri

Local elements or external resources may be referenced in an instance through the use of attribute `structures:uri`, and optionally attribute `xml:base`.

The value of a `structures:uri` attribute may refer to the value of another `structures:uri` or `structures:id` attribute, or it may be unique:

- To refer to a local identifier, the value should be a URI fragment, prefixed with "#".
- To refer to an external resource, the value should be an absolute URI, or a URI fragment used in addition to a URI base provided by attribute `xml:base`.

### Local examples

#### structures:ref

This example shows two elements that reference a third, more generic element (nc:Person):

```xml
<j:Arrest>
  <j:ArrestInvolvedWeapon>
    <nc:WeaponUser structures:ref="bart" xsi:nil="true"/>
  </j:ArrestInvolvedWeapon>

  <j:ArrestSubject>
    <nc:RoleOfPerson structures:ref="bart" xsi:nil="true"/>
  </j:ArrestSubject>
</j:Arrest>

<nc:Person structures:id="bart">
  <nc:PersonName>
    <nc:PersonGivenName>Bart</nc:PersonGivenName>
  </nc:PersonName>
</nc:Person>
```

This example shows one element (nc:RoleOfPerson) that references another element (nc:WeaponUser):

```xml
<j:Arrest>
  <j:ArrestInvolvedWeapon>
    <nc:WeaponUser structures:id="bart">
      <nc:PersonName>
        <nc:PersonGivenName>Bart</nc:PersonGivenName>
      </nc:PersonName>
    </nc:WeaponUser>
  </j:ArrestInvolvedWeapon>

  <j:ArrestSubject>
    <nc:RoleOfPerson structures:ref="bart" xsi:nil="true"/>
  </j:ArrestSubject>
</j:Arrest>
```

#### structures:uri

This example shows how `structures:uri` may be used to create a local reference:

```xml
<j:Arrest>
  <j:ArrestInvolvedWeapon>
    <nc:WeaponUser structures:id="bart">
      <nc:PersonName>
        <nc:PersonGivenName>Bart</nc:PersonGivenName>
      </nc:PersonName>
    </nc:WeaponUser>
  </j:ArrestInvolvedWeapon>

  <j:ArrestSubject>
    <nc:RoleOfPerson structures:uri="#bart" xsi:nil="true"/>
  </j:ArrestSubject>
</j:Arrest>
```

{:.note}
> Because the uri attribute is only a fragment and attribute `xml:base` is not provided, the uri refers to an identifier in the current document.

### External examples

The following two examples show how structures:uri may be used alone or in combination with attribute `xml:base` to reference an externally-defined resource.

#### Absolute URI

```xml
<j:Arrest>
  <j:ArrestSubject>
    <nc:RoleOfPerson
      structures:uri="https://state.example/98723987/results.xml#bart"
      xsi:nil="true"/>
  </j:ArrestSubject>
</j:Arrest>
```

#### With xml:base

```xml
<j:Arrest xml:base="https://state.example/98723987/results.xml">
  <j:ArrestSubject>
    <nc:RoleOfPerson structures:uri="#bart" xsi:nil="true"/>
  </j:ArrestSubject>
</j:Arrest>
```

## JSON

### Local references

In a JSON instance, both identifiers and references are specified with the "@id" property.

```json
{
  "j:Arrest": {
    "j:ArrestInvolvedWeapon": {
      "nc:WeaponUser": {
        "@id": "bart"
      }
    },
    "j:ArrestSubject": {
      "nc:RoleOfPerson": {
        "@id": "bart"
      }
    }
  },
  "nc:Person": {
    "@id": "bart",
    "nc:PersonName": {
      "nc:PersonGivenName": "Bart"
    }
  }
}
```

### External references

#### Absolute IRIs

```json
{
  "j:Arrest": {
    "j:ArrestInvolvedWeapon": {
      "nc:WeaponUser": {
        "@id": "https://state.example/98723987/results.xml#bart"
      }
    },
    "j:ArrestSubject": {
      "nc:RoleOfPerson": {
        "@id": "https://state.example/98723987/results.xml#bart"
      }
    }
  }
}
```

#### With base

Relative IRIs (international resource identifiers) will be resolved against the document base.  This base may be set explicitly as part of the document context using the `@base` keyword:

```json
{
  "@context": {
    "@base": "https://state.example/98723987/results.xml"
  },
  "j:Arrest": {
    "j:ArrestInvolvedWeapon": {
      "nc:WeaponUser": {
        "@id": "bart"
      }
    },
    "j:ArrestSubject": {
      "nc:RoleOfPerson": {
        "@id": "bart"
      }
    }
  }
}
```

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.reference %}
