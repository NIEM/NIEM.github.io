---
  title: NIEM 5.1 Release (Draft)
  short: NIEM 5.1 (draft)
  description: An overview of the draft NIEM 5.1 release, currently under development.
---

NIEM 5.1 will be a minor release and is currently under development.  Publication is scheduled for Fall 2021.

{:toc}
- TOC

{% assign tag = site.data.release.tag %}

<!--
**[{{ site.data.release.description }}](https://github.com/NIEM/NIEM-Releases/releases/tag/{{tag}})** is now available for review!

The release package is available at [NIEM-Releases](https://github.com/NIEM/NIEM-Releases/releases/tag/{{tag}}) on GitHub and may also be downloaded as a [zip file](https://github.com/NIEM/NIEM-Releases/archive/{{tag}}.zip).  The package includes XML schemas, documentation spreadsheets, a change log, a JSON-LD context file, and a README.

Please email feedback to  or submit a new [5.1 issue](https://github.com/NIEM/NIEM-Releases/issues/new?labels=5.1) by the end of the day **{{ site.data.release.feedbackDue }}**.
-->

## Resources

The release is currently in the pre-alpha stage and no updated schemas are available yet for review.

- Submit a [new issue](https://github.com/NIEM/NIEM-Releases/issues/new?labels=5.1) (see [info](https://github.com/NIEM/NIEM-Releases/wiki/Issues) for help) or email feedback to <niem-comments@lists.gatech.edu>

- View all [5.1 issues](https://github.com/NIEM/NIEM-Releases/issues?q=is%3Aopen+is%3Aissue+label%3A5.1)

- Track progress via the [5.1 project board](https://github.com/NIEM/NIEM-Releases/projects/6)

- Review upcoming 5.1 draft schemas on the [dev branch]({{site.data.links.release_repo}}/tree/dev) on GitHub

## Schedule

{:.note}
> This schedule is subject to change.

Draft | Date | Issues | Description
:------ |:---- |:------ |:-----------
Alpha 1 | Mar 2021 |  | Major domain content submissions due.
Alpha 2 | May 2021 |  | Additional updates to domain content.
Beta 1 | June 2021 |  | Harmonize and refine alpha changes.  Smaller content submissions, code table updates, and new requests may still be addressed during this time.
Release Candidate (RC) 1 | Aug 2021 |  | QA and preparations for the release.  Only bug fixes are considered during this stage; other requests will be queued for the following release.
Release | Fall 2021 | | Publish release and update tools (SSGT, Movement,  Migration Tool)

Additional phases (e.g., Beta 2) may be added as needed during the development process.

<!--
### Recent changes

-->

## Highlights

The following changes are expected to appear in NIEM 5.1:

{:.box}
- **Cyber** domain *(new)* - add Federal Incident Reporting Requirements (FIRR) and Cybercrime Support Network (CSN) requirements

- **Biometrics** domain - add new DNA content [(#152)](https://github.com/NIEM/NIEM-Releases/issues/152)

- **Emergency Management** domain - add flood damage claim content from OpenFEMA [(#208)](https://github.com/NIEM/NIEM-Releases/issues/208)

- **Immigration** domain - update content and codes

- **Military Operations** domain - add content from the Joint Non-Kinetic Effectiveness (JNKE) IEPD (cyber-related)

- **Statistics** domain *(new)* - add content from the Census Bureau and merge the Generic Statistic Information Model (GSIM) auxiliary content added to 5.0

- **Update code sets**

## Specification Links

{% include specs/specification-list.html specIDs = "NDR-5.0, IEPD-5.0, JSON-5.0 beta 1, Conformance-5.0, CodeLists-4.0, CTAS-3.0, HLVA-3.0" %}
