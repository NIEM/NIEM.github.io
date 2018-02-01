---
title: JSON-LD identifiers
---

One of the way NIEM supports data reuse is through object references which eliminate the need to describe the same object multiple times. JSON-LD supports references
to objects with a reserved key `@id` which can be used either as an object identifier or a reference to an object identifier.  

For example, a person object may identified as:

{%include_relative object.json %}

A referenceto that person object might be:

&%include_relative reference.json %}
