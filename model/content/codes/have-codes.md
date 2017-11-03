---
   title: have-codes
---

**Prefix:** have-codes

Source: OASIS Emergency Data Exchange Language (EDXL); 
Publication: Emergency Data Exchange Language (EDXL) Hospital AVailability Exchange (HAVE) Version 1.0; 
Version: 1.0; 
Date: 22 Dec 2009; 
http://docs.oasis-open.org/emergency/edxl-have/v1.0/errata/edxl-have-v1.0-os-errata-os.html

<a href="http://release.niem.gov/niem/codes/edxl_have/4.0/have-codes.xsd">XML Schema</a>

## Type Index

| Type | Definition | Code Count |
| --- | --- | --- |
| <a href="#availabilitystatuscodesimpletype">AvailabilityStatusCodeSimpleType</a> | A data type for a code set of service availability. | 2 |
| <a href="#bedcategorycodesimpletype">BedCategoryCodeSimpleType</a> | A data type for a code set of available Bed Types. | 9 |
| <a href="#capacitystatuscodesimpletype">CapacityStatusCodeSimpleType</a> | A data type for a code set of bed kind or sub-category bed kind. | 2 |
| <a href="#clinicalstatuscodesimpletype">ClinicalStatusCodeSimpleType</a> | A data type for a code set of the clinical status of the facility. | 4 |
| <a href="#deconcapacitycodesimpletype">DeconCapacityCodeSimpleType</a> | A data type for a code set of the capacity for chemical/biological/radiological patient decontamination. | 4 |
| <a href="#emsoffloadstatuscodesimpletype">EMSOffloadStatusCodeSimpleType</a> | A data type for a code set of offload times of ambulance capabilities. | 2 |
| <a href="#emstrafficstatuscodesimpletype">EMSTrafficStatusCodeSimpleType</a> | A data type for a code set of the status of EMS traffic operations. | 4 |
| <a href="#eocplancodesimpletype">EOCPlanCodeSimpleType</a> | A data type for a code set of whether the hospital has activated its Emergency Operations Plan (EOP) | 2 |
| <a href="#eocstatuscodesimpletype">EOCStatusCodeSimpleType</a> | A data type for a code set of whether the Emergency Operations Center (EOC) is currently operating. | 2 |
| <a href="#facilitystatuscodesimpletype">FacilityStatusCodeSimpleType</a> | A data type for a code set of facility status. | 4 |
| <a href="#morguecapacitycodesimpletype">MorgueCapacityCodeSimpleType</a> | A data type for a code set of the status of the morgue capacity. | 3 |
| <a href="#securitystatuscodesimpletype">SecurityStatusCodeSimpleType</a> | A data type for a code set of the status of security procedures in the hospital. | 5 |

## AvailabilityStatusCodeSimpleType

A data type for a code set of service availability.

| Code | Definition |
| --- | --- |
| Adequate | Meets the current needs |
| Insufficient | Current needs are not being met |

<a href="#type-index">Back to type index</a>
## BedCategoryCodeSimpleType

A data type for a code set of available Bed Types.

| Code | Definition |
| --- | --- |
| AdultICU | Capacity status for adult ICU bed type.  i. These can support critically ill or injured patients, including ventilator support.  ii. This category includes all major subtypes of ICU beds, including neuro, cardiac, trauma, or medical, with the exception that this category does not include burn ICU beds. |
| Burn | Capacity status for burn beds. 
i. These are thought of as burn ICU beds, either approved by the American Burn Association or self-designated. 
ii. These beds are NOT to be included in other ICU bed counts. |
| MedicalSurgical | Capacity status for medical-surgical beds. 
i. These are also thought of as ward beds.  
ii. These beds may or may not include cardiac telemetry capability |
| NegativeFlowIsolation | i. Capacity status for negative airflow isolation beds. These provide respiratory isolation. NOTE: This value may represent available beds included in the counts of other types. 
 |
| OperatingRooms | i. Capacity status for operating rooms which are equipped staffed and could be made available for patient care in a short period of time.
 |
| OtherIsolation | i. Capacity status for other isolation beds. These provide isolation where airflow is not a concern.  NOTE: This value may represent available beds included in the counts of other types. 
 |
| PediatricICU | i. Capacity status for pediatric ICU beds. This is similar to adult ICU beds, but for patients 17-years-old and younger.
 |
