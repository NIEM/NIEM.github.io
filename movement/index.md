---
title: Movement Overview
---

<b>Introducing <i>Movement</i> – an easier, simpler way to explore and use NIEM.</b>

Access Tool at: <a href="https://beta.movement.niem.gov">beta.movement.niem.gov</a>
 
<h3>Discover the possibilities</h3>

<i>Movement</i> was built with input from the NIEM community to provide a user-friendly interface, smarter search results, and a streamlined way to build JavaScript Object Notation (JSON) Schema in support of exchanges. Driven by and for users, this tool enables anyone to explore what NIEM has to offer, regardless of model expertise or technical understanding. 

<i>Movement</i> is open source so the community that helped create it can also contribute to it. It is the first step to enable greater flexibility and simplicity when interacting and leveraging NIEM.

<h3>Search the Business Glossary</h3>

The search and discovery functionality in <i>Movement</i> is powered by a Business Glossary—a lightweight, language-agnostic version of NIEM’s approximately 10,000 terms, definitions, and relationships, without the underlying technical complexities. Simple and straightforward, <i>Movement</i> removes the added challenge of understanding NIEM’s technical architecture when exploring it’s common vocabulary, allowing the Program to better support evolving community needs. Furthermore, <i>Movement</i> also introduces more personalized, laser-focused search results—including options to filter, search by keyword, or sort by relevance—so that users can find what they’re looking for faster. 

<i>Movement</i> leverages <a href="https://github.com/NIEM/NIEM-Releases">NIEM version 3.2</a>. It will be updated to use version 4.0 once that release is published.

<h3>Build your exchange</h3>

For those who want to take their exploration a step further—with the click of a button, users can quickly choose what they need from the search results and add them to <i>Movement's</i> “My Subset Builder.” Here, anyone can store the selected terms locally in their browser and generate/download customized JSON Schema. The JSON Schema formatting and technical dependencies are built into the schema generation functionality. This allows any user to leverage NIEM terms and definitions and incorporate them into their JSON exchange technical architecture.

While building your exchange, you'll notice that the tool only allows you to add certain terms to your subset. We’ve heard some concerns and feedback from users and have implemented a set of business rules for the tool to address them. <i>Movement</i> does not allow the selection of NIEM complex types—these cater to the structure and relationship of the model instead of the validation aspects needed from a schema. By allowing the user to only select NIEM simple types, the tool creates a more approachable environment for NIEM users and JSON users alike, while focusing on the intended JSON Schema solution.

The <a href="https://niem.github.io/movement/json-schema-output/">conventional JSON Schema output</a> of the tool is as simple as we can make it—its progress towards supporting organizations that want to develop a NIEM-based exchange solely using JSON.  Some may argue it’s too simple, and for others it’s exactly what they need. We’ve built it as much as we can without broad user feedback. We would like to start the conversation to find out what users would like to add back—it’s in Beta until we do. 

To learn more about what NIEM is doing with JSON overall, our <a href="https://www.niem.gov/techhub/json/">JSON overview page</a> is a great place to start.

<h3>Got feedback?</h3>

We want to hear from you! If you have a GitHub account, we welcome your input on <a href="https://github.com/NIEM/Movement/issues"><i>Movement's</i> issue tracker</a>. If not, please use our <a href="https://www.niem.gov/contact-us">contact us page on NIEM.gov</a>.  

<h3>How to contribute</h3>

Since this tool was born out of collaboration with users, it’s open source—so that the community that inspired <i>Movement</i> can continue to contribute to its evolution. 

<h4>Tool Developers:</h4>

We have ideas for additional functionality we’d love to see get implemented in the tool. If you want to join the <i>Movement</i>, here are a few suggestions for contributions: 

* Extension schema functionality for things that are not in NIEM
*	Have the User Interface display the Codelist options 
*	Export formats other than JSON Schema (XSD, Excel Spreadsheet, Java Library, .NET Library, NIEM UML, etc.)
*	Implement profiles and dashboards to build you exchanges with a group
*	Organizational data dictionary import
*	Import of existing NIEM exchanges

NIEM has created an automated build pipeline to allow developers an easy way to modify and improve the tool—facilitating developers to <a href="https://github.com/NIEM/Movement">build off the source code</a> and submit their pull requests.

<h4>Tool Users:</h4>

We are very interested in hearing your vision for future evolution of the tool as well as your general feedback on the capabilities. You can provide your feedback directly on <a href="https://github.com/NIEM/Movement/issues">GitHub</a> or though <a href="https://www.niem.gov/contact-us">NIEM.gov</a>. 
