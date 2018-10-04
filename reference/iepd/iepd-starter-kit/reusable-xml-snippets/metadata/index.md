---
title: Metadata Pattern
---
Within NIEM, metadata is defined as data about data. This may include information such as the security or reliability of a piece of data, or the source from which it originated.

Each metadata element may define a list of types and/or elements that may reference it. Metadata that is defined for a given type will also be automatically allowable for any derived type as well. This allows users to define the granularity as needed, such as the root level of an IEPD, selected element(s), selected type(s), and/or high-level base types defined in structures.xsd (such as structures:ObjectType and structures:AssociationType) which enables easy reuse of metadata throughout NIEM without having to list specific elements and types.

Note that metadata is handled very differently in NIEM from other elements and types. Metadata elements cannot be included as sub-properties of a type and metadata types cannot serve as parent types. Special attributes are defined in structures.xsd and are inherited by all NIEM object types, association types, augmentation types, and complex types with simple content. These attributes allow metadata elements to be specially referenced by other NIEM elements.

## Variable Replacement Table
<table class="table table-hover">
      <tbody>
        <tr>
          <th width="164">Variable</th>
          <th width="314">Description</th>
          <th width="255">Usage</th>
          <th width="227">NDR Reference</th>
        </tr>
        <tr>
          <td><code>{$Name}</code></td>
          <td>Metadata element / type name</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5" title="NDR Rule 7-5: Component naming">NDR Rule 7-5: Component naming</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8">NDR Section 10.8: Naming Rules</a></td>
        </tr>
        <tr>
          <td><code>{$Definition}</code></td>
          <td>Metadata definition</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-25" title="NDR Rule 9-25: Complex type has definition">NDR Rule 9-25: Complex type has definition</a><br>
            <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-36" title="NDR Rule 9-36: Element has definition">NDR Rule 9-36: Element has definition</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1: Human-readable documentation">NDR Section 11.6.1: Human-readable documentation</a></td>
        </tr>
        <tr>
          <td><code>{$ElementName}</code></td>
          <td>The QName of the element referenced</td>
          <td>Required<br>
          Repeat line for each sub element</td>
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
        <tr>
          <td><code>{$AppliesToTypes}</code></td>
          <td>Space-delimited list of qualified types that the metadata element may be used with</td>
          <td>Use with or instead of appinfo:appliesToElements <br>
          Use value "structures:ObjectType structures:AssociationType structures:SimpleObjectAttributeGroup" to use metadata element on almost any element in NIEM</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.9.1.2" title="NDR Section 10.9.1.2: appinfo:appliesToTypes annotation">NDR Section 10.9.1.2: appinfo:appliesToTypes annotation</a><br>
            <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-70" title="NDR Rule 10-70: appinfo:appliesToTypes annotates metadata element">NDR Rule 10-70: appinfo:appliesToTypes annotates metadata element</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-71" title="NDR Rule 10-71: appinfo:applieToTypes references types">NDR Rule 10-71: appinfo:appliesToTypes references types</a></td>
        </tr>
        <tr>
          <td><code>{$AppliesToElements}</code></td>
          <td>Space-delimited list of qualified elements that the metadata element may be used with</td>
          <td>Use with or instead of appinfo:appliesToTypes</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.9.1.3" title="NDR Section 10.9.1.3: appinfo:appliesToElements annotation">NDR Section 10.9.1.3: appinfo:appliesToElements annotation</a><br>
            <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-72" title="NDR Rule 10-72: appinfo:appliesToElements annotates metadata element">NDR Rule 10-72: appinfo:appliesToElements annotates metadata element</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-73" title="NDR Rule 10-73: appinfo:appliesToElements references elements">NDR Rule 10-73: appinfo:appliesToElements references elements</a></td>
        </tr>
      </tbody>
    </table>

### Metadata Type and Element Declaration
<pre>&lt;xs:complexType name="{$Name}MetadataType"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation>A data type for metadata about {$Definition}&lt;/xs:documentation&gt;  
    &lt;/xs:annotation&gt;
    &lt;xs:complexContent&gt;
      &lt;xs:extension base="structures:MetadataType"&gt;
        &lt;xs:sequence&gt;
          &lt;xs:element ref="{$ElementName}" minOccurs="{$Min}" maxOccurs="{$Max}"/&gt;
        &lt;/xs:sequence&gt;
      &lt;/xs:extension&gt;
    &lt;/xs:complexContent&gt;
  &lt;/xs:complexType&gt;

  &lt;xs:element name="{$Name}Metadata" type="{$Name}MetadataType" nillable="true" appinfo:appliesToTypes="{$AppliesToTypes}" appinfo:appliesToElements="{$AppliesToElements}"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation>Metadata about {$Definition}&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:element&gt;
</pre>

### Related NDR Rules
* [NDR Section 10.5: Metadata](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.5)
* [NDR Section 12.3: Instance Metadata](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_12.3)
* [Metadata Type Definition](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#definition_metadata_type)
* [Metadata Element Declaration Definition](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#definition_metadata_element_declaration)
* [NDR Rule 10-36: Metadata type has data about data](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10.36)
* [NDR Rule 10-37: Metadata type derived from structures:MetadataType](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-37)
* [NDR Rule 10-38: Metadata types are derived from metadata types](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-38)
* [NDR Rule 10-39: Metadata element declaration type is a metadata type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-39)
* [NDR Rule 10-40: Metadata element has applicable elements](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-40)
* [NDR Rule 12-8: Metadata applies to referring entity](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_12-8)
* [NDR Rule 12-9: Reference of structures:relationshipMetadata annotates relationship](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_12-9)
* [NDR Rule 12-10: Values of structures:metadata refer to values of structures:id](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_12-10)
* [NDR Rule 12-11: Values of structures:relationshipMetadata refers to values of structures:id](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_12-11)
* [NDR Rule 12-12: structures:metadata and structures:relationshipMetadata refer to metadata elements](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_12-12)
* [NDR Rule 12-13: Attribute structures:metadata references metadata element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_12-13)
* [NDR Rule 12-14: Attribute structures: relationshipMetadata references metadata element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_12-14)
* [NDR Rule 12-15: Metadata is applicable to element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_12-15)
* [NDR Rule 11-31: Standard opening phrase for element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-31)
* [NDR Rule 11-32: Standard opening phrase for complex type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-32)

### Example
* [nc:MetadataType (type) and nc:Metadata (element)](http://release.niem.gov/niem/niem-core/3.0/niem-core.xsd)
* [NDR Figure 12-5: Example of metadata used in an instance](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#figure_12-5)
