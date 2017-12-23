---
title: Plain JSON data
---

JSON data, at its simplest, can be a single object composed of fields, with each
field having a simple value. 

Some terminology:

* A  **value** can be a simple value, an array, or an object.

* A simple value can be a string, a number, or a Boolean value `true` or
  `false`, or `null`.

    * A **string** is a quoted series of Unicode characters, and
      may contain escaped special characters (e.g., backspace or newline) or
      hexadecimal codes for characters.

    * A **number** is an integer (e.g., 43, -271), a decimal value (e.g., 3.026,
      -0.0328), or exponential notation (e.g., 2.3e14, 2.7E-12).
      
    * The values `true` and `false` are simple
      values, and refect their Boolean meaning.
      
    * The value `null` can be used many different ways, but
      generally reflects the usual concept of a *value for no value*.

* An **array** is an ordered list of values, separated by
  commas. An array is enclosed in square brackets. For example:

    * An array with 3 values: `[ "one", 1, true ]`
    
    * An array with a single value: `[ true ]`
    
    * An array containing no values: `[ ]`
    
* An **object** is a set of `"name" : value` pairs. 

    * The name of a pair is referred to as a **key**. The key of a pair is a
      string.

    * The value of a pair may be any type of value: a simple value, an array, or
      an object.
    
    * Pairs are separated by commas
    
    * A given key should appear only once within an object.
    
    * The order of keys within an object should not be considered
      significant. Keys may appear within an object in any order.
    
    * For example:
    
        * An empty object: `{ }`
    
        * An object with a single pair: `{ "GivenName": "Morty" }`
    
        * An object with simple values:

```javascript
{% include_relative simple.json %}
```

Although a JSON file may be any value, a JSON file usually consists of a single
object, possibly containing other objects. For example:

```json
{% include_relative object-model.json %}
```
