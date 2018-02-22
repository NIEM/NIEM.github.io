---
  title: Roles in XML
  short: XML
---

- TOC
{:toc}

## Role types

### Inline instance example

{:.note}
> In the instance example below, the basic information about the person (name, birthdate) appears **under** the nc:RoleOfPerson element.

```xml
<j:CrashDriver>
  <nc:RoleOfPerson>
    <nc:PersonName>
      <nc:PersonFullName>John Doe</nc:PersonFullName>
    </nc:PersonName>
    <nc:PersonBirthDate>
      <nc:Date>1966-06-06</nc:Date>
    </nc:PersonBirthDate>
  </nc:RoleOfPerson>
  <j:CrashDriverViolationCode>A10</j:CrashDriverViolationCode>
  <j:CrashDrivingViolationCode>S16</j:CrashDrivingViolationCode>
</j:CrashDriver>
```

### Reference instance example

{:.note}
> In the instance example below, the basic information about the person (name, birthdate) is **linked** from the nc:RoleOfPerson element to element nc:Person, which is defined elsewhere in the instance.

```xml
<j:CrashDriver>
  <nc:RoleOfPerson structures:ref="BRAVO" xsi:nil="true"/>
  <j:CrashDriverViolationCode>A10</j:CrashDriverViolationCode>
  <j:CrashDrivingViolationCode>S16</j:CrashDrivingViolationCode>
</j:CrashDriver>

<nc:Person structures:id="BRAVO">
  <nc:PersonName>
    <nc:PersonFullName>John Doe</nc:PersonFullName>
  </nc:PersonName>
  <nc:PersonBirthDate>
    <nc:Date>1966-06-06</nc:Date>
  </nc:PersonBirthDate>
</nc:Person>
```

### Schema example

This example shows a role type (CrashDriverType) and an element with that type (CrashDriver).

{: .note}
- The role type
  - uses one role-of element (nc:RoleOfPerson)
  - adds additional role-specific properties
  - extends structures:ObjectType (not nc:PersonType)
- The element of the role type (CrashDriver) requires no special syntax or features.

```xml
<xs:complexType name="CrashDriverType">
  <xs:annotation>
    <xs:documentation>A data type for a motor vehicle driver involved in a traffic accident.</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="structures:ObjectType">
      <xs:sequence>
        <xs:element ref="nc:RoleOfPerson" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="j:DriverLicense" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="j:CrashDriverContributingCircumstances" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="j:CrashDriverDistraction" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="j:CrashDriverViolation" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="j:CrashDrivingViolation" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="j:CrashDriverAugmentationPoint" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>

<xs:element name="CrashDriver" type="j:CrashDriverType" nillable="true">
  <xs:annotation>
    <xs:documentation>A motor vehicle driver involved into a traffic accident.</xs:documentation>
  </xs:annotation>
</xs:element>
```

### Schema template

{:.note}
- In the template below...
  - One or more role-of elements may be referenced to represent the object(s) of the role.
  - One or more additional properties may be referenced, representing the role-specific content.

```xml
<xs:complexType name="NAMEType">
  <xs:annotation>
    <xs:documentation>A data type for ...</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="structures:ObjectType">
      <xs:sequence>
        <xs:element ref="ROLE-OF-ELEMENT-NAME" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="ADDITIONAL-PROPERTY" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>
```

## Role-of element

### Schema example

The example below shows the definition of role-of element "RoleOfPerson" from Core.

{:.note}
- The role-of element has the type of the object being represented, in this case, nc:PersonType.
- The role-of element must substitute element "nc:RoleOfAbstract"

```xml
<xs:element name="RoleOfPerson" type="nc:PersonType" substitutionGroup="nc:RoleOfAbstract" nillable="true">
  <xs:annotation>
    <xs:documentation>A person of whom the role object is a function.</xs:documentation>
  </xs:annotation>
</xs:element>
```

### Schema template

```xml
<xs:element name="RoleOfNAME" type="NAMEType" substitutionGroup="nc:RoleOfAbstract" nillable="true">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:element>
```
