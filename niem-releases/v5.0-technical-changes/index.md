---
title: NIEM 5.0 Technical Architecture Changes
short: 5.0 Architecture Updates
description: Highlights of the NIEM technical architecture from NIEM version 4.* to version 5.0.
---

The changes to the NIEM technical architecture from NIEM version 4.* to version 5.0 are highlighted below.

### Specifications

- The NIEM Naming and Design Rules has been updated from [NDR 4.0]({{site.data.links.ndr4}}) to [NDR 5.0]({{site.data.links.ndr5}})

### Major Changes

- Simplified folder layout [(#140)](https://github.com/NIEM/NIEM-Releases/issues/140)

- Changed the character encoding of the XML schemas from "US-ASCII" to "UTF-8" for better international support [(#125)](https://github.com/NIEM/NIEM-Releases/issues/125)

- Added attribute xml:lang to reference schemas [(#153)](https://github.com/NIEM/NIEM-Releases/issues/153)

- Updated structures and appinfo utility schemas to version 5.0 based on NDR updates [(#157)](https://github.com/NIEM/NIEM-Releases/issues/157)

- Reestablished the structures:sequenceID attribute [(#154)](https://github.com/NIEM/NIEM-Releases/issues/154)

### New conformance targets

To specify that your NIEM XML schema should conform to the **NDR 5.0 reference rule set (REF)**, use the new NDR 5.0 REF conformance target:

```xml
<xs:schema
  xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/"
  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/5.0/#ReferenceSchemaDocument">
</xs:schema>
```

{:.note}
> This is the conformance target used by NIEM release schemas.

To specify that your NIEM XML schema should conform to the **NDR 5.0 extension rule set (EXT)**, use the new NDR 5.0 EXT conformance target:

```xml
<xs:schema
  xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/"
  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/5.0/#ExtensionSchemaDocument">
</xs:schema>
```

{:.note}
> This is the conformance target commonly used in IEPD extension schemas.

See more about how to use [conformance targets]({{site.data.pages.ctas}}).

### NDR rule differences

The following sections show the key rule changes between the NDR 4.0 and NDR 5.0 rule sets.

#### New 5.0 rules

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

#### Adjusted 5.0 rule numbers

{% assign rows = site.data.ndr["5_0"].diff-rule-nums %}

Due to the insertion into the NDR 5.0 of the new rules outlined above, rule numbers for {{rows.size}} rules from the 4.0 NDR have shifted.  The table below shows how the NDR 4.0 and 5.0 rule numbers correspond:

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

<br/>
