---
   title: ag_codes
---

**Prefix:** ag_codes

Agriculture codes

<a href="http://release.niem.gov/niem/codes/ag_codes/4.0/ag_codes.xsd">XML Schema</a>

## Type Index

| Type | Definition | Code Count |
| --- | --- | --- |
| <a href="#coordinatereferencesystemcodesimpletype">CoordinateReferenceSystemCodeSimpleType</a> | A data type containing the geospatial projection standard used for calculating acreage. | 27 |
| <a href="#croppingpracticecodesimpletype">CroppingPracticeCodeSimpleType</a> | A data type for code identifying the cropping practice applicable for a reported crop/commodity on a field/subfield. | 12 |
| <a href="#geospatialdatasubmissionmethodcodesimpletype">GeospatialDataSubmissionMethodCodeSimpleType</a> | A data type containing codes identifying the method used to submit geospatial data used to create a geospatial shape/polygon. | 3 |
| <a href="#geospatialshapemodifiedreasoncodesimpletype">GeospatialShapeModifiedReasonCodeSimpleType</a> | A data type containing codes identifying the reason that a geospatial shape/polygon was modified from its original shape. | 5 |
| <a href="#geospatialshapesourcecodesimpletype">GeospatialShapeSourceCodeSimpleType</a> | A data type containing codes identifying the source data used to create a geospatial shape/polygon. | 5 |
| <a href="#irrigationpracticecodesimpletype">IrrigationPracticeCodeSimpleType</a> | A data type containing the irrigation practice code used for a unit of land with a crop.
  Irrigated Practice is the method of producing a crop by which water, from an adequate water source, is artificially applied in sufficient amounts by appropriate and adequate irrigation equipment and facilities and at the proper times necessary to produce one of the following:
  1. the yield expected for the area.
  2. the yield used to establish the production guarantee or amount of insurance/coverage on the irrigated acreage planted to the commodity.
  3. the producer established approved yield, as applicable.
  Acreage adjacent to water, such as but not limited to a pond, lake, river, stream, creek or brook, shall not be considered irrigated based solely on the proximity to the water. | 2 |
| <a href="#micscodesimpletype">MICSCodeSimpleType</a> | A data type containing codes identifying the Mobile Implement Control System (MICS) used in the collection of geospatial data. | 10 |
| <a href="#organicpracticecategorycodesimpletype">OrganicPracticeCategoryCodeSimpleType</a> | A data type containing certification codes used for farm acreage in regards to a system/plan of production and handling practice to produce an organic commodity.
  Organic practice that is Certified means a system/plan of production and handling practices to respond to site-specific conditions by integrating cultural, biological, and mechanical practices that foster cycling of resources, promote ecological balance, and conserve biodiversity, is certified by an accredited certifying agent, and used to produce an organic commodity or product according to the Organic Foods Production Act of 1990.
  Organic practic that is Transitional means a system/plan of production and handling practices to produce an organic commodity or product in accordance with the Organic Foods Production Act of 1990, but has not yet qualified to be designated as certified organic. | 3 |
| <a href="#planteddatemodifiedreasoncodesimpletype">PlantedDateModifiedReasonCodeSimpleType</a> | A data type containing the reason codes that a planted date was modified from its original value. | 3 |
| <a href="#productplantingcodesimpletype">ProductPlantingCodeSimpleType</a> | A data type for code to identify the planting of a product/crop as either conventional (plannted as normal or no planting required) or unconventional/irregular in a predefined way. | 3 |
| <a href="#reportedacreagemodifiedreasoncodesimpletype">ReportedAcreageModifiedReasonCodeSimpleType</a> | A data type identifying the reason codes that the reported acreage was modified from its original value. | 4 |
| <a href="#taxidentificationcategorycodesimpletype">TaxIdentificationCategoryCodeSimpleType</a> | A data type for identifying the tax identification type assigned to a specific individual, business or other entity and is used to authenticate the individual/entity for matters of taxation and other governement business. | 2 |

