---
title: NIEM Releases
links:
- url: /niem-releases/v4.0-technical-changes/
---

<style type="text/css">
    ul { margin-left: 1em; }

    td {
      vertical-align: top;
    }
</style>

{:.note}
> **[NIEM 4.2-rc1](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.2rc1) is now available for review!**  Feedback is requested by Monday, October 7, 2019.  Click **[here](#under-development-niem-42)** for more.

- TOC
{:toc .toc}

## Current Release: NIEM 4.1

NIEM version 4.1 has been released. This is the **current version** of NIEM. [Release notes are available on GitHub](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.1).

There are several ways to access NIEM 4.1:

- You may download
  [the complete NIEM 4.1 schema package as a zip file](https://release.niem.gov/niem/4.1/niem-4.1.rel.zip)
  from [release.niem.gov](https://release.niem.gov/niem/4.1/).

- You may search the contents of NIEM 4.1 using [Movement](https://beta.movement.niem.gov).

- You may browse the contents of NIEM 4.1 and download schema subsets from the
  [NIEM Schema Subset Generation Tool (SSGT)](https://tools.niem.gov/niemtools/ssgt/index.iepd).

- NIEM releases are
  [published on Github](https://github.com/NIEM/NIEM-Releases). NIEM 4.1 is
  [tagged as niem-4.1](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.1),
  and may be
  [downloaded as a zip file](https://github.com/NIEM/NIEM-Releases/archive/niem-4.1.zip).

Please send in any comment on the NIEM release as a [GitHub issue](https://github.com/NIEM/NIEM-Releases/issues).

In addition to the schema release, 4.1 incorporates a
  [default JSON-LD context for NIEM 4.1](https://release.niem.gov/jsonld-context/niem-4.1-context.jsonld):
  NIEM JSON leverages JSON-LD (JSON for Linked Data), enabling it to maintain
  consistency and to connect data across exchanges. The JSON-LD context is a
  JSON file that identifies, for every namespace for NIEM content, the namespace
  prefix and its corresponding namespace URI.

---

## Under Development: NIEM 4.2

**[NIEM 4.2 release candidate (RC) 1](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.2rc1)** is now available for review!

The release package is available from the [NIEM-Releases](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.2rc1) repository on GitHub and may also be downloaded as a [zip file](https://github.com/NIEM/NIEM-Releases/archive/niem-4.2rc1.zip).  The package includes XML schemas, documentation spreadsheets, a change log, a JSON-LD context file, and a README.

{: .note}
> Please email feedback to <niem-comments@lists.gatech.edu> or submit a new [4.2 issue](https://github.com/NIEM/NIEM-Releases/issues/new?labels=4.2) by **Monday, October 7, 2019**.

The final 4.2 release will be published Fall 2019.

### Background
{:.no_toc}

NIEM 4.2 will be a minor release.  Domain content and domain code tables may be updated as needed.

Core and Core code tables will be locked until the next major release (NIEM 5.0). Core Supplements can be published in the interim, with additive changes published in new schemas that can be used alongside or in addition to the originals.

The NIEM architecture, defined by the NIEM [Naming and Design Rules]({{ site.data.links.ndr }}), also remains locked in minor releases.

### Schedule
{:.no_toc}

*Please note: This schedule is subject to change.*

Product | Date | Issues | Description
:------ |:---- |:------ |:-----------
Alpha 1 | Mar 2019 | [Alpha issues](https://github.com/NIEM/NIEM-Releases/milestone/3?closed=1) | Major domain content submissions due.
Beta 1 | Aug 2019 | [Beta issues](https://github.com/NIEM/NIEM-Releases/milestone/4?closed=1) | Harmonize and refine alpha changes.  Smaller content submissions, code table updates, and new requests may still be addressed during this time.
Release Candidate (RC) 1 | Sep 2019 |  | QA and preparations for the release.  Only bug fixes are considered during this stage; other requests will be queued for the following release.
Release | Oct 2019 | | Publish release and update content tools (SSGT, Movement, and Migration Tool)

Additional phases (e.g., Beta 2) may be added as needed during the development process.

### Major changes
{:.no_toc}

- **Biometrics**: Added and updated DNA and pedigree components [(#43)](https://github.com/NIEM/NIEM-Releases/issues/43)
- **Emergency Management**: Added new components to support the Public Health Emergency Operations Center (PH EOC) Minimum Data Set [(#42)](https://github.com/NIEM/NIEM-Releases/issues/42)
- **Justice**:
  - Updated FBI NDEx codes [(#39)](https://github.com/NIEM/NIEM-Releases/issues/39)
  - Updated FBI UCR codes [(#59)](https://github.com/NIEM/NIEM-Releases/issues/59)
  - Updated FBI NCIC codes [(#63)](https://github.com/NIEM/NIEM-Releases/issues/63)
  - Removed FBI NIBRS namespace [(#60)](https://github.com/NIEM/NIEM-Releases/issues/60)
  - Removed FBI CJIS namespace [(#68)](https://github.com/NIEM/NIEM-Releases/issues/68)
- **Core Supplement 4.0.2**: Updated Core-dependent code tables [(#35)](https://github.com/NIEM/NIEM-Releases/issues/35)

See the [README](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.2beta1), [4.2 issue list](https://github.com/NIEM/NIEM-Releases/issues?q=label%3A4.2+is%3Aclosed), or [4.2 project board](https://github.com/NIEM/NIEM-Releases/projects/2) for more details.

---

## All NIEM Releases

NIEM [release packages](../reference/artifacts/releases/) are available on [GitHub](https://github.com/NIEM/NIEM-Releases) and [release.niem.gov](https://release.niem.gov/niem/) (NIEM's original publication site).

There are also online tools available to search and view NIEM release content:

- The [Schema Subset Generation Tool (SSGT)]({{ site.data.links.ssgt }}) can be used with any published release to search the model and build XML schema subsets for use in IEPDs.  Go to `Options` to choose a previous release.  *[Learn more about the SSGT.]({{ site.data.pages.ssgt }})*

- [Movement]({{ site.data.links.movement }}) can be used with the current release to search the model.  *[Learn more above Movement.]({{ site.data.pages.movement }})*

<table>
  <thead>
    <tr>
      <th>Release</th>
      <th>Release Package Links</th>
      <th>Zip</th>
      <th>Info</th>
      <th title="NIEM Naming and Design Rules Specification">
        <a href="../reference/specifications/ndr">Naming and <br>Design Rules</a>
      </th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.2beta1">NIEM 4.2-beta1</a>
        </b>
        <br><i>(Latest draft)</i>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-4.2beta1">GitHub</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-4.2beta1.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.2beta1">Readme</a>
      </td>
      <td>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html">NDR 4.0</a>
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
        <br><i>(Current release)</i>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-4.1">GitHub</a> |
        <a href="https://release.niem.gov/niem/4.1/">release.niem.gov</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-4.1.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.1">Readme</a>
      </td>
      <td>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html">NDR 4.0</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/issues">Submit feedback</a> <br>
        Also available in <a href="https://beta.movement.niem.gov/#/">Movement</a>
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
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-4.0.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.0">Readme</a>
      </td>
      <td>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html">NDR 4.0</a>
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
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-3.0.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-3.0">Info</a>
      </td>
      <td>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html">NDR 3.0</a>
      </td>
      <td></td>
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
