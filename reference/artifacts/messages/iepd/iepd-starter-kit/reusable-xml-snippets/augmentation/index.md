---
title: Augmentation Pattern
---

Augmentations are used in NIEM as a replacement for xsd:extension in cases where no new specialized object needs to be created. For example, if a domain has additional conveyance-related properties not already contained in or inherited by nc:ConveyanceType, that domain will create a conveyance augmentation rather than a conveyance extension. This augmentation can be substituted for the augmentation point already contained in nc:ConveyanceType (nc:ConveyanceAugmentationPoint), so the new domain conveyance properties can be reused everywhere nc:ConveyanceType occurs throughout NIEM.

The augmentation technique prevents the need for type substitution in IEPD instances in order to use additional properties on existing types. It also allows IEPDs to use augmentations from more than one domain together, which could not be done with type extension.

Type extension is still used for specialization. For example, NIEM Core 3.0 defines three specializations of nc:ConveyanceType - nc:AircraftType, nc:VehicleType, and nc:VesselType. An aircraft-specific property would not belong with the more general nc:ConveyanceType, so a new Aircraft object type extending nc:ConveyanceType is created instead.

*Note that augmentation elements are defined but not reused in NIEM domains. Reuse occurs only in IEPDs via element substitution.*

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
          <td>Association element / type name</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5" title="NDR Rule 7-5: Component naming">NDR Rule 7-5: Component naming</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8">NDR Section 10.8: Naming Rules</a></td>
        </tr>
        <tr>
          <td><code>{$Definition}</code></td>
          <td>Augmentation element / type definition</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-25" title="NDR Rule 9-25: Complex type has definition">NDR Rule 9-25: Complex type has definition</a><br>
            <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-36" title="NDR Rule 9-36: Element has definition">NDR Rule 9-36: Element has definition</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1: Human-readable documentation">NDR Section 11.6.1: Human-readable documentation</a></td>
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

### Augmentation Type and Element Declaration
<pre>&lt;xs:complexType name="{$Name}AugmentationType"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation>A data type for additional information about {$Definition}&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
    &lt;xs:complexContent&gt;
      &lt;xs:extension base="structures:AugmentationType"&gt;
        &lt;xs:sequence&gt;
          &lt;xs:element ref="{$ElementName}" minOccurs="{$Min}" maxOccurs="{$Max}"/&gt;
        &lt;/xs:sequence&gt;
      &lt;/xs:extension&gt;
    &lt;/xs:complexContent&gt;
  &lt;/xs:complexType&gt;

  &lt;xs:element name="{$Name}Augmentation" type="{$Name}AugmentationType" substitutionGroup="{$Name}AugmentationPoint"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Additional information about {$Definition}&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:element&gt;
</pre>

### Related NDR Rules
* [NDR Section 10.4: Augmentations](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.4)
* [NDR Section 10.4.4: Augmentation types](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.4.4)
* [NDR Section 10.4.5: Augmentation element declarations](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.4.5)
* [NDR Rule 10-30: Element within instance of augmentation type modifies base](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-30)
* [NDR Rule 10-31: Only an augmentation type name ends on "AugmentationType"](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-31)
* [NDR Rule 10-32: Schema component with name ending in "AugmentationType" is an augmentation type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-32)
* [NDR Rule 10-34: Augmentation element type is an augmentation type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-34)
* [NDR Rule 10-35: Augmentation elements are not used directly](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-35)
* [NDR Rule 11-31: Standard opening phrase for element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-31)
* [NDR Rule 11-32: Standard opening phrase for complex type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-32)

### Example
* [NDR Figure 10-11: Declaration of augmentation type and element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#figure_10-11)
* [mo:AircraftAugmentationType (type) and mo:AircraftAugmentation (element)](http://release.niem.gov/niem/domains/militaryOperations/3.1/mo.xsd)
