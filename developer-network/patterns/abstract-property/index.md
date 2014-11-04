---
title: abstract property
---

**Patterns** provide a basic framework for developers to quickly build NIEM conformant schema snippets for NIEM modeling concepts. A *Pattern* can be used to create a fully functional instance of the concept that can be further customized as required.  The pattern contains replacement variables, designated by `{$Variable}`, which should be replaced with an appropriate value as per the **Replace With** column of the **Variable Replacement Table** below. Unless a variable is designated as *(Required)* in the **Default Value** column, the default value for the variable may be used when a specific value is not desired. Each variable is also governed by a set of NDR rules. To view the rules applicable to the variable, simply click the link(s) in the **Related NDR Rules** column. To use the pattern:

1. Copy and paste the pattern into a text editor
1. Replace all variables in the text editor according to the **Variable Replacement Table**
1. If this pattern is part of a larger pattern, copy and paste the results of this pattern into the parent pattern

## Variable Replacement Table

<table class="table table-hover">
  <tbody>
    <tr>
      <th>Pattern Variable</th>
      <th>Replace With</th>
      <th>Default Value</th>
      <th>Related NDR Rules</th>
    </tr>
    <tr>
      <td><code>{$Name}</code></td>
      <td>The name of the property</td>
      <td>(Required)</td>
      <td>
        <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_10.8">NDR 10.8 Naming Rules</a>
      </td>
    </tr>
    <tr>
      <td><code>{$Nillable}</code></td>
      <td>"true", if the property can have a nil value</td>
      <td>(Remove the attribute)</td>
      <td>None</td>
    </tr>
    <tr>
      <td><code>{$Definition}</code></td>
      <td>
        The <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#definition_data_definition" title="Data definition">data definition</a> of the property
      </td>
      <td>(Required)</td>
      <td>
        <a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_11.6">NDR 11.6 Annotation components</a>
      </td>
    </tr>
  </tbody>
</table>

**Note:** The *nillable* attribute may be removed if it is set to "false".
{: class="bg-info"}

### abstract property pattern

    <!-- **** Abstract Property : {$Name} **** -->
    <xsd:element name="{$Name}Abstract" abstract="true" nillable="{$Nillable}">
      <xsd:annotation>
        <xsd:documentation>A data concept for a(n) {$Definition}</xsd:documentation>
      </xsd:annotation>
    </xsd:element>

## Related NDR Rules

* [NDR Rule 11-15](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#rule_11-15)

## Example

* [SuperHero Example]({{ site.superhero_iepd_path }}/blob/master/base_iepd/base-xsd/extension/SuperHero-extension.xsd)
* [LocationAddressAbstract](./assets/LocationAddressAbstract.xsd)
