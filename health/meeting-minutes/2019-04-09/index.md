---
title: Meeting Minutes – April 9, 2019
short: April 9, 2019
---

- TOC
{:toc .toc}

## NIEM COI Meeting

**Hosts**:  Cait Ryan and Brian Handspicker

**Guest presenter**: Mariann Yeager, CEO of The Sequoia Project

**Topic**:  PULSE – Supporting a Nationwide Disaster Response System Slide Presentation

**Length**:  39:35 minutes

**Venue**: Virtual

## Agenda

- Need for Health IT in Disaster Response
- Overview of Patient Unified Lookup System for Emergencies (PULSE)
- Lessons Learned from PULSE in California
- Leveraging Health IT for Disaster Response
- Nationwide PULSE Deployment
- PULSE Resources

## Slides

### Lessons in Health IT learned from Hurricane Katrina

- Concept for PULSE derived from devastation following hurricane Katrina
- Healthcare system at the time was largely a paper environment
- Natural and manmade events occur causing up to thousands of people needing to be treated
  - Prescription refills
  - Managing chronic conditions
  - Injuries resulting from the event
- Little access to health records for those seeking care outside of their normal healthcare delivery system
  - Those seeking or in a shelter
  - Records system is beyond capacity
- Needs to be a national strategy enabling health information to be accessible in areas where patients are displaced

### Bridging the Gap for Disaster Response

- Needs versus gaps
  - Even with advancing HIT systems, several key needs are not being met
- Three critical needs:
  - Volunteer access to patient information when treating in shelters
  - Volunteers must be authenticated against state's volunteer database to access information
    - Databases exist and are used; however, there is no way to tie them to mass-emergency situations where a volunteer needs authentication before accessing EHRs
  - Leverage existing health IT infrastructure such as existing HIT networks rather than developing a dedicated disaster response network
    - Disaster response currently operates outside of the current infrastructure and the information sharing that occurs
- Gap:
  - Disaster healthcare volunteers do not have access to EHRs, health IT systems, or health information networks
  - EHRs, health IT systems do not authenticate users against state volunteer databases
  - Disaster response is not tied into health IT infrastructure

### PULSE Design, Patient Target Populations

- This is a simple start, not the totality of what is needed throughout the country
- Disaster victims who need medical refills (such as a diabetic for whom an insulin prescription refill is an urgent need)
- All victims experiencing a medical trauma or emergency
- Displaced victims of disasters that occur outside of their normal health system geographic area of service
- Health information systems may be beyond capacity or, as in the case of the CA fires, destroyed

### History of PULSE

- April 2014: ONC evaluates use of HIE infrastructure for disaster preparedness and response
ONC published report exploring health information sharing during disaster response and EMS exchange with hospitals
Funding provided by HHS Idea Lab to look at core technical approach and requirements as well as use cases to support
- March 2015: PULSE use case and technical architecture published
- July 2015: ONC awards EMSA a grant to advance HIE during a disaster and regionally in daily EMS
- March 2016: EMSA begins PULSE development
- July 2017: PULSE Go-line in CA
  - Value of PULSE recognized
  - Sequoia became steward for PULSE in collaboration with ONC, HHS, and other government organizations
- November 2017: PULSE activated for CA fires
- January 2018: PULSE migrates to private sector; Advisory Council formed

### PULSE Purpose

- What is PULSE intended to do and who is intended to use it?
  - Assure health information is accessible by volunteer healthcare professionals who work in:
    - Mobile field hospital for Alternate Care Facility (ACF)
    - Medical shelter such as a tent or stadium, etc.

- How does PULSE work and what information is available?
  - Enables authorized volunteers to access health records to treat displaced individuals
  - Simply provides instant access which is not to be documented
  - It is a C-CDA-based exchange basic summary care record such as allergies, medications, immunizations
  - Principal use is critical to prescription refills

### What Does PULSE DO?

- "PULSE enables authorized disaster healthcare volunteers to assess health records to treat people injured or displaced due to disasters."

- Provides Access to Health Information:
  - Summary record with problems lists, immunizations, allergies
  - Mediation history to aid prescription refills

- It was found beneficial to have patients go through the triage process before being treated, using triage as an opportunity to search for the patient's health information. Records are located and queued, and PULSE then provides "view-only" access.

### Sample Workflow

- Slide shown depicts actual workflow used during CA fires triaging patients seeking treatment at a field hospital.

- Volunteer greets patient at triage
- Volunteer searches for patients using state ID, insurance card, or last known encounter
- Broadcast patient to all PULSE participants
- Finds patient match
- Searches for documents
- CCD summary of care documents retrieved and utilized by a disaster health volunteer
- Pulse is intended to be activated and available only under authority of the Emergency Management Services Authority and other authorities authorized to make those decisions in their jurisdiction
- Sample log in and information gathering slides show that PULSE is intended to be intuitive and simple, sensitive to various mental states of victims who are in a state of shock or despair.
- Only information that is a match based on basic information provided individual can be selected.
- Information is now queued for the attending physician and housed only for a period provided by the state.

### PULSE Pilot Use Case – – Based on CA fires

- Emergency or disaster occurs
- Request made to EMSA to activate PULSE
- EMSA activates PULSE through designated PULSE operator
- Disaster Healthcare Volunteer (DHV) can log into PULSE from DHV system via single sign-on

- In California, six types of licensed volunteers can log into PULSE when activated by EMSA:  (There is a planned expansion of the following list.)
  - Physician
  - Nurse Practitioner
  - Pharmacist
  - Physician's Assistant
  - EMT/Paramedic

