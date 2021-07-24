---
title: IEPD Starter Kit
description: Learn about NIEM IEPD conformance, view sample IEPDs, and more.
redirect_from: /reference/artifacts/messages/iepd/iepd-starter-kit/
links:
  - url: /reference/iepd/iepd-starter-kit/iepd-series/
  - url: /reference/iepd/iepd-starter-kit/terms/
  - url: /reference/iepd/iepd-starter-kit/reusable-xml-snippets/
---

To use NIEM, you develop or implement Information Exchange Package Documentations (IEPDs). An IEPD defines a recurring message in XML and is built to satisfy information exchange business requirements.

A developer builds an IEPD by incorporating the necessary NIEM core and domain model content. The [subset schema generation tool (SSGT)]({{ site.data.pages.ssgt | relative_url }}) can aid in the process of developing this NIEM subset. The developer may also extend that content as needed to account for information requirements that are not yet addressed in NIEM. The IEPD will ultimately define XML instance documents that will contain the information to be exchanged. Extended and new content developed in IEPD extension schema documents should be considered for future model updates. In turn, domain and core model updates will be harmonized and integrated into future NIEM releases. In this way, NIEM evolves with new and changing needs.

{: .note}
> There is more information on IEPD construction available at our **[NIEM Training]({{ "/training" | relative_url }})** site.

In an era when return on investment has never been more important to government services, NIEM enables organizations to exchange information across all levels of government in a manner that is both effective and efficient.

Be sure to check out the [NIEM Cost Model](https://www.niem.gov/about-niem/niem-cost-model), which allows users to quantify the associated costs of adopting NIEM.

## Links

- [Search GitHub for NIEM IEPDs](https://github.com/search?q=NIEM+IEPD)
- [See a template IEPD on GitHub](https://github.com/NIEM/Template-IEPD/)

## See more

{% include icon-list.html links=page.links %}
