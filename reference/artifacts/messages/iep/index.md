---
  title: Information Exchange Package (IEP)
  short: IEP
  icon: fa-envelope-o
  description: An Information Exchange Package (IEP) is an actual NIEM message exchanged between stakeholders.  The format for this message is defined by the schemas and artifacts in its corresponding Information Exchange Package Documentation (IEPD).
---

Information Exchange Packages (IEPs) are derived from superceding
Information Exchange Package Documentation (IEPD) and define the exchange
of information as NIEM artifacts. They are the messages exchanged between
the stakeholders in the information exchange.

{:.features}
>
> - Explicit Conformance Target specified in the Model Package Description Specification (MPD-Spec)
> - The definitive artifact of an information exchange
> - Provide consistent forms of data
> - Self-documenting NIEM artifact

{:.note}
> The rules for constructing IEPs are defined by the [Model Package Description
> Specification (MPD-Spec)]({{site.data.links.mpd_spec}}).
> IEPs are a kind of MPD derived from a superceding
> IEPD. IEPs, by the MPD-Spec, must be self-documenting.

<!--more-->

## Why IEPs

An Information Exchange Package (IEP) is a NIEM message. It carries exchange data. The format, rules, and documentation for the message are defined by its IEPD, or NIEM message specification.

In NIEM, an information exchange instance is an IEP. An IEP is an XML instance XML document that conforms to the conformance target defined by a `c:IEPConformanceTarget` element in the MPD catalog document of a model package description. An IEP is a MPD that satisfies all the validity constraints for its class as defined by its superceding IEPD, and that has an XML document root element that is declared in either a NIEM Reference or Extension Schema Document.
