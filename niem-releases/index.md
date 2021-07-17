---
title: NIEM Releases
description: Information and resources for each NIEM release.
links:
- url: /niem-releases/5.1/
- url: /niem-releases/5.0/
- url: /niem-releases/4.2/
- url: /niem-releases/4.1/
- url: /niem-releases/4.0/
- url: /niem-releases/3.2/
- url: /niem-releases/3.1/
- url: /niem-releases/3.0/
- url: /niem-releases/2.1/
- url: /niem-releases/2.0/
- url: /niem-releases/1.0/
- url: /niem-releases/domain-timeline/
---

<style type="text/css">
    ul { margin-left: 1em; }

    td {
      vertical-align: top;
    }
</style>

{:.note}
> **[{{site.data.release.description}}](https://github.com/NIEM/NIEM-Releases/releases/tag/{{site.data.release.tag}}) is now available for review!**  Feedback is requested by end of the day on {{site.data.release.feedbackDue}}.  Click **[here](./draft/)** for more.

NIEM publishes annual releases on a 3-year cycle.  A major release one year will be followed by minor releases the next two years.

Major releases allow content changes to NIEM Core and domains, plus architectural changes as specified by the NIEM Naming and Design Rules.  Minor releases allow for domain-related content changes only; Core and the architecture remain fixed.

NIEM [release packages](../reference/artifacts/releases/) are available on both [GitHub](https://github.com/NIEM/NIEM-Releases) and [release.niem.gov](https://release.niem.gov/niem/) (the original publication site).

Please submit feedback to the NIEM releases [issue tracker](https://github.com/NIEM/NIEM-Releases/issues) (see [info](https://github.com/NIEM/NIEM-Releases/wiki/Issues) for help).

{% assign tag = site.data.release.tag %}

<table>
  <thead>
    <tr>
      <th>Release</th>
      <th>Schemas and Documentation</th>
      <th>Year</th>
      <th>Zip</th>
      <th>Info</th>
      <th>Elements</th>
      <th>NDR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <b><a href="./5.1">{{ site.data.release.description }}</a></b><br><i>(under development)</i>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/{{tag}}">GitHub</a>
        <!-- |
        <a href="https://release.niem.gov/niem/{{tag}}/">release.niem.gov</a>
         -->
      </td>
      <td>2021</td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/archive/{{tag}}.zip">Zip</a></td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/blob/{{tag}}/README.md">Readme</a></td>
      <td>{{ site.data.release.elements }}</td>
      <td><a href="{{site.data.links.ndr5}}">NDR 5.0</a></td>
    </tr>
    <tr>
      <td>
        <b><a href="./5.0">NIEM 5.0</a></b>
        <br><i>(current release)</i>
      </td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-5.0">GitHub</a> |
        <a href="https://release.niem.gov/niem/5.0/">release.niem.gov</a>
      </td>
      <td>2020</td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/archive/niem-5.0.zip">Zip</a></td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/README.md">Readme</a></td>
      <td>12,149</td>
      <td><a href="{{site.data.links.ndr5}}">NDR 5.0</a></td>
    </tr>
    <tr>
      <td><b><a href="./4.2">NIEM 4.2</a></b></td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-4.2">GitHub</a> |
        <a href="https://release.niem.gov/niem/4.2/">release.niem.gov</a>
      </td>
      <td>2019</td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/archive/niem-4.2.zip">Zip</a></td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-4.2/README.md">Readme</a></td>
      <td>11,505</td>
      <td><a href="{{site.data.links.ndr4}}">NDR 4.0</a></td>
    </tr>
    <tr>
      <td><b><a href="./4.1">NIEM 4.1</a></b></td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-4.1">GitHub</a> |
        <a href="https://release.niem.gov/niem/4.1/">release.niem.gov</a>
      </td>
      <td>2018</td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/archive/niem-4.1.zip">Zip</a></td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-4.1/README.md">Readme</a></td>
      <td>11,350</td>
      <td><a href="{{site.data.links.ndr4}}">NDR 4.0</a></td>
    </tr>
    <tr>
      <td><b><a href="./4.0">NIEM 4.0</a></b></td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-4.0">GitHub</a> |
        <a href="https://release.niem.gov/niem/4.0/">release.niem.gov</a>
      </td>
      <td>2017</td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/archive/niem-4.0.zip">Zip</a></td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-4.0/README.md">Readme</a></td>
      <td>11,000</td>
      <td><a href="{{site.data.links.ndr4}}">NDR 4.0</a></td>
    </tr>
    <tr>
      <td><b><a href="./3.2">NIEM 3.2</a></b></td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-3.2">GitHub</a> |
        <a href="https://release.niem.gov/niem/3.2/">release.niem.gov</a>
      </td>
      <td>2016</td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/archive/niem-3.2.zip">Zip</a></td>
      <td><a href="https://release.niem.gov/niem/3.2/niem-3.2-changelog.xlsx">Change log (xlsx)</a></td>
      <td>10,500</td>
      <td><a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html">NDR 3.0</a></td>
    </tr>
    <tr>
      <td><b><a href="./3.1">NIEM 3.1</a></b></td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-3.1">GitHub</a> |
        <a href="https://release.niem.gov/niem/3.1/">release.niem.gov</a>
      </td>
      <td>2015</td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/archive/niem-3.1.zip">Zip</a></td>
      <td><a href="https://release.niem.gov/niem/3.1/niem-3.1-changelog.xlsx">Change log (xlsx)</a></td>
      <td>8,700</td>
      <td><a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html">NDR 3.0</a></td>
    </tr>
    <tr>
      <td><b><a href="./3.0">NIEM 3.0</a></b></td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-3.0">GitHub</a> |
        <a href="https://release.niem.gov/niem/3.0/">release.niem.gov</a>
      </td>
      <td>2013</td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/archive/niem-3.0.zip">Zip</a></td>
      <td><a href="https://release.niem.gov/niem/3.0/niem-3.0-changelog.xlsx">Change log (xlsx)</a></td>
      <td>8,000</td>
      <td><a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html">NDR 3.0</a></td>
    </tr>
    <tr>
      <td><b><a href="./2.1">NIEM 2.1</a></b></td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-2.1">GitHub</a> |
        <a href="https://release.niem.gov/niem/2.1/">release.niem.gov</a>
      </td>
      <td>2009</td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/archive/niem-2.1.zip">Zip</a></td>
      <td><a href="https://release.niem.gov/niem/2.1/changelog.html">Change log (html)</a></td>
      <td>6,000</td>
      <td>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/1.3/niem-ndr-1.3.pdf">NDR 1.3</a> + <br>
        <a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/1.3/type-augmentation/niem-type-augmentation-1.0.pdf">supplement</a>
      </td>
    </tr>
    <tr>
      <td><b><a href="./2.0">NIEM 2.0</a></b></td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-2.0">GitHub</a> |
        <a href="https://release.niem.gov/niem/2.0/">release.niem.gov</a>
      </td>
      <td>2007</td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/archive/niem-2.0.zip">Zip</a></td>
      <td><a href="https://release.niem.gov/niem/2.0/changelog.html">Change log (html)</a></td>
      <td>4,000</td>
      <td><a href="https://reference.niem.gov/niem/specification/naming-and-design-rules/1.3/niem-ndr-1.3.pdf">NDR 1.3</a></td>
    </tr>
    <tr>
      <td><b><a href="./1.0">NIEM 1.0</a></b></td>
      <td>
        <a href="https://github.com/NIEM/NIEM-Releases/tree/niem-1.0">GitHub</a> |
        <a href="https://release.niem.gov/niem/1.0/">release.niem.gov</a>
      </td>
      <td>2006</td>
      <td><a href="https://github.com/NIEM/NIEM-Releases/archive/niem-1.0.zip">Zip</a></td>
      <td></td>
      <td>4,000</td>
      <td></td>
    </tr>
  </tbody>
</table>

There are also online tools available to search and view NIEM release content:

- The [Schema Subset Generation Tool (SSGT)]({{ site.data.links.ssgt }}) can be used with any published release to search the model and build XML schema subsets for use in IEPDs.  Go to `Options` to choose a previous release.  *[Learn more]({{ site.data.pages.ssgt | relative_url }})*

- [Movement]({{ site.data.links.movement }}) can be used with the current release to search the model.  *[Learn more]({{ site.data.pages.movement | relative_url }})*
