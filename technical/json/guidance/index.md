---
title: Non-Normative Guidance in Using NIEM with JSON
layout: specification
ndr-href: https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/NIEM-NDR-3.0-2014-07-31.html
json-ld-api-href: http://www.w3.org/TR/json-ld-api/
json-ld-href: http://www.w3.org/TR/json-ld/
json-ld-name: "JSON-LD 1.0"
---

## Contents
{:.no_toc}

* This line is a placeholder to generate the table of contents
{:toc}

## Authors
{:.no_toc}

* Scott Renner <sar@mitre.org>, @iamdrscott
* Webb Roberts <webb.roberts@gtri.gatech.edu>, @webb
* Leila Tite <leila.tite@hennepin.us>, @leilatite
* Tom Carlson <tom@tomcarlsonconsulting.com>

## Abstract
{:.no_toc}

{% capture abstract-text %}
This document provides guidance from the [NIEM Technical Architecture
Committee (NTAC)](https://www.niem.gov/meet-us/ntac) for using the
National Information Exchange Model ([NIEM](http://niem.gov)) with
JavaScript Object Notation (JSON).  NIEM provides a well-established
standard for defining information exchanges. JSON is specified by
[RFC4627](#bibrfc4627).
{% endcapture %}
{{ abstract-text }}

## Status
{:.no_toc}

This guidance is non-normative. It discusses possible NIEM conformance
rules for JSON data, but it does not establish any specification for
such conformance.

This document is a working draft; revisions and additions are
expected. Readers are invited to provide feedback on this document by
entering an issue at
[https://github.com/NIEM/NIEM.github.io/issues](https://github.com/NIEM/NIEM.github.io/issues)
or sending email to <niem-comments@lists.gatech.edu>.

<div id="body-start"></div>

## Introduction

{{ abstract-text }}

This document is provided as guidance, not as a normative specification. It
discusses possible NIEM conformance rules for JSON data, but it does not
establish any specification for such conformance. This document is the first
step in establishing a repeatable and interoperable methodology for using JSON
to represent NIEM-conformant information exchanges. The guidelines presented by
this document should be in alignment with later normative specifications that
define NIEM-conformant JSON.

### Audience

The primary target of this guidance is the developer who has a NIEM IEPD that
defines one or more XML messages, and who wishes to exchange JSON
representations of those messages, instead of XML. For these users, this
document supplies patterns for converting an NIEM XML document (i.e., an IEP, an
information exchange package) into a semantically-equivalent JSON serialization.

<!-- what are these? - @webb

Sections not written yet. #1 talks about claiming conformance for JSON
data by demonstrating a lossless round-trip translation to a
conforming NIEM IEP. #2 is about the easy-button translator
implementation using XPath 3

* A description of NIEM conformance for JSON serialization of IEPs
* Suggestions for implementing a translator from an XML serialization
  of a particular IEP class to JSON, or the reverse

-->

This document also provides guidance for the developer who wishes to use
NIEM definitions in a JSON object design. Guidance for developers
who wish to map existing JSON objects to NIEM XML may be provided at a
later date.

### Overview

This document is one step in the NTAC technical roadmap for JSON,
[Using JSON with NIEM](../using_json_with_niem.pdf).  It describes
NIEM's methodology for creating consistent, interoperable JSON
messages that are based on NIEM-conformant XML schemas. Core aspects
of this guidance are:

1. The guidance describes JSON messages based on NIEM Schemas.
1. The JSON messages are expressed as JSON-LD, a scalable JSON framework for
   linked data.
1. The names, relationships and structures in JSON messages are based on names,
   relationships and structures described by NIEM-conformant XML schemas.
1. The details of how JSON-LD represents NIEM XML data is based on the NIEM
   Naming and Design Rules's mapping between XML (and XML Schema) and RDF.

### The NIEM data model and RDF {#niem-and-rdf}

The [NIEM Naming and Design Rules (NDR)]({{page.ndr-href}}) is the main document that
explains the meaning of NIEM&ndash;conformant XML schemas and XML instance
documents. The framework that the NIEM NDR relies on for meaning is the Resource
Description Framework (RDF), which defines a data model that is the basis for
Semantic Web technologies. NIEM defines the meaning of conformant XML schemas
and XML instance documents in terms of RDF. This document leverages the NDR's
RDF to map NIEM XML schemas and XML instance documents to JSON-LD.

Although NIEM is, at its core, defined in terms of RDF, most users of NIEM do
not have to understand much about RDF; NIEM is primarily discussed in terms of
XML and XML schema: rules about elements, attributes, simple and complex types,
etc. Similarly, users of this guidance document, and of NIEM's JSON-LD
representation, will not need to understand much about RDF. The few RDF concepts
this document explicitly requires are explained without requiring deep
understanding of the underlying RDF concepts.

The [NIEM NDR Section 5, &ldquo;The NIEM conceptual
model&rdquo;]({{page.ndr-href}}#section_5) describes the conceptual
model of NIEM, and provides a mapping between NIEM-conformant XML
schemas and XML instance documents, and RDF. This section is the basis
for much of what appears in this document. For example:

* [Section 5.6.1, &ldquo;Resource IRIs for XML Schema components and information items&rdquo;]({{page.ndr-href}}#section_5.6.1)
  describes how to find an internationalized resource identifier (IRI) for a
  schema component or XML element or attribute, using the namespace name and
  local name of the component's qualified name (QName). This is the basis for
  the translation of element names into JSON-LD terms.
* [Section 5.6.5.4, &ldquo;Element as a simple property of an object or association&rdquo;]({{page.ndr-href}}#section_5.6.5.4),
  describes the RDF for an element of an object or association type. This is the
  basis for how a NIEM-conformant XML element is translated into corresponding
  JSON-LD.

These, and other sections of the NDR are the basis of the translation
from NIEM XML to JSON-LD. A goal of this document is to explain the
translations from NIEM to JSON-LD sufficiently, so that the reader
does not need to understand the NDR's mappings to RDF, nor the
JSON-LD's RDF basis.

### Use of JSON-LD

This document describes the translation of NIEM-conformant XML
instance documents (informed by certain features of schemas, such as component types) into JSON, using JSON-LD as the target JSON
representation. JSON-LD (JavaScript Object Notation for Linking Data) is a
language-independent data format for representing Linked Data, expressed as
JSON. JSON-LD provides a lightweight mechanism that allows data to be linked
across websites. The syntax is easy for humans to read and easy for machines to
parse and generate.

One reason for choosing JSON-LD is its context mechanism, which allows
IRIs in JSON-LD to look like XML qualified names (QNames). As
described [above](#niem-and-rdf), the NDR defines how to translate
element QNames to IRIs. These IRIs can be represented in a
short form using a JSON-LD context.

Take, for example, the following JSON data:

```javascript
{
  "http://release.niem.gov/niem/niem-core/3.0/#quantityUnitText" : "dozen"
}
```

The key in this JSON object is the IRI defined by NIEM for the
`nc:quantityUnitText` attribute.  Using the JSON-LD context mechanism,
that IRI can be compacted. as follows:

```javascript
{
  "@context": {
    "nc": "http://release.niem.gov/niem/niem-core/3.0/#"
  },
  "nc:quantityUnitText": "dozen"
}
```

The benefits of a JSON-LD representation are apparent. The context
object preserves the information in the XML namespace
declarations. The JSON object key is a familiar NIEM QName. That QName
can be converted into the full IRI by an expansion algorithm defined
for JSON-LD by [JSON-LD 1.0 Processing Algorithms and API, Section
2.1, &ldquo;Expansion&rdquo;]({{page.json-ld-api-href}}#expansion).

<!-- @iamdrscott: I think there is too much detail this material for the introduction

A JSON-LD context can be applied to JSON-LD several ways, including by serving it
as part of an HTTP response, or by reference from within a JSON-LD data
instance.

Another reason to use JSON-LD to represent NIEM data is that JSON-LD explicitly
supports a set of algorithms for manipulating JSON-LD data. The process of going
from a long form of JSON-LD to a short form is the compaction algorithm,
described by
[JSON-LD 1.0 Processing Algorithms and API, Section 2.2, &ldquo;Compaction&rdquo;]({{page.json-ld-api-href}}#compaction).

Similarly, the JSON-LD specifications define a process of expanding JSON-LD into
a canonical long-form, which in-lines context information, and expands IRIs into
their long forms. This is described by
[JSON-LD 1.0 Processing Algorithms and API, Section 2.1, &ldquo;Expansion&rdquo;]({{page.json-ld-api-href}}#expansion). The
expanded form of the above data follows:

```javascript
[
  {
    "http://release.niem.gov/niem/niem-core/3.0/#quantityUnitText": [
      {
        "@value": "dozen"
      }
    ]
  }
]
```

Note that there are more features here than were in the initial data. Expanded
form makes explicit what is implicit in JSON-LD's short form. For example, in
short form, a key in an object may have a single value or may an array of
values. In expanded form there will always be an array of values, even if the
array contains only a single value.
-->

A second reason for choosing JSON-LD is that [JSON-LD is a concrete
RDF syntax](https://www.w3.org/TR/json-ld/#relationship-to-rdf), like
RDF/XML or Turtle. This means that NIEM JSON-LD data may be processed
using RDF techniques, such as SPARQL queries. This also means that
there are now two methods of generating RDF from NIEM-conforming XML
documents and schemas: the first defined in [NIEM NDR Section
5]({{page.ndr-href}}#section_5), the second described by this
guidance. The NTAC's intention is that the two methods produce
consistent RDF; realizing this intention may require future changes to
the NDR, this guidance, or both.

Based on the above, all three of these methods are legitimate ways to
access NIEM JSON-LD data:

1. A developer can work with the data as if it is plain JSON, without worrying
   about details of JSON-LD.
1. A developer can use JSON-LD tools as part of the data processing,
   including using compaction against a known context, expansion, flattening, or framing.
1. A developer can process the data as RDF, possibly first converting it to
   RDF/XML or Turtle syntax.

The guidance in the next major section is intended to describe a
JSON-LD serialization of NIEM-conforming XML that is easy to generate,
and convenient to process, for all three of these consumer use
cases. Certain advanced concerns for that serialization may be found
in [section 4](#advanced-json).  This document does not attempt to teach best
practices for JSON or JSON-LD; for that, the reader may turn to
[http://json-ld.org/spec/latest/json-ld-api-best-practices](http://json-ld.org/spec/latest/json-ld-api-best-practices),
or other similar resources.
   
## JSON-LD representation of NIEM XML {#xml-to-json}

This section describes the translation of an example IEP (information
exchange package, an XML instance document), defined by an IEPD
(information exchange package description), into the corresponding
JSON-LD data. Each section within highlights the transformation of a
NIEM or XML concept into corresponding JSON-LD. The full source XML
appears in [an appendix below](#full-example-xml). The resulting
JSON-LD also appears in [an appendix below](#full-example-json).

This section makes simplifying assumptions, which may not apply to every NIEM
IEP. If your IEP is more complicated, then you may have to extend the
guidelines to cover your data.

Throughout these examples, at each stage, content is omitted or held back for
later sections. When content is left out, an ellipsis (&ldquo;&hellip;&rdquo;)
appears in place of the omitted text.

### IEP XML instance document

The IEP as a whole is represented by a JSON object, evident in an
instance by an outside set of curly braces. The sub-objects for the
root element and `@context` go within that object:

```javascript
{
    "@context" : {
        ...
    },
   ...
}
```

Rules for what goes in this object follow below.

### Namespaces and JSON-LD context

NIEM uses XML namespaces to distinguish components with similar names, to
identify the authorities responsible for managing a set of XML schema
components, and to organize data definitions among NIEM Core, domains, IEPD
extensions, etc. Every NIEM IEP has namespace declarations for its content. To
uniquely specify a NIEM element, attribute, or schema component, its local name
must be combined with the namespace associated with its namespace prefix.

The context mechanism in JSON-LD can serve a purpose similar to XML
namespaces. JSON-LD uses International Resource Identifiers (IRIs) as keys
within JSON objects, and to uniquely identify objects. A JSON-LD context can
define parts of IRIs, which can be used in short-form terms which expand into
full IRIs. So, XML namespaces in the IEP are mapped to JSON-LD context entries,
to support short-form terms.

**ASSUMPTIONS**: All of the IEP's namespace declarations are at or above the
IEP's root element (if there is an envelope around the IEP's root
element). There is no content using the default (no namespace prefix) namespace.

These are the namespace declarations in the sample IEP:

```xml
<exch:CrashDriverInfo 
    xmlns:exch="http://example.com/CrashDriver/1.0/"
    xmlns:j="http://release.niem.gov/niem/domains/jxdm/5.1/"
    xmlns:nc="http://release.niem.gov/niem/niem-core/3.0/"
    xmlns:geo="http://release.niem.gov/niem/adapters/geospatial/3.0/"
    xmlns:gml="http://www.opengis.net/gml/3.2"
    xmlns:structures="http://release.niem.gov/niem/structures/3.0/"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <nc:Person structures:id="P01">
  ...
</exch:CrashDriverInfo>
```

Each declared namespace prefix is converted into an `@context` entry:

* The namespace prefix becomes a short term.
* The namespace name assigned to the prefix is converted into an IRI root.

The rules for constructing IRIs from QNames are provided by
[NDR section 5.6.1, &ldquo;Resource IRIs for XML Schema components and information items&rdquo;]({{page.ndr-href}}#section_5.6.1). This
leads to the definition of IRI roots as follows:

* If the namespace name ends with &ldquo;#&rdquo;, then the IRI root is the
  namespace name.
* Otherwise: concatenate(namespace name, &ldquo;#&rdquo;).

For the QName `nc:Person` this yields the IRI `http://release.niem.gov/niem/niem-core/3.0/#Person`. 

In addtion, we apply the following guidelines:

* Omit the `xsi` namespace, `http://www.w3.org/2001/XMLSchema-instance`, which
  is reserved for XML Schema-specific concepts, and is not carried over into
  JSON-LD.
* Include a declaration of `rdf` to
  `http://www.w3.org/1999/02/22-rdf-syntax-ns#`. This is used for `rdf:value`
  and `rdf:XMLLiteral`.

<!--
> If we decide to toss the adapter section, then we can put back in
> the guidance to omit namespace prefixes. Otherwise I think we need
> them. Also, why are we keeping "structures"? &mdash;@iamdrscott

Probably keeping:

* structures:ObjectType, 
* structures:AssociationType, 

TBD:

* structures:metadata, 
* structures:relationshipMetadata
-->
  
This yields the following `@context` entry:

```javascript
{
    "@context" : {
        "exch" : "http://example.com/CrashDriver/1.0/#",
        "j" : "http://release.niem.gov/niem/domains/jxdm/5.1/#",
        "nc" : "http://release.niem.gov/niem/niem-core/3.0/#",
        "geo" : "http://release.niem.gov/niem/adapters/geospatial/3.0/",
        "gml" : "http://www.opengis.net/gml/3.2#",
        "structures" : "http://release.niem.gov/niem/structures/3.0/#",
        "rdf" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    },
    "exch:CrashDriverInfo" : {
        ...
    }
}
```

### Document element (A.K.A. root element)

Each element within the IEP is converted to a key in a
[JSON-LD node object]({{page.json-ld-href}}#node-objects). 

The root element (or document element) of a NIEM IEP is also converted to a node
object. It is given the JSON key corresponding to the QName (XML qualified name)
of the element. This may be expanded into an IRI by a JSON-LD processor, but
this guidance recommends using the QName, supported by a context entry for the
IRI root. Within the [full example](#full-example), this yields:

```javascript
{
  "@context": {
    "exch": "http://example.com/CrashDriver/1.0/#",
    ...
  },
  "exch:CrashDriverInfo": {
    ...
  }
}
```

> Seems to me we need only one of sections 2.1 and 2.3.  I'd keep
> 2.3.  &mdash;@iamdrscott

### Element content of an object or association type

Since the top level element is a
[NIEM object type]({{ndr-href}}#definition_object_type), we convert most
elements within to a key for the top-level element's JSON-LD object. In the
sample instance, `exch:CrashDriverInfo` has the following child elements:

* `nc:Person`
* `j:Crash`
* `j:PersonChargeAssociation`
* `j:Charge`
* `j:JusticeMetadata`

These are each converted into keys within the `exch:CrashDriverInfo` object
described above:

```javascript
...
"exch:CrashDriverInfo": {
  "nc:Person": {
      ...
  },
  "j:CrashDriver": {
      ...
  },
  "j:PersonChargeAssociation": {
      ...
  },
  "j:Charge": {
      ...
  }
  "j:JusticeMetadata": {
      ...
  }
}
```

This is the most common case; this is how object types and association type are
translated to JSON-LD.

Note that there is only one pair for each child
element *name*, no matter how many times that element appears in the
content.  It is now time to discuss...


### Repeated Elements

In the [full example XML IEP](#full-example-xml), The element
`nc:PersonMiddleName` is repeated within `nc:PersonName`:

```xml
<nc:PersonName nc:personNameCommentText="copied">
    <nc:PersonGivenName nc:sequenceID="1">Peter</nc:PersonGivenName>
    <nc:PersonMiddleName nc:sequenceID="2">Death</nc:PersonMiddleName>
    <nc:PersonMiddleName nc:sequenceID="3">Bredon</nc:PersonMiddleName>
    <nc:PersonSurName>Wimsey</nc:PersonSurName>
</nc:PersonName>
```

Since `nc:PersonMiddleName` is repeated, it is represented using the key
`nc:PersonMiddleName`, with a value that is an array of objects:

```javascript
"nc:PersonName": {
  "nc:PersonGivenName": <!-- content of element nc:PersonGivenName -->,
  "nc:PersonMiddleName": [
    <!-- content of first element nc:PersonGivenName -->,
    <!-- content of second element nc:PersonGivenName -->
  ],
  "nc:PersonSurName": <!-- content of element nc:PersonSurName -->,
  "nc:personNameCommentText": "copied"
}
```

We see that occurrences of element `nc:PersonMiddleName` are bundled
together as an array, and that array is the value for key
`nc:PersonMiddleName`. A repeated element is converted into a JSON
object with an array value. (This is done for elements with simple
content as well as the complex elements shown.) The array contains one
JSON object for the content of each element instance. Note that order
of data within an array should not be considered significant, as
described [below](#json-ld-as-json).

Consumers of NIEM JSON-LD data must be aware that the value of a
repeatable element may be an array (if the element is in fact
repeated), or an object (if it is not), and code accordingly.

Observe that with this guidance, the same JSON is produced for these
two `Parent` elements:

```xml
|<Parent>          |    <Parent>          |
|    <Repeated/>   |        <Repeated/>   |
|    <Repeated/>   |        <Child/>      |
|    <Child/>      |        <Repeated/>   |
|</Parent>         |    </Parent>         |
```

Therefore it is up to the developer to ensure that these two elements
have the same meaning in the IEP.  If the meaning depends on the
difference in element ordering, then the guidance in this document
does not apply, and the developer is on his own.  However, in that
case, the IEPD design is bad, conflicting with the [NIEM Conceptual
Model](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_5).

### Element with Complex Content and Attributes

<!-- reference to another section ("advanced topics") to talk about handling
rdf:value. You could define rdf:value to something in @context

```javascript
{
  "@context": {
    "nc": "http://release.niem.gov/niem/niem-core/3.0/#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "text" : "rdf:value"	
  },
  "nc:Date": { "text": "1893-05-04" }
}
```
 -->

The content of an element with complex content is converted to a JSON
object with one pair for the name of each attribute and one pair for
the name of each child element in that content. For example, in the
sample IEP we have

```xml
<nc:PersonName nc:personNameCommentText="copied">
    <nc:PersonGivenName nc:sequenceID="1">Peter</nc:PersonGivenName>
    <nc:PersonMiddleName nc:sequenceID="2">Death</nc:PersonMiddleName>
    <nc:PersonMiddleName nc:sequenceID="3">Bredon</nc:PersonMiddleName>
    <nc:PersonSurName>Wimsey</nc:PersonSurName>
</nc:PersonName>
```

which is converted to the following JSON

```javascript
"nc:PersonName": {
  "nc:personNameCommentText": "copied",
  "nc:PersonGivenName": {
    ...
  },
  "nc:PersonMiddleName": [
    ...
  ],
  "nc:PersonSurName": {
    ...
  }
}
```

Observe that for a NIEM-conforming IEP, there can't be a collision
between attribute and child element names, because of the [camel-case
rule](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8.1).
For an IEP that is not NIEM conforming, it is possible to have an
attribute and a child element with the same name. This document has no
guidance for such non-conforming IEPs; developers are on their
own.

### Element with Simple Content and Attributes

The `nc:PersonGivenName` element has simple content and
attributes. Its JSON representation is

```javascript
  "nc:PersonGivenName" : {
    "nc:sequenceID" : 1,
    "rdf:value" : "Peter"
  }
```

The element's simple content can't be represented by
`{"nc:PersonGivenName" : "Peter" }`, because then there is no place to
put the attributes. Instead, the representation must be an object,
with ordinary keys for the attributes and a special key for the simple
content.  That special key could have a magic syntax, such as `"."`,
but this would only work for plain JSON consumers; to process the data
as JSON-LD or RDF, the key must be a term mapped to an IRI.

According to the [RDF
Primer (2004)](https://www.w3.org/TR/2004/REC-rdf-primer-20040210/#rdfvalue),
`rdf:value` is customarily used in this situation where a property has
one main value and one or more additional values providing context
that qualifies the main value. Therefore, this
guidance chooses `rdf:value` for the special key. This choice also makes
the JSON-LD representation consistent with [NDR content of an
element]({{page.ndr-href}}#section_5.6.5.2), which specifies that
non-empty simple values are mapped in this way.

Obviously this will break if an element in the IEP has `rdf:value` as
an attribute.  Fortunately, there is no good reason to do that in a NIEM IEP. 

### Element with Simple Content and No Attributes

The `nc:Date` element has simple content and no attributes.  Its JSON-LD
representation is

```javascript
  "nc:Date" :"2006-05-04"
```

With no attributes, there is no need for the `rdf:value` key, and so it
is not used. Consumers of NIEM JSON-LD data must be aware that the
value of a simple element may be an object (if the element has
attributes), or a value (if it does not), and code accordingly.

### Element with Numeric or Boolean Content

<!-- easy button walkthrough is stringifying or Boolean.
    typing is an advanced topic -->

When the IEPD schema defines a numeric type for a simple element, the
value of the JSON pair is a number.  Likewise, when the schema defines
a boolean type, the value of the JSON pair is `true` or `false`.  For
example, the representations of `nc:MeasureDecimalValue` and
`exch:PersonFictionalCharacterIndicator` are:

```javascript
  "nc:MeasureDecimalValue" : 9.7 

  "exch:PersonFictionalCharacterIndicator" : true 
```

### Elements with empty and nilled content

There are three situations in an XML instance where an element may have empty
content:

1. The element has no simple content, and any element content is optional. For
   example, its type may be a complex type with complex content, which has no
   simple value, and its element children may have `minOccurs="0"`.
1. The element is defined to have simple or complex content, but the simple
   content is nilled using `xsi:nil="true"`.
1. The element has simple content, but that simple content is the empty string.

Cases 1 and 2 are represented the same way in JSON-LD: There is no value
associated with the element. Take this XML example (case 1):

```xml
<nc:Person/>
```

&hellip;or the equivalent (case 1):

```xml
<nc:Person></nc:Person>
```

Both of these omit any content. To be a valid XML instance, the schema for this
must either define `nc:PersonType` (the type defined by NIEM for element
`nc:Person`) with no child elements, or with child elements that have
`minOccurs="0"`. A similar instance may use `xsi:nil` (case 2):

```xml
<nc:Person xsi:nil="true"/>
```

This XML instance may be valid with mandatory element children, as long as
`nillable="true"` is set for the element. The JSON for all of these is the same:

```javascript
{ 
  "nc:Person" : { }
}
```

This expresses that `nc:Person` is a node object, but does not assert any other
properties.

An element carrying an empty string (case 2) is represented differently. In NIEM, element
`nc:PersonGivenName` is defined to have simple content based on `xs:string`. So,
if that element is empty, it represents the empty string. The XML instance (case 2):

```xml
<nc:PersonGivenName></nc:PersonGivenName>
```

&hellip;and the equivalent XML (case 2):

```xml
<nc:PersonGivenName/>
```

&hellip;are both carrying the empty string as children of
`nc:PersonGivenName`. This may be represented with the JSON:

```javascript
{ 
  "nc:PersonGivenName" : "" }
}
```

### ID Attributes

NIEM defines the attribute `structures:id` to carry ID
values. `structures:id` is the only ID-typed attribute allowed in
NIEM-conformant content (except for externally-defined content). An
ID attribute in XML defines a unique document-relative unique
identifier: An ID value may appear in at most one element within a
single XML document; the same ID value may appear in any number of
different documents.

The NIEM-defined `structures:id` attribute is represented by the JSON-LD
reserved key `@id`. The value for `@id` is the value of `structures:id`. For
example, the XML:

```xml
<nc:Person structures:id="P01">
  <!-- child elements go here -->
</nc:Person>
```

&hellip;is represented by the JSON-LD:

```javascript
{ 
  "nc:Person" : {
    "@id" : "P01",
    <!-- JSON for child elements goes here -->
  }
}
```

The JSON-LD processor will process `@id` values against a base IRI. This might
be automatically generated by a system (for example, the JSON-LD Playground uses
a base IRI of `http://json-ld.org/playground/`). The base IRI may also be set by `@base` within an `@context`, as described by [{{page.json-ld-name}}, Section 6.1, &ldquo;Base IRI&rdquo;]({{page.json-ld-href}}#base-iri).

### References and IDREF attributes

The value of a `structures:ref` attribute and any other IDREF attribute is
converted into a node reference to the @id of the corresponding JSON-LD resource.  
For example, the representation for
`<nc:RoleOfPerson structures:ref="P01" xsi:nil="true"/>` is

```javascript
{ "nc:RoleOfPerson" : {
    "@id" : "P01" }
}
```

Observe that in JSON-LD, an object containing a pair with the `@id`
key may be a node reference or an identified node. The difference is
whether the object contains any *other* pairs; i.e. exactly one pair
is a reference, two or more pairs is an identified node that may be
referenced.

Observe also that the `xsi:nil` attribute is useful only for schema validation, and does
not appear in the JSON-LD representation.

### Abstract Elements and Substitution Groups

Because this guidance does not seek to replicate in JSON the underlying XML Schema
powering NIEM, substitution groups are simply represented by replicating the XML
instance structure, where the substitution has already taken
place. Abstract elements do not appear at all.  For example,

```xml
<nc:Person>
    <!-- Date substituted for DateRepresentation -->
    <nc:PersonBirthDate>
        <nc:Date>1893-05-04</nc:Date>
    </nc:PersonBirthDate>
</nc:Person>
```

becomes

```javascript
    "nc:Person" : {
        "nc:PersonBirthDate" : {
            "nc:Date"  : "2006-05-04"
        }
    }
```

### Augmentations

NIEM has two kinds of augmentation elements. The most common is a
container element that is derived from `AugmentationType` and has a
name ending in `Augmentation`; for example, `LicenseAugmentation` in
the sample IEP. These augmentation container elements are important
for schema validation, but have no role in the conceptual model, and
so they do not appear in the JSON representation. So, for example, the
representation of `j:DriverLicense` is

```javascript
  "j:DriverLicense" : {
    "j:DriverLicenseCardIdentification" : {
        "nc:IdentificationID" : "A1234567" 
    },
    "nc:ItemLengthMeasure" : {
        "nc:MeasureDecimalValue" : 9.7,
        "nc:LengthUnitCode" : "CMT" 
    }
  }
```

The other kind of augmentation element is an element declared in the
substitution group of an `AugmentationPoint`.  For example, the IEPD
schema includes the following element declaration:

```xml
<xs:element name="PersonFictionalCharacterIndicator" type="niem-xs:boolean"
  substitutionGroup="nc:PersonAugmentationPoint">
    <xs:annotation><xs:documentation>
        True if this person is a fictional character in a literary work.
    </xs:documentation></xs:annotation>     
</xs:element>
```

Augmentation elements of this kind are treated the same as any other
child element.

### Metadata

<!-- TODO: do an easy button transform for metadata. put an "oh well" for relationshipMetadata --> 

> We are still working on figuring out how to represent metadata in JSON-LD.
> The NDR says to hang metadata on RDF statements, but it is not clear
> what would be the best way to do that. One option is if the XML contains
> metadata, then create an RDF statement and hang the metadata off of that.
> Metadata on objects can be handled with rdf:value, but metadata on
> associations is harder. &mdash;@webb, &mdash;@leilatite

One way to do that is through reification. The JSON-LD would look
something like example from [stack overflow](http://stackoverflow.com/questions/33925116/how-to-refer-to-rdf-statements-in-json-ld-how-to-statement-about-statements):

```json
{
  "@context": {
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "subject": { "@id": "rdf:subject", "@type": "@id" },
    "predicate": { "@id": "rdf:predicate", "@type": "@id" },
    "object": { "@id": "rdf:object", "@type": "@id" },
    "j": "http://release.niem.gov/niem/domains/jxdm/5.1/#",
    "structures": "http://release.niem.gov/niem/structures/3.0/#"
  },
  "@type": "rdf:Statement",
  "subject": "j:Charge",
  "predicate": "structures:metadata",
  "object": { "@id": "j:JusticeMetadata" },
  "j:CriminalInformationIndicator": true 
}
```

### Adapter Elements

<!-- TODO: move most of this to an an advanced topics section. this section just
does a simple custom mapping. Make the JSONLD full example correspond to this. -->

IEPD developers sometimes want to reuse schema components defined in
an existing standard via a schema that does not conform to the NDR.
The adapter elements defined in [NDR section 10.2.3, &ldquo;External
adapter types and external
components&rdquo;]({{page.ndr-href}}#section_10.2.3) are the NIEM
mechanism for including these external components in the IEPD.  For
instance, in the following section of the sample IEP, the
`geo:LocationGeospatialPoint` element is a NIEM-conforming
adapter. The external content of that adapter element (`gml:Point`) is defined by the Open
Geospatial Consortium (OGC) in the Geographic Markup Language (GML).

```xml
<geo:LocationGeospatialPoint>
    <gml:Point gml:id="PT01" srsName="urn:ogc:def:crs:EPSG::4326">
        <gml:pos>51.835 -0.417</gml:pos>
    </gml:Point>
</geo:LocationGeospatialPoint>
```

Because the external content of an adapter element does not follow the
NDR, the guidance in this document may not apply.  Developers must
decide how to convert external content to JSON on a case-by-case
basis, and must also decide which of the three consumer use cases
(plain JSON, JSON-LD, RDF) they will support. For the adapter element
in the sample IEP, the developer might apply any of the following
solutions:

#### Pretend the external content is NIEM conforming

The developer could simply apply the guidance in this document as if
the external content were NIEM conforming.  In this case, the adapter
element is converted to

```json
"geo:LocationGeospatialPoint": {
  "gml:Point": {
    "@id": "PT01",
    "srsName": "urn:ogc:def:crs:EPSG::4326",
    "gml:pos": "51.835 -0.417"
  }
}
```

That will work when processed as plain JSON.  When processed as
JSON-LD, the resulting IRIs in the expanded form are
reasonable. However, because the `srsName` attribute does not have a
namespace in GML, it will be dropped by the JSON-LD processor. That will
probably cause difficulties for the JSON-LD and RDF consumer use
cases.

#### Create a custom mapping to JSON-LD

The difficulty with the `srsName` attribute could be resolved with a
custom mapping, one which extends the guidance in this document by
supplying a special `@context` pair for the content of the adapter
element. The resulting JSON-LD would be

```json
"geo:LocationGeospatialPoint": {
  "@context": {
    "srsName": "http://www.opengis.net/gml/3.2#srsName"
  },
  "gml:Point": {
    "@id": "PT01",
    "srsName": "urn:ogc:def:crs:EPSG::4326",
    "gml:pos": "51.835 -0.417"
  }
}
```

This approach produces a plausible IRI for the `srsName` attribute in
the expanded JSON-LD, and so should work for the JSON-LD and RDF
consumer use cases. This is the approach followed for the [full
example](#full-example-json.)

#### Represent the external content with GeoJSON

GeoJSON is a geospatial data interchange format based on JSON. The
Internet Engineering Task Force (IETF), in conjunction with the
original specification authors, has formed the [Geographic JSON
WG](https://datatracker.ietf.org/wg/geojson/charter/) to standardize
the format. Although GeoJSON is not a specification of the OGC, it is
still a plausible choice for encoding GML content in JSON. With this
solution, the adapter element is converted to

```json
"geo:LocationGeospatialPoint": {
  "@context": {
    "geometry": "https://datatracker.ietf.org/doc/draft-ietf-geojson/#geometry",
    "type": "https://datatracker.ietf.org/doc/draft-ietf-geojson/#type",
    "coordinates": "https://datatracker.ietf.org/doc/draft-ietf-geojson/#coordinates"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [51.835, -0.417]
  }
}
```

That will work when processed as plain JSON, ignoring the `@context`
pair. Defining the context as shown will produce plausible IRIs in the
expanded JSON-LD and converted RDF. A better base IRI would be
desirable, of course.

#### Represent the external content as an XMLLiteral blob

```javascript
"geo:LocationGeospatialPoint": {
  "@type": "rdf:XMLLiteral",
  "@value":
    "<gml:Point gml:id=\"PT01\" 
                srsName=\"urn:ogc:def:crs:EPSG::4326\">
         <gml:pos>51.835 -0.417</gml:pos>
     </gml:Point>"
}
```

## Implementing Translators

> TODO: Discuss an **easy button** transfrom from NIEM XML to JSON-LD, treating input
> like a *canned query* with very little optionality, transforming to JSON-LD
> using XSLT3's JSON capability. &mdash;@webb

## Advanced Concerns for JSON-LD Serialization {#advanced-json}

### JSON-LD as plain JSON {#json-ld-as-json}

A software developer may wish to work with JSON-LD data instances with
vanilla JSON tools, which aren't JSON-LD aware. Although developers
are encouraged to use JSON-LD tools, using vanilla JSON tools is
straightforward, although there are caveats. These include:

1. The meaning of JSON-LD is defined its **context**.
1. JSON-LD expanded syntax may be much more *regular*, simplifying software that uses data.
1. The order of keys in an object is not significant, so don't rely on it.
1. Arrays may only appear as needed.
1. Order of data inside an array should not be considered signficant (as described by [*Building JSON-LD APIs: Best Practices*, &ldquo;Best Practice 6: Assume arrays are unordered&rdquo;](http://json-ld.org/spec/latest/json-ld-api-best-practices/#unordered-values))


Vanilla JSON processes that use JSON-LD are encouraged to carefully
control the organization and JSON-LD context of the data. This may be
done by using the expansion, compaction, and framing algorithms
provided as part of the JSON-LD specification products.

### Order of keys not significant {#json-key-order-not-significant}

In JSON and JSON-LD, the order of keys within an object are *not* considered
significant. This means that the two following pieces of JSON-LD are
equivalent:

```javascript
{ 
  "ns:key1": "value",
  "ns:key2": "value"
}
```

is equivalent to:

```javascript
{ 
  "ns:key2": "value",
  "ns:key1": "value"
}
```

The order of keys within a JSON-LD instance may be determined by the
writer of the JSON-LD, or may be handled automatically by a JSON-LD library.

### Arrays may be omitted {#json-ld-array-optional}

In JSON-LD, a single object is equivalent to an array that contains a 
single object. So, the two following pieces of JSON-LD are equivalent:

```javascript
{
  "ns:key": "value"
}
```

is equivalent to:

```javascript
{
  "ns:key" : [ 
    "value" 
  ]
}
```

A system that is generating JSON-LD could optionally generate the
second form instead of the first. 

## Additional guidance

### Expressing types

The `@type` keyword is used to associate a type with a node. 
 The concept of a node type and a value type are different. A _node type_ specifies the type of 
 thing that is being described, like a Person, Location, or Event. A _value type_ specifies the 
 data type of a particular value, such as an integer, a floating point number, or a date. 
 Using `@type` keywords is optional. In general, the NIEM IEPD uses XML Schema to define node types 
 or to constrain value types so it would not be necessary for the JSON-LD to repeat all of that.

If you need to specify type information for handling the iep data correctly, you can add it where needed. 
This example specifies that the node type of Person in the iep is a NIEM PersonType and the 
value type of their PersonBirthDate is an xsd date type.

```javascript
{
  "@context": {
    "nc": "http://release.niem.gov/niem/niem-core/3.0/#",
    "xs": "http://www.w3.org/2001/XMLSchema#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    },
      "nc:Person": {
        "@id": "P01",
        "@type" : "nc:PersonType",
        "nc:PersonBirthDate": {
          "nc:Date": {
            "rdf:value": {
              "@value" : "1893-05-04",
              "@type"  : "xs:date"
            }  
          }
        }
      }  
    }
```

Here is an example of a typed literal, identifying the type of the simple
content of `nc:MeasureDecimalValue` as being type `xs:decimal`:

```javascript
{
  "@context" : {
    "nc": "http://release.niem.gov/niem/niem-core/3.0/#",
    "xs": "http://www.w3.org/2001/XMLSchema#"
  },
  "nc:MeasureDecimalValue": {
    "rdf:value": {
      "@value": "9.7",
      "@type" : "xs:decimal"
    }
  }
}
```

If you don't specify the value type as xs:decimal, it is interpreted by JSON as being of type http://www.w3.org/2001/XMLSchema#double and the value becomes "9.699999999999999E0".

See [JSON-LD Section 6.4 Typed Values]({{page.json-ld-href}}#typed-values) for more information on
how to express typed values.

<!-- `xsi:type` may be mapped to LD. optionally: (1) drop it (2) map over to "@type" -->

### Linking contexts via HTTP headers

If you have existing JSON data that you want to expose as JSON-LD, you can
do that by supplying a separate JSON-LD context for it. This provides an
upgrade path for developers who need to be able to continue to support regular JSON.
You do this by adding a HTTP Link Header as specified by [RFC5988](#bibrfc5988) 
using the `http://www.w3.org/ns/json-ld#context` link relation.

A separate context file could be served at URL `http://example.com/contexts/iepd-context.jsonld`:

```javascript
{
  "@context": {
    "nc": "http://release.niem.gov/niem/niem-core/3.0/#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    ...
    "givenName" : "nc:PersonGivenName",
    "additionalName" : "nc:PersonMiddleName",
    "familyName" : "nc:PersonSurName",
    "text" : "rdf:value"
  }
}
```

A link header can be added to the plain JSON response that includes:

```
Link: <http://example.com/contexts/iepd-context.jsonld>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"
```

The JSON-LD processor prepends the context to the JSON data and interprets the
original plain JSON as JSON-LD. These definitions can then be used by a JSON
data instance, without the instance explicitly referring to the context. Since
the context defined the short terms as aliases to full NIEM terms, expanding
this JSON data will convert it to use the full NIEM terms.

```javascript
{
  "givenName": { "text" : "Peter" },
  "additionalName": [ { "text": "Death"}, 
                      { "text" : "Bredon" } ],
  "familyName": { "text" : "Wimsey" }
}
```

A benefit of separating the context from the JSON is that if you're storing the
JSON data in a database you can add new terms to the JSON-LD context without
having to replace the inline context in all the data that has already been
stored.

See [JSON-LD Specification Section 6.8, &ldquo;Interpreting JSON as JSON-LD&rdquo;]({{page.json-ld-href}}#interpreting-json-as-json-ld) for more information and examples
of how to implement this.


## Roadmap for future work

### NIEM Conformance

1. Provide a normative specification on a way to generate a JSON-LD instance from a 
NIEM-conformant XML schema and/or XML instance, and such a JSON-LD instance could be 
NIEM-conformant. 
1. Provide a normative specification on verifying NIEM-conformance of a JSON-LD instance to a 
NIEM-conformant XML schema

### Support for transforming between XML and JSON

Describe approaches or tools for transforming.

Provide helper functions to check for repeatable elements.
<div id="body-end"></div>


## References

* <a name="bibjsonld"></a>JSON-LD: Manu Sporny, Gregg Kellogg, Markus Lanthaler, Editors. 16 January 2014. W3C Recommendation. &ldquo;[A JSON-based Serialization for Linked Data]( https://www.w3.org/TR/json-ld/).&rdquo; Available from [https://www.w3.org/TR/json-ld/](https://www.w3.org/TR/json-ld/)
* <a name="bibrdfconcepts"></a>RDF-Concepts: 
Richard Cyganiak, David Wood, Markus Lanthaler, Editors. 09 January 2014. W3C Proposed Recommendation.
&ldquo;[RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/2014/PR-rdf11-concepts-20140109/).&rdquo;  Available from 
[http://www.w3.org/TR/rdf11-concepts/](http://www.w3.org/TR/rdf11-concepts/)
* <a name="rdfprimer2004"></a>RDF Primer: Frank Minola, Eric Miller,
  Brian McBride, Editors. 10 February 2004. W3C Recommendation. 10
  February 2004. &ldquo;[RDF Primer](https://www.w3.org/TR/2004/REC-rdf-primer-20040210/#rdfvalue).&rdquo;
* <a name="bibrfc4627"></a>RFC4627: D. Crockford. &ldquo;[The application/json Media Type for JavaScript Object Notation (JSON) (RFC 4627)](http://www.ietf.org/rfc/rfc4627.txt).&rdquo; July 2006. RFC. Available from  [http://www.ietf.org/rfc/rfc4627.txt](http://www.ietf.org/rfc/rfc4627.txt)
* <a name="bibrfc5988"></a>RFC5988: M. Nottingham. [Web Linking](http://www.ietf.org/rfc/rfc5988.txt). October 2010. Internet RFC 5988. Available from: [http://www.ietf.org/rfc/rfc5988.txt](http://www.ietf.org/rfc/rfc5988.txt)

## Full example: {#full-example}

The walkthrough of how to transform an XML instance document IEP into a JSON-LD
data instance is demonstrated using the full example documents within this
section. These examples were constructed to show many aspects and features of
NIEM XML instance documents.

### Full example: XML instance document {#full-example-xml}

The following XML document is the XML form for the full example from [Section 2, above](#xml-to-json).

```xml
{% include_relative full-example.xml %}
```

### Full example: JSON data {#full-example-json}

The following JSON data is a compact JSON-LD form of the full example from [Section 2, above](#xml-to-json).

```javascript
{% include_relative full-example.jsonld %}
```

