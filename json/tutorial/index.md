---
title: A NIEM-JSON tutorial
short: Tutorial
description: This tutorial walks the reader through a small example of implementing an information exchange using NIEM-JSON. It begins with a small set of data requirements, constructs a NIEM information exchange model, expresses data for that model as JSON, then constructs a JSON schema for that data.
---

<style type="text/css">
ul { margin-left: 1em; }
</style>

<style type="text/css">
body{counter-reset: index2}
h2{counter-reset: index3}
h3{counter-reset: index4}
h4{counter-reset: index5}
h2:before {
  counter-increment: index2;
  content: counter(index2) ". ";
}
h3:before {
  counter-increment: index3;
  content: counter(index2) "." counter(index3) ". ";
}
h4:before {
  counter-increment: index4;
  content: counter(index2) "." counter(index3) "." counter(index4) ". ";
}
h5:before {
  counter-increment: index5;
  content: counter(index2) "." counter(index3) "." counter(index4) "." counter(index5) ". ";
}
</style>

{:toc}
- TOC

This page walks through a simple example of implementing an exchange using NIEM-JSON.

## Define data requirements

First, we start with a set of very simple data requirements. In this case, we'll
use a brief set of data requirements, organized hierarchically. Each sub-bullet
is a property of whatever contains it. The top concept is a motor vehicle crash.

* motor vehicle crash [1]
  * involved vehicle: vehicle [1-n]
    * vehicle identifier number (VIN) : identifier [1]
    * driver : person [1]
      * name : string [1]

## Define a NIEM exchange model

