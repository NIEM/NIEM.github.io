---
title: Simple Type
---

## Variable Replacement Table
    
<table class="table table-hover">
	<tbody>	    
	    <tr>
			<th>Pattern Variable</th>
			<th>Description</th>
			<th>Usage</th>
			<th>NDR Reference</th>
		</tr>
	    <tr>
	        <td><code>{$Name}</code></td>
	        <td>Name of the <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_9.1" title="Type">type</a></td>
	        <td>Required</td>
	        <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8" title="NDR Section 10.8 Naming rules">NDR Section 10.8 Naming rules</a>
	        <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5" title="Rule 7-5 How to name a component">Rule 7-5 How to name a component</a>
	        <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8" title="NDR Section 10.8 Component naming rules">NDR Section 10.8 Component naming rules</a>
	        <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-4" title="Rule 11-4 Simple type name ends with SimpleType">Rule 11-4 Simple type name ends with "SimpleType"</a>
	        <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-5" title="Rule 11-5 Simple type name is upper camel case">Rule 11-5 Simple type name is upper camel case</a></td>
	    </tr>
	    <tr>
	        <td><code>{$Definition}</code></td>
	        <td>The <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8.7" title="Data definition">data definition</a> of the <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_9.1" title="Type">type</a></td>
	        <td>Required</td>
	        <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1 How to write component definitions">NDR Section 11.6.1 How to write component definitions</a>
	        <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-33" title="Rule 11-33 Standard opening phrase for simple types">Rule 11-33 Standard opening phrase for simple types</a></td>
	    </tr>
	    <tr>
	        <td><code>{$XSDBase}</code></td>
	        <td>The <a href="http://www.w3.org/TR/xmlschema-2/#built-in-datatypes" class="external text" rel="nofollow">Schema built-in type</a> that the<br> <span class="plainlinks"><a href="http://msdn.microsoft.com/en-us/library/ms256050.aspx" class="external text" rel="nofollow">simple type</a></span> is restricting</td>
	        <td>Required</td>
	        <td></td>
	    </tr>
	    <tr>
	        <td><code>{$Facets}</code></td>
	        <td>Results of <a href="../facets" title="Facet Pattern">Facet Pattern</a></td>
	        <td>Required</td>
	        <td></td>
	    </tr>
	</tbody>
</table>

### Pattern [simple object type] Pattern

	<xs:simpleType name="{$Name}SimpleType">
	   <xs:annotation>
	      <xs:documentation>A data type for a(n) {$Definition}</xs:documentation>
	   </xs:annotation>
	   <xs:restriction base="{$XSDBase}">
	     {$Facets}
	   </xs:restriction>
	</xs:simpleType>
