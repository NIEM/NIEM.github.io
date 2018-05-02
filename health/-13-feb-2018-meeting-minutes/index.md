### Meeting Minutes – Tuesday, February 13, 2018

FHA Attendees: Cait Ryan, Kevin Mundy 

Other Attendees: *

### Agenda
* Welcome
* Health IT and NIEM Health Recap
* Status Update
* Question and Answer

### Welcome and Introductions 
1. Cait welcomed the group and explained that all participants had joined in listen only mode. Participants were instructed to ask all questions in the questions window located on the GoToWebinar tool bar.
2. Cait introduced Kevin Mundy to the COI and explained that he has filled Alberto’s position as the tech lead on the project.
3. Cait reviewed the meeting agenda and proceeded to the first topic.

### Health IT and the NIEM Health Recap
1. Cait provided a recap from the October kick-off meeting where they discussed the complexities of Health IT and talked about the federal health information model, a robust information model developed by federal agency subject matter experts.
* FHA met with several organizations from the NIEM community who have, in the past, approached FHA about their scenarios that they needed help with.
* FHA found that just a small subset of health elements are needed, not all of healthcare. 
* FHA also heard a strong desire for a Community of Interest (COI).
* Note: Meetings are currently being used to socialize the tutorials, once published we will determine how to best utilize these COI meetings. A thought at this time is to hold them as “office hours” and provide Q&A support to the NIEM COI.
* It is important to mention that the use cases that we received from the community did not have many missing “health” elements, most were already found in NIEM
2. FHA determined that rather than “re-create” the wheel and model content into a traditional NIEM domain it will instead provide educational resources and instructions for locating health elements. These guides that will be published to the NIEM Health Activities page. These tutorials will:
* Include a Data dictionary and Mapping Spreadsheet
* Use the Use Cases we receive 
* Provide step by step guidance
* Leveraging Federal Health Information Model (FHIM)
3. FHA will leverage the FHIM as this is a model developed by FHA and its agency partners and their subject matter experts. FHIM harmonizes various industry and agency standards to serve as the authoritative source for federal agencies.
4. Cait urged the group to join the February 22 FHA Learning Series that will provide an hour long “level-set” of the Federal Health Information Model.
5. Reviewed the proposed timeline and milestones and the work that has been done by the time team since meeting in October. Cait plans for the COI to meet more often and explained that we did not meet between October and not because of the NBAC Face to Face and the holidays. 
6. Cait will send the draft tutorials later this month for the COI to review; it is important to provide feedback so that we know if it is something that is helpful and will be used by the NIEM Community.  
7. The outline of the tutorial was reviewed
* Update: This has since been broken into 2 separate documents so that the reader does not have to read the introduction to FHIM if they do not want to.

### Status Update

1. Kevin Mundy began by reviewing the illustration of where these tutorials fit into that process to help facilitate the creation of an IEPD when health elements are needed.
2. FHA is not providing a typical domain, which will hopefully become obvious as to why we have chosen this approach throughout the remainder of this presentation.
3. Kevin went through the various Health Interoperability standards, their various uses and purposes, and showed how they often overlap or conflict.
* The tutorials are not meant to serve as a deep dive of these standards but rather provide an overview and give the reader an idea of just how complex health IT is and why we will use FHIM.
4. Kevin touched on NIEM and how it provides a common vocabulary to generate consistent, reusable, data terms and repeatable process for consistent exchanges.
* Standardized approach to the IEPD to create those exchanges. 
5. FHIM is developing a well-structured model for the exchange of health information. For the NIEM Community to exchange health elements they need a starting point, as we saw there are different ways to use health standards in certain kinds of way. FHIM acts as a reference implementation model that sits above the standards we showed earlier. 
6. Domains in NIEM represent various industries. Domains in FHIM are specific to healthcare; FHIM covers approx. 80% of the entirety of healthcare. FHIM domains are represented as UML object classes.
* Kevin walked through the Dental Domain Model as an example.
7. In these tutorials we will describe the nuts and bolts of how to get the information needed and how to ensure you are using them properly. To begin we go to [www.fhims.org](http://www.fhims.org/) website. There are 2 ways to access the data elements, via a spreadsheet or a view of the model and individually view the domains and their classes.
* The spreadsheet will have 6 columns: class qualified name, class name, class documentation, property Name, Property Documentation and data type.
* Note: A way to search the FHIM quickly is to use 3rd party tool such as [www.fhimview.com](http://www.fhimview.com/).
* Can search and read the same documentation from the spreadsheet or for those who are more visual, you can view in a mindmap.
8. The 4 use cases that we have selected to use and test the process that will be illustrated in the tutorials. They are as follows: 
* Custody Release
* Supervised Person Behavioral Health 
* Supervised Person Drug Test Services
* MHS TRANSCOM
* The first 3 use cases were recommendations from IJIS, they have a high business prioritization, and FHA has the most detailed information for these use cases. It is important to mention that after reviewing these use cases, there was very minimal health data actually required.  
* As we were working with these use cases, another case was brought to use by DOD which contained a much larger need for health information, MHS Transcom.
9. Kevin reviewed the MHS use case mapping spreadsheet that we used and showed that several elements already exist in NIEM. In the development of the Health Domain Guide, we will determine when to use FHIM as opposed to NIEM when coming across an instance where information is modeled in both. 
10. We will then show you how to use the FHIM property documentation as a reference and instruct you where to look to find the codes and values for the property. In most cases you will use the National Library of Medicine’s Value Set Authority Center (VSAC) which will often have all of this information listed in one spot, for others you may have to go straight to the source of the terminology (LOINC or SNOMED) or the exchange (HL7, FHIR, C-CDA etc.).

### Question and Answers/Timeline Review

1. Cait answered a question about contact information and links to various documents. She explained that links to the NIEM Health activities space and emails are in the back of the slide deck and will also be sent in a follow up email to the group. Slides and recording will be sent in the follow up email as well and can be found on the NIEM Health Activities page.
2. Cait reviewed the next steps (slide 31).
3. Cait stressed that FHA is still accepting use cases and urged the community to send them in. We need these use cases to help get a greater variety of elements.
4. Steve H. asked when and how will FHA’s FHIM and ONC US Core Data for Interoperability (USCDI) be harmonized; Cait did not have that answer but said that FHA is reviewing the USCDI and FHIM and looking to schedule a meeting with the right people. She also said this would be a good question to ask at the FHIM Learning Series meeting.
