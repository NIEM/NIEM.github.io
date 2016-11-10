---
title: Role Pattern
---
NIEM differentiates between an object and a role of an object. Role is used here to mean a non-exclusive function or part played by an object, and an object may have one or more roles.

NIEM uses XSD extension for cases of exclusive specialization. In NIEM Core, an aircraft is a special kind of conveyance, a vehicle is a special kind of conveyance, and a vessel is a special kind of conveyance. A conveyance would not function as one of those exclusively (generally speaking, the exceptions are not a common use case). A person, on the other hand, may act in several different roles based on context. One person may act as an enforcement official and as a witness (both defined in the Justice domain), and as a caregiver (defined in the CYFS domain) as well. Because these functions of a person are not exclusive, they are defined as roles rather than extensions.

Note that in order to preserve simplicity when possible, NIEM only creates role types when there are role-specifc properties to add. In the 3.1 release, the Justice domain has enforcement official-specific properties and witness-specific properties, so new role types are created for these. Alternately in the same release, the CYFS domain has a caregiver, but since they have no caregiver-specific properties to add, no new role type is created. Element cyfs:Caregiver reuses nc:Person directly for its data type.

## Variable Replacement Table
<table class="table table-hover">
      <tbody>
        <tr>
          <th width="208">Variable</th>
          <th width="221">Description</th>
          <th width="336">Usage</th>
          <th width="199">NDR Reference</th>
        </tr>
        <tr>
          <td><code>{$RoleOfName}</code></td>
          <td>The role-of element representing the object<br>
          Example - nc:RoleOfPerson</td>
          <td>Required; begins with "RoleOf"<br>
          Do not create new role-of element if existing one from NIEM can be used, such as nc:RoleOfPerson, nc:RoleOfOrganization, or nc:RoleOfItem</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#definition_RoleOf_element">RoleOf Element Definition</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-5" title="NDR Rule 10-5: RoleOf elements indicate the base types of a role type">NDR Rule 10-5: RoleOf elements indicate the base types of a role type</a></td>
        </tr>
        <tr>
          <td><code>{$RoleOfDataType}</code></td>
          <td>The object type<br>
          Example - nc:PersonType</td>
          <td>Required for new role-of element</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-3" title="NDR Rule 10-3: RoleOf element type is an object type">NDR Rule 10-3: RoleOf element type is an object type</a></td>
        </tr>
        <tr>
          <td><code>{$RoleOfElementDefinition}</code></td>
          <td>Definition of the role-of element</td>
          <td>Required for new role-of element</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1: Human-readable documentation">NDR Section 11.6.1: Human-readable documentation</a><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-13" title="Rule 11-13 Element has a complex data type"></a></td>
        </tr>
        <tr>
          <td><code>{$RoleType}</code></td>
          <td>A non-exclusive function or part played by an object.<br>
          Example - j:EnforcementOfficialType</td>
          <td>Required<br>
          Do not create if there are no role-specific properties ({$ElementName}) to add</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#definition_role_type">Role Type Definition</a><br>
            <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5" title="NDR Rule 7-5: Component naming">NDR Rule 7-5: Component naming</a><br>
          <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8">NDR Section 10.8: Naming Rules</a><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-46" title="Rule 9-46 Elements are nillable"></a></td>
        </tr>
        <tr>
          <td><code>{$RoleTypeDefinition}</code></td>
          <td>Definition of the role</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1: Human-readable documentation">NDR Section 11.6.1: Human-readable documentation</a></td>
        </tr>
        <tr>
          <td><code>{$Parent}</code></td>
          <td>QName of the parent type</td>
          <td>"structures:ObjectType" or other NIEM type<br>
            Note that this cannot be the same as {$RoleOfDataType}.<br>
          For example, you would not want to extend nc:PersonType and contain nc:RoleOfPerson - person elements would be duplicated.</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-2" title="Rule 10-2 Complex object types are derived from structures:ObjectType">Rule 10-2 Complex object types are derived from structures:ObjectType</a></td>
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

### Role-of Element and Role Type Declarations
<pre>&lt;xs:element name="{$RoleOfName}" type="{$RoleOfDataType}" substitutionGroup="nc:RoleOf"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;A(n) {$RoleOfElementDefinition}&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:element&gt;

  &lt;xs:complexType name="{$RoleType}"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;
        A data type for a property item used as {$RoleTypeDefinition}.
      &lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
    &lt;xs:complexContent&gt;
      &lt;xs:extension base="{$Parent}"&gt;
        &lt;xs:sequence&gt;
          &lt;xs:element ref="{$RoleOfName}" minOccurs="{$Min}" maxOccurs="{$Max}"/&gt;
          &lt;xs:element ref="{$ElementName}" minOccurs="{$Min}" maxOccurs="{$Max}"/&gt;
        &lt;/xs:sequence&gt;
      &lt;/xs:extension&gt;
    &lt;/xs:complexContent&gt;
  &lt;/xs:complexType&gt; </pre>

### Related NDR Rules
* [NDR Section 10.2.2: Role types and roles](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.2.2)
* [NDR Rule 10-4: Only object type has RoleOf element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-4)
* [NDR Rule 10-6: Instance of RoleOf element indicates a role object](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-6)
* [NDR Section 11.6.1: Human-readable documentation](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1)
* [NDR Rule 11-31: Standard opening phrase for element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-31)
* [NDR Rule 11-32: Standard opening phrase for complex type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-32)
* [NDR Section 12.2: Reference elements](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_12.2)
* [NDR Rule 12-2: Element with structures:ref does not have content](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_12-2)
* [NDR Rule 12-3: Attribute structures:ref must reference structures:id](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_12-3)
* [NDR Rule 12-5: Attribute structures:ref references element of correct type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_12-5)

### Example
* [NDR Section 10.2.2: Role types and roles](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.2.2)
* [nc:RoleOfPerson (role-of element)](http://release.niem.gov/niem/niem-core/3.0/niem-core.xsd)
* [j:EnforcementOfficalType and j:WitnessType (role types)](http://release.niem.gov/niem/domains/jxdm/5.1/jxdm.xsd)