---
title: NIEM Releases
links:
- url: /niem-releases/v3.0-technical-changes/
- url: /niem-releases/v4.0-technical-changes/
- url: /niem-releases/v5.0-technical-changes/
---

<style type="text/css">
    ul { margin-left: 1em; }

    td {
      vertical-align: top;
    }
</style>

{:.note}
> **[NIEM 5.0-rc6](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0rc6) is now available for review!**  Feedback is requested by end of the day on Tuesday, October 26, 2020.  Click **[here](#under-development-niem-50)** for more.

- TOC
{:toc .toc}

## Current Release: NIEM 4.2

NIEM 4.2 is the current version of NIEM.  [Release notes](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.2) are available on GitHub.

As a minor release, domains and domain code tables have been updated as needed. Core, all Core code tables, and the NIEM architecture are locked until the next major release, NIEM 5.0.

NIEM 4.2 conforms to the ReferenceSchemaDocument (REF) target of the NIEM [Naming and Design Rules (NDR) Specification, version 4.0]({{ site.data.links.ndr }}).

There are several ways to access NIEM 4.2:

- You may download
  [the complete NIEM 4.2 schema package as a zip file](https://release.niem.gov/niem/4.2/niem-4.2.rel.zip)
  from [release.niem.gov](https://release.niem.gov/niem/4.2/).

- You may search the contents of NIEM 4.2 using [Movement](https://beta.movement.niem.gov).

- You may browse the contents of NIEM 4.2 and download schema subsets from the
  [NIEM Schema Subset Generation Tool (SSGT)](https://tools.niem.gov/niemtools/ssgt/index.iepd).

- NIEM releases are
  [published on Github](https://github.com/NIEM/NIEM-Releases). NIEM 4.2 is
  [tagged as niem-4.2](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.2),
  and may be
  [downloaded as a zip file](https://github.com/NIEM/NIEM-Releases/archive/niem-4.2.zip).

Please send in any comment on the NIEM release as a [GitHub issue](https://github.com/NIEM/NIEM-Releases/issues).

In addition to the XML schema release, 4.2 incorporates a [default JSON-LD context](https://github.com/NIEM/NIEM-Releases/blob/niem-4.2/jsonld-context/niem-4.2-context.json) for NIEM 4.2:

> NIEM JSON leverages JSON-LD (JSON for Linked Data), enabling it to maintain   consistency and to connect data across exchanges. The JSON-LD context is a JSON file that identifies, for every namespace for NIEM content, the namespace prefix and its corresponding namespace URI. <br> [See more about NIEM JSON](../json).

---

## Under Development: NIEM 5.0

**[NIEM 5.0 release candidate 6](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0rc6)** is now available for review!

The release package is available at [NIEM-Releases](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0rc6) on GitHub and may also be downloaded as a [zip file](https://github.com/NIEM/NIEM-Releases/archive/niem-5.0rc6.zip).  The package includes XML schemas, documentation spreadsheets, a change log, a JSON-LD context file, and a README.

{: .note}
> Please email feedback to <niem-comments@lists.gatech.edu> or submit a new [5.0 issue](https://github.com/NIEM/NIEM-Releases/issues/new?labels=5.0) by the end of the day **Tuesday, October 26, 2020**.

The final 5.0 release is expected to be published Fall 2020.

### Recent changes
{:.no_toc}

Several changes have been made based on RC5 feedback.  These are:

- Updated the type of element nc:EmploymentPayRateAmount from nc:TextType to nc:AmountType
- Renamed element it:CustomsValuationAmount as it:CustomsValuation

### Major content changes include
{:.no_toc}

- Addition of Controlled Unclassified Information (CUI) metadata
- Addition of content from the Generic Statistical Information Model (GSIM) content as a precursor to the upcoming Statistics domain
- Addition of new content from the Public Health Emergency Operations Center (PH-EOC) Minimum Data Set to the Emergency Management domain
- Major updates to the FBI NCIC, NDEx, and UCR code tables
- Simplified release folder layout and the removal of version numbers from file paths
- Updated character encoding (from US-ASCII to UTF-8) and addition of attribute xml:lang to the reference schemas for better international support
- Updated structures and appinfo utility schemas as part of the upcoming Naming and Design Rule (NDR) Specification 5.0 update
- Many harmonization content updates

### Schedule
{:.no_toc}

*Please note: This schedule is subject to change.*

Product | Date | Issues | Description
:------ |:---- |:------ |:-----------
Alpha 1 | Mar 2020 | [Alpha issues](https://github.com/NIEM/NIEM-Releases/milestone/6?closed=1) | Major domain content submissions due.
Beta 1 | June 2020 | [Beta issues](https://github.com/NIEM/NIEM-Releases/milestone/7?closed=1) | Harmonize and refine alpha changes.  Smaller content submissions, code table updates, and new requests may still be addressed during this time.
Release Candidate (RC) 1 | Aug 2020 | [RC1 issues](https://github.com/NIEM/NIEM-Releases/milestone/8?closed=1) | QA and preparations for the release.  Only bug fixes are considered during this stage; other requests will be queued for the following release.
Release Candidate (RC) 2 | Sep 2020 | [RC2 issues](https://github.com/NIEM/NIEM-Releases/milestone/9?closed=1) |
Release Candidate (RC) 3 | Oct 2020 | [RC3 issues](https://github.com/NIEM/NIEM-Releases/milestone/10?closed=1) |
Release Candidate (RC) 4 | Oct 2020 | [RC4 issues](https://github.com/NIEM/NIEM-Releases/milestone/11?closed=1) |
Release Candidate (RC) 5 | Oct 2020 | [RC5 issues](https://github.com/NIEM/NIEM-Releases/milestone/12?closed=1) |
Release Candidate (RC) 6 | Oct 2020 | [RC6 issues](https://github.com/NIEM/NIEM-Releases/milestone/13?closed=1) |
Release | Fall 2020 | | Publish release and update tools (SSGT, Movement,  Migration Tool, ConTesA)

Additional phases (e.g., Beta 2) may be added as needed during the development process.

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
      <th>Year</th>
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
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0rc6">NIEM 5.0 rc6</a>
        </b>
        <br><i>(draft release)</i>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-5.0rc6">GitHub</a>
      </td>
      <td>2020</td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/archive/niem-5.0rc6.zip">Zip</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0rc6/README.md">Readme</a>
      </td>
      <td>
        <a href="https://niem.github.io/NIEM-NDR/v5.0beta1/niem-ndr.html">NDR 5.0beta1</a>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/issues/new?labels=5.0">Submit feedback</a>
      </td>
    </tr>
    <tr>
      <td>
        <b>
          <a href="https://github.com/NIEM/NIEM-Releases/releases/tag/niem-4.2">NIEM 4.2</a>
        </b>
        <br><i>(Current release)</i>
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
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html">NDR 4.0</a>
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
