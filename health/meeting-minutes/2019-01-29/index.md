---
title: Meeting Minutes – January 29, 2019
short: January 29, 2019
description: General Update; Protecting Health Information
---

- TOC
{:toc .toc}

## NIEM COI Meeting

**Host**:  Cait Ryan

**Presenters**:

- Brian Handspicker
- Marco Demartin
- Regina Beach

**Topic**: NIEM COI

**Length**:  1:00:05 minutes

**Venue**: Virtual

## Agenda

- Welcome (Cait Ryan)
- General Update (Cait Ryan and Brian Handspicker)
  - Activities since August 2018
  - Lessons Learned
  - Course Correction and Proposed Activities
- The Issue of Protecting Health Information (Brian Handspicker, Regina Beach, and Marco Demartin)
  - Recap of 102 Document
  - Review LRP Spreadsheet
- General Discussion / Q&A (All)
- Closing Remarks (Cait Ryan)

## Slides

### Lesson Learned

Cait Ryan

- There is no advantage to modeling a NIEM Health Domain from scratch; Map NIEM Health to HIE standards
  - After more than one year, this is something the NIEM team still feels strongly about
  - The focus remains on mapping to existing HIE standards
- NIEM information exchanges should generally not contain Protected Health Information (PHI) until HIPAA/HITECH privacy, consent, and authorization requirements are satisfied by NIEM
  - This was agreed upon during a look-back prior to the NIEM face-to-face meeting in November 2018
  - There is currently no mechanism in place for consent and authorization
    - Exception: "break-the-glass” scenarios like Public Health and use cases
    - FHA has been asked by the NIEM Business and Technical Archetype Council to participate in a future NIEM Privacy and Security Tiger Team around privacy and security for NIEM
- Registry is critical for all NIEM domains to track provenance
  - This is not just for NIEM Health as it could be applied for all domains
  - Some of the same concern were raised during the face-to-face meeting as well as during monthly participation in end-back calls
    - There is currently no way to identify who is using this information and for what types of purposes, which makes the mapping exercise difficult

### NIEM Face2Face

Cait Ryan

- Attended NIEM Face2Face meeting in November 2018
- Action Items:
  - Work with the NIEM Technical Architects Committee (NTAC) on possible tiger team that will examine authorization, consent, privacy, and security for NIEM
    - This includes feedback and subject matter expertise
    - This includes information regarding if and when a tiger team is produced and NIEM starts participating in that
  - Provide input to NTAC on NIEM Registry*
    - This includes feedback and subject matter expertise
    - Explore what a NIEM registry looks and feels like
- NIEM Health Follow Up:
  - In motion – Talking with the Coast Guard regarding how they handle neurotoxin reports
    - Would like someone from the Coast Guard to present to the NIEM COI
  - ACF, regarding HIPAA and Privacy Concerns,
  - Justice, regarding Opioid Use Cases

### Course Correction: The Big Picture

Cait Ryan

- Steady decline in NIEM Community of Interest (COI) Engagement:
  - From 62 to 11 participants between October 2017 and August 2018
    - Currently back up to 22 participants
  - Received two agency responses/feedback on the tutorials
    - All feedback from the NIEM COI is invited, positive or negative
    - Would like the NIEM COI to be more interactive
    - Cait suggests NIEM COI invite people from different domains as well as others who are outside of the Community to discuss scenarios participants have expressed to be interesting, for instance, regarding use cases
- Difficulty with Use Case Identification
  - Extensive number of Public Health use cases
  - Working to identify suitable use cases and stakeholder
    - Having difficulty identifying high-level, top-priority use cases
    - Multiple stakeholders make it difficult to determine which cases would best be leveraged
    - Those who have solved use cases are invited "to the table” to get the discussions going and foster relationships and work-coordination

### Proposed Activities for FY'19

Cait Ryan

