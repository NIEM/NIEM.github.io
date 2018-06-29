---
  title: Roles
  icon: fa-sitemap
  description: A role is a function or responsibility of someone or something.
  links:
  - url: /reference/concepts/role/modeling/
  - url: /reference/concepts/role/xml/
  - url: /reference/concepts/role/json/
---

NIEM differentiates between an object and a role of an object. Roles are used to represent a non-exclusive function or part played by an object.  An object may have one or more roles.  A role may a function of one or more objects.

{:.example}
- Element nc:Weapon is a role of an item
- Element j:Evidence is a role of...
  - an item
  - biometric data
  - a binary file, like an image, video, or audio

Things like cars and chairs are items in NIEM.  In certain situations, however, they may be used as a weapon and/or function as evidence in a trial or hearing.

<!--more-->

## Extension vs Roles

NIEM uses type extension for exclusive specialization. In NIEM Core, an aircraft, a vehicle, and a vessel are all special kinds of a conveyance.  Since the same conveyance doesn't typically act like an aircraft in one situation and a vessel in another, NIEM uses extension to model these types.  Types nc:AircraftType, nc:VehicleType, and nc:VesselType each extend nc:ConveyanceType.

A person, on the other hand, may act in several different roles based on the situation. One person may act as an enforcement official and as a witness (both defined in the Justice domain), and as a caregiver (defined in the Human Services domain) as well. Because these functions of a person are not exclusive, they are defined as roles rather than extensions.

## Simple roles

Note that in order to preserve simplicity whenever possible, NIEM only creates role types when there are role-specific properties to add.  In 4.0, the Human Services domain has element "Caregiver".  Since there are no caregiver-specific properties being added, the element simply uses type "nc:PersonType".  This property is considered a role, but is defined like other standard elements.

## Custom role types

If there are role-specific properties to add, a role type must be created.  Because the Justice domain has specific properties for an enforcement official, it has created type j:EnforcementOfficialType that sets up the role and adds the additional content.

A role type contains one or more "RoleOf" elements and the additional role-specific properties.  "RoleOf" elements are used in place of type extension.  Instead of j:EnforcementOfficialType extending nc:PersonType, it contains element "nc:RoleOfPerson" (type nc:PersonType).  It also contains additional properties for things like badge and unit.

RoleOf properties can be used like other properties.  In an instance, content can appear inline or the RoleOf property can reference content listed elsewhere.

{:.note}
> "RoleOf" properties provide an additional benefit over type extension, allowing one role to be the function of **one or more objects**.  This is handled by simply adding multiple "RoleOf" properties in a role type.  Type extension is limited to derivation from a single type.

## Examples

| Kind | Property Name | Type | Comments |
| ---- | ------------- | ---- | -------- |
| Simple | nc:AssessmentPerson | nc:PersonType | Nothing additional required |
| Role - one object | nc:Weapon | nc:WeaponType | Type contains element "nc:RoleOfItem" |
| Role - multiple objects | nc:Evidence | nc:EvidenceTye | Type contains elements "nc:RoleOfItem", "nc:RoleOfBiometric", and "nc:RoleOfBinary" |
