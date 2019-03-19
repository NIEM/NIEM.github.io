---
title: Complex Type with Sub-Properties
short: Complex Type (sub-properties) Pattern
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
            <td>Name of the <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_9.1" title="Type">type</a></td>
            <td>Required</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.2.1" title="NDR Section 10.2.1 General object types">NDR Section 10.2.1 General object types</a>
            <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5" title="Rule 7-5 How to name a component">Rule 7-5 How to name a component</a>
            <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8" title="NDR Section 10.8 Component naming rules">NDR Section 10.8 Component naming rules</a>
            <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-1" title="Rule 11-1 Type name ends in Type">Rule 11-1 Type name ends in "Type"</a>
            <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-2" title="Rule 11-2 Complex type name is upper camel case">Rule 11-2 Complex type name is upper camel case</a></td>
        </tr>
        <tr>
            <td><code>{$Definition}</code></td>
            <td>The <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8.7" title="Data definition">data definition</a> of the <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_9.1" title="Type">type</a></td>
            <td>Required</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1 How to write component definitions">NDR Section 11.6.1 How to write component definitions</a>
            <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-32" title="Rule 11-32 Standard opening phrase for complex types">Rule 11-32 Standard opening phrase for complex types</a></td>
        </tr>
        <tr>
            <td><code>{$Parent}</code></td>
            <td>QName of the parent <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_9.1" title="Type">type</a></td>
            <td>"structures:ObjectType" or other NIEM type</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-2" title="Rule 10-2 Complex object types are derived from structures:ObjectType">Rule 10-2 Complex object types are derived from structures:ObjectType</a></td>
        </tr>
        <tr>
            <td><code>{$ElementName}</code></td>
            <td>The QName of the element referenced</td>
            <td>Required, Line is repeatable</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_11.3" title="NDR Section 11.3 Model group components">NDR Section 11.3 Model group components</a></td>
        </tr>
        <tr>
            <td><code>{$AttributeName}</code></td>
            <td>The QName of the attribute referenced.  Note: Attributes are rarely used in NIEM.</td>
            <td>Line is repeatable</td>
            <td></td>
        </tr>
        <tr>
            <td><code>{$Min}</code></td>
            <td>The minimum number of times the element can occur within the <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_9.1" title="Type">type</a></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><code>{$Max}</code></td>
            <td>The maximum number of times the element can occur within the <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_9.1" title="Type">type</a></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

### Complex Type
	<xs:complexType name="{$Name}Type">
	    <xs:annotation>
	      <xs:documentation>A data type for a(n) {$Definition}</xs:documentation>   
	    </xs:annotation>
	    <xs:complexContent>
	      <xs:extension base="{$Parent}">
	        <xs:sequence>
	            <xs:element ref="{$ElementName}" minOccurs="{$Min}" maxOccurs="{$Max}"/>
	        </xs:sequence>
	        <xs:attribute ref="{$AttributeName}" use="optional|required"/>
	      </xs:extension>
	    </xs:complexContent>
	</xs:complexType>

## Example
* [SuperHero Example]({{ site.superhero_iepd_path }}/blob/master/base_iepd/base-xsd/extension/SuperHero-extension.xsd)

  	