| Pediatrics | i. Capacity status for pediatrics beds. These are ward medical/surgical beds for patients 17-years-old and younger.
 |
| Psychiatric | i. Capacity status for psychiatric beds. These are ward beds on a closed/locked psychiatric unit or ward beds where a patient will be attended by a sitter. |

<a href="#type-index">Back to type index</a>
## CapacityStatusCodeSimpleType

A data type for a code set of bed kind or sub-category bed kind.

| Code | Definition |
| --- | --- |
| NotAvailable | The type of bed is not available. |
| VacantAvailable | The type of bed is available. |

<a href="#type-index">Back to type index</a>
## ClinicalStatusCodeSimpleType

A data type for a code set of the clinical status of the facility.

| Code | Definition |
| --- | --- |
| Full | Hospital clinical resources are exceeded and acceptable care cannot be provided to additional patients. Diversion or community surge response is required. |
| Level1 | Hospital clinical resources are operating at Level-1 surge conditions. |
| Level2 | Hospital clinical resources are operating at Level-2 surge conditions. |
| Normal | Hospital clinical resources are operating within normal conditions. |

<a href="#type-index">Back to type index</a>
## DeconCapacityCodeSimpleType

A data type for a code set of the capacity for chemical/biological/radiological patient decontamination.

| Code | Definition |
| --- | --- |
| Exceeded | Needs exceed available capacity |
| Full | In use at maximum capacity |
| Inactive | Not being used, but available if needed |
| Open | In use and able to accept additional patients |

<a href="#type-index">Back to type index</a>
## EMSOffloadStatusCodeSimpleType

A data type for a code set of offload times of ambulance capabilities.

| Code | Definition |
| --- | --- |
| Delayed | The time required to offload the patient is longer than typical. |
| Normal | The time required to offload the patient is typical. |

<a href="#type-index">Back to type index</a>
## EMSTrafficStatusCodeSimpleType

A data type for a code set of the status of EMS traffic operations.

| Code | Definition |
| --- | --- |
| Advisory | Experiencing specific resource limitations which may affect transport of some EMS traffic. |
| Closed | Requesting re-route of EMS traffic to other facilities. |
| Normal | Accepting all EMS traffic |
| NotApplicable | Not Applicable. This hospital does not have an emergency department. |

<a href="#type-index">Back to type index</a>
## EOCPlanCodeSimpleType

A data type for a code set of whether the hospital has activated its Emergency Operations Plan (EOP)

| Code | Definition |
| --- | --- |
| Active | Active |
| Inactive | Inactive |

<a href="#type-index">Back to type index</a>
## EOCStatusCodeSimpleType

A data type for a code set of whether the Emergency Operations Center (EOC) is currently operating.

| Code | Definition |
| --- | --- |
| Active | Active |
| Inactive | Inactive |

<a href="#type-index">Back to type index</a>
## FacilityStatusCodeSimpleType

A data type for a code set of facility status.

| Code | Definition |
| --- | --- |
| Closed | Indicates that a hospital is no longer capable of providing services and only emergency services/restoration personnel may remain in the facility. |
| Compromised | General operations of the facility have been affected due to damage, operating on emergency backup systems, or facility contamination. |
| Evacuating | Indicates that a hospital is in the process of a partial or full evacuation. |
| Normal | No conditions exist that adversely affect the general operations of the facility. |

<a href="#type-index">Back to type index</a>
## MorgueCapacityCodeSimpleType

A data type for a code set of the status of the morgue capacity.

| Code | Definition |
| --- | --- |
| Exceeded | Storage needs exceed available space |
| Full | All normal space is in use |
| Open | Space is available |

<a href="#type-index">Back to type index</a>
## SecurityStatusCodeSimpleType

A data type for a code set of the status of security procedures in the hospital.

| Code | Definition |
| --- | --- |
| Elevated | The hospital has activated increased security procedures (awareness, surveillance) due to a potential threat, or specific security related event i.e. increase in local threat level, VIP, bomb threat. |
| Lockdown | Based on security needs, the hospital has activated procedures to control entry to the facility to authorized persons only. |
| Normal | The hospital is operating under routine security procedures. |
| Quarantine | Based on a public health emergency, the entry and exit of the facility is controlled by public health officials |
| RestrictedAccess | Based on security needs, the hospital has activated procedures to allow access to the facility through a reduced number of controlled entrances. |

<a href="#type-index">Back to type index</a>
