---
title: Comparing NIEM-JSON and NIEM-XML
---

Here is some NIEM-JSON data:

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

And here is the equivalent NIEM-XML data:

```
<nc:PersonName>
  <nc:PersonGivenName>Peter</nc:PersonGivenName>
  <nc:PersonGivenName>Death</nc:PersonGivenName>
  <nc:PersonGivenName>Bredon</nc:PersonGivenName>
  <nc:PersonSurName>Wimsey</nc:PersonSurName>
</nc:PersonName>
<nc:Date>1893-05-04</nc:Date>
<nc:LatitudeDegreeValue>51.835</nc:LatitudeDegreeValue>
<nc:LongitudeDegreeValue>-0.417</nc:LongitudeDegreeValue>
```

The differences and similarities are apparent. The mappings between
the JSON key strings and the XML element names will become apparent
shortly.

NIEM-XML data always includes namespace declarations, like this:

```
xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/"
```

The rules for NIEM-XML use namespace declarations plus element QName
(for instance, `nc:PersonName`) to define a URI for every data
component (element and attribute) in the document; for example:

```
http://release.niem.gov/niem/niem-core/4.0/#PersonName
```

When NIEM-JSON developers choose to reuse data components from the
NIEM model, as is done in this example, they will often reuse the
component's canonical QName. When that is done the above NIEM-JSON
example looks like this:

```
{
  "nc:PersonName": {
    "nc:PersonSurName": "Wimsey",
    "nc:PersonGivenName": [ "Peter","Death","Bredon" ],
  },
  "nc:Date": "1893-05-04",
  "nc:LatitudeDegreeValue": 51.835,
  "nc:LongitudeDegreeValue": -0.417,
}
```

NIEM-JSON uses the [context mechanism from
JSON-LD](https://www.w3.org/TR/json-ld/#the-context) to define a URI
for each term in the data.  For this example, the context is:

```
"@context": {
  "nc": "http://release.niem.gov/niem/niem-core/4.0/#"
}
```

This resembles but is different from namespaces in XML. JSON key strings of
the form _prefix:suffix_ are known as [compact
IRIs](https://www.w3.org/TR/json-ld/#compact-iris). When the prefix
matches a term defined in the context, the key string is interpreted by
concatenating the IRI mapped to the prefix to the (possibly empty)
suffix.  For example, with the above context, the compact IRI
`nc:PersonName` expands to:

```
http://release.niem.gov/niem/niem-core/4.0/#PersonName
```

Which, of course, is the same URI defined for the `PersonName` element in
the NIEM-XML data.

NIEM-JSON developers are not obligated to use the canonical name for a
NIEM data element. They may instead use local names such as `lname`
instead of the canonical `nc:PersonSurName` This is accomplished with
a mapping in the context, like this:

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

Given that context, the NIEM-JSON data at the top of the page, the
NIEM-XML data in the middle, and the NIEM-JSON data towards the bottom
are equivalents; they all represent the same information.

Finally, it is worth mentioning that, unlike namespace declarations in
NIEM-XML, the context object does not have to appear within the
NIEM-JSON data. The context may be inline, or referenced
explicitly or implicitly.


