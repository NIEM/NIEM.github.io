---
title: Association Pattern
---

An association is a specific relationship between objects. Associations can be used to relate two or more NIEM properties to each other, especially when characteristics of the relationship itself are needed.


## Variable Replacement Table
<table class="table table-hover">
      <tbody>
        <tr>
          <th width="186">Variable</th>
          <th width="385">Description</th>
          <th width="105">Usage</th>
          <th width="288">NDR Reference</th>
        </tr>
        <tr>
          <td><code>{$Name}</code></td>
          <td>Name of the association element / type</td>
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
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1: Human-readable documentation">NDR Section 11.6.1: Human-readable documentation</a></td>
        </tr>
        <tr>
          <td><code>{$ElementName}</code></td>
          <td>Element QName</td>
          <td>Required, Repeat element ref line for each object and characteristic of the association</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><code>{$ParentAssociationType}</code></td>
          <td>QName of the parent type</td>
          <td>Usually "nc:AssociationType".<br>
          Can also extend "structures:AssociationType" or an existing association type.</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><code>{$Min}</code></td>
          <td>The minimum number of allowed element occurrences within the type</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><code>{$Max}</code></td>
          <td>The maximum number of allowed element occurrences within the type</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
</table>

### Association Type Declaration
<pre>&lt;xs:complexType name="{$Name}AssociationType"&gt;
    &lt;xs:annotation&gt;
     &lt;xs:documentation>A data type for an association {$Definition}&lt;/xs:documentation&gt;  
    &lt;/xs:annotation&gt;
    &lt;xs:complexContent&gt;
     &lt;xs:extension base="{$ParentAssociationType}"&gt;
        &lt;xs:sequence&gt;
         &lt;xs:element ref="{$ElementName}" minOccurs="{$Min}" maxOccurs="{$Max}"/&gt;
        &lt;/xs:sequence&gt;
      &lt;/xs:extension&gt;
    &lt;/xs:complexContent&gt;
  &lt;/xs:complexType&gt;

  &lt;xs:element name="{$Name}Association" type="{$Name}AssociationType" nillable="{$Nillable}"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation>An association {$Definition}&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:element&gt;
</pre>

### Related NDR Rules
* [Association Definition](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#definition_association)
* [NDR Section 10.3: Associations](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.3)
* [NDR Rule 10-19: Association types are derived from association type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-19)
* [NDR Rule 10-20: Association element is an association type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-20)
* [NDR Rule 11-31: Standard opening phrase for element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-31)
* [NDR Rule 11-32: Standard opening phrase for complex type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-32)

### Example
* [nc:ContactInformationAssociation (element) and nc:ContactInformationAssociationType (type)](http://release.niem.gov/niem/niem-core/3.0/niem-core.xsd)