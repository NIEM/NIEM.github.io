---
  title: IEPD Specification Change History
  short: Change History
  description: The NIEM Information Exchange Package Documentation (IEPD) Specification can be updated with major NIEM releases, occurring every three years.  The following highlights the changes that have been made.
  icon: fa-pencil
---

{{ page.description }}

{:toc}
- TOC

Along with the NIEM 5.0 major release, the [Model Package Description (MPD) Specification, version 3.0.1]({{site.data.links.mpd_v3}}), was simplified, renamed, and updated to the [IEPD Specification, version 5.0]({{site.data.links.iepd_v5}}).

The MPD Specification was originally written to support multiple kinds of models, including releases, IEPDs, domain updates, and Enterprise Information Exchange Models (EIEMs).  In practice, however, IEPDs were almost the sole use case so the specification in 5.0 was tailored specifically to IEPDs and the potentially confusing *model package description (MPD)* terminology was removed.

{:.note}
> There was no update to the MPD Specification for the NIEM 4.0 major release, so the 3.0.1 version applies to all IEPDs using a release from NIEM 3.0 to NIEM 4.2.

### Key changes

Key changes to the 5.0 version of the specification include:

- Updated the name of the specification from "Model Package Description (MPD) Specification to Information Exchange Package Documentation (IEPD) Specification

- Replaced "MPD" terminology throughout the spec with "IEPD".

- Renamed the `mpd-catalog.xml` and `mpd-catalog.xsd` files as `iepd-catalog.xml` and `iepd-catalog.xsd`.

- Updated the IEPD catalog element and attribute names to replace `mpd` with `iepd`

- Updated the example IEPD for 5.0

### IEPD catalog changes

In the renamed `iepd-catalog.xsd` schema, the following elements and attributes have been renamed:

MPD 3.0.1 | IEPD 5.0
--- | ---
c:Catalog/c:MPD | c:IEPDCatalog - *(renamed and flattened)*
c:MPDInformation | c:IEPDInformation
c:mpdURI | c:iepdURI
c:mpdClassURIList | c:iepdConformanceTargetIdentifierURIList
c:mpdName | c:iepdName
c:mpdVersionID | c:iepdVersionID
c:MPDChangeLog | c:IEPDChangeLog

Please see the new [IEPD catalog schema]({{site.data.links.mpd_catalog_xsd}}) and [IEPD catalog example]({{site.data.links.mpd_catalog_example}}) for more.

### Conformance targets

The following conformance target applicability codes have been updated in version 5.0:

- **[WF-IEPD]({{ site.data.links.iepd_v5 | append: "#definition_well-formed_IEPD" | relative_url }})** (Well-formed IEPD) - *was **MPD** (Model Package Description)*
- **[IEPD-catalog]({{ site.data.links.iepd_v5 | append: "#definition_IEPD_catalog_document" | relative_url }})** (IEPD catalog document) - *was **MPD-catalog** (MPD catalog document)*

The following applicability codes remained unchanged:

- **[IEPD]({{ site.data.links.iepd_v5 | append: "#definition_information_exchange_package_documentation" | relative_url }})** (Information Exchange Package Documentation)
- **[IEP]({{ site.data.links.iepd_v5 | append: "#definition_information_exchange_package" | relative_url }})** (Information Exchange Package)
- **[FN-IEP]({{ site.data.links.iepd_v5 | append: "#definition_full_NIEM_information_exchange_package" | relative_url }})** (Full-NIEM IEP)
- **[Schema-subset]({{ site.data.links.iepd_v5 | append: "#definition_schema_document_subset" | relative_url }})** (Schema document subset)
- **[XML-catalog]({{ site.data.links.iepd_v5 | append: "#definition_XML_catalog_document" | relative_url }})** (XML catalog document)

### Removed rules

{% assign rows = site.data.iepd["5_0"].diff-removed-rules %}

Two rules have been removed from the IEPD specification for version 5.0:

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

**Added missing rule titles**

Two rule titles were left blank in the MPD 3.0 specification, which has been corrected in the IEPD 5.0 specification:

{% assign rows = site.data.iepd["5_0"].diff-rule-titles %}

<table>
  <tr>
    <th>MPD&nbsp;3.0</th>
    <th>IEPD&nbsp;5.0</th>
    <th>Applicability</th>
    <th>Title</th>
  </tr>
  {% for row in rows %}
  <tr>
    <td><a href="{{site.data.links.mpd_v3}}#rule_{{row.OldRule}}">{{row.OldRule}}</a></td>
    <td><a href="{{site.data.links.iepd_v5}}#rule_{{row.NewRule}}">{{row.NewRule}}</a></td>
    <td>{{row.Targets}}</td>
    <td>{{row.Title}}</td>
  </tr>
  {% endfor %}
</table>

**Modified rule numbers**

{% assign rows = site.data.iepd["5_0"].diff-rule-nums %}

Due to the removal of the two 3.0 rules outlined above, some rule numbers from the MPD 3.0 version have shifted in the IEPD 5.0 version.

<details>
  <summary>Expand to view the {{rows.size}} adjusted rule numbers</summary>

  <table>
    <tr>
      <th>MPD&nbsp;3.0</th>
      <th>IEPD&nbsp;5.0</th>
      <th>Applicability</th>
      <th>Title</th>
    </tr>
    {% for row in rows %}
    <tr>
      <td><a href="{{site.data.links.mpd_v3}}#rule_{{row.OldRule}}">{{row.OldRule}}</a></td>
      <td><a href="{{site.data.links.iepd_v5}}#rule_{{row.NewRule}}">{{row.NewRule}}</a></td>
      <td>{{row.Targets}}</td>
      <td>{{row.Title}}</td>
    </tr>
    {% endfor %}
  </table>

</details>
