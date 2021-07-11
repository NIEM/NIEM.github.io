---
title: JSON Data Elements
---

Technically, JSON doesn't have "data elements"; JSON
has objects, arrays, strings, numbers, plus `true`, `false`, and
`null`.  However, it is common to interpret the _pairs_ in a JSON
object as an object property plus value.  For example, this JSON object

```
{
  "haircolor": "red",
  "name": {
    "fname": "Peter",
    "lname": "Wimsey"
  }
}
```

has two pairs: the string "haircolor", with the value "red", and the
string "name" with a value that is another object.  In
NIEM-JSON, we treat "haircolor" and "name" as the name of two
data elements, which are two properties of the outer object.  We use
JSON-LD contexts to interpret these key strings as URIs for the data
elements. We have a standards-based naming convention for canonical
data element names, and a documentation requirement for each element
definition.  When you put all that together, it seems reasonable to talk
about "JSON data elements".

