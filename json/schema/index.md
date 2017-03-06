---
title: Representing NIEM exchanges with JSON Schema
---

This document describes methods and patterns for JSON Schemas that define JSON
consistent with the NIEM guidance.

These guidelines are developed for NIEM reference schemas only. They don't cover all
XML Schema cases, nor the extra features in NIEM extension schemas.

# Overview

## What we want

* We want the JSON schema to correspond to the content model of the NIEM
exchange XML schemas. If something is required by the XML Schema, it should be
required.

* We don't want to allow stuff not in the schema to appear in the
  instances. Validating instances is sort of the main point of schemas, and if
  you misspell a property name and it passes validation, the schema is not very
  helpful.

## What we're not worried about

* JSON-LD handles the mapping from local JSON names to univeral identifiers for
  namespaced NIEM terms. So we don't have to handle that mapping in the JSON
  schema.
* JSON-LD defines that a property with an object value is equivalent to a
  property with an array that contains a single object value. This means that we
  don't really need to care which expression is used for a particular
  exchange. It's up to the exchange specifier, and both are legitimate.
* JSON instances are usually simple objects (which are **map** data types), for
  which order of content is NOT significant. They're not usually arrays with
  ordered content. Also, the NIEM RDF mapping doesn't perserve order of
  content. So, we're really not worried about the sequence of elements being
  preserved into the JSON. 

# Basic strategy:

* Elements are inlined within type definitions
* Put types in a "definitions" section

# Complex type extension

How to map NIEM complex type extension to JSON schema.

Consider [StackOverflow: JSON schema : “allof” with “additionalProperties”](http://stackoverflow.com/questions/22689900/json-schema-allof-with-additionalproperties)

## Complications

Certain features of JSON Schema make support of the basic NIEM object model
difficult.

__Data types are expressed as schemas__: JSON Schema does not have a distinct
concept of *data types* for values. Instead,they are expressed as separate
schemas.

__Schema composition is via `allOf`__: The
[JSON Schema `allOf` property](http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.22)
is how a schema is constructed that is an intersection of schemas.

__Need for *open* versus *closed* types__: In order to be composed using
`allOf`, every instance of every derived type MUST be compatible with the schema
of each base type. This means that the base type schemas MUST be *open*:
additional properties must be allowed on the base types. Unfortunately, open
definitions don't recognize that unexpected content is invalid. For example, if
one were to misspell an optional property, it would pass validation.

## What could work: collapsing the type hierarchy

One method that absolutely *can* implement the desired content model is to
collapse the type hierarchy into a concrete JSON schema.

This accurately conveys the desired content model, but the schemas do not
express the is-a relationship between a base type and a derived type.

* Pros:
    * Has the right content model.
    * Property definitions are simple and clear.
* Cons:
    * Types don't express is-a relationship between base tyep and derived type.
    * Type definitions can't be used as a basis for derived types.
    * Each JSON Schema type definition has to roll up 


```javascript
{
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "type" : "object",
    "additionalProperties" : false,
    "definitions" : {
        "BaseType" : {
            "type" : "object",
            "additionalProperties" : false,
            "properties" : {
                "alpha" : { "type" : "string" }
            },
            "required" : [ "alpha" ]
        },
        "DerivedType" : {
            "type" : "object",
            "additionalProperties" : false,
            "properties" : {
                "alpha" : { "type" : "string" },
                "beta" : { "type" : "string" }
            },
            "required" : [ "alpha", "beta" ]
        }
    },
    "properties" : {
        "Base" : { "$ref" : "#/definitions/BaseType" },
        "Derived" : { "$ref" : "#/definitions/DerivedType" }
    }
}
```

## Works but is too complicated: open and closed types

There must be open types, which are used as the basis for derived types. There
also must be closed types, which are the concrete types of properties, and which
have `additionalProperties` set to `false`.

* Pros:
    * Presents the right content model.
    * Open type definitions are straightforward.
    * Property defintiions are straightforward.
* Cons:
    * Duplicate types are required: there must be an open type and a closed type
      for each NIEM data type.
    * The closed type is even more complicated than the open type, even though
      it's only there to close the open type, and doesn't contribute anything
      semantically.
    * There's no clear naming strategy for the open types.

```javascript
{
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "type" : "object",
    "additionalProperties" : false,
    "definitions" : {
        "BaseType_open" : {
            "type" : "object",
            "properties" : {
                "alpha" : { "type" : "string" }
            },
            "required" : [ "alpha" ]
        },
        "BaseType" : {
            "allOf" : [
                { "$ref" : "#/definitions/BaseType_open" },
                { "type" : "object",
                  "additionalProperties" : false,
                  "properties" : {
                      "alpha" : { }
                  }
                }
            ]
        },
        "DerivedType_open" : {
            "allOf" : [
                { "$ref" : "#/definitions/BaseType_open" },
                { "type" : "object",
                  "properties" : {
                      "alpha" : { },
                      "beta" : { "type" : "string" }
                  },
                  "required" : [ "beta" ]
                }
            ]
        },
        "DerivedType" : {
            "allOf" : [
                { "$ref" : "#/definitions/DerivedType_open" },
                { "type" : "object",
                  "additionalProperties" : false,
                  "properties" : {
                      "alpha" : { },
                      "beta" : { }
                  }
                }
            ]
        }
    },
    "properties" : {
        "Base" : { "$ref" : "#/definitions/BaseType" },
        "Derived" : { "$ref" : "#/definitions/DerivedType" }
    }
}
```

## What doesn't work: straightforward `allOf` for base type

The following doesn't work. Why not? We want BaseType and DerivedType to be
useful types that can be used by properties. We want the types to prohibit
additional properties so that you can't just stick whatever you want in the
objects. 

However, the DerivedType can't just "allOf" the base type, since the instance
fails validation against BaseType when it contains the additional properties of
DerivedType.

* Pros:
    * Type definitions are straightforward.
    * Property definitions are straightforward.
* Cons:
    * Presents the wrong content model, which is a deal-breaker.


```javascript
{
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "type" : "object",
    "additionalProperties" : false,
    "definitions" : {
        "BaseType" : {
            "type" : "object",
            "properties" : {
                "alpha" : { "type" : "string" }
            },
            "required" : [ "alpha" ]
        },
        "DerivedType" : {
            "type" : "object",
            "allOf" : [ { "$ref" : "#/definitions/BaseType" } ],
            "properties" : {
                "alpha" : { },
                "beta" : { "type" : "string" }
            },
            "required" : [ "alpha", "beta" ]
        }
    },
    "properties" : {
        "Base" : { "$ref" : "#/definitions/BaseType" },
        "Derived" : { "$ref" : "#/definitions/DerivedType" }
    }
}
```
