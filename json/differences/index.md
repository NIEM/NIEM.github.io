---
title: Differences between NIEM-JSON and NIEM-XML
---

1. A NIEM-XML message must have a single root element (A.K.A. <q>document
   element</q>). A NIEM-JSON document will most commonly be a top-level object,
   which may contain any number of properties, each with any number of values.
1. Sibling elements in NIEM-XML messages have a de facto order, the order in
   which they appear within their parent element. The order that NIEM-JSON
   properties appear in an object is not significant.
1. A NIEM-XML message may use `xsi:type` to indicate the expected XML Schema
   type of an element. In NIEM-JSON, `@type` can be used to indicate the class
   of an object when it is not fully described by the property. 
   
