---
title: Analyze Requirements
short: Analyze Requirements
icon: fa-envelope-o
description: The analyze requirements phase is the next step in IEPD development.  
---

{{ page.description }}

{% include icon-list.html links=page.links %}

You graphically defined your scenario. Now you need to define your business rules and requirements, which define the exchange as well as the expectations of the exchange.

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
- Perform an analysis.

1. Define the exchange requirements.
- Gather user requirements.
- Define security and privacy requirements.
- Specify exchange requirements.

1. Prepare requirements for design.
- Analyze requirements.
- Verify and validate requirements.

Refer to the detailed [business case example](/training/iepd-developer/analyze-requirements) in Training.