---
   title: fbi_ucr
---

**Prefix:** ucr

Crime reporting codes from Uniform Crime Reporting.
Source: FBI Crminal Justice Information Systems (CJIS) Division; 
Publication: CJIS Div UCR Program - 
NIBRS Technical Specification; 
Version: 1.0; 
Date: 16 April 2012; 
http://www.fbi.gov/about-us/cjis/ucr/nibrs_technical_specification_version_1.0_final_04-16-2012.pdf

<a href="http://release.niem.gov/niem/codes/fbi_ucr/4.0/fbi_ucr.xsd">XML Schema</a>

## Type Index

| Type | Definition | Code Count |
| --- | --- | --- |
| <a href="#aggravatedassaulthomicidefactorscodesimpletype">AggravatedAssaultHomicideFactorsCodeSimpleType</a> | A data type for circumstances of either an aggravated assault or homicide. | 17 |
| <a href="#arrestcategorycodesimpletype">ArrestCategoryCodeSimpleType</a> | A data type for kinds of arrests that can occur. | 3 |
| <a href="#arresteeweaponcodesimpletype">ArresteeWeaponCodeSimpleType</a> | A data type for weapons with which a subject may be armed with upon apprehension. | 13 |
| <a href="#criminalactivitycategorycodesimpletype">CriminalActivityCategoryCodeSimpleType</a> | A data type for kinds of incidents. | 11 |
| <a href="#drugcategorycodesimpletype">DrugCategoryCodeSimpleType</a> | A data type for kinds of drugs. | 18 |
| <a href="#drugmeasurementcodesimpletype">DrugMeasurementCodeSimpleType</a> | A data type for the kinds of measurements used to specify a quantity of drugs or narcotics. | 11 |
| <a href="#ethnicitycodesimpletype">EthnicityCodeSimpleType</a> | A data type for kinds of cultural lineages of a person. | 3 |
| <a href="#forcecategorycodesimpletype">ForceCategoryCodeSimpleType</a> | A data type for kinds of weapons or forces used by a subject in committing an offense. | 22 |
| <a href="#incidentbiasmotivationcodesimpletype">IncidentBiasMotivationCodeSimpleType</a> | A data type for bias motivations for an incident. | 28 |
| <a href="#incidentexceptionalclearancecodesimpletype">IncidentExceptionalClearanceCodeSimpleType</a> | A data type for ways in which an incident may be cleared exceptionally. | 6 |
| <a href="#incidentfactorcodesimpletype">IncidentFactorCodeSimpleType</a> | A data type for factors that may have been involved in or contributed to a subject committing an offense. | 4 |
| <a href="#injurycategorycodesimpletype">InjuryCategoryCodeSimpleType</a> | A data type for a general category of harm or injury. | 8 |
| <a href="#justifiablehomicidefactorscodesimpletype">JustifiableHomicideFactorsCodeSimpleType</a> | A data type for circumstances of a justifiable homicide. | 7 |
| <a href="#leokaactivitycategorycodesimpletype">LEOKAActivityCategoryCodeSimpleType</a> | A data type for a kind of activity or circumstance in which a law enforcement officer was engaged at the time of assault. | 11 |
| <a href="#leokaofficerassignmentcategorycodesimpletype">LEOKAOfficerAssignmentCategoryCodeSimpleType</a> | A data type for an assignment a law enforcement officer was on when assaulted. | 7 |
| <a href="#locationcategorycodesimpletype">LocationCategoryCodeSimpleType</a> | A data type for kinds or functional descriptions of a location. | 45 |
| <a href="#methodofentrycodesimpletype">MethodOfEntryCodeSimpleType</a> | A data type for methods of entry into a structure or premises. | 2 |
| <a href="#multiplearresteesegmentscodesimpletype">MultipleArresteeSegmentsCodeSimpleType</a> | A data type for the ways in which an arrested subject is counted or scored in a system so that a subject is counted only once despite potentially multiple arrests at a time. | 3 |
| <a href="#offensecodesimpletype">OffenseCodeSimpleType</a> | A data type for Uniform Crime Reporting (UCR) offense codes. | 60 |
| <a href="#propertycategorycodesimpletype">PropertyCategoryCodeSimpleType</a> | A data type for categories or classifications of a property item. | 68 |
| <a href="#propertylosscodesimpletype">PropertyLossCodeSimpleType</a> | A data type for what happens to a property item. | 8 |
| <a href="#residentcodesimpletype">ResidentCodeSimpleType</a> | A data type for whether or not a person was a resident of a town, city, or community in relation to some activity. | 3 |
| <a href="#victimcategorycodesimpletype">VictimCategoryCodeSimpleType</a> | A data type for kinds of victims in an incident. | 9 |

