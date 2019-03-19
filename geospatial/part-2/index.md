---
  title: Geo4NIEM Part 2 (2015)
  description: Geo4NIEM Part 2 (2015) was one of four threads in OGC’s Testbed 11—a scenario-based test and demonstration of Geo4NIEM work. It focused on enhancing NIEM’s geospatial exchange capabilities to include Intelligence Community (IC) data encoding specifications, along with OASIS standards to enable granular data object level access authorization and/or denial aligned to OCG web services.
  icon: fa-globe
---

{{ page.description }}

## Objectives

The Geo4NIEM Part 2 testbed met the following objectives:

- Assessed support in NIEM for IC security specifications (ISM, NTK, TDF) and recommended a security architecture.
- Demonstrated secure information exchange using architecture from Task 1.
- Assessed NIEM and GML support for geospatial data exchange from NIEM-based client to GML-based client and back (round-trip); recommended a round-trip architecture.
- Demonstrated round-trip geospatial data exchange using the architecture from Task 3.
- Demonstrated OGC Web Feature Service (WFS) on GML feature representations with embedded NIEM components.
- Reached consistent security approach across the OGC suite of service standards.

## Why is it needed?

Geospatial information technologies are increasingly a foundation for supporting emergency management, public safety, and other missions. Because many of these communities are already using NIEM, efforts to enhance NIEM’s geospatial exchange capabilities will help significantly improve inter-government information sharing of this critical data source.

## What's next?

The following recommended focus areas are under consideration for potential future Geo4NIEM work:

- Tools and best practices for exposing NIEM Information Exchange Package Documentation (IEPD) through the OGC Web Feature Service (WFS) interface, including making IEPD schemas available via WFS.
- Tools and best practices for expressing and enforcing access control policy in terms of IC security metadata.
- Best practices for simplified IEPDs (i.e., location and time core elements in GML Simple Features profile; model similar to Cursor-on-Target (CoT)).

## Findings

The Geo4NIEM Part 2 Testbed affirmed that, with reasonable effort, it is possible to combine NIEM, IC security specifications, OGC Web Service components and GML-aware clients to support information exchange with authorized users. This is a huge step forward toward enabling first responders, law enforcement, emergency management, military support and the intelligence community to collaborate real time without compromising access controls. Access control engines can work with NIEM/IC data encoding, with or without a services framework. Findings were shared during the OGC meetings held during June 2015.

<iframe width="854" height="480" src="https://www.youtube.com/embed/hZNt5OaBtx4?vq=hd720" frameborder="0" allowfullscreen=""></iframe>

<iframe width="854" height="480" src="https://www.youtube.com/embed/Y-kNcztnsvY?list=PL4wLuqQbGVE6mQjrwBnxYFkWBhYcfTTe4&amp;vq=hd720" frameborder="0" allowfullscreen=""></iframe>

<iframe width="854" height="480" src="https://www.youtube.com/embed/loXLwdMaTPM?list=PL4wLuqQbGVE6mQjrwBnxYFkWBhYcfTTe4&amp;vq=hd720" frameborder="0" allowfullscreen=""></iframe>

---

## Testbed 11 Engineering Reports summarizing Geo4NIEM Part 2

**Testbed 11 Geo4NIEM Architecture Design and Implementation Guidance and Fact Sheet**

Reference Number: OGC 15-051r3

This document describes background considerations, as well as an overview of the services, data encodings and access control frameworks that compose the Geo4NIEM Testbed 11 architecture.

<https://portal.opengeospatial.org/files/?artifact_id=65419>

---

**Testbed 11 NIEM & IC Data Encoding Specification Assessment and Recommendations ER**

Reference Number: OGC 15-048r3

This document is a product of a Task 1, which assessed the potential for security tagging and access control from IC Data Encoding Specifications to be leveraged with NIEM in support of information exchange. The purpose was to determine if the current architecture of NIEM can support IC specification alignment. The IC Data Encoding Specifications include, but are not limited to, ISM, NTK and TDF metadata.

<https://portal.opengeospatial.org/files/?artifact_id=65420>

---

**Testbed 11 Results of Test and Demonstration of NIEM Using IC Data Encoding Specifications ER**

Reference Number: OGC 15-050r3

This document is a product of Task 2, which used preliminary findings and recommended architectures for IC Data Encoding Specification support identified in Task 1, and performed a Test and Demonstration of the recommended architecture leveraging the results of Testbed 9 and previous Geo4NIEM initiatives where appropriate. Results of this Test and Demonstration were documented in an Engineering Repot containing the Findings and Recommendations with reference to refinements to the originally proposed architecture prepared in Task 1.

<https://portal.opengeospatial.org/files/?artifact_id=65421>

---

**Testbed 11 NIEM-GML-NIEM Round-Trip Assessment and Recommendations ER**

Reference Number: OGC 15-030r3

This document is a product of Task 3, which assessed the NIEM and GML support for geospatial data exchange round-trip workflow processes to include: creation, transfer, receipt, modification, return and acceptance of XML content originating as NIEM IEPDs; and Task 4, which covered the testing and demonstration of the recommended architecture structure supporting NIEM-GML-NIEM round-trip assessment identification.

<https://portal.opengeospatial.org/files/?artifact_id=65451>

---

**Testbed 11 NIEM-IC Feature Processing API Using OGC Web Services ER**

Reference Number: OGC 15-047r3

This document is a product of Task 5, which performed Test and Demonstrations using OGC web services, such as Basic and Transactional Web Feature Service (WFS-T) and Policy Enforcement Points (PEPs), to process GML feature representations leveraging NIEM components. The Test and Demonstrations included, but are not limited to feature, retrieval, insert, update and delete.

<https://portal.opengeospatial.org/files/?artifact_id=65418>
