---
  title: Movement
  short: Movement
  description: Movement provides a user-friendly interface and smarter search results for the latest NIEM release. Movement is also open source so the community who inspired its creation can contribute to it.
  icon: fa-search
  redirect_from: /movement/
  links:
  - url: /reference/tools/movement/quick-user-guide/
  - url: /reference/tools/movement/json-schema-output/
---

<div class="introducing-movement">
  <b><i>Movement</i> - an easier, simpler way to explore and use NIEM.</b>
</div>
<div class="access-tool-here">
  <a class="btn btn-primary btn" href="https://beta.movement.niem.gov" target="_blank">
    <span class="content">Visit Movement</span>
  </a>
</div>

**[Movement]({{ site.data.links.movement }})** enables you to search and explore the content of the NIEM model.  It provides a user friendly interface, smarter search results, and a streamlined way to build JavaScript Object Notation (JSON) Schema in support of exchanges.  It is also open source: the community who inspired its creation can contribute to it.

{:.features}
- Search and explore the content of NIEM.
- Build simple JSON subsets of the current release.
- Open-source

<!--more-->

{:toc}
- TOC

### Discover the possibilities

Created with input from the NIEM community, Movement provides a user friendly interface, smarter search results, and a streamlined way to build JavaScript Object Notation (JSON) Schema in support of exchanges.

Simple and straightforward, Movement removes the added challenge of understanding NIEM's technical architecture when exploring its common vocabulary, allowing the Program to better support evolving community needs. Movement allows anyone to explore what NIEM has to offer, regardless of model expertise or technical understanding.

Movement is also open source so the community who inspired its creation can contribute to it.

<div class="movement-video-wrapper">
  <div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/F3ofVeC9tjs" frameborder="0" allowfullscreen></iframe>

    embed/hOAfTlpA5tA?rel=0
  </div>
</div>

### Search the Business Glossary

The Business Glossary—a lightweight, language-agnostic version of NIEM's 12,000+ terms, definitions, and relationships—powers Movement's search functionality. Movement also offers more personalized, laser-focused search results—including options to filter, search by keyword, or sort by relevance—so that users can find what they're looking for faster.

Movement supports the current NIEM release: [{{ site.data.release.current.label }}]({{ "/niem-releases/current/" | relative_url }}).

### Build your exchange

For those who want to take their exploration a step further, users can quickly choose what they need from the search results and add them to Movement's "My Subset Builder" with just the click of a button. You can store the selected terms locally in your browser and generate/download customized JSON Schema. The JSON Schema formatting and technical dependencies are built into the schema generation functionality, allowing you to leverage NIEM terms and definitions and incorporate them into your JSON exchange technical architecture.

While building your exchange, you'll notice that Movement only allows you to add certain terms to your subset. Based on user feedback, some business rules are built into the tool. Movement does not allow the selection of NIEM complex types—these cater to the structure and relationship of the model instead of the validation aspects needed from a schema. By allowing the user to only select NIEM simple types, the tool creates a more approachable environment for NIEM users and JSON users alike, while focusing on the intended JSON Schema solution.

The [conventional JSON Schema output](./json-schema-output/) of the tool is as simple as we can make it and demonstrates the Program's progress towards supporting organizations that want to develop a NIEM-based exchange solely using JSON.  Some may argue it's too simple, and for others it's exactly what they need. We've built it as much as we can without broad user feedback. We would like to start the conversation to find out what users would like to add back—it's in Beta until we do.

To learn more about what NIEM is doing with JSON, the [NIEM JSON section]({{ "/json/" | relative_url }}) on this site is a great place to start.

### Got feedback?

We want to hear from you!

In the spirit of open-source tooling, we have provided a [Scrum board](https://github.com/NIEM/Movement/projects/1) that allows users to keep track of Movement's issues and enhancements. Anyone can [submit a new issue](https://github.com/NIEM/Movement/issues) for the tool for something they would like to see added or a bug. Once reviewed by the program office, issues will be added to the Scrum board's backlog. Developers and tool contributors can then address issues from the backlog and track their status using the Scrum board—providing an Agile approach to development and complete transparency to users.

Don't have a GitHub account and want to provide input? Please use our <a href="https://www.niem.gov/contact-us">contact us page on NIEM.gov</a>.

### How to contribute

#### Tool Developers

We have ideas for additional functionality we'd love to see get implemented in the tool. If you want to join the Movement, here are a few suggestions for contributions:

* Extension schema functionality for things that are not in NIEM
* Have the user interface display the Code list options
* Export formats other than JSON Schema (XSD, Excel Spreadsheet, Java Library, .NET Library, NIEM UML, etc.)
* Implement profiles and dashboards to build your exchanges with a group
* Organizational data dictionary import
* Import of existing NIEM exchanges

NIEM has created an automated build pipeline to allow developers an easy way to modify and improve the tool by <a href="https://github.com/NIEM/Movement">building off the source code</a> and submitting their pull requests.

#### Tool Users

We are very interested in hearing your vision for Movement as well as your general feedback on its capabilities. You can provide your feedback directly on <a href="https://github.com/NIEM/Movement/issues">GitHub</a> or though <a href="https://www.niem.gov/contact-us">NIEM.gov</a>.

### Join the Movement
Movement is an exciting glimpse into the future of NIEM, and we can't wait to see what the community accomplishes by using it. Join the movement today—visit <a href="https://beta.movement.niem.gov">beta.movement.niem.gov</a> to access the tool.

## Additional Resources

{% include icon-list.html links=page.links %}
