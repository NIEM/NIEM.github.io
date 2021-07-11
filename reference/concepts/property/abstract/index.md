---
  title: Abstract Elements
  icon: fa-ellipsis-h
  description: An abstract element is an element defined as a placeholder in a schema that must be replaced with an appropriate substitution in an instance.
  redirect_from:
  - /reference/concepts/property/abstract/modeling/
  - /reference/concepts/property/abstract/xml/
  - /reference/concepts/property/abstract/json/
---

An abstract element exists solely to be replaced.  Schemas may define abstract elements and valid substitutions, but only the valid substitutions may appear in an instance.

{:toc}
- TOC

While it is best to reuse common components as much as possible, there are some things that do not have standard representations.  This is especially true with code sets.  There is no global and authoritative code set for occupation codes, or offense codes, or county codes.  NIEM supports the need to be able to use alternate code sets or representations with abstract elements.

{: .example}
> NIEM defines abstract element `nc:EmployeeOccupationAbstract` and an element that may be substituted in its place, `nc:EmployeeOccupationCode`.  This element has a code set established by the US Department of Labor.  A domain or exchange may reuse the provided concrete element with the code set, or may add a code set of its own as an alternate substitution.

<!--more-->

An element that is not abstract may sometimes be referred to as "concrete" in order to distinguish the two.

The counterpart to an abstract element is a [substitutable element](../substitutable), which is described after this section.

## Modeling guidance

### Name

The name of an abstract element must end with **"Abstract"**.

See the [Representation Pattern](../../representation) section for cases when the representation term "Representation" should be used instead.

### Definition

An abstract element should begin with the standard opening phrase: **"A data concept for "**.

### No type

In NIEM, an abstract element should most likely not have a type.

In XML Schema, abstract elements may or may not be assigned types.  An abstract element that has no type can be replaced by any element.  An abstract element with a type can only be replaced by an element with the same type, or with a type that is derived from that type.  This prevents conflicts - an element that is specifically supposed to be a person element should not be replaced by a location element.

If you want to create an abstract element that may be replaced by divergent types (like free text and code sets types, or like PersonType and OrganizationType), the abstract element must not have a type.

## XML

### Instances

Abstract elements exist solely to be replaced.  They do not appear in an XML instance.

See [Substitutable Elements (XML)](../substitutable/#xml) for an example of a substitution in an instance.

### Schema example

```xml
<xs:element name="LocationCountyAbstract" abstract="true">
  <xs:annotation>
    <xs:documentation>
      A data concept for a county, parish, vicinage, or other such geopolitical subdivision of a state.
    </xs:documentation>
  </xs:annotation>
</xs:element>
```

{: .note}
- The name ends with "Abstract".
- The element does not have a type.
- The element declaration has an `abstract="true"` attribute.
- The definition begins with "A data concept for ..."

### Schema template

```xml
<xs:element name="NAMEAbstract" abstract="true">
  <xs:annotation>
    <xs:documentation>
      A data concept for ...
    </xs:documentation>
  </xs:annotation>
</xs:element>
```

## JSON

The concept of an abstract element does not exist in JSON like it does in XML; however, the idea behind it can still be represented in a similar manner.  In any XML instance, an abstract element should not appear.  It can either be omitted or replaced by one or more assigned substitutions.  This should occur in JSON as well.

See the [Substitutable Elements (JSON)](../substitutable/#json) section for more.

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.abstract %}
