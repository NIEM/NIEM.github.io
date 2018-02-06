---
title: What Is NIEM JSON data?
---

```
{
  "name": {
    "lname": "Wimsey",
    "gname": [ "Peter","Death","Bredon" ],
  },
  "date": "1893-05-04",
  "lat": 51.835,
  "lon": -0.417
}
```

NIEM interprets each JSON object as a collection of assertions about a
real-world entity. Each _key:value_ pair in the object represents a
property of the object and the value of that object property. The
order of the pairs is not significant. The values can be:

* A string. In the above example, the value of the `lname` property
  is the string "Wimsey".
  
* A number. In the above example, the value of the `lat` property is
  the number 51.835.
  
* An object, like the value of the `name` property. This object has
  two properties of its own, `lname` and `fname`.

* An array, like the value of the `gname` property. Arrays are used
  when a property has more than one value, because keys may not be
  repeated in a NIEM-JSON object. The `gname` property has three
  values: the strings "Peter", "Death", and "Bredon". The order of the
  array elements is not significant.
  
* The special tokens `true` and `false`.

* The special token `null` is not used in NIEM-JSON data.

NIEM-JSON data always has a JSON-LD context that provides mappings
from the object key strings to the URI for that data element. The
context for this example is:

```
"@context": {
  "nc":    "http://release.niem.gov/niem/niem-core/4.0/#",
  "name":  "nc:PersonName",
  "lname": "nc:PersonSurName",
  "gname": "nc:PersonGivenName",
  "date":  "nc:Date",
  "lat":   "nc:LatitudeDegreeValue",
  "lon":   "nc:LongitudeDegreeValue"
}
```

Using that context, the property with the key string `lname` is
expanded to the URI:


```
http://release.niem.gov/niem/niem-core/4.0/#PersonGivenName
```

That URI idenfities a resource providing documentation for the
property, which in JSON syntax might be rendered as:

```
{
  "@context": {
    "nc": "http://release.niem.gov/niem/niem-core/4.0/#",
    "xs": "http://www.w3.org/2001/XMLSchema"
  },
  "nc:PersonGivenName": {
    "xs:documentation": "A first name of a person."
  }
}
```
