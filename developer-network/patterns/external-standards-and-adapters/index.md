---
title: External Standards and Adapters Pattern
---
NIEM is designed to be able to reuse external standards that do not conform to NIEM rules. A couple of extra things are needed, however, to make the reuse work more smoothly.

First, it is necessary to distinguish and flag the external standard explicitly as non-conformant. This alerts users to the fact that there will be differences in content and structure. It also allows the NIEM conformance rules to ignore this content, so that rule violations are not triggered where they do not apply. This is handled as part of the import statement.

It is also useful to provide some basic top-level NIEM constructs for the external content. This is done by wrapping an external element or attribute in a NIEM-conformant adapter type, which inherits the necessary constructs from structures:ObjectType. While this does create an extra type on top of the external component, it provides things like metadata and referencing capabilities to the NIEM-conformant adapter element.

## Variable Replacement Table
<table class="table table-hover">
	<tbody>
        <tr>
            <th width="21%">Variable</th>
            <th width="32%">Description</th>
            <th width="15%">Usage</th>
            <th width="32%">NDR Reference</th>
        </tr>
        <tr>
            <td><code>{$ExternalSchemaLocation}</code></td>
            <td>Absolute or relative path to the external schema</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td><code>{$ExternalSchemaNamespace}</code></td>
            <td>URI of the external schema</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td><code>{$ExternalSchemaDefinition}</code></td>
            <td>The description of the external schema.<br>
Since a non-NIEM schema may not have its own definition, a definition is required with the import.</td>
            <td>&nbsp;</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-7" title="NDR Rule 10-7: Import of external namespace has data definition">NDR Rule 10-7: Import of external namespace has data definition</a></td>
        </tr>
        <tr>
            <td><code>{$Name}</code></td>
            <td>The name of the adapter element / type</td>
            <td>Required</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5" title="NDR Rule 7-5: Component naming">NDR Rule 7-5: Component naming</a><br>
            <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8" title="NDR Section 10.8: Naming Rules">NDR Section 10.8: Naming Rules</a></td>
        </tr>
        <tr>
            <td><code>{$Definition}</code></td>
            <td>The definition of the adapter element / type</td>
            <td>Required</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1" title="NDR Section 11.6.1: Human-readable documentationNDR Rule/ elements">NDR Section 11.6.1: Human-readable documentation</a></td>
        </tr>
        <tr>
            <td><code>{$ExternalElement}</code></td>
            <td>QName of the external element</td>
            <td>Required</td>
            <td></td>
        </tr>
        <tr>
            <td><code>{$ExternalElementDefinition}</code></td>
            <td>Definition of the external element</td>
            <td>Required</td>
            <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-16" title="NDR Rule 10-16: External element use has data definition">NDR Rule 10-16: External element use has data definition</a></td>
        </tr>
    </tbody>
</table>

### Import External Schema Adapaters Pattern
<pre><code>&lt;xs:import schemaLocation="{$ExternalSchemaLocation}" namespace="{$ExternalSchemaNamespace}" appinfo:externalImportIndicator="true"&gt;
   &lt;xs:annotation&gt;
     &lt;xs:documentation>{$ExternalSchemaDefinition}&lt;/xs:documentation&gt;   
   &lt;/xs:annotation&gt;
&lt;/xs:import&gt;

&lt;xs:complexType name=&quot;{$Name}AdapterType&quot; appinfo:externalAdapterTypeIndicator=&quot;true&quot;&gt;
    &lt;xs:annotation&gt;
        &lt;xs:documentation&gt;A data type for {$Definition}
		 &lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
 &lt;xs:complexContent&gt;
  &lt;xs:extension base=&quot;structures:ObjectType&quot;&gt;
   &lt;xs:sequence&gt;
    &lt;xs:element ref=&quot;{$ExternalElement}&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;&gt;
     &lt;xs:annotation&gt;
	  &lt;xs:documentation&gt;{$ExternalElementDefinition}&lt;/xs:documentation&gt;
	 &lt;/xs:annotation&gt;
	&lt;/xs:element&gt;
   &lt;/xs:sequence&gt;
  &lt;/xs:extension&gt;
 &lt;/xs:complexContent&gt;
&lt;/xs:complexType&gt;

&lt;xs:element name=&quot;{$Name}Adapter&quot; type=&quot;{$Name}AdapterType&quot; nillable=&quot;true&quot;&gt;</code>
<code>   &lt;xs:annotation&gt;</code>
      <code>&lt;xs:documentation&gt;A(n) {$Definition}&lt;/xs:documentation&gt;</code>
<code>   &lt;/xs:annotation&gt;</code>
<code>&lt;/xs:element&gt;</code></pre>

### Related NDR Rules
* [NDR Section 10.2.3: External adapter types and external components](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.2.3)
* [NDR Rule 10-8: External adapter type has indicator](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-8)
* [NDR Rule 10-9: Structure of external adapter type definition follows pattern](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-9)
* [NDR Rule 10-10: Element use from external adapter type defined by external schema documents](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-10)
* [NDR Rule 10-11: External adapter type not a base type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-11)
* [NDR Rule 10-13: External attribute use only in external adapter type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-13)
* [NDR Rule 10-14: External attribute use has data definition](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-14)
* [NDR Rule 10-15: External attribute use not an ID](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-15)
* [NDR Rule 10-68: External import indicator annotates import](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-68)
* [NDR Rule 10-69: External adapter type indicator annotates complex type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-69)
* [NDR Rule 11-14: Element type is from conformant namespace](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-14)
* [NDR Rule 11-22: Element reference defined by conformant schema](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-22)
* [NDR Rule 11-23: Reference attribute defined by conformant schema](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-23)

### Example
* [cap:AlertAdapter and cap:AlertAdapterType](http://release.niem.gov/niem/adapters/edxl-cap/3.0/edxl-cap.xsd)