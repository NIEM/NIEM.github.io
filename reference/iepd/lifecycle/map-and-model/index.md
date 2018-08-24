---
title: Map and Model
icon: fa-envelope-o
description: During the map and model phase, you compare your information exchange requirements to what's in NIEM, and then define a mapping between your requirements and NIEM content. You use a mapping document, which may be a spreadsheet or similar tabular form. 
---

{{ page.description}}

{% include icon-list.html links=page.links %}

The mapping process consists of the [creation of a mapping document](/training/iepd-developer/map-and-model/) and then searching for NIEM elements and mapping them in the document.

Your entries in the document identify the exchange requirements that are well-represented by NIEM, and what needs to be defined as an extension to NIEM.

## NIEM Data Model Reuse Considerations

The hierarchical implications of the model must be considered when reusing NIEM elements. NIEM’s hierarchal approach to modeling allows for flexibility and reuse, while still maintaining context.

- Elements and types are defined globally and referenced when used.

- Type hierarchy provides a contextual representation of the element.

- Attributes are assigned to some types to provide context on their use.

## Additional Considerations

You should include additional notes in the mapping document to provide reasoning and context. When mapping, be conservative in extending NIEM data objects to maintain the integrity of the NIEM data model.
