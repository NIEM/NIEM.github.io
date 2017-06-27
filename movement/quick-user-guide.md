---
title: Movement – Quick User Guide:
---

The purpose of Movement is to help users navigate the model and create their own subsets to define an organization’s data exchanges.

Below is a <i>draft</i> quick reference for anyone looking to get started using the tool. We welcome your improvements to this content [here](https://github.com/NIEM/NIEM.github.io/blob/master/movement/quick-reference-guide.md). 

## Landing Page:
When a user visits [beta.movement.niem.gov](https://beta.movement.niem.gov), they are automatically directed to Movement’s Landing page. 

Here you can input any keyword into the search bar and start to discover NIEM terms and definitions. If desired, the dropdown next to the keyword search box may be used to filter the results to a specific domain.

## Search Results Page
Once a keyword has been searched, the Search Results page displays all the relevant terms for that specific keyword. 
On this page, you can narrow down the results by one or several domains using the ‘Filter by’ section. You can also use the ‘Sort by’ dropdown to change the order of the results. 

In addition, you can add terms directly from this page to your Subset Builder by clicking the ‘Add to Subset’ button for the specific term. You can also click on the term’s name to visit its Details page.

For more information on why some terms have an ‘Add to Subset’ button and other don’t, please review the ‘Add to Subset’ Button section below.

## Details Page
You can access the Details page of a term by clicking its name. Here you can learn more about the chosen term, its definition and type, as well as locate any children terms desired to be in your subset.  If the chosen term is a parent, you can add any children terms directly from this page to your Subset Builder by clicking the ‘Add to Subset’ button.

For more information on why some terms have an ‘Add to Subset’ button and other don’t, please review the ‘Add to Subset’ Button section below.

## Subset Builder Page
You can visit the ‘My Subset Builder’ page at any point to review your current subset. 

Here, a user can review the terms that have been added to their subset, remove any (or all) terms not needed, and click on the specific term’s name to visit their Details page. As a user, you can export the JSON Schema format associated with the selected terms by clicking the ‘Download JSON Schema’ button at any time.

Currently, the content in a user’s ‘My Subset Builder’ is storied locally in the browser. Remember, we’re in beta and looking for your feedback directly on [GitHub](https://github.com/NIEM/Movement/issues) or though [NIEM.gov](https://www.niem.gov/contact-us)!

## Movement Header & Footer
Every page in Movement has a header and footer that remains consistent. 

The header contains a search bar that allows users to quickly search another keyword without going back to the Landing page. It also contains the ‘My Subset Builder’ button where you can access the subset currently being developed. 

There are several other useful links that you can access within the header and footer—you can visit the NIEM.gov website and contact us page using the ‘NIEM.gov’ and ‘Contact Us’ links respectively; access the open source GitHub repo using the ‘Join the Project’ button; go to the Movement Overview page by clicking the ‘Learn More about Movement’ link; and even download the latest version of the authoritative NIEM model by clicking the ‘Download Current Model’ link.

## ‘Add to Subset’ Button
You’ll notice that Movement only allows you to add certain terms to your subset. Based on user feedback, some business rules are built into the tool. The NIEM model has relationships that can be explained at a high level as parents (or complex types) and children (or simple types). Movement does not allow the selection of NIEM complex types—these cater to the structure and relationship of the model instead of the validation aspects needed from a schema. By allowing the user to only select NIEM simple types, the tool creates a more approachable environment for NIEM users and JSON users alike, while focusing on the intended JSON Schema solution.

We’ve built the tool as much as we can without broad user feedback. We would like to start the conversation to find out what you’d like to add back—it’s in Beta until we do. For example, if you think complex types are important for your schema output, we could use your help to identify the best way to include them, perhaps automatically in the schema output. You can provide your feedback directly on [GitHub](https://github.com/NIEM/Movement/issues) or though [NIEM.gov](https://www.niem.gov/contact-us). Ideally, we'll have multiple people who share the same idea and help us craft the business rules to hand it off to the development team or hold a hackathon to get it built!
