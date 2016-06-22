---
title: NIEM and JSON
---

The NIEM Technical Architecture Committee (NTAC) is in the process of developing
guidelines and specifications supporting the use of JSON with NIEM.

JSON is defined by [RFC 4627](http://www.ietf.org/rfc/rfc4627.txt):

> JavaScript Object Notation (JSON) is a lightweight, text-based,
language-independent data interchange format.  JSON defines a small set of
formatting rules for the portable representation of structured data.

The first document, [*Using JSON with NIEM* (PDF)](using_json_with_niem.pdf),
identifies motivating factors for use of JSON versus XML, and lays out the
NTAC's initial plan for supporting JSON with NIEM.

The second document, [Non-Normative Guidance in Using NIEM with JSON](guidance),
explains how a NIEM IEPD describes a JSON message, by showing that XML elements,
attributes, and other features can be expressed as JSON objects. These
guidelines use JSON-LD, which supports namespace-qualified names, maintains the
RDF conceptual model used by NIEM, and supports widely-used linked data
methodologies.

Future work will develop specifications supporting the use of NIEM JSON messages
as a fully NIEM-conformant representation of a NIEM IEPD. In addition, work may
include tools that support the transformation of data between NIEM JSON and NIEM
XML.