- FHA is proceeding in a deliberate, methodic manner to support the NIEM Community
  - Refocused NIEM Health 201 tutorial with and authoritative canonical set of health elements
    - After some changes/reworking,  the 101, 102, and 201 tutorials will still be provided but for now the refocus is on 201
    - NIEM Health element inventory
    - Mapping of 2018 US Core Data for Interoperability (USCDI)
    - Map to Fast Healthcare Interoperability Resources (FHIR)
  - Reformat the COI to facilitate collaboration
    - Presentations by NIEM Health COI demonstrating the ways they've leveraged NIEM to solve use case
    - Presentations by HIT Community educating the NIEM Community of existing initiatives with overlapping interests
    - Cait invites participants to share about scenarios and areas of interest, and to be part of a presentation to this forum – the schedule can be made flexible to accommodate

### Existing NIEM Health-related Elements

Brian Handspicker

- ~327 existing NIEM Health-related elements defined across several domains:
  - NIEM Core (~62)
  - Biometrics (2)
  - Emergency Management (10)
  - Human Services (~90)
  - Justice (~161)
  - Screening (2)
- Few defined based on HL7 Health IT standards, or did not reflect the entirety of HL7 standards for the element being defined in NIEM
- This made it challenging to map cleanly between NIEM IEPDs and HL7 messages

### NIEM Health Modeling – USCDI, FHIM, NIEM and Health IT Standards

Brian Handspicker

- US Core Date Interoperability (USCDI) requirements:
  - USCDI structured into annual incremental requirement
    - Expanding annually from 2018, 2019, 202, 2021
  - ~600 Health standards requirements in USCDI '18
  - USCDI '19 aligns with Meaningful Use Common requirements (MU Common) and Continuity of Care docs
    - MU Common elements are supported by HL7 through the Consolidated Care Document Architecture (C-CDA) and Fast Healthcare Interoperability Resources (FHIR)
  - Most existing NIEM healthcare elements are not conformant with health IT standards
    - The challenge is to map existing NIEM Healthcare elements to the healthcare standards or, when that cannot be done, define the minimum subset of healthcare elements for NIEM so they align with healthcare standards
  - FHIM provides a common authoritative source of health standards information modeling – a model Rosetta Stone
    - FHIM is being used as a tool, as opposed to a solution, to help with the mapping

### Cross-Technology Modeling using Authoritative Sources

Brian Handspicker

- Mapping is done by making use of NIEM modeling and methodology processes
  - Created a spreadsheet that maps requirements a scenario has for elements
  - Identify appropriate standards-based equivalent elements using FHIM as a tool for mapping between various HL7 standards
  - Identify NIEM elements that might map to the HL7 standards and if found, using the existing NIEM element. If not, a new NIEM element is defined and type that corresponds with the standards
- Determine, identify, list, and reference source element and source definition which must be consistent with one another
- Determine, identify, list, and reference corresponding FHIM Class Qualified names, property name, property documentation, and data type
- Identify, list, and reference corresponding NIEM, element definition, and element type
- Look up corresponding FHIR and HL7 value set bindings

### Upcoming COI Meetings

Cait Ryan

- February 19, 2019
  - The Prescription Monitoring Information eXchange (PMIX), a NIEM-based Standard
    - Presenter – Jean Hall, PMIX
- March 1029 (TBD)
  - Canadian Public Safety; Privacy and Security
    - Presenter – Vijay Mehra, KYM Advisors
- April 2019 (TBD)
  - The Patient Unified Lookup System for Emergencies (PULSE)
    - Presenter – Marianne Yeager, The Sequoia Project
- Cait encourages participant to invite their colleagues

### Care to Share?

Cait Ryan

- Participants are encouraged to share their success stories with the group
- Participants are encouraged to mention use cases they'd like to discuss and/or explore
- Participants are asked if there are Health IT initiatives they would like to invite as presenters
- Contact information is shared
  - Cait Ryan – <cryan@irishealthsolutions.com>
  - Brian Handspicker – <bhandspicker@irishealthsolutions.com>

### The Issue of Protecting Health Information

Bryan Handspicker, Regina Beach, and Marco Demartin

