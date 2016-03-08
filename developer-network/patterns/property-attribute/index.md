---
title: Property (Attribute) Pattern
---

## Variable Replacement Table

<table class="table table-hover">
	<tbody>
        <tr>
            <th>Variable</th>
            <th>Description</th>
            <th>Usage</th>
            <th>NDR Reference</th>
        </tr>
        <tr>
            <td><code>{$Name}</code></td>
            <td>The name of the attribute</td>
            <td>Required</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5" title="Rule 7-5 How to name a component">Rule 7-5 How to name a component</a>
            <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8" title="NDR Section 10.8Component naming rules">NDR Section 10.8 Component naming rules</a>
            <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-20" title="Rule 11-20 Attribute name has representation term">Rule 11-20 Attribute name has representation term</a></td>
        </tr>
        <tr>
            <td><code>{$RepresentationTerm}</code></td>
            <td>A required <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8.7" title="Representation term">representation term</a></td>
            <td>Required</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#table_10-2" title="NDR Table 10-2 Representation terms">NDR Table 10-2 Representation terms</a></td>
        </tr>
        <tr>
            <td><code>{$Type}</code></td>
            <td>The QName of the simple type</td>
            <td>Required</td>
            <td></td>
        </tr>
        <tr>
            <td><code>{$OpeningPhrase}</code></td>
            <td>The opening phrase for the <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8.7" title="Data definition">data definition</a> of this attribute</td>
            <td>Required</td>
            <td></td>
        </tr>
        <tr>
            <td><code>{$Definition}</code></td>
            <td>The <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8.7" title="Data definition">data definition</a> of the attribute</td>
            <td>Required</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1 How to write component definitions">NDR Section 11.6.1 How to write component definitions</a></td>
        </tr>
    </tbody>
</table>

### Attribute Declaration
	<xs:attribute name="{$Name}{$RepresentationTerm}" type="{$Type}">
		<xs:annotation>
	      <xs:documentation>{$OpeningPhrase} {$Definition}</xs:documentation>
	    </xs:annotation>
	</xs:attribute>

### Related NDR Rules

*   [NDR Section 9.2.3 Attribute Declaration](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_9.2.3 "NDR Rule/ attributes")

