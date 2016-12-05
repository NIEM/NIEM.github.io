---
title:  Evaluate data component quality
---

## Considerations in identifying, designing, defining, and structuring data components

Questions to ask or consider about metadata, semantics, and structure while modeling NIEM content.  
These can help you decide what to model, how, and what NIEM structures to employ or consider. 

For each potential NIEM Core data component (type/property):

1. Is it a NIEM property or type? 
- Is it common enough to be part of NIEM Core? (depth of NIEM Core)
- Or is it better used as a Domain extension to NIEM Core?
- Is it required in NIEM information exchanges (IEPD) or messages? (scope)
- What kinds of data exchanges use it or would use it?
- Is it reusable in other messages?
- Can it be used in composing IEPDs?
- Does it overlap multiple requirement sources (models)?
- What data models contain this component or one similar to it? (source/requirement)

2. Is it a characteristic property or subpart of the appropriate NIEM object (type)? 
3. Is it too specific (not reusable)?
- Should it be generalized to include in NIEM Core?
- Better used as a Domain extension to NIEM Core?

4. Does this property or type overlap with another? Not distinct? 
- Should it be joined with another component?
- Should it be split into multiple components? (too broad)
- Select one; remove the other(s)?

5. Is its name meaningful to NIEM?
- Is it properly named?
- Are the terms of its name meaningful?
- Are there meaningful definitions for each term?
- Are the proper word senses clear or identified within the definition?
- If a name term is local language (i.e., not in OED, or in OED but not using an OED word sense), jargon, acronym, or abbreviation are these terms defined with appInfo in the schema documents in which they are used?

6. Is its definition meaningful in NIEM?
- Is it defined distinctly from other NIEM Core data components?
- Is it distinct from other Domain components?

7. Is it modeled correctly (structurally correct; correspond to real-world)?  
- Does it have the right base-types and properties?  
- Is it missing common characteristic or subpart properties (simple/complex)?  
- Does it contain properties that should be deleted, replaced, or changed? 

8. How is it related to other objects (types)?
- Use NIEM associations?
- Use NIEM roles? 

9. How is it used? (primary context? multiple contexts?)

----

### <&mdash;&mdash; Return to: [Table of Contents](./index.html)

----

