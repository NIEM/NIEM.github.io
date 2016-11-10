---
title: Schema Header
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
          <td><code>{$Prefix}</code></td>
          <td>The <span class="plainlinks"><a href="http://en.wikipedia.org/wiki/XML_namespace" class="external text" rel="nofollow">namespace</a></span> prefix for the namespace for this schema</td>
          <td>Required</td>
          <td></td>
      </tr>
      <tr>
          <td><code>{$OtherSchemaURI}</code></td>
          <td>Uniform Resource Identifier (<a href="http://en.wikipedia.org/wiki/Uniform_Resource_Identifier" class="extiw" title="wikipedia:Uniform Resource Identifier">URI</a>) of a <span class="plainlinks"><a href="http://en.wikipedia.org/wiki/XML_namespace" class="external text" rel="nofollow">namespace</a></span> used by this schema</td>
          <td>Required</td>
          <td></td>
      </tr>
      <tr>
          <td><code>{$DefaultSchemaURI}</code></td>
          <td>Uniform Resource Identifier (<a href="http://en.wikipedia.org/wiki/Uniform_Resource_Identifier" class="extiw" title="wikipedia:Uniform Resource Identifier">URI</a>) of the default <span class="plainlinks"><a href="http://en.wikipedia.org/wiki/XML_namespace" class="external text" rel="nofollow">namespace</a></span> used by this schema</td>
          <td>Required</td>
          <td></td>
      </tr>
      <tr>
          <td><code>{$ThisSchemaURI}</code></td>
          <td>Uniform Resource Identifier (<a href="http://en.wikipedia.org/wiki/Uniform_Resource_Identifier" class="extiw" title="wikipedia:Uniform Resource Identifier">URI</a>) of the <span class="plainlinks"><a href="http://en.wikipedia.org/wiki/XML_namespace" class="external text" rel="nofollow">namespace</a></span> for this schema</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-82" title="Rule 9-82 Schema has target namespace">Rule 9-82 Schema has target namespace</a>
          <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-83" title="Rule 9-83 Target namespace is absolute URI">Rule 9-83 Target namespace is absolute URI</a></td>
      </tr>
      <tr>
          <td><code>{$Version}</code></td>
          <td>The version of this schema</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-84" title="Rule 9-84 Schema has version">Rule 9-84 Schema has version</a></td>
      </tr>
      <tr>
          <td><code>{$Definition}</code></td>
          <td>The description of the schema</td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-81" title="Rule 9-81 Schema has data definition">Rule 9-81 Schema has data definition</a></td>
      </tr>
      <tr>
          <td><code>{$Term}</code></td>
          <td>An acronym or abbreviation used in this schema</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td><code>{$TermLiteral}</code></td>
          <td>The full value of an acronym or abbreviation used in this schema</td>
          <td></td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_10-75" title="Rule 10-75 Local term has literal or definition">Rule 10-75 Local term has literal or definition</a></td>
      </tr>
      <tr>
          <td><code>{$ImportURI}</code></td>
          <td>Uniform Resource Identifier (<a
            href="http://en.wikipedia.org/wiki/Uniform_Resource_Identifier"
            class="extiw" title="wikipedia:Uniform Resource Identifier">URI</a>)
            of the schema <span class="plainlinks"><a
              href="http://en.wikipedia.org/wiki/XML_namespace"
              class="external text" rel="nofollow">namespace</a></span> to import
          </td>
          <td>Required</td>
          <td><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#section_7.2" title="NDR Section 7.2 Conformance to XML Namespaces">NDR Section 7.2 Conformance to XML Namespaces</a>
          <br/><a href="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_9-89" title="Rule 9-89 Import must have namespace attribute">Rule 9-89 Import must have namespace attribute</a></td>
      </tr>
      <tr>
          <td><code>{$ImportRelativeSchemaPath}</code></td>
          <td>Path to the schema file, relative to the location of the
            current schema within the Information Exchange Specification (IES) directory
            structure.
          </td>
          <td>Required</td>
          <td></td>
      </tr>
  	</tbody>
  </table>

### Pattern
	<?xml version="1.0" encoding="US-ASCII"?>
	<xs:schema 
		  xmlns:xs="http://www.w3.org/2001/XMLSchema"
		  xmlns:nc="http://release.niem.gov/niem/niem-core/3.0/"
		  xmlns:appinfo="http://release.niem.gov/niem/appinfo/3.0/"
		  xmlns:structures="http://release.niem.gov/niem/structures/3.0/"
		  xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/"
		  xmlns:term="http://release.niem.gov/niem/localTerminology/3.0/"

		  xmlns:{$Prefix}="{$OtherSchemaURI}" 
		  xmlns="{$DefaultSchemaURI}" 
		  targetNamespace="{$ThisSchemaURI}" 
		  version="{$Version}" 

		  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		  xsi:schemaLocation="http://release.niem.gov/niem/appinfo/3.0/ ../../appinfo/3.0/appinfo.xsd
		                      http://release.niem.gov/niem/conformanceTargets/3.0/ ../../conformanceTargets/3.0/conformanceTargets.xsd
		                      http://release.niem.gov/niem/localTerminology/3.0/ ../../localTerminology/3.0/localTerminology.xsd"
		  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/#ExtensionSchemaDocument"

		  elementFormDefault="qualified" 
		  attributeFormDefault="unqualified">

	  <xs:annotation>
	    <xs:documentation>{$Definition}</xs:documentation>
	    <xs:appinfo>
	      <term:LocalTerm term="{$Term}" literal="{$TermLiteral}"/>
	    </xs:appinfo>
	  </xs:annotation>

	  <xs:import schemaLocation="{$ImportRelativeSchemaPath}" namespace="{$ImportURI}"/>

	  <!-- ******** Schema components ******** -->

	</xs:schema>

## Example
* [SuperHero Example](https://github.com/NIEM/Developer-Network-IEPD-Series--SuperHero/blob/master/base_iepd/base-xsd/extension/SuperHero-extension.xsd)


