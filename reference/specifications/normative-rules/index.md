---
title: Normative Rules
icon: fa-list
description: This is a compiled list of normative rules from NIEM specifications, including the NDR and the MPD Specification.
links:
  - url: /reference/specifications/normative-rules/3.0/
  - url: /reference/specifications/normative-rules/4.0/
---

This section contains a listing of the normative rules, for use as a quick reference guide for the following:

* [Conformance Targets Attribute Specification (CTAS)](#ctas)
* [Model Package Description (MPD) specification](#model-package)
* [Naming and Design Rules (NDR) specification](#ndr)
* [Code Lists Specification](#cl)

---

{% assign url = site.data.links.ctas %}

<h4 id="ctas" style="padding-top: 65px; margin-top: -65px;"><a href="{{ url }}">Conformance Targets Attribute Rules</a></h4>

The CTAS defines XML attributes that may occur within XML documents to establish a claim that the document conforms to a set of conformance targets. The CTAS does not define conformance targets; conformance targets are defined in the [MPD Section 3.1](http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html#section_3.1) and [NDR Section 3.6](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html#definition_conformance_target). There are six CTAS rules.

* [Rule 3-1, *Conformant document is an XML document*]({{ url }}#rule_3-1)
* [Rule 3-2, *Attribute `ct:conformanceTargets` is valid*]({{ url }}#rule_3-2)
* [Rule 3-3, *Namespace defines only attribute `ct:conformanceTargets`*]({{ url }}#rule_3-3)
* [Rule 3-4, *No reference to types in conformance targets namespace*]({{ url }}#rule_3-4)
* [Rule 3-5, *Attribute `ct:conformanceTargets` contains only absolute IRI references*]({{ url }}#rule_3-5)
* [Rule 3-6, *Document may contain any number of `ct:conformanceTargets` attributes*]({{ url }}#rule_3-6)
{: class="list-unstyled"}

---

{% assign url = site.data.links.mpd_spec %}

<h4 id="model-package" style="padding-top: 65px; margin-top: -65px;"><a href="{{ url }}">Model Package Description Specification</a></h4>

The MPD specification contains 60 normative rules for constructing a:

* NIEM Information Exchange Package Documentation (IEPD),
* NIEM Release (including a micro, minor, or major)
* NIEM Domain Update
* NIEM Core Update to a NIEM release
* NIEM Enterprise Information Exchange Model (EIEM)
{: }

* [Rule 3-1, *MPD Conformance Target Identifier*]({{ url }}#rule_3-1)
* [Rule 3-2, *MPD with MPD class of IEPD is an IEPD*]({{ url }}#rule_3-2)
* [Rule 3-3, *IEPD Conformance Target Identifier*]({{ url }}#rule_3-3)
* [Rule 4-1, *Fundamental NIEM Subset Rule*]({{ url }}#rule_4-1)
* [Rule 5-1, *MPD Has an `mpd-catalog.xml` in its Root Directory*]({{ url }}#rule_5-1)
* [Rule 5-2, *MPD Catalog Document Valid to `mpd-catalog-3.0.xsd`*]({{ url }}#rule_5-2)
* [Rule 5-3, *MPD Catalog Extension XML Catalog Document in Root Directory*]({{ url }}#rule_5-3)
* [Rule 5-4, *MPD Catalog Extension XML Catalog Document Name Is `mpd-catalog-extension-xml-catalog.xml`*]({{ url }}#rule_5-4)
* [Rule 5-5, *MPD Catalog Extension XML Catalog Document Resolves Namespaces to URIs*]({{ url }}#rule_5-5)
* [Rule 5-6, *MPD Catalog Extension Schema Document Conforms to NDR Extension Rules*]({{ url }}#rule_5-6)
* [Rule 5-7, *MPD Catalog Schema and Its Extensions Conform to NDR Schema Set Rules*]({{ url }}#rule_5-7)
* [Rule 5-8, *MPD Schema Document Extension Support Schemas Are Supersets of Spec Subsets*]({{ url }}#rule_5-8)
* [Rule 5-9, *MPD Class Determined by Conformance Target Identifier in `c:mpdClassURIList`*]({{ url }}#rule_5-9)
* [Rule 5-10, *MPD Version Number Syntax*]({{ url }}#rule_5-10)
* [Rule 5-11, *MPD URI Is Absolute*]({{ url }}#rule_5-11)
* [Rule 5-12, *MPD URI Supports Fragment*]({{ url }}#rule_5-12)
* [Rule 5-13, *MPD URI Has No Fragment*]({{ url }}#rule_5-13)
* [Rule 5-14, *MPD Artifact URI Syntax*]({{ url }}#rule_5-14)
* [Rule 5-15, *`c:pathURI` Resolves to a Resource*]({{ url }}#rule_5-15)
* [Rule 5-16, *`c:pathURI` for `c:XMLCatalog`*]({{ url }}#rule_5-16)
* [Rule 5-17, *`c:pathURI` for `c:MPDChangeLog`*]({{ url }}#rule_5-17)
* [Rule 5-18, *`c:pathURI` for `c:ReadMe`*]({{ url }}#rule_5-18)
* [Rule 5-19, *`c:pathURI` for `c:IEPSampleXMLDocument`*]({{ url }}#rule_5-19)
* [Rule 5-20, *`c:pathURI` for `c:BusinessRulesArtifact`*]({{ url }}#rule_5-20)
* [Rule 5-21, *`c:pathURI` for `c:XMLSchemaDocument`*]({{ url }}#rule_5-21)
* [Rule 5-22, *`c:pathURI` for `c:ExternalSchemaDocument`*]({{ url }}#rule_5-22)
* [Rule 5-23, *`c:pathURI` for `c:ReferenceSchemaDocument`*]({{ url }}#rule_5-23)
* [Rule 5-24, *`c:pathURI` for `c:ExtensionSchemaDocument`*]({{ url }}#rule_5-24)
* [Rule 5-25, *`c:pathURI` for `c:SubsetSchemaDocument`*]({{ url }}#rule_5-25)
* [Rule 5-26, *`c:pathURI` for `c:Wantlist`*]({{ url }}#rule_5-26)
* [Rule 5-27, *`c:pathURI` for `c:SchematronSchema`*]({{ url }}#rule_5-27)
* [Rule 5-28, *`c:pathURI` for `c:RelaxNGSchema`*]({{ url }}#rule_5-28)
* [Rule 5-29, *`c:pathURI` for `c:SchemaDocumentSet`*]({{ url }}#rule_5-29)
* [Rule 5-30, *`c:pathURI` for `c:ConstraintSchemaDocumentSet`*]({{ url }}#rule_5-30)
* [Rule 5-31, `c:pathURI`]({{ url }}#rule_5-31)
* [Rule 5-32, *Resolve MPD URI with Fragment*]({{ url }}#rule_5-32)
* [Rule 5-33, *XML Catalog `uri` Value Resolves to Resource*]({{ url }}#rule_5-33)
* [Rule 5-34, *XML Catalog `uri` Value Resolves to Resource with Correct Target Namespace*]({{ url }}#rule_5-34)
* [Rule 5-35, *IEPD Has a Change Log*]({{ url }}#rule_5-35)
* [Rule 5-36, *Readme Describes Purpose, Scope, Business Value, etc.*]({{ url }}#rule_5-36)
* [Rule 5-37, *IEPD Has a ReadMe Artifact*]({{ url }}#rule_5-37)
* [Rule 5-38, *Conformance Target Identifier*]({{ url }}#rule_5-38)
* [Rule 5-39, *IEP Conformance Target Has a `structures:id`*]({{ url }}#rule_5-39)
* [Rule 5-40,]({{ url }}#rule_5-40) [*IEPD Declares One or More IEP Conformance Targets*]({{ url }}#definition_information_exchange_package_documentation)
* [Rule 5-41, validity constraint context]({{ url }}#rule_5-41)
* [Rule 5-42, *Identifying the Document Element of an IEP*]({{ url }}#rule_5-42)
* [Rule 5-43, *Validating an XPath Expression*]({{ url }}#rule_5-43)
* [Rule 5-44, *IEPD Has an IEP Sample for Each `c:IEPConformanceTarget`*]({{ url }}#rule_5-44)
* [Rule 5-45, *Validating an IEP Sample XML Document*]({{ url }}#rule_5-45)
* [Rule 5-46, *IEPD Has Conformance Assertion*]({{ url }}#rule_5-46)
* [Rule 6-1, *Wantlist Location*]({{ url }}#rule_6-1)
* [Rule 7-1, *MPD Is a ZIP File*]({{ url }}#rule_7-1)
* [Rule 7-2, *XSD and XML Documents Conform to Applicable NDR Conformance Targets*]({{ url }}#rule_7-2)
* [Rule 7-3, *MPD Archive Uncompresses to a Single Root Directory*]({{ url }}#rule_7-3)
* [Rule 7-4, *Constraint on Elements of Type `c:SchemaDocumentSetType`*]({{ url }}#rule_7-4)
* [Rule 7-5, *IEPD File Name Syntax*]({{ url }}#rule_7-5)
* [Rule 7-6, *MPD Reference to Resource Uses Common URI Scheme*]({{ url }}#rule_7-6)
* [Rule 7-7, *IEPD Completeness*]({{ url }}#rule_7-7)
* [Rule 7-8, *MPD External Schema Documents Are Local Resources*]({{ url }}#rule_7-8)
* [Rule 7-9, *Key MPD Resources Are Local Resources*]({{ url }}#rule_7-9)
{: class="list-unstyled"}

---

{% assign url = site.data.links.code_list_spec %}

<h4 id="cl" style="padding-top: 65px; margin-top: -65px;"><a href="{{ url }}">Code Lists Specification</a></h4>

The NIEM Code Lists specification defines 29 normative rules.  These rules apply to designated conformance targets, outlined below and listed at the end of each rule in parenthesis.

| Conformance Target | Description |
| ------------------ | ----------- |
| CLD | code list document |
| GC-CLD | Genericode code list document |
| CSV-CLD | CSV code list document |
| XSD | code list-enabled schema document |
| INS | code list-enabled instance document |
| VSET | code list validation set |
{:.table-auto}

* [Rule 3-1, *Code list-enabled schema document has conformance target* (XSD)]({{ url }}#rule_3-1)
* [Rule 3-2, *Document with conformance target is a code list-enabled schema document* (VSET)]({{ url }}#rule_3-2)
* [Rule 4-1, *Content in the cli namespace conforms to schema* (INS)]({{ url }}#rule_4-1)
* [Rule 4-2, *Code list URI is an absolute URI* (INS)]({{ url }}#rule_4-2)
* [Rule 4-3, *Column identifier accompanied by code list identifier* (INS)]({{ url }}#rule_4-3)
* [Rule 4-4, *Constraining indicator accompanied by code list identifier* (INS)]({{ url }}#rule_4-4)
* [Rule 4-5, *Effective run-time binding.* (INS)]({{ url }}#rule_4-5)
* [Rule 4-6, *Content in the clsa namespace conforms to schema* (XSD)]({{ url }}#rule_4-6)
* [Rule 4-7, *Elements are xs:appinfo annotations* (XSD)]({{ url }}#rule_4-7)
* [Rule 4-8, *Code list URI is absolute URI* (XSD)]({{ url }}#rule_4-8)
* [Rule 4-9, *Simple code list binding to schema components* (XSD)]({{ url }}#rule_4-9)
* [Rule 4-10, *Complex code list binding to schema components* (XSD)]({{ url }}#rule_4-10)
* [Rule 4-11, *Attribute declaration effective simple binding* (VSET)]({{ url }}#rule_4-11)
* [Rule 4-12, *Element declaration effective simple binding* (VSET)]({{ url }}#rule_4-12)
* [Rule 4-13, *Type definition effective simple binding* (VSET)]({{ url }}#rule_4-13)
* [Rule 4-14, *Element declaration effective complex binding* (VSET)]({{ url }}#rule_4-14)
* [Rule 4-15, *Complex type definition effective complex binding* (VSET)]({{ url }}#rule_4-15)
* [Rule 4-16, *Matches and validity for a code list binding* (VSET)]({{ url }}#rule_4-16)
* [Rule 4-17, *Value comparisons based on types* (VSET)]({{ url }}#rule_4-17)
* [Rule 4-18, *Code list identified by candidate code list identifiers* (VSET)]({{ url }}#rule_4-18)
* [Rule 5-1, *CSV code list document is a CSV file* (CSV-CLD)]({{ url }}#rule_5-1)
* [Rule 5-2, *CSV code list document has header* (CSV-CLD)]({{ url }}#rule_5-2)
* [Rule 5-3, *CSV column name is not empty* (CSV-CLD)]({{ url }}#rule_5-3)
* [Rule 5-4, *CSV file as a code list document* (CSV-CLD)]({{ url }}#rule_5-4)
* [Rule 6-1, *Genericode code list document defined by Genericode* (GC-CLD)]({{ url }}#rule_6-1)
* [Rule 6-2, *Document with conformance target is Genericode code list document* (VSET)]({{ url }}#rule_6-2)
* [Rule 6-3, *Genericode code list document is schema-valid* (GC-CLD)]({{ url }}#rule_6-3)
* [Rule 6-4, *XML Schema alternate datatypes are treated the same as built in datatype*s (GC-CLD)]({{ url }}#rule_6-4)
* [Rule 6-5, *Genericode file as a code list document* (GC-CLD)]({{ url }}#rule_6-5)
{: class="list-unstyled" style="margin-top: 1em;"}
