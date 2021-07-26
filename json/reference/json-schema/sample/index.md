---
title: Example JSON Schema
---

{:toc}
- TOC

The OASIS LegalXML Electronic Court Filing (ECF) 5.0 specification defines a number of NIEM 4.0 information
exchanges with courts.

## Example schema

Here is the ECF 5.0 GetCourtSchedulingRequestMessage to request a court hearing implemented in JSON schema:

```json
{% include_relative schema.json %}
```

## Example message

An example of a JSON request based on the JSON schema is:

```json
{% include_relative instance.json %}
```
