---
title: Why Use NIEM with JSON?
---

JSON data often appears as a simple, flat list of (key, value) pairs, as
in the example on the left.  JSON data can also be complex, with
nested objects and arrays of objects or values, as in the example on
the right.

```
{                                {
  "lname": "Wimsey",               "name": {
  "fname": "Peter",                  "lname": "Wimsey",
  "date": "1893-05-04",              "gname": [ "Peter","Death","Bredon" ],
  "lat": 51.835,                   },
  "lon": -0.417,                   "date": "1893-05-04,
  "cdate": "1921-01-05",           "lat": 51.835,
  "charge": "Wild Driving"         "lon": -0.417,
}                                  "cdate": "1921-01-05",
                                   "charge": "Wild Driving"
                                 }
```

Regardless of whether the JSON data is simple or complex, the data
scientists and software developers who work with it need to understand
what it means. This involves answers to questions like:

* What is the meaning of the `date` key string? Birthday or something
  else?
  
* What is the format of the `date` value?  Is it always an ISO 8601
  date field, or might we sometimes see `Tuesday`, or `Fred`? Is it
  the same format as `cdate`, or something different?
  
* Does `lname` have the same meaning in both resources?

* Will `gname` always be found within a `name` object, or is it
  optional?

Such questions are easily answered when the JSON data is only
exchanged between instances of the same program, or only processed by
software written by a single small team of developers, or is one of a
few sources accessed by the data scientists. In these cases there
is little difficulty in understanding the JSON data, and little need
for NIEM.

However, understanding the data resource becomes much more difficult
when the developer team is large, or when there are many independent
teams, or when the members of a team change over time -- in short,
when *developer cohesion* is low. Also, data understanding takes more
work when scientists and developers work with many data resources (all
at once, or over time) that have different data element
definitions for the same shared concept (`fname`, `gname`,
`givenname`) -- in short, when *data resource overlap* is high. These
conditions -- low cohesion, high overlap -- are almost always found in
large enterprises with many participants or extensive data sharing
needs.

NIEM is especially useful in those circumstances. The NIEM approach
applied to JSON data offers:

* A mapping between each JSON key string and a global identifier for
  the corresponding data element.

* A framework for machine-readable documentation of each data element
  that is used in a data resource.

* A standards-based convention for canonical data element names used
  as JSON key strings (while still permitting local names like `lat`
  within a data resource).

These three combine to make [NIEM JSON data](../data)
*self-documenting*, at least to the extent that any data scientist or
software developer can look at any key-value pair and find out how it
is defined. In addition, the NIEM approach also offers:

* A simple way for developers who are creating a resource to
  reuse data elements defined by others, instead of creating new
  defintions. This encourages a degree of harmonization between
  different resources.

* A [NIEM data model](../whatis#model), partitioned into a NIEM core of
  concepts that might be reused in any exchange, plus several
  submodels extending the core, each defined by a subject-area or
  functional NIEM domain community. This also encourages
  harmonization among resources partly defined in terms of that model.

* A governance approach in which the NIEM core is controlled by
  the entire NIEM community, while each submodel is independently
  controlled by its domain, and which allows any community to create
  and control its own extension of the NIEM model.

* A version-control architecture that encourages reuse by
  insulating each community from external changes; this allows each
  community to change at its own pace, deciding if and when it will
  adopt changes made by others.

* A framework for data resource specifications that contain all
  the artifacts required to document the required and optional
  elements that may appear in a conforming resource,
  together with the meaning of those elements.

These features of NIEM combine to form a standards-based approach for
constructing any number of data resource specifications, which
document the data resources found at runtime and allow a compatible
understanding of that data among the scientists and developers who
work with it.

Although NIEM was first created to work with XML-based data exchange,
it can now be applied to JSON data, without requiring knowledge of
the XML technology originally used. Data exchange designers can use
NIEM to create a resource specification that is all-JSON, or one that
is all-XML, or one that defines both a JSON and an XML serialization,
depending on the needs of the producers and consumers.