- Three tutorial documents were developed over the last year
  - 101 – An introduction to Health Information Exchange (HIE) providing a NIEM COI-focused explanation of the health IT ecosystem, laws, regulations, and standards
  - 102 – An introduction to Security and Privacy of Protected Healthcare Information (PHI) discussing HIPAA and Privacy and Security of PHI
  - 201 – Architecting NIEM IEPDs using Health Information Models (HIM) providing guidance for identifying health terminologies, values, and code sets
    - Use is made of the Federal Health Information Model (FHIM) as a tool as part of the NIEM IEPD lifecycle

### NIEM Health 102

Bryan Handspicker, Regina Beach, and Marco Demartin

- Privacy and security content were separated out from NIEM Health 101
- By the end of this tutorial, participants will understand the privacy and security concerns with respect to HIPAA and be able to identify:
  - What is PHI
  - Privacy rule
  - Security rule
  - Omnibus
- FISMA
- HITECH
- HIT/HIE Security and Privacy Standards
- NIEM Health Security and Privacy Challenges

### HIPAA: Examples of PHI

Bryan Handspicker, Regina Beach, and Marco Demartin

- Much of the focus of HIPAA is on protecting identity information
- Healthcare information includes medical information as well as personal demographic information that someone could use to correlate to determine a condition a person may have

### Health 102: Security and Privacy Timeline

Bryan Handspicker, Regina Beach, and Marco Demartin

- There are multiple laws, regulations, defined policies, and rules across Federal and State government that strive to protect individuals
- The challenge is determining which policies and laws apply for the security and privacy circumstance
- To help better understand the intricacies of protecting health information, Regina Beach (FHA) and Marco Demartin (FHA) produced a laws, regulations, and policies spreadsheet for security and privacy

### Laws, Regulations, and Policies Mapping to Standards (slide 1)

Bryan Handspicker, Regina Beach, and Marco Demartin

- The current spreadsheet includes multiple tabs debuting the original 23 standards as identified by the FHA Standards Workgroup
- The standards were reviewed to determine what content should be collected or filter
- The spreadsheet includes acronym definition for any acronym used in the standards
- Also created was a cross-reference load sheet that developers can use

### Laws, Regulations, and Policies Mapping to Standards (slide 2)

Bryan Handspicker, Regina Beach, and Marco Demartin

- The slide 2 spreadsheet contains 1,183 rows, 83 rows, and 45 columns with more than 7,000 cross-references and various select and filtering options
- The spreadsheet was compiled using public information and includes accompanying logging details as well as cross references between all documents
- Standards and their relation to different types of security as noted

### Laws, Regulations, and Policies Mapping to Standards (slide 3)

Bryan Handspicker, Regina Beach, and Marco Demartin

- This slide represents cyber security listings

### LRP Mapping to Cyber Security and Healthcare Standards Spreadsheet Content (slide 1)

Bryan Handspicker, Regina Beach, and Marco Demartin

- The spreadsheet is divided in to three areas
- Standards Columns contains all information pertaining to the classification
  - Publication
  - Title
  - Description
  - Date published
  - Date withdrawn
    - Date the standard was withdrawn (or retired)
  - URL
    - Select URL in real-time to view the publication and references
  - Future
  - Source
  - Type of Standard
  - Status of the Standard
  - Original List
- Standard Cross Reference
  - Authority
    - Pertains to Executive Order, a specific law, or US code
  - Applicable
  - Standard
- Filter Categories
  - CYBER
  - FEDRAMP
  - Cloud
  - HITECH
  - HIPAA Security and Privacy
    - Represents the current Security and Privacy Standard
  - HIPAA Security
    - Represents the original Security Standard
  - HIPAA Privacy
    - Represents the original Privacy Standard
  - Common rule
    - Includes organizations that are members of the Common Rule

### LRP Mapping to Cyber Security and Healthcare Standards Spreadsheet Content (slide 2)

Bryan Handspicker, Regina Beach, and Marco Demartin

- Security filters categories taken from the NIST website regarding their classification of security standards for security purposes and what they support
- Key categories of security planning purpose are covered:
  - Access Control
  - Awareness & Training
  - Configuration Management
  - Contingency Planning
  - Identification & Authentication
  - Incidence Response
  - Maintenance
  - Media Protection
  - Personnel Security
  - Physical & Environmental Protection
  - Planning
  - Program Management
  - Risk Assessment & Authorization
  - System & Communication Protection
  - System & Information Integrity
  - System & Services Acquisition

### Use for the Cybersecurity/Healthcare Standards Cross Reference Spreadsheet

Bryan Handspicker, Regina Beach, and Marco Demartin

- Answers questions such as:
  - What cybersecurity laws and standards are required to Implement Identification & Authentication?
  - What agencies follow the Common Rile for Protection of Human Research Subjects?
  - What standards do agency publications reference?
  - What standards address mobile technology?
  - Show timeline of laws, regulations, and policies (LRP), public and private industry standards
  - What is the status of cybersecurity frameworks?

### LRPs Total Counts

Bryan Handspicker, Regina Beach, and Marco Demartin

- This spreadsheet includes Executive Orders, bills, US Code, Federal Register, and publications
- The slide shows items according to the classification of what they are, such as a bill, guided law, regulation so the user can generate different types of reports based on the classification of the standard

### ONC Security Frameworks Analysis Workgroup Timeline

Bryan Handspicker, Regina Beach, and Marco Demartin

- An original timeline of the standards identified by the FHA Standards Workgroup
- A timeline or period can be selected as can publications within that/those timeframes

### Most Referenced

Bryan Handspicker, Regina Beach, and Marco Demartin

- Regina provides a listing of standards that are reference the most
- SP 800-53r4 is the most referenced standard

### Health and Agency Specific

Bryan Handspicker, Regina Beach, and Marco Demartin

- This spreadsheet reflects a listing of the Health and Agency Specific standards for cybersecurity
- Indicates which one's support cybersecurity classifications identified by NIST

### Status

Bryan Handspicker, Regina Beach, and Marco Demartin

- Completed initial review of the original 23 publications, reference document, and first draft spreadsheet on September 17, 2018 with the following tabs:
  - Original List
  - Definition of column headers
  - Acronyms
  - LRP Details
  - Cross Reference (load file for MS access)
- Current work:
  - Cleanup of standard cross references
  - Compare content with ISA
  - Add other Technical Frameworks
  - Decide the best way to publish and maintain the tool
  - Identification of visualization requirements
- Marco Demartin suggests showing examples of the spreadsheet other than what was reflected during the PowerPoint presentation
  - Show one example of the policy and how it I referenced in the different columns
  - Marco suggests showing one of the most referenced policies as the example
- Regina shows an example, going from pull-down to pull-down, of standard 800-53 (Recommended Security Controls for Federal Information Systems) as well as the current 800-53r4 and various other standards information notations and relationships

### COI: Next Up

Cait Ryan

- February 19 at 2:00 PM ET
  - PMIX a NIEM Based Standard
    - Presenter – Jean Hall, PMIX
- The Prescription Monitoring Information Exchange (PMIX) National Architecture enables interoperability between systems PDMPs use for interstate exchange of PDMP data
- PMIX got it's start with NIEM and has since evolved into its own program
- Topics include:
  - Prescription Drug Monitoring Program
  - NIEM Exchanges
  - Privacy and Security of Health Information
- Participants are encouraged to invite their colleagues

Thanks for Coming
Cait Ryan
- Contact information is shared
  - Cait Ryan – <cryan@irishealthsolutions.com>
  - Brian Handspicker – <bhandspicker@irishealthsolutions.com>
- Participant asks if the spreadsheet can be share to which  Regina Beach affirms but advises that the spreadsheet is in draft form
- Regina shares her contact information, <rbeach@irishealthsolutions.com>
- Cait confirms she will reply to those invited to the meeting with Regina's contact information
- Marco reminds that the spreadsheet is a work in progress
  - Once the spreadsheet is officially released it will be available on the ONC website

## ACTION ITEMS

1. Work with the NIEM Technical Architects Committee (NTAC) on possible tiger team that will examine authorization, consent, privacy, and security for NIEM
2. Provide input to NTAC on NIEM Registry*
   - Explore what a NIEM registry looks and feels like
3. Find someone from the Coast Guard to present to the NIEM community
