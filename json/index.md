---
title: NIEM and JSON Overview
---

The NIEM Technical Architecture Committee (NTAC) is in the process of developing
guidelines and specifications supporting the use of JSON with NIEM.

JSON is defined by [RFC 4627](http://www.ietf.org/rfc/rfc4627.txt):

> JavaScript Object Notation (JSON) is a lightweight, text-based,
language-independent data interchange format.  JSON defines a small set of
formatting rules for the portable representation of structured data.

The NTAC has produced [Non-Normative Guidance in Using NIEM with JSON](guidance).
The guidance lays out how a NIEM IEPD describes a JSON message, by showing that XML elements,
attributes, and other features can be expressed as JSON objects. These
guidelines use JSON-LD, which supports namespace-qualified names, maintains the
RDF conceptual model used by NIEM, and supports widely-used linked data
methodologies.

As part of the NIEM 4.0 release, NIEM will publish online a NIEM JSON-LD
context, to provide a Uniform Resource Identifier (URI) mapping for each
namespace used in NIEM. This will enable JSON users an easy way for JSON
messages to use and reference the model, providing an easy-to-use linked data
approach to NIEM.

Future work will develop specifications supporting the use of NIEM JSON messages
as a fully NIEM-conformant representation of a NIEM IEPD. In addition, work may
include tools that support the transformation of data between NIEM JSON and NIEM
XML.
