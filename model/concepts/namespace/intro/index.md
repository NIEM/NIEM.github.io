
Namespaces act like collections, logically grouping related properties and types together.  They also have additional characteristics, like a target namespace URI (a unique ID) and a namespace prefix (used as shorthand for the URI).

Components are often referred to by their qualified names, like `nc:Person`.  Using the namespace prefix in front of the component name helps to identify and distinguish it, especially in cases where the same name may appear in multiple namespaces.

{: .example}
- The `Human Services` domain is a namespace.
- In the 4.0 release, it uses namespace prefix `hs` and defines components like property `hs:RequestedService` and type `hs:PlacementType`.

NIEM primarily creates namespaces in order to group components together based on governance.

- Core contains content typically too general to belong to any one domain, so it is managed by the NIEM Business Architecture Committee (NBAC), a governance body with cross-domain and community representation.
- Domain namespaces are managed by governance bodies in specific subject areas.
- Code namespaces typically reflect standards managed outside of NIEM.

A domain or IEPD may reuse any component from any NIEM release namespace.  Reuse is not limited to just from Core and the most closely-related domains.
