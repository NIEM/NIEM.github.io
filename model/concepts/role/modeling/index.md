---
  title: Modeling Roles
  short: Modeling
  ndr:
    rules:
    - number: 10-3
    - number: 10-4
    - number: 10-5
    - number: 10-6
    sections:
    - number: 10.2.2
---

- TOC
{:toc}

Create a role type for a non-exclusive function of an object only if there are role-specific properties to add.  Otherwise, simply reuse an existing type, like nc:PersonType or nc:ItemType.

## Role types

### Parent type

A role type should extend "structures:ObjectType".

### RoleOf element usage

A role type will contain references to one or more RoleOf elements.  It is not required, but NIEM customarily adds role-of elements first to a role type, and then the remaining properties.

## RoleOf elements

### Reuse

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

### Name

The name of a role-of property must begin with "RoleOf".

### Type

The type of a role-of property should be the type that represents the object of the role.

{:.example}
> If the role is a function of a person, the type of the role-of element should be "nc:PersonType".

### Substitution Group

A role-of element must be substitutable for element "nc:RoleOfAbstract".

## References

{% include ndr-references.html list=page.ndr %}
