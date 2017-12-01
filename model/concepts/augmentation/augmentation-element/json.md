---
  title: Augmentation Elements in JSON
  training: json
  next: Local Terminology
  nextlink: ../../local-term
---

- TOC
{:toc}

Augmentation container elements are important for XML schema validation, but have no role in the conceptual model, so they do not appear in the JSON representation.  Additional content appears directly on their objects.

## Instance examples

The examples below show element nc:Person in JSON, with and without augmentations.

**nc:Person without augmentations:**

```json
{
  "nc:Person" : {
    "nc:PersonName" : {
      "nc:PersonFullName": "John Smith"
    },
    "nc:PersonBirthDate" : {
      "nc:Date": "1950-01-01"
    }
  }
}
```

**nc:Person with domain and local augmentations.**

```json
{
  "nc:Person" : {

    "nc:PersonName" : {
      "nc:PersonFullName": "John Smith"
    },
    "nc:PersonBirthDate" : {
      "nc:Date": "1950-01-01"
    },

    "j:PersonAdultIndicator": true,
    "j:PersonDEAIdentification": {
      "nc:IdentificationID": "123456789"
    },

    "m:PersonBiometricURI": "https://biometric.example.com/23532356684",

    "ext:PersonLocalID": "52d6632"
  }
}
```
