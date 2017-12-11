---
title: IEPD Tutorials
icon: fa-database
description: Step-by-step instructions on how to build a moderately complex IEPD.
---
This tutorial area provides step-by-step instructions on how to build a moderately complex IEPD. Material from the “Hello World” IEPD series, reusable XML snippets, and other parts of NIEM's GitHub site is used in the tutorials.

---

## How to create an Information Exchange Package Documentation (IEPD)

{% assign iepd_url = "http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html#definition_information_exchange_package_documentation" %}

A NIEM IEPD is a package that describes the construction and content of a NIEM information exchange. It contains all of the schemas necessary to represent and validate the data content of the exchange. It is also contains supplemental artifacts, such as documentation, business rules, search and discovery metadata, and sample instances.

The process described here is a general outline of the steps that may be taken to create an IEPD, but may be adapted or customized as needed.  The 300-series of the [NIEM Training](https://www.niem.gov/training) describes these steps in greater detail.

1.  Scenario Planning
2.	Analyze exchange requirements
3.	Map and model requirements
4.	Build and validate NIEM-conformant schemas
5.	Assemble artifacts and document the IEPD
6.	Publish and implement the IEPD

---

### Scenario Planning

The first step in this stage is to identify existing related exchanges. Related non-NIEM based exchanges will support requirements analysis. A related NIEM IEPD can not only serve as an example, it may also be able to be adapted or reused. Such IEPDs may be found posted online, published in a local repository or the [IEPD Clearinghouse](http://iepd.custhelp.com/), or via fellow practitioners, NIEM user groups, or the NIEM Help Desk (https://www.niem.gov/aboutniem/Pages/get-help.aspx).

Existing documentation should be reviewed to determine such things as the stakeholders of the exchange, current technical architecture requirements, security, privacy, and other-related concerns, content requirements, and the use of external standards.

Resource needs should also be reviewed. There will be a learning curve the first time a group or developer works with NIEM, but subsequent IEPDs tend to progress more quickly. Additionally, other factors like a new, poorly documented, or complex exchange, multiple stakeholders with varied requirements, or formalized approval processes may require more time and/or resources for IEPD development. 

Finally, the business scenarios of the exchange may be modeled.  Use case diagrams may be used to describe system interactions by the various actors and system functionality. Business process diagrams may be used to describe activity sequencing, like a workflow diagram, with stakeholders, activities, decisions, flow, and triggering events or results. Sequence diagrams may be used to describe how applications or systems interact with one another and the messages sent between them.

### Analyze Exchange Requirements

Each IEPD developer will have different methods for analyzing the requirements of a data exchange – the content requirements, exchange partners, the conditions that trigger an exchange, security requirements, etc. NIEM does not prescribe how this step should be performed, nor is knowledge of NIEM or XML Schema even required at this stage, so long as the subject matter experts capture the requirements and analysis with thorough detail.

The content portion of the requirements analysis can be done in a user-preferred format, such as a document, spreadsheet, or UML diagram.  The kinds of information to be captured here include:

*	Data elements – These are the data fields for the message.  For each field, the following information may or will be needed:

	*	Element name – This is the name of the field / tag.  Examples include First Name, Last Name, Street Address, Phone Number, SSN, Arrest Date, Unit Name, and Badge Number.

	*	Data type – The structural representation or format of the element. Examples include string, date, number, boolean, state code set, person data type, location data type.

	*	Definition – Descriptive definitions will be required for all components in the exchange. At this stage, the semantics need to be captured, but the wording does not have to be finalized or perfected. If in a later stage the element is determined to map to NIEM, then the NIEM element will come with its own definition. The definition captured here should be sufficient enough so that the meaning is clear.

	*	Occurrence constraints – The minimum and maximum number of times an element may appear in the instance. For example, Last Name may occur once only, SSN may occur 0 to 1 times, Phone Number may occur 0 to many times.

		Default occurrence constraints in NIEM are 0 to unbounded (with a few exceptions); the default in XML Schema is once only.  Without explicitly setting these occurrence constraints, the defaults mean that components reused from NIEM will be optional and the ones added locally will be required.

	*	Source information – Optional. It may be useful or necessary in some cases to record the source of the requirement. Traceability information may seem very apparent at the time but can be difficult to reconstruct at a later date if needed.

	* <em>Note – if a corresponding NIEM element is already known at this stage, then the NIEM values may be used in place of local ones for element name, data type, and definition.</em>

*	Objects / classes – These are the complex, reusable data structures where related elements are grouped together.  Examples include Person (with elements First Name, Last Name, SSN, and Phone) and Location (with elements Street Address, City, State, and Zip Code).

*	Code sets – This is a list of allowable values, such as a state code list or an eye color list.  Code sets may come from a standard or may be custom-defined.

* Conditions / business rules – There may be certain restrictions on the content that need to be represented.  Examples include restrictions on individual values (such as a number that cannot be less than zero or a string that must have a certain number of characters) and conditional restraints (such as if the SSN is not provided, then Last Name and Birth Date are required), etc.

The other requirements of the exchange – technical, security and privacy, performance, reporting, etc. – should be described in this stage as well.

---

### Map and Model Requirements

There are various ways to implement this stage, but a common way to begin is by creating a spreadsheet to record the mappings of local components to NIEM components.  Local elements, with their data types and definitions can be listed on one side, matching NIEM components on the other, and an additional field may be needed to capture any issues or problems.

There are several ways to discover NIEM content in this mapping stage.  One way is by using the NIEM [SSGT Tool](https://tools.niem.gov/niemtools/ssgt/index.iepd). This tool allows you to search the model, follow links to discover related components, and build a subset so that rather than having to use the entire NIEM package schemas, you can create a much smaller, customized set of schemas with only the components you need.  See the [SSGT Tutorial](assets/ssgtTutorials_v3.pdf) for further information.

SSGT searches run on the components names themselves, plus their definitions and metadata.  When trying to find matches for your local components, use words or common acronyms in the search box.  Local tag names will be much less likely to return results.  A search for tag names "FirstName" or "First_Name" will return empty because these exact terms do not appear in any NIEM names or definitions; a search for "First Name" will return the matching component, nc:PersonGivenName, based on a match in the definition.

If no match is found, replacing a search term with a common synonym may help.

Another way to discover NIEM components for mapping is by browsing through the [documentation spreadsheet] that is provided with each [NIEM release](https://release.niem.gov/). In these spreadsheets, there is a tab for Core and one for each domain, listing each of the components.  It may be useful to skim over the Core tab and any domain tabs that are related to the exchange to get an idea of what kinds of components are available.

---

### Build and validate NIEM-conformant schemas 

After the mapping is completed, there will be a set of local components that map to NIEM and a set that does not.  For the set that maps, add each of the NIEM components to a custom NIEM schema subset using the [SSGT](https://tools.niem.gov/niemtools/ssgt/index.iepd) as described in the [SSGT Tutorial](assets/ssgtTutorials_v3.pdf).  Save the subset to the base-xsd subfolder in your IEPD package.  Make sure to keep the subset wantlist (the save file) so that changes can be made later on without having to rebuild the entire subset.

For the set of local components that do not map to NIEM, add them to the IEPD by creating an extension schema:

1. Create a new Schema file (.xsd) using your preferred editor.
2. Copy the [Schema header](../reusable-xml-snippets/schema-header/index.html) pattern into your schema.
3. Add namespace prefixes and import statements for any schemas you will need to reference.
4. Create NIEM-conformant components to represent your local requirements.
    <ol>
      <li type="a">Build new NIEM-conformant components – <a href="../reusable-xml-snippets/property-element/index.html">elements</a>, <a href="../reusable-xml-snippets/property-attribute/index.html">attributes</a>, <a href="../reusable-xml-snippets/simple-type/index.html">types</a>, <a href="../reusable-xml-snippets/code-set-basic/index.html">code sets</a>, <a href="../reusable-xml-snippets/association/index.html">associations</a>, <a href="../reusable-xml-snippets/role/index.html">roles</a>, <a href="../reusable-xml-snippets/metadata/index.html">metadata</a>.</li>
      <li type="a"><a href="../reusable-xml-snippets/augmentation/index.html">Augment</a> a NIEM data type to add local components to a NIEM type.</li>
      <li type="a">[Extend] a NIEM data type to create a specialization.</li>
     <li type="a">Create <a href="../reusable-xml-snippets/external-standards-and-adapters/index.html">adapters</a> to reuse components from an external standard that does not conform to NIEM.</li></ol>
5. Review definitions to ensure that they fully capture the meaning of each component.  Things that are obvious to the IEPD developer may not be so obvious to future IEPD implementers.
6. Validate your extension schema using the <a href="https://tools.niem.gov/contesaNIEM/">NIEM Conformance Tool</a> to check for any issues.
7. When finished, save the extension schema to the base-xsd/extension subfolder in your IEPD package.

---

## Example extension schema

### SuperHero-extension.xsd

<pre><code><font color= "blueviolet">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</font>
<font color= "mediumblue">&lt;xs:schema</font> <font color="sandybrown">version=</font><font color= "sienna">"1.0"</font>
<font color="deepskyblue">   xmlns:xs</font><font color="sandybrown">=</font><font color= "sienna">"http://www.w3.org/2001/XMLSchema"</font>
<font color="sandybrown">   targetNamespace=</font><font color="sienna">"http://www.example.org/SuperHero-extension"</font>
<font color="deepskyblue">   xmlns:tns</font><font color="sandybrown">=</font><font color= "sienna">"http://www.example.org/SuperHero-extension"</font>
<font color="deepskyblue">   xmlns:nc</font><font color="sandybrown">=</font><font color= "sienna">"http://release.niem.gov/niem/niem-core/3.0/"</font>
<font color="sandybrown">   ct:conformanceTargets=</font><font color="sienna">"http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/#ExtensionSchemaDocument"</font>
<font color="deepskyblue">   xmlns:ct</font><font color="sandybrown">=</font><font color= "sienna">"http://release.niem.gov/niem/conformanceTargets/3.0/"</font>
<font color="sandybrown">   elementFormDefault=</font><font color="sienna">"qualified"</font><font color= "mediumblue">&gt;

   &lt;xs:annotation&gt;
      &lt;xs:documenation&gt;</font>This IEPD shows how to create a basic extension schema file with one element that reuses a NIEM Core type.
         The context of this IEPD is based on Superheros.
      <font color= "mediumblue">&lt;/xs:documentation&gt;
   &lt;/xs:annotation&gt;
   &lt;xs:import</font><font color="sandybrown"> namespace=</font><font color="sienna">"http://release.niem/gov/niem/niem-core/3.0/"</font>
   <font color="sandybrown">   schemaLocation=</font><font color="sienna">"..niem/niem-core/3.0/niem-core.xsd" </font><font color= "mediumblue">/&gt;
   &lt;xs:element</font><font color="sandybrown"> name=</font><font color="sienna">"SuperHero"</font><font color="sandybrown"> type=</font><font color="sienna">"nc:PersonType"</font><font color= "mediumblue">&gt;
      &lt;xs:annotation&gt;
         &lt;xs:documentation&gt;</font> A person with super human abilities generally used to help others.
         <font color = "mediumblue">&lt;/xs:documentation&gt;
      &lt;/xs:annotation&gt;
   &lt;/xs:element&gt;
&lt;/xs:schema&gt;</font></code></pre>

## Assemble Artifacts and Document the IEPD

Additional artifacts are required in an IEPD. An mpd-catalog is required and must conform to the [mpd specification](http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html). Other artifacts such as schematron rules, xml-catalogs, example instances, documentation etc. are also required however will not be covered in this tutorial. Schematron rules are not required but can be used to ensure the IEPD is following required business rules. A basic xml-catalog will get generated with the subset and can be modified as necessary. A sample xml instances is required per the MPD Specification and can be generated using an XML tool.

**IEPD Artifacts:**

* **NIEM schema subset** (required)  – The output from the SSGT from the previous stage.
* **Extension schema document(s)** – The locally defined schema(s) from the previous stage.
* **External schema document(s)** (optional) – Any external standards reused from the previous stage.
* **[NIEM MPD-catalog](http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html#section_5.1)** (required) – A specially-formatted XML instance that contains metadata about the IEPD.

* Catalog requirements:
	* Must be named &quot;mpd-catalog.xml&quot;
	* Must be placed in the root directory of the IEPD
	* Must conform to [mpd-catalog-3.0.xsd].

* Catalog metadata includes: 
	* IEPD unique identification
	* Conformance targets
	* Basic characteristics and properties of the IEPD 
	* Key artifacts and directory structure
	* Relationships to other MPDs and their artifacts


	<pre><code><font color= "blueviolet">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</font>
	<font color= "mediumblue">
	&lt;c:Catalog</font> <font color="deepskyblue">xmlns:xsi</font><font color="sandybrown">=</font><font color= "sienna">"http://www.w3.org/2001/XMLSchema-instance"</font>
	<font color="deepskyblue">           xmlns:nc</font><font color="sandybrown">=</font><font color= "sienna">"http://release.niem/gov/niem/niem-core/3.0/"</font>
	<font color="deepskyblue">           xmlns:structures</font><font color="sandybrown">=</font><font color= "sienna">"http://release.niem/gov/niem/structures/3.0/"</font>
	<font color="deepskyblue">           xmlns:ex</font><font color="sandybrown">=</font><font color= "sienna">"http://example.com/iepd"</font>
	<font color="deepskyblue">           xmlns:mo</font><font color="sandybrown">=</font><font color= "sienna">"http://release.niem/gov/niem/domains/militaryOperations/3.1/"</font>
	<font color="deepskyblue">           xmlns:c</font><font color="sandybrown">=</font><font color= "sienna">"http://reference.niem/gov/niem/resource/mpd/catalog/3.0/"</font>
	<font color="sandybrown">         xsi:schemaLocation=</font><font color="sienna">"http://reference.niem/gov/niem/resource/mpd/catalog/3.0/mpd-catalog-3.0.xsd"</font>
	<font color="sandybrown">         xmlns=</font><font color="sienna">"http://reference.niem/gov/niem/resource/mpd/catalog/3.0/&quot;</font><font color= "mediumblue">&gt;
	  &lt;c:MPD</font><font color="sandybrown"> c:mpdName=</font><font color="sienna">"example-iepd"</font>
	<font color="sandybrown">          c:mpdVersionID=</font><font color="sienna">"1"</font>
	<font color="sandybrown">          c:mpdClassURIList=</font><font color="sienna">"iepd"</font>
	<font color="sandybrown">          c:mpdURI=</font><font color="sienna">"http://example.com/"</font><font color= "mediumblue">&gt;

	    &lt;nc:DescriptionText&gt;</font>Example MPD<font color= "mediumblue">&lt;/nc:DescriptionText&gt;
	    &lt;c:MPDInformation&gt;
	       &lt;c:CreationDate&gt;</font>2015-07-28<font color= "mediumblue">&lt;/c:CreationDate&gt;
	       &lt;c:StatusText&gt;</font>Draft<font color= "mediumblue">&lt;/c:StatusText&gt;
	    &lt;/c:MPDInformation&gt;
	    &lt;c:IEPConformanceTarget&gt;</font><font color="sandybrown"> structures:id=</font><font color="sienna">"C1"</font><font color= "mediumblue">&gt;
	       &lt;c:HasDocumentElement</font><font color="sandybrown"> c:qualifiedNameList=</font><font color="sienna">"ex:RootElement"</font><font color= "mediumblue">/&gt;
	       &lt;XMLCatalog</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"base-xsd/xml-catalog.xml"</font><font color= "mediumblue">/&gt;
	       &lt;c:IEPSampleXMLDocument</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"sample-xml/SampleXML.xml"</font><font color= "mediumblue">/&gt;
	    &lt;/c:IEPConformanceTarget&gt;
	    &lt;c:ReadMe</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"readme.txt"</font><font color= "mediumblue">/&gt;  
	    &lt;c:XMLCatalog</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"base-xsd/xml-catalog.xml"</font><font color= "mediumblue">/&gt;
	    &lt;c:WantList</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"base-xsd/niem/wantlist.xml"</font><font color= "mediumblue">/&gt;
	    &lt;c:ExtensionSchemaDocument</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"base-xsd/extension/Schema.xsd"</font><font color= "mediumblue">/&gt;
	    &lt;c:SubsetSchemaDocument</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"base-xsd/niem/appinfo/3.0/appinfo.xsd"</font><font color= "mediumblue">/&gt;
	    &lt;c:SubsetSchemaDocument</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"base-xsd/niem/conformanceTargets/3.0/conformanceTargets.xsd"</font><font color= "mediumblue">/&gt;
	    &lt;c:SubsetSchemaDocument</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"base-xsd/niem/localTerminology/3.0/localTerminology.xsd"</font><font color= "mediumblue">/&gt;
	    &lt;c:SubsetSchemaDocument</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"base-xsd/niem/domains/militaryOperations/3.1/mo.xsd"</font><font color= "mediumblue">/&gt;
	    &lt;c:SubsetSchemaDocument</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"base-xsd/niem/niem-core/3.0/niem-core/xsd"</font><font color= "mediumblue">/&gt;
	    &lt;c:SubsetSchemaDocument</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"base-xsd/niem/proxy/xsd/3.0/xs.xsd"</font><font color= "mediumblue">/&gt;
	    &lt;c:SubsetSchemaDocument</font><font color="sandybrown"> c:pathURI=</font><font color="sienna">"base-xsd/niem/structures/3.0/structures.xsd"</font><font color= "mediumblue">/&gt;
	  &lt;/c:MPD&gt;

	&lt;/c:Catalog&gt;</font>
	</code></pre>

* **[Change log](http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html#section_5.3)** (required) – An artifact that describes the changes applied to the IEPD since its previous version.  IEPD developers may choose their own format for the change log.  The change log for a new IEPD may simply be the release date.

* **[ReadMe Artifact](http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html#section_5.4)** (required) – An informal documentation artifact that serves as the initial general source of human readable descriptive or instructional information.  This artifact should at minimum describe the IEPD purpose, scope, business value, exchange information, typical senders/receivers, interactions, and references to other documentation.

* **[XML catalogs](http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html#section_5.5)** – An XML instance that describes mappings between external schema references and locally-cached equivalents.

* **[Sample XML instances](http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html#section_5.6.3)** (required) – A sample xml instance that serves as a test for the IEPD schemas.  To the extent possible, the sample instance should contain realistic data and use as many data components and validity constraints as possible.

* [Conformance assertion](http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html#section_5.7)  – An artifact that provides a declaration that an IEPD conforms to relevant NIEM specifications and associated rules, including [NIEM Conformance 3.0](http://reference.niem.gov/niem/specification/conformance/3.0/conformance-3.0.html), [NIEM Naming and Design Rules 3.0](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html), [NIEM Conformance Targets Attribute Specification 3.0](http://reference.niem.gov/niem/specification/conformance-targets-attribute/3.0/NIEM-CTAS-3.0-2014-07-31.html), and [NIEM MPD Specification 3.0](http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html).  A weak conformance assertion may simple self-assert that the IEPD is NIEM-conformant.  A strong conformance assertions may include such things as the kinds of reviews and checks performed and the output from the [NIEM Conformance Tool](https://tools.niem.gov/contesaNIEM/)

* **[Optional IEPD Artifacts](http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html#section_6)** – These may include:

	* Additional documentation
	* NIEM subset wantlist – A save file generated by the [SSGT](https://tools.niem.gov/niemtools/ssgt/index.iepd) so that a subset may be reloaded and modified at a future date.
	* Business rules - Formal or informal statements that describe business policy or procedure, to define or constrain some aspect of a process or procedure.  Formal rules may be defined using [Schematron](https://github.com/niem/ndr-test-suite) so that instances may be tested and validated programmatically.

---

## Additional Resources

* [Model Package Description Specification 3.0](http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html)
* [NIEM Naming and Design Rules 3.0](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html)
* [NIEM 300 Series Technical Training](https://www.niem.gov/training/Pages/train.aspx)
* [IEPD Series](../iepd-series/index.html)
* [NIEM Reusable XML Snippets](../reusable-xml-snippets/index.html)

