---
title: NIEM Releases
links:
- url: /niem-releases/5.0/
- url: /niem-releases/v3.0-technical-changes/
- url: /niem-releases/v4.0-technical-changes/
- url: /niem-releases/history/
- url: /niem-releases/stats/
draftTag: niem-5.0rc6
draftLabel: NIEM 5.0-rc6
draftFeedbackDueDate: Tuesday, October 26, 2020
---

<style type="text/css">
    ul { margin-left: 1em; }

    td {
      vertical-align: top;
    }
</style>

<!--
{:.note}
> **[{{page.draftLabel}}](https://github.com/NIEM/NIEM-Releases/releases/tag/{{page.draftTag}}) is now available for review!**  Feedback is requested by end of the day on {{page.draftFeedbackDueDate}}.  Click **[here](#latest_draft_release)** for more.
 -->

NIEM publishes annual releases on a 3-year cycle.  A major release one year will be followed by minor releases the next two years.  *Major releases* allow content changes to NIEM Core and domains, plus architectural changes, as specified by the NIEM Naming and Design Rules.  *Minor releases* allow for domain-related content changes only; Core and the architecture remain fixed.

- TOC
{:toc .toc}

## Current Release

**NIEM 5.0** is the current version of NIEM.  [Release notes](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0) are available on GitHub.

As a major release, content may be updated in any namespace, including Core. Changes have also been made to the NIEM architecture, which may be reflected in the structure and layout of the NIEM schemas.

NIEM 5.0 conforms to the `ReferenceSchemaDocument` (REF) target of the NIEM [Naming and Design Rules (NDR) Specification, version 5.0]({{ site.data.links.ndr5 }}).

There are several ways to access NIEM 5.0:

- View [schemas and documentation](https://release.niem.gov/niem/5.0) or download the [full release package](https://release.niem.gov/niem/5.0/niem-5.0.rel.zip) from [release.niem.gov](https://release.niem.gov/niem/).

- View [schemas and documentation](https://github.com/NIEM/NIEM-Releases/tree/niem-5.0) or download the [full release package](https://github.com/NIEM/NIEM-Releases/archive/niem-5.0.zip) from [GitHub](https://github.com/NIEM/NIEM-Releases).

- Search the contents of NIEM 5.0 and build XML schema subsets for IEPDs using the
  [Schema Subset Generation Tool (SSGT)](https://tools.niem.gov/niemtools/ssgt/index.iepd).

- Search the contents of NIEM 5.0 using [Movement](https://beta.movement.niem.gov).

- Browse the namespaces and contents of NIEM 5.0 using the [Model Viewer](https://niem.github.io/model/).  Includes interactive component diagrams and XML Schema fragments.

Please send in any comment on the NIEM release as a [GitHub issue](https://github.com/NIEM/NIEM-Releases/issues).

---

## Latest Draft Release

<!-- **[NIEM 5.0 release candidate 6](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0rc6)** is now available for review! -->

<!-- The release package is available at [NIEM-Releases](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0rc6) on GitHub and may also be downloaded as a [zip file](https://github.com/NIEM/NIEM-Releases/archive/niem-5.0rc6.zip).  The package includes XML schemas, documentation spreadsheets, a change log, a JSON-LD context file, and a README. -->

**NIEM 5.1** is currently under development.  Development of the 5.1 minor release will occur during 2021 with the final 5.1 release expected to be published Fall 2021.

Please email feedback to <niem-comments@lists.gatech.edu> or submit a new [5.1 issue](https://github.com/NIEM/NIEM-Releases/issues/new?labels=5.1). <!--  by the end of the day **Tuesday, October 26, 2020**. -->

Progress can be tracked on the [NIEM-Releases GitHub repo]({{site.data.links.release_repo}}) via:

- the [5.1 issue tracker](https://github.com/NIEM/NIEM-Releases/issues?q=is%3Aopen+is%3Aissue+label%3A5.1), and
- draft schemas will be posted to the [dev branch]({{site.data.links.release_repo}}/tree/dev) during development

<!--
### Recent changes
{:.no_toc}

 -->

### Schedule
{:.no_toc}

*Please note: This schedule is subject to change.*

Draft | Date | Issues | Description
:------ |:---- |:------ |:-----------
Alpha 1 | Mar 2021 |  | Major domain content submissions due.
Beta 1 | June 2021 |  | Harmonize and refine alpha changes.  Smaller content submissions, code table updates, and new requests may still be addressed during this time.
Release Candidate (RC) 1 | Aug 2021 |  | QA and preparations for the release.  Only bug fixes are considered during this stage; other requests will be queued for the following release.
Release | Fall 2021 | | Publish release and update tools (SSGT, Movement,  Migration Tool)

Additional phases (e.g., Beta 2) may be added as needed during the development process.

### Expected Changes
{:.no_toc}

The following changes are expected to appear in NIEM 5.1:

{:.box}
- **Cyber** domain *(new)*
  - add Federal Incident Reporting Requirements (FIRR)
  - add Cybercrime Support Network (CSN) requirements
- **Biometrics** domain
  - add new DNA content [(#152)](https://github.com/NIEM/NIEM-Releases/issues/152)
- **Emergency Management** domain
  - add content from OpenFEMA [(#208)](https://github.com/NIEM/NIEM-Releases/issues/208)
- **Immigration** domain
  - update content and codes
- **Military Operations** domain
  - add content from the Joint Non-Kinetic Effectiveness (JNKE) IEPD (cyber-related)
- **Statistics** domain *(new)*
  - add content from the Census Bureau
  - merge the Generic Statistic Information Model (GSIM) auxiliary content added to 5.0
- Update code sets

---

## Full List of Releases

NIEM [release packages](../reference/artifacts/releases/) are available on [GitHub](https://github.com/NIEM/NIEM-Releases) and [release.niem.gov](https://release.niem.gov/niem/) (NIEM's original publication site).

There are also online tools available to search and view NIEM release content:

- The [Schema Subset Generation Tool (SSGT)]({{ site.data.links.ssgt }}) can be used with any published release to search the model and build XML schema subsets for use in IEPDs.  Go to `Options` to choose a previous release.  *[Learn more about the SSGT.]({{ site.data.pages.ssgt | relative_url }})*

- [Movement]({{ site.data.links.movement }}) can be used with the current release to search the model.  *[Learn more above Movement.]({{ site.data.pages.movement | relative_url }})*

<table>
  <thead>
    <tr>
      <th>Release</th>
      <th>Release Package Links</th>
      <th>Year</th>
      <th>Zip</th>
      <th>Info</th>
      <th title="NIEM Naming and Design Rules Specification">
        <a href="../reference/specifications/ndr">NDR</a>
      </th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0">NIEM 5.0</a>
        </b>
        <br><i>(current release)</i>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-5.0">GitHub</a> |
        <a href="https://release.niem.gov/niem/5.0/">release.niem.gov</a>
      </td>
      <td>2020</td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-5.0.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/README.md">Readme</a>
      </td>
      <td>
        <a href="{{site.data.links.ndr5}}">NDR 5.0</a>
      </td>
      <td>
        <a href="./v5.0-technical-changes/">5.0 architecture update summary</a> <br>
        Also available in <a href="https://beta.movement.niem.gov/#/">Movement</a> <br>
        <a href="https://github.com/NIEM/NIEM-Releases/issues/new?labels=5.1">Submit feedback</a>
      </td>
    </tr>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.2">NIEM 4.2</a>
        </b>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-4.2">GitHub</a> |
        <a href="https://release.niem.gov/niem/4.2/">release.niem.gov</a>
      </td>
      <td>2019</td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-4.2.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.2">Readme</a>
      </td>
      <td>
        <a href="{{site.data.links.ndr4}}">NDR 4.0</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/issues">Submit feedback</a>
      </td>
    </tr>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.1">NIEM 4.1</a>
        </b>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-4.1">GitHub</a> |
        <a href="https://release.niem.gov/niem/4.1/">release.niem.gov</a>
      </td>
      <td>2018</td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-4.1.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.1">Readme</a>
      </td>
      <td>
        <a href="{{site.data.links.ndr4}}">NDR 4.0</a>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.0">NIEM 4.0</a>
        </b>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-4.0">GitHub</a> |
        <a href="https://release.niem.gov/niem/4.0/">release.niem.gov</a>
      </td>
      <td>2017</td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-4.0.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.0">Readme</a>
      </td>
      <td>
        <a href="{{site.data.links.ndr4}}">NDR 4.0</a>
      </td>
      <td>
        <a href="./v4.0-technical-changes/">4.0 architecture update summary</a> <br>
        Introduces a <a href="https://release.niem.gov/jsonld-context/niem-4.0-context.jsonld">default JSON-LD context</a> artifact <br>
        Supports the NIEM <a href="https://github.com/NIEM/NIEM-Code-Lists-Spec">Code Lists Specification</a>
      </td>
    </tr>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-3.2">NIEM 3.2</a>
        </b>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-3.2">GitHub</a> |
        <a href="https://release.niem.gov/niem/3.2/">release.niem.gov</a>
      </td>
      <td>2016</td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-3.2.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-3.2">Info</a>
      </td>
      <td>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html">NDR 3.0</a>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-3.1">NIEM 3.1</a>
        </b>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-3.1">GitHub</a> |
        <a href="https://release.niem.gov/niem/3.1/">release.niem.gov</a>
      </td>
      <td>2015</td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-3.1.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-3.1">Info</a>
      </td>
      <td>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html">NDR 3.0</a>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-3.0">NIEM 3.0</a>
        </b>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-3.0">GitHub</a> |
        <a href="https://release.niem.gov/niem/3.0/">release.niem.gov</a>
      </td>
      <td>2013</td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-3.0.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-3.0">Info</a>
      </td>
      <td>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html">NDR 3.0</a>
      </td>
      <td>
        <a href="./v3.0-technical-changes/">3.0 architecture update summary</a> <br>
      </td>
    </tr>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-2.1">NIEM 2.1</a>
        </b>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-2.1">GitHub</a> |
        <a href="https://release.niem.gov/niem/2.1/">release.niem.gov</a>
      </td>
      <td>2009</td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-2.1.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-2.1">Info</a>
      </td>
      <td>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/1.3/niem-ndr-1.3.pdf">NDR 1.3</a> + <br>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/1.3/type-augmentation/niem-type-augmentation-1.0.pdf">supplement</a>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-2.0">NIEM 2.0</a>
        </b>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-2.0">GitHub</a> |
        <a href="https://release.niem.gov/niem/2.0/">release.niem.gov</a>
      </td>
      <td>2007</td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-2.0.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-2.0">Info</a>
      </td>
      <td>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/1.3/niem-ndr-1.3.pdf">NDR 1.3</a>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-1.0">NIEM 1.0</a>
        </b>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-1.0">GitHub</a> |
        <a href="https://release.niem.gov/niem/1.0/">release.niem.gov</a>
      </td>
      <td>2006</td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-1.0.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-1.0">Info</a>
      </td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Release History

The following is a list of domain additions and major changes across NIEM releases.

**NIEM 1.0**

The success of the [Global Justice XML Data Model (GJXDM)](https://it.ojp.gov/initiatives/gjxdm) for the justice community led to the creation of NIEM with a multi-domain model.  GJXDM content was refactored into core namespaces and a new Justice domain; other new domains were added.

Highlights:

- Added **NIEM Core**, represented as two namespaces:
  - *Universal Core* (u) - meant to represent very stable components used in almost all messages
  - *Common Core* (c) - meant to represent components understood by almost all NIEM users
- Added the **Emergency Management** (em) domain
- Added the **Immigration** (im) domain
- Added the **Infrastructure Protection** (ip) domain
- Added the **Intelligence** (intel) domain
- Added the **International Trade** (it) domain
- Added the **Justice** (j) domain
- Added the **Screening** (scr) domain
- Added the Geography Markup Language (GML) as an external standard
- Added support for IC-ISM security markup metadata
- Represented augmentations via type extension and type substitution

**NIEM 2.0**

NIEM changed its philosophy on NIEM Core and moved away from the idea that it should reflect what the community most often used in practice or could easily support.  NIEM Core (nc) was consolidated from the two core namespaces in NIEM 1.0.  It became the designated place for content that did not belong to a single authoritative source and should thus be managed collaboratively by the NIEM Business Architecture Committee, which includes representatives from all NIEM domains.

Highlights:

- Merged Universal Core (u) and Common Core (c) into a single **NIEM Core** (nc) namespace
- Included an ANSI NIST namespace to represent Biometrics data
- Reviewed Core and moved a number of justice-specific components into the Justice domain
- Performed additional harmonization work across the domains

See the [NIEM 2.0 change log](https://release.niem.gov/niem/2.0/changelog.html) for a list of changes.

**NIEM 2.1**

NIEM continued to add and update domain content and code sets, and to address user feedback.

Highlights:

- Added the **Chemical, Biological, Radiological, Nuclear** (cbrn) domain
- Added the **Family Services** (fs) domain
- Added the **Maritime** (m) domain
- The [NIEM UML profile](https://reference.niem.gov/niem/specification/uml-profile/1.0/uml-profile-1.0.pdf) was introduced.

See the [NIEM 2.1 change log](https://release.niem.gov/niem/2.1/changelog.html) for a list of changes.

**NIEM 3.0**

NIEM adopted a new annual release strategy with a 3-year cycle: a major release one year would be followed by minor releases the next two years.

Highlights:

- Added the **Biometrics** (biom) domain - *replaced the ANSI NIST namespace from NIEM 2.0*
- The **Family Services** (fs) domain was renamed as **Children, Youth, and Family Services** (cyfs)
- **Military Operations** (mo) debuted as a domain update after the NIEM 3.0 release
- [Augmentations](/reference/concepts/augmentation/element/) were revised to use element substitution instead of type extension.  This addressed challenges users had faced with the limits of type extension, which only allowed for the use of an augmentation for a type from a single domain.  Element substitution allows for IEPD developers to use multiple domain augmentations to be used in combination together.
- Extensive review and harmonization of Core components
- Simplified XML schema syntax of elements and types
- Added the `conformanceTargets` attribute to NIEM schemas to allow users to explicitly designate which NIEM specifications and rule sets are applicable
- Added support for local terminology, allowing namespaces to define subject area-specific terms that do not appear in standard dictionaries

Specification updates:

*Starting with NIEM 3.0, specification version numbers were adjusted to match the corresponding major NIEM release.*

- The NIEM **Naming and Design Rules (NDR)** specification was updated from [version 1.3](https://reference.niem.gov/niem/specification/naming-and-design-rules/1.3/niem-ndr-1.3.pdf) to [version 3.0](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html)
- The NIEM **Model Package Description (MPD)** specification was updated from [version 1.1](https://reference.niem.gov/niem/specification/model-package-description/1.1/) to [version 3.0](https://reference.niem.gov/niem/specification/model-package-description/3.0/)
- The NIEM **Conformance Targets Attribute (CTAS)** specification was introduced as [version 3.0](https://reference.niem.gov/niem/specification/conformance-targets-attribute/3.0/NIEM-CTAS-3.0-2014-07-31.html)
- The NIEM UML Profile was updated to [version 3.0](https://reference.niem.gov/niem/specification/uml-profile/omg/3.0beta1/)

See the [NIEM 3.0 change log spreadsheet](https://release.niem.gov/niem/3.0/niem-3.0-changelog.xlsx) for changes.

**NIEM 3.1**

NIEM continued to add and update domain content and code sets, and to address user feedback.

Highlights:

- Added the **Human Services** (hs) domain
- Added the **Military Operations** (mo) domain

See the [NIEM 3.1 change log spreadsheet](https://release.niem.gov/niem/3.1/niem-3.1-changelog.xlsx) for changes.

**NIEM 3.2**

NIEM continued to add and update domain content and code sets, and to address user feedback.

Highlights:

- Added the **Surface Transportation** (st) domain
- Major additions to the Justice domain: added over 1,000 corrections-related elements

See the [NIEM 3.2 change log spreadsheet](https://release.niem.gov/niem/3.2/niem-3.2-changelog.xlsx) for changes.

**NIEM 4.0**

- Added the **Agriculture** (ag) domain
- **Children, Youth, and Family Service** (cyfs) was merged into the **Human Services** (hs) domain
- Added a new `structures:uri` attribute to support references within and across documents (Linked Data)
- Added support for dynamic code lists that are identified at run-time via the new type `nc:CodeType`, as specified by the new NIEM Code Lists specification
- Added new components to support the international community

Specification updates

- The NIEM **Naming and Design Rules (NDR)** specification was updated to [version 4.0](https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html)
- The NIEM **Code Lists** specification was introduced as [version 4.0](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html)

See the [NIEM 4.0 readme](https://github.com/NIEM/NIEM-Releases/blob/niem-4.0/README.md) for a list of changes.

**NIEM 4.1**

NIEM continued to add and update domain content and code sets, and to address user feedback.

See the [NIEM 4.1 readme](https://github.com/NIEM/NIEM-Releases/blob/niem-4.1/README.md) for a list of changes.

**NIEM 4.2**

Highlights:

- Added and updated DNA and pedigree components in the **Biometrics** domain
- Added components to the **Emergency Management** domain to support the Public Health Emergency Operations Center (PH EOC) Minimum Data Set

See the [NIEM 4.2 readme](https://github.com/NIEM/NIEM-Releases/blob/niem-4.2/README.md) for a list of changes.

**NIEM 5.0**

Highlights:

- Added **Controlled Unclassified Information** (cui) as auxiliary content
- Added **Statistics** (stat) as auxiliary content
- Added additional components to the **Emergency Management** domain to support the remaining Public Health Emergency Operations Center (PH EOC) Minimum Data Set requirements
- Moved Core code elements to code namespaces to break the import dependencies and to allow all code sets to be updated in minor releases
- Harmonized FBI code sets across the NCIC, NDEx, UCR, and Justice namespaces
- Replaced the full GML external standard with a simplified NIEM profile
- Re-established the structures:sequenceID attribute allowing explicit ordering of repeated elements
- Simplified the folder layout in the release package, removing extra nesting and versions.
- Changed the character encoding of the XML schemas from "US-ASCII" to "UTF-8" for better international support

Specification updates:

- The NIEM **Naming and Design Rules (NDR)** specification was updated to [version 5.0](https://reference.niem.gov/niem/specification/naming-and-design-rules/5.0/niem-ndr-5.0.html)

See the [NIEM 5.0 readme](https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/README.md) for a list of changes.
