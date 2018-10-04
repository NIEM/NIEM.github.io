---
title: Abstract and Substitutable Elements Pattern
short: Abstract and Substitution Pattern
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
          <td><code>{$AbstractName}</code></td>
          <td>The name of the abstract element. This element serves as the head of the substitution group.</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-37" title="NDR Rule 9-37: Untyped element is abstract">NDR Rule 9-37: Untyped element is abstract</a> <br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-15" title="NDR Rule 11-15: Name of element that ends in 'Abstract' is abstract">NDR Rule 11-15: Name of element that ends in "Abstract" is abstract</a></td>
      </tr>
      <tr>
          <td><code>{$SubstitutableName}</code></td>
          <td>The name of the substitutable element. In an XML instance, this element may be substituted for any occurrence of ($AbstractName}.</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5" title="Rule 7-5 How to name a component">Rule 7-5 How to name a component</a> <br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8" title="NDR Section 9.2.1 Component naming rules">NDR Section 10.8 Component naming rules</a></td>
      </tr>
      <tr>
          <td><code>{$RepresentationTerm}</code></td>
          <td>A required <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8.7" title="Representation term">representation term</a> for elements with simple content</td>
          <td>Optional</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#table_10-2" title="NDR Table 10-2 Representation terms">NDR Table 10-2 Representation terms</a> <br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-16" title="Rule 11-16 Element with simple content has representation term">Rule 11-16 Element with simple content has representation term</a></td>
      </tr>
      <tr>
          <td><code>{$Type}</code></td>
          <td>The QName of the complex data type</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-46" title="Rule 9-46 Elements are nillable">Rule 9-46 Elements are nillable</a><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-13" title="Rule 11-13 Element has a complex data type"></a></td>
      </tr>
      <tr>
          <td><code>{$Nillable}</code></td>
          <td>"true", if the property can have a nil value</td>
          <td>Optional</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-23" title="NDR Rule 9-23: Code has definition">NDR Rule 9-23: Code has definition</a><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1: Human-readable documentation"></a></td>
      </tr>
      <tr>
          <td><code>{$Definition}</code></td>
          <td>The <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#definition_data_definition" title="Data definition">data definition</a> of the property</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1 How to write component definitions">NDR Section 11.6.1 How to write component definitions</a><br>
            <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_11.6.1.1" title="NDR Section 11.6.1.1 Data definition opening phrases">NDR Section 11.6.1.1 Data definition opening phrases</a> <br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-31" title="Rule 11-31 Standard opening phrase for elements">Rule 11-31 Standard opening phrase for elements</a></td>
      </tr>
  	</tbody>
  </table>

### Abstract and Substitutable Elements Pattern
  <pre>&lt;xs:element name="{$AbstractName}" abstract="true" &gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation>A data concept for a(n) {$Definition}&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:element&gt;

  &lt;xs:element name="{$SubstitutableName}{$RepresentationTerm}" type="{$Type}" substitutionGroup="{$AbstractName}" nillable="{$Nillable}"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation>A(n) {$Definition}&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:element&gt;
</pre>

### Related NDR Rules
* [NDR Rule 9-36: Element has definition](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-36)
* [NDR Rule 9-41: Element type is not simple type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-41)
* [NDR Rule 10-62: Element with simple content has representation term](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-62)
* [NDR Rule 10-63: Name has representation term when appropriate](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-63)
* [NDR Rule 10-64: Name has representation term only when appropriate](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-64)
* [NDR Rule 11-18: Element substitution group defined by conformant schema](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-18)
* [NDR Rule 11-31: Standard opening phrase for element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-31)
* [NDR Rule 11-32: Standard opening phrase for complex type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-32)

### Example
* [LocationAddressAbstract] - elements LocationAddressAbstract (abstract) and Address (susbstitutable)
