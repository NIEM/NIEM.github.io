---
title: Code Set Substitution Pattern
---

## Variable Replacement Table
<table class="table table-hover">
      <tbody>
        <tr>
          <th width="153">Variable</th>
          <th width="276">Description</th>
          <th width="298">Usage</th>
          <th width="237">NDR Reference</th>
        </tr>
        <tr>
          <td><code>{$Name}</code></td>
          <td>Name of the code element / type</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5" title="NDR Rule 7-5: Component naming">NDR Rule 7-5: Component naming</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8" title="NDR Section 10.8: Naming Rules">NDR Section 10.8: Naming Rules</a></td>
        </tr>
        <tr>
          <td><code>{$Definition}</code></td>
          <td>The definition of the code element / type</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-12" title="NDR Rule 9-12: Simple type has definition">NDR Rule 9-12: Simple type has definition</a><br>
            <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-25" title="NDR Rule 9-25: Complex type has definition">NDR Rule 9-25: Complex type has definition</a><br>
            <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-36" title="NDR Rule 9-36: Element has definition">NDR Rule 9-36: Element has definition</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1: Human-readable documentation">NDR Section 11.6.1: Human-readable documentation</a><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-3" title="NDR Rule 10-3: RoleOf element type is an object type"></a></td>
        </tr>
        <tr>
          <td><code>{$XSDBase}</code></td>
          <td>The <a href="http://www.w3.org/TR/xmlschema-2/#built-in-datatypes" rel="nofollow">Schema built-in type</a> that the simple code type is restricting</td>
          <td>Required; often "xs:token"</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><code>{$CodeValue}</code></td>
          <td>The enumeration value (e.g., "GA")</td>
          <td>Required; Repeat enumeration block for each code value</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><code>{$CodeDefinition}</code></td>
          <td>The definition of the enumeration (e.g., "Georgia")</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-23" title="NDR Rule 9-23: Code has definition">NDR Rule 9-23: Code has definition</a><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1: Human-readable documentation"></a></td>
        </tr>
        <tr>
          <td><code>{$Nillable}</code></td>
          <td>"true", if the property can have a nil value</td>
          <td>Optional</td>
          <td>None</td>
        </tr>
      </tbody>
    </table>

### Code Object Type Pattern
<pre>&lt;xs:simpleType name="{$Name}CodeSimpleType"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation>A data type for a(n) {$Definition}&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;xs:restriction base="{$XSDBase}"&gt;
	&lt;xs:enumeration value="{$CodeValue}"&gt;
        &lt;xs:annotation&gt;
          &lt;xs:documentation>{$CodeDefinition}&lt;/xs:documentation&gt;
        &lt;/xs:annotation&gt;
      &lt;/xs:enumeration&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;
  
  &lt;xs:complexType name="{$Name}CodeType"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation>A data type for a(n) {$Definition}&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
    &lt;xs:simpleContent&gt;
      &lt;xs:extension base="{$Name}CodeSimpleType"&gt;
        &lt;xs:attributeGroup ref="structures:SimpleObjectAttributeGroup" /&gt;
      &lt;/xs:extension&gt;
    &lt;/xs:simpleContent&gt;
 &lt;/xs:complexType&gt;
 
 &lt;xs:element name="{$Name}" abstract="true" &gt;
     &lt;xs:annotation&gt;
       &lt;xs:documentation>A data concept for a(n) {$Definition} &lt;/xs:documentation&gt;
     &lt;/xs:annotation&gt;
   &lt;/xs:element&gt;
  
  &lt;xs:element name="{$Name}Code" type="{$Name}CodeType" nillable="{$Nillable}"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation>A(n) {$Definition} &lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:element&gt;
</pre>

### Related NDR Rules
* [NDR Rule 9-32: Simple content uses extension](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-32)
* [NDR Rule 9-41: Element type is not simple type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-41)
* [NDR Rule 10-17: Name of code type ends in "CodeType"](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-17)
* [NDR Rule 10-62: Element with simple content has representation term](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-62)
* [NDR Rule 10-63: Name has representation term when appropriate](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-63)
* [NDR Rule 11-4: Name of simple type ends in "SimpleType"](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-4)
* [NDR Rule 11-9: Name of a code simple type ends in "CodeSimpleType"](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-9)
* [NDR Rule 11-10: Code simple type has enumerations](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-10)
* [NDR Rule 11-11: Complex type with simple content has structures:SimpleObjectAttributeGroup](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-11)
* [NDR Rule 11-13: Element type does not have a simple type name](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-13)
* [NDR Rule 11-31: Standard opening phrase for element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-31)
* [NDR Rule 11-32: Standard opening phrase for complex type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-32)
* [NDR Rule 11-33: Standard opening phrase for simple type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-33)

### Example
* [nc:LocationCounty (abstract element) and nc:LocationCountyCode (substitutable element)](http://release.niem.gov/niem/niem-core/3.0/niem-core.xsd)
* [census:USCountyCodeType and census:USCountyCodeSimpleType (code types)](http://release.niem.gov/niem/codes/census_uscounty/3.0/census_uscounty.xsd)