## AggravatedAssaultHomicideFactorsCodeSimpleType

A data type for circumstances of either an aggravated assault or homicide.

| Code | Definition |
| --- | --- |
| 01 | Argument |
| 02 | Assault on Law Enforcement Officer(s) |
| 03 | Drug Dealing |
| 04 | Gangland (Organized Crime Involvement) |
| 05 | Juvenile Gang |
| 06 | Lovers' Quarrel |
| 07 | Mercy Killing (Not applicable to Aggravated Assault) |
| 08 | Other Felony Involved |
| 09 | Other Circumstances |
| 10 | Unknown Circumstances |
| 20 | Criminal Killed by Private Citizen |
| 21 | Criminal Killed by Police Officer |
| 30 | Child Playing With Weapon |
| 31 | Gun-Cleaning Accident |
| 32 | Hunting Accident |
| 33 | Other Negligent Weapon Handling |
| 34 | Other Negligent Killings |

<a href="#type-index">Back to type index</a>
## ArrestCategoryCodeSimpleType

A data type for kinds of arrests that can occur.

| Code | Definition |
| --- | --- |
| O | On-View Arrest |
| S | Summoned/ Cited |
| T | Taken Into Custody |

<a href="#type-index">Back to type index</a>
## ArresteeWeaponCodeSimpleType

A data type for weapons with which a subject may be armed with upon apprehension.

| Code | Definition |
| --- | --- |
| 01 | Unarmed |
| 11 | Firearm (type not stated) |
| 11A | Firearm (type not stated) - Automatic |
| 12 | Handgun |
| 12A | Handgun - Automatic |
| 13 | Rifle |
| 13A | Rifle - Automatic |
| 14 | Shotgun |
| 14A | Shotgun - Automatic |
| 15 | Other Firearm |
| 15A | Other Firearm - Automatic |
| 16 | Lethal Cutting Instrument |
| 17 | Club/ Blackjack/ Brass Knuckles |

<a href="#type-index">Back to type index</a>
## CriminalActivityCategoryCodeSimpleType

A data type for kinds of incidents.

| Code | Definition |
| --- | --- |
| B | buying/ receiving |
| C | cultivate/ manufacture/ publish (i.e.,production of any type) |
| D | distribute/ selling |
| E | exploiting children |
| G | other gang |
| J | juvenile gang |
| N | none/ unknown |
| O | operate/ promote/ assist |
| P | possession/ conceal |
| T | transport/ transmitting |
| U | using/ consuming |

<a href="#type-index">Back to type index</a>
## DrugCategoryCodeSimpleType

A data type for kinds of drugs.

| Code | Definition |
| --- | --- |
| A | crack cocaine |
| B | cocaine |
| C | hashish |
| D | heroin |
| E | marijuana |
| F | morphine |
| G | opium |
| H | other narcotics |
| I | LSD |
| J | PCP |
| K | other hallucingens |
| L | amphetamines/ methamphetamines |
| M | other stimulants |
| N | barbiturates |
| O | other depressants |
| P | other drugs |
| U | unknown drug type |
| X | over 3 drug types |

<a href="#type-index">Back to type index</a>
## DrugMeasurementCodeSimpleType

A data type for the kinds of measurements used to specify a quantity of drugs or narcotics.

