---
  title: NIEM 5.1 Release (Draft)
  short: NIEM 5.1 (draft)
  description: An overview of the draft NIEM 5.1 release, currently under development.
  redirect_from: /niem-releases/draft/
---

{:toc}
- TOC

{% assign tag = site.data.release.tag %}

{:.box}
> **[{{ site.data.release.description }}](https://github.com/NIEM/NIEM-Releases/releases/tag/{{tag}})** is now available for review! Please submit feedback (see below) by the end of the day **{{ site.data.release.feedbackDue }}**.

NIEM 5.1 will be a minor release and is currently under development.  Publication is scheduled for Fall 2021.

## Resources

{% assign tag = site.data.release.tag %}

- Download the full [draft release package](https://github.com/NIEM/NIEM-Releases/archive/{{tag}}.zip) as a zip file.  This package includes XML schemas, documentation spreadsheets, a change log, a JSON-LD context file, and a README.

- View schemas and documentation on [GitHub](https://github.com/NIEM/NIEM-Releases/tree/{{tag}})

- Submit a [new issue](https://github.com/NIEM/NIEM-Releases/issues/new?labels=5.1) (see [info](https://github.com/NIEM/NIEM-Releases/wiki/Issues) for help) or email feedback to <niem-comments@lists.gatech.edu>

- View a list of all [5.1 issues](https://github.com/NIEM/NIEM-Releases/issues?q=is%3Aopen+is%3Aissue+label%3A5.1) or track progress via the [5.1 project board](https://github.com/NIEM/NIEM-Releases/projects/6)

## Schedule

{:.note}
> This schedule is subject to change.

Draft | Date | Issues | Description
:------ |:---- |:------ |:-----------
Alpha 1 | Mar 2021 | [Issues](https://github.com/NIEM/NIEM-Releases/issues?q=is%3Aopen+is%3Aissue+milestone%3Aniem-5.1alpha1) | Major domain content submissions due.
Alpha 2 | June 2021 | [Issues](https://github.com/NIEM/NIEM-Releases/issues?q=is%3Aopen+is%3Aissue+milestone%3Aniem-5.1alpha2) | Additional updates to domain content.
Beta 1 | Aug 2021 | [Issues](https://github.com/NIEM/NIEM-Releases/issues?q=is%3Aopen+is%3Aissue+milestone%3Aniem-5.1beta1) | Harmonize and refine alpha changes.  Smaller content submissions, code table updates, and new requests may still be addressed during this time.
Release Candidate (RC) 1 | Oct 2021 | [Issues](https://github.com/NIEM/NIEM-Releases/milestone/17?closed=1) | QA and preparations for the release.  Only bug fixes are considered during this stage; other requests will be queued for the following release.
Release | Fall 2021 | | Publish release and update tools (SSGT, Movement,  Migration Tool)

Additional phases (e.g., Beta 2) may be added as needed during the development process.

### Recent changes

Highlights include:

- Split the **CUI Limited Dissemination Control (LDC) code set** into separate document marking and portion marking LDC code sets ([#233](https://github.com/NIEM/NIEM-Releases/issues/233))
- Updated **NCIC vehicle model (VMO) codes** to the original 3-character codes.  Duplicates have been removed and the definitions now match the code values to avoid conflicts from overlapping models. ([#219](https://github.com/NIEM/NIEM-Releases/issues/219))
- Updated **Biometrics pedigree content** ([#224](https://github.com/NIEM/NIEM-Releases/issues/224))
- Update class terms for **Cyber's cyber indicator pattern** properties and types.

## Highlights

The following is a summary of the major changes made in this release.  More details are available from the [5.1 issues](https://github.com/NIEM/NIEM-Releases/issues?page=1&q=is%3Aissue+label%3A5.1) in the NIEM Releases issue tracker, and the change log spreadsheet in the release package.

{:.box}
- **Biometrics domain**
  - Added additional DNA-related content ([#152](https://github.com/NIEM/NIEM-Releases/issues/152))
  - Updated pedigree content ([#224](https://github.com/NIEM/NIEM-Releases/issues/224))

- **CUI**
  - Split the single Limited Dissemination Control (LDC) code set into separate document marking and portion marking LDC code sets ([#233](https://github.com/NIEM/NIEM-Releases/issues/223))

- **Cyber domain** (new)
  - Added content supporting Federal Incident Reporting Requirements (FIRR) ([#209](https://github.com/NIEM/NIEM-Releases/issues/209))
  - Added content supporting State, Local, Tribal, and Territorial (SLTT) Agency Cyber Incident Reporting Requirements (CIRR) ([#215](https://github.com/NIEM/NIEM-Releases/issues/215))

- **Emergency Management domain**
  - Added flood damage claim content from OpenFEMA ([#208](https://github.com/NIEM/NIEM-Releases/issues/208))

- **Justice domain**
  - Moved Justice elements with a NCIC data type to the NCIC namespace ([#214](https://github.com/NIEM/NIEM-Releases/issues/214))

- **Military Operations domain**
  - Added content from the Joint Non-Kinetic Effectiveness (JNKE) IEPD ([#210](https://github.com/NIEM/NIEM-Releases/issues/210))

- **NCIC codes**
  - Re-added 4.2 code sets that were removed from the 5.0 release due to harmonization efforts across the FBI and Justice code sets for legacy support. ([#211](https://github.com/NIEM/NIEM-Releases/issues/211))
  - Removed ncic:BOATCodeType as it is no longer being used ([#218](https://github.com/NIEM/NIEM-Releases/issues/218))
  - Updated codes for NIEM 5.1, with changes to the MAK, VMA, and VMO code sets ([#219](https://github.com/NIEM/NIEM-Releases/issues/219))

## Specification Links

{% include specs/specification-list.html specIDs = "NDR-5.0, IEPD-5.0, JSON-5.0, Conformance-5.0, CodeLists-4.0, CTAS-3.0, HLVA-3.0" %}
