---
title: Ways Of Using NIEM With JSON
---

<!-- A landing page, but not the only landing page -->

NIEM is best understood as a standards-based approach for constructing
machine-to-machine data exchange specifications. To software
developers and data exchange designers, NIEM offers:

* A collection of community-agreed data elements that may be reused
  in different ways
  
* A framework for assembling those data elements to specify the
  semantics and syntax of the exchanged data, in a way that supports
  automated validation of syntatic conformance
  
* A simple way to extend the NIEM elements in an exchange
  specification by reusing well-known data definitions, and by
  creating new definitions as needed.

NIEM was originally designed for XML-based data exchange. It can now
be applied to JSON data in several ways:

* Data elements from the NIEM model [#can be reused to provide the
  meaning of JSON data](tbd), just like any other well-known data
  elements (for example, elements from Dublin Core or
  Friend-of-a-Friend). There is no XML in this.
  
* NIEM elements and well-known external elements can be extended
  by the data exchange designer to specify the semantics and syntax of
  exchanged NIEM-JSON data, [#using JSON Schema for automated
  validation of syntactic conformance](tbd). Again, no XML in this.
  
* A NIEM-based data exchange specification can have [#both a NIEM-XML
  and a NIEM-JSON format](tbd), plus lossless conversions between
  those two formats. 

Here is a [#rationale for using NIEM with JSON](tbd), which considers
features of NIEM features beyond those offered to developers.