## CoordinateReferenceSystemCodeSimpleType

A data type containing the geospatial projection standard used for calculating acreage.

| Code | Definition |
| --- | --- |
| 26901 | NAD83 UTM Zone 1N |
| 26902 | NAD83 UTM Zone 2N |
| 26903 | NAD83 UTM Zone 3N |
| 26904 | NAD83 UTM Zone 4N |
| 26905 | NAD83 UTM Zone 5N |
| 26906 | NAD83 UTM Zone 6N |
| 26907 | NAD83 UTM Zone 7N |
| 26908 | NAD83 UTM Zone 8N |
| 26909 | NAD83 UTM Zone 9N |
| 26910 | NAD83 UTM Zone 10N |
| 26911 | NAD83 UTM Zone 11N |
| 26912 | NAD83 UTM Zone 12N |
| 26913 | NAD83 UTM Zone 13N |
| 26914 | NAD83 UTM Zone 14N |
| 26915 | NAD83 UTM Zone 15N |
| 26916 | NAD83 UTM Zone 16N |
| 26917 | NAD83 UTM Zone 17N |
| 26918 | NAD83 UTM Zone 18N |
| 26919 | NAD83 UTM Zone 19N |
| 26920 | NAD83 UTM Zone 20N |
| 26921 | NAD83 UTM Zone 21N |
| 26922 | NAD83 UTM Zone 22N |
| 26923 | NAD83 UTM Zone 23N |
| 32655 | WGS84 UTM Zone 55N |
| 32702 | WGS84 UTM Zone 2S |
| 32755 | WGS84 UTM Zone 55S |
| 3857 | WGS84 Web Mercator (Auxiliary Sphere) |

<a href="#type-index">Back to type index</a>
## CroppingPracticeCodeSimpleType

A data type for code identifying the cropping practice applicable for a reported crop/commodity on a field/subfield.

| Code | Definition |
| --- | --- |
| 108 | Non-Conventional |
| 120 | Not Following Another Crop |
| 19 | Following Another Crop |
| 210 | Standard Planting |
| 211 | Winter Planted |
| 220 | Interplanting |
| 30 | Fall Planted |
| 4 | Continuous Cropping |
| 46 | Spring Planted |
| 5 | Summer Fallow |
| 6 | Water Fallow |
| 997 | No Cropping Practice Specified |

<a href="#type-index">Back to type index</a>
## GeospatialDataSubmissionMethodCodeSimpleType

A data type containing codes identifying the method used to submit geospatial data used to create a geospatial shape/polygon.

| Code | Definition |
| --- | --- |
| C | CLU - Existing FSA CLU is used to provide the shape/polygon |
| D | Digitized - Third party provider/producer has drawn/digitized the shape/polygon |
| G | GIS Algorithm - GIS algorithm used by third party provider or producer system to create operational boundaries based on raw data collection method (MICS, FMIS) |

<a href="#type-index">Back to type index</a>
## GeospatialShapeModifiedReasonCodeSimpleType

A data type containing codes identifying the reason that a geospatial shape/polygon was modified from its original shape.

| Code | Definition |
| --- | --- |
| C | Corrected Acres Calculation Difference |
| G | GPS Issue |
| MD | Missing Data |
| O | Other |
| S | Shape Drawn Incorrectly |

<a href="#type-index">Back to type index</a>
## GeospatialShapeSourceCodeSimpleType

A data type containing codes identifying the source data used to create a geospatial shape/polygon.

| Code | Definition |
| --- | --- |
| B | Field Boundaries: Polygon is based on the outer boundaries of the field (i.e. vehicle GPS capabilities) |
| C | CLU: Existing FSA CLU was used to provide the shape/polygon |
| D | Digitized: Third party provider/producer has drawn/digitized the shape/polygon |
| F | FMIS: Shape/polygon has been created by the producer''s Farm Management Information System |
| R | Raw Controller File: Shape/polygon has been created from a producer submitted raw controller file |

