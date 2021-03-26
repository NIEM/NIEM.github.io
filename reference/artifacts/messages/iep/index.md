---
  title: Information Exchange Package (IEP)
  short: IEP
  icon: fa-envelope-o
  description: An Information Exchange Package (IEP) is an actual NIEM message exchanged between stakeholders.  The format for this message is defined by the schemas and artifacts in its corresponding Information Exchange Package Documentation (IEPD).
---

Information Exchange Packages (IEPs) are messages that carry data and are exchanged between stakeholders.  An IEP is specified by its Information Exchange Package Documentation (IEPD), which includes schemas, documentation, and other artifacts needed to fully describe the format and semantics of the message.

{:.features}
>
> - Explicit Conformance Target specified in the Information Exchange Package Documentation (IEPD) Specification
> - The definitive artifact of an information exchange
> - Provide consistent forms of data

{:.note}
> The rules for constructing IEPs are defined by the [Information Exchange Package Documentation (IEPD)
> Specification]({{site.data.links.mpd_spec}}).

<!--more-->

## Why IEPs

An Information Exchange Package (IEP) is a NIEM message. It carries exchange data. The format, rules, and documentation for the message are defined by its IEPD, or NIEM message specification.

In NIEM, an information exchange instance is an IEP. An IEP is an XML instance document that conforms to the conformance target defined by a `c:IEPConformanceTarget` element in the IEPD catalog document.
