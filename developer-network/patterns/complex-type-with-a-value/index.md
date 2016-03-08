---
title: Complex Type with a Value Pattern
---

## Variable Replacement Table

<table >
</table>

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
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8" title="NDR Section 10.8 Naming rules">NDR Section 10.8 Naming rules</a>
          <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5" title="Rule 7-5 How to name a component">Rule 7-5 How to name a component</a>
          <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8" title="NDR Section 10.8 Component naming rules">NDR Section 10.8 Component naming rules</a>
          <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-1" title="Rule 11-1 Type name ends in Type">Rule 11-1 Type name ends in "Type"</a>
          <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-2" title="Rule 11-2 Complex type name is upper camel case">Rule 11-2 Complex type name is upper camel case</a></td>
      </tr>
      <tr>
          <td><code>{$Definition}</code></td>
          <td>The <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8.7" title="Data definition">data definition</a> of the <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_9.1" title="Type">type</a>.</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1 How to write component definitions">NDR Section 11.6.1 How to write component definitions</a>
          <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-32" title="Rule 11-32 Standard opening phrase for complex types">Rule 11-32 Standard opening phrase for complex types</a></td>
      </tr>
      <tr>
          <td><code>{$SimpleTypeName}</code></td>
          <td>QName of the simple type being extended</td>
          <td>Required</td>
          <td></td>
      </tr>
      <tr>
          <td><code>{$AttributeName}</code></td>
          <td>The QName of the attribute being referenced. Note: Attributes are rarely used in NIEM.</td>
          <td></td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_11.3" title="NDR Section 11.3 Model group components">NDR Section 11.3 Model group components</a></td>
      </tr>
    </tbody>
</table>


### Value Pattern
	<xs:complexType name="{$Name}Type">
	    <xs:annotation>
	      <xs:documentation>A data type for a(n) {$Definition}</xs:documentation>
	    </xs:annotation>
	    <xs:simpleContent>
	      <xs:extension base="{$SimpleTypeName}">
	        <xs:attributeGroup ref="structures:SimpleObjectAttributeGroup"/>
	        <xs:attribute ref="{$AttributeName}" use="optional|required"/>
	      </xs:extension>
	    </xs:simpleContent>
	 </xs:complexType>

### Related NDR Rules
*   [Rule 11-11 Complex type with simple content has structures:SimpleObjectAttributeGroup](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-11 "Rule 11-11 Complex type with simple content has structures:SimpleObjectAttributeGroup")
