---
title: What Is NIEM JSON data?
---

A summary answer, one that is unpacked below, is:

1. It is [JSON data](./simple). It follows the rules of the JSON
   specification.
2. It is NIEM data. It has a [content model](#content), which provides its
   meaning. That content model is based on the [NIEM conceptual model](#concept).
3. It is [JSON-LD data](../../reference/json-ld). It has a JSON-LD context,
   which connects key strings in the data to the data elements
   that provide their meaning.

NIEM JSON data might look like *Example 1* below, with simple *ad hoc*
key strings:

```
{
  "person": {
    "name": {
      "lname": "Wimsey",
      "gname": [ "Peter","Death","Bredon" ]
    },
    "height": {
      "val": 163,
      "units": "CMT"
    },
    "hair": "BLD"
  }
}
```

The same information might also look like *Example 2* instead, with key
strings that are names of NIEM data elements: (More on that [information
equivalence](#equiv) later.)

```
{
  "nc:Person": {
    "nc:PersonName": {
      "nc:PersonSurName": "Wimsey",
      "nc:PersonGivenName": [ "Peter","Death","Bredon" ]
    },
    "nc:PersonHeightMeasure": {
      "nc:MeasureIntegerValue": 163,
      "nc:LengthUnitCode": "CMT"
    },
    "j:PersonHairColorCode": "BLD"
  }
}
```

Informally, both of those JSON objects have the following meaning:

* There is a person
  - Who has a hair color that is *blond*
  - Who has a height that is *163 centimeters*
  - Who has a name
    - That has a surname of *Wimsey*
    - That has three given names: *Peter*, *Death*, and *Bredon*.

That meaning is supplied in three steps:

1. The NIEM conceptual model relates the components of NIEM JSON data
   to statements that make claims about the world.

2. The NIEM conceptual model also maps each key string in NIEM JSON
   data to a global identifier for a data element that defines its
   meaning and value domain.

3. The content model for each NIEM JSON data resource provides those
   data elements, and specifies which are mandatory and optional.

### The NIEM Conceptual Model {#concept}

According to the NIEM conceptual model, each object in the JSON data
is

> a collection of statements that make claims about some object in the
> world: that a person has a name, a residence location, a spouse,
> etc. The assertion of one set of facts does not necessarily rule out
> other statements: A person could have multiple names, could have
> moved, or could be divorced. Each statement is a claim asserted to
> be true by the originator of the statement.<br>
> -- [*NIEM Naming and Design Rules (section 5)*](https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html#section_5)

For each pair in the JSON object, the key string represents an object
property, and the corresponding value is the value of that
property. The order of the pairs is not significant. The values can
be:

* A string. In the top example, the value of the `lname` property
  is the string "Wimsey".

* A number. In the top example, the value of the `val` property is
  the number 163.

* An object, like the value of the `name` property. This object has
  two properties of its own, `lname` and `fname`.

* An array, like the value of the `gname` property. Arrays are used
  when a property has more than one value, because keys may not be
  repeated in a NIEM JSON object. The `gname` property has three
  values: the strings "Peter", "Death", and "Bredon". The order of the
  array elements is not significant.

* The special tokens `true` and `false`.

* The special token `null` is not used in NIEM JSON data.

So far, so good. However, most of the meaning is bound up in the
meaning of the key strings. The conceptual model does not supply that
meaning. What the conceptual model does supply is a mapping between a
name in the instance data and the URI for the data element with the
meaning. For NIEM XML, element and attribute names are mapped to URIs
through a [rule based on XML namespace
declarations](https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html#section_5.6.1). For
NIEM JSON, the key strings are mapped to URIs through the context
mechanism of JSON-LD.

All NIEM JSON data is JSON-LD data, and follows the rules of the
JSON-LD specification. In JSON-LD, a *context* is a JSON object with
the reserved term `@context`as the only key string. It is used to map
terms in key strings (and in certain data values) to IRIs. NIEM JSON
always has a context that maps key strings to data element URIs.  The
context for *Example 2* is:

```
{
  "@context": {
    "nc": "http://release.niem.gov/niem/niem-core/4.0/#",
    "j":  "http://release.niem.gov/niem/domains/jxdm/6.0/#"
  }
}
```

Interpreted against that context, the key string `nc:PersonSurName`
expands to the absolute URI:

```
http://release.niem.gov/niem/niem-core/4.0/#PersonSurName
```

Which is the global identifier for the data element defined as "A last
name or family name of a person".

### NIEM Content Models {#content}

NIEM data always has a [content model](../../reference/models), which includes all
of the data elements that may appear in the data resource. These
elements will be a subset of the NIEM core and domain models, possibly
augmented by data elements defined specially for the resource. In
addition to providing the meaning of each object property, the content
model defines which elements are mandatory and optional in the
resource; NIEM JSON uses [JSON Schema](../../reference/json-schema) for this.

The data elements
for the content model of *Example 2* include:

| Data Element Name | Definition |
|--- | --- |
| nc:Person             | A human being |
| nc:PersonName         | A combination of names and/or titles by which a person is known |
| nc:PersonSurName      | A last name or family name of a person |
| nc:PersonGivenName    | A first name of a person |
| nc:PersonHeightMeasure | A measurement of the height of a person |
| j:PersonHairColorCode | A color of the hair of a person |

Every NIEM data element belongs to a
[namespace](../../reference/names/namespaces).  Each namespace is uniquely
identified by an absolute URI. Each namespace has a commonly-used
*namespace prefix*, such as `nc`. The name of each data element is
composed of the namespace prefix plus a *local name*, such as
`PersonSurName`. The namespaces used in this example are:

| Namespace | Prefix | Namespace URI |
|--- | --- | --- |
| NIEM Core | nc     | http://release.niem.gov/niem/niem-core/4.0/ |
| Justice   | j      | http://release.niem.gov/niem/domains/jxdm/6.0/ |

The rule for the URIs in a NIEM JSON context is to append the
octothorp/hash/pound "`#`" character to any namespace URI that does
not already end with that character. With this rule, the data
element's local name becomes the *fragment identifier* for the
machine-readable data element documentation within the resource
identified by the namespace URI. The normative syntax for the
namespace resource is XML Schema; however, equivalent alternate
encodings in JSON Schema or RDF are possible.

### Equivalence Of *Ad Hoc* Key Strings {#equiv}

NIEM JSON data will often use the names of NIEM data elements (such as
`nc:PersonGiveName`) for key strings. However, sometimes people
prefer simple *ad hoc* key strings such as `gname` instead. These
simple keys may be used in NIEM JSON data if their mapping is included
in the JSON-LD context. For example, the context for *Example 1* is:

```
"@context": {
  "nc":    "http://release.niem.gov/niem/niem-core/4.0/#",
  "j":     "http://release.niem.gov/niem/domains/jxdm/6.0/",
  "person": "nc:Person",
  "name":   "nc:PersonName",
  "lname":  "nc:PersonSurName",
  "gname":  "nc:PersonGivenName",
  "height": "nc:PersonHeightMeasure",
  "val":    "nc:MeasureIntegerValue",
  "units":  "nc:LengthUnitCode",
  "hair":   "j:PersonHairColorCode"
}
```

Using that context, the property with the key string `lname` is
expanded to the URI:

```
http://release.niem.gov/niem/niem-core/4.0/#PersonSurName
```

Which is the URI for the data element definition. This approach allows
the use of short *ad hoc* JSON keys while preserving the meaning
provided by the NIEM conceptual model and the resource content
model. Producers and consumers do not have to guess at the meaning of
`lname`; it is precisely defined.

In addition, some development tooling do not support JSON names that
include a colon (`:`),  In these cases, a context can be used to
define equivalent local names similar to the NIEM data elements that
workaround the limitations of the tooling.

For example, the context could be:

```
"@context": {
  "nc":    "http://release.niem.gov/niem/niem-core/4.0/#",
  "j":     "http://release.niem.gov/niem/domains/jxdm/6.0/",
  "Person": "nc:Person",
  "PersonName":   "nc:PersonName",
  "PersonSurName":  "nc:PersonSurName",
  "PersonGivenName":  "nc:PersonGivenName",
  "PersonHeightMeasure": "nc:PersonHeightMeasure",
  "MeasureIntegerValue":    "nc:MeasureIntegerValue",
  "LengthUnitCode":  "nc:LengthUnitCode",
  "PersonHairColorCode":   "j:PersonHairColorCode"
}
```

This approach, however, does not handle exchanges in which the
same name is used in multiple domains (e.g. `nc:Person` and
`j:Person`).  Another approach useful in these cases is to
include domain prefixes in the local names with the colons
replaced with an underscore (`_`) or other special character
supported by the tooling (e.g. `nc_PersonName`)

### Associating NIEM JSON Data To Its JSON-LD Context

NIEM JSON data always has an associated JSON-LD context.  Sometimes
the context object is embedded within the NIEM JSON data.  For
*Example 2*, the result would look like:

```
{
  "@context": {
    "nc":    "http://release.niem.gov/niem/niem-core/4.0/#",
    "j":     "http://release.niem.gov/niem/domains/jxdm/6.0/",
  }
  "nc:Person": {
    "nc:PersonName": {
      "nc:PersonSurName": "Wimsey",
      "nc:PersonGivenName": [ "Peter","Death","Bredon" ]
    },
    "nc:PersonHeightMeasure": {
      "nc:MeasureIntegerValue": 163,
      "nc:LengthUnitCode": "CMT"
    },
    "j:PersonHairColorCode": "BLD"
  }
}
```

Sometimes, NIEM JSON data simply includes the URI of its context
resource. (This is especially useful when the context object is
large.) With this approach, the data in *Example 2* might be:

```
{
  "@context": "http://example.com/myIEPD",
  "nc:Person": {
    "nc:PersonName": {
      "nc:PersonSurName": "Wimsey",
      "nc:PersonGivenName": [ "Peter","Death","Bredon" ]
    },
    "nc:PersonHeightMeasure": {
      "nc:MeasureIntegerValue": 163,
      "nc:LengthUnitCode": "CMT"
    },
    "j:PersonHairColorCode": "BLD"
  }
}
```

Where `http://example.com/myIEPD` is the URI for the context resource:

```
{
  "@context": {
    "nc": "http://release.niem.gov/niem/niem-core/4.0/#",
    "j":  "http://release.niem.gov/niem/domains/jxdm/6.0/#"
  }
}
```

[The JSON-LD specification](https://json-ld.org/spec/latest/json-ld/#iana-considerations)
recommends that JSON-LD contexts be cached by systems that use them, reducing
security risks and load times:

> JSON-LD contexts that are loaded from the Web over non-secure connections,
> such as HTTP, run the risk of being altered by an attacker such that they may
> modify the JSON-LD active context in a way that could compromise security. It
> is advised that any application that depends on a remote context for mission
> critical purposes vet and cache the remote context before allowing the system
> to use it.

This is also best practice for NIEM JSON. The context for NIEM JSON
data should be treated as part of an information exchange
specification, inspected at build time and retained for use, instead
of relying on any kind of run-time network resolution of contexts.

### Self-Describing Data

NIEM JSON is self-describing because:

* It is always associated with a JSON-LD context.
* That context maps each key string to a URI for a data element.
* The resource for that URI is machine-readable documentation of the
  data element's meaning.

This means that developers and data scientists can always tell whether
a key in one resource has the same meaning as a key in another
resource. It also means they can learn that meaning by obtaining the
data element resource. These are valuable properties in any large
enterprise with many different data resources.