- The location of where the emergency occurs determines to what extent they need help.
- During first activation of PULSE concerning wildfires statewide from October through November 2017, EMSA partnered with the eHealth Exchange network to increase PULSE's geographic coverage for accessible patient records.
- Risk factor for CA was initially considered to be earthquakes but the fires have put it to more significant use.
- It is better for national preparedness to have the system be in a secure state of readiness rather than trying to get it up and running during a disaster.
- Second activation of PULSE was in 2018 during the Shasta and Lake County fires.
  - EMSA partnered with eHealth Exchange to broaden access to additional providers for patients who were impacted.
  - Pulse was in a state of readiness to use (activated) and healthcare volunteers were deployed.
  - Even with limited use, additional lessons were learned to make the system more effective.

- Third activation was PULSE was November 2018 during Butte County fires.
  - EMSA realized use by medical personnel needed active deployment procedures
  - EMSA provided Just-in-Time-Training to a small group so they could use PULSE, including Scripps Medical Response Team, California National Guard, and different medical and support groups
  - EMSA deployed a three-member employee team to initiate PULSE and train personnel and trained six additional staff members
  - This was most extensive use up to that time and was used in nine locations
  - Disaster Medical Services Division (CAL-MAT) team used PULSE for patient history and medical refills

### Just in Time Training

- 132 Medical staff were provided "just in time training" on PULSE and deployed to Butte County
  - 20 Members of the Disaster Medical Services Division (CAL-MAT)
  - 10 Scripps Medical Response Team
  - 36 California Air National Guard
  - 50 California Army National Guard
- PULSE was used as of December 2018 to compile information on hundreds of patients.
- In disasters, every record represents a life.
- Two to three hundred records affected the lives of two to three hundred patients.
- HIT focuses on the value and perfection of the data, which is needed as a litmus test in day-to-day care delivery; however, in emergencies, any information is valuable, and often it is life-saving.
- Pulse should be a public utility for the good of the public facilitated through an open and transparent process.
- The advisory group's discussion of lessons learned and sharing of ideas ha led to the formation of an expansion strategy and set of resources.

### PULSE Advisory Council consists of experts from state and federal government and healthcare

- Nora Belcher, Texas eHealth Alliance (TEHA)
- Rim Cothren, California Association of Health Information Exchange (CAHIE)
- Tara Cramer, Georgia Regional Academic Community Health Information Exchange (GRACHIE)
- Kristen Finne, HHS Assistant Secretary of Preparedness and Response (ASPR)
- George Gooch, Executive Directive, Texas Health Services Authority (THSA)
- Katharyn Kryda, Department of Transportation (DoT)
- Dan Smiley, California Emergency Medical Services Authority (CalEMSA)
- Lee Stevens, HHS Intergovernmental and External Affairs
- Sean Turner, Dignity Health
- Leslie Witten-Rood, California Emergency Medical Services Authority (CalEMSA)
- Jeremy Wong, Audacious Inquiry (AI)
- Mariann Yeager, The Sequoia Project (facilitator)

### PULSE Connects to Nationwide Networks

- PULSE is already connected to eHealth Exchange Network, with California connections, and ability to connect nationwide
- Connectivity will be expanded through Carequality
- Vulnerable patient populations include those on dialysis, veterans, etc. eHealth Exchange and the expansion to include interoperability connections through Carequality provide the principle way for care plans to be accessed and connects multiple thousands of pharmacies, medical groups, dialysis centers, government agencies, hospitals, providers, and more.

- PULSE resources include information and answers about:
  - How would a jurisdiction know if PULSE is right for them?
  - What are the characteristics of a jurisdiction where PULSE would be successful?
  - There are enumerable funds available and CMA is willing to cover up to 90% of the PULSE implementation.
  - Identify the roles and responsibilities.
  - Is that jurisdiction data savvy?
  - Creation of Privacy Guidance Template

- Access resources at <https://sequoiaproject.org/pulse/>

## Post Presentation Discussion and Questions

- PULSE is currently a web portal, there is no mobile application. A mobile application could be addressed as part of the future scope through additional public funding if there arises a need for it.
- The exchange that is occurring is through Query for Documents using IHE profiles and consolidated CDA, not NIEM.
- Daily use of PULSE by EMS and first responders is not projected; however, there is another project in the works addressing that as the EMS community uses a different format. Their format would have to be translated to the format used by PULSE.
- Mariann accepted an offer to be connected to the stewards of the Emergency Management Domain in NIEM to help with the translation from one format to another; that is what NIEM does.
- Concerning the authentication process of volunteers, the question of volunteer impersonation arose. Mariann mentioned the credentialing process but was not sure of what other provisions California would have pursued. Regarding the portal itself, if one has the credentials, they can access PULSE. All data/information on PULSE is only Cached for a limited period. For instance, in California, the cache was 20 minutes. In certain situations, it could potentially be shorter or longer. It does not capture clinical information.

## PULSE Action Items

- HHS has keen interest in pushing PULSE to be implemented for the June 2019 hurricane season
- Support continued efforts in California and the Gulf states
- Explore potential for collaboration with NIEM as suggested by Cait Ryan

## NIEM Action Item

- Cait Ryan will advise others of next meeting which will likely be in one month

## Closing comments

- Mariann invites participants to contact her with additional information or questions
- Cait Ryan invites questions regarding the FHA transitioning
- Cait Ryan invites participants to contact her or Brian Handspicker for additional information or questions
