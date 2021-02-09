---
  title: Naming and Design Rules Change History
  short: Change History
  description: The NIEM Naming and Design Rules Specification is updated with major NIEM releases, occurring every three years.  The following highlights the changes that have been made.
  icon: fa-pencil
---

{{ page.description }}

{:toc}
- TOC

## NDR 5.0 Changes

The NIEM Naming and Design Rules (NDR) specification was updated from [version 4.0]({{site.data.links.ndr4}}) to [version 5.0]({{site.data.links.ndr5}}) in 2020, corresponding with the NIEM 5.0 major release.

**Key changes include**

- Simplified the folder layout in the release package, removing version folders and unnecessary nesting [(#140)](https://github.com/NIEM/NIEM-Releases/issues/140)

- Changed the character encoding of the XML schemas from "US-ASCII" to "UTF-8" for better international support [(#125)](https://github.com/NIEM/NIEM-Releases/issues/125)

- Added attribute xml:lang to reference schemas [(#153)](https://github.com/NIEM/NIEM-Releases/issues/153)

- Updated structures and appinfo utility schemas to version 5.0 based on NDR updates [(#157)](https://github.com/NIEM/NIEM-Releases/issues/157)

- Reestablished the structures:sequenceID attribute [(#154)](https://github.com/NIEM/NIEM-Releases/issues/154)

- Updated the conformance targets to correspond with the new 5.0 version of the NDR

See [highlighted changes](https://niem.github.io/NIEM-NDR/v5.0/changes-since-v4.0.html) of the specification text.

### New rules

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

### Modified rules

**Modified rule conformance targets**

In NDR 4.0, the following rule only applied to REF.  In 5.0, it is now applied to EXT as well.

<details style="padding-bottom: 10px;">
  <summary>
    <a href="{{site.data.links.ndr5}}#rule_10-70">Rule 10-70</a>
    <span style="font-weight: lighter;"> (REF, EXT)</span>: External adapter type indicator annotates complex type
  </summary>

  <p style="padding-left: 20px; padding-top: 10px">The attribute {http://release.niem.gov/niem/appinfo/5.0/}externalImportIndicator MUST be owned by an element xs:import.</p>
</details>

**Modified rule numbers**

{% assign rows = site.data.ndr["5_0"].diff-rule-nums %}

Due to the addition of the new rules outlined above, inserted throughout the specification, some rule numbers from the NDR 4.0 version have shifted in the 5.0 version.

<details>
  <summary>Expand to view the {{rows.size}} adjusted rule numbers</summary>

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

</details>

---

## NDR 4.0 Changes

The NIEM Naming and Design Rules (NDR) specification was updated from [version 3.0]({{site.data.links.ndr3}}) to [version 4.0]({{site.data.links.ndr4}}) in 2017, corresponding with the NIEM 4.0 major release.

**Updated version from 3.0 to 4.0**, affecting:

- Namespaces: structures, appinfo, NDR functions namespace
- Conformance target identifiers: REF, EXT

**Now managing specification on GitHub** (<https://github.com/NIEM/NIEM-NDR/>) for:

- Revisions/updates/errata: posted to the document repository
- Comments/issues: posted as GitHub issues

**NDR Section 2.4.2 - Schematron updates**

- Eliminated warning rules (`sch:report`) that always fire
- Added attribute (`role="warning"`) to warning rules
- Broke apart overly-large rule on standard opening phrases into smaller rules

**NDR Section 5 - RDF updates**

- Simplified RDF representation
  - RDF is much simpler than v3, with direct properties instead of reification
  - Allows for more direct JSON representation via JSON-LD
- Removed RDF representation for metadata types

**NDR Section 6 & 8 - XML processing and defaults**

- Improved discussion of infoset augmentation, `fixed`, and `default`
- Allow use of fixed on attribute uses that are required in an instance

**NDR Section 10 & 11 - Naming**

- Relaxed rules on component naming from MUST to SHOULD (USMTF)
- Allow all valid ASCII characters in component names
  - Allowed: "A"-"Z", "a"-"z", "0"-"9", "-", "_", "."

**NDR Section 10 & 11 - Codes**

- Allow code elements and code types to be represented by methods other than enumerations
- Described as correspondence to a list of conceptual entities
- Relaxed rules for structure/content of code elements and types
- Relaxed naming rules for code elements and types

**NDR Section 12 - Linked data approach**

- Added attribute `structures:uri`
- Defined `structures:id` and `structures:ref` in terms of `structures:uri` (Appendix B)
- Allow properties of objects to be distributed across multiple objects with the same identifier
  - Removed requirement that elements with `structures:ref` have no properties
- Major rewrite to section 12.1, 12.2, addressing data's meaning, identity, and references

**Miscellaneous**

- Grammar, spelling, and narrative improvements
- Moved content of the *Local Terminology* namespace (`term`) into the *Application Information* namespace (`appinfo`)
- Explicitly allow structures namespace to be subset

([See full diffs](https://github.com/NIEM/NIEM-NDR/compare/niem-ndr-3.0...niem-ndr-4.0#diff-ba7b4561c4e855f66491aec616812509))

---

## NDR 3.0 Changes

The NIEM Naming and Design Rules (NDR) specification was updated from [version 1.3]({{site.data.links.ndr1_3}}) to [version 3.0]({{site.data.links.ndr3}}) in 2014, corresponding with the NIEM 3.0 major release.

Changes include:

- Replaced conformant indicator with conformance targets for reference schema, extension schema, conformant schema document set and conformance instance XML document.

- Updated the approach used for augmentations.  Replaced the use of type substitution with element substitution, and added augmentation point elements to object and association types.

- Added support for local vocabularies.

- Added structures:ref and merged content and reference elements.

- Added NDR Schematron rules to normatively define and validate conformance where possible.

- Replaced ComplexObjectType with ObjectType and AssociationType.

- Added multiple representations of code lists (code, literal).

- Removed appinfo base.

- Removed sequenceID, augmentation and metadata elements.

- Replaced external adaptor type indicator with an attribute.

- Added external import indicator.

- Replaced applies-to element with substitution groups for augmentations and applies-to types and applies-to elements for metadata.

- Replaced link metadata with relationship metadata.

- Replaced appinfo annotation elements with attributes.

- Replaced reference target annotations with XML schema type attribute.
