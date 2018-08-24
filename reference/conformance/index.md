---
  redirect_from: /iepd-starter-kit/conformance/
  title: NIEM Conformance
  short: Conformance
  icon: fa-sitemap
  description: Learn about the details of conformance to the NIEM standard.
---

Conformance to NIEM is defined in terms of the artifacts used within the model.
The idea of NIEM Conformance derives from three principle concepts under the
NIEM standard: Conformance Targets, Domains, and Model Package Descriptions (MPDs).

{:.note}
> NIEM-conformance does not imply compliance. Compliance implies enforcement
> and the existence of an offiial certifcation process that verifies conformance
> or level of conformance. NIEM does not currently define compliance.

## Definition of NIEM Conformance

NIEM developed a set of practices for information exchanges, which include:

1. Reuse the NIEM data components when appropriate
1. Extend and specialize the NIEM data components as needed
1. Construct new data components to express any concepts specific to an exchange
   or community when the NIEM model does not cover a concept
1. Use NIEM methods for common data modeling needs. For example, NIEM describes:
   - *references* - which create links between data items
   - *associations* - which express complex relationships that carry their own data
   - *augmentations* - which add characterstics to already-defined classes of objects
   - *external types* - which carry non-NIEM data in a NIEM message
   - *roles* - which express a role or function of an entity
1. Make the specifications for information exchanges precise, so that tools and
   systems can support the use and comprehension of messages, as well as ensuring
   each messages obeys the rules of their specifications
1. Construct messages so tools and systems can ensure they follow their specifications
   and reuse NIEM terms (namespaces and local names), so the identity and expected content of messages are consistent and unambiguous

NIEM defines various classes of artifacts - those documents and packages
involved in the modeling, development, and implementation of an exchange - on
which normative design rules apply. These artifacts are called *Conformance
Targets*. It is important to note that the whole of NIEM Conformance can be
understood through a detailed knowledge of its various conformance targets;
but, it is constructive to learn conformance as a schematic process of
derivation from particular Conformance Targets to MPDs.

In the definition of conformance, Systems, tools, and databases cannot conform to NIEM.
Only schema documents document sets, instance documents, MPDs, and other artifacts
defined through a valid NIEM conformance target can conform to NIEM. Internal names, or
usage of data, within a given system have absolutely no impact on the determination of
NIEM-conformance. Conformance is only about:

- Conformance Targets
- Schema documents and other document types with named Conformance Targets
- Schema document sets as a collection of NIEM-conformant schema documents
- NIEM MPDs as a collection of metadata, documentation, and a packaging of NIEM-conformant schema document sets
- Exchange data encapsulated in instance documents derived from, and validated by, a NIEM-conformant MPD

An artifact is NIEM-conformant if and only if:

1. Has a named Conformance Target
1. Adheres to all design and structural rules applicable to its Conformance Target
1. References the namespaces of any NIEM components used in its definition

System, tools or databases may have capabilities designed to specifically support the
development of NIEM-conformant artifacts, but those systems art not, themselves,
NIEM-conformant. Such tools or systems are considered considered NIEM-aware or
NIEM-supporting.

## How to Accomplish NIEM-Conformance

NIEM has practices, methods, and formats for the pieces that compose an
information exchange. These are expressed as a set of specifications. Specifications  define the rules and procedures for creating content which is NIEM-conformant.

We encourage developers to use tools provided by the NIEM program to construct
and validate their information exchanges as NIEM-conformant, including:

- The [NIEM Schema Subset Generation Tool][SSGT] to find and assemble NIEM
  data components into Subset Schema Documents
- A schema development environment or editor to construct Extension Schemas and
  express additional concepts needed for an exchange
- Assemble schemas and other documents into an IEPD using the
  [NIEM IEPD Tool][IEPD tool]
- Ensure IEPDs and schemas follow the NIEM rules by using [ConTesA][contesa]
  (*Conformance Testing Assistant*)
- Build messages that validate against their Schema Document Set, and which use
  advanced language features as described by then [NIEM NDR section 12][ndr xml doc], which describes the meaning of NIEM data and references between data objects

{% comment %}
## Conformance Concepts

The following links detail the various conformance concepts defining a
holistic view of NIEM Conformance:

{% include icon-list.html links=page.links %}
{% endcomment %}
