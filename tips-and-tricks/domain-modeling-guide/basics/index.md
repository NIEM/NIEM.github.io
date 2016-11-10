---
title: Technical basics
---
## Technical fundamentals of NIEM

### 5.1 NIEM High-Level Version Architecture (HLVA)

The [NIEM HLVA 3.0](https://reference.niem.gov/niem/specification/high-level-version-architecture/3.0/) identifies processes, artifacts, governance responsibilities and how they interact to produce new releases of and updates to the NIEM model. The HLVA discusses issues with inherently conflicting tradeoffs including (but not limited to):

- Timeliness vs. stability
- Domain autonomy vs. interoperability
- Ease for information exchange developers vs. ease for domain developers

Under PMO direction and with technical assistance from the lead developer, the NBAC, NTAC, and domains execute NIEM governance at the operational level. Practicing the HLVA has demonstrated the following results:

- There will be reliable and consistent schedules for activities that produce a NIEM major or minor release ensuring that activity participants know the work timelines and when their input is due, and the NIEM users can plan for release dates.
- Between regular major and minor release cycles, any domain may independently publish updates on its own timeline and make them available for immediate use (with the knowledge that their changes may impact other domains that extend or reuse their data components). 
- Domain updates are incorporated into the next NIEM release. So, periodic releases remove negative impacts, inconsistencies, or incoherence resulting from independent domain updates. 
- Information exchange developers are provided with a NIEM release, which is an updated schema document set that is coherent, for increased usability.
- A specific, concrete path exists for domains to feed input into NBAC's update, core synchronization, and harmonization processes, for inclusion in a future NIEM release. Domain, NBAC, and NTAC work on new content and changes is more evenly spread over time periods between release cycles instead of intensifying them. 
- All changes are visible. Each namespace URI is used for exactly one version of a schema document, and any changes to a schema result in a new namespace URI. 
- Change logs support descriptions of changes made to each namespace.




----
- Domain independence
- Release optimization
- Types of reference content (major, minor, micro, domain update, core supplement)
- Repositories (release, publication)
- Collaboration

### 5.2 Schema document namespacing and versioning

- Important to domains who submit content in XSD.
- Describe the correlation of target namespaces and XML schema documents.
- Each schema document is assigned a unique target namespace.
- Namespace Syntax.
- URIs (Uniform Resource Identifiers), syntax, purpose, etc.

### 5.3 NIEM release cycle

- Release types:  major, minor, micro, core supplement
- Scheduling:  standard timeframes, milestones, reviews, stages 
(pre-alpha, alpha, beta, release candidate)
- Harmonization (who, what, how, the process, concepts, etc.)
- Issue resolution (who, what, how, the process, voting, tracking, etc.)
- Input formats
  - XSD (NIEM conformant XML Schema documents)
  - XLS (Microsoft Excel spreadsheet) 
[Change Request](https://reference.niem.gov/niem/resource/change-request/) 
(Christina's latest modifications)
  - Simple text explanations in email for very minor changes.
- Technical assistance (who, what, how)

### 5.4 Domain update

- Domain independence and self-serviced
- Types of domain updates: incremental vs. replacement
- Multi-domain coordinated domain update
- Change content preparation and model management
- Metadata, lineage, change log

### 5.5 Conformance and quality assurance

- General and specific conformance
- Verification (who, what, how, when, etc.)

----

### <&mdash;&mdash; Return to:  [Table of Contents](./index.html)

----