Next, we search for these data requirements in the
[NIEM Subset Schema Generation Tool (SSGT)](https://tools.niem.gov/niemtools/ssgt/SSGT-Search.iepd),
yielding a NIEM object model.

{:.note}
> The SSGT is a tool that enables users to search through the NIEM data model
> and build a NIEM subset. There are other ways to search the model, including
> [NIEM Movement](https://beta.movement.niem.gov/#/). If you are new to NIEM, it
> is recommended that you take some time to understand how the data model
> works. See NIEM's [model reference documentation]({{ "/reference/concepts/" | relative_url }}) to learn
> more. Additional training is forthcoming.

We have searched for these data requirements in the SSGT and found corresponding
NIEM elements.

{: .note}
> You may [download and save the resulting list of components](wantlist.xml) as a NIEM wantlist, which you may [load into the SSGT](https://tools.niem.gov/niemtools/ssgt/SSGT-Options.iepd).

The NIEM representation of these data requirements contains more components than
the list of source requirements above, due to the way NIEM structures its data:
A crash vehicle is represented as a *role* of a vehicle, a crash driver is
represented as a *role* of a person, and a person's name and a vehicle
identifier are each represented by a structure that can carry more than just a
simple value.

![model](model.png "Resulting NIEM object model")

The above object model shows type information and cardinality, which won't
appear in a resulting message.

## Define a JSON-LD context

Our next step is to construct a JSON data example that uses the above object
model. First, we construct a JSON-LD context object that identifies all of the
namespace prefixes that are needed for the instance. Each NIEM namespace is
converted into a URI according to the
[NIEM NDR](https://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/niem-ndr-4.0.html#section_5.6.1),
which requires that NIEM namespace URIs have the `#` character (i.e., number
sign) appended, if one is not already present. Here is the resulting context:

```json
{
  "j": "http://release.niem.gov/niem/domains/jxdm/6.0/#",
  "nc": "http://release.niem.gov/niem/niem-core/4.0/#"
}
```

## Construct a sample JSON file

Next, we construct a corresponding JSON file. To do this, we walk through the
above object model, adding the NIEM property names as JSON properties.

Every property that does not have a simple value (such as a string or a number)
is represented as an object. For example, the `j:Crash` element is represented
as an object:

```json
"j:Crash" : {
  ... value for the crash property ...
}
```

If a property has *only* a single simple value, then it may be represented as a
literal value, rather than an object. For example, the `nc:PersonFullName`
element here needs only a simple value:

```json
"nc:PersonFullName": "Gerry H. Everett"
```

If a property occurs more than once, then it must appear as a property with a
value that is an array; each value of the array is a separate value of the
property. For example, if an organization has 3 employees, it may appear as an
"nc:Employee" property with a value of an array containing 3 objects, each
representing a person (e.g., an object representing an instance of NIEM type
`nc:PersonType`).

```json
"nc:Employee": [
  { "nc:PersonFullName": "Gerry H. Everett" },
  { "nc:PersonFullName": "Floyd Q. Halverson" },
  { "nc:PersonFullName": "Malcolm P. Smith" }
]
```

### Use JSON-LD features as needed

NIEM JSON leverages JSON-LD to provide features not present in plain
JSON. For example:

* JSON-LD contexts are used to provide namespace features. Contexts have many
features this walkthrough doesn't exercise. See the page on
[JSON-LD contexts](../reference/json-ld/context/)* for more information.

* You may use the property `rdf:value` to represent an object that has a
both attributes and a simple value.

* You may use the JSON-LD property `@id` to perform the function of NIEM XML's
`structures:id`, `structures:ref`, and `structures:uri`.

* JSON-LD allows arrays to be used in instances very freely; it does not
  distinguish between an array with 1 entry and a single value. This is a
  property with a value that is a single string:

  ```json
  "nc:PersonFullName": "Gerry H. Everett"
  ```

  This is a property whose value is *an array* containing one string:

  ```json
  "nc:PersonFullName": [ "Gerry H. Everett" ]
  ```

  Under JSON-LD, these two examples have the same meaning. A developer needs to
  decide what syntax they want in instances, including how and when arrays will
  appear. These decisions may be enforced using a JSON schema.

* Every property in NIEM has a type. In some instances, the actual value of a
property is not fully specified by the type defined for the property in the NIEM
data model. In the example above, the property `nc:RoleOfItem` has type
`nc:ItemType`, but the instance requires the value to have type
`nc:VehicleType`, which is derived from `nc:ItemType`. In this case, and similar
cases, you may use the JSON-LD property `@type` to identify the type of the
property's value, as shown below.

### A complete sample instance

As described above, we walk through the NIEM exchange model, adding each NIEM
property as a JSON property. This results in the following JSON document:

```json
{% include_relative instance.json %}
```

This example is available in the [JSON-LD Playground](http://tinyurl.com/y96znvok).

## Construct a JSON schema for your instances

NIEM does not require the use of JSON schema for your JSON messages. NIEM merely
requires that JSON documents have the correct format. However, you can create a
JSON schema for your messages if you need to. Here, we'll step through the
creation of a JSON schema for JSON data like the sample above. Note that there's
nothing *normative* about this schema; this walkthrough is merely laying out one
way to build a JSON schema from a NIEM exchange model. There are many schemas
you could create for the same model.

### Framework for an instance

First, we lay out the basic structure of the JSON schema. This does not have any
content; there's nothing from the NIEM exchange model we defined above.  It's a
framework into which we'll put the definitions we need to express the NIEM
exchange model.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
  },
  "additionalProperties": false,
  "required": [
  ]
  "definitions": {
  },
}
```

The JSON Schema properties we are using here are:

* `$schema`: Indicates the JSON Schema version being used by this schema.
* `type`: Directs that this piece of a schema will only match a JSON object.
* `properties`: Describes all the properties that are allowed by this piece of the schema
* `additionalProperties`: Indicates that this piece of the schema *only* allows properties that are listed under `properties`.
* `required`: Lists all properties that *must* occur in an object matching this piece of schema.
* `definitions`: A holding place for pieces of schemas which can be reused.

### Top-level properties

We know that we require `@context` and `j:Crash` at the top, so we add them to `required`:

```json
"required": [
  "@context",
  "j:Crash"
],
```

We also need these to be available as properties of the top level object, so
we'll add them to `properties`. Rather than define their *structure* within
`properties`, we'll point them to a definition within the `definitions` section
of the schema. The properties `@context` and `j:Crash` are both simple; each
references its definition in the `definitions` section of the schema.

```json
"properties": {
  "@context": { "$ref": "#/definitions/@context" },
  "j:Crash": { "$ref": "#/definitions/j:CrashType" },
},
```

### Definitions

Next, we write definitions for the content of the top-level properties. These
definitions will be small schemas within a `definitions` section of the JSON
schema document. First, we add the definition for `@context`, which will accept
any object:

```json
"@context": {
    "type": "object"
  },
```

The rest of the work will be adding NIEM types for `j:Crash` and recursively for
all of its children; this will define the rest of the exchange model.  Each
definition (besides `@context`) is named after its NIEM type. We start with
`j:CrashType`. This type adds a bit of complexity, since its property
`j:CrashVehicle` can occur 1-n times (at least once, with no fixed maximum on
the number of times it may occur). This means that `j:CrashVehicle` must be
defined as an array:

```json
"j:CrashType": {
  "type": "object",
  "properties": {
    "j:CrashVehicle": {
      "type": "array",
      "items": { "$ref": "#/definitions/j:CrashVehicleType" },
      "minItems": 1
    }
  },
  "additionalProperties": false,
  "required": [ "j:CrashVehicle" ]
},
```

`j:CrashVehicle` is an array with items matching the definition for type
`j:CrashVehicleType`. The properties defining `j:CrashVehicle` are:

* `type`: Defines this property as an array.
* `items`: Indicates that each item of the array must match the definition for
  `j:CrashVehicleType`.
* `minItems`: Directs that there must be at least one object within the array,
  matching the cardinality in the exchange model of 1-n.

This defines a piece of a schema that matches an object with a single property,
`j:CrashVehicle`. As above, the definition used for the child element is named
for the type of the element, in this case, `j:CrashVehicleType`:

```json
"j:CrashVehicleType": {
  "type": "object",
  "properties": {
    "nc:RoleOfItem": { "$ref": "#/definitions/nc:VehicleType" },
    "j:CrashDriver": { "$ref": "#/definitions/j:CrashDriverType" }
  },
  "additionalProperties": false,
  "required": [ "nc:RoleOfItem", "j:CrashDriver" ]
},
```

We continue like this through the object model, adding only what we need to
make the schema validate the sample instance. When we get to the definition for
`nc:PersonFullName`, it has its definition from type `nc:PersonNameTextType`,
which has a string value. This appears in the JSON schema as:

```json
"nc:PersonNameTextType": {
  "type": "string"
},
```

### Resulting schema

Repeating the above for the entire exchange model yields the following JSON
schema. This validates the above sample instance.

```json
{% include_relative schema.json %}
```
