---
title: Analyze Requirements
short: Analyze Requirements
icon: fa-envelope-o
description: Further elaborate on the information exchange scenario to understand and document the data requirements and business rules.
---

{{ page.description }}

{:toc}
- TOC

After planning out the scenario for the information exchange at a higher level, the next phase involves analyzing the exchange requirements at a more detailed level.  This includes capturing requirements for the data that will appear in the exchange, constraints, and other operational and functional requirements.

## Data requirements

Compile as much information as possible about the data that is to be shared by the exchange.  This includes documenting field names, data types, definitions, cardinality, and code sets in current exchanges or data sources.  New data requirements and planned modifications to existing data fields should be captured as well.

Two common ways of capturing this kind of information are via spreadsheets and UML diagrams.

## Business rules

Business rules are specific qualifications for data that refer to how it should be structured (e.g., field length, constraints).

{:.example}
> A student's enrollment status is not available or is unknown. The assumption is they are not enrolled, and an information-needed flag will be added by setting X element to the value of 1.

## Other business requirements

Data requirements are the drivers for an information exchange that are primarily operational or functional requirements.

{:.example}
>
> The verification service shall respond only to search requests issued by the client application, the Verification Information System (VIS).

Follow a formal process to define and validate business requirements and accurately document an information exchange:

1. Initiate the requirements process.
- Prepare and plan.
- Perform an analysis.

1. Define the exchange requirements.
- Gather user requirements.
- Define security and privacy requirements.
- Specify exchange requirements.

1. Prepare requirements for design.
- Analyze requirements.
- Verify and validate requirements.
