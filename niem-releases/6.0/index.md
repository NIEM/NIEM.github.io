---
  title: NIEM 6.0 Version (Draft)
  short: NIEM 6.0 (draft)
  description: An overview of the draft NIEM 6.0 version, currently under development.
  redirect_from: /niem-releases/draft/
---

NIEM 6.0 will be a major version and is currently under development.  Publication is scheduled for December 2023.

{:toc}
- TOC

{% assign tag = site.data.release.tag %}

<!--
**[{{ site.data.release.description }}](https://github.com/niemopen/niem-model/releases/tag/{{tag}})** is now available for review!

The release package is available at [NIEM-Releases](https://github.com/niemopen/niem-model/releases/tag/{{tag}}) on GitHub and may also be downloaded as a [zip file](https://github.com/niemopen/niem-model/archive/{{tag}}.zip).  The package includes XML schemas, documentation spreadsheets, a change log, a JSON-LD context file, and a README.

Please email feedback to  or submit a new [6.0 issue](https://github.com/niemopen/niem-model/issues/new?labels=6.0) by the end of the day **{{ site.data.release.feedbackDue }}**.
-->

## Resources

- Download the draft [model package](https://github.com/niemopen/niem-model/archive/refs/heads/dev.zip) as a zip file

- View draft schemas and documentation on the new [NIEMOpen model repo](https://github.com/niemopen/niem-model/tree/dev)

- Submit a [new issue](https://github.com/niemopen/niem-model/issues/new?labels=6.0) or email feedback to <{{site.data.links.niem_comments}}>.

  - Instructions for the mailing list are available at <https://lists.oasis-open-projects.org/g/niemopen-comment>.

- View all [6.0 issues](https://github.com/niemopen/niem-model/issues?q=is%3Aissue+label%3A6.0)

- View all [6.0 pull requests](https://github.com/niemopen/niem-model/pulls?q=is%3Apr+label%3A6.0)

- Track progress via the [6.0 project board](https://github.com/orgs/niemopen/projects/3/views/2)

## Schedule

{:.note}
> This schedule is subject to change.

| Draft | Date | Issues | Description |
|:----- |:---- |:------ |:----------- |
| ---   | Jun 2023 |  | Major domain content submissions due.
|       | Sep 2023 |  | NBAC, NTAC, and community review of working draft.
| PSD&nbsp;01 | Nov 2023 | [link](https://github.com/niemopen/niem-model/issues?q=is%3Aissue+label%3A6.0) | Project Specification Draft (PSD) 01
| PS 01 | Dec 2023 |  | Project Specification (PS) 01.  Major version published and tools updated.
| OS 01 | 2024 |  | OASIS Standard (OS) 01.

Additional phases may be added as needed during the development process.

<!--
### Recent changes

-->

## Highlights

The following is a summary of the major changes made in NIEM 6.0:

{:.box}
- Core and cross-domain harmonization

- Updates to support the transition of NIEM to an OASIS Open Project, including namespace URI changes.

- Updates to support upcoming [NIEM-NDR-v6.0] changes, including:

  - **Adapter changes** - New representation terms and a simpler type syntax.

  - **Attribute augmentations** - Allows message designers to create semantically-named attribute references from simple data properties to supplemental content.

  - **Attribute wildcards** - Allows declared attributes to be added to any NIEM element property.

  - **Metadata changes** - Now treated like regular objects, can be included in types where applicable, and can be augmented and extended.

  - **Role changes** - Leverages standard type extension and the existing `structures:uri` attribute to relate different roles of the same entity in a message together, replacing the previous `RoleOf` construct.

- Updates related to new digital identity requirements led by the Emergency Management domain, including:

  - `nc:IdentificationType` and related augmentation types

  - `nc:LicenseType` _(new)_ to support other kinds of licenses with NIEM

  - `j:DriverLicenseType` and related types

  - `nc:PassportType`, which now extends `nc:IdentificationType`

  - `em:PersonIDCardType`, which has been refactored to augment `nc:IdentificationType`

  - `m:SeamanLicenseType`, which can now be represented by the new `nc:LicenseType`

  - `m:MerchantMarinerDocumentType`, which can now be represented by the new `nc:LicenseType`

- Code set updates, including:

  - Updates provided by the FBI for the National Crime Information Center (NCIC) codes
  - GENC codes, version 3-12

- Synchronized the Justice domain version number with the rest of the model: now Justice 6.0

Changes to version 6.0 are described in more detail in the [README.md](https://github.com/niemopen/niem-model/tree/dev/README.md).
