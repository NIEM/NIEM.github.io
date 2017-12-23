---
title: NIEM namespaces
---

NIEM maintains a set of governing bodies for data definitions. Each body is
responsible for its own data definitions, and is encouraged to reuse the
definitions of others. As [described earlier](../reuse), NIEM data definitions
are organized into namespaces. These bodies, and their namespaces, include:

* The NIEM Business Architecture Committee (NBAC), which governs the central
  namespace of NIEM, called NIEM Core. NIEM Core covers a large number of
  broadly-applicable data definitions which need to be managed across the entire
  NIEM enterprise.

* The NIEM Technical Architecture Committee (NTAC) governs the techincal
  architecture and manages the foundational namespaces **structures** and
  **appinfo**.
  
* Domains are communities of interest, each managing components addressing a
  specific topic or line of business. 
  
[Core and domains, and their namespaces](../../model/content), are outline
elsewhere on this site.

Each namespace has:

* an **XML namespace**, which is a URI
* a commonly-used **namespace prefix**, which is a short label that stands for the full
  namespace URI in instances and schemas. 
  
Examples:

* NIEM core uses the prefix `nc`, and in NIEM 4.0 has the XML namespace `http://release.niem.gov/niem/niem-core/4.0/`.

* The Justice domain uses the prefix `j`, and in NIEM 4.0 has the XML namespace
  `http://release.niem.gov/niem/domains/jxdm/6.0/`.
  
The *namespace* plus the *local name* for a component is the qualified name for
a component. For example:

* The `PersonBirthDate` element defined by NIEM Core would be expressed as a
  qualified name, with the commonly-used prefix, as `nc:PersonBirthDate`.
  
* The `ChargeDisposition` element defined by the Justice domain would be
  expressed as a qualified name, with the commonly-used prefix, as
  `j:ChargeDisposition`.
  

  
  


