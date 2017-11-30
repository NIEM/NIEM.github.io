
Namespaces act like collections, logically grouping related properties and types together.  They also have additional characteristics, like a target namespace URI (a unique ID) and a namespace prefix (used as shorthand for the URI).

Components from a namespace are often referred to using qualified names (qnames).  The namespace prefix appears before the name of the component (e.g., `nc:Person`), which helps identify it and distinguish it from components in other namespaces that may have the same name.

> An example of a namespace is the NIEM `Human Services` domain, version 4.0. <br> <br> - It has namespace prefix `hs` and target namespace `http://release.niem.gov/niem/domains/humanServices/4.0/` <br> <br> - It defines components such as property `hs:RequestedService` and type `hs:PlacementType`

NIEM primarily creates namespaces to group components together based on governance.

- Core contains content typically too general to belong to any one domain, and is thus managed by the NIEM Business Architecture Committee (NBAC), a governance body with cross-domain and community representation. <br>
- Domain namespaces are managed by governance bodies in specific subject areas. <br>
- Code namespaces typically reflect standards managed outside of NIEM.

A domain or IEPD may reuse any component from any NIEM release namespace, not just from Core and the most closely-related domain.
