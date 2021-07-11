---
  title: Roles
  icon: fa-sitemap
  description: A role is a function or responsibility of someone or something.
  redirect_from:
  - /reference/concepts/role/modeling/
  - /reference/concepts/role/xml/
  - /reference/concepts/role/json/
---

NIEM differentiates between an object and a role of an object. Roles are used to represent a non-exclusive function or part played by an object.  An object may have one or more roles.  A role may a function of one or more objects.

{:toc}
- TOC

## Overview

{:.example}
- Element nc:Weapon is a role of an item
- Element j:Evidence is a role of...
  - an item
  - biometric data
  - a binary file, like an image, video, or audio

Things like cars and chairs are items in NIEM.  In certain situations, however, they may be used as a weapon and/or function as evidence in a trial or hearing.

<!--more-->

### Extension vs Roles

NIEM uses type extension for exclusive specialization. In NIEM Core, an aircraft, a vehicle, and a vessel are all special kinds of a conveyance.  Since the same conveyance doesn't typically act like an aircraft in one situation and a vessel in another, NIEM uses extension to model these types.  Types nc:AircraftType, nc:VehicleType, and nc:VesselType each extend nc:ConveyanceType.

A person, on the other hand, may act in several different roles based on the situation. One person may act as an enforcement official and as a witness (both defined in the Justice domain), and as a caregiver (defined in the Human Services domain) as well. Because these functions of a person are not exclusive, they are defined as roles rather than extensions.

### Simple roles

Note that in order to preserve simplicity whenever possible, NIEM only creates role types when there are role-specific properties to add.  In 4.0, the Human Services domain has element "Caregiver".  Since there are no caregiver-specific properties being added, the element simply uses type "nc:PersonType".  This property is considered a role, but is defined like other standard elements.

### Custom role types

If there are role-specific properties to add, a role type must be created.  Because the Justice domain has specific properties for an enforcement official, it has created type j:EnforcementOfficialType that sets up the role and adds the additional content.

A role type contains one or more "RoleOf" elements and the additional role-specific properties.  "RoleOf" elements are used in place of type extension.  Instead of j:EnforcementOfficialType extending nc:PersonType, it contains element "nc:RoleOfPerson" (type nc:PersonType).  It also contains additional properties for things like badge and unit.

RoleOf properties can be used like other properties.  In an instance, content can appear inline or the RoleOf property can reference content listed elsewhere.

{:.note}
> "RoleOf" properties provide an additional benefit over type extension, allowing one role to be the function of **one or more objects**.  This is handled by simply adding multiple "RoleOf" properties in a role type.  Type extension is limited to derivation from a single type.

### Examples

| Kind | Property Name | Type | Comments |
| ---- | ------------- | ---- | -------- |
| Simple | nc:AssessmentPerson | nc:PersonType | Nothing additional required |
| Role - one object | nc:Weapon | nc:WeaponType | Type contains element "nc:RoleOfItem" |
| Role - multiple objects | nc:Evidence | nc:EvidenceTye | Type contains elements "nc:RoleOfItem", "nc:RoleOfBiometric", and "nc:RoleOfBinary" |

## Modeling guidance

Create a role type for a non-exclusive function of an object only if there are role-specific properties to add.  Otherwise, simply reuse an existing type, like nc:PersonType or nc:ItemType.

### Role types

#### Parent type

A role type should extend "structures:ObjectType".

#### RoleOf element usage

A role type will contain references to one or more RoleOf elements.  It is not required, but NIEM customarily adds role-of elements first to a role type, and then the remaining properties.

### RoleOf elements

#### Reuse

NIEM already defines several role-of properties, including...

| Role-of Element | Type |
| --- | --- |
| nc:RoleOfPerson | nc:PersonType |
| nc:RoleOfOrganization | nc:OrganizationType |
| nc:RoleOfItem | nc:ItemType |
| nc:RoleOfFacility | nc:FacilityType |
| j:RoleOfBinary | nc:BinaryType |
| j:RoleOfBiometric | biom:BiometricDataType |
| mo:RoleOfUnit | mo:UnitType |
{:.table-auto}

Reuse an existing role-of property when creating a custom role type if it meets your requirements; otherwise, you may define your own.

#### Name

The name of a role-of property must begin with "RoleOf".

#### Type

The type of a role-of property should be the type that represents the object of the role.

{:.example}
> If the role is a function of a person, the type of the role-of element should be "nc:PersonType".

