---
  title: References in XML
  short: XML
---

- TOC
{:toc}

## Mechanism

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

### structures:id

Local identifiers may be created in an instance through the use of attribute `structures:id`.

This attribute has type `xs:ID`, which requires a unique value within an instance.

### structures:ref

Local elements may be referenced in an instance through the use of attribute `structures:ref`.

This attribute has type `xs:IDREF`, which requires that its value appear elsewhere in an instance as the value of an attribute of type `xs:ID`.  For NIEM, this means that a `structures:ref` attribute value must correspond to a unique `structures:id` value.

### structures:uri

Local elements or external resources may be referenced in an instance through the use of attribute `structures:uri`, and optionally attribute `xml:base`.

The value of a `structures:uri` attribute may refer to the value of another `structures:uri` or `structures:id` attribute, or it may be unique:

- To refer to a local identifier, the value should be a URI fragment, prefixed with "#".
- To refer to an external resource, the value should be an absolute URI, or a URI fragment used in addition to a URI base provided by attribute `xml:base`.

## Local examples

### structures:ref

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

### structures:uri

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

## External examples

The following two examples show how structures:uri may be used alone or in combination with attribute `xml:base` to reference an externally-defined resource.

### Absolute URI

```xml
<j:Arrest>
  <j:ArrestSubject>
    <nc:RoleOfPerson
      structures:uri="https://state.example/98723987/results.xml#bart"
      xsi:nil="true"/>
  </j:ArrestSubject>
</j:Arrest>
```

### With xml:base

```xml
<j:Arrest xml:base="https://state.example/98723987/results.xml">
  <j:ArrestSubject>
    <nc:RoleOfPerson structures:uri="#bart" xsi:nil="true"/>
  </j:ArrestSubject>
</j:Arrest>
```
