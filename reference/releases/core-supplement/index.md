---
  title: Core Supplements
---

A **Core Supplement** is a special type of NIEM release that can be used in addition to a corresponding release.  It is strictly additive in nature.

A core supplement can be issued when the [NIEM Business Architecture Committee]({{site.data.links.nbac}}) (NBAC) determines it is necessary to add content to a published NIEM core.  The purposes for issuing a CS may include:

- To update a code list with the latest values
- To publish bug fixes
- To support domain or community requirements

A Core Supplement can be published at any time, though they tend to coincide with NIEM minor releases as an interim way of adjusting Core content while waiting for the next major release.

## Using a Core Supplement

Although a Core Supplement (CS) may be published outside of the standard release cycle and will be limited in scope and content as compared to its counterparts in a full release, it is still NIEM-conformant content and should be used in a similar manner.  Follow these steps:

* Determine if there is content in a CS that you need to use.
If not, no further steps need to be taken and the CS may be ignored.

* Determine if you have any existing IEPDs that need to be updated.
If so, reopen the IEPD subset wantlist in the Schema Subset Generation Tool (SSGT), 
remove any old components you wish to replace, add the relevant new CS components, 
and regenerate the subset.
Edit the IEPD extension schema document(s) to import the CS schema document(s), 
reflect the changes made in the subset, and update the IEPD catalog and versioning metadata as needed.

* To use a CS as part of a new IEPD, include the relevant CS components 
while creating your NIEM subset and build your IEPD as normal.

* Note that you may be able to integrate CS components into your IEPD extension schemas 
via augmentations and/or element substitutions (especially for code list updates).
If so, this requires little additional effort beyond making sure the new components are available in the NIEM subset.
If augmentations and/or element substitutions are not available or appropriate, new components may be referenced 
and used directly in the extension schema documents.
 
{:.example}
- If you use any of the following NIEM 3.0 components:
  - Element `nc:JurisdictionUSPostalServiceCode`
  - Element `nc:LocationStateUSPostalServiceCode`
  - Type `usps:USStateCodeType`
  - Type `usps:USStateCodeSimpleType`
- Then, you have the option of using updated content from CS 3.0.1 by updating your NIEM subset and IEPD with the following:
  - Element `nc-3.0.1:JurisdictionUSPostalServiceCode`
  - Element `nc-3.0.1:LocationStateUSPostalServiceCode`
  - Type `usps-3.0.1:USStateCodeType`
  - Type `usps-3.0.1:USStateCodeSimpleType`
