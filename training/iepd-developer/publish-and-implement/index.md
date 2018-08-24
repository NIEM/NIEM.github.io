---
title: Publish and Implement
icon: fa-envelope-o
description: The publish and implement phase is the last phase of IEPD development.
---

{{ page.description}}

{% include icon-list.html links=page.links %}

The search, discovery, and reuse of IEPDs are necessary for effective information exchange across organizations. IEPD publication allows other organizations to search for needed information without having to recreate it.

## IEPD Repository

Publish your IEPD to an appropriate [NIEM Community]({{ site.data.links.niem_communities }} "NIEM Community") repository.

## IEPD Implementation

Implement a push or pull service for other interested parties to obtain your exchange.

## Security and Privacy Considerations

NIEM does not dictate how you handle security and privacy issues. You must use your organization's standards.

You can tag data with security and privacy, however, other technologies are required upon exchange implementation to enforce security and privacy rules.

You also may use metadata to describe specific requirements in regard to information security and the handling of sensitive, privacy-protected information. The metadata allows systems that implement NIEM to automatically enforce rules that govern the use, protection, dissemination, and access controls for data being shared. An example of this is used by the Intelligence community, which established the Intelligence Community Information Security Marking (IC-ISM) as a standard for classified information. The NIEM technical architecture provides integration capabilities to leverage IC-ISM, as well as other IC security markups such as Need to Know (NTK).

Download and refer to the [SuperHero ISM IEPD](assets/SuperHero-ism.zip "SuperHero ISM IEPD") for an example on how to apply the IC-ISM markings.