---
title:  Using a NIEM Core Supplement
---

## What is a NIEM *Core Supplement* and why is it necessary?

A NIEM *core supplement* is a special type of NIEM release that is commonly used to apply:

1. An additive-only changes (i.e., new content) to an existing NIEM core; or
2. An addition, update, or correction to a NIEM code list associated with a
release.

## Are any Core Supplements available?

A relatively simple core supplement for NIEM 3.0 exists that fixes an
inadvertent omission in the U.S. Postal Service (USPS) list of code values for
U.S. States.  The core supplement package contains two schemas:

1. A small `niem-core.xsd` addendum
2. A corrected `usps_states.xsd` schema document that incorporates all
U.S. State codes including Alabama (AL) (previously omitted).

This is the first time NIEM has exercised its new version 3.0 architecture that
allows for: (1) easy adjustments to code lists, and (2) supplements to a core
without the need to wait for a major release cycle.  This core supplement
package can be downloaded from either of these locations:

- In the release area:
  [http://release.niem.gov/niem/3.0/du-cs-3.0.html](http://release.niem.gov/niem/3.0/du-cs-3.0.html)
- In the publication area:
  [http://publication.niem.gov/niem/niem-core/3.0/1/niem-core-3.0.1.cs.zip](http://publication.niem.gov/niem/niem-core/3.0/1/niem-core-3.0.1.cs.zip)

## Using the Core Supplement for USPS U.S. State codes:

If you use any of the following NIEM 3.0 components:

- Element `nc:JurisdictionUSPostalServiceCode`
- Element `nc:LocationStateUSPostalServiceCode`
- Type `usps:USStateCodeType`
- Type `usps:USStateCodeSimpleType`

Then, update your NIEM subset or IEPD with the corresponding components from the
3.0.1 core supplement:

- Element `nc-3.0.1:JurisdictionUSPostalServiceCode`
- Element `nc-3.0.1:LocationStateUSPostalServiceCode`
- Type `usps-3.0.1:USStateCodeType`
- Type `usps-3.0.1:USStateCodeSimpleType`

This can be done manually by adding the schemas from the core supplement package
to your IEPD schema document set.  Since these will be new schemas in your IEPD,
you must import them at the appropriate location within one or more IEPD
extension schemas.

You can also add a core supplement to a subset using the [Schema Subset
Generation Tool (SSGT)](http://tools.niem.gov/niemtools/ssgt/index.iepd).  To do
this, reload your wantlist (or skip this step if you are building a new subset),
replace the original components with their new counterparts, and (re)generate
the subset or wantlist.  In an effort to direct SSGT users to the updated
components, the original components are marked `deprecated`.  SSGT usage
information explains which components should be used in their place.
