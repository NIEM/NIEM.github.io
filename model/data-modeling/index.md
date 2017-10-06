---
  title: Data Modeling
---

## TODO

A few notes are copied below.

---

## Example source requirements

Dozens of overlapping names, addresses, phone numbers, etc. taken from different exchanges:

```
- subject name, subject address, subject phone number, subject height, subject weight, ...
- parolee name, parolee address, parolee phone number, parolee height, parolee weight, ...
- driver name, driver address, driver height, driver weight, driver license ID, ...
- judge name, judge jurisdiction, ...
- officer name, officer badge id, ...
- fname, firstname, first_name, name_first, FN, etc.
```

## Strategies

- Add a source requirement to the model if it seems reusable
  - Let exchanges define the single-exchange-only components
- Model hard requirements
  - "Don't boil the ocean"
  - Don't overengineer the solution based on hypotheticals
- Harmonize
  - Represent each concept with a single name, single definition, single structure (as much as possible)
  - May need to generalize names and definitions to broaden applicability
- Build reusable objects that model the real world, not specific exchange requirements
  - a **Person** object
    - name, address, phone number, height, weight
  - a **Subject** object
    - based on Person
    - with additional subject-specific properties
  - an **Officer** object
    - based on Person
    - with additional officer-specific properties
  - an **Address** object
  - etc.
- Let exchanges specify which properties they need on which objects
- Create new properties to capture unique semantics, but reuse existing types and properties where possible
