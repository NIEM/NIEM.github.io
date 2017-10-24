---
title: Using NIEM with JSON
---

JSON is described at [json.org](http://json.org) and defined by [RFC
4627](http://www.ietf.org/rfc/rfc4627.txt):

> JavaScript Object Notation (JSON) is a lightweight, text-based,
language-independent data interchange format.  JSON defines a small set of
formatting rules for the portable representation of structured data.

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
analysts and software developers who work with it need to understand
what it means. This involves answers to questions like

* What is the meaning of the `date` [data element](./data-element)? Birthday or
  something else?
  
* What is the format of the `date` value?  Is it always an ISO 8601
  date field, or might we sometimes see `Tuesday`, or `Fred`? Is it
  the same format as `cdate`, or something different?
  
* Does `lname` have the same meaning in both examples?

* Will `gname` always be found within a `name` object, or is it
  optional?

Such questions are easily answered when the JSON data is only
exchanged between instances of the same program, or only processed by
software written by a single small team of developers. In these cases
there is little difficulty in understanding the JSON data, and little
need for NIEM.

However, understanding the data becomes much more difficult when the
developer team is large, or when there are many independent teams, or
when the members of a team change over time -- in short, when
_developer cohesion_ is low. Also, data understanding takes more work
when developers work on multiple data exchanges (all at once, or over
time) that have many different data elements for the same shared
concept (`fname`, `gname`, `givenname`) -- in short, when _data
exchange overlap_ is high. These conditions -- low cohesion, high
overlap -- are typically found in any [enterprise](tbd) with many
participants or extensive data sharing needs.

NIEM is especially useful in those circumstances.  The NIEM approach
offers

* A [global identifier](tbd) for each [JSON data element](./data-element), based
  on [JSON-LD](tbd)

* A standards-based convention for canonical [data element names](tbd)
  (while still permitting local names like `lat` within exchanged
  data)

* A framework for [machine-readable documentation](tbd) of each data
  element.

These three combine to make [NIEM-JSON data](tbd) _self-documenting_,
in that any analyst or developer can identifiy each element and know
how it is defined. In addition, the NIEM approach also offers

* A simple way for developers to [reuse](tbd) data elements defined
  by others

* A [NIEM data model](tbd), partitioned into a [NIEM core](tbd) of
  concepts that might be reused in any exchange, plus several
  submodels extending the core, each defined by a subject-area or
  functional [NIEM domain](tbd) community

* A [governance approach](tbd) in which the NIEM core is controlled by
  the entire NIEM community, while each submodel is independently
  controlled by its domain, and which allows any community to create
  and control its own extension of the NIEM model

* A [version-control architecture](tbd) that encourages reuse by
  insulating each community from external changes; this allows each
  community to change at its own pace, deciding if and when it will
  adopt changes made by others

* A framework for [data exchange specifications](tbd) that contain all
  the artifacts required to document the required and optional
  elements that may appear in an [instance](tbd) of an exchange,
  together with the meaning of those elements

These features of NIEM combine to form a standards-based approach for
constructing any number of data exchange specifications, which
document the data exchanged at runtime and allow a compatible
understanding of that data among the analysts and developers who work
with it. These analysts and developers may interact with NIEM at
different levels:

* At the simplest level, analysts and developers use a NIEM-based
  exchange specification created by others as the documentation for a
  data resource they need to consume.

* Analysts and developers may create their own NIEM-based exchange
  specification to document a data resource they produce.

* Several analyst/developer teams may form a community to create an
  exchange specification as the standard for data they all produce and
  consume.

* Analysts and developers can participate in a NIEM domain's
  activities, proposing new and modified data elements in the domain
  submodel for use in multiple exchange specifications.

* Finally, analysts and developers might participate in the NIEM
  Technical Architecture Committee (NTAC), which governs the NIEM core
  model; work here often involves harmonizing data definitions among
  the domain models to create elements that can be used in any domain.

Although NIEM was first created to work with XML-based data exchange,
it can now be applied to JSON data -- without requiring knowledge of
the XML technology originally used. Data exchange designers can use
NIEM to create an exchange that is all-JSON, or one that is all-XML,
or one that defines both a JSON and an XML serialization, depending on
the needs of the exchange and the exchangers.

Next: [Global identifiers for NIEM data elements](tbd)
