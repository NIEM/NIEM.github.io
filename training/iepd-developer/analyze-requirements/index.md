---
title: Analyze Requirements
icon: fa-envelope-o
description: The analyze requirements phase is the next step you take in IEPD development.  
---

{{ page.description}}

{% include icon-list.html links=page.links %}

You have graphically defined your scenario, and now you need to define your business rules and requirements, which define the exchange as well as the expectations of the exchange.

## Business Rules

Business rules are specific qualifications for data that refer to how it should be structured (e.g., field length, constraints).

{:.example}
>
> A student’s enrollment status is not available or is unknown. The assumption is they are not enrolled, and an information-needed flag will be added by setting X element to the value of 1.

## Business Requirements

Business requirements are the drivers for an information exchange that are primarily operational or functional requirements.

{:.example}
>
> The verification service shall respond only to search requests issued by the client application, the Verification Information System (VIS).

Follow a formal process to define and validate business requirements and accurately document an information exchange:

1. Initiate the requirements process.
- Prepare and plan.
- Perform analysis.

1. Define the exchange requirements.
- Gather user requirements.
- Define security and privacy requirements.
- Specify exchange requirements.

1. Prepare requirements for design.
- Analyze requirements.
- Verify and validate requirements.

### Business Case Example

The exchange goal is to acquire the information in an immigrating traveler's passport. Make a list of the types of data available and what you want to include in the exchange.

### Create Effective Requirements

Results can vary between individuals and groups. Examples of good requirements could be the following:

#### Candidate Message Exchange Packages

- Traveler requests entry to country.
- Request from immigration to screening services for data on traveler.

#### Performance Requirements

Screening services returns data on traveler within seconds.

#### Reporting Requirements

Immigration receives daily reports on potential denials of entry.

#### Data Quality Requirements

The data that is processed should take into consideration the preceding requirements. For example, the data may consist of the following:

| Parent Data Item | Child Data Items | Notes |
| --- | --- | --- | --- |
| Name | GivenName<br>MiddleName<br>FamilyName | Do we want more than one middle name?<br>Is the order of Family Name and Given Name important? |
| Country of Origin |  | How many characters for country code? Determines the code list that may be used. |
| Issuing Authority |  |  |
| Birth Date | BirthCentury<br>BirthYear<br>BirthMonth<br>BirthDay | Order? Dd Mmmm Yyyy? |
| Sex |  | Assume F or M? |
