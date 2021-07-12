---
title: NIEM Health Elements Inventory
short: Element Inventory
icon: fa-list
description: The NIEM Health Elements Inventory is a tentative inventory of healthcare elements and types defined across the NIEM domains. The goal of this exercise is to determine what healthcare-related elements have already been defined across the NIEM Domains, compare those elements for completeness and standards compliance with ONC USCDI and health industry standards, and identify gaps that may need to be filled by NIEM Health definitions.
redirect_from: /health/tutorials/inventory/
---

{:toc}
- TOC

Cait Ryan, Project Manager

Brian Handspicker, Sr Consultant Health IT

As of June 17, 2019

*Download the [inventory](./assets/NIEM_Health_Elements_Inventory.docx).*

## Introduction

This is an tentative inventory of healthcare elements and types defined across the NIEM domains. The goal of this exercise is to determine what healthcare-related elements have already been defined across the NIEM Domains, compare those elements for completeness and standards compliance with ONC USCDI and health industry standards, and identify gaps that may need to be filled by NIEM Health definitions.

The Office of the National Coordinator for Health Information Technology (ONC) has created a roadmap, the United States Core Definitions for Interoperability (USCDI) of healthcare information. This roadmap proposes adoption and definition of specific groups of common health elements over three years. The elements defined for 2019 are:

- Assessment and plan of treatment
- Care Team members
- Clinical Notes
- Goals
- Health concerns
- Immunizations
- Laboratory
- Medications
- Patient Demographics
- Problems
- Procedures
- Provenance
- Smoking Status
- Unique device identifier
- Vital signs

This inventory was created by first searching on USCDI defined class and element names, then searching on cognates of those names, then searching on likely synonyms, and finally visually skimming the NIEM domain XML files for additional candidates. Currently we have identified healthcare related elements in the following domains:

Core - 38

Biometrics - 2

Emergency Management - 6

Human Services - 75

Justice - 157 + 61 Mental Health

Screening - 1

This inventory is not certain to be complete until sufficient review has shaken out the better disguised medical or healthcare-oriented elements.

## NIEM Core (38)

**nc:MedicalConditionDoctor** (nc:PersonType) -  A doctor who treats a person for a medical condition.

**nc:PatientMedicalFacility** (nc:OrganizationType) - A medical facility receiving patient.</p>

**nc:Person** (nc:PersonType) - A human being.

