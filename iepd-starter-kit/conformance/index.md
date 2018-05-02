---
title: IEPD Conformance
icon: fa-gavel
description: NIEM has developed a set of rules for various pieces that make up an information exchange. Something that follows these rules is called NIEM-conformant.
---

An Overview

## What is NIEM?

NIEM is the National Information Exchange Model, a collaborative project to aid
information exchange across a broad community, to ensure that data in motion
works with a broad array of tools, and retains its meaning across organizational
boundaries. The NIEM community brings together state, local, tribal, and federal
government organizations within the United States, along with international
partners, to define reusable data structures and rules for their use.

NIEM has two technical aspects that work together:

1. The NIEM model, a set of data components that have been collaborative
   developed and refined over time. These data components are reusable,
   extensible data types and relationships, which cover a broad set of data
   needs across the community.
2. A set of practices for defining and reusing the components, so that messages
   and their specifications have clear meaning, and that they reuse and extend
   the NIEM data components in an understandable way.
   
The NIEM community consists of groups that govern the technical architecture and
the data model of NIEM. Data model governance is distributed, with a core group
governing the NIEM core, and self-governing domains addressing functional areas,
like justice, agriculture, and transportation.

## What is NIEM conformance?

NIEM has developed a set of practices for information exchanges, which include:

1. Reuse the NIEM data components, when appropriate.
1. Otherwise, extend and specialize the NIEM data components as needed.
1. Construct new data components to express any concepts specific to an exchange
   or community, when the NIEM model doesn't cover a concept.
1. Use NIEM methods for common data modeling needs. For example, NIEM describes:
   * *references*, which create links between data items,
   * *associations*, which express complex relationships that carry their own data,
   * *augmentations*, which add characterstics to already-defined classes of objects
   * *external types*, which carry non-NIEM data in a NIEM message, and
   * *roles*, which express a role or function of an entity.
1. Make the specifications for exchanges precise, so that software can support
   the use and comprehension of messages, as well as ensuring that messages obey
   the rules of their specifications.
1. Construct messages so that software can ensure that they follow their
   specifications, and reuse NIEM terms (namespaces and local names), so that
   the identity and expected content ofmessages are consistent and unambiguous.
   
The National Information Exchange Model has developed a set of rules for various
pieces that make up an information exchange. Something that follows these rules
is called **NIEM-conformant**.

## What does NIEM conformance accomplish?

The [Value of NIEM] page describes the results of using NIEM, which include:

* Quicker, cheaper development of information exchanges
* Broad usability of exchanges across architectures and platforms
* Consistent understanding of messages between senders and receivers, and across
  wider communities
* Broad software support of technical features of messages
* The ability to reuse a message format over long periods of time

## What can be NIEM-conformant?

There are several pieces that make up information exchange. NIEM has rules for
each of these, to support understanding of messages and to convey meaning:

1. An **IEP** (*information exchange package*): an XML document that constitutes a message,
   exchange, data item, or payload. An IEP may be transmitted from a sender to a
   receiver, or may be a static document.

1. An **IEPD** (*information exchange package description*): An IEP or message is
   defined by an specification; NIEM calls this specification an IEPD. An IEPD
   is defined by a community to describe a set of messages. An IEPD contains an
   XML Schema, documentation, and other needed files.
   
1. An **XML schema**: An IEP is described by an XML schema, which is a set of
   XML Schema documents that together describe the XML format of a message. 
   
1. An **XML Schema document**: An XML Schema document (XSD) is an XML document
   that describes some features of XML documents. A set of XSDs are brought
   together to form an XML schema, which is used by an XML Schema-validating
   parser to make data accessible to software.
   
NIEM has practices that each of these pieces must follow in order to be
conformant.

## How do I make something NIEM-conformant? 

NIEM has practices, methods, and formats for the pieces that compose an
information exchange. These are expressed as a set of specifications. These
specifications can be useful to an individual developer or implementer of an
exchange, however we don't expect most developers to read them.

We encourage developers to use tools provided by the NIEM program to construct
and validate a NIEM-conformant exchange, including:

- Use the [NIEM Schema Subset Generation Tool][SSGT] to find and assemble NIEM
  data components into an XML Schema subset.
- Use an XML Schema development environment or editor to construct extension
  schemas to express additional concepts needed for an exchange.
- Assemble schemas and other documents into an IEPD using the
  [NIEM IEPD Tool][IEPD tool].
- Ensure IEPDs and schemas follow the NIEM rules using the
  [NIEM Conformance Testing Assistant][contesa] (*Contesa*)
- Build messages that validate against the XML Schemas, and which use advanced
  language features as described by
  [the NIEM Naming and Design Rules section 12][ndr xml doc], which describes
  the meaning of NIEM XML data and references between data objects.

### Additional details

In addition to the tools above, developers may use the specifications to guide
development of conformant artifacts. Relevant specifications include:

- [The NIEM Naming and Design Rules][ndr], which provides rules for XML Schemas
  and documents.
- [The NIEM Code Lists Specification][code lists spec], which supports the NDR
  with additional methods for describing and using code lists, as CSV
  spreadsheets, Genericode XML, or via services.
- [The NIEM Model Package Description Specification][mpd spec], which provides
  rules for syntax and interpretation of NIEM IEPDs.
- [The NIEM Conformance Specification][conformance spec], which provides
  additional details and references for conformance of artifacts.

[Value of NIEM]: https://www.niem.gov/about-niem/value-niem
[SSGT]: https://tools.niem.gov/niemtools/ssgt/index.iepd
[IEPD tool]: https://tools.niem.gov/niemtools/iepdt/index.iepd
[contesa]: https://tools.niem.gov/contesa/
[ndr xml doc]: https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html#section_12
[ndr]: https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html
[mpd spec]: https://reference.niem.gov/niem/specification/model-package-description/3.0.1/model-package-description-3.0.1.html
[code lists spec]: https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html
[conformance spec]: https://reference.niem.gov/niem/specification/conformance/3.0/conformance-3.0.html
