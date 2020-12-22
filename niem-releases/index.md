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

<!--
{:.note}
> **[NIEM 5.0-rc6](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0rc6) is now available for review!**  Feedback is requested by end of the day on Tuesday, October 26, 2020.  Click **[here](#under-development-niem-50)** for more.
 -->

- TOC
{:toc .toc}

## Current Release: NIEM 5.0

NIEM 5.0 is the current version of NIEM.  [Release notes](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0) are available on GitHub.

As a major release, content may be updated in any namespace, including Core. Changes have also been made to the NIEM architecture, which may be reflected in the structure and layout of the NIEM schemas.

NIEM 5.0 conforms to the ReferenceSchemaDocument (REF) target of the NIEM [Naming and Design Rules (NDR) Specification, version 5.0]({{ site.data.links.ndr5 }}).

There are several ways to access NIEM 5.0:

- You may download
  [the complete NIEM 5.0 schema package as a zip file](https://release.niem.gov/niem/5.0/niem-5.0.rel.zip)
  from [release.niem.gov](https://release.niem.gov/niem/5.0/).

- You may search the contents of NIEM 5.0 using [Movement](https://beta.movement.niem.gov).

- You may browse the contents of NIEM 5.0 and download schema subsets from the
  [NIEM Schema Subset Generation Tool (SSGT)](https://tools.niem.gov/niemtools/ssgt/index.iepd).

- NIEM releases are
  [published on Github](https://github.com/NIEM/NIEM-Releases). NIEM 5.0 is tagged as
  [niem-5.0](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0),
  and may be
  [downloaded as a zip file](https://github.com/NIEM/NIEM-Releases/archive/niem-5.0.zip).

Please send in any comment on the NIEM release as a [GitHub issue](https://github.com/NIEM/NIEM-Releases/issues).

---

## Under Development: NIEM 5.1

<!-- **[NIEM 5.0 release candidate 6](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0rc6)** is now available for review! -->

<!-- The release package is available at [NIEM-Releases](https://github.com/NIEM/NIEM-Releases/releases/tag/niem-5.0rc6) on GitHub and may also be downloaded as a [zip file](https://github.com/NIEM/NIEM-Releases/archive/niem-5.0rc6.zip).  The package includes XML schemas, documentation spreadsheets, a change log, a JSON-LD context file, and a README. -->

{: .note}
> Please email feedback to <niem-comments@lists.gatech.edu> or submit a new [5.1 issue](https://github.com/NIEM/NIEM-Releases/issues/new?labels=5.1). <!--  by the end of the day **Tuesday, October 26, 2020**. -->

NIEM publishes annual releases on a 3-year cycle.  A major release one year will be followed by minor releases the subsequent two years.

Development of the 5.1 minor release will occur during 2021 with the final 5.1 release expected to be published Fall 2021.

Progress can be tracked on the [NIEM-Releases GitHub repo]({{site.data.links.release_repo}}) via:

- the [5.1 issue tracker](https://github.com/NIEM/NIEM-Releases/issues?q=is%3Aopen+is%3Aissue+label%3A5.1), and
- updated draft schemas will be posted to the [dev branch]({{site.data.links.release_repo}}/tree/dev) during development

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

---

## All NIEM Releases

NIEM [release packages](../reference/artifacts/releases/) are available on [GitHub](https://github.com/NIEM/NIEM-Releases) and [release.niem.gov](https://release.niem.gov/niem/) (NIEM's original publication site).

There are also online tools available to search and view NIEM release content:

- The [Schema Subset Generation Tool (SSGT)]({{ site.data.links.ssgt }}) can be used with any published release to search the model and build XML schema subsets for use in IEPDs.  Go to `Options` to choose a previous release.  *[Learn more about the SSGT.]({{ site.data.pages.ssgt | relative_url }})*

- [Movement]({{ site.data.links.movement }}) can be used with the current release to search the model.  *[Learn more above Movement.]({{ site.data.pages.movement |relative_url }})*

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
