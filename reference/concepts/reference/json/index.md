---
  title: References in JSON
  short: JSON
---

- TOC
{:toc}

## Local references

In a JSON instance, both identifiers and references are specified with the "@id" property.

```json
{
  "j:Arrest": {
    "j:ArrestInvolvedWeapon": {
      "nc:WeaponUser": {
        "@id": "bart"
      }
    },
    "j:ArrestSubject": {
      "nc:RoleOfPerson": {
        "@id": "bart"
      }
    }
  },
  "nc:Person": {
    "@id": "bart",
    "nc:PersonName": {
      "nc:PersonGivenName": "Bart"
    }
  }
}
```

## External references

### Absolute IRIs

```json
{
  "j:Arrest": {
    "j:ArrestInvolvedWeapon": {
      "nc:WeaponUser": {
        "@id": "https://state.example/98723987/results.xml#bart"
      }
    },
    "j:ArrestSubject": {
      "nc:RoleOfPerson": {
        "@id": "https://state.example/98723987/results.xml#bart"
      }
    }
  }
}
```

### With base

Relative IRIs (international resource identifiers) will be resolved against the document base.  This base may be set explicitly as part of the document context using the `@base` keyword:

```json
{
  "@context": {
    "@base": "https://state.example/98723987/results.xml"
  },
  "j:Arrest": {
    "j:ArrestInvolvedWeapon": {
      "nc:WeaponUser": {
        "@id": "bart"
      }
    },
    "j:ArrestSubject": {
      "nc:RoleOfPerson": {
        "@id": "bart"
      }
    }
  }
}
```
