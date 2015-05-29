---
title: Using a NIEM Core Supplement
---
#### 28 May 2015

#### ________________________________
   

## What is a NIEM *Core Supplement* and why is it necessary?

A NIEM *core supplement* is a special type of NIEM release that is applicable 
to a previously published NIEM core and is strictly additive in nature. 
A core supplement (CS) can be issued when the 
NIEM Business Architecture Committee (NBAC) determines
it is necessary to add content to a published NIEM core.  
The purposes for issuing a CS may include: 

 * To update a code list with new values added by an authoritative source; 

 * To correct a significant flaw in a component, to add a new element to a substitution group; and 

 * To apply other adjustments by adding content. 

A CS does not have to be issued within a major or minor release cycle (although it can be).


## What Core Supplements are available?

As of the date of this page, Two core supplements (CS) exist that apply to NIEM Core 3.0. 

1. CS 3.0.1 - This CS corrects the U.S. Postal Service (USPS) U.S. State code list.  
It provides a whole new list that includes Alabama (AL) (that was previously missing).  
Download CS 3.0.1 from one of these locations:

    * In the release area:
[http://release.niem.gov/niem/3.0/du-cs-3.0.html](http://release.niem.gov/niem/3.0/du-cs-3.0.html)

    * In the publication area:
[http://publicataion.niem.gov/niem/niem-core/3.0/1/niem-core-3.0.1.cs.zip](http://publication.niem.gov/niem/niem-core/3.0/1/niem-core-3.0.1.cs.zip)

    * CS 3.0.1 is also contained within the NIEM 3.1 minor release package:
[http://release.niem.gov/niem/3.1/niem-3.1.rel.zip](http://release.niem.gov/niem/3.1/niem-3.1.rel.zip)

2. CS 3.0.2 - This CS contains adjustments to the MGRS (Military Grid Reference System) components, 
constraints on Longitude, Person associations (adds PersonUnionStatus), and the following code lists: 
`dot_hazmat`, `dod_jcs-pub2.0`, `dea_ctlsub`, and `census_uscounty` (adds new values to all).
Download CS 3.0.2 from one of these locations:

    * In the release area:
[http://release.niem.gov/niem/3.0/du-cs-3.0.html](http://release.niem.gov/niem/3.0/du-cs-3.0.html)

    * In the publication area:
[http://publicataion.niem.gov/niem/niem-core/3.0/2/niem-core-3.0.2.cs.zip](http://publication.niem.gov/niem/niem-core/3.0/2/niem-core-3.0.2.cs.zip)

    * CS 3.0.2 is also contained within the NIEM 3.1 minor release package:
[http://release.niem.gov/niem/3.1/niem-3.1.rel.zip](http://release.niem.gov/niem/3.1/niem-3.1.rel.zip)


## How do I use a Core Supplement?

Although a Core Supplement (CS) may be published outside of the standard release cycle and will be limited 
in scope and content as compared to its counterparts in a full release, it is still NIEM-conformant content 
and should be used in a similar manner.  Follow these steps:

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
 
## For example, if you need CS 3.0.1 ...


If you use any of the following NIEM 3.0 components:

* Element nc:JurisdictionUSPostalServiceCode

* Element nc:LocationStateUSPostalServiceCode

* Type usps:USStateCodeType

* Type usps:USStateCodeSimpleType

Then, update your NIEM subset or IEPD with the corresponding components from CS 3.0.1:

* Element nc-3.0.1:JurisdictionUSPostalServiceCode

* Element nc-3.0.1:LocationStateUSPostalServiceCode

* Type usps-3.0.1:USStateCodeType

* Type usps-3.0.1:USStateCodeSimpleType

