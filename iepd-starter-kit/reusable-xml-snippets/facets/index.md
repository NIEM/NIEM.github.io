---
title: Facet Pattern
---

A facet constrains the range of allowable values for simple content.

In NIEM, the most commonly used facets are enumerations (code values). Other examples of a facet include pattern, minLength, and maxExclusive.


## Variable Replacement Table
<table class="table table-hover">
      <tbody>
        <tr>
          <th width="164">Variable</th>
          <th width="334">Description</th>
          <th width="245">Usage</th>
          <th width="217">NDR Reference</th>
        </tr>
        <tr>
          <td><code>{$Name}</code></td>
          <td>Name of the code type</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8" title="NDR Section 10.8: Naming Rules">NDR Section 10.8: Naming Rules</a></td>
        </tr>
        <tr>
          <td><code>{$Definition}</code></td>
          <td>The definition of the code type</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-12" title="NDR Rule 9-12: Simple type has definition">NDR Rule 9-12: Simple type has definition</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-25" title="NDR Rule 9-25: Complex type has definition">NDR Rule 9-25: Complex type has definition</a></td>
        </tr>
        <tr>
          <td><code>{$XSDBase}</code></td>
          <td>The <a href="http://www.w3.org/TR/xmlschema-2/#built-in-datatypes" rel="nofollow">Schema built-in type</a> that the simple code type is restricting</td>
          <td>Required; often "xs:token"</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><code>{$Facet}</code></td>
          <td>The kind of facet. See "Facet" column in table below for values.</td>
          <td>Required. Repeat facet block for each facet value.</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><code>{$FacetValue}</code></td>
          <td>The value of the facet</td>
          <td>Required</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><code>{$FacetDefinition}</code></td>
          <td>The definition of the facet</td>
          <td>Required</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>

<table class="table table-hover">
      <tbody>
        <tr>
          <th width="164">Facet</th>
          <th width="350">Description</th>
          <th width="75">Text</th>
          <th width="75">Numeric</th>
          <th width="75">Date</th>
        </tr>
    <tr>
          <td>enumeration</td>
          <td>An allowable value (a code).</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>fractionDigits</td>
          <td>The maximum number of decimal places allowed.</td>
          <td>&nbsp;</td>
          <td>X</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>length</td>
          <td>The number of characters of a value.</td>
          <td>X</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>maxLength</td>
          <td>The maximum number of characters of a value.</td>
          <td>X</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>minLength</td>
          <td>The minimum number of characters of a value.</td>
          <td>X</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>minExclusive</td>
          <td>The lower bound - the number must be greater than this constraint.</td>
          <td>&nbsp;</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>minInclusive</td>
          <td>The lower bound - the number must be greater than or equal to this constraint.</td>
          <td>&nbsp;</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>maxExclusive</td>
          <td>The upper bound - the number must be less than this constraint.</td>
          <td>&nbsp;</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>maxInclusive</td>
          <td>The upper bound - the number must be less than or equal to this constraint.</td>
          <td>&nbsp;</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>pattern</td>
          <td>The regular expression that the value must match.</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>totalDigits</td>
          <td>The maximum number of digits allowed.</td>
          <td>&nbsp;</td>
          <td>X</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>whiteSpace</td>
          <td>The way white space (spaces, tabs, line feeds, carriage returns) will be handled.</td>
          <td>X</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
    </tbody>
</table>

### Facet Pattern
<pre>&lt;xs:simpleType name="{$Name}SimpleType"&gt;
     &lt;xs:annotation&gt;
      &lt;xs:documentation>A data type for a(n) {$Definition}&lt;/xs:documentation&gt;  
    &lt;/xs:annotation&gt;
    &lt;xs:restriction base="{$XSDBase}"&gt;
      &lt;xs:{$Facet} value="{$FacetValue}"&gt;
       &lt;xs:annotation&gt;
        &lt;xs:documentation>{$FacetDefinition}&lt;/xs:documentation&gt;
        &lt;/xs:annotation&gt;
      &lt;/xs:{$Facet}&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;
</pre>

### Related NDR Rules
* [NDR Rule 7-5: Component naming](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5)
* [NDR Rule 9-12: Simple type has definition](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-12)
* [NDR Rule 9-23: Code has definition](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-23)
* [NDR Rule 9-25: Complex type has definition](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-25)
* [NDR Rule 9-32: Simple content uses extension](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-32)
* [NDR Section 10.8: Naming Rules](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8)
* [NDR Rule 11-4: Name of simple type ends in "SimpleType"](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-4)
* [NDR Rule 11-9: Name of a code simple type ends in "CodeSimpleType"](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-9)
* [NDR Rule 11-10: Code simple type has enumerations](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-10)
* [NDR Rule 11-32: Standard opening phrase for complex type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-32)
* [NDR Rule 11-33: Standard opening phrase for simple type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-33)
* [NDR Section 11.6.1: Human-readable documentation](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1)

### Example
* [census:USCountyCodeSimpleType (enumerations)](http://release.niem.gov/niem/codes/census_uscounty/3.0/census_uscounty.xsd)
* [nc:AngularMinuteSimpleType (minInclusive and maxExclusive)](http://release.niem.gov/niem/niem-core/3.0/niem-core.xsd)