| Code | Definition |
| --- | --- |
| DU | Dosage Units/ Items |
| FO | Fluid Ounce |
| GL | Gallon |
| GM | Gram |
| KG | Kilogram |
| LB | Pound |
| LT | Liter |
| ML | Milliliter |
| NP | Number of Plants |
| OZ | Ounce |
| XX | Not Reported |

<a href="#type-index">Back to type index</a>
## EthnicityCodeSimpleType

A data type for kinds of cultural lineages of a person.

| Code | Definition |
| --- | --- |
| H | Hispanic or Latino |
| N | Not Hispanic or Latino |
| U | Unknown |

<a href="#type-index">Back to type index</a>
## ForceCategoryCodeSimpleType

A data type for kinds of weapons or forces used by a subject in committing an offense.

| Code | Definition |
| --- | --- |
| 11 | Firearm (type not stated) |
| 11A | Automatic Firearm (type not stated) |
| 12 | Handgun |
| 12A | Automatic Handgun |
| 13 | Rifle |
| 13A | Automatic Rifle |
| 14 | Shotgun |
| 14A | Automatic Shotgun |
| 15 | Other Firearm |
| 15A | Other Automatic Firearm |
| 20 | Knife/Cutting Instrument |
| 30 | Blunt Object |
| 35 | Motor Vehicle |
| 40 | Personal Weapons |
| 50 | Poison |
| 60 | Explosives |
| 65 | Fire/ Incendiary Device |
| 70 | Drugs/ Narcotics/ Sleeping Pills |
| 85 | Asphyxiation |
| 90 | Other |
| 95 | Unknown |
| 99 | None |

<a href="#type-index">Back to type index</a>
## IncidentBiasMotivationCodeSimpleType

A data type for bias motivations for an incident.

