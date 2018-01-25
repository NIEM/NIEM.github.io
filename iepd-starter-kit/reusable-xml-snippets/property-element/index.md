---
title: Property (Element) Pattern
short: Element Pattern
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
            <td>The name of the property</td>
            <td>Required</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5" title="Rule 7-5 How to name a component">Rule 7-5 How to name a component</a>
            <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8" title="NDR Section 9.2.1 Component naming rules">NDR Section 9.2.1 Component naming rules</a></td>
        </tr>
        <tr>
            <td><code>{$RepresentationTerm}</code></td>
            <td>A required <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8.7" title="Representation term">representation term</a> for elements with simple content</td>
            <td>Required</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#table_10-2" title="NDR Table 10-2 Representation terms">NDR Table 10-2 Representation terms</a>
             <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-16" title="Rule 11-16 Element with simple content has representation term">Rule 11-16 Element with simple content has representation term</a></td>
        </tr>
        <tr>
            <td><code>{$Type}</code></td>
            <td>The QName of the complex type</td>
            <td>Required unless abstract</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-13" title="Rule 11-13 Element has a complex data type">Rule 11-13 Element has a complex data type</a></td>
        </tr>
        <tr>
            <td><code>{$Nillable}</code></td>
            <td>"true", if the property can have an empty value</td>
            <td>Optional</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-46" title="Rule 9-46 Elements are nillable">Rule 9-46 Elements are nillable</a></td>
        </tr>
        <tr>
            <td><code>{$OpeningPhrase}</code></td>
            <td>The opening phrase for the <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_11.6.1.1" title="Data definition">data definition</a> of this property</td>
            <td>Required</td>
            <td></td>
        </tr>
        <tr>
            <td><code>{$Definition}</code></td>
            <td>The <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_11.6.1.1" title="Data definition">data definition</a> of the property</td>
            <td>Required</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_11.6.1.1" title="NDR Section 11.6.1.1 Data definition opening phrases">NDR Section 11.6.1.1 Data definition opening phrases</a>
            <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1 How to write component definitions">NDR Section 11.6.1 How to write component definitions</a>
            <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-31" title="Rule 11-31 Standard opening phrase for elements">Rule 11-31 Standard opening phrase for elements</a></td>
        </tr>
    </tbody>
</table>

**Note:** The *nillable* attribute may be removed if it is set to "false".
{: class="bg-info"}

### Property Declaration
	<xs:element name="{$Name}{$RepresentationTerm}" type="{$Type}" nillable="{$Nillable}">
		<xs:annotation>
	      <xs:documentation>{$OpeningPhrase} {$Definition}</xs:documentation>
	    </xs:annotation>
	</xs:element>

### Related NDR Rules
*   [NDR Section 9.2.1 Element declaration](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_9.2.1 "NDR Rule/ elements")

### Example

*   [SuperHero Example](../examples/SuperHero0/base-xsd/extension/SuperHero-extension.xsd)