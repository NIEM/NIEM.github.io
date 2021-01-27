---
  title: NIEM Naming and Design Rules (NDR) Specification 5.0 Changes
  short: Changes
  description: Review the major changes made to the NDR from version 4.0 to version 5.0.
  icon: fa-pencil
---

The NIEM Naming and Design Rules (NDR) specification was updated from [version 4.0]({{site.data.links.ndr4}}) to [version 5.0]({{site.data.links.ndr5}}).

{:toc}
- TOC

See [highlighted changes](https://niem.github.io/NIEM-NDR/v5.0/changes-since-v4.0.html) of the specification text.

## Highlights

- Simplified the folder layout in the release package, removing version folders and unnecessary nesting [(#140)](https://github.com/NIEM/NIEM-Releases/issues/140)

- Changed the character encoding of the XML schemas from "US-ASCII" to "UTF-8" for better international support [(#125)](https://github.com/NIEM/NIEM-Releases/issues/125)

- Added attribute xml:lang to reference schemas [(#153)](https://github.com/NIEM/NIEM-Releases/issues/153)

- Updated structures and appinfo utility schemas to version 5.0 based on NDR updates [(#157)](https://github.com/NIEM/NIEM-Releases/issues/157)

- Reestablished the structures:sequenceID attribute [(#154)](https://github.com/NIEM/NIEM-Releases/issues/154)

- Updated the conformance targets to correspond with the new 5.0 version of the NDR

## New rules

{% assign rows = site.data.ndr["5_0"].diff-new-rules %}

Several new rules have been added to the NDR for 5.0:

{% for row in rows %}

<details style="padding-bottom: 10px;">
  <summary>
    <a href="{{site.data.links.ndr5}}#rule_{{row.Num}}">Rule {{row.Num}}</a>
    <span style="font-weight: lighter;"> ({{ row.Targets}})</span>: {{ row.Title }}
  </summary>

  <p style="padding-left: 20px; padding-top: 10px">{{ row.Text }}</p>
</details>

{% endfor %}

## Modified rule conformance targets

In NDR 4.0, the following rule only applied to REF.  In 5.0, it is now applied to EXT as well.

<details style="padding-bottom: 10px;">
  <summary>
    <a href="{{site.data.links.ndr5}}#rule_10-70">Rule 10-70</a>
    <span style="font-weight: lighter;"> (REF, EXT)</span>: External adapter type indicator annotates complex type
  </summary>

  <p style="padding-left: 20px; padding-top: 10px">The attribute {http://release.niem.gov/niem/appinfo/5.0/}externalImportIndicator MUST be owned by an element xs:import.</p>
</details>

## Modified rule numbers

{% assign rows = site.data.ndr["5_0"].diff-rule-nums %}

Due to the addition of the new rules outlined above, rule numbers for {{rows.size}} rules from the 4.0 NDR have adjusted:

<table>
  <tr>
    <th>NDR&nbsp;4.0</th>
    <th>NDR&nbsp;5.0</th>
    <th>Applicability</th>
    <th>Title</th>
  </tr>
  {% for row in rows %}
  <tr>
    <td><a href="{{site.data.links.ndr4}}#rule_{{row.OldRule}}">{{row.OldRule}}</a></td>
    <td><a href="{{site.data.links.ndr5}}#rule_{{row.NewRule}}">{{row.NewRule}}</a></td>
    <td>{{row.Targets}}</td>
    <td>{{row.Title}}</td>
  </tr>
  {% endfor %}
</table>