| Code | Definition |
| --- | --- |
| 11 | Anti-White |
| 12 | Anti-Black or African American |
| 13 | Anti-American Indian or Alaskan Native |
| 14 | Anti-Asian |
| 15 | Anti-Multiple Races, Group |
| 16 | Anti-Native Hawaiian or Other Pacific Islander |
| 21 | Anti-Jewish |
| 22 | Anti-Catholic |
| 23 | Anti-Protestant |
| 24 | Anti-Islamic (Muslim) |
| 25 | Anti-Other Religion |
| 26 | Anti-Multiple Religions, Group |
| 27 | Anti-Atheism/ Agnosticism |
| 32 | Anti-Hispanic or Latino |
| 33 | Anti-Not Hispanic or Latino |
| 41 | Anti-Gay |
| 42 | Anti-Lesbian |
| 43 | Anti-Lesbian, Gay, Bisexual, or Transgender (Mixed Group) |
| 44 | Anti-Heterosexual |
| 45 | Anti-Bisexual |
| 51 | Anti-Physical Disability |
| 52 | Anti-Mental Disability |
| 61 | Anti-Male |
| 62 | Anti-Female |
| 71 | Anti-Transgender |
| 72 | Anti-Gender Non-Conforming |
| 88 | None (no bias) |
| 99 | Unknown (offender's motivation not known) |

<a href="#type-index">Back to type index</a>
## IncidentExceptionalClearanceCodeSimpleType

A data type for ways in which an incident may be cleared exceptionally.

| Code | Definition |
| --- | --- |
| A | Death of Offender |
| B | Prosecution Declined (by the prosecutor for other than lack of probable cause) |
| C | In Custody of Other Jurisdiction |
| D | Victim Refused to Cooperate (in the prosecution) |
| E | Juvenile/No Custody (the handling of a juvenile without taking him/her into custody, but rather by oral or written notice given to the parents or legal guardian in a case involving a minor offense, such as a petty larceny) |
| N | Not Applicable (not cleared exceptionally) |

<a href="#type-index">Back to type index</a>
## IncidentFactorCodeSimpleType

A data type for factors that may have been involved in or contributed to a subject committing an offense.

| Code | Definition |
| --- | --- |
| A | Alcohol |
| C | Computer Equipment |
| D | Drugs/ Narcotics |
| N | Not Applicable |

<a href="#type-index">Back to type index</a>
## InjuryCategoryCodeSimpleType

A data type for a general category of harm or injury.

| Code | Definition |
| --- | --- |
| B | apparent broken bones |
| I | possible internal injury |
| L | severe laceration |
| M | apparent minor injury |
| N | none |
| O | other major injury |
| T | loss of teeth |
| U | unconsciousness |

<a href="#type-index">Back to type index</a>
## JustifiableHomicideFactorsCodeSimpleType

A data type for circumstances of a justifiable homicide.

| Code | Definition |
| --- | --- |
| A | Criminal Attacked Police Officer and That Officer Killed Criminal |
| B | Criminal Attacked Police Officer and Criminal Killed by Another Police Officer |
| C | Criminal Attacked a Civilian |
| D | Criminal Attempted Flight From a Crime |
| E | Criminal Killed in Commission of a Crime |
| F | Criminal Resisted Arrest |
| G | Unable to Determine/Not Enough Information |

<a href="#type-index">Back to type index</a>
## LEOKAActivityCategoryCodeSimpleType

A data type for a kind of activity or circumstance in which a law enforcement officer was engaged at the time of assault.

| Code | Definition |
| --- | --- |
| 01 | Responding to Disturbance Call (Family Quarrels, Person with Firearm, Etc.) |
| 02 | Burglaries in Progress or Pursuing Burglary Suspects |
| 03 | Robberies in Progress or Pursuing Robbery Suspects |
| 04 | Attempting Other Arrests |
| 05 | Civil Disorder (Riot, Mass Disobedience) |
| 06 | Handling, Transporting, Custody of Prisoners |
| 07 | Investigating Suspicious Persons or Circumstances |
| 08 | Ambush-No Warning |
| 09 | Handling Persons with Mental Illness |
| 10 | Traffic Pursuits and Stops |
| 11 | All Other |

<a href="#type-index">Back to type index</a>
## LEOKAOfficerAssignmentCategoryCodeSimpleType

A data type for an assignment a law enforcement officer was on when assaulted.

| Code | Definition |
| --- | --- |
| F | Two-Officer Vehicle - uniformed law enforcement officers |
| G | One-Officer Vehicle (Alone) - uniformed law enforcement officers |
| H | One-Officer Vehicle (Assisted) - uniformed law enforcement officers |
| I | Detective or Special Assignment (Alone) - non-uniformed officers |
| J | Detective or Special Assignment (Assisted) - non-uniformed officers |
| K | Other (Alone) - law enforcement officers serving in other capacities (foot patrol, off duty, etc.) |
| L | Other (Assisted) - law enforcement officers serving in other capacities (foot patrol, off duty, etc.) |

<a href="#type-index">Back to type index</a>
## LocationCategoryCodeSimpleType

A data type for kinds or functional descriptions of a location.

| Code | Definition |
| --- | --- |
| 01 | air/ bus/ train terminal |
| 02 | bank/ savings and loan |
| 03 | bar/ nightclub |
| 04 | church/ synagogue/ temple/ mosque |
| 05 | commercial/ office building |
| 06 | construction site |
| 07 | convenience store |
| 08 | department/ discount/ store |
| 09 | drug store/ doctor's office/ hospital |
| 10 | field/ woods |
| 11 | government/ public building |
| 12 | grocery/ supermarket |
| 13 | highway/ road/ alley/ street/ sidewalk |
| 14 | hotel/ motel/ etc. |
| 15 | jail/ prison/ penetentiary/ corrections facility |
| 16 | lake/ waterway/ beach |
| 17 | liquor store |
| 18 | parking/ drop lot/ garage |
| 19 | rental storage facility |
| 20 | residence/ home |
| 21 | restaurant |
| 22 | school/ college |
| 23 | service/ gas station |
| 24 | specialty store |
| 25 | other/ unknown |
| 37 | Abandoned/ Condemned Structure |
| 38 | Amusement Park |
| 39 | Arena/ Stadium/ Fairgrounds/Coliseum |
| 40 | ATM Separate from Bank |
| 41 | Auto Dealership New/Used |
| 42 | Camp/ Campground |
| 44 | Daycare Facility |
| 45 | Dock/ Wharf/ Freight/Modal Terminal |
| 46 | Farm Facility |
| 47 | Gambling Facility/ Casino/ Race Track |
| 48 | Industrial Site |
| 49 | Military Installation |
| 50 | Park/ Playground |
| 51 | Rest Area |
| 52 | School - College/ University |
| 53 | School - Elementary/ Secondary |
| 54 | Shelter - Mission/ Homeless |
| 55 | Shopping Mall |
| 56 | Tribal Lands |
| 57 | Community Center |

<a href="#type-index">Back to type index</a>
## MethodOfEntryCodeSimpleType

A data type for methods of entry into a structure or premises.

| Code | Definition |
| --- | --- |
| F | Force |
| N | No Force |

<a href="#type-index">Back to type index</a>
## MultipleArresteeSegmentsCodeSimpleType

A data type for the ways in which an arrested subject is counted or scored in a system so that a subject is counted only once despite potentially multiple arrests at a time.

| Code | Definition |
| --- | --- |
| C | Count Arrestee |
| M | Multiple |
| N | Not Applicable |

<a href="#type-index">Back to type index</a>
## OffenseCodeSimpleType

A data type for Uniform Crime Reporting (UCR) offense codes.

| Code | Definition |
| --- | --- |
| 09A | Murder & Nonnegligent Manslaughter |
| 09B | Negligent Manslaughter |
| 09C | Justifiable Homicide |
| 100 | Kidnapping/Abduction |
| 11A | Rape |
| 11B | Sodomy |
| 11C | Sexual Assault With An Object |
| 11D | Fondling |
| 120 | Robbery |
| 13A | Aggravated Assault |
| 13B | Simple Assault |
| 13C | Intimidation |
| 200 | Arson |
| 210 | Extortion/Blackmail |
| 220 | Burglary/Breaking & Entering |
| 23A | Pocket-picking |
| 23B | Purse-snatching |
| 23C | Shoplifting |
| 23D | Theft From Building |
| 23E | Theft From Coin-Operated Machine or Device |
| 23F | Theft From Motor Vehicle |
| 23G | Theft of Motor Vehicle Parts or Accessories |
| 23H | All Other Larceny |
| 240 | Motor Vehicle Theft |
| 250 | Counterfeiting/Forgery |
| 26A | False Pretenses/Swindle/Confidence Game |
| 26B | Credit Card/Automated Teller Machine Fraud |
| 26C | Impersonation |
| 26D | Welfare Fraud |
| 26E | Wire Fraud |
| 270 | Embezzlement |
| 280 | Stolen Offenses |
| 290 | Destruction/Damage/Vandalism of Property |
| 35A | Drug/Narcotic Violations |
| 35B | Drug Equipment Violations |
| 36A | Incest |
| 36B | Statutory Rape |
| 370 | Pornography/Obscene Material |
| 39A | Betting/Wagering |
| 39B | Operating/Promoting/Assisting Gambling |
| 39C | Gambling Equipment Violation |
| 39D | Sports Tampering |
| 40A | Prostitution |
| 40B | Assisting or Promoting Prostitution |
| 40C | Purchasing Prostitution |
| 510 | Bribery |
| 520 | Weapon Law Violations |
| 64A | Human Trafficking, Commercial Sex Acts |
| 64B | Human Trafficking, Involuntary Servitude |
| 90A | Bad Checks |
| 90B | Curfew/Loitering/Vagrancy Violations |
| 90C | Disorderly Conduct |
| 90D | Driving Under the Influence |
| 90E | Drunkenness |
| 90F | Family Offenses, Nonviolent |
| 90G | Liquor Law Violations |
| 90H | Peeping Tom |
| 90I | Runaway |
| 90J | Trespass of Real |
| 90Z | All Other Offenses |

<a href="#type-index">Back to type index</a>
## PropertyCategoryCodeSimpleType

A data type for categories or classifications of a property item.

| Code | Definition |
| --- | --- |
| 01 | aircraft |
| 02 | alcohol |
| 03 | automobile |
| 04 | bicycles |
| 05 | buses |
| 06 | clothes/ furs |
| 07 | computer hardware/ software |
| 08 | consumable goods |
| 09 | credit/ debit cards |
| 10 | drugs/ narcotics |
| 11 | drug/ narcotic equipment |
| 12 | farm equipment |
| 13 | firearms |
| 14 | gambling equipment |
| 15 | heavy construction/ industrial equipment |
| 16 | household goods |
| 17 | jewelry/ precious metals/ gems |
| 18 | livestock |
| 19 | merchandise |
| 20 | money |
| 21 | negotiable instruments |
| 22 | nonnegotiable instruments |
| 23 | office-type equipment |
| 24 | other motor vehicles |
| 25 | purses/ handbags/ wallets |
| 26 | radios/ tvs/ vcrs/ dvd players |
| 27 | recordings - audio/ visual |
| 28 | recreational vehicles |
| 29 | structures - single occupancy dwellings |
| 30 | structures - other dwellings |
| 31 | structures - other commercial/ business |
| 32 | structures - industrial/ manufacturing |
| 33 | structures - public/ community |
| 34 | structures - storage |
| 35 | structures - other |
| 36 | tools |
| 37 | trucks |
| 38 | vehicle parts/ accessories |
| 39 | watercraft |
| 41 | aircraft parts/ accessories |
| 42 | artistic supplies/ accessories |
| 43 | building materials |
| 44 | Camping/ Hunting/ Fishing Equipment/ Supplies |
| 45 | Chemicals |
| 46 | Collections/ Collectibles |
| 47 | Crops |
| 48 | Documents/ Personal or Business |
| 49 | Explosives |
| 59 | Firearm Accessories |
| 64 | Fuel |
| 65 | Identity Documents |
| 66 | Identity - Intangible |
| 67 | Law Enforcement Equipment |
| 68 | Lawn/ Yard/ Garden Equipment |
| 69 | Logging Equipment |
| 70 | Medical/ Medical Lab Equipment |
| 71 | Metals, Non-Precious |
| 72 | Musical Instruments |
| 73 | Pets |
| 74 | Photographic/ Optical Equipment |
| 75 | Portable Electronic Communications |
| 76 | Recreational/ Sports Equipment |
| 77 | Other |
| 78 | Trailers |
| 79 | Watercraft Equipment/Parts/Accessories |
| 80 | Weapons - Other |
| 88 | Pending Inventory |
| 99 | (blank) - this data value is not currently used by the FBI |

<a href="#type-index">Back to type index</a>
## PropertyLossCodeSimpleType

A data type for what happens to a property item.

| Code | Definition |
| --- | --- |
| 01 | none |
| 02 | burned |
| 03 | counterfeited/ forged |
| 04 | destroyed/ damaged |
| 05 | recovered |
| 06 | seized |
| 07 | stolen |
| 08 | unknown |

<a href="#type-index">Back to type index</a>
## ResidentCodeSimpleType

A data type for whether or not a person was a resident of a town, city, or community in relation to some activity.

| Code | Definition |
| --- | --- |
| N | Nonresident |
| R | Resident |
| U | Unknown |

<a href="#type-index">Back to type index</a>
## VictimCategoryCodeSimpleType

A data type for kinds of victims in an incident.

| Code | Definition |
| --- | --- |
| B | Business |
| F | Financial Institution |
| G | Government |
| I | Individual |
| L | Law Enforcement Officer |
| O | Other |
| R | Religious Organization |
| S | Society/ Public |
| U | Unknown |

<a href="#type-index">Back to type index</a>
