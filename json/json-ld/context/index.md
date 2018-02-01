---
title: JSON-LD contexts
---

JSON-LD provides **JSON-LD contexts** which enable JSON documents to use simple,
locally-meaningful names, while still enabling the messages to be meaningful
beyond the initial exchange partners. A JSON-LD message can be meaningful to
anyone anywhere, even when mixed with other data.

The JSON-LD context has
[many more capabilities](https://json-ld.org/spec/latest/json-ld/#the-context)
than this section will highlight. Here, we focus only on the use of contexts to
define aliases, to enable the use of namespaces and short local terms.

Although you may not want to use colon-separated qualified names in your JSON
data, it's easier to explain starting with that style. This example uses NIEM
names with the standard prefixes for the NIEM namespaces:

```json
{% include_relative qname-terms.json %}
```

This may be interpreted against the following JSON-LD context:

```json
{% include_relative qname-context.json %}
```

This example and expanded and compacted version can be seen at [the JSON-LD Playground](http://tinyurl.com/ycws5yz7).

The page on [JSON-LD processing](../processing) discusses [expansion](https://json-ld.org/spec/latest/json-ld-api/#expansion) and [compaction](https://json-ld.org/spec/latest/json-ld-api/#compaction),
two of the standard JSON-LD processing algorithms that can transform JSON-LD
data in useful ways.

## Compaction

When compacted with an empty context, the structure of the data, and the complete URIs for keys are plainly visible:

```json
{% include_relative compact-with-empty-context.json %}
```

This example can be seen at
[the JSON-LD Playground](http://tinyurl.com/y7w3tqpd).

Again, expanded and otherwise processed data shows the fundamental meaning of
data in a universally-understandable way. It's likely that exchanges will
instead utilize shorter, locally-preferred terminology.

The above data can be
compacted against another JSON-LD context:

```json
{% include_relative local-context.json %}
```

This yields the JSON-LD data that uses only short, local terms:

```json
{% include_relative local-terms.json %}
```

This example can be seen at [the JSON-LD Playground](http://tinyurl.com/yb7m7chr).


When interpreted against the right JSON-LD contexts, both JSON documents
evaluate to [the same expanded data](http://tinurl.com/y7w3tqpd).

Developers of exchanges may use contexts to greatly simplify their JSON files,
while maintaining the meaning of the data across all users and communities.

## Using JSON-LD contexts to define keys

JSON-LD contexts can define universal identifiers for keys several different
ways. This section highlights a few. The context can do much more than define
key URIs; techniques are detailed in the JSON-LD specification's sections on
[contexts](https://json-ld.org/spec/latest/json-ld/#the-context) and
[advanced concepts](https://json-ld.org/spec/latest/json-ld/#advanced-concepts).

### Compact IRIs: mapping qualified names to IRIs/URIs

Contexts use [Internationalized Resource Identifiers (IRIs)](https://tools.ietf.org/html/rfc3987) to uniquely identify resources.

The use of contexts to define prefixes is described by
[the JSON-LD specification's section on compact IRIs](https://json-ld.org/spec/latest/json-ld/#compact-iris),
which is JSON-LD's name for colon-separated qualified names.

The proper value to use for a prefix defined in a context can be identified by
[the NIEM Naming and Design Rules, section 5.6.1, *Resource IRIs for XML Schema components and information items*](https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html#section_5.6.1),
which describes the mapping from an XML qualified name to a URI. In short, any
namespace that does not end in an octothorp/hash/pound sign (<q>`#`</q>) has a
<q>`#`</q> character appended to it. So, since the namespace URI for the NIEM
Core namespace (nc) is `http://release.niem.gov/niem/niem-core/4.0/`, it would
be defined in the following part of a context:

```json
{
  "nc": "http://release.niem.gov/niem/niem-core/4.0/#"
}
```

With this context, a value `nc:PersonAgeMeasure` becomes, after processing, the
IRI `http://release.niem.gov/niem/niem-core/4.0/#PersonAgeMeasure`.

### Mapping local names to IRIs

Within a context, a local name, like `age` can be aliased to an IRI. Either of
the two following contexts would suffice:

```json
{
  "nc": "http://release.niem.gov/niem/niem-core/4.0/#",
  "age": "nc:PersonAgeMeasure"
}
```

```json
{
  "age": "http://release.niem.gov/niem/niem-core/4.0/#PersonAgeMeasure"
}
```

## Use of `@vocab` to handle uniform namespaces

If much of your data is from a single namespace, the `@vocab` directive within a
context will map otherwise-undefined local names to a single namespace, as if
each was given an assigned prefix.

The context, ...

```json
{% include_relative vocab-context.json %}
```

... used to process the following instance, results in the same data as the
above example.

```json
{% include_relative vocab-terms.json %}
```

This example is available at [the JSON-LD Playground](http://tinyurl.com/y9zdc3e2).

## Linking a JSON file to a JSON-LD context

The [JSON-LD specification](https://json-ld.org/spec/latest/json-ld/) describes
how to attach a JSON-LD context to a JSON file, so that the file may be properly
processed as JSON-LD. Examples provided on this website *mostly* maintain
separate contexts from the JSON files. 

### Use `@context`

Any JSON object may carry a key <q>`@context`</q>, which indicates a context
that is active at the scope of that object, and within to nested objects.

#### Provide a context inline

A key <q>`@context`</q> may have, as a value, a JSON object, which acts as a
context.

```json
{% include_relative context-inline.json %}
```

#### Link to a context

A key <q>`@context`</q> may have, as a value, a URI, which is a name for a
JSON-LD context object.

```json
{% include_relative context-uri.json %}
```

### Provide a context in an HTTP Link header

A method for attaching a JSON context to a plain JSON object via an HTTP Link
header is described by
[the JSON-LD specification, section 4.9, *Interpreting JSON as JSON-LD*](https://json-ld.org/spec/latest/json-ld/#interpreting-json-as-json-ld). In
short, a plain JSON file that is passed via HTTP can be accompanied by a
separate JSON-LD context document. The URI of the JSON-LD context document is
passed via an HTTP Link header, using the link relation
`http://www.w3.org/ns/json-ld#context`.

### Cache contexts

[The JSON-LD specification](https://json-ld.org/spec/latest/json-ld/#iana-considerations)
recommends that JSON-LD contexts be cached by systems that use them, reducing
security risks and load times:

> JSON-LD contexts that are loaded from the Web over non-secure connections,
> such as HTTP, run the risk of being altered by an attacker such that they may
> modify the JSON-LD active context in a way that could compromise security. It
> is advised that any application that depends on a remote context for mission
> critical purposes vet and cache the remote context before allowing the system
> to use it.

A best practice for using JSON-LD contexts with NIEM is to treat contexts as
part of an information exchange specification, and inspect them, vet them, and
cache them for use, rather than relying on any kind of run-time network
resolution of contexts.