{:.note}
> Although Person is an object/class defined in NIEM Core, this has been included in this specification because it is the basis of role of patient, doctor, etc plus many class elements are associated
with clinical records, e.g. height, weight, etc.
>
><span style='background:yellow'>Likely candidate health elements highlighted.</span>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AEmploymentContactInformation"><span
style='color:blue'>EmploymentContactInformation</span></a></span></u><span> (nc:ContactInformationType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonAccentText"><span
style='color:blue'>PersonAccentText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonAgeDescriptionText"><span
style='color:blue'>PersonAgeDescriptionText</span></a></span></u><span
style='background:yellow'> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonAgeMeasure"><span
style='color:blue'>PersonAgeMeasure</span></a></span></u><span
style='background:yellow'>
(nc:TimeMeasureType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonBirthDate"><span
style='color:blue'>PersonBirthDate</span></a></span></u><span style='mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";background:yellow;mso-fareast-language:EN-US'> (nc:DateType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonBirthLocation"><span
style='color:blue'>PersonBirthLocation</span></a></span></u><span> (nc:LocationType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonBloodTypeAbstract"><span
style='color:blue'>PersonBloodTypeAbstract</span></a></span></u><span
style='background:yellow'> (abstract)
This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonBodyXRaysAvailableAbstract"><span
style='color:blue'>PersonBodyXRaysAvailableAbstract</span></a></span></u><span
style='background:yellow'> (abstract)
This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonBuildAbstract"><span
style='color:blue'>PersonBuildAbstract</span></a></span></u><span> (abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonCapability"><span
style='color:blue'>PersonCapability</span></a></span></u><span> (nc:CapabilityType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonCircumcisionIndicator"><span
style='color:blue'>PersonCircumcisionIndicator</span></a></span></u><span
style='background:yellow'> (boolean)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonCitizenshipAbstract"><span
style='color:blue'>PersonCitizenshipAbstract</span></a></span></u><span> (abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonComplexionText"><span
style='color:blue'>PersonComplexionText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonDeathDate"><span
style='color:blue'>PersonDeathDate</span></a></span></u><span style='mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";background:yellow;mso-fareast-language:EN-US'> (nc:DateType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonDependentQuantity"><span
style='color:blue'>PersonDependentQuantity</span></a></span></u><span> (QuantityType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonDescriptionText"><span
style='color:blue'>PersonDescriptionText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonDigitalImage"><span
style='color:blue'>PersonDigitalImage</span></a></span></u><span> (nc:ImageType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonDigitizedSignatureImage"><span
style='color:blue'>PersonDigitizedSignatureImage</span></a></span></u><span> (nc:ImageType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonDisguiseDescriptionText"><span
style='color:blue'>PersonDisguiseDescriptionText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonEducationLevelText"><span
style='color:blue'>PersonEducationLevelText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonEmergencyContactInformation"><span
style='color:blue'>PersonEmergencyContactInformation</span></a></span></u><span
style='background:yellow'>
(nc:ContactInformationType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonEthnicityAbstract"><span
style='color:blue'>PersonEthnicityAbstract</span></a></span></u><span
style='background:yellow'> (abstract)
This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonEyeColorAbstract"><span
style='color:blue'>PersonEyeColorAbstract</span></a></span></u><span
style='background:yellow'> (abstract)
This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonEyewearAbstract"><span
style='color:blue'>PersonEyewearAbstract</span></a></span></u><span> (abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonFacialHairAbstract"><span
style='color:blue'>PersonFacialHairAbstract</span></a></span></u><span> (abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonGeneralAppearanceDescriptionText"><span
style='color:blue'>PersonGeneralAppearanceDescriptionText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonHairAppearanceText"><span
style='color:blue'>PersonHairAppearanceText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonHairCategoryText"><span
style='color:blue'>PersonHairCategoryText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonHairColorAbstract"><span
style='color:blue'>PersonHairColorAbstract</span></a></span></u><span> (abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonHairLengthAbstract"><span
style='color:blue'>PersonHairLengthAbstract</span></a></span></u><span> (abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonHairStyleAbstract"><span
style='color:blue'>PersonHairStyleAbstract</span></a></span></u><span> (abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonHandednessText"><span
style='color:blue'>PersonHandednessText</span></a></span></u><span
style='background:yellow'> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonHeightDescriptionText"><span
style='color:blue'>PersonHeightDescriptionText</span></a></span></u><span
style='background:yellow'> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonHeightMeasure"><span
style='color:blue'>PersonHeightMeasure</span></a></span></u><span
style='background:yellow'>
(nc:LengthMeasureType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonHomeContactInformation"><span
style='color:blue'>PersonHomeContactInformation</span></a></span></u><span
style='background:yellow'>
(nc:ContactInformationType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonHumanResourceIdentification"><span
style='color:blue'>PersonHumanResourceIdentification</span></a></span></u><span> (nc:IdentificationType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonInjury"><span
style='color:blue'>PersonInjury</span></a></span></u><span style='mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";background:yellow;mso-fareast-language:EN-US'> (nc:InjuryType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonJewelryDescriptionText"><span
style='color:blue'>PersonJewelryDescriptionText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonLanguageEnglishIndicator"><span
style='color:blue'>PersonLanguageEnglishIndicator</span></a></span></u><span
style='background:yellow'> (boolean)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonLearningDisabilityText"><span
style='color:blue'>PersonLearningDisabilityText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonLicenseIdentification"><span
style='color:blue'>PersonLicenseIdentification</span></a></span></u><span> (nc:IdentificationType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonLivingIndicator"><span
style='color:blue'>PersonLivingIndicator</span></a></span></u><span
style='background:yellow'> (boolean)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonMedicalCondition"><span
style='color:blue'>PersonMedicalCondition</span></a></span></u><span
style='background:yellow'> (nc:MedicalConditionType)
</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonMedicalDescriptionText"><span
style='color:blue'>PersonMedicalDescriptionText</span></a></span></u><span
style='background:yellow'> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonMedicalFileIndicator"><span
style='color:blue'>PersonMedicalFileIndicator</span></a></span></u><span
style='background:yellow'> (boolean)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonMedicationRequiredText"><span
style='color:blue'>PersonMedicationRequiredText</span></a></span></u><span
style='background:yellow'> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonMentalStateText"><span
style='color:blue'>PersonMentalStateText</span></a></span></u><span
style='background:yellow'> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonMilitarySummary"><span
style='color:blue'>PersonMilitarySummary</span></a></span></u><span> (nc:MilitarySummaryType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonMoodDescriptionText"><span
style='color:blue'>PersonMoodDescriptionText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonName"><span
style='color:blue'>PersonName</span></a></span></u><span style='mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";background:yellow;mso-fareast-language:EN-US'> (nc:PersonNameType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonNationalIdentification"><span
style='color:blue'>PersonNationalIdentification</span></a></span></u><span> (nc:IdentificationType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonNationalityAbstract"><span
style='color:blue'>PersonNationalityAbstract</span></a></span></u><span> (abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonOrganDonatorIndicator"><span
style='color:blue'>PersonOrganDonatorIndicator</span></a></span></u><span
style='background:yellow'> (boolean)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonOrganDonorAbstract"><span
style='color:blue'>PersonOrganDonorAbstract</span></a></span></u><span
style='background:yellow'> (abstract)
This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonOtherIdentification"><span
style='color:blue'>PersonOtherIdentification</span></a></span></u><span> (nc:IdentificationType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonPassportIdentification"><span
style='color:blue'>PersonPassportIdentification</span></a></span></u><span> (nc:IdentificationType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonPhysicalDisabilityText"><span
style='color:blue'>PersonPhysicalDisabilityText</span></a></span></u><span
style='background:yellow'> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonPhysicalFeature"><span
style='color:blue'>PersonPhysicalFeature</span></a></span></u><span> (nc:PhysicalFeatureType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonPrimaryLanguage"><span
style='color:blue'>PersonPrimaryLanguage</span></a></span></u><span
style='background:yellow'>
(nc:PersonLanguageType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonRaceAbstract"><span
style='color:blue'>PersonRaceAbstract</span></a></span></u><span
style='background:yellow'> (abstract)
This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonReligionAbstract"><span
style='color:blue'>PersonReligionAbstract</span></a></span></u><span
style='background:yellow'> (abstract)
This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonResidentAbstract"><span
style='color:blue'>PersonResidentAbstract</span></a></span></u><span> (abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonSSNIdentification"><span
style='color:blue'>PersonSSNIdentification</span></a></span></u><span> (nc:IdentificationType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonSecondaryLanguage"><span
style='color:blue'>PersonSecondaryLanguage</span></a></span></u><span
style='background:yellow'>
(nc:PersonLanguageType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><span>nc:<u><span style='color:blue'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonSecurityClearanceAbstract"><span
style='color:blue'>PersonSecurityClearanceAbstract</span></a></span></u>
(abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonSexAbstract"><span
style='color:blue'>PersonSexAbstract</span></a></span></u><span
style='background:yellow'> (abstract)
This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonSexualOrientationText"><span
style='color:blue'>PersonSexualOrientationText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonSkinToneAbstract"><span
style='color:blue'>PersonSkinToneAbstract</span></a></span></u><span> (abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonSpeechDescriptionText"><span
style='color:blue'>PersonSpeechDescriptionText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonStateIdentification"><span
style='color:blue'>PersonStateIdentification</span></a></span></u><span> (nc:IdentificationType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonTaxIdentification"><span
style='color:blue'>PersonTaxIdentification</span></a></span></u><span> (nc:IdentificationType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonUSCitizenIndicator"><span
style='color:blue'>PersonUSCitizenIndicator</span></a></span></u><span> (boolean)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonUnionStatusAbstract"><span
style='color:blue'>PersonUnionStatusAbstract</span></a></span></u><span> (abstract) This term has synonym entries</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonVisionPrescriptionText"><span
style='color:blue'>PersonVisionPrescriptionText</span></a></span></u><span
style='background:yellow'> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonWeightDescriptionText"><span
style='color:blue'>PersonWeightDescriptionText</span></a></span></u><span
style='background:yellow'> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonWeightMeasure"><span
style='color:blue'>PersonWeightMeasure</span></a></span></u><span
style='background:yellow'>
(nc:WeightMeasureType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b><span style='background:yellow'>nc:</span></b><u><span
style='color:blue;background:yellow'><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonXRayImage"><span
style='color:blue'>PersonXRayImage</span></a></span></u><span style='mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";background:yellow;mso-fareast-language:EN-US'> (nc:ImageType)</span></p>

<br/>

**nc:MedicalCondition** (nc:MedicalConditionType)

**nc:PersonMedicalCondition** (nc:MedicalConditionType) - A state of health for a person, on-going or present.

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionCauseText"><span
style='color:blue'>MedicalConditionCauseText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionDateRange"><span
style='color:blue'>MedicalConditionDateRange</span></a></span></u><span> (nc:DateRangeType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionDescriptionText"><span
style='color:blue'>MedicalConditionDescriptionText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionDoctor"><span
style='color:blue'>MedicalConditionDoctor</span></a></span></u><span> (nc:PersonType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionPresentIndicator"><span
style='color:blue'>MedicalConditionPresentIndicator</span></a></span></u><span> (boolean)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionSeverityText"><span
style='color:blue'>MedicalConditionSeverityText</span></a></span></u><span> (TextType)</span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'><b>nc:</b><u><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionText"><span
style='color:blue'>MedicalConditionText</span></a></span></u><span> (TextType)</span></p>

<br/>

**nc:MedicalConditionText** (nc:TextType) - A state of health, on-going or present.

**nc:PersonMedicalDescriptionText** (nc:TextType) - </span>A description of the overall health of a person.

**nc:PersonMedicalFileIndicator** (niem-xs:boolean) - </span>True if a medical history file is known to exist for a person; false otherwise.

**nc:PersonMedicationRequiredText** (nc:TextType) - A medication and dosage required for a person.

**nc:PersonMentalStateText** (nc:TextType) - A mental condition of a person.

**nc:PersonLivingIndicator** (niem-xs:boolean) - True if a person is alive; false if a person is dead.

**nc:PersonOrganDonorAbstract** (abstract / This term has synonym entries) - A data concept for an organ a person is willing to donate upon death.

<p style='margin-left:.5in'><a href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonOrganDonorText">PersonOrganDonorText</a> (TextType)</p>

<p style='margin-left:.5in'><a href="https://beta.movement.niem.gov/#/details?entityID=j%3APersonOrganDonorCode">PersonOrganDonorCode</a> (PersonOrganDonorCodeType)</p>

**nc:PersonInjury** (nc:InjuryType) - A form of physical harm or damage sustained by a person.

<p style='margin-left:.5in'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AInjuryCategoryAbstract">InjuryCategoryAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:.5in'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AInjuryCauserAbstract">InjuryCauserAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:.5in'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AInjuryDate">InjuryDate</a></span> (nc:DateType) </p>

<p style='margin-left:.5in'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AInjuryDescriptionText">InjuryDescriptionText</a></span> (TextType)</p>

<p style='margin-left:.5in'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AInjuryLocationAbstract">InjuryLocationAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:.5in'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AInjurySeverityAbstract">InjurySeverityAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:.5in'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AInjurySustainer">InjurySustainer</a></span> (nc:PersonType)</p>

**nc:PersonBirthDate** (nc:DateType) - A date a person was born.

**nc:PersonDeathDate** (nc:DateType) - A date a person died or was declared legally dead.

**nc:PersonBloodTypeAbstract** (abstract / This term has synonym entries) - A data concept for a blood group and RH factor of a person.

<p style='margin-left:.5in'>nc:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APersonBloodTypeText">PersonBloodTypeText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>J:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3APersonBloodTypeCode">PersonBloodTypeCode</a></span>
(ncic:BLTCodeType)</p>

<p style='margin-left:.5in'>J:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3APersonBloodTypeRapSheetCode">PersonBloodTypeRapSheetCode</a></span>
(j:PersonBloodTypeCodeType)</p>

## Agriculture

[None Defined]

## Biometrics (2)

**bio:RadiographImageSeriesCodeText** (nc:TextType) - A kind of Radiograph Image Series. Only integer and periods are in the code text. An example is 8.1.3.9.1.5 for the National Provider Identifier Number of Dentist that treated the patient.

**bio:HealthCommentText** (nc:TextType) - A comment noting any observable health issues impacting
the data subject during the recording time segment.

## Chemical, Biological, Radiological, and Nuclear

[None Defined]

## Cyber (new)

[None Defined]

## Emergency Management (6)

**em:HospitalStatus** (abstract) - *The top level container element for reporting status of any number of hospitals. The EDXL-HAVE has no independent routing mechanism, so it requires a routing mechanism that is consistent with the EDXL-DE distribution types. It must contain one or more Hospital elements.*

**em:EMSCensus** (em:TriagePatientCountType) - *A number detailing each triage patient kind the overall hospital currently has.*

- {% include functions/getMovementLink.html qname="em:TriageBlackQuantity" %} (nc:QuantityType) - *A count of the Number of deceased victims;*
- {% include functions/getMovementLink.html qname="em:TriageGreenQuantity" %} (nc:QuantityType) - *A count of the Number of victims with minor needs*
- {% include functions/getMovementLink.html qname="em:TriageRedQuantity" %} (nc:QuantityType) - *A count of the Number of victims with immediate needs*
- {% include functions/getMovementLink.html qname="em:TriageYellowQuantity" %} (nc:QuantityType) - *A count of the Number of victims with delayed needs*

**em:EMSCapacity** (em:TriagePatientCountType) - A number detailing each triage patient kind the overall hospital can accept.

- {% include functions/getMovementLink.html qname="em:TriageBlackQuantity" %} (nc:QuantityType) - *A count of the Number of deceased victims;*
- {% include functions/getMovementLink.html qname="em:TriageGreenQuantity" %} (nc:QuantityType) - *A count of the Number of victims with minor needs*
- {% include functions/getMovementLink.html qname="em:TriageRedQuantity" %} (nc:QuantityType) - *A count of the Number of victims with immediate needs*
- {% include functions/getMovementLink.html qname="em:TriageYellowQuantity" %} (nc:QuantityType) - *A count of the Number of victims with delayed needs*

**em:AvailableQuantity** (nc:QuantityType) - *A count of the vacant/available beds to which patients can be immediately transported.*

**{% include functions/getMovementLink.html qname="em:StaffingCode" %}** (have-codes:AvailabilityStatusCodeType) - *A status indicating the staffing levels at the hospital*

**{% include functions/getMovementLink.html qname="em:EOCPlanCode" %}** (have-codes:EOCPlanCodeType) - *A code indicating whether the hospital has activated its Emergency Operations Plan (EOP)*

## Grants

[None Defined]

## Housing (new)

[None Defined]

## Human Services (75)

<p><b>hs:Patient</b> (hs:PatientType) </p>

<p style='margin-left:.5in'><b>Definition</b>: A person receiving medical care.</p>

<p style='margin-left:.5in'>nc:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ARoleOfPerson">RoleOfPerson</a></span> (nc:PersonType) </p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicalSummary">MedicalSummary</a></span> (hs:MedicalSummaryType) </p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APatientLocationAbstract">PatientLocationAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APatientNameOfAnimalText">PatientNameOfAnimalText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AProviderEntity">ProviderEntity</a></span> (nc:EntityType) </p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AReportingEntity">ReportingEntity</a></span> (nc:EntityType) </p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ASpeciesAbstract">SpeciesAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:.5in'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ACustodialEntity">CustodialEntity</a></span> (nc:EntityType)</p>

<p>hs:<b>MedicalSummary</b>
(hs:MedicalSummaryType) </p>

<p style='margin-left:.5in'><b>Definition: </b>A summary of a person's medical information</p>

<p style='margin-left:.5in'>nc:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalCondition">MedicalCondition</a></span> (nc:MedicalConditionType) </p>

<p style='margin-left:1.0in'>nc:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionCauseText">MedicalConditionCauseText</a></span>
(TextType)</p>

<p style='margin-left:1.0in'>nc:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionDateRange">MedicalConditionDateRange</a></span> (nc:DateRangeType) </p>

<p style='margin-left:1.0in'>nc:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionDescriptionText">MedicalConditionDescriptionText</a></span>
(TextType)</p>

<p style='margin-left:1.0in'>nc:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionDoctor">MedicalConditionDoctor</a></span> (nc:PersonType) </p>

<p style='margin-left:1.0in'>nc:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionPresentIndicator">MedicalConditionPresentIndicator</a></span>
(boolean)</p>

<p style='margin-left:1.0in'>nc:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionSeverityText">MedicalConditionSeverityText</a></span>
(TextType)</p>

<p style='margin-left:1.0in'>nc:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AMedicalConditionText">MedicalConditionText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AClinicalObservation">ClinicalObservation</a></span> (hs:ClinicalObservationType) </p>

<p style='margin-left:1.0in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AObservationCategoryText">ObservationCategoryText</a></span>
(TextType)</p>

<p style='margin-left:1.0in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AObservationPrimaryIndicator">ObservationPrimaryIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicalEncounter">MedicalEncounter</a></span> (nc:ActivityType) </p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AServiceEvent">ServiceEvent</a></span> (nc:ActivityType)</p>

<p>hs:<b>PatientLocationAbstract</b>
(abstract) This term has synonym entries</p>

<p style='margin-left:.5in'><b>Definition: </b>A data concept for a location of a patient.</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APatientLocationCode">PatientLocationCode</a></span>
(PatientLocationCodeType)</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APatientLocationText">PatientLocationText</a></span>
(TextType)</p>

<p>hs:<b>PatientLocationCode</b>
(hs:PatientLocationCodeType) </p>

<p style='margin-left:.5in'><b>Definition: </b>A location of a patient.</p>

<p>hs:<b>PatientLocationText</b>
(nc:TextType) </p>

<p style='margin-left:.5in'><b>Definition: </b>A location of a patient.</p>

<p>hs:<b>MedicalEncounter</b>
(nc:ActivityType)</p>

<p style='margin-left:.5in'><b>Definition: </b>An encounter between a patient and applicable
providers.</p>

<p>hs:<b>Prescription</b> (hs:PrescriptionType)</p>

<p style='margin-left:.5in'><b>Definition:</b></p>

<p style='margin-left:.5in'>nc:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADrug">Drug</a></span> (nc:DrugType) </p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ADispenser">Dispenser</a></span> (nc:EntityType) </p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescriber">Prescriber</a></span> (nc:EntityType) </p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescriptionLastTakenDate">PrescriptionLastTakenDate</a></span> (nc:DateType) </p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescriptionTreatmentReasonText">PrescriptionTreatmentReasonText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescriptionUseInstructionsText">PrescriptionUseInstructionsText</a></span>
(TextType) </p>

<p>nc:<b>Drug</b> (nc:DrugType) </p>

<p style='margin-left:.5in'><b>Definition: </b>A legal or illegal substance that can be used as a
medicine or a narcotic.</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADEAClassScheduleAbstract">DEAClassScheduleAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADrugCoverageExceptionReasonText">DrugCoverageExceptionReasonText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADrugDaysSupplyQuantity">DrugDaysSupplyQuantity</a></span>
(QuantityType)</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADrugStrengthText">DrugStrengthText</a></span>
(TextType)</p>

<p>nc:<b>DrugDispensedQuantity</b>
(nc:QuantityType) </p>

<p style='margin-left:.5in'><b>Definition: </b>A total count of a drug dispensed to a patient.</p>

<p>hs:<b>PrescriptionSoldDate</b>
(nc:DateType) </p>

<p style='margin-left:.5in'><b>Definition: </b>A date on which a prescription received by a patient or
a patient's agent.</p>

<p>hs:<b>StateLicenseIdentification</b>
(nc:IdentificationType)</p>

<p style='margin-left:.5in'><b>Definition: </b>An identification of a license giving an organization
the right to prescribe drugs for patients.</p>

<p>hs:<b>MentalHealthHospitalizationHistoryDescriptionText</b>
(nc:TextType) </p>

<p style='margin-left:.5in'><b>Definition: </b>A description of past in-patient hospitalizations due
to mental health issues.</p>

<p>hs:<b>PatientNameOfAnimalText</b>
(nc:TextType) </p>

<p style='margin-left:.5in'><b>Definition: </b>A name of a non-human patient.</p>

<p>hs:<b>SpeciesAbstract</b>
(abstract) This
term has synonym entries</p>

<p style='margin-left:.5in'><b>Definition: </b>A data concept for a kind of species, to differentiate
humans from other potential patients.</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ASpeciesCode">SpeciesCode</a></span>
(SpeciesCodeType)</p>

<p style='margin-left:.5in'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ASpeciesText">SpeciesText</a></span>
(TextType)</p>

<p>hs:<b>SpeciesText</b> (nc:TextType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A kind of species, to differentiate humans from other
potential patients.</p>

<p>hs:<b>SpeciesCode</b> (hs:SpeciesCodeType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A kind of species, to differentiate humans from other
potential patients.</p>

<p>hs:<b><span>HealthDetails
</span></b><span style='mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:
"Times New Roman";mso-fareast-language:EN-US;mso-bidi-font-weight:bold'>(hs:HealthDetailsType)
</span></p>

<p style='mso-margin-top-alt:auto;margin-left:.5in;mso-outline-level:
2'><b>Definition: </b>A person's mental
health, substance abuse, medical health and medications.<span style='mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";mso-fareast-language:
EN-US;mso-bidi-font-weight:bold'></span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'>hs:<u><span
style='color:blue;mso-fareast-language:EN-US'><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicalHealthDetails"><span
style='color:blue'>MedicalHealthDetails</span></a></span></u><span> (hs:MedicalHealthDetailsType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'>hs:<u><span
style='color:blue;mso-fareast-language:EN-US'><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicationUse"><span
style='color:blue'>MedicationUse</span></a></span></u><span style='mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";mso-fareast-language:
EN-US'> (hs:MedicationUseType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'>hs:<u><span
style='color:blue;mso-fareast-language:EN-US'><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMentalHealthDetails"><span
style='color:blue'>MentalHealthDetails</span></a></span></u><span> (hs:MentalHealthDetailsType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'>hs:<u><span
style='color:blue;mso-fareast-language:EN-US'><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescription"><span
style='color:blue'>Prescription</span></a></span></u><span style='mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";mso-fareast-language:
EN-US'> (hs:PrescriptionType) </span></p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt;line-height:normal'>hs:<u><span
style='color:blue;mso-fareast-language:EN-US'><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ASubstanceAbuseDetails"><span
style='color:blue'>SubstanceAbuseDetails</span></a></span></u><span> (hs:SubstanceAbuseDetailsType)</span></p>

<p style='margin-left:.5in'>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicalHealthDetails">MedicalHealthDetails</a></b></span> (hs:MedicalHealthDetailsType)</p>

<p style='margin-left:1.0in'><b>Definition: </b>A person's medical health details.</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ADentalHistoryDescriptionText">DentalHistoryDescriptionText</a></span>
(TextType)</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AHearingDisabilityIndicator">HearingDisabilityIndicator</a></span>
(boolean)</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicalHistoryDescriptionText">MedicalHistoryDescriptionText</a></span>
(TextType)</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AOtherPhysicalDisabilityIndicator">OtherPhysicalDisabilityIndicator</a></span>
(boolean)</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AVisualDisabilityIndicator">VisualDisabilityIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicationUse">MedicationUse</a></b></span> (hs:MedicationUseType)</p>

<p style='margin-left:1.0in'><b>Definition</b>: A set of details about medication use for an
individual.</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ADispenser">Dispenser</a></span> (nc:EntityType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedication">Medication</a></span> (nc:DrugType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicationDispensingDate">MedicationDispensingDate</a></span> (nc:DateType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicationDoseMeasure">MedicationDoseMeasure</a></span> (nc:MeasureType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicationLastTakenDate">MedicationLastTakenDate</a></span> (nc:DateType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicationTreatmentReasonText">MedicationTreatmentReasonText</a></span>
(TextType)</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMedicationUseFrequencyAbstract">MedicationUseFrequencyAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescriber">Prescriber</a></span> (nc:EntityType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescriptionUseInstructionsText">PrescriptionUseInstructionsText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMentalHealthDetails">MentalHealthDetails</a></b></span> (hs:MentalHealthDetailsType) </p>

<p style='margin-left:1.0in'><b>Definition</b>: An element that contains information about a person's
mental health including social history and psychosocial information.</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ADevelopmentalDisabilityCategoryAbstract">DevelopmentalDisabilityCategoryAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMentalHealthHistoryDescriptionText">MentalHealthHistoryDescriptionText</a></span>
(TextType)</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMentalHealthHospitalizationHistoryDescriptionText">MentalHealthHospitalizationHistoryDescriptionText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescription">Prescription</a></b></span> (hs:PrescriptionType) </p>

<p style='margin-left:1.0in'><b>Definition</b>: A set of written instructions from a physician or
dentist to a druggist concerning the form and dosage of a drug to be issued to
a given patient</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADrug">Drug</a></span> (nc:DrugType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ADispenser">Dispenser</a></span> (nc:EntityType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescriber">Prescriber</a></span> (nc:EntityType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescriptionLastTakenDate">PrescriptionLastTakenDate</a></span> (nc:DateType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescriptionTreatmentReasonText">PrescriptionTreatmentReasonText</a></span>
(TextType)</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APrescriptionUseInstructionsText">PrescriptionUseInstructionsText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ASubstanceAbuseDetails">SubstanceAbuseDetails</a></b></span> (hs:SubstanceAbuseDetailsType) </p>

<p style='margin-left:.5in'><b>Definition</b>: A set of details about a person's substance abuse.</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ASubstance">Substance</a></span> (nc:SubstanceType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ADrugUseAgeMeasure">DrugUseAgeMeasure</a></span> (nc:TimeMeasureType) </p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ADrugUseFrequencyAbstract">DrugUseFrequencyAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ADrugUseIndicator">DrugUseIndicator</a></span>
(boolean)</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3APreferredDrugName">PreferredDrugName</a></span>
(TextType)</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ASubstanceAbuseCurrentDescriptionText">SubstanceAbuseCurrentDescriptionText</a></span>
(TextType)</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.0in;margin-bottom:.0001pt'>hs:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ASubstanceAbusePastDescriptionText">SubstanceAbusePastDescriptionText</a></span>
(TextType)</p>

<p>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMentalHealthHistoryDescriptionText">MentalHealthHistoryDescriptionText</a></b></span>
(TextType) </p>

<p style='margin-left:.5in'><b>Definition</b>:
A description of known mental health history, including behavioral health and
psychological or psychiatric assessments, diagnoses, or treatments.</p>

<p>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AMentalHealthHospitalizationHistoryDescriptionText">MentalHealthHospitalizationHistoryDescriptionText</a></b></span>
(TextType) </p>

<p style='margin-left:.5in'><b>Definition:</b> A description of past in-patient hospitalizations due to mental
health issues.</p>

<p>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AClinicalObservation">ClinicalObservation</a></b></span>(hs:ClinicalObservationType)</p>

<p style='margin-left:.5in'><b>Definition</b>: A clinical observation of a person.</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AObservationCategoryText">ObservationCategoryText</a></span>
(TextType)</p>

<p style='margin-top:0in;margin-right:0in;
margin-left:.5in;'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AObservationPrimaryIndicator">ObservationPrimaryIndicator</a></span>
(boolean)</p>

<p>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AHealthInsurance">HealthInsurance</a></b></span> (hs:HealthInsuranceType)</p>

<p style='margin-left:.5in'><b>Definition</b>: A health insurance policy.</p>

<p>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AHealthInsurancePolicyPrimaryInsuredFullName">HealthInsurancePolicyPrimaryInsuredFullName</a></b></span>
(PersonNameTextType)</p>

<p>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AProtectedHealthInformationIndicator">ProtectedHealthInformationIndicator</a></b></span>
(niem-xs:ban> </p>

<p style='margin-left:.5in'><b>Definition</b>: True if a piece of information is Protected Health
Information (PHI); false otherwise.</p>

<p>hs:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3ANPIIdentification">NPIIdentification</a></b></span> (nc:IdentificationType)</p>

<p style='margin-left:.5in'>Definition: An identification called the National Provider Identifier,
which includes a unique 10-digit identification number issued to health care
providers in the United States by the Centers for Medicare and Medicaid
Services (CMS).</p>

<p>j:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ASubjectIntakeConstraintDayQuantity">SubjectIntakeConstraintDayQuantity</a></b></span>
(nc:QuantityType)</p>

<p style='margin-left:.5in'><b><span>Definition: </span></b><span>A count of days that will
calculate how rapid the subject needs to go through intake with a provider
following referral date</span>.</p>

<p>hs:<b><a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AObservationCategoryText">ObservationCategoryText</a></b> (nc:TextType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A kind of an observation (e.g. a diagnosis, lab
results, allergy indications, etc.).</p>

## Immigration

<b> [N.B. The following "provider" element is <i>NOT</i> a healthcare element. I've included it as a warning.]</b>

<p>i:<b><a href="https://beta.movement.niem.gov/#/details?entityID=im%3AProvider">Provider</a></b> (nc:PersonType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A person who has another person as a dependent.</p>

## Infrastructure Protection

[None Defined]

## Intelligence

[None Defined]

## International Trade

[None Defined]

## Justice (157+61)

<p>[N.B. Justice has 61 MentalHealth elements defined that are
not documented here, yet.]</p>

<p><b>j:EMSAgency</b>
(nc:OrganizationType) </p>

<p style='margin-left:.5in'><b>Definition: </b>An EMS agency providing transport to medical facility
that receives patient.</p>

<p><b>j:CrashPersonEMSTransportation
</b>(j:CrashPersonEMSTransportationType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A transportation of the patient by the EMS unit to a
medical facility.</p>

<p style='margin-left:.5in'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AEMSAgency">EMSAgency</a></span> (nc:OrganizationType)</p>

<p><b>j:InjuredTransportationSourceAbstract
</b>(abstract) This term has synonym entries</p>

<p style='margin-left:.5in'><b>Definition: </b>A data concept for a type of transport to the medical
facility receiving the patient.</p>

<p style='margin-left:.5in'><span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AInjuredTransportationSourceCode">InjuredTransportationSourceCode</a></span>
(InjuredTransportationSourceCodeType)</p>

<p><b>j:InjuredTransportationSourceCode</b>
(mmucc:InjuredTransportationSourceCodeType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A type of transport to the medical facility receiving
the patient.</p>

<p><b>j:ProgramTitleText</b>
(nc:TextType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A title or name of a class or treatment program a
student or patient is participating in.</p>

<p><b>j:ProgramBehaviorText
</b>(nc:TextType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A description of the behavior of a student or patient
for a class or program.</p>

<p><b>j:ProgramAttendanceText</b>
(nc:TextType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A description of the attendance record of a student or
patient for a class or program.</p>

<p><b>j:ProgramResultantCertificationText</b>
(nc:TextType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A certification received as a result of a student or
patient completing a class or treatment program.</p>

<p><b>j:ProgramResultantCertificationExpirationDate</b>
(nc:DateType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A date when a
certification received as a result of a student or patient completing a class
or treatment program expires.</p>

<p><b>j:ProgramSatisfactoryCompletionIndicator</b>
(niem-xs:boolean)</p>

<p style='margin-left:.5in'><b>Definition: </b>True if a student or patient satisfactorily completed
the class or program; false if they did not complete the program or did not
complete it satisfactorily.</p>

<p><b>j:MentalHealthFunctionLevelScoreNumeric</b>
(nc:NumericType) </p>

<p style='margin-left:.5in'><b>Definition: </b>A number measuring the ability of the subject to
function and adapt to various problems in living. The Global Assessment of
Functioning (GAF) uses a 1-100 measurement scale with 10 and below representing
a persistent danger of self injury or hurting others.</p>

<p><b>j:TreatmentDiagnosisText</b>
(nc:TextType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A determining or analysis of the manner in which to
treat the cause or nature of a problem</p>

<p><b>j:
PersonDentalCharacteristicText</b> (nc:TextType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A visible problem or characteristic of a person's teeth.</p>

<p><b>j:PersonHearingProblemIndicator</b> (niem-xs:boolean)</p>

<p style='margin-left:.5in'><b>Definition:</b> True if a person has difficulty hearing; false otherwise.</p>

<p><b>j:DrugUseAssessmentYearsOfProblemUseQuantity</b> (nc:QuantityType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A number indicating the years the subject has had drug-related problems.</p>

<p>j: <b><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ASubjectDrugUseAssessment">SubjectDrugUseAssessment</a></b> (j:DrugUseAssessmentType)</p>

<p><b>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessment">DrugUseAssessment</a></span></b> (j:DrugUseAssessmentType)</p>

<p style='margin-left:.5in'><b>Definition: </b>An assessment process to determine a subject's past drug use and/or dependency.</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentDrugDependencyIndicator">DrugUseAssessmentDrugDependencyIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentDrugFreeDuration">DrugUseAssessmentDrugFreeDuration</a></span>
(duration)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentDrugTest">DrugUseAssessmentDrugTest</a></span> (j:DrugTestType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugTestCategoryAbstract">DrugTestCategoryAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugTestCategoryCode">DrugTestCategoryCode</a></span>
(DrugTestCategoryCodeType)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugTestDrugSampleSizeQuantity">DrugTestDrugSampleSizeQuantity</a></span>
(QuantityType)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugTestDrugTestedCategoryAbstract">DrugTestDrugTestedCategoryAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugTestDrugTestedCategoryText">DrugTestDrugTestedCategoryText</a></span>
(TextType)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugTestResultAbstract">DrugTestResultAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugTestResultCode">DrugTestResultCode</a></span>
(DrugTestResultCodeType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentDrugTreatmentProgramsAttendedQuantity">DrugUseAssessmentDrugTreatmentProgramsAttendedQuantity</a></span>
(QuantityType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentFirstUsedAgeQuantity">DrugUseAssessmentFirstUsedAgeQuantity</a></span>
(QuantityType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentInPrisonDrugTreatmentProgramsAttendedQuantity">DrugUseAssessmentInPrisonDrugTreatmentProgramsAttendedQuantity</a></span>
(QuantityType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentLastDrugTestDate">DrugUseAssessmentLastDrugTestDate</a></span> (nc:DateType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentPrimaryDrugOfChoiceAbstract">DrugUseAssessmentPrimaryDrugOfChoiceAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentPrimaryDrugOfChoiceText">DrugUseAssessmentPrimaryDrugOfChoiceText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentRelapseTriggerText">DrugUseAssessmentRelapseTriggerText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentSecondaryDrugOfChoiceAbstract">DrugUseAssessmentSecondaryDrugOfChoiceAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentSecondaryDrugOfChoiceText">DrugUseAssessmentSecondaryDrOfChoiceText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentUsedNeedleIndicator">DrugUseAssessmentUsedNeedleIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseAssessmentYearsOfProblemUseQuantity">DrugUseAssessmentYearsOfProblemUseQuantity</a></span>
(QuantityType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ADrugUseDrug">DrugUseDrug</a></span> (nc:DrugType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADEAClassScheduleAbstract">DEAClassScheduleAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADrugCoverageExceptionReasonText">DrugCoverageExceptionReasonText</a></span>
(TextType)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADrugDaysSupplyQuantity">DrugDaysSupplyQuantity</a></span>
(QuantityType)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADrugStrengthText">DrugStrengthText</a></span>
(TextType)</p>

<p>j:<b><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AAlcoholUseAssessment">AlcoholUseAssessment</a></b> (j:AlcoholUseAssessmentType)</p>

<p style='margin-left:.5in'><b>Definition: </b>An assessment specific to a subject's alcohol use.</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AAlcoholUseAssessmentAlcoholAbuseFirstAgeUsedNumeric">AlcoholUseAssessmentAlcoholAbuseFirstAgeUsedNumeric</a></span>
(NumericType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AAlcoholUseAssessmentAlcoholAbuseLengthOfTreatmentNumeric">AlcoholUseAssessmentAlcoholAbuseLengthOfTreatmentNumeric</a></span>
(NumericType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AAlcoholUseAssessmentAlcoholAbuseMaximumDurationAbstainedNumeric">AlcoholUseAssessmentAlcoholAbuseMaximumDurationAbstainedNumeric</a></span>
(NumericType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AAlcoholUseAssessmentAlcoholConsumptionFrequencyText">AlcoholUseAssessmentAlcoholConsumptionFrequencyText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AAlcoholUseAssessmentAlcoholUseConsumptionQuantity">AlcoholUseAssessmentAlcoholUseConsumptionQuantity</a></span>
(QuantityType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AAlcoholUseAssessmentComment">AlcoholUseAssessmentComment</a></span> (nc:CommentType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AAlcoholUseAssessmentSummaryText">AlcoholUseAssessmentSummaryText</a></span>
(TextType)</p>

<p>j:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ASubjectAssessmentMentalHealthAssessment">SubjectAssessmentMentalHealthAssessment</a></b></span> (j:MentalHealthAssessmentType)</p>

<p>j:<span><b><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ASubjectAssessmentMentalHealthAssessment">SubjectMentalHealthAssessment</a></b></span> (j:MentalHealthAssessmentType)</p>

<p>j:<b><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessment">MentalHealthAssessment</a></b> (j:MentalHealthAssessmentType)</p>

<p style='margin-left:.5in'><b>Definition: </b>An activity of reviewing and assessing a subject's
mental health condition.</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentAbstractOfJudgmentDate">MentalHealthAssessmentAbstractOfJudgmentDate</a></span> (nc:DateType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentAbstractOfJudgmentReviewedIndicator">MentalHealthAssessmentAbstractOfJudgmentReviewedIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentCorrectionalCounselorIReviewDate">MentalHealthAssessmentCorrectionalCounselorIReviewDate</a></span> (nc:DateType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentDMHPsychiatricReportAuthorText">MentalHealthAssessmentDMHPsychiatricReportAuthorText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentDMHPsychiatricReportReviewDate">MentalHealthAssessmentDMHPsychiatricReportReviewDate</a></span> (nc:DateType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentDMHPsychiatricReportReviewedIndicator">MentalHealthAssessmentDMHPsychiatricReportReviewedIndicator</a></span>
(Boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentDate">MentalHealthAssessmentDate</a></span> (nc:DateType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentFactor">MentalHealthAssessmentFactor</a></span> (j:MentalHealthAssessmentFactorType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentFactorCategoryAbstract">MentalHealthAssessmentFactorCategoryAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentFactorCategoryText">MentalHealthAssessmentFactorCategoryText</a></span>
(TextType)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentFactorDetailsText">MentalHealthAssessmentFactorDetailsText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentLegalStatusSummaryReviewedIndicator">MentalHealthAssessmentLegalStatusSummaryReviewedIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentMentallyDisorderedOffenderIndicator">MentalHealthAssessmentMentallyDisorderedOffenderIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentPsychiatricReportAuthorText">MentalHealthAssessmentPsychiatricReportAuthorText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentPsychiatricReportDate">MentalHealthAssessmentPsychiatricReportDate</a></span> (nc:DateType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentPsychiatricReportReviewedIndicator">MentalHealthAssessmentPsychiatricReportReviewedIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentReferral">MentalHealthAssessmentReferral</a></span> (nc:ReferralType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AReferralActivity">ReferralActivity</a></span> (nc:ActivityType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AReferralEntity">ReferralEntity</a></span> (nc:EntityType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AReferralIssuer">ReferralIssuer</a></span> (nc:EntityType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AReferralItem">ReferralItem</a></span> (nc:ItemType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AReferralMandatoryIndicator">ReferralMandatoryIndicator</a></span>
(boolean)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AReferralPerson">ReferralPerson</a></span> (nc:PersonType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3AReferralSupervisor">ReferralSupervisor</a></span> (nc:EntityType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentReferralSexualViolentPredatorIndicator">MentalHealthAssessmentReferralSexualViolentPredatorIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentScreeningStaffMember">MentalHealthAssessmentScreeningStaffMember</a></span> (j:StaffMemberType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ARoleOfPerson">RoleOfPerson</a></span> (nc:PersonType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberAffiliatedPrimaryProgram">StaffMemberAffiliatedPrimaryProgram</a></span> (nc:ProgramType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberAppliedForce">StaffMemberAppliedForce</a></span> (j:ForceType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberAssignedWeapon">StaffMemberAssignedWeapon</a></span> (nc:WeaponType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberAssociatedSubject">StaffMemberAssociatedSubject</a></span> (j:SubjectType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberBadgeNumberID">StaffMemberBadgeNumberID</a></span>
(string)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberDisciplineText">StaffMemberDisciplineText</a></span>
(TextType)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberIdentification">StaffMemberIdentification</a></span> (nc:IdentificationType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberIncident">StaffMemberIncident</a></span> (nc:IncidentType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberJusticeSupervisionIndicator">StaffMemberJusticeSupervisionIndicator</a></span>
(boolean)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberKeyPositionIndicator">StaffMemberKeyPositionIndicator</a></span>
(boolean)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberLocation">StaffMemberLocation</a></span> (nc:LocationType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberQualification">StaffMemberQualification</a></span> (j:StaffMemberQualificationType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AStaffMemberStatus">StaffMemberStatus</a></span> (nc:StatusType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentServicesReceivedAbstract">MentalHealthAssessmentServicesReceivedAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentServicesReceivedText">MentalHealthAssessmentServicesReceivedText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentSubjectParticipatedIndicator">MentalHealthAssessmentSubjectParticipatedIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthAssessmentTestingRequiredIndicator">MentalHealthAssessmentTestingRequiredIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthCareLevelText">MentalHealthCareLevelText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthCertification">MentalHealthCertification</a></span> (j:CertificationType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ACertificationExpirationDate">CertificationExpirationDate</a></span> (nc:DateType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ACertificationExpirationReasonText">CertificationExpirationReasonText</a></span>
(TextType)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ACertificationIdentification">CertificationIdentification</a></span> (nc:IdentificationType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ACertificationIssuingAuthority">CertificationIssuingAuthority</a></span> (nc:EntityType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ACertificationName">CertificationName</a></span>
(ProperNameTextType)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ACertificationReviewDate">CertificationReviewDate</a></span> (nc:DateType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthOtherIndicator">MentalHealthOtherIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthStatusAbstract">MentalHealthStatusAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthStatusText">MentalHealthStatusText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHealthSubjectClearedIndicator">MentalHealthSubjectClearedIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMentalHeathAssessmentIndependentEvaluationRequestedIndicator">MentalHeathAssessmentIndependentEvaluationRequestedIndicator</a>
(boolean)</p>

<p>j:<a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ASubjectAssessmentMedicalAssessment">SubjectAssessmentMedicalAssessment</a> (j:MedicalAssessmentType)</p>

<p>j:<a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ASubjectMedicalAssessment">SubjectMedicalAssessment</a> (j:MedicalAssessmentType)</p>

<p>j:<b><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessment">MedicalAssessment</a></b> (j:MedicalAssessmentType) </p>

<p style='margin-left:.5in'><b>Definition: </b>An activity of reviewing and assessing a subject's medical condition.</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentClearanceAbstract">MedicalAssessmentClearanceAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentClearanceText">MedicalAssessmentClearanceText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentClearanceDentalText">MedicalAssessmentClearanceDentalText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentClearanceEligibilityAbstract">MedicalAssessmentClearanceEligibilityAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentClearanceEligibilityText">MedicalAssessmentClearanceEligibilityText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentClearancePregnantSubjectTrimesterNumeric">MedicalAssessmentClearancePregnantSubjectTrimesterNumeric</a></span>
(NumericType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentClearanceRestrictionsUrgentIndicator">MedicalAssessmentClearanceRestrictionsUrgentIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentClearanceSeizureLastDate">MedicalAssessmentClearanceSeizureLastDate</a></span> (nc:DateType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentComment">MedicalAssessmentComment</a></span> (nc:CommentType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentConsultationText">MedicalAssessmentConsultationText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentFunctionalText">MedicalAssessmentFunctionalText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentLevelOfCareAbstract">MedicalAssessmentLevelOfCareAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentLevelOfCareText">MedicalAssessmentLevelOfCareText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentMedicalRiskAbstract">MedicalAssessmentMedicalRiskAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentMedicalRiskText">MedicalAssessmentMedicalRiskText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentNursingCareLevelAbstract">MedicalAssessmentNursingCareLevelAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentNursingCareLevelText">MedicalAssessmentNursingCareLevelText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentPermanentIndicator">MedicalAssessmentPermanentIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentRequiredMedication">MedicalAssessmentRequiredMedication</a></span> (nc:DrugType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADEAClassScheduleAbstract">DEAClassScheduleAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADEAClassScheduleCode">DEAClassScheduleCode</a></span>
(DEAClassScheduleCodeCodeType)</p>

<p style='margin-left:1.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADEAClassScheduleText">DEAClassScheduleText</a></span>
(TextType)</p>

<p style='margin-left:1.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADrugCoverageExceptionReasonText">DrugCoverageExceptionReasonText</a></span>
(TextType)</p>

<p style='margin-left:1.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADrugDaysSupplyQuantity">DrugDaysSupplyQuantity</a></span>
(QuantityType)</p>

<p style='margin-left:1.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ADrugStrengthText">DrugStrengthText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentSpecializedServiceAbstract">MedicalAssessmentSpecializedServiceAbstract</a></span>
 (abstract) This term has synonym entries</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentSpecializedServiceText">MedicalAssessmentSpecializedServiceText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentTemporaryAssessmentExpirationDate">MedicalAssessmentTemporaryAssessmentExpirationDate</a></span> (nc:DateType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentTemporaryAssessmentReviewIndicator">MedicalAssessmentTemporaryAssessmentReviewIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentTemporaryIndicator">MedicalAssessmentTemporaryIndicator</a></span>
(boolean)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalAssessmentTuberculosisAlertText">MedicalAssessmentTuberculosisAlertText</a></span>
(TextType)</p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalReport">MedicalReport</a></span> (nc:DocumentType) </p>

<p style='margin-left:.5in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicalTreatment">MedicalTreatment</a></span> (nc:TreatmentType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3APerson">Person</a></span> (nc:PersonType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ATreatmentProvider">TreatmentProvider</a></span> (nc:EntityType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ATreatmentText">TreatmentText</a></span>
(TextType)</p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicationUseComment">MedicationUseComment</a></span> (nc:CommentType) </p>

<p style='margin-left:1.0in'>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AMedicationUseFrequencyNumeric">MedicationUseFrequencyNumeric</a></span>
(NumericType)</p>

<p>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3ACommunityLeaveDoctor">CommunityLeaveDoctor</a></span> (nc:PersonType)</p>

<p style='margin-left:.5in'><b>Definition: </b>A doctor specified as a part of a community leave.</p>

<p>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3AEvaluationProvider">EvaluationProvider</a></span> (nc:EntityType)</p>

<p style='margin-left:.5in'><b>Definition</b>: An entity who provides a service to a Person to
determine physical or mental state</p>

<p>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=nc%3ATreatmentProvider">TreatmentProvider</a></span> (nc:EntityType)</p>

<p style='margin-left:.5in'><b>Definition:</b> An entity that provides a treatment.</p>

<p>j:<a
href="https://beta.movement.niem.gov/#/details?entityID=hs%3AProviderEntity">ProviderEntity</a> (nc:EntityType)</p>

<p style='margin-left:.5in'><b>Definition:</b> A person or organization providing medical services to a person.</p>

<p>j:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=j%3APersonHospitalBirthIndicator">PersonHospitalBirthIndicator</a></span> (niem-xs:boolean)</p>

<p style='margin-left:.5in'><b>Definition:</b> True if a person was born in a hospital; false otherwise.</p>

## Maritime

[None Defined]

## Military Operations

[None Defined]

## Public Safety Canada (new)

[None Defined]

## Screening (1)

<p><b>scr:PersonMedicalConditionStatus</b> (scr:PersonMedicalConditionStatusType) </p>

<p style='margin-left:.5in'><b>Definition: </b>A status or name of the PERSONs health problem and physical limitation that an officer should be cautious of.</p>

<p style='margin-left:.5in'>scr:<span><a
href="https://beta.movement.niem.gov/#/details?entityID=scr%3APersonMedicalConditionStatusCodeAbstract">PersonMedicalConditionStatusCodeAbstract</a></span>
 (abstract) This term has synonym entries</p>

## Statistics (new)

[None Defined]

## Surface Transportation

[None Defined]

## USAID

[None Defined]
