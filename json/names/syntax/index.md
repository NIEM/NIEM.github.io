---
title: Syntax of NIEM names
---

Each data component in NIEM has a single local name, which is paired with a
namespace to form a universally unique qualified name. 

Each local name follows a common structure. The main parts of a NIEM component
name are:

* An **object class term** identifies a category of real-world things:

  * For a property (an element or attribute), the object class term
    identifies the cateogry of thing that can have this characteristic, or
    which is the subject of this relationship.

  * For a type (simple or complex), the object class term identifies the
    category of things that the type represents.
  
* A **property term** describes a characteristic, relationship, or subpart of
  something.
  
* A **representation term** describes the nature of the value of an element or
  type.  Representation terms in NIEM are listed in
  [the Naming and Design Rules](https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html#table_10-2).
  
Any of the above terms may have any number of **qualifier terms**, which modify
the term, to increase semantic precision or to reduce ambiguity. A qualifier term
usually precedes the term it modifies.

Next: [NIEM Namespaces](../namespaces)