<a href="#type-index">Back to type index</a>
## IrrigationPracticeCodeSimpleType

A data type containing the irrigation practice code used for a unit of land with a crop.
  Irrigated Practice is the method of producing a crop by which water, from an adequate water source, is artificially applied in sufficient amounts by appropriate and adequate irrigation equipment and facilities and at the proper times necessary to produce one of the following:
  1. the yield expected for the area.
  2. the yield used to establish the production guarantee or amount of insurance/coverage on the irrigated acreage planted to the commodity.
  3. the producer established approved yield, as applicable.
  Acreage adjacent to water, such as but not limited to a pond, lake, river, stream, creek or brook, shall not be considered irrigated based solely on the proximity to the water.

| Code | Definition |
| --- | --- |
| I | Irrigated |
| N | Non-Irrigate |

<a href="#type-index">Back to type index</a>
## MICSCodeSimpleType

A data type containing codes identifying the Mobile Implement Control System (MICS) used in the collection of geospatial data.

| Code | Definition |
| --- | --- |
| AG | AGCO |
| AL | AgLeader |
| CNH | Case IH/Ford/New Holland |
| FS | FSA |
| JD | John Deere |
| O | Other |
| PP | Precision Planting |
| RA | Raven |
| TR | Trimble |
| UN | Unknown |

<a href="#type-index">Back to type index</a>
## OrganicPracticeCategoryCodeSimpleType

A data type containing certification codes used for farm acreage in regards to a system/plan of production and handling practice to produce an organic commodity.
  Organic practice that is Certified means a system/plan of production and handling practices to respond to site-specific conditions by integrating cultural, biological, and mechanical practices that foster cycling of resources, promote ecological balance, and conserve biodiversity, is certified by an accredited certifying agent, and used to produce an organic commodity or product according to the Organic Foods Production Act of 1990.
  Organic practic that is Transitional means a system/plan of production and handling practices to produce an organic commodity or product in accordance with the Organic Foods Production Act of 1990, but has not yet qualified to be designated as certified organic.

| Code | Definition |
| --- | --- |
| N | Not Specified (Conventional) |
| OC | Organic (USDA Certified) |
| OT | Organic (Transitional) |

<a href="#type-index">Back to type index</a>
## PlantedDateModifiedReasonCodeSimpleType

A data type containing the reason codes that a planted date was modified from its original value.

| Code | Definition |
| --- | --- |
| C | Correction |
| MP | Multiple Planting Dates |
| O | Other |

<a href="#type-index">Back to type index</a>
## ProductPlantingCodeSimpleType

A data type for code to identify the planting of a product/crop as either conventional (plannted as normal or no planting required) or unconventional/irregular in a predefined way.

| Code | Definition |
| --- | --- |
| F | Failed Acreage (acreage that was timely planted with the intent to harvest, but because of disaster related conditions, the crop failed before it could be brought to harvest). |
| P | Prevented Planted (the inability to plant the intended crop acreage with proper equipment by the final planting date for the crop type because of a natural disaster). |
| V | Volunteer. (a crop that was planted in a previous crop year on the applicable acreage or drifted from other acreage, successfully self-seeded, and is growing this crop year on the applicable acreage without being intentionally sown or managed). |

<a href="#type-index">Back to type index</a>
## ReportedAcreageModifiedReasonCodeSimpleType

A data type identifying the reason codes that the reported acreage was modified from its original value.

| Code | Definition |
| --- | --- |
| C | Corrected Acres |
| G | GPS Issue |
| MD | Missing Data |
| O | Other |

<a href="#type-index">Back to type index</a>
## TaxIdentificationCategoryCodeSimpleType

A data type for identifying the tax identification type assigned to a specific individual, business or other entity and is used to authenticate the individual/entity for matters of taxation and other governement business.

| Code | Definition |
| --- | --- |
| 1 | SSN |
| 2 | EIN |

<a href="#type-index">Back to type index</a>
