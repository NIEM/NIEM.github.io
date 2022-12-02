---
  title: NIEM 5.2 Release (Draft)
  short: NIEM 5.2 (draft)
  description: An overview of the draft NIEM 5.2 release, currently under development.
  redirect_from: /niem-releases/draft/
---

{:toc}
- TOC

{% assign tag = site.data.release.tag %}

{:.note}
> **[{{ site.data.release.description }}](https://github.com/NIEM/NIEM-Releases/releases/tag/{{tag}})** is now available for review!
>
> See the Resources section below for more. Please email feedback to [niem-comments@lists.gatech.edu](mailto:niem-comments@lists.gatech.edu) or submit a new [5.2 issue](https://github.com/NIEM/NIEM-Releases/issues/new?labels=5.2) by the end of the day **{{ site.data.release.feedbackDue }}**.

NIEM 5.2 is a minor release and is currently under development.  Publication is scheduled for Fall 2022.

## Resources

- Download the full draft [release package](https://github.com/NIEM/NIEM-Releases/archive/{{tag}}.zip) as a zip file

- View schemas and documentation on [GitHub](https://github.com/NIEM/NIEM-Releases/tree/{{tag}})
<!-- - View schemas and documentation on [release.niem.gov](https://release.niem.gov/niem/5.1) or [GitHub](https://github.com/NIEM/NIEM-Releases/tree/niem-5.1) -->

- Submit a [new issue](https://github.com/NIEM/NIEM-Releases/issues/new?labels=5.2) or email feedback to <niem-comments@lists.gatech.edu>

- View all [5.2 issues](https://github.com/NIEM/NIEM-Releases/issues?q=is%3Aopen+is%3Aissue+label%3A5.2)

- Track progress via the [5.2 project board](https://github.com/NIEM/NIEM-Releases/projects/7)

## Schedule

{:.note}
> This schedule is subject to change.

Draft | Date | Issues | Description
:------ |:---- |:------ |:-----------
Alpha 1 | Aug 2022 | [Issues](https://github.com/NIEM/NIEM-Releases/issues?q=is%3Aissue+label%3A5.2+milestone%3Aniem-5.2alpha1) | Major domain content submissions due.
Beta 1 | Oct 2022 | [Issues](https://github.com/NIEM/NIEM-Releases/issues?q=is%3Aissue+label%3A5.2+milestone%3Aniem-5.2beta1) | Harmonize and refine alpha changes.  Smaller content submissions, code table updates, and new requests may still be addressed during this time.
Release Candidate (RC) 1 | Nov 2022 | [Issues](https://github.com/NIEM/NIEM-Releases/issues?q=+is%3Aissue+milestone%3Aniem-5.2rc1) | QA and preparations for the release.  Only bug fixes are considered during this stage; other requests will be queued for the following release.
Release | Dec 2022 | | Publish release and update tools (SSGT, Movement,  Migration Tool)

Additional phases (e.g., Beta 2) may be added as needed during the development process.

<!--
### Recent changes

-->

## Highlights

The following is a summary of the major changes made in this release:

{:.box}
- **Biometrics domain**
  - Added and updated content for DNA categories and encodings. ([#238](https://github.com/NIEM/NIEM-Releases/issues/238))
- **Cyber domain**
  - Added and modified content to support State, Local, Tribal, and Territorial (SLTT) Agency Cyber Incident Reporting Requirements (CIRR) and Cyber-Physical System (CPS) Incident Reporting Requirements ([#233](https://github.com/NIEM/NIEM-Releases/issues/233)).
- **Learning and Development domain** (new)
  - Added content about courses, course sections, students, and employment positions. ([#235](https://github.com/NIEM/NIEM-Releases/issues/235))
- **Justice domain**
  - Updated the FBI's National Crime Information Center (NCIC) codes ([#239](https://github.com/NIEM/NIEM-Releases/issues/239))
- **MilOps domain**
  - Added Minimum Essential Metadata (MEM) content ([#234](https://github.com/NIEM/NIEM-Releases/issues/234))
  - Added U.S. Message Text Format (USMTF) content as a subdomain, with information about military operations, missions, resources, readiness, and training ([#236](https://github.com/NIEM/NIEM-Releases/issues/236))
- **FIPS county codes**
  - Updated FIPS 3-digit and 5-digit county codes ([#243](https://github.com/NIEM/NIEM-Releases/issues/243))
- **ISO 639-5 language family codes**
  - Added the ISO 639-5 language family code set ([#240](https://github.com/NIEM/NIEM-Releases/issues/240))
