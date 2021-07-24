---
title: Publish and Implement
icon: fa-envelope-o
description: Publish the IEPD for search, discovery, and reuse, and implement the IEPD for production.
---

{{ page.description}}

{:toc}
- TOC

The search, discovery, and reuse of IEPDs are necessary for effective information exchange across organizations. IEPD publication allows other organizations to search for needed information without having to recreate it.

## Publish

Publish an IEPD to all repositories that are relevant to the exchange; the more exposure the better. Many of the [NIEM Communities]({{ site.data.links.niem_communities }} "NIEM Communities") have IEPD repositories where you can search for a package that is suitable or adaptable to your exchange. You may be able to find a home for your exchange with one of them.

## Implement

There are many ways to implement NIEM. Two common implementation examples include the following:

| **Message Queue** | An organization can store NIEM-conformant XML instances within a message queue during its response to a stakeholder's information request service. |
| **Web Services** | An organization can embed a NIEM conformant schema into a new or existing Web Service and perform an electronic transfer with one or more exchange partners potentially through a Service Oriented Architecture (SOA) environment. |

### Security and Privacy Considerations

NIEM does not dictate how you handle security and privacy issues. You must use your organization's standards.

You can tag data with security and privacy, however, other technologies are required upon exchange implementation to enforce security and privacy rules.

You also may [use metadata to describe specific requirements]({{ "/training/iepd-developer/publish-and-implement" | relative_url }}) in regard to information security and the handling of sensitive, privacy-protected information. The metadata allows systems that implement NIEM to automatically enforce rules that govern the use, protection, dissemination, and access controls for data being shared.
