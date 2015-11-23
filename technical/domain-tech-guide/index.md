---
title: NIEM Domain Technical Guide (DTG)
---


### Feedback:
- Some sections may need to be crossed referenced with [NIEM ConOps](https://reference.niem.gov/niem/guidance/concept-of-operations/) to avoid duplication.
- Some sections may need to be moved to [NIEM ConOps](https://reference.niem.gov/niem/guidance/concept-of-operations/) as a revision of that document. 
- Point of main effort to provide a NIEM Domain Technical Guide should have as a foundation, the implementation of the NIEM IEPD Life Cycle and conformance to the NDR and MPD Spec.

## 1. Introduction

- What is a NIEM *Domain*?
  - Community of Interest (CoI), organization, or Line of Business (LoB)?
- Why domains are important in NIEM.
  - Almost every NIEM participant is a member of at least one domain. 
  - NIEM scalability depends on distributed governance.
  - A domain at-large does not have to join NIEM or participate in its governance to use NIEM.
- Purpose of a Domain Technical Guide (DTG)
  - Primarily for the benefit of new or emerging domains.
  - Also a handy baseline reference for all domains and governance. 


## 2. Scope

- Focus is on technical aspects of domain management.
- Technical responsibilities of a domain.
- Building and maintaining domain model content.
- Participating in a release cycle, domain update, and other processes associated with the technical aspects of NIEM.
- Technical assistance, tools, templates, best practices, references, etc.
- HLVA refresh (summary/abridged).
- Processes for changing, maintaining, and managing NIEM.


## 3. Audience

- Technical personnel who support NIEM domains, particularly new domains. 
- NIEM working level governance, including NBAC, NTAC, domain technical POCs, PMO staff, and the lead developer. 


## 4. Terminology 

### Common NIEM terms
This section will define the most basic, common NIEM terms that are easy to understand.
Examples include:

- data component
- W3C XML Schema
- XML schema document
- instance XML document
- etc.

### More specific terms

Other more specific definitions will be defined the first time used in the appropriate section.
Examples may include:

- coherence
- funneling
- micro release
- domain reconciliation
- coordinated domain update
- core synchronization
- etc.


## 5. NIEM High-Level Version Architecture

This will be an abridged or summarized version of HLVA 3.0
[https://reference.niem.gov/niem/specification/high-level-version-architecture/3.0/](https://reference.niem.gov/niem/specification/high-level-version-architecture/3.0/)

- Domain independence
- Release optimization
- Types of reference content (major, minor, micro, domain update, Core supplement)
- Repositories (release, publication)
- Collaboration
- Concepts


## 6. Schema document namespacing and versioning

- Important to domains who submit content in XSD.
- Describe the correlation of target namespaces and XML schema documents.
- Each schema document is assigned a unique target namespace.
- Namespace Syntax.
- URIs (Uniform Resource Identifiers), syntax, purpose, etc.


## 7. NIEM release cycle

- Release types:  major, minor, micro, core supplement
- Scheduling:  standard timeframes, milestones, reviews, stages (pre-alpha, alpha, beta, release candidate)
- Harmonization (who, what, how, the process, concepts, etc.)
- Issue resolution (who, what, how, the process, voting, tracking, etc.)
- Input formats
  - XSD (XML Schema document)
  - XLS (MS Excel spreadsheet) Change Request (will be modified to include example and extra columns discussed in F2F NBAC):
	[https://reference.niem.gov/niem/resource/change-request/](https://reference.niem.gov/niem/resource/change-request/)
  - Simple text in email (for very minor changes)
- Technical assistance (who, what, how)


## 8. Domain update

- This was essentially the focus of the Domain Update Spec. 
- Domain independence and self-serviced
- Types of domain updates: incremental vs. replacement
- Coordinated domain updates
- Change content preparation and model management
- Metadata, lineage, change log


## 9. Conformance and quality assurance

- General and specific
- Verification (who, what, how, when, etc.)


## 10. Tools, templates, and other aids

- Schema Subset Generation Tool (SSGT):  [https://tools.niem.gov/niemtools/ssgt/index.iepd](https://tools.niem.gov/niemtools/ssgt/index.iepd)
- Conformance Testing Assistant (ConTesA):  [https://tools.niem.gov/contesa/](https://tools.niem.gov/contesa/)
- NDR Schematron rules:  [https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.zip](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.zip) (can be used with Oxygen or XMLSpy)
- Code List Schema Generator:  [https://tools.niem.gov/niemtools/codelist/index.iepd](https://tools.niem.gov/niemtools/codelist/index.iepd)
- Uniform Modeling Language (UML) profile and tools for NIEM 2.1
[http://www.omg.org/spec/NIEM-UML/1.0/](http://www.omg.org/spec/NIEM-UML/1.0/)
- Uniform Modeling Language (UML) profile and tools for NIEM 3.0+
[http://www.omg.org/spec/NIEM-UML/3.0/Beta1/](http://www.omg.org/spec/NIEM-UML/3.0/Beta1/) (currently requires OMG membership) 
- GitHub:  [https://niem.github.io/](https://niem.github.io/) (for content development)
- code list metadata master in NCCT:  [https://niem.gtri.gatech.edu/ncct/](https://gtri.gatech.edu/ncct/)
- harmonization master list in NCCT:  [https://niem.gtri.gatech.edu/ncct/](https://gtri.gatech.edu/ncct/)
- NIEM tool staging server (for beta tools; usually available during a release cycle): [https://niemstaging.ittl.gtri.org/niemtools](https://niemstaging.ittl.gtri.org/niemtools)
- NIEM home:  [https://niem.gov](https://niem.gov)
- Change request:  [https://reference.niem.gov/niem/resource/change-request/](https://reference.niem.gov/niem/resource/change-request/)
- NIEM releases:  [https://release.niem.gov/niem/3.2/](https://release.niem.gov/niem/3.2/)
(where __3__ represents major and __2__ minor series version numbers)


## 11. Roles and responsibilities

- Domain Technical POC
- Program Management Office (PMO) staff
- Lead developer (GTRI)
- NIEM Technical Architecture Committee (NTAC)
- NIEM Business Architecture Committee (NBAC)


## 12. Communications and workflow

- Email lists (who, what, purpose, how to enroll)
  - NTAC:  ntac@lists.gatech.edu
  - NBAC:  nbac@lists.gatech.edu
  - Request membership from pgmw-system@gtri.gatech.edu (requires PMO approval).
- Accounts (who, what, purpose, how to obtain account) 
  - NCCT:  [https://niem.gtri.gatech.edu/ncct/](https://niem.gtri.gatech.edu/ncct/) - request account from pgmw-system@gtri.gatech.edu 
  - Collaboration zones:  request account from PMO at [https://niem.gov](https://niem.gov/) 
  - ConTesA:  [https://tools.niem.gov/contesa/](https://tools.niem.gov/contesa/) - request account from [https://tools.niem.gov/contesa/registration](https://tools.niem.gov/contesa/registration)
  - GitHub:  request account from [https://github.com/](https://github.com/)
- Regular meetings (who, what, when, where, purpose)
  - NBAC meetings
  - NTAC meetings
  - PMO meetings
  - Joint NTAC/NBAC meetings
- Reviews (who, what, when, how, purpose)
- Online reference tool issues: pgmw-system@gtri.gatech.edu
- Questions, comments, recommendations on NIEM (purpose, process)
  - Public comments: niem-comments@lists.gatech.edu
  - NIEM SalesForce: information@niem.gov
  - NIEM SalesForce: [https://niem.gov/Pages/contact.aspx](https://niem.gov/Pages/contact.aspx)
  - NISS Helpdesk: nisshelp@ijis.com
  - NISS Helpdesk: [https://niss.custhelp.com/](https://niss.custhelp.com/)


## Appendix A - How to design and build NIEM domain model content

This section should be at the beginning of the document.  The suggestions in this section are the most critical factors that determine the value and benefits of a domain, selecting what data is sharable. 

1. Identify data requirements
- NIEM was primarily designed to share information across domains; however, consider both internal and external information sharing requirements.
- Identify information you must share outside your domain or other communities of interest.
- Who do you share your information with outside your domain? 
- Who from outside your domain shares their information with you (that you need)?
- Identify information you share within your domain.
- Identify or develop simple scenarios, and within those scenarios identify common use cases for sharing information.
- Examine existing database schemes, data dictionaries, XML schemas, flat files, paper/electronic forms, workflows, etc. for data requirements.  How the data could be or is currently being shared using other formats can provide insights as to what data is shared.
- Data dictionaries, glossaries, and authoritative sources should be captured.  There are many variances in data definitions already existent in databases and data transmissions. Harmonization of this data BEFORE creating a domain is a critical step.  Otherwise the domain will be “yet another set of definitions”.  Mapping current data definitions to the domain is also important so developers can trace back to existing data sources.  Semantic harmonization should be used.  The meaning of the data and its variance interpretations is important to understand.

2. Do not _boil the ocean_:
- Do not create NIEM data components for every possible contingency.
- Only model known information requirements that exist now.
- Do not build nice-to-have or even likely future data components.
- DO boil the ocean as part of the scenarios.  If you can, envision what the domain might look like in the future.  You can scale it back rather than going into repetitive release cycles that cause confusion.  Better to have a more robust domain upfront at least for key classes.  If the domain model is not robust, developers will invent their own, resulting in an unstable, ungoverned model.

3. Start small scale; grow the domain model through experience with domain updates and release inputs.
- Build a domain model that is representative of the future, not the past.  For example, include classes for privacy, data quality, traceability, and data tracking. 

4. Map data requirements to NIEM.
- Reuse existing data components where possible. 
- Identify missing requirements (gap analysis). 

5. Use gap analysis and create new NIEM data components:
- ONLY when needed. 
- Consistent with the NIEM NDR and releases (reference schemas). 

6. Clearly identify data components that will require future harmonization 
with Core (or with other domains if inputting a domain update).

7. Use reference materials to model various NIEM techniques (i.e., augmentation, association, role, references, metadata, abstract elements and substitution groups, type extension, type adapter, etc.):
- Existing release (i.e., reference) schemas [https://release.niem.gov/](https://release.niem.gov/). 
- Change request examples 
[https://reference.niem.gov/niem/resource/change-request/](https://reference.niem.gov/niem/resource/change-request/) 
- Developer Network patterns
[https://niem.github.io/developer-network/patterns/](https://niem.github.io/developer-network/patterns/)
- Tools [https://tools.niem.gov](https://tools.niem.gov/) e.g.,Schema Subset Generator, ConTesA, 
Code List Schema Generator, Migration Assistant, etc. 

8. During release cycle, provide initial input in conformant 
XML Schema document (XSD) or Change Request (XLS) format. 

9. IEPDs vs. Domains
- Domains contain the reusable building blocks for IEPDs; 
IEPDs are specialized final products (for information exchanges).
- Differences in purpose, scope, reusability, NDR rules.
- IEPD extensions are candidates for domain content, 
but each should be evaluated and potentially remodeled.
- Use IEPD repositories to share IEPDs.
- Example IEPD: Cursor-on-Target MilOps Future Namespace.
- IEPD versioning:  [https://niem.github.io/technical/iepd-versions/](https://niem.github.io/technical/iepd-versions/)

10. GTRI:
- Assists with conformance, quality, and modeling.
- Integrates inputs into the release or DU for your review.
- Can save you extra work and time if you make systemic errors; 
get preliminary inputs in early to get a review, feedback, and assistance.


## Appendix B - Questions to guide content modeling 

Questions to ask about metadata, semantics, and structure while modeling NIEM content.  These can help you decide what to model, how, and what NIEM structures to employ or consider. 


## Appendix C - NIEM Configuration Control Tool (NCCT)


## Appendix D - Guide to NIEM technical references

- Current NIEM references:  [https://reference.niem.gov/](https://reference.niem.gov/)
- NIEM archive of all references:  [https://reference.niem.gov/niem/](https://reference.niem.gov/niem/) 
- NIEM release packages:  [https://release.niem.gov/](https://release.niem.gov/)
- NIEM release raw files:  [https://release.niem.gov/niem/](https://release.niem.gov/niem/)
- NIEM domain updates and core supplements:  [https://publication.niem.gov/niem/](https://publication.niem.gov/niem/)
- NIEM online reference tools:  [https://tools.niem.gov/](https://tools.niem.gov/)
- NIEM Config Control Tool (NCCT):  [https://niem.gtri.gatech.edu/ncct/](https://niem.gtri.gatech.edu/ncct/)


## References

- HLVA: [https://reference.niem.gov/niem/specification/high-level-version-architecture/3.0/](https://reference.niem.gov/niem/specification/high-level-version-architecture/3.0/)
- NIEM 3.0 ZIP file with all domain updates and core supplements: [https://release.niem.gov/niem/3.0/du-cs-3.0.html](https://release.niem.gov/niem/3.0/du-cs-3.0.html)
- Conformance
- Naming and Design Rules (NDR)
- Conformance Targets Attribute Spec
- Code Lists Spec
- Model Package Description (MPD) Spec
- UML profile for NIEM
- Change request
- Wantlist schemas
- Model schemas
- NCCT User Guide

