---
title: Augmentation Point Pattern
---
An augmentation point is a special substitution group head element contained within object types. It acts as a hook, allowing domains and IEPDs to define substitutable augmentations in their own local namespaces but use them along with the original, augmentable type.

For example, the Justice domain has additional properties related to nc:ConveyanceType. It defines local augmentation j:ConveyanceAugmentation and adds it to the substitution group for nc:ConveyanceAugmentationPoint, the augmentation point element of nc:ConveyanceType. Wherever nc:ConveyanceType is used in NIEM, the Justice augmentation can also be used via element substitution.

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
          <td>Name of the augmentable type / augmentation point element</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5">Rule 7-5 How to name a component</a> <br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8">NDR Section 10.8 Component naming rules</a></td>
        </tr>
        <tr>
          <td><code>{$Definition}</code></td>
          <td>Augmentable type definition</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-25" title="NDR Rule 9-25: Complex type has definition">NDR Rule 9-25: Complex type has definition</a><br>
            <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-36" title="NDR Rule 9-36: Element has definition">NDR Rule 9-36: Element has definition</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1: Human-readable documentation">NDR Section 11.6.1: Human-readable documentation</a></td>
        </tr>
        <tr>
          <td><code>{$Parent}</code></td>
          <td>QName of the parent <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_9.1">type</a></td>
          <td>"structures:ObjectType" or other NIEM type</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-2">Rule 10-2 Complex object types are derived from structures:ObjectType</a></td>
        </tr>
        <tr>
        	<td><code>{$ElementName}</code></td>
        	<td>The QName of the element referenced</td>
        	<td>Required<br>
        	Repeat element ref line for each sub-property</td>
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

### Augmentation Type and Augmentation Point Element
<pre>&lt;xs:complexType name="{$Name}Type"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation>A data type for a(n) {$Definition}&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
    &lt;xs:complexContent&gt;
      &lt;xs:extension base="{$Parent}"&gt;
        &lt;xs:sequence&gt;
          &lt;xs:element ref="{$ElementName}" minOccurs="{$Min}" maxOccurs="{$Max}"/&gt;
          &lt;xs:element ref="{$Name}AugmentationPoint" minOccurs="{$Min}" maxOccurs="{$Max}"/&gt;
        &lt;/xs:sequence&gt;
      &lt;/xs:extension&gt;
    &lt;/xs:complexContent&gt;
  &lt;/xs:complexType&gt;

  &lt;xs:element name="{$Name}AugmentationPoint" abstract="true"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;An augmentation point for {$Name}Type&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:element&gt;
</pre>

### Related NDR Rules
* [NDR Section 10.4: Augmentations](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.4)
* [NDR Rule 10-21: Augmentable type has augmentation point element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-21)
* [NDR Rule 10-22: Augmentable type has at most one augmentation point element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-22)
* [NDR Rule 10-23: Augmentation point corresponds to augmentable type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-23)
* [NDR Rule 10-24: An augmentation point has no type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-24)
* [NDR Rule 10-25: An augmentation point has no substitution group](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-25)
* [NDR Rule 10-26: Augmentation point element may only be referenced by its type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-26)
* [NDR Rule 10-27: Augmentation point reference is optional](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-27)
* [NDR Rule 10-28: Augmentation point reference is unbounded](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-28)
* [NDR Rule 10-29: Augmentation point reference must be last particle](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-29)
* [NDR Rule 11-31: Standard opening phrase for element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-31)
* [NDR Rule 11-32: Standard opening phrase for complex type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-32)

### Example
* [NDR Figure 10-9: Definition of augmentable type nc:PersonType](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#figure_10-9)
* [NDR Figure 10-10: Declaration of augmentation point element nc:PersonAugmentationPoint](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#figure_10-11)
* [nc:ConveyanceType (augmentable type) and nc:ConveyanceAugmentationPoint (augmentation point element)](http://release.niem.gov/niem/niem-core/3.0/niem-core.xsd)