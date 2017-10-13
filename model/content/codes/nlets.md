---
   title: nlets
---

**Prefix:** nlets

Source: The International Justice & Public Safety Information Sharing Network; 
Publication: NLETS User and Technical Guide; 
Date: 2006;   
http://www.nlets.org/

<a href="http://release.niem.gov/niem/codes/nlets/4.0/nlets.xsd">XML Schema</a>

## Type Index

| Type | Definition | Code Count |
| --- | --- | --- |
| <a href="#agencyauthorizationcodesimpletype">AgencyAuthorizationCodeSimpleType</a> | A data type for an agency's access category to data. | 4 |
| <a href="#agencyservicehourscodesimpletype">AgencyServiceHoursCodeSimpleType</a> | A data type for the availability of an agency. | 4 |
| <a href="#organizationcategorycodesimpletype">OrganizationCategoryCodeSimpleType</a> | A data type for the functional kinds of an organization. | 12 |

## AgencyAuthorizationCodeSimpleType

A data type for an agency's access category to data.

| Code | Definition |
| --- | --- |
| A | administrative messages |
| C | criminal history access |
| D | DMV data access |
| Z | other NLETS message types |

<a href="#type-index">Back to type index</a>
## AgencyServiceHoursCodeSimpleType

A data type for the availability of an agency.

| Code | Definition |
| --- | --- |
| A | 24 hr service w/terminal. |
| B | Not 24 hr service w/terminal. |
| C | 24 hr service, w/o terminal. |
| D | Not 24 hr service, w/o terminal. |

<a href="#type-index">Back to type index</a>
## OrganizationCategoryCodeSimpleType

A data type for the functional kinds of an organization.

| Code | Definition |
| --- | --- |
| CJ | Will return all defined non-law enforcement criminal justice agencies and should be used as a general type for all ORIs ending in B, M, N, or Y. |
| FE | Federal agency. |
| JA | Any prosecutor. |
| JC | Any corrections agency. |
| JF | Any Federal non-law enforcement criminal justice agency. |
| JG | Any probation agency. |
| JJ | Any court agency. |
| LE | Used as a catchall for any agency not fitting the above criteria.  May be used on inquiry or record creation. |
| NJ | Non-criminal justice agencies |
| PD | Any agency of city government. |
| SA | Any agency employed by a state with statewide jurisdiction. |
| SO | Any agency of county government incl. parishes where apropos. |

<a href="#type-index">Back to type index</a>
