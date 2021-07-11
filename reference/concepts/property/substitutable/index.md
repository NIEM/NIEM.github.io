---
  title: Substitutable Elements
  icon: fa-share
  description: A substitutable element is one that can replace another element in an instance.
  redirect_from:
  - /reference/concepts/property/substitutable/modeling/
  - /reference/concepts/property/substitutable/xml/
  - /reference/concepts/property/substitutable/json/
---

A substitutable element is one that can replace another element in an instance.

{:toc}
- TOC

A key point about substitutions is that they are defined by the replacement element, and not by the element that is being replaced.  This means, for example, that domains and exchanges may create substitutions for elements in Core...without any modification to the Core schema itself.

{: .example}
> The Justice domain defines element `j:PersonHairColorCode` with a code set from the NCIC standard as a substitution for abstract element `PersonHairColorAbstract` in Core.  The Core namespace is not affected by this substitution.

<!--more-->

## Modeling guidance

### Avoid type conflicts

The type of a substitutable element cannot conflict with the type of the element it is meant to replace.  If the element to be replaced has no type, then there is no conflict.

## XML

### Instance example

In the example below, element `nc:Date` appears as a replacement for element `nc:DateRepresentation`, an abstract element that cannot appear in an instance.

```xml
<nc:Person>
  <nc:PersonBirthDate>
    <!-- Date is substituted for DateRepresentation -->
    <nc:Date>1950-06-30</nc:Date>
  </nc:PersonBirthDate>
</nc:Person>
```

### Schema example

```xml
<xs:element name="Date" type="niem-xs:date" substitutionGroup="nc:DateRepresentation" nillable="true">
  <xs:annotation>
    <xs:documentation>A full date.</xs:documentation>
  </xs:annotation>
</xs:element>
```

{: .note}
- The element declares what it may be substituted in place of in the `substitutionGroup` attribute.
- In this case, the `Date` element may replace element `nc:DateRepresentation` wherever it occurs.

### Schema template

```xml
<xs:element name="NAME" type="TYPE" substitutionGroup="SUBSTITUTION" nillable="true">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:element>
```

## JSON

### Instance example

A substitutable element can be used in place of the element defined as the head of its substitution group.  This should appear in JSON similar to the way it appear in XML.

The example below shows the substitution of element `nc:Date` for element `nc:DateRepresentation`, which does not appear in the instance.

JSON example:

```json
{
  "nc:Person" : {
    "nc:PersonBirthDate" : {
      "nc:Date"  : "1950-06-30"
    }
  }
}
```

### Schema

Substitutions are not declared in JSON Schema.

A JSON Schema with the `additionalProperties` keyword set to true will allow for the addition of properties not defined in the schema.  This is how substitutions can be permitted.

```json
{
   "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": true,
  "properties": {
    ...
  },
  "definitions": {
    ...
  }
}
```
