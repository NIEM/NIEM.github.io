---
  title: Namespaces in JSON
  training: json
  next: property
---

- TOC
{:toc}

## Schema template

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    ...
  },
  "definitions": {
    ...
  }
}
```

`$schema` defines which draft of the JSON Schema specification that this schema should conform to.

`additionalProperties` specifies whether or not properties in addition to the ones defined in this schema are allowed in instances.

`properties` contains the NIEM property declarations.  See more in the [Properties section](../property).

`definitions` contains the NIEM type declarations.  See more in the [Types section](../type).

## Schema example

The example below shows an example JSON schema, based on current guidance.

<!-- 
  Run make in the current directory to update the examples from the json directory.  Jekyll does not include relative files from parent directories.
  -->

```json
{% include_relative samples/schema.jsonld %}
```

## JSON-LD Context

Additional context information is needed to associate the namespace prefixes used by NIEM with their URIs.

The NIEM 4.0 release provides this context association in the file niem-4.0-context.jsonld, a subset of which is provided below:

```json
{
    "aamva_d20": "http://release.niem.gov/niem/codes/aamva_d20/4.0/#",
    "ag": "http://release.niem.gov/niem/domains/agriculture/4.0/#",
    "nc": "http://release.niem.gov/niem/niem-core/4.0/#",
    "usps": "http://release.niem.gov/niem/codes/usps_states/4.0/#"
}
```

This is a simple JSON file assigning target namespaces, followed by the "#" symbol, to each namespace prefix used in the release.

The hash symbol is used as part of JSON pointer notation.