#### Substitution Group

A role-of element must be substitutable for element "nc:RoleOfAbstract".

## XML

### Role types

#### Inline instance example

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

#### Reference instance example

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

#### Schema example

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

#### Schema template

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

### Role-of element

#### Schema example

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

#### Schema template

```xml
<xs:element name="RoleOfNAME" type="NAMEType" substitutionGroup="nc:RoleOfAbstract" nillable="true">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:element>
```

## JSON

### Role types

#### Inline instance example

{:.note}
> In the instance example below, the basic information about the person (name, birthdate) appears **under** the nc:RoleOfPerson element.

```json
{
  "j:CrashDriver": {
    "nc:RoleOfPerson": {
      "nc:PersonName": {
        "nc:PersonFullName": "John Doe"
      },
      "nc:PersonBirthDate": {
        "nc:Date": "1966-06-06"
      }
    },
    "j:CrashDriverViolationCode": "A10",
    "j:CrashDrivingViolationCode": "S16"
  }
}
```

#### Reference instance example

{:.note}
> In the instance example below, the basic information about the person (name, birthdate) is **linked** from the nc:RoleOfPerson element to element nc:Person, which is defined elsewhere in the instance.

```json
{
  "j:CrashDriver": {
    "nc:RoleOfPerson": {
      "@id": "BRAVO"
      }
    },
    "j:CrashDriverViolationCode": "A10",
    "j:CrashDrivingViolationCode": "S16"
  },

  "nc:RoleOfPerson": {
    "@id": "BRAVO",
    "nc:PersonName": {
      "nc:PersonFullName": "John Doe"
    },
    "nc:PersonBirthDate": {
      "nc:Date": "1966-06-06"
    }
  }
}
```

#### Schema example

This example shows a role type (CrashDriverType) and an element with that type (CrashDriver).

{: .note}
- The role type
  - uses one role-of element (nc:RoleOfPerson)
  - adds additional role-specific properties
  - extends structures:ObjectType (not nc:PersonType)
- The element of the role type (CrashDriver) requires no special syntax or features.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "j:CrashDriver": {
      "description": "A motor vehicle driver involved into a traffic accident.",
      "oneOf": [
        {
          "$ref": "#/definitions/j:CrashDriverType"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/j:CrashDriverType"
          }
        }
      ]
    }
  }

  "definitions": {
    "j:CrashDriverType": {
      "description": "A data type for a motor vehicle driver involved in a traffic accident.",
      "allOf": [
        {
          "$ref": "#/definitions/_base"
        },
        {
          "type": "object",
          "properties": {
            "nc:RoleOfPerson": {
              "$ref": "#/properties/nc:RoleOfPerson"
            },
            "j:CrashDriverViolation": {
              "$ref": "#/properties/j:CrashDriverViolation"
            },
            "j:CrashDrivingViolation": {
              "$ref": "#/properties/j:CrashDrivingViolation"
            }
          }
        }
      ]
    }
  }
}
```

#### Schema template

{:.note}
- In the template below...
  - One or more role-of elements may be referenced to represent the object(s) of the role.
  - One or more additional properties may be referenced, representing the role-specific content.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
  }

  "definitions": {
    "ROLETYPE": {
      "description": "A data type for ...",
      "allOf": [
        {
          "$ref": "#/definitions/_base"
        },
        {
          "type": "object",
          "properties": {
            "ROLE-OF-PROPERTY": {
              "$ref": "#/properties/ROLE-OF-PROPERTY"
            },
            "ADDITIONAL-PROPERTY": {
              "$ref": "#/properties/ADDITIONAL-PROPERTY"
            }
          }
        }
      ]
    }
  }
}
```

### Role-of element

#### Schema example

The example below shows the definition of role-of element "RoleOfPerson" from Core.

{:.note}
- The role-of element has the type of the object being represented, in this case, nc:PersonType.
- The role-of element must substitute element "nc:RoleOfAbstract"

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "nc:RoleOfProperty": {
      "description": "A person of whom the role object is a function.",
      "oneOf": [
        {
          "$ref": "#/definitions/nc:PersonType"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/nc:PersonType"
          }
        }
      ]
    }
  }
}
```

#### Schema template

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "nc:RoleOfNAME": {
      "description": "DEFINITION",
      "oneOf": [
        {
          "$ref": "#/definitions/OBJECT-TYPE"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/OBJECT-TYPE"
          }
        }
      ]
    }
  }
}
```

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.role %}
