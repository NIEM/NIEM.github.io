---
title: Reuse of names and definitions
---

NIEM defines a methodology for broad communities to agree on:

* The structure of data
* Names for data
* Value constraints on data

Every name, structure, and set of data constraints has a single authoritative
reprsentation, defined by a set of XML Schema documents. See
http://niem.github.io/niem-releases/ for new and old NIEM releases. These
schemas define base definitions, which can be refined, specialized, and
extended, to define specific exchanges.

NIEM has distributed governance, meaning that different sets of data definitions
are defined by different groups. This enables groups to focus on their areas of
interest, with deliberate version control, and minimal conflict across different
groups.

NIEM defines the following kinds of data components:

* **Simple types** are the formats of unstructured values, like strings,
  numbers, and enumerations.

* **Complex types** are the structure of objects. Each complex type defines a class
  of object (such as a person or vehicle), along with a list set of
  characteristics it has, or relationships that it participates in.

* **Elements** describe uses of an object, or relationships that objects
  participate in, or characteristics of objects. 

* **Attributes** describe characteristics of objects, with values that are
  always simple types.

Each type of component has its own purpose, and each supports a different aspect
of data, including JSON data and XML data. However, every NIEM data component
has a few common characteristics:

* A **local name**, which is a meaningful term that concisely identifies what a
  thing is, what it is for, and what it might hold. NIEM has [a syntax
  for local names](syntax).
  
* A **definition**, which is a descriptive statement that provides a detailed
  meaning for a thing. The criteria of what makes a good definition are
  identified in
  [the NIEM Naming and Design Rules, section 7.4](https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html#section_7.4).
  
* A **namespace**, which is a URL that acts as a universal identifier under
  which a set of data components are grouped. Each governance body, and each
  NIEM version, has unique namespaces that are assigned to it. 
  
The name of a data component is the *namespace* and *local name*
together. Together, these are referred to as a the **qualified name** of a
component.

The reuse of these qualified names in exchange definitions, extensions, and
messages allows the parts of the messages to be understood, and for similar
components to be distinguished.

JSON, by itself, does not provide a mechanism for defining or using anything
like XML namespaces. This is handled JSON-LD, which defines a way to use URIs
for JSON keys, which works very similar to the way namespaces work.
