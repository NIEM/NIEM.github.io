---
   title: it_codes
---

**Prefix:** itcodes

IT Codes

<a href="http://release.niem.gov/niem/codes/it_codes/4.0/it_codes.xsd">XML Schema</a>

## Type Index

| Type | Definition | Code Count |
| --- | --- | --- |
| <a href="#apportionmentqualifiercategorycodesimpletype">ApportionmentQualifierCategoryCodeSimpleType</a> | A data type for the different categories of  an apportioned conveyance. | 2 |
| <a href="#containeriso6346codesimpletype">ContainerISO6346CodeSimpleType</a> | A data type for ISO 6346 shipping container codes. | 22 |
| <a href="#containerkindcodesimpletype">ContainerKindCodeSimpleType</a> | A data type for the kinds of shipping container. | 6 |
| <a href="#conveyancerelationshipkindcodesimpletype">ConveyanceRelationshipKindCodeSimpleType</a> | A data type for the relationship that describes the way  in which the different conveyances are connected to each other | 3 |
| <a href="#documentcategorycodesimpletype">DocumentCategoryCodeSimpleType</a> | A data type for the code that represents the kind of document that it represents. | 605 |
| <a href="#dutytaxfeecategorycodesimpletype">DutyTaxFeeCategoryCodeSimpleType</a> | A data type for a DutyTaxFeeCategory | 50 |
| <a href="#dutytaxpaymentmethodcodesimpletype">DutyTaxPaymentMethodCodeSimpleType</a> | A data type for a code set that denotes the methods of payment for Duty Tax | 15 |
| <a href="#examinationplacecategorycodesimpletype">ExaminationPlaceCategoryCodeSimpleType</a> | A data type for a category of Examination Place | 536 |
| <a href="#locationactivitycodesimpletype">LocationActivityCodeSimpleType</a> | A data type for the kinds of facilities. | 50 |
| <a href="#locationfunctioncodesimpletype">LocationFunctionCodeSimpleType</a> | A data type for a location categorized on the function that it performs | 253 |
| <a href="#locationkindcodesimpletype">LocationKindCodeSimpleType</a> | A data type for the kinds of locations that may appear on an itinerary. | 4 |
| <a href="#measureunitcodesimpletype">MeasureUnitCodeSimpleType</a> | A data type representing the type measure unit whether area, volume etc.. | 4 |
| <a href="#packagingformcodesimpletype">PackagingFormCodeSimpleType</a> | A data type for the various forms of packaging. | 46 |
| <a href="#processingestablishmentidcodesimpletype">ProcessingEstablishmentIDCodeSimpleType</a> | A data type for a the identification code specifying the slaughtering, freezing, or other processing establishment. | 2 |
| <a href="#roleofpartycategorycodesimpletype">RoleOfPartyCategoryCodeSimpleType</a> | A data type for the category of role played by the Party/Organization in the given context of a transaction | 27 |
| <a href="#sealintactstatuscodesimpletype">SealIntactStatusCodeSimpleType</a> | A data type for the status conditions of seal. | 3 |
| <a href="#sealverificationstatuscodesimpletype">SealVerificationStatusCodeSimpleType</a> | A data type for the status of seal verification. | 3 |
| <a href="#shapecodesimpletype">ShapeCodeSimpleType</a> | A data type for the kinds of geometric shapes. | 7 |
| <a href="#statuscodesimpletype">StatusCodeSimpleType</a> | A data type for a status in the process | 138 |
| <a href="#transportmeanscodesimpletype">TransportMeansCodeSimpleType</a> | A data type for the code that represents the kind of Transport means. | 4 |
| <a href="#unececategorycodesimpletype">UNECECategoryCodeSimpleType</a> | A data type for the UNECE Categorization of the container/Packaging. | 347 |
| <a href="#volumemeasureunitcodesimpletype">VolumeMeasureUnitCodeSimpleType</a> | A data type for the units of measure in which volume may be expressed. | 92 |

## ApportionmentQualifierCategoryCodeSimpleType

A data type for the different categories of  an apportioned conveyance.

| Code | Definition |
| --- | --- |
| a | a = by weight |
| b | b = by value |

<a href="#type-index">Back to type index</a>
## ContainerISO6346CodeSimpleType

A data type for ISO 6346 shipping container codes.

| Code | Definition |
| --- | --- |
| 20PF | 20x8x8 Flat (fixed ends) |
| 20TD | 20x8x8 Tank dangerous liquids (test pressure 4 bar) |
| 22GP | 20x8x86" General Purpose |
| 22PC | 20x8x86" Flat (collapsible) |
| 22PF | 20x8x86" Flat (fixed ends) |
| 22RT | 20x8x86" Refrigerated |
| 22TD | 20x8x86" Tank dangerous liquids |
| 22TN | 20x8x86" Tank non-dangerous liquids |
| 22UP | 20x8x86" Hardtop |
| 22UT | 20x8x86" Open Top |
| 22VH | 20x8x86" Ventilated |
| 42GP | 40x8x86" General Purpose |
| 42PC | 40x8x86" Flat (collapsible) |
| 42PF | 40x8x86" Flat (fixed ends) |
| 42RC | 40x8x86" Refrigerated (not to be used for foodstuffs) |
| 42UP | 40x8x86" Hardtop |
| 42UT | 40x8x86" Open Top |
| 45GP | 40x8x96" High Cube General Purpose |
| 45PC | 40x8x96" Flat (collapsible) |
| 45RC | 40x8x96" Refrigerated (not to be used for foodstuffs) |
| 45RT | 40x8x96" Refrigerated |
| 45UP | 40x8x96" High Cube Hardtop |

<a href="#type-index">Back to type index</a>
## ContainerKindCodeSimpleType

A data type for the kinds of shipping container.

| Code | Definition |
| --- | --- |
| Dry | A shipping container for dry goods. |
| Flatrack/Platform | A shipping container that is a platform or flatrack. |
| Insulated | A shipping container that is insulated. |
| Open Top | A shipping container that has an open top. |
| Refrigerated | A shipping container that includes refrigeration capability. |
| Tank | A shipping container that is a tank for holding liquids. |

<a href="#type-index">Back to type index</a>
## ConveyanceRelationshipKindCodeSimpleType

A data type for the relationship that describes the way  in which the different conveyances are connected to each other

| Code | Definition |
| --- | --- |
| connected to | A conveyance connected to another conveyance, such as a trailer connected to the tractor in a truck, or a railcar in a train consist. |
| contained in | A conveyance contained on or in another conveyance, such as a container on a ship or a railcar. |
| other | The relationship between the two conveyances is other than contained in or connected to. |

<a href="#type-index">Back to type index</a>
## DocumentCategoryCodeSimpleType

A data type for the code that represents the kind of document that it represents.

| Code | Definition |
| --- | --- |
| Acknowledgement message | Message providing acknowledgement information at the business application level concerning the processing of a message. |
| Acknowledgement of change of supplier | Acknowledgement of the change of supplier. |
| Acknowledgement of order | Document/message acknowledging an undertaking to fulfil an order and confirming conditions or acceptance of conditions. |
| A claim for parts and/or labour charges | A claim for parts and/or labour charges incurred . |
| AdditionalDocument | Additional Documents that support the original Documents |
| Advice of an amendment of a documentary credit | Advice of an amendment of a documentary credit. |
| Advice of collection | (1030) Document that is joined to the transport or sent by separate means, giving to the departure rail organization the proof that the cash-on delivery amount has been encashed by the arrival rail organization before reimbursement of the consignor. |
| Advice of distribution of documents | Document/message in which the party responsible for the issue of a set of trade documents specifies the various recipients of originals and copies of these documents, with an indication of the number of copies distributed to each of them. |
| Advising items to be booked to a financial account | A document and/or message advising of items which have to be booked to a financial account. |
| Agreement to pay | Document/message in which the debtor expresses the intention to pay. |
| Air waybill | Document/message made out by or on behalf of the shipper which evidences the contract between the shipper and carrier(s) for carriage of goods over routes of the carrier(s) and which is identified by the airline prefix issuing the document plus a serial (IATA). |
| Application acknowledgement and error report | A message used by an application to acknowledge reception of a message and/or to report any errors. |
| Application error and acknowledgement | A message to inform a message issuer that a previously sent message has been received by the addressees application, or that a previously sent message has been rejected by the addressees application. |
| Application error message | Message indicating that a message was rejected due to errors encountered at the application level. |
| Application for banker's draft | Application by a customer to his bank to issue a bankers draft stating the amount and currency of the draft, the name of the payee and the place and country of payment. |
| Application for banker's guarantee | Document/message whereby a customer requests his bank to issue a guarantee in favour of a nominated party in another country, stating the amount and currency and the specific conditions of the guarantee. |
| Application for designation of berthing places | Document to apply for designation of berthing places. |
| Application for documentary credit | Message with application for opening of a documentary credit. |
| Application for exchange allocation | Document/message whereby an importer/buyer requests the competent body to allocate an amount of foreign exchange to be transferred to an exporter/seller in payment for goods. |
| Application for goods control certificate | Document/message submitted to a competent body by party requesting a Goods control certificate to be issued in accordance with national or international standards, or conforming to legislation in the importing country, or as specified in the contract. |
| Application for inspection certificate | Document/message submitted to a competent body by a party requesting an Inspection certificate to be issued in accordance with national or international standards, or conforming to legislation in the country in which it is required, or as specified in the contract. |
| Application for phytosanitary certificate | Document/message submitted to a competent body by party requesting a Phytosanitary certificate to be issued. |
| Application for shifting from the designated place in port | Document to apply for shifting from the designated place in port. |
| Application for usage of berth or mooring facilities | Document to apply for usage of berth or mooring facilities. |
| Application for vessel's entering into port area in night-time | Document to apply for vessels entering into port area in night-time. |
| Approved unpriced bill of quantity | Document/message providing an approved detailed, quantity based specification (bill of quantity), in an unpriced form. |
| Arrival information | Message reporting the arrival details of goods or cargo. |
| Arrival notice (goods) | Notification from the carrier to the consignee in writing, by telephone or by any other means (express letter, message, telegram, etc.) informing him that a consignment addressed to him is being or will shortly be held at his disposal at a specified point in the place of destination. |
| ATA carnet | International Customs document (Admission Temporaire / Temporary Admission) which, issued under the terms of the ATA Convention (1961), incorporates an internationally valid guarantee and may be used, in lieu of national Customs documents and as security for import duties and taxes, to cover the temporary admission of goods and, where appropriate, the transit of goods. If accepted for controlling the temporary export and reimport of goods, international guarantee does not apply (CCC). |
| Authorisation to plan and ship orders | Document or message that authorises receiver to plan and ship orders based on information in this message. |
| Authorisation to plan and suggest orders | Document or message that authorises receiver to plan orders, based on information in this message, and send these orders as suggestions to the sender. |
| Bailment contract | A document authorizing the bailing of goods. |
| Balance confirmation | Confirmation of a balance at an entry date. |
| Banker's draft | Draft drawn in favour of a third party either by one bank on another bank, or by a branch of a bank on its head office (or vice versa) or upon another branch of the same bank. In either case, the draft should comply with the specifications laid down for cheques in the country in which it is to be payable. |
| Banker's guarantee | Document/message in which a bank undertakes to pay out a limited amount of money to a designated party, on conditions stated therein (other than those laid down in the Uniform Customs Practice). |
| Banking status | A banking status document and/or message. |
| Bank to bank funds transfer | The message is a bank to bank funds transfer. |
| Basic agreement | A document indicating an agreement containing basic terms and conditions applicable to future contracts between two parties. |
| Bill of exchange | Document/message, issued and signed in conformity with the applicable legislation, which contains an unconditional order whereby the drawer directs the drawee to pay a definite sum of money to the payee or to his order, on demand or at a definite time, against the surrender of the document itself. |
| Bill of lading | Negotiable document/message which evidences a contract of carriage by sea and the taking over or loading of goods by carrier, and by which carrier undertakes to deliver goods against surrender of the document. A provision in the document that goods are to be delivered to the order of a named person, or to order, or to bearer, constitutes such an undertaking. |
| Bill of lading copy | A copy of the bill of lading issued by a transport company. |
| Bill of lading original | The original of the bill of lading issued by a transport company. When issued by the maritime industry it could signify ownership of the cargo. |
| Blanket order | Usage of document/message for general order purposes with later split into quantities and delivery dates and maybe delivery locations. |
| Booking confirmation | Document/message issued by a carrier to confirm that space has been reserved for a consignment in means of transport. |
| Booking request | Document/message issued by a supplier to a carrier requesting space to be reserved for a specified consignment, indicating desirable conveyance, despatch time, etc. |
| Bordereau | Document/message used in road transport, listing the cargo carried on a road vehicle, often referring to appended copies of Road consignment note. |
| Buy America certificate of compliance | A document certifying that more than 50 percent of the cost of an item is attributed to US origin. |
| Calling forward notice | Instructions for release or delivery of goods. |
| Call-off delivery | Document/message to provide split quantities and delivery dates referring to a previous delivery instruction. |
| Call off order | Document/message to provide split quantities and delivery dates referring to a previous blanket order. |
| Campaign price/sales catalogue | A price/sales catalogue containing special prices which are valid only for a specified period or under specified conditions. |
| Cargo acceptance order | Order to accept cargo to be delivered by a carrier. |
| Cargo analysis voyage report | An analysis of the cargo for a voyage. |
| Cargo declaration (arrival) | Generic term, sometimes referred to as Freight declaration, applied to the documents providing the particulars required by the Customs concerning the cargo (freight) carried by commercial means of transport (CCC). |
| Cargo declaration (departure) | Generic term, sometimes referred to as Freight declaration, applied to the documents providing the particulars required by the Customs concerning the cargo (freight) carried by commercial means of transport (CCC). |
| Cargo manifest | Listing of goods comprising the cargo carried in a means of transport or in a transport-unit. The cargo manifest gives the commercial particulars of the goods, such as transport document numbers, consignors, consignees, shipping marks, number and kind of packages and descriptions and quantities of the goods. |
| Cargo movement event log | A document detailing times and dates of events pertaining to a cargo movement. |
| Cargo movement voyage summary | A consolidated voyage summary which contains the information in a certificate of analysis, a voyage analysis and a cargo movement time log for a voyage. |
| Cargo release notification | Message/document sent by the cargo handler indicating that the cargo has moved from a Customs controlled premise. |
| Cargo status | Message identifying the status of cargo. |
| Cargo vessel discharge order | Order that the containers or cargo specified are to be discharged from a vessel. |
| Cargo vessel loading order | Order that specified cargo, containers or groups of containers are to be loaded in or on a vessel. |
| Cartage order (local transport) | Document/message giving instructions regarding local transport of goods, e.g. from the premises of an enterprise to those of a carrier undertaking further transport. |
| Cash pool financial statement | A financial statement for a cash pool. |
| Casing sanitary certificate | Document or message issued by the competent authority in the exporting country evidencing that casing products comply with the requirements set by the importing country. |
| Certificate | Document by means of which the documentary credit applicant specifies the conditions for the certificate and by whom the certificate is to be issued. |
| Certificate of analysis | Certificate providing the values of an analysis. |
| Certificate of conformity | Certificate certifying the conformity to predefined definitions. |
| Certificate of disembarkation permission | Document or message issuing permission to disembark. |
| Certificate of origin | Document/message identifying goods, in which the authority or body authorized to issue it certifies expressly that the goods to which the certificate relates originate in a specific country. The word "country" may include a group of countries, a region or a part of a country. This certificate may also include a declaration by the manufacturer, producer, supplier, exporter or other competent person. |
| Certificate of origin, application for | Document/message submitted to a competent body by an interested party requesting a Certificate of origin to be issued in accordance with relevant criteria, and on the basis of evidence of the origin of the goods. |
| Certificate of origin form GSP | Specific form of certificate of origin for goods qualifying for preferential treatment under the generalized system of preferences (includes a combined declaration of origin and certificate, form A). |
| Certificate of quality | Certificate certifying the quality of goods, services etc. |
| Certificate of quantity | Certificate certifying the quantity of goods, services etc. |
| Certificate of registry | Official certificate stating the vessels registry. |
| Certificate of sealing of export meat lockers | Document / message issued by the authority in the exporting country evidencing the sealing of export meat lockers. |
| Certificate of shipment | Certificate providing confirmation that a consignment has been shipped. |
| Certified cost and price data | A document indicating cost and price data whose accuracy has been certified. |
| Certified inspection and test results | A certification as to the accuracy of inspection and test results. |
| Chargeback | Document/message issued by a factor to a seller or to another factor to indicate that the rest of the amounts of one or more invoices uncollectable from buyers are charged back to clear the invoice(s) off the ledger. |
| Charges note | Document used by the rail organization to indicate freight charges or additional charges in each case where the departure station is not able to calculate the charges for the total voyage (e.g. tariff not yet updated, part of voyage not covered by the tariff). This document must be considered as joined to the transport. |
| Civil liability for oil certificate | Document declaring a ship owners liability for oil propelling or carried on a vessel. |
| Closing statement of an account | Last statement of a period containing the interest calculation and the final balance of the last entry date. |
| Code change request | Request a change to an existing code. |
| Co-insurance ceding bordereau | The document or message contains a bordereau describing co-insurance ceding information. |
| Collateral account | Document message issued by a factor to indicate the movements of invoices, credit notes and payments of a sellers account. |
| Collection order | Document/message whereby a bank is instructed (or requested) to handle financial and/or commercial documents in order to obtain acceptance and/or payment, or to deliver documents on such other terms and conditions as may be specified. |
| Collection payment advice | Document/message whereby a bank advises that a collection has been paid, giving details and methods of funds disposal. |
| Combined certificate of value and origin | Document identifying goods in which the issuing authority expressly certifies that the goods originate in a specific country or part of, or group of countries. It also states the price and/or cost of the goods with the purpose of determining the customs origin. |
| Combined transport bill of lading/multimodal bill of lading | Document which evidences a multimodal transport contract, the taking in charge of the goods by the multimodal transport operator, and an undertaking by him to deliver the goods in accordance with the terms of the contract. |
| Combined transport document (generic) | Negotiable or non-negotiable document evidencing a contract for the performance and/or procurement of performance of combined transport of goods and bearing on its face either the heading "Negotiable combined transport document issued subject to Uniform Rules for a Combined Transport Document (ICC Brochure No. 298)" or the heading "Non-negotiable Combined Transport Document issued subject to Uniform Rules for a Combined Transport Document (ICC Brochure No. 298)". |
| Commercial account summary response | A document providing a response to a previously sent commercial account summary message. |
| Commercial dispute | Document/message issued by a party (usually the buyer) to indicate that one or more invoices or one or more credit notes are disputed for payment. |
| Commercial invoice | Document/message claiming payment for goods or services supplied under conditions agreed between seller and buyer. |
| Commercial invoice which includes a packing list | Commercial transaction (invoice) will include a packing list. |
| Commission note | Document/message in which a seller specifies the amount of commission, the percentage of the invoice amount, or some other basis for the calculation of the commission to which a sales agent is entitled. |
| Composite data element change request | Request a change to an existing composite data element. |
| Composite data element request | Requesting a new composite data element. |
| Consignment invoice | Commercial invoice that covers a transaction other than one involving a sale. |
| Consignment order | Order to deliver goods into stock with agreement on payment when goods are sold out of this stock. |
| Consignment status report | Message covers information about the consignment status. |
| Consignment unpack report | A document code to indicate that the message being transmitted is a consignment unpack report only. |
| Consolidated credit note - goods and services | Credit note for goods and services that covers multiple transactions involving more than one invoice. |
| Consolidated invoice | Commercial invoice that covers multiple transactions involving more than one vendor. |
| Consular invoice | Document/message to be prepared by an exporter in his country and presented to a diplomatic representation of the importing country for endorsement and subsequently to be presented by the importer in connection with the import of the goods described therein. |
| Container discharge list | Message/document itemising containers to be discharged from vessel. |
| Container list | Document or message issued by party identifying the containers for which they are responsible. |
| Container manifest (unit packing list) | Document/message specifying the contents of particular freight containers or other transport units, prepared by the party responsible for their loading into the container or unit. |
| Container off-hire notice | Notice to return leased containers. |
| Container stripping order | Order to unload goods from a container. |
| Container stuffing order | Order to stuff specified goods or consignments in a container. |
| Container transfer note | Document for the carriage of containers. Syn: transfer note. |
| Contract | (1296) Document/message evidencing an agreement between the seller and the buyer for the supply of goods or services; its effects are equivalent to those of an order followed by an acknowledgement of order. |
| Contract bill of quantities - BOQ | Document/message providing a formal specification identifying quantities and prices that are the basis of a contract for a construction project. BOQ means: Bill of quantity. |
| Contract Funds Status Report (CFSR) | A report to provide the status of funds applicable to the contract. |
| Contract security classification specification | A document that indicates the specification contains the security and classification requirements for a contract. |
| Control document T5 | Control document (export declaration) used particularly in case of re-sending without use with only VAT collection, refusal, unconformity with contract etc. |
| Conveyance declaration (arrival) | Declaration to the public authority upon arrival of the conveyance. |
| Conveyance declaration (combined) | Combined declaration of arrival and departure to the public authority. |
| Conveyance declaration (departure) | Declaration to the public authority upon departure of the conveyance. |
| Corporate superannuation contributions advice | Document/message providing contributions advice used for corporate superannuation schemes. |
| Corporate superannuation member maintenance message | Member maintenance message used for corporate superannuation schemes. |
| Corrected invoice | Commercial invoice that includes revised information differing from an earlier submission of the same invoice. |
| Cost data summary | A document indicating a summary of cost data. |
| Cost performance report | A report to convey cost performance data for a project or contract. |
| Cost Performance Report (CPR) format 1 | A report identifying the cost performance on a contract including the current months values at specified levels of the work breakdown structure (format 1 - work breakdown structure). |
| Cost Performance Report (CPR) format 2 | A report identifying the cost performance on a contract at specified levels of the work breakdown structure (format 2 - organizational categories). |
| Cost Performance Report (CPR) format 3 | A report identifying the cost performance on a contract that summarizes changes to a contract over a given reporting period with beginning and ending values (format 3 - baseline). |
| Cost Performance Report (CPR) format 4 | A report identifying the cost performance on a contract including forecasts of labour requirements for the remaining portion of the contract (format 4 - staffing). |
| Cost Performance Report (CPR) format 5 | A report identifying the cost performance on a contract that summarizes cost or schedule variances (format 5 - explanations and problem analysis). |
| Cost Schedule Status Report (CSSR) | A report providing the status of the cost and schedule applicable to a contract. |
| Cover note | Document/message issued by an insurer (insurance broker, agent, etc.) to notify the insured that his insurance have been carried out. |
| Credit advice | Document/message sent by an account servicing institution to one of its account owners, to inform the account owner of an entry which has been or will be credited to its account for a specified amount on the date indicated. |
| Credit cover | Document/message issued either by a factor to give a credit cover on a buyer, or by a seller to request a factors credit cover. |
| Credit note | Document/message for providing credit information to the relevant party. |
| Credit note for price variation | A credit note which is issued against a price variation invoice. |
| Credit note related to financial adjustments | Document message for providing credit information related to financial adjustments to the relevant party, e.g., bonuses. |
| Credit note related to goods or services | Document message used to provide credit information related to a transaction for goods or services to the relevant party. |
| Crew list declaration | Declaration regarding crew members aboard the conveyance. |
| Crew's effects declaration | Declaration to Customs regarding the personal effects of crew members aboard the conveyance; equivalent to IMO FAL 4. |
| Cross docking despatch advice | Document by means of which the supplier or consignor informs the buyer, consignee or the distribution centre about the despatch of goods for cross docking. |
| Cross docking services order | A document or message to order cross docking services. |
| Current account | Document/message issued by a factor to indicate the money movements of a sellers or another factors account with him. |
| Customer payment order(s) | The message contains customer payment order(s). |
| Customs clearance notice | Notification of customs clearance of cargo or items of transport equipment. |
| Customs crew and conveyance | Document/message contains information regarding the crew list and conveyance. |
| Customs declaration for cargo examination | Declaration provided to customs for cargo examination. |
| Customs declaration for cargo examination, alternate | Alternate declaration provided to customs for cargo examination. |
| Customs declaration (post parcels) | Document/message which, according to Article 106 of the "Agreement concerning Postal Parcels" under the UPU Convention, must accompany post parcels and in which the contents of such parcels are specified. |
| Customs declaration with commercial and item detail | CUSDEC transmission that includes data from both the commercial detail and item detail sections of the message. |
| Customs declaration without commercial detail | CUSDEC transmission that does not include data from the commercial detail section of the message. |
| Customs declaration without item detail | CUSDEC transmission that does not include data from the item detail section of the message. |
| Customs delivery note | Document/message whereby a Customs authority releases goods under its control to be placed at the disposal of the party concerned. Synonym: Customs release note. |
| Customs documents expiration notice | Notice specifying expiration of Customs documents relating to cargo or items of transport equipment. |
| Customs immediate release declaration | Document/message issued by an importer notifying Customs that goods have been removed from an importing means of transport to the importers premises under a Customs- approved arrangement for immediate release, or requesting authorization to do so. |
| Customs invoice | Document/message required by the Customs in an importing country in which an exporter states the invoice or other price (e.g. selling price, price of identical goods), and specifies costs for freight, insurance and packing, etc., terms of delivery and payment, for the purpose of determining the Customs value in the importing country of goods consigned to that country. |
| Customs manifest | Message/document identifying a customs manifest. The document itemises a list of cargo prepared by shipping companies from bills of landing and presented to customs for formal report of cargo. |
| Customs summary declaration with commercial detail, alternate | Alternate Customs declaration summary with commercial transaction details. |
| Customs summary declaration without commercial detail, alternate | Alternate Customs declaration summary without any commercial transaction details. |
| Damage certification | Official certification that damages to the goods to be transported have been discovered. |
| Dangerous goods declaration | Document/message issued by a consignor in accordance with applicable conventions or regulations, describing hazardous goods or materials for transport purposes, and stating that the latter have been packed and labelled in accordance with the provisions of the relevant conventions or regulations. |
| Dangerous goods list | Listing of all details of dangerous goods carried. |
| Debit advice | Advice on a debit. |
| Debit note | Document/message for providing debit information to the relevant party. |
| Debit note related to financial adjustments | Document/message for providing debit information related to financial adjustments to the relevant party. |
| Debit note related to goods or services | Debit information related to a transaction for goods or services to the relevant party. |
| DeclarationDocument | Document delcaring the Cargo |
| Declaration of origin | Appropriate statement as to the origin of the goods, made in connection with their exportation by the manufacturer, producer, supplier, exporter or other competent person on the Commercial invoice or any other document relating to the goods (CCC). |
| Declaration regarding the inward and outward movement of vessel | Document to declare inward and outward movement of a vessel. |
| Delcredere credit note | A credit note sent to the party paying on behalf of a number of buyers. |
| Delcredere invoice | An invoice sent to the party paying for a number of buyers. |
| Delivery forecast | A message which enables the transmission of delivery or product forecasting requirements. |
| Delivery instructions | (1174) Document/message giving instruction regarding the delivery of goods. |
| Delivery just-in-time | Usage of DELJIT-message. |
| Delivery note | Paper document attached to a consignment informing the receiving party about contents of this consignment. |
| Delivery notice (goods) | Notification in writing, sent by the carrier to the sender, to inform him at his request of the actual date of delivery of the goods. |
| Delivery notice (rail transport) | Document/message created by the consignor or by the departure station, joined to the transport or sent to the consignee, giving the possibility to the consignee or the arrival station to attest the delivery of the goods. The document must be returned to the consignor or to the departure station. |
| Delivery order | Document/message issued by a party entitled to authorize the release of goods specified therein to a named consignee, to be retained by the custodian of the goods. |
| Delivery release | Document/message issued by a buyer releasing the despatch of goods after receipt of the Ready for despatch advice from the seller. |
| Delivery schedule | Usage of DELFOR-message. |
| Delivery schedule response | A message providing a response to a previously transmitted delivery schedule. |
| Delivery verification certificate | Document/message whereby an official authority (Customs or governmental) certifies that goods have been delivered. |
| Derat document | Document certifying that a ship is free of rats, valid to a specified date. |
| Deratting exemption certificate | Document certifying that the object was free of rats when inspected and that it is exempt from a deratting statement. |
| Despatch advice | Document/message by means of which the seller or consignor informs the consignee about the despatch of goods. |
| Despatch note model T | European community transit declaration. |
| Despatch note model T1 | Transit declaration for goods circulating under internal community transit procedures (between European Union (EU) countries). |
| Despatch note model T2 | Ascertainment that the declared goods were originally produced in an European Union (EU) country. |
| Despatch note model T2L | Ascertainment that the declared goods were originally produced in an European Union (EU) country. May only be used for goods that are loaded on one single means of transport in one single departure point for one single delivery point. |
| Despatch note (post parcels) | Document/message which, according to Article 106 of the "Agreement concerning Postal Parcels" under the UPU convention, is to accompany post parcels. |
| Despatch order | Document/message issued by a supplier initiating the despatch of goods to a buyer (consignee). |
| Direct delivery (transport) | Document/message ordering the direct delivery of goods/consignment from one means of transport into another means of transport in one movement. |
| Direct payment valuation | Document/message addressed, for instance, by a general contractor to the owner, in order that a direct payment be made to a subcontractor. |
| Direct payment valuation request | Request to establish a direct payment valuation. |
| Documentary credit | Document/message in which a bank states that it has issued a documentary credit under which the beneficiary is to obtain payment, acceptance or negotiation on compliance with certain terms and conditions and against presentation of stipulated documents and such drafts as may be specified. The credit may or may not be confirmed by another bank. |
| Documentary credit acceptance advice | Document/message whereby a bank advises acceptance under a documentary credit. |
| Documentary credit amendment | Document/message whereby a bank notifies a beneficiary of the details of an amendment to the terms and conditions of a documentary credit. |
| Documentary credit amendment information | Documentary credit amendment information. |
| Documentary credit amendment notification | Document/message whereby a bank advises that the terms and conditions of a documentary credit have been amended. |
| Documentary credit application | Document/message whereby a bank is requested to issue a documentary credit on the conditions specified therein. |
| Documentary credit collection instruction | Instruction for the collection of the documentary credit. |
| Documentary credit issuance information | Provides information on documentary credit issuance. |
| Documentary credit letter of indemnity | Document/message in which a beneficiary of a documentary credit accepts responsibility for non-compliance with the terms and conditions of the credit, and undertakes to refund the money received under the credit, with interest and charges accrued. |
| Documentary credit negotiation advice | Document/message whereby a bank advises negotiation under a documentary credit. |
| Documentary credit notification | Document/message issued by an advising bank in order to transmit a documentary credit to a beneficiary, or to another advising bank. |
| Documentary credit payment advice | Document/message whereby a bank advises payment under a documentary credit. |
| Documentary credit transfer advice | Document/message whereby a bank advises that (part of) a documentary credit is being or has been transferred in favour of a second beneficiary. |
| Document response (Customs) | Document response message to permit the transfer of data from Customs to the transmitter of the previous message. |
| Documents presentation form | Document/message whereby a draft or similar instrument and/or commercial documents are presented to a bank for acceptance, discounting, negotiation, payment or collection, whether or not against a documentary credit. |
| Draft bill of quantity | Document/message providing a draft bill of quantity, issued in an unpriced form. |
| Drawing | The document or message is a drawing. |
| Driving licence (international) | An official document giving a native of one country permission to drive a vehicle in certain other countries. |
| Driving licence (national) | An official document giving permission to drive a car in a given country. |
| EC carnet | EC customs transit document issued by EC customs authorities for transit and/or temporary user of goods within the EC. |
| EDI associated object administration message | A message giving additional information about the exchange of an EDI associated object. |
| Embargo permit | Document/message giving the permission to export specified goods. |
| Empty container bill | Bill of lading indicating an empty container. |
| Empty container disposition order | Order to make available empty containers. |
| End use authorization | Document issued by Customs granting the end-use Customs procedure. |
| Enquiry | Document/message issued by a party interested in the purchase of goods specified therein and indicating particular, desirable conditions regarding delivery terms, etc., addressed to a prospective supplier with a view to obtaining an offer. |
| Error response (Customs) | Error response message to permit the transfer of data from Customs to the transmitter of the previous message. |
| Escort official recognition | Document/message which gives right to the owner to exert all functions normally transferred to a guard in a train by which an escorted consignment is transported. |
| Estimated priced bill of quantity | An estimate based upon a detailed, quantity based specification (bill of quantity). |
| EUR 1 certificate of origin | Customs certificate used in preferential goods interchanges between EC countries and EC external countries. |
| Exceptional order | An order which falls outside the framework of an agreement. |
| Exchange control declaration, export | Document/message completed by an exporter/seller as a means whereby the competent body may control that the amount of foreign exchange accrued from a trade transaction is repatriated in accordance with the conditions of payment and exchange control regulations in force. |
| Exchange control declaration (import) | Document/message completed by an importer/buyer as a means for the competent body to control that a trade transaction for which foreign exchange has been allocated has been executed and that money has been transferred in accordance with the conditions of payment and the exchange control regulations in force. |
| Excise certificate | Certificate asserting that the goods have been submitted to the excise authorities before departure from the exporting country or before delivery in case of import traffic. |
| Export licence | Permit issued by a government authority permitting exportation of a specified commodity subject to specified conditions as quantity, country of destination, etc. Synonym: Embargo permit. |
| Export licence, application for | Application for a permit issued by a government authority permitting exportation of a specified commodity subject to specified conditions as quantity, country of destination, etc. |
| Extended credit advice | Document/message sent by an account servicing institution to one of its account owners, to inform the account owner of an entry that has been or will be credited to its account for a specified amount on the date indicated. It provides extended commercial information concerning the relevant remittance advice. |
| Extended payment order | Document/message containing information needed to initiate the payment. It may cover the financial settlement for several commercial trade transactions, which it is possible to specify in a special payments detail part. It is an instruction to the ordered bank to arrange for the payment of one specified amount to the beneficiary. |
| Extra-Community trade statistical declaration | Document/message in which a declarant provides information about extra-Community trade of goods required by the body responsible for the collection of trade statistics. Trade by a country in the European Union with a country outside the European Union. |
| Factored credit note | Credit note related to assigned invoice(s). |
| Factored invoice | Invoice assigned to a third party for collection. |
| Federal label approval | A pre-approved document relating to federal label approval requirements. |
| Final payment request based on completion of work | The final payment request of a series of payment requests submitted upon completion of all the work. |
| First sample test report | Document/message describes the test report of the first sample. |
| Foreign exchange permit | Document/message issued by the competent body authorizing an importer/buyer to transfer an amount of foreign exchange to an exporter/seller in payment for goods. |
| Forwarder's advice to exporter | Document/message issued by a freight forwarder informing an exporter of the action taken in fulfillment of instructions received. |
| Forwarder's advice to import agent | Document/message issued by a freight forwarder in an exporting country advising his counterpart in an importing country about the forwarding of goods described therein. |
| Forwarder's bill of lading | Non-negotiable document issued by a freight forwarder evidencing a contract for the carriage of goods by sea and the taking over or loading of the goods by the freight forwarder, and by which the freight forwarder undertakes to deliver the goods to the consignee named in the document. |
| Forwarder's certificate of receipt | Non-negotiable document issued by a forwarder to certify that he has assumed control of a specified consignment, with irrevocable instructions to send it to the consignee indicated in the document or to hold it at his disposal. E.g. FIATA-FCR. |
| Forwarder's certificate of transport | Negotiable document/message issued by a forwarder to certify that he has taken charge of a specified consignment for despatch and delivery in accordance with the consignors instructions, as indicated in the document, and that he accepts responsibility for delivery of the goods to the holder of the document through the intermediary of a delivery agent of his choice. E.g. FIATA-FCT. |
| Forwarder's invoice | Invoice issued by a freight forwarder specifying services rendered and costs incurred and claiming payment therefore. |
| Forwarder's warehouse receipt | Document/message issued by a forwarder acting as Warehouse Keeper acknowledging receipt of goods placed in a warehouse, and stating or referring to the conditions which govern the warehousing and the release of goods. The document contains detailed provisions regarding the rights of holders-by-endorsement, transfer of ownership, etc. E.g. FIATA-FWR. |
| Forwarding instructions | Document/message issued to a freight forwarder, giving instructions regarding the action to be taken by the forwarder for the forwarding of goods described therein. |
| Free pass | A document giving free access to a service. |
| Freight invoice | Document/message issued by a transport operation specifying freight costs and charges incurred for a transport operation and stating conditions of payment. |
| Freight manifest | Document/message containing the same information as a cargo manifest, and additional details on freight amounts, charges, etc. |
| Fumigation certificate | Certificate attesting that fumigation has been performed. |
| Gate pass | Document/message authorizing goods specified therein to be brought out of a fenced-in port or terminal area. |
| General cargo summary manifest report | A document code to indicate that the message being transmitted is summary manifest information for general cargo. |
| General response (Customs) | General response message to permit the transfer of data from Customs to the transmitter of the previous message. |
| Goods control certificate | Document/message issued by a competent body evidencing the quality of the goods described therein, in accordance with national or international standards, or conforming to legislation in the importing country, or as specified in the contract. |
| Goods declaration for Customs transit | Document/message by which the sender declares goods for Customs transit according to Annex E.1 (concerning Customs transit) to the Kyoto convention (CCC). |
| Goods declaration for exportation | Document/message by which goods are declared for export Customs clearance, conforming to the layout key set out at Appendix I to Annex C.1 concerning outright exportation to the Kyoto convention (CCC). Within a Customs union, "for despatch" may have the same meaning as "for exportation". |
| Goods declaration for home use | Document/message by which goods are declared for import Customs clearance according to Annex B.1 (concerning clearance for home use) to the Kyoto convention (CCC). |
| Goods declaration for importation | Document/message by which goods are declared for import Customs clearance [sister entry of 830]. |
| Goods receipt | Document/message to acknowledge the receipt of goods and in addition may indicate receiving conditions. |
| Goods receipt, carriage | Document/message issued by a carrier or a carriers agent, acknowledging receipt for carriage of goods specified therein on conditions stated or referred to in the document, enabling the carrier to issue a transport document. |
| Government contract | Document/message describing a contract with a government authority. |
| Grant | A document indicating the granting of funds. |
| Handling order | Document/message issued by a cargo handling organization (port administration, terminal operator, etc.) for the removal or other handling of goods under their care. |
| Healthcare discharge report, final | Final discharge report by healthcare provider. |
| Healthcare discharge report, preliminary | Preliminary discharge report by healthcare provider. |
| Hire invoice | Document/message for invoicing the hiring of human resources or renting goods or equipment. |
| Hire order | Document/message for hiring human resources or renting goods or equipment. |
| Horsemeat sanitary certificate | Document or message issued by the competent authority in the exporting country evidencing that horsemeat products comply with the requirements set by the importing country. |
| House bill of lading | The bill of lading issued not by the carrier but by the freight forwarder/consolidator known by the carrier. |
| House waybill | The document made out by an agent/consolidator which evidences the contract between the shipper and the agent/consolidator for the arrangement of carriage of goods. |
| Identification match | Message related to conducting a search for an identification match. |
| Identity card | Official document to identify a person. |
| Impending arrival | Notification of impending arrival details for vessel. |
| Implementation guideline | A document specifying the criterion and format for exchanging information in an electronic data interchange syntax. |
| Import licence | Document/message issued by the competent body in accordance with import regulations in force, by which authorization is granted to a named party to import either a limited quantity of designated articles or an unlimited quantity of such articles during a limited period, under conditions specified in the document. |
| Import licence, application for | Document/message in which an interested party applies to the competent body for authorization to import either a limited quantity of articles subject to import restrictions, or an unlimited quantity of such articles during a limited period, and specifies the kind of articles, their origin and value, etc. |
| Indefinite delivery definite quantity contract | A document indicating a contract calling for indefinite deliveries of definite quantities. |
| Indefinite delivery indefinite quantity contract | A document indicating a contract calling for the indefinite deliveries of indefinite quantities of goods. |
| Industry superannuation contributions advice | Document/message providing contributions advice used for superannuation schemes which are industry wide. |
| Industry superannuation member maintenance message | Member maintenance message used for industry wide superannuation schemes. |
| Inedible sanitary certificate | Document or message issued by the competent authority in the exporting country evidencing that inedible products comply with the requirements set by the importing country. |
| Infrastructure condition | Information about components in an infrastructure. |
| Inland waterway bill of lading | Negotiable transport document made out to a named person, to order or to bearer, signed by the carrier and handed to the sender after receipt of the goods. |
| Inquiry | This is a request for information. |
| Inspection certificate | Document/message issued by a competent body evidencing that the goods described therein have been inspected in accordance with national or international standards, in conformity with legislation in the country in which the inspection is required, or as specified in the contract. |
| Inspection report | A message informing a party of the results of an inspection. |
| Inspection request | A message requesting a party to inspect items. |
| Instructions for bank transfer | Document/message containing instructions from a customer to his bank to pay an amount in a specified currency to a nominated party in another country by a method either specified (e.g. teletransmission, air mail) or left to the discretion of the bank. |
| Instruction to collect | A message instructing a party to collect goods. |
| Insurance certificate | Document/message issued to the insured certifying that insurance has been effected and that a policy has been issued. Such a certificate for a particular cargo is primarily used when good are insured under the terms of a floating or an open policy; at the request of the insured it can be exchanged for a policy. |
| Insurance declaration sheet (bordereau) | A document/message used when an insured reports to his insurer details of individual shipments which are covered by an insurance contract - an open cover or a floating policy - between the parties. |
| Insurance policy | Document/message issued by the insurer evidencing an agreement to insure and containing the conditions of the agreement concluded whereby the insurer undertakes for a specific fee to indemnify the insured for the losses arising out of the perils and accidents specified in the contract. |
| Insurer's invoice | Document/message issued by an insurer specifying the cost of an insurance which has been effected and claiming payment therefore. |
| Interim application for payment | Document/message containing a provisional assessment in support of a request for payment for completed work for a construction contract. |
| Intermediate handling cross docking despatch advice | Document by means of which the supplier or consignor informs the buyer, consignee or the distribution centre about the despatch of products which will be moved across a dock, de-consolidated and re-consolidated according to final delivery location requirements. |
| Intermediate handling cross docking order | An order requesting the supply of products which will be moved across a dock, de-consolidated and re-consolidated according to the final delivery location requirements. |
| Internal transport order | Document/message giving instructions about the transport of goods within an enterprise. |
| INTRASTAT declaration | Document/message in which a declarant provides information about goods required by the body responsible for the collection of trade statistics. |
| Inventory adjustment status report | A message detailing statuses related to the adjustment of inventory. |
| Inventory movement advice | Advice of inventory movements. |
| Inventory report | A message specifying information relating to held inventories. |
| Inventory status advice | Advice of stock on hand. |
| Invoicing data sheet | Document/message issued within an enterprise containing data about goods sold, to be used as the basis for the preparation of an invoice. |
| Items booked to a financial account report | A message reporting items which have been booked to a financial account. |
| Kanban schedule | Message to describe a Kanban schedule. |
| Lease invoice | Usage of INVOIC-message for goods in leasing contracts. |
| Lease order | Document/message for goods in leasing contracts. |
| Legal statement of an account | A statement of an account containing the booked items as in the ledger of the account servicing financial institution. |
| Letter of indemnity for non-surrender of bill of lading | Document/message issued by a commercial party or a bank of an insurance company accepting responsibility to the beneficiary of the indemnity in accordance with the terms thereof. |
| Letter of intent | Document/message by means of which a buyer informs a seller that the buyer intends to enter into contractual negotiations. |
| Life insurance payroll deductions advice | Payroll deductions advice used in the life insurance industry. |
| Listing statement of an account | A statement from the account servicing financial institution containing items pending to be booked. |
| Loadline document | Document specifying the limit of a ships legal submersion under various conditions. |
| Low value payment order(s) | The message contains low value payment order(s) only. |
| Make or buy plan | A document indicating a plan that identifies which items will be made and which items will be bought. |
| Manufacturing instructions | Document/message issued within an enterprise to initiate the manufacture of goods to be offered for sale. |
| Manufacturing specification | A document indicating the specification of how an item is to be manufactured. |
| Maritime declaration of health | Document certifying the health condition on board a vessel, valid to a specified date. |
| Master air waybill | Document/message made out by or on behalf of the agent/consolidator which evidences the contract between the agent/consolidator and carrier(s) for carriage of goods over routes of the carrier(s) for a consignment consisting of goods originated by more than one shipper (IATA). |
| Master bill of lading | A bill of lading issued by the master of a vessel (in actuality the owner or charterer of the vessel). It could cover a number of house bills. |
| Material inspection and receiving report | A report that is both an inspection report for materials and a receiving document. |
| Mate's receipt | Document/message issued by a ships officer to acknowledge that a specified consignment has been received on board a vessel, and the apparent condition of the goods; enabling the carrier to issue a Bill of lading. |
| Means of transport advice | Message reporting the means of transport used to carry goods or cargo. |
| Means of transportation availability information | Information giving the various availabilities of a means of transportation. |
| Means of transportation schedule information | Information giving the various schedules of a means of transportation. |
| Meat and meat by-products sanitary certificate | Document or message issued by the competent authority in the exporting country evidencing that meat or meat by- products comply with the requirements set by the importing country. |
| Meat food products sanitary certificate | Document or message issued by the competent authority in the exporting country evidencing that meat food products comply with the requirements set by the importing country. |
| Message in development request | Requesting a Message in Development (MiD). |
| Metered services invoice | Document/message claiming payment for the supply of metered services (e.g., gas, electricity, etc.) supplied to a fixed meter whose consumption is measured over a period of time. |
| Metering point information response | Response to a request for information about a metering point. |
| Mill certificate | Certificate certifying a specific quality of agricultural products. |
| Modification of existing message | Requesting a change to an existing message. |
| Movement certificate A.TR.1 | Specific form of transit declaration issued by the exporter (movement certificate). |
| Multidrop order | One purchase order that contains the orders of two or more vendors and the associated delivery points for each. |
| Multimodal/combined transport document (generic) | A transport document used when more than one mode of transportation is involved in the movement of cargo. It is a contract of carriage and receipt of the cargo for a multimodal transport. It indicates the place where the responsible transport company in the move takes responsibility for the cargo, the place where the responsibility of this transport company in the move ends and the conveyances involved. |
| Multimodal transport document (generic) | Document/message which evidences a multimodal transport contract, the taking in charge of the goods by the multimodal transport operator, and an undertaking by him to deliver the goods in accordance with the terms of the contract. (International Convention on Multimodal Transport of Goods). |
| Multiple direct debit | Document/message containing a direct debit to credit one or more accounts and to debit one or more debtors. |
| Multiple direct debit request | Document/message containing a direct debit request to credit one or more accounts and to debit one or more debtors. |
| Multiple payment order | Document/message containing a payment order to debit one or more accounts and to credit one or more beneficiaries. |
| Name/product plate | Plates on goods identifying and describing an article. |
| NATO transit document | Customs transit document for the carriage of shipments of the NATO armed forces under Customs supervision. |
| New code request | Requesting a new code. |
| New message request | Request for a new message (NMR). |
| Non-negotiable maritime transport document (generic) | Non-negotiable document which evidences a contract for the carriage of goods by sea and the taking over or loading of the goods by the carrier, and by which the carrier undertakes to deliver the goods to the consignee named in the document. E.g. Sea waybill. Remark: Synonymous with "straight" or "non-negotiable Bill of lading" used in certain countries, e.g. Canada. |
| Non-pre-authorised direct debit request(s) | The message contains non-pre-authorised direct debit request(s). |
| Non-pre-authorised direct debit(s) | The message contains non-pre-authorised direct debit(s). |
| Notice of circumstances preventing delivery (goods) | Request made by the carrier to the sender, or, as the case may be, the consignee, for instructions as to the disposal of the consignment when circumstances prevent delivery and the return of the goods has not been requested by the consignor in the transport document. |
| Notice of circumstances preventing transport (goods) | Request made by the carrier to the sender, or, the consignee as the case may be, for instructions as to the disposal of the goods when circumstances prevent transport before departure or en route, after acceptance of the consignment concerned. |
| Notice that circumstances prevent payment of delivered goods | Message used to inform a supplier that delivered goods cannot be paid due to circumstances which prevent payment. |
| Notification of balance responsible entity change | Notification of a change of balance responsible entity. |
| Notification of change of supplier | A notification of a change of supplier. |
| Notification of emergency shifting from the designated place in port | Document to notify shifting from designated place in port once secured at the designated place. |
| Notification of meter change | Notification about the change of a meter. |
| Notification of metering point identification change | Notification of the change of metering point identification. |
| Notification of usage of berth or mooring facilities | Document to notify usage of berth or mooring facilities. |
| Notification to grid operator of contract termination | Notification to the grid operator regarding the termination of a contract. |
| Notification to grid operator of metering point changes | Notification to the grid operator about changes regarding a metering point. |
| Notification to supplier of contract termination | Notification to the supplier regarding the termination of a contract. |
| Notification to supplier of metering point changes | Notification to the supplier about changes regarding a metering point. |
| Offer/quotation | Document/message which , with a view to concluding a contract, sets out the conditions under which the goods are offered. |
| Operating instructions | Document/message describing instructions for operation. |
| Optical Character Reading (OCR) payment | Payment effected by an Optical Character Reading (OCR) document. |
| Order | Document/message by means of which a buyer initiates a transaction with a seller involving the supply of goods or services as specified, according to conditions set out in an offer, or otherwise known to the buyer. |
| Order status enquiry | A message enquiring the status of previously sent orders. |
| Order status report | A message reporting the status of previously sent orders. |
| Package response (Customs) | Package response message to permit the transfer of data from Customs to the transmitter of the previous message. |
| Packing instructions | Document/message within an enterprise giving instructions on how goods are to be packed. |
| Packing list | Document/message specifying the distribution of goods in individual packages (in trade environment the despatch advice message is used for the packing list). |
| Partial invoice | Document/message specifying details of an incomplete invoice. |
| Party credit information | Document/message providing data concerning the credit information of a party. |
| Party information | Document/message providing basic data concerning a party. |
| Party payment behaviour information | Document/message providing data concerning the payment behaviour of a party. |
| Passenger list | Declaration to Customs regarding passengers aboard the conveyance; equivalent to IMO FAL 6. |
| Passport | An official document giving permission to travel in foreign countries. |
| Payment bond | A document that guarantees the payment of monies. |
| Payment card | The document is a credit, guarantee or charge card. |
| Payment order | Document/message containing information needed to initiate the payment. It may cover the financial settlement for one or more commercial trade transactions. A payment order is an instruction to the ordered bank to arrange for the payment of one specified amount to the beneficiary. |
| Payment or performance bond | A document indicating a bond that guarantees the payment of monies or a performance. |
| Payment request for completed units | A request for payment for completed units. |
| Payment valuation | Document/message establishing the financial elements of a situation of works. |
| Payment valuation for unscheduled items | A payment valuation for unscheduled items. |
| Performance bond | A document that guarantees performance. |
| Pharmaceutical sanitary certificate | Document or message issued by the competent authority in the exporting country evidencing that pharmaceutical products comply with the requirements set by the importing country. |
| Phytosanitary certificate | Document/message issued by the competent body in the exporting country evidencing that plants, fruit, or vegetables are free from disease and fit for consumption and giving details on fumigation or other treatment to which they may have been subjected. |
| Pick-up notice | Notice specifying the pick-up of released cargo or containers from a certain address. |
| Plan for provision of health service | Document containing a plan for provision of health service. |
| Port authority waste disposal report | Document/message sent by a port authority to another port authority for reporting information on waste disposal. |
| Port charges documents | Documents/messages specifying services rendered, storage and handling costs, demurrage and other charges due to the owner of goods described therein. |
| Post receipt | Document/message which evidences the transport of goods by post (e.g. mail, parcel, etc.). |
| Poultry sanitary certificate | Document or message issued by the competent authority in the exporting country evidencing that poultry products comply with the requirements set by the importing country. |
| Preadvice of a credit | Preadvice indicating a credit to happen in the future. |
| Pre-authorised direct debit request(s) | The message contains pre-authorised direct debit request(s). |
| Pre-authorised direct debit(s) | The message contains pre-authorised direct debit(s). |
| Preference certificate of origin | Document/message describing a certificate of origin meeting the requirements for preferential treatment. |
| Preliminary credit assessment | Document/message issued either by a factor to indicate his preliminary credit assessment on a buyer, or by a seller to request a factors preliminary credit assessment on a buyer. |
| Preliminary sales report | Preliminary sales report sent before all the information is available. |
| Pre-packed cross docking despatch advice | Document by means of which the supplier or consignor informs the buyer, consignee or distribution centre about the despatch of products packed according to the final delivery point requirements which will be moved across a dock in a distribution centre without further handling. |
| Pre-packed cross docking order | An order requesting the supply of products packed according to the final delivery point which will be moved across a dock in a distribution centre without further handling. |
| Prepayment invoice | An invoice to pay amounts for goods and services in advance; these amounts will be subtracted from the final invoice. |
| Prescription | Instructions for the dispensing and use of medicine or remedy. |
| Prescription dispensing report | Document containing information of products dispensed according to a prescription. |
| Prescription request | Request to issue a prescription for medicine or remedy. |
| Previous Customs document/message | Indication of the previous Customs document/message concerning the same transaction. |
| Priced alternate tender bill of quantity | A priced tender based upon an alternate specification. |
| Priced tender BOQ | Document/message providing a detailed, quantity based specification, updated with prices to form a tender submission for a construction contract. BOQ means: Bill of quantity. |
| Price negotiation result | A document providing the result of price negotiations. |
| Price/sales catalogue | A document/message to enable the transmission of information regarding pricing and catalogue details for goods and services offered by a seller to a buyer. |
| Price/sales catalogue response | A document providing a response to a previously sent price/sales catalogue. |
| Price variation invoice | An invoice which requests payment for the difference in price between an original invoice and the result of the application of a price variation formula. |
| Process data report | Reports on events during production process. |
| Product data message | A message to submit master data, a set of data that is rarely changed, to identify and describe products a supplier offers to their (potential) customer or buyer. |
| Product performance report | Report specifying the performance values of products. |
| Product specification report | Report providing specification values of products. |
| Proforma invoice | Document/message serving as a preliminary invoice, containing - on the whole - the same information as the final invoice, but not actually claiming payment. |
| Progressive discharge report | Document or message progressively issued by the container terminal operator in charge of discharging a vessel identifying containers that have been discharged from a specific vessel at that point in time. |
| Project master plan | A high level, all encompassing master plan to complete a project. |
| Project master schedule | A high level, all encompassing master schedule of activities to complete a project. |
| Project plan | A plan for project work to be completed. |
| Project planning available resources | Available resources for project planning purposes. |
| Project planning calendar | Work calendar information for project planning purposes. |
| Project production plan | A project plan for the production of goods. |
| Project recovery plan | A project plan for recovery after a delay or problem resolution. |
| Project schedule | A schedule of project activities to be completed. |
| Promissory note | Document/message, issued and signed in conformity with the applicable legislation, which contains an unconditional promise whereby the maker undertakes to pay a definite sum of money to the payee or to his order, on demand or at a definite time, against the surrender of the document itself. |
| Provisional payment valuation | Document/message establishing a provisional payment valuation. |
| Purchase order | Document/message issued within an enterprise to initiate the purchase of articles, materials or services required for the production or manufacture of goods to be offered for sale or otherwise supplied to customers. |
| Purchase order change request | Change to an purchase order already sent. |
| Purchase order response | Response to an purchase order already received. |
| Purchasing specification | A document indicating a specification used to purchase an item. |
| Quality data message | Usage of QALITY-message. |
| Quantity valuation | Document/message providing a confirmed assessment, by quantity, of the completed work for a construction contract. |
| Quantity valuation request | Document/message providing an initial assessment, by quantity, of the completed work for a construction contract. |
| Query | Request information based on defined criteria. |
| Quota prior allocation certificate | Document/message issued by the competent body for prior allocation of a quota. |
| Rail consignment note (generic term) | Transport document constituting a contract for the carriage of goods between the sender and the carrier (the railway). For international rail traffic, this document must conform to the model prescribed by the international conventions concerning carriage of goods by rail, e.g. CIM Convention, SMGS Convention. |
| Ready for despatch advice | Document/message issued by a supplier informing a buyer that goods ordered are ready for despatch. |
| Ready for transshipment despatch advice | Document to advise that the goods ordered are ready for transshipment. |
| Reassignment | Document/message issued by a factor to a seller or to another factor to reassign an invoice or credit note previously assigned to him. |
| Receipt (Customs) | Receipt for Customs duty/tax/fee paid. |
| Recharging document | Fictitious transport document regarding a previous transport, enabling a carriers agent to give to another carriers agent (in a different country) the possibility to collect charges relating to the original transport (rail environment). |
| Reefer connection order | Order to connect a reefer container to a reefer point. |
| Regional appellation certificate | Certificate drawn up in accordance with the rules laid down by an authority or approved body, certifying that the goods described therein qualify for a designation specific to the given region (e.g. champagne, port wine, Parmesan cheese). |
| Registration change | Code specifying the modification of previously submitted registration information. |
| Registration document | An official document providing registration details. |
| Registration renewal | Code specifying the continued validity of previously submitted registration information. |
| Rejected direct debit(s) | The message contains rejected direct debit(s). |
| Related document | Document that has a relationship with the stated document/message. |
| Remittance advice | Document/message advising of the remittance of payment. |
| Repair order | Document/message to order repair of goods. |
| Report of transactions for information only | A message reporting transactions for information only. |
| Report of transactions which need further information from the receiver | A message reporting transactions which need further information from the receiver. |
| Request for an amendment of a documentary credit | Request for an amendment of a documentary credit. |
| Request for delivery instructions | Document/message issued by a supplier requesting instructions from the buyer regarding the details of the delivery of goods ordered. |
| Request for financial cancellation | The message is a request for financial cancellation. |
| Request for metering point information | Message to request information about a metering point. |
| Request for payment | Document/message issued by a creditor to a debtor to request payment of one or more invoices past due. |
| Request for provision of a health service | Document containing request for provision of a health service. |
| Request for quote | Document/message requesting a quote on specified goods or services. |
| Request for statistical data | Request for one or more items or data sets of statistical data. |
| Request for transfer | Document/message is a request for transfer. |
| Requirements contract | A document indicating a requirements contract that authorizes the filling of all purchase requirements during a specified contract period. |
| Re-sending consignment note | Rail consignment note prepared by the consignor for the facilitation of an eventual return to the origin of the goods. |
| Response to an amendment of a documentary credit | Response to an amendment of a documentary credit. |
| Response to a trade statistics message | Document/message in which the competent national authorities provide a declarant with an acceptance or a rejection about a received declaration for European statistical purposes. |
| Response to previous banking status message | A response to a previously sent banking status message. |
| Response to query | Document/message returned as an answer to a question. |
| Response to registration | Code specifying a response to an occurrence of a registration message. |
| Restow | Message/document identifying containers that have been unloaded and then reloaded onto the same means of transport. |
| Reversal of credit | Reversal of credit accounting entry by bank. |
| Reversal of debit | Reversal of debit accounting entry by bank. |
| Road consignment note | Transport document/message which evidences a contract between a carrier and a sender for the carriage of goods by road (generic term). Remark: For international road traffic, this document must contain at least the particulars prescribed by the convention on the contract for the international carriage of goods by road (CMR). |
| Road list-SMGS | Accounting document, one copy of which is drawn up for each consignment note; it accompanies the consignment over the whole route and is a rail transport document. |
| Rush order | Document/message for urgent ordering. |
| Safety and hazard data sheet | Document or message to supply advice on a dangerous or hazardous material to industrial customers so as to enable them to take measures to protect their employees and the environment from any potential harmful effects from these material. |
| Safety of equipment certificate | Document certifying the safety of a ships equipment to a specified date. |
| Safety of radio certificate | Document certifying the safety of a ships radio facilities to a specified date. |
| Safety of ship certificate | Document certifying a ships safety to a specified date. |
| Sample order | Document/message to order samples. |
| Sanitary certificate | Document/message issued by the competent authority in the exporting country evidencing that alimentary and animal products, including dead animals, are fit for human consumption, and giving details, when relevant, of controls undertaken. |
| Season ticket | A document giving access to a service for a determined period of time. |
| Sea waybill | Non-negotiable document which evidences a contract for the carriage of goods by sea and the taking over of the goods by the carrier, and by which the carrier undertakes to deliver the goods to the consignee named in the document. |
| Segment change request | Requesting a change to an existing segment. |
| Segment request | Request a new segment. |
| Self billed credit note | A document which indicates that the customer is claiming credit in a self billing environment. |
| Self-billed invoice | An invoice the invoicee is producing instead of the seller. |
| Sequenced delivery schedule | Message to describe a sequence of product delivery. |
| Service directory definition | Document/message defining the contents of a service directory set or parts thereof. |
| Settlement of a letter of credit | Settlement of a letter of credit. |
| Shipper's letter of instructions (air) | Document/message issued by a consignor in which he gives details of a consignment of goods that enables an airline or its agent to prepare an air waybill. |
| Shipping instructions | Document/message advising details of cargo and exporters requirements for its physical movement. |
| Shipping note | Document/message provided by the shipper or his agent to the carrier, multimodal transport operator, terminal or other receiving authority, giving information about export consignments offered for transport, and providing for the necessary receipts and declarations of liability. (Sometimes a multipurpose cargo handling document also fulfilling the functions of document 632, 633, 650 and 655). |
| Ship's stores declaration | Declaration to Customs regarding the contents of the ships stores (equivalent to IMO FAL 3) i.e. goods intended for consumption by passengers/crew on board vessels, aircraft or trains, whether or not sold or landed; goods necessary for operation/maintenance of conveyance, including fuel/lubricants, excluding spare parts/equipment (IMO). |
| Simple data element change request | Request a change to an existing simple data element. |
| Simple data element request | Requesting a new simple data element. |
| Single administrative document | A set of documents, replacing the various (national) forms for Customs declaration within the EC, implemented on 01-01-1988. |
| Spare parts order | Document/message to order spare parts. |
| Spot order | Document/message ordering the remainder of a productions batch. |
| Standing inquiry on product information | A product inquiry which stands until it is cancelled. |
| Standing order | An order to supply fixed quantities of products at fixed regular intervals. |
| Statement of account message | Usage of STATAC-message. |
| Statistical and other administrative internal documents | Documents/messages issued within an enterprise for the for the purpose of collection of production and other internal statistics, and for other administration purposes. |
| Statistical data | Transmission of one or more items of data or data sets. |
| Statistical definitions | Transmission of one or more statistical definitions. |
| Statistical document, export | Document/message in which an exporter provides information about exported goods required by the body responsible for the collection of international trade statistics. |
| Statistical document, import | Document/message describing an import document that is used for statistical purposes. |
| Status information | Information regarding the status of a related message. |
| Status report | Message covers information about the status. |
| Stores requisition | Document/message issued within an enterprise ordering the taking out of stock of goods. |
| Subcontractor plan | A document indicating a plan that identifies the manufacturers subcontracting strategy for a specific contract. |
| Substitute air waybill | A temporary air waybill which contains only limited information because of the absence of the original. |
| Summary sales report | Sales report containing summaries for several earlier sent sales reports. |
| Supplementary document for application for cargo of dangerous goods | Supplementary document to apply for cargo operation of dangerous goods. |
| Supplementary document for application for transport of dangerous goods | Supplementary document to apply for transport of dangerous goods. |
| Swap order | Document/message informing buyer or seller of the replacement of goods previously ordered. |
| Tanker bill of lading | Document which evidences a transport of liquid bulk cargo. |
| Task order | A document indicating an order that tasks a contractor to perform a specified function. |
| Tax calculation/confirmation response (Customs) | Tax calculation/confirmation response message to permit the transfer of data from Customs to the transmitter of the previous message. |
| Tax declaration (general) | Document/message containing a general tax declaration. |
| Tax declaration (value added tax) | Document/message in which an importer states the pertinent information required by the competent body for assessment of value-added tax. |
| Tax demand | Document/message containing the demand of tax. |
| Tax invoice | An invoice for tax purposes. |
| Tax notification | Used to specify that the message is a tax notification. |
| Test report | Report providing the results of a test session. |
| Through bill of lading | Bill of lading which evidences a contract of carriage from one place to another in separate stages of which at least one stage is a sea transit, and by which the issuing carrier accepts responsibility for the carriage as set forth in the through bill of lading. |
| TIF form | International Customs transit document by which the sender declares goods for carriage by rail in accordance with the provisions of the 1952 International Convention to facilitate the crossing of frontiers for goods carried by rail (TIF Convention of UIC). |
| TIR carnet | International Customs document (International Transit by Road), issued by a guaranteeing association approved by the Customs authorities, under the cover of which goods are carried, in most cases under Customs seal, in road vehicles and/or containers in compliance with the requirements of the Customs TIR Convention of the International Transport of Goods under cover of TIR Carnets (UN/ECE). |
| Tracking number assignment report | Report of assigned tracking numbers. |
| Trade data | Document/message is for trade data. |
| Transfrontier waste shipment authorization | Document containing the authorization from the relevant authority for the international carriage of waste. Syn: Transfrontier waste shipment permit. |
| Transfrontier waste shipment movement document | Document certified by the carriers and the consignee to be used for the international carriage of waste. |
| Transport cargo release order | Order to release cargo or items of transport equipment to a specified party. |
| Transport departure report | Report of the departure of a means of transport from a particular facility. |
| Transport discharge instruction | Instruction to unload specified cargo, containers or transport equipment from a means of transport. |
| Transport discharge report | Report on cargo, containers or transport equipment unloaded from a particular means of transport. |
| Transport emergency card | Official document specifying, for a given dangerous goods item, information such as nature of hazard, protective devices, actions to be taken in case of accident, spillage or fire and first aid to be given. |
| Transport empty equipment advice | Advice that an item or items of empty transport equipment are available for return. |
| Transport equipment acceptance order | Order to accept items of transport equipment which are to be delivered by an inland carrier (rail, road or barge) to a specified facility. |
| Transport equipment damage report | Report of damaged items of transport equipment that have been returned. |
| Transport equipment delivery notice | Notification regarding the delivery of transport equipment. |
| Transport equipment direct interchange report | Report on the movement of containers or other items of transport equipment being exchanged, establishing relevant rental periods. |
| Transport equipment empty release instruction | Instruction to release an item of empty transport equipment to a specified party or parties. |
| Transport equipment impending arrival advice | Advice that containers or other items of transport equipment may be expected to be delivered to a certain location. |
| Transport equipment maintenance and repair notice | Report of transport equipment which has been repaired or has had maintenance performed. |
| Transport equipment maintenance and repair work authorisation | Authorisation to have transport equipment repaired or to have maintenance performed. |
| Transport equipment maintenance and repair work estimate advice | Advice providing estimates of transport equipment maintenance and repair costs. |
| Transport equipment maintenance and repair work estimate order | Order to draw up an estimate of the costs of maintenance or repair of transport equipment. |
| Transport equipment movement instruction | Instruction to perform one or more different movements of transport equipment. |
| Transport equipment movement report | Report on one or more different movements of transport equipment. |
| Transport equipment off-hire report | Report on the movement of containers or other items of transport equipment to record physical movement activity and establish the end of a rental period. |
| Transport equipment off-hire request | Request to terminate the lease on an item of transport equipment at a specified time. |
| Transport equipment on-hire order | Order to release empty items of transport equipment for on-hire to a lessee, and authorising collection by or on behalf of a specified party. |
| Transport equipment on-hire report | Report on the movement of containers or other items of transport equipment to record physical movement activity and establish the beginning of a rental period. |
| Transport equipment on-hire request | Request for transport equipment to be made available for hire. |
| Transport equipment packing instruction | Instruction to pack cargo into a container or other item of transport equipment. |
| Transport equipment pick-up availability confirmation | Confirmation that an item of transport equipment is available for collection. |
| Transport equipment pick-up availability request | Request for confirmation that an item of transport equipment will be available for collection. |
| Transport equipment pick-up report | Report that an item of transport equipment has been collected. |
| Transport equipment profile report | Report on the profile of transport equipment. |
| Transport equipment shift report | Report on the movement of containers or other items of transport within a facility. |
| Transport equipment special service instruction | Instruction to perform a specified service or services on an item or items of transport equipment. |
| Transport equipment status change report | Report on one or more changes of status associated with an item or items of transport equipment. |
| Transport equipment stock report | Report on the number of items of transport equipment stored at one or more locations. |
| Transport equipment survey order | Order to perform a survey on specified items of transport equipment. |
| Transport equipment survey order response | Response to an order to conduct a survey of transport equipment. |
| Transport equipment survey report | Survey report of specified items of transport equipment. |
| Transport equipment unpacking instruction | Instruction to unpack specified cargo from specified containers or other items of transport equipment. |
| Transport equipment unpacking report | Report on the completion of unpacking specified containers or other items of transport equipment. |
| Transport loading instruction | Instruction to load cargo, containers or transport equipment onto a means of transport. |
| Transport loading report | Report on completion of loading cargo, containers or other transport equipment onto a means of transport. |
| Transport movement gate in report | Report on the inward movement of cargo, containers or other items of transport equipment which have been delivered to a facility by an inland carrier. |
| Transport movement gate out report | Report on the outward movement of cargo, containers or other items of transport equipment (either full or empty) which have been picked up by an inland carrier. |
| Transport status report | A message to report the transport status and/or change in the transport status (i.e. event) between agreed parties. |
| Transport status request | A message to request a transport status report (e.g. through the International multimodal status report message IFSTA). |
| Transshipment despatch advice | Document by means of which the supplier or consignor informs the buyer, consignee or the distribution centre about the despatch of goods for transshipment. |
| Travel ticket | The document is a ticket giving access to a travel service. |
| Treatment - nil outturn | No shortage, surplus or damaged outturn resulting from container vessel unpacking. |
| Treatment - personal effect | Cargo consists of personal effects. |
| Treatment - timber | Cargo consists of timber. |
| Treatment - time-up underbond | Movement type indicator: goods are moved under customs control for warehousing due to being time-up. |
| Treatment - underbond by sea | Movement type indicator: goods are to move by sea under customs control to a customs office where formalities will be completed. |
| Underbond approval | A message/document issuing Customs approval to move cargo from one Customs control point to another. |
| Underbond request | A Message/document requesting to move cargo from one Customs control point to another. |
| United Nations standard message request | Requesting a United Nations Standard Message (UNSM). |
| Universal (multipurpose) transport document | Document/message evidencing a contract of carriage covering the movement of goods by any mode of transport, or combination of modes, for national as well as international transport, under any applicable international convention or national law and under the conditions of carriage of any carrier or transport operator undertaking or arranging the transport referred to in the document. |
| Unpriced bill of quantity | Document/message providing a detailed, quantity based specification, issued in an unpriced form to invite tender prices. |
| Unship permit | A message or document issuing permission to unship cargo. |
| User directory definition | Document/message defining the contents of a user directory set or parts thereof. |
| Utilities time series message | The Utilities time series message is sent between responsible parties in a utilities infrastructure for the purpose of reporting time series and connected technical and/or administrative information. |
| Vaccination certificate | Official document proving immunisation against certain diseases. |
| Validated priced tender | A validated priced tender. |
| Value declaration | Document/message in which a declarant (importer) states the invoice or other price (e.g. selling price, price of identical goods), and specifies costs for freight, insurance and packing, etc., terms of delivery and payment, any relationship with the trading partner, etc., for the purpose of determining the Customs value of goods imported. |
| Vessel unpack report | A document code to indicate that the message being transmitted identifies all short and surplus cargoes off-loaded from a vessel at a specified discharging port. |
| Veterinary certificate | Document/message issued by the competent authority in the exporting country evidencing that live animals or birds are not infested or infected with disease, and giving details regarding their provenance, and of vaccinations and other treatment to which they have been subjected. |
| Visa | An endorsement on a passport or any other recognised travel document indicating that it has been examined and found correct, especially as permitting the holder to enter or leave a country. |
| Wage determination | A document indicating a determination of the wages to be paid. |
| Wagon report | Document which contains consignment information concerning the wagons and their lading in a case of a multiple wagon consignment. |
| Warehouse warrant | Negotiable receipt document, issued by a Warehouse Keeper to a person placing goods in a warehouse and conferring title to the goods stored. |
| Waste disposal report | Document/message sent by a shipping agent to an authority for reporting information on waste disposal. |
| Waybill | Non-negotiable document evidencing the contract for the transport of cargo. |
| Weight certificate | Certificate certifying the weight of goods. |
| Weight list | Document/message specifying the weight of goods. |
| Wine certificate | Certificate attesting to the quality, origin or appellation of wine. |
| Wool health certificate | Certificate attesting that wool is free from specified risks to human or animal health. |
| Written instructions in conformance with ADR article number 10385 | Written instructions relating to dangerous goods and defined in the European Agreement of Dangerous Transport by Road known as ADR (Accord europeen relatif au transport international des marchandises Dangereuses par Route). |

<a href="#type-index">Back to type index</a>
## DutyTaxFeeCategoryCodeSimpleType

A data type for a DutyTaxFeeCategory

| Code | Definition |
| --- | --- |
| AAA | Petroleum tax |
| AAB | Provisional countervailing duty cash |
| AAC | Provisional countervailing duty bond |
| AAD | Tobacco tax |
| AAE | Energy fee |
| AAF | Coffee tax |
| AAG | Harmonised sales tax, Canadian |
| AAH | Quebec sales tax |
| AAI | Canadian provincial sales tax |
| AAJ | Tax on replacement part |
| ADD | Anti-dumping duty |
| BOL | Stamp duty (Imposta di Bollo) |
| CAP | Agricultural levy |
| CAR | Car tax |
| COC | Paper consortium tax (Italy) |
| CST | Commodity specific tax |
| CUD | Customs duty |
| CVD | Countervailing duty |
| ENV | Environmental tax |
| EXC | Excise duty |
| EXP | Agricultural export rebate |
| FET | Federal excise tax |
| FRE | Free |
| GCN | General construction tax |
| GST | Goods and services tax |
| ILL | Illuminants tax |
| IMP | Import tax |
| IND | Individual tax |
| LAC | Business license fee |
| LCN | Local construction tax |
| LDP | Light dues payable |
| LOC | Local sales tax |
| LST | Lust tax |
| MCA | Monetary compensatory amount |
| MCD | Miscellaneous cash deposit |
| OTH | Other taxes |
| PDB | Provisional duty bond |
| PDC | Provisional duty cash |
| PRF | Preference duty |
| SCN | Special construction tax |
| SSS | Shifted social securities |
| STT | State/provincial sales tax |
| SUP | Suspended duty |
| SWT | Shifted wage tax |
| TAC | Alcohol mark tax |
| TOT | Total |
| TOX | Turnover tax |
| TTA | Tonnage taxes |
| VAD | Valuation deposit |
| VAT | Value added tax |

<a href="#type-index">Back to type index</a>
## DutyTaxPaymentMethodCodeSimpleType

A data type for a code set that denotes the methods of payment for Duty Tax

| Code | Definition |
| --- | --- |
| B | On Credit |
| C | Cheque |
| E | EFT |
| F | Factoring |
| H | Chipknip |
| I | Collection |
| K | Cash |
| O | Debt Collection |
| P | Payment on delivery |
| R | Credit Card |
| S | To be settled |
| V | ESR Payment |
| W | Letter of Credit |
| X | Payments in CHF and FC |
| Y | ES Payment |

<a href="#type-index">Back to type index</a>
## ExaminationPlaceCategoryCodeSimpleType

A data type for a category of Examination Place

| Code | Definition |
| --- | --- |
| BGA | Bungwahl |
| BGB | Burringbar |
| BJU | Burren Junction |
| BLH | Burleigh Heads |
| BUC | Burketown |
| BUS | Busselton |
| BWT | Burnie |
| CAD | Carrum Downs |
| CAH | Cannon Hill |
| CAL | Caloundra Head |
| CAZ | Cobar |
| CBA | Corio Bay |
| CBC | Cherrabun |
| CBG | Coburg |
| CBI | Cape Barren Island |
| CBN | Campbelltown |
| CBR | Canberra |
| CBU | Cullen Bullen |
| CBX | Condobolin |
| CBY | Canobie |
| CCL | Chinchilla |
| CCU | Cape Cuvier |
| CCW | Cowell |
| CDA | Cooinda |
| CDI | Cunderdin |
| CDQ | Croydon |
| CDU | Camden |
| CED | Ceduna |
| CES | Cessnock |
| CFH | Clifton Hills |
| CFI | Camfield |
| CFL | Campbellfield |
| CFP | Carpentaria Downs |
| CFS | Coffs Harbour |
| CGA | Coolgardie |
| CGV | Caiguna |
| CHA | Chatswood |
| CHB | Catherine Hill Bay |
| CHD | Chadstone/Melbourne |
| CHL | Cheltenham/Melbourne |
| CHN | Chipping Norton |
| CHU | Chullora |
| CHV | Challis Venture (oil terminal) |
| CIA | Camellia |
| CIE | Collie |
| CKI | Croker Island |
| CLA | Coolamon |
| CLB | Coolabah |
| CLC | Culcairn |
| CLH | Coolah |
| CLL | Collan Islands |
| CLN | Cape Leeuwin |
| CLP | Clovelly Park |
| CLR | Clarence River |
| CLT | Cape Lambert |
| CLU | Clunes |
| CLY | Clayton/Melbourne |
| CMA | Cunnamulla |
| CMD | Cootamundra |
| CML | Camooweal |
| CMQ | Clermont |
| CNB | Coonamble |
| CNC | Coconut Island |
| CNJ | Cloncurry |
| CNN | Canning Vale/Perth |
| CNS | Cairns |
| COB | Coolibah |
| COJ | Coonabarabran |
| COM | Cooma |
| CON | Colbinabbin |
| COO | Coomera |
| COP | Cossack Pioneer (oil terminal) |
| COY | Coolawanyah |
| CPD | Coober Pedy |
| CPL | Capel |
| CPN | Cape Preston |
| CPS | Coopers Plains |
| CQP | Cape Flattery |
| CRA | Carrara |
| CRB | Collarenebri |
| CRG | Caringbah |
| CRH | Cherribah |
| CRJ | Coorabie |
| CRS | Coral Sea |
| CRY | Carlton Hill |
| CSD | Cresswell Downs |
| CSI | Casino |
| CTB | Cataby |
| CTL | Charleville |
| CTN | Cooktown |
| CTR | Cattle Creek |
| CUD | Caloundra |
| CUG | Cudal |
| CUQ | Coen |
| CUY | Cue |
| CVA | Craigieburn |
| CVC | Cleve |
| CVN | Cleveland |
| CVQ | Carnarvon |
| CWI | Chatsworth Island |
| CWR | Cowarie |
| CWT | Cowra |
| CWW | Corowa |
| CXQ | Christmas Creek |
| CXT | Charters Towers |
| CYG | Corryong |
| CZY | Cluny |
| DAA | Darra |
| DAJ | Dauan Island |
| DAM | Dampier |
| DBO | Dubbo |
| DBY | Dalby |
| DCR | Doncaster |
| DDI | Daydream Is |
| DDK | Doodlakine |
| DDN | Delta Downs |
| DDO | Dunedoo |
| DFP | Drumduff |
| DGE | Mudgee |
| DGO | Dungog |
| DGY | Dingley Village |
| DHD | Durham Downs |
| DHL | Daisy Hill |
| DIT | Dalrymple Islet |
| DKI | Dunk Island |
| DKV | Docker River |
| DLK | Dulkaninna |
| DLV | Delissaville |
| DMA | Denmark |
| DMD | Doomadgee |
| DNB | Dunbar |
| DND | Dandenong |
| DNM | Denham |
| DNQ | Deniliquin |
| DOX | Dongara |
| DPO | Devonport |
| DRB | Derby |
| DRD | Dorunda Station |
| DRE | Drummoyne/Sydney |
| DRN | Dirranbandi |
| DRR | Durrie |
| DRW | Darwin |
| DSB | Dunsborough |
| DTO | Dapto |
| DTP | Darlington Point |
| DUL | Dulwich |
| DVI | Derrimut |
| DVP | Davenport Downs |
| DVR | Daly River |
| DXD | Dixie |
| DYA | Dysart |
| DYM | Diamantina Lakes |
| DYW | Daly Waters |
| EAB | Eneabba |
| EBH | Edinburgh |
| EBO | Euabalong |
| ECH | Echuca |
| EDB | Edithburgh |
| EDD | Erldunda |
| EDR | Edward River |
| EDW | Edwardstown |
| EIH | Einasleigh |
| EJB | East Jindabyne |
| EKD | Elkedra |
| ELC | Elcho Island |
| ELE | Electrona |
| ELF | Eagle Farm |
| ELW | Elsternwick |
| ELZ | Elizabeth |
| EMD | Emerald |
| ENB | Eneabba West |
| EPR | Esperance |
| ERB | Ernabella |
| ETD | Etadunna |
| EUC | Eucla |
| EVD | Eva Downs |
| EVH | Evans Head |
| EXM | Exmouth Gulf |
| FBN | Fairbarn |
| FCY | Footscray |
| FFD | Fairfield |
| FIK | Finke |
| FIS | Fisherman Islands |
| FIT | Fitzroy |
| FLC | Falls Creek |
| FLS | Flinders Island |
| FLY | Finley |
| FOS | Forrest |
| FOT | Forster |
| FRB | Forbes |
| FRE | Fremantle |
| FRL | Frewville |
| FSL | Fossil Downs |
| FTN | Fullerton |
| FYW | Fyshwick |
| GAH | Gayndah |
| GAP | Gapstead |
| GBL | Goulburn Island |
| GBP | Gamboola |
| GBT | Garbutt Station |
| GBV | Gibb River |
| GCE | Gloucester |
| GDA | Gundagai |
| GDD | Gordon Downs |
| GDF | Guildford |
| GEE | George Town |
| GET | Geraldton |
| GEX | Geelong |
| GFE | Grenfell |
| GFF | Griffith |
| GFN | Grafton |
| GGD | Gregory Downs |
| GGO | Grong Grong |
| GIL | Gillman |
| GKL | Great Keppel Island |
| GLG | Glengyle |
| GLI | Glen Innes |
| GLL | Glebe Island |
| GLM | Glenormiston |
| GLO | Galong |
| GLT | Gladstone |
| GLY | Goldsworthy |
| GMA | Ganmain |
| GNI | Gingin |
| GNU | Greenough |
| GOI | Goode Is |
| GOO | Goondiwindi |
| GOS | Gosford |
| GOV | Gove |
| GPN | Garden Point |
| GRA | Grassy |
| GRH | Greenhead |
| GRV | Griffin Venture (oil terminal) |
| GSC | Gascoyne Junction |
| GSN | Mount Gunson |
| GSO | Greenslopes |
| GTE | Groote Eylandt |
| GTS | Granites |
| GTT | Georgetown |
| GUG | Geebung |
| GUH | Gunnedah |
| GUL | Goulburn |
| GUN | Gunning |
| GVP | Greenvale |
| GWG | Gnowangerup |
| GYP | Gympie |
| HAB | Haberfield |
| HAP | Long Island |
| HAS | Hastings |
| HAT | Heathlands |
| HBA | Hobart |
| HBS | Homebush/Sydney |
| HCQ | Halls Creek |
| HDN | Harden |
| HEM | Hemmant |
| HGD | Hughenden |
| HHT | Highett/Melbourne |
| HID | Horn Island |
| HIG | Highbury |
| HIH | Hook Island |
| HIP | Headingly |
| HIS | Hayman Island |
| HLL | Hillside |
| HLM | Hallam |
| HLT | Hamilton |
| HLV | Helenvale |
| HMG | Hermannsburg |
| HNK | Hinchinbrook Island |
| HOK | Hooker Creek |
| HOT | Hope Tun |
| HOY | Hornsby |
| HPE | Hope Vale |
| HPN | Hampton |
| HPO | Hastings Point |
| HPT | Haypoint |
| HRN | Heron Island |
| HRY | Henbury |
| HSM | Horsham |
| HTE | Hawthorn |
| HTI | Hamilton Island |
| HTU | Hopetoun |
| HTY | Henty |
| HUB | Humbert River |
| HVB | Hervey Bay |
| HVY | Harvey |
| HWK | Hawker |
| HWN | Hawks Nest |
| HWO | Howlong |
| HWY | High Wycombe |
| HXX | Hay |
| HYD | Hyden |
| HYI | Hardy Island |
| IDK | Indulkana |
| IFF | Iffley |
| IFL | Innisfail |
| IGH | Ingham |
| IGN | Ingleburn |
| IHO | Ivanhoe |
| IKP | Inkerman |
| INJ | Injune |
| INM | Innamincka |
| IPS | Ipswich |
| IRG | Lockhart River |
| ISA | Mount Isa |
| ISI | Isisford |
| IVR | Inverell |
| IVW | Inverway |
| JAB | Jabiru |
| JAD | Jandakot |
| JCK | Julia Creek |
| JDE | Jerilderie |
| JEB | Jervis Bay |
| JNE | Junee |
| JOV | Jabiru Venture (oil terminal) |
| JUN | Jundah |
| JUR | Jurien Bay |
| KAH | Melbourne City Heliport |
| KAX | Kalbarri |
| KBB | Kirkimbie |
| KBD | Kimberley Downs |
| KBG | Koolyanbobbing |
| KBI | Kellerberrin |
| KBJ | Kings Canyon |
| KCE | Collinsville |
| KCS | Kings Creek Station |
| KDA | Kendall |
| KDB | Kambalda |
| KDS | Kamaran Downs |
| KFG | Kalkurung |
| KGA | Kembla |
| KGC | Kingscote |
| KGG | Kingsgrove |
| KGI | Kalgoorlie |
| KGO | Kangaroo Ground |
| KGR | Kulgera |
| KGY | Kingaroy |
| KIA | Kanimbla |
| KIB | King Bay |
| KIT | Kingston |
| KKP | Koolburra |
| KKQ | Kurri Kurri |
| KLP | Klein Point |
| KLR | Keilor |
| KML | Kamileroi |
| KNI | Katanning |
| KNS | King Is |
| KNX | Kununurra |
| KNY | Knowsley |
| KOH | Koolatah |
| KOI | Koolan Island |
| KPK | Kings Park |
| KPP | Kalpowar |
| KPS | Kempsey |
| KQB | Koonibba |
| KRA | Kerang |
| KRB | Karumba |
| KRD | Kurundi |
| KTA | Karratha |
| KTB | Katoomba |
| KTR | Katherine |
| KUG | Kubin Island |
| KUP | Kunda Park |
| KUR | Kurnell |
| KWA | Koorawatha |
| KWI | Kwinana |
| KWM | Kowanyama |
| KWR | Koo-Wee-Rup |
| LAB | Lady Barron |
| LAM | Lamplough |
| LAR | Labrador |
| LCG | Lake Cargelligo |
| LDB | Lidcombe |
| LDC | Lindeman Island |
| LDH | Lord Howe Is |
| LDW | Lansdowne |
| LEA | Learmonth |
| LEL | Lake Evella |
| LER | Leinster |
| LFP | Lakefield |
| LGA | Leongatha |
| LGF | Longford |
| LGH | Leigh Creek |
| LGT | Legendre Terminal |
| LHG | Lightning Ridge |
| LHI | Laurel Hill |
| LHM | Lyneham |
| LIB | Limbunya |
| LIV | Liverpool |
| LKA | Lockhart |
| LKD | Lakeland Downs |
| LLG | Chillagoe |
| LLL | Lissadell |
| LLP | Linda Downs |
| LNC | Lane Cove |
| LNH | Lake Nash |
| LNO | Leonora |
| LOA | Lorraine |
| LOC | Lock |
| LOW | Lisarow |
| LRE | Longreach |
| LRI | Little River |
| LSD | Lonsdale |
| LST | Launceston |
| LSY | Lismore |
| LTB | Latrobe |
| LTG | Lithgow |
| LTO | Laverton |
| LTP | Lyndhurst |
| LTV | Lotusvale |
| LUC | Lucinda |
| LUN | Lurnea/Sydney |
| LUT | Laura Station |
| LUU | Laura |
| LVH | Laverton North |
| LVO | Laverton |
| LWH | Lawn Hill |
| LYD | Lilydale |
| LYT | Lady Elliot Island |
| LZR | Lizard Island |
| MAR | Marrickville |
| MAS | Mascot |
| MBA | Mt Barker |
| MBB | Marble Bar |
| MBF | Mount Buffalo |
| MBH | Maryborough |
| MBN | Mt Barnett |
| MBU | Mukinbudin |
| MBW | Moorabbin |
| MCV | Mcarthur River |
| MCY | Maroochydore Apt/Sunshine Coast |
| MDA | Merinda |
| MDC | Mordialloc |
| MDI | Molendinar |
| MDO | Maidstone |
| MDU | Mandurah |
| MEB | Essendon Apt/Melbourne |
| MEL | Melbourne |
| MET | Moreton |
| MFL | Mount Full Stop |
| MFP | Manners Creek |
| MGB | Mount Gambier |
| MGO | Mittagong |
| MGR | Margaret River |
| MGT | Milingimbi |
| MGV | Margaret River Station |
| MHA | Mathoura |
| MHC | Macmahon Camp 4 |
| MHE | Muchea |
| MHO | Mount House |
| MHU | Mount Hotham |
| MIB | Milner Bay |
| MIH | Mitchell Plateau |
| MIM | Merimbula |
| MIN | Minnipa |
| MIT | Mitcham |
| MIY | Mittiebah |
| MIZ | Mainoru |
| MJK | Monkey Mia |
| MJP | Manjimup |
| MKR | Meekatharra |
| MKV | Mt Cavenagh |
| MKY | Mackay |
| MLA | Michelago |
| MLI | Melville Island |
| MLR | Millicent |
| MLV | Merluna |
| MLY | Morley |
| MMA | Mt Magnet |
| MMG | Mount Magnet |
| MMM | Middlemount |
| MNE | Mungeranie |
| MNG | Maningrida |
| MNQ | Monto |
| MNV | Mountain Valley |
| MNW | Macdonald Downs |
| MOA | Moama |
| MOK | Moorook |
| MOO | Moomba |
| MOR | Morwell |
| MOU | Mourilyan |
| MOV | Moranbah |
| MOW | Mowbray Heights |
| MQA | Mandora |
| MQE | Marqua |
| MQI | Macquarie Island |
| MQL | Mildura |
| MRA | Moora |
| MRB | Moorebank/Sydney |
| MRD | Merredin |
| MRG | Mareeba |
| MRI | Murarrie |
| MRL | Miners Lake |
| MRP | Marla |
| MRS | Melrose |
| MRT | Moroak |
| MRZ | Moree |
| MSA | Mosman |
| MSF | Mount Swan |
| MTD | Mt Sandford |
| MTL | Maitland |
| MTO | Matong |
| MTQ | Mitchell |
| MTW | Mt Waverly |
| MUL | Mulgrave |
| MUP | Mulga Park |
| MUQ | Muccan |
| MVA | Moss Vale |
| MVH | Macksville |
| MVK | Mulka |
| MWA | Mulwala |
| MWB | Morawa |
| MWO | Meadowbrook |
| MWT | Moolawatana |
| MWY | Miranda Downs |
| MXD | Marion Downs |
| MXQ | Mitchell River |
| MXU | Mullewa |
| MYA | Moruya |
| MYF | Mayfield |
| NLF | Darnley Island |
| ODL | Cordillo Downs |
| ONG | Mornington |
| ONR | Monkira |
| OOL | Gold Coast Apt/Coolangatta |
| OOR | Mooraberree |
| OXY | Morney |
| PEX | Exmouth |
| QDN | Eden |
| RRE | Marree |
| RTY | Merty |
| UBB | Mabuiag Island |
| UBU | Kalumburu |
| WME | Mount Keith |
| XCO | Colac |
| XMC | Mallacoota |
| XML | Minlaton |

<a href="#type-index">Back to type index</a>
## LocationActivityCodeSimpleType

A data type for the kinds of facilities.

| Code | Definition |
| --- | --- |
| Agency Center | Operational site operated by and dedicated to the mission of a federal agency at which coordination, situational awareness, and/or analysis activity/systems exist in support of detecting and interdicting threat materials; for example, reachback centers. |
| Air Border-Fixed | Fixed Operational site with the mission to detect threat materials entering the US and its territories and possessions, located at airports that are legal ports of entry. |
| Air Border-Mobile | Mobile Operational site with the mission to detect threat materials entering the US and its territories and possessions, located at airports that are legal ports of entry. |
| Air Border-Open | Operational site with the mission to detect threat materials entering the US and its territories and possessions by air transport at other than legal ports of entry. |
| Air-Offshore | Operational site with the mission to detect threat materials that may be destined for the US or its territories and possession while they are outside the US in air transport, or being prepared for air transport. |
| Communication Services | Operational site that provide communication services to the sites and organizations involved in the threat materials detection mission. |
| Development | Operational site engineering design and development of new/enhanced capabilities for support of the threat materials detection mission. |
| ECCF | Operational site with the mission to detect threat materials entering the US and its territories and possessions by the means of international mail and courier packages. |
| EDU | educational facility |
| Exercise | Operational site that exist for the purpose of conducting operational readiness and training exercises. This kind of site has a limited time period of existence defined to provide coverage of the setup, conduct, and shutdown of the exercise.  A site that is created specifically for an exercise. |
| FO | field office |
| HQ | headquarters facility |
| Information Services | Operational site that provide information support service activities and/or systems to the organizations and sites engaged in the threat materials detection mission. |
| Info Sharing | Operational site that provides information to National Centers, Regional Fusion Centers, and Agency Centers.  They may also receive information or information requests from the Centers. |
| Interior-Event | Operational site with the mission to detect threat materials at an event. These site have a limited time period of operational existence defined to provide coverage of the setup, conduct, and shutdown of the event. |
| Interior-Fixed | Fixed Operational site with the mission to detect threat materials within the US and its territories and possessions at other than Land Crossings, Seaports, and Airports that are legal ports of entry.  This kind of site may be on waterways, roads, railways, airports, and other locations not under the control of the CBP. This includes both US airspace and points where an air transport conveyance ma |
| Interior-Mobile | Mobile Operational site with the mission to detect threat materials within the US and its territories and possessions at other than Land Crossings, Seaports, and Airports that are legal ports of entry.   This kind of site may be on waterways, roads, railways, airports, and other locations not under the control of the CBP. This includes both US airspace and points where an air transport conveyance  |
| Lab | laboratory facility |
| Land Border-Fixed | Fixed Operational site with the mission to detect threat materials entering the US and its territories and possessions, located at legal ports of entry at highway/road/railway and waterway border crossings. |
| Land Border-Mobile | Mobile Operational site with the mission to detect threat materials entering the US and its territories and possessions, located at legal ports of entry at highway/road/railway and waterway border crossings that are dedicated to detection of threat materials. |
| Land Border-Open | Operational site with the mission to detect threat materials entering the US and its territories and possessions by land transport at other than legal ports of entry. This includes both unprotected land and water border crossings. |
| Land-Offshore | Operational site with the mission to detect threat materials that may be destined for the US or its territories and possession while they are outside the US and in land transport or storage. |
| LE | law enforcement facility |
| Logistics | logistics support/maintenance facility |
| Logistics Support | Operational site that provide logistics support services and/or systems. |
| Management | Operational site that provide management and planning activities/systems specific to the threat materials detection mission. |
| Medical | medical facility |
| Mil | Military facility |
| Military | Operational site operated by the US Armed Forces for detection of threat materials. |
| National Centers | Operational site at which coordination, situational awareness, and/or analysis activities are performed that combine the input(s) from all US resources/activities, as well as from non-US resources/activities. |
| Nuc | facility that manufactures, processes, and/or stores materials/products that emits radiation that can be detected with radiation detectors |
| other | other facility |
| Oversight | Operational site dedicated to the on-going monitoring of the operational readiness, performance, and effectiveness of the GNDA, and identifying/assessing vulnerabilities. |
| Regional Fusion Centers | Operational site at which coordination, situational awareness, and/or analysis activity/systems exist in support of detecting and interdicting threat materials, and which address a defined region of the US, and its territories and possessions. A Regional Center may address a collection of states, a state, county(s), or city. |
| Rel | religious facility |
| Response-Containment | Operational site that perform activities required for containing/securing/transporting of interdicted threat materials. |
| Response-Law Enforcement | Operational site that performs law enforcement activities required for interdiction of threat materials. |
| Response-Other | Response site other than law enforcement and containment. |
| Sea Border-Fixed | Fixed Operational site with the mission to detect threat materials entering the US and its territories and possessions, located at seaports that are legal ports of entry. |
| Sea Border-Mobile | Mobile Operational site with the mission to detect threat materials entering the US and its territories and possessions, located at seaports that are legal ports of entry. |
| Sea Border-Offshore | Operational site with the mission to detect threat materials that may be destined for the US or its territories and possession while they are outside the US in sea transport, or being prepared for sea transport. |
| Sea Border-Open | Operational site with the mission to detect threat materials entering the US and its territories and possessions by sea transport at other than legal ports of entry. This includes waters claimed by the US and points where the sea transport conveyance may land. |
| SRE | sports, recreation and/or entertainment facility |
| Test | Operational site operated for Test and Evaluation of detection systems and operational procedures/protocols. |
| Training | Operational site that provide training activities and/or systems.  A Training Node has a continuous existence, whereas an Exercise Node has a existence only during the time period of the exercise. |
| Transport | facility that supports the operations, use, or control of commercial means of transportation. |
| unknown | unknown |
| Utility | electric/gas/water utility facility |
| WH | warehouse facility |
| WHC | warehouse facility under the control of a governmental customs agency |

<a href="#type-index">Back to type index</a>
## LocationFunctionCodeSimpleType

A data type for a location categorized on the function that it performs

| Code | Definition |
| --- | --- |
| Activity location | A place at which the activity occurs. |
| Additional internal destination | Any location within the consignees premises where the goods are moved to. |
| Aircraft airport stand | Code used to specify the airport stand allocated to the aircraft. |
| Airport passenger terminal | Code used to specify the airport terminal used for the embarking or disembarking of passengers. |
| Balance settlement area | An area where common rules for balance settlement applies. |
| Baseport of discharge | (3356) The port of discharge according to the tariff as opposed to the operational port of discharge. The goods may or may not be actually discharged at that port on the main transport. |
| Baseport of loading(3322) | The port of loading according to the tariff as opposed to the operational port of loading. The goods may or may not be actually loaded at that port on the main transport. |
| Beginning of chargeable section | First rail station in a predefined section of the chargeable voyage. A complete voyage may be divided in sections, even within one country, that are separately chargeable using different tariff rules (split tariffs). |
| Berth | Location in port where the vessel is berthed or moored. |
| Bidding area | An area for which bids can be made with the same price applicable to the whole area. |
| Bill of lading release office | A location where bills of lading are released to customers. |
| Border crossing place | Place where goods are transported across a country border. |
| Branch location | Identifies the place or location of a branch. |
| Building | A building or part thereof relevant to a particular consignment or transaction. |
| Cargo facility location | Name of the terminal, warehouse or yard where the goods are to be on or offloaded. |
| Changed to location | Identifies the change to location. |
| Charge and freight due from | Place or point from which charges and freight are charged. |
| Charges and freight payable to | [3274] Name of place up to which freight charges and other charges are to be paid. |
| City | City or town relevant for a particular transaction or               consignment. |
| Claims payable place | Place where insurance claims are payable. |
| Climate zone | A geographical area where the climate has common characteristics. |
| Construction country | Country in which the construction work is made. |
| Construction site | A place at which construction works occur. |
| Contact location | The site where a contact is located. |
| Container stack position | Stack position of a container at a terminal, depot or freight station. |
| Conveyance facility location at arrival | Name of the location of the initial facility (e.g.terminal, warehouse or yard) where the conveyance will arrive. |
| Conveyance facility location at departure | Name of the location of the last facility (e.g.terminal, warehouse or yard) from which the conveyance will depart. |
| Correct location | Identifies the correct place or location. |
| Country | Country relevant for a particular transaction. |
| Country of birth | Country where a person or an animal was born. |
| Country of destination of equipment | Country of the last place where the equipment will stop. |
| Country of destination of goods | Country to which the goods are to be delivered. |
| Country of destination (transit) | Country at which a Customs transit operation is terminated. Synonym: Country of transit termination. |
| Country of dispatch | Country from which goods are despatched within a Customs union. |
| Country of exportation/dispatch | (3220) Country from which the goods were initially exported to the importing country without any commercial transaction taking place in intermediate countries. Syn.: country whence consigned. Country of despatch: country from which goods are despatched between countries of a Customs union. |
| Country of fattening | Country where an animal has been fattened. |
| Country of first destination | [3219] Country where the goods are offloaded from the means of transport used for their exportation. |
| Country of first sale | Name of country where firstly a sale took place. |
| Country of invalid transit guarantee | Country in which the security or guarantee for the movement of goods under a transit procedure is not valid. |
| Country of last consignment | [3331] Country where the goods are loaded onto the means of transport used for their importation. |
| Country of last source | The country where a product or service was last sourced. |
| Country of meat cutting | Country where the meat is cut into pieces. |
| Country of meat mincing | Country where meat has been cut into very small pieces using a meat grinder. |
| Country of origin | [3238] Country in which the goods have been produced or manufactured, according to criteria laid down for the purposes of application of the Customs tariff, of quantitative restrictions, or of any other measure related to trade. |
| Country of origin as defined by transportation agency | Country of origin as defined by the transportation agency. |
| Country of previous Customs procedure | Country in which the Customs declaration for the previous Customs procedure has been lodged. |
| Country of production | Country where item has been or will be produced. |
| Country of purchase | [3394] Country where the importers co-contractor is domiciled or has his business. |
| Country of sale | [3116] Country where exporters co-contractor is domiciled or has his business. |
| Country of slaughter | Country where an animal has been slaughtered. |
| Country of source | Country in which raw material or components were               originally produced prior to manufacture or assembly in another country. |
| Country of trading | Country where item has been or will be traded. |
| Country of transit | Country through which goods transit. |
| Country of transshipment | Country where goods are transferred under Customs control from the importing means of transport to the exporting means of transport within the area of one Customs office which is the office of both importation and exportation (CCC). |
| Country of ultimate destination | (3216) Country known to the consignor or his agent at the time of despatch to be the final country to which the goods are to be delivered. |
| Country of valid transit guarantee | Country in which the security or guarantee for the movement of goods under a transit procedure is valid. |
| Country of Value Added Tax (VAT) jurisdiction | The country governing the VAT regulation to which the transaction is subject. |
| Customs office of clearance | (3080) Place where Customs clearance procedure occur (CCC). |
| Customs office of departure | Customs office at which a Customs transit operation commences (CCC). |
| Customs office of destination | Customs office where the goods are to be cleared (CCC). |
| Customs office of destination (transit) | (3086) Customs office at which a transit operation is terminated. Synonym: Customs office of transit termination. |
| Customs office of dispatch | Customs office from which goods are despatched between countries of a Customs union. |
| Customs office of entry | [3088] Customs office at which the goods enter the country of destination. |
| Customs office of exit | [3096] Customs office at which the goods leave the country of dispatch/export. |
| Customs office of export | Customs office from which goods are taken out of the Customs territory (CCC). |
| Customs office of payment | Place where Customs duties/taxes/fees have to be paid. |
| Customs office of registration of previous Customs declaration | Customs office where the previous Customs declaration has been lodged. |
| Customs office of transit | [3106] Customs office which is competent for transit formalities en route. |
| Customs office of transit guarantee | [3110] Customs office at which a security or guarantee for the movement of goods under a transit procedure is lodged. |
| Direct investment country | Country in which a direct investment is made or withdrawn. |
| Disinfecting place | Place where disinfection has been or must be performed. |
| Documentary credit available in | Place where the documentary credit is available with any bank. |
| Donation acting country | Country acting in the donation of aid. |
| End of chargeable section | Last rail station in a predefined section of the chargeable voyage. A complete voyage may be divided in sections, even within one country, that are separately chargeable using different tariff rules (split tariffs). |
| Entity location | Identifies the place or location of the entity. |
| Express railway station | Railway station offering express transportation services. |
| Factory/plant | Factory/plant relevant for a particular consignment. |
| Fifth optional place of discharge | The fifth optional place or port of discharge as mentioned on the transport document where cargo can be discharged at the option of the shipper. |
| Filing location | Identifies the location of the filing entity. |
| Final port of discharge | Last port at which cargo is unloaded from a vessel before the cargo is moved to a place of delivery or destination. |
| Final port or place of discharge | Name of the seaport, airport, freight terminal, rail station or other place at which the goods (cargo) are finally (to be) unloaded from the means of transport used for their carriage according to the transport contract. |
| First optional place of discharge | The first optional place or port of discharge as mentioned on the transport document where cargo can be discharged at the option of the shipper. |
| First port of call - discharging | Port in the country of destination where the conveyance initially arrives from the last place/port of call of conveyance and where a conveyance will be discharging cargoes. |
| First port of call - non-discharging | Port in the country of destination where the conveyance initially arrives from the last place/port of call of conveyance and where a conveyance will not be discharging cargoes. |
| Foreign port of call | A code to identify the foreign port where the vessel calls at or will call at. |
| Foreign registration location | Identifies the place or location of foreign registration. |
| Former location | Identifies an earlier or previous place or location. |
| Former registered location | Identifies the former registered location of an entity. |
| For transportation to | Place/country where goods are to be transported to. |
| Fourth optional place of discharge | The fourth optional place or port of discharge as mentioned on the transport document where cargo can be discharged at the option of the shipper. |
| Free zone of export | Foreign free zone (desc: see 1131 = 131) from which goods are exported to the country of importation. |
| Full track loading or unloading | Identification of the station proceeding to the loading or unloading of a rail wagon on a full track site. (Used only when a rail station is obliged to transfer the load on another wagon for technical reasons - e.g. damage). |
| Future location | Location to be used in the future. |
| Goods depot | Depot where goods are received and are available for pick-up. |
| Goods receipt place | Place at which the goods have been received. |
| Grid area | A section of a grid. |
| Harbour rail station | Rail station servicing a harbour. |
| Head office | Identifies the place or location of a head office. |
| Hospital Advanced Dependency Unit (ADU) | A designated unit in a hospital for advanced dependency nursing care. |
| Hospital Intensive Care Unit (ICU) | An intensive care unit in a hospital. |
| Hospital luxury room | A room in a hospital for patient accommodation of superior standard. |
| Hospital Neonatal Intensive Care Unit (NICU) | A designated unit in a hospital for the provision of intensive care to neonates. |
| Hospital Paediatric Care Unit (PCU) | A designated unit in a hospital for the provision of care to paediatric patients. |
| Hospital private room | A room in a hospital for private accommodation of a patient. |
| Hospital shared room | A room in a hospital for shared accommodation of         patients. |
| Inspection site | The site where an inspection takes or took place. |
| Last place/port of call of conveyance | Conveyance departed from this last foreign place/port of call to go to "Place/port of conveyance initial arrival"(87). |
| Living animals care place | Place where living animal cares are provided. |
| Loading dock | Platform specially equipped for loading and unloading of rail wagons. |
| Loading on board/despatch/taking in charge at/from | Place/country where goods have to be loaded on board, despatched or taken in charge. |
| Location of goods | [3384] Place where goods are located. |
| Location to send mail | Identifies the location to which mail is sent. |
| Maintenance location | A location where maintenance has been or will be performed. |
| Manufacturing department | A department within the manufacturing area (e.g. lacquering, assembly). |
| Market area | An  area with common trading rules. |
| Marshalling yard | Station where the wagons are disconnected and reconnected to form a new train. |
| Meat cutting location | A location where the meat is cut into pieces. |
| Metering grid area | A physical area where consumption, production and  exchange can be metered. |
| Mixed cargo railway station | Railway station offering mixed cargo transportation services . |
| Next berth | Place or location in a port where a vessel will be   moored, after moving from the current location. |
| Next non-discharge port of call | A code to identify the next port of call for a vessel where no cargo will be discharged. |
| Next port of call | Next port which the vessel is going to call upon. |
| Next port of discharge | Next port at which goods are discharged from the vessel used for their transport. |
| On-carriage port | Port of discharge at which the cargo is discharged from the vessel, used for transport after the main transport (transit port). |
| Optional place of discharge | The optional place or port of discharge as mentioned on the bill of lading where cargo is discharged at the option of the shipper. |
| Original location | Identifies the original location. |
| Original port of loading | The port where the goods were first loaded on a vessel. |
| Other carriers terminal | A carrier terminal belonging to a carrier other than the original carrier. |
| Participant sender location | Place where a participant in the movement of goods is located and can be contacted. |
| Payment place | [3108] Place where funds are to be, or have been made available to the creditor. |
| Payment transaction country | Country of the foreign counterpart of the payment transaction. |
| Person birth place | [3486] Place where the person was born. |
| Petroleum warehouse | Bonded petroleum warehouse or the supplier source. |
| Physical location | Identifies the physical location. |
| Physical place of return of item | Physical place at which the item is returned, i.e. the location where the supplier receives the item form the customer. |
| Phytosanitary control place | Place where phytosanitary control has been or must be performed. |
| Pick-up location | Location for pick up. |
| Place for re-icing or de-icing | Place where re-icing or de-icing has been or must be performed. |
| Place/location of off-hire | Place/location where an objects contract for use ends. |
| Place/location of on-hire | Place/location where an object is contracted for use. |
| Place of acceptance | (3348) Place at which the goods are taken over by the carrier. |
| Place of arrival | Place at which the transport means arrives. |
| Place of authentication of document | (3410) Place where document is signed or otherwise authenticated. Synonym: Place of issue of document. |
| Place of business | Identifies the place or location of a business. |
| Place of collection | Place where goods are to be or could be picked up (collected). |
| Place of consolidation | Place where smaller consignments of goods are grouped together into a large consignment to be transported as a larger unit. |
| Place of consumption | Place/location where goods enter the marketplace (commerce) of the importing country. |
| Place of Customs examination | Place where Customs undertakes a physical inspection of goods to satisfy themselves that the goods nature, origin, condition, quantity and value are in accordance with the particulars furnished on the goods declaration (CCC). |
| Place of deconsolidation | Place where a large consignment is de-grouped into smaller consignments. |
| Place of delivery | (3246) Place to which the goods are to be finally delivered under transport contract terms (operational term). |
| Place of delivery (by on carriage) | Place to which the goods are to be finally delivered. |
| Place of departure | (3214) Port, airport or other location from which a means of transport or transport equipment is scheduled to depart or has departed. |
| Place of destination | Port, airport or other location to which a means of transport or transport equipment is destined. |
| Place of destination for pre-stacking prior to stowage | The destination location for which items are to be pre-stacked prior to being stowed together on a means of transport. |
| Place of discharge and loading | Place at which a means of transport is performing both discharge and loading operations, e.g. seaport, airport,freight terminal, rail station. |
| Place of discharge of empty equipment | Seaport, airport, freight terminal, rail station or other place where empty equipment (e.g. containers) was unloaded from means of transport. |
| Place of disembarkation | Place where the object or person disembarks from the conveyance. |
| Place of dispatch | Place at which the goods are taken over for carriage (operational term), if different from the transport contract place of acceptance (see: 10). Synonym: Place of origin of carriage. |
| Place of document issue | The place or location where a document is issued. |
| Place of embarkation | Place where the object is put, or goes, on board the conveyance. |
| Place of empty equipment dispatch | The location from which empty equipment is despatched. |
| Place of empty equipment return | The location to which empty equipment is returned. |
| Place of entry (Customs) | Place at which the goods enter the Customs territory. |
| Place of expiry | Place where the documentary credit expires for presentation of required documents. |
| Place of handling | Place where a handling operation is to be, or has been,performed. |
| Place of incorporation | Identifies the location of incorporation. |
| Place of inquiry | Place to which an inquiry is made. |
| Place of live animal care | Place where live animal care has been or must be provided. |
| Place of loading of empty equipment | Seaport, airport, freight terminal, rail station or other place where empty equipment (e.g. containers) was loaded onto means of transport. |
| Place of lodgement of documents | Customs station where, required documents for Customs declarations, have been lodged. |
| Place of loss | To identify the location where the loss occurred. |
| Place of negotiation | Place where the documentary credit is to be presented for negotiation. |
| Place of payment | Name of the location at which freight and charges for main transport are payable. |
| Place of prolongation decision of delivery delay | Place where it has been decided to prolong the delivery delay. |
| Place of provision of an unexpected service | Place where an unexpected service has been or must be provided. |
| Place of receipt | Identification of the location at which the cargo is actually received. |
| Place of refueling | Place where refuelling has been or must be performed. |
| Place of registration | Place where the registration occurs. |
| Place of residence | A place where a party lives. |
| Place of terms of delivery | (3018) Point or port of departure, shipment or destination, as required under the applicable terms of delivery, e.g. Incoterms. |
| Place of transfer | Place at which goods are transferred from one carrier to another (contractual term). |
| Place of transfer of ownership | Place where the ownership of the goods is transferred. |
| Place of transfer responsibility | Place where the responsibility is transferred. |
| Place of transshipment | (3424) Place where goods are transferred from one means of transport to another (operational term). |
| Place of ultimate destination of conveyance | Seaport, airport, freight terminal, rail station or other place to which a means of transport is ultimately destined. |
| Place of ultimate destination of goods | Place where goods will ultimately be delivered. |
| Place or location of sale | Place or location at which the sale takes place. |
| Place/port of conveyance initial arrival | Place/port in the country of destination where the conveyance initially arrives from the "Last place/port of call of conveyance" (125). |
| Place/port of discharge | (3392 + 3414) Seaport, airport, freight terminal, rail station or other place at which the goods (cargo) are unloaded from the means of transport having been used for their carriage. |
| Place/port of first entry | Place or port where final documentation is filed for Customs entry processing. |
| Place/port of loading | (3334 + 3230) Seaport, airport, freight  terminal, rail station or other place at which the goods (cargo) are loaded on to the means of transport being used for their carriage. |
| Place/port of warehouse entry | Location (e.g. district) within a Customs territory where a warehouse entry was filed to enter merchandise into a Customs bonded warehouse. |
| Port connection | Track connecting a rail station to a dock. |
| Port of call | Port where a vessel has called upon or will call upon. |
| Port of discharge | Port at which the goods are discharged from the vessel used for their transport. |
| Port of entry | Port where final documentation is filed for Customs               Entry processing. |
| Port of release | Port where goods are released from Customs custody. |
| Pre-carriage port | Port of loading at which the cargo is loaded on the pre- carriage vessel used for the transport prior to the main transport. |
| Previous berth | Place or location in a port where a vessel was previously moored. |
| Previous port of call | Previous port which the vessel has called upon. |
| Price area | An area for which the same price is applicable to the whole area. |
| Private container terminal | Container terminal managed or owned by a private company. |
| Property | Identifies the place or location of property. |
| Railway container terminal | Container terminal managed or owned by a railway company. |
| Railway station | Name or identification of a railway station/yard              relevant to a particular consignment. |
| Rate combination point | Point over which sector rates are combined. |
| Recharging place/location | Place/location where a consignment has been changed of destination and is subject to a recharge note. (Complementary orders to modify the routing of the transport may be given, upon which a new charge calculation may be applied by the carrier). |
| Reconsolidation point | A place where cargo is reconsolidated. |
| Region of delivery | (3246) Region to which the goods are to be finally delivered under transport contract terms (operationalterm). |
| Region of destination | Region known to the consignor or his agent at the time of despatch to be the final region to which the goods are to be delivered. |
| Region of dispatch | Region from which goods are despatched between countries of a Customs union. |
| Region of equipment availability | Region in which a piece of equipment is requested to be made available for on-hire. |
| Region of export/dispatch | Region from which the goods were initially exported to the importing country without any commercial transaction taking place in intermediate countries. Region of despatch: region from which goods are despatched between countries of a Customs union. |
| Region of origin | Region in which the goods have been produced ormanufactured according to the criteria laid down for the purposes of the application of the Customs tariff, of quantitative restrictions or of any other measures related to trade (see: 3238). |
| Region of production | Region where item has been or will be produced. |
| Registered office | Identifies the place or location of a registered office. |
| Re-icing place | Place where re-icing must be executed. |
| Relay port | A location where cargo is transferred from one means of              transport to another means of transport owned or operated by the same carrier under the same bill of lading. |
| Reporting location | The location to which the information being reported is applicable. |
| Request only stop | A location where a stop is only made on request. |
| rivate box | PA private box used for pick-up and delivery of packages,       e.g. of express packages. |
| Routing | Indication of a routing place. |
| Sailing destination area | Geographical area to which the vessels trip is destined. |
| Sample location | Code identifying the location from which a sample is            taken. |
| Scheduled berth | Place or location in a port where a vessel is scheduled to be moored. |
| Scheduled berth, bow | Place or location in a port where the bow of a vessel is scheduled to berth. |
| Scheduled berth, stern | Place or location in a port where the stern of a vessel is scheduled to berth. |
| Second optional place of discharge | The second optional place or port of discharge as mentioned on the transport document where cargo can be discharged at the option of shipper. |
| Siding | A short railway track for loading or unloading rail wagons, or bypassing of trains, connected with a main track by switch. |
| Sink power area | The area that is the destination of power. |
| Slaughterhouse | Place for the slaughter of animals as food. |
| Source power area | The area that is the source of power. |
| Special treatment place | Place where one or more special treatments have happened or must happen. |
| Station of application of additional costs | Rail station where, according to the transport contract, some chargeable operations must happen (re-weighting, re-fixing of the load, control on equipment and on consignment, etc.). |
| Stopping station | Station where the train must stop or is stopped for unexpected handling. |
| Stowage location | [8042] Indication of the location on board a means of transport where specified goods or transport equipment have been or are to be placed. |
| Sub-project location | A place at which works occur referring to a sub-project. |
| Tare check place | Place where equipment tare has been or must be checked for official assessment. |
| Tax filed from location | Identifies the location from which taxes are filed. |
| Terminal | A terminus for transport vehicles. |
| Terms of sale place | Place of departure, shipment or destination as specified in the terms of sale agreed between the parties. |
| Third optional place of discharge | The third optional place or port of discharge as mentioned on the transport document where cargo can be discharged at the option of the shipper. |
| Tourist point of interest | Code to specify that the location is a tourist point of interest. |
| Transhipment excluding this place | Place/location where a transhipment from a means of transport to another means of transport is not authorised. |
| Transhipment limited to this place | Only place/location where a transhipment from a means of transport to another means of transport is authorised. |
| Transport contract place of acceptance | Place at which the goods are taken over by the carrier according to the contract of carriage. |
| Transport contract place of destination | Place to which the goods are destined. |
| Transport contract place of dispatch | A place from which goods are despatched as per transport contract. |
| Wage negotiation district | The district to which workers belong for the purposes of union wage negotiation. |
| Wagon-load railway station | A railway station where rail wagons are loaded. |
| Ward bed | A bed in a ward. |
| Warehouse | (3156) Warehouse where a particular consignment has been              stored. |
| Weighting place | Place where weight can be ascertained. |

<a href="#type-index">Back to type index</a>
## LocationKindCodeSimpleType

A data type for the kinds of locations that may appear on an itinerary.

| Code | Definition |
| --- | --- |
| airport | airport |
| city | city |
| customs facility | customs facility |
| seaport | seaport |

<a href="#type-index">Back to type index</a>
## MeasureUnitCodeSimpleType

A data type representing the type measure unit whether area, volume etc..

| Code | Definition |
| --- | --- |
| Area | Area |
| Quantity | Quantity |
| Volume | Volume |
| Weight | Weight |

<a href="#type-index">Back to type index</a>
## PackagingFormCodeSimpleType

A data type for the various forms of packaging.

| Code | Definition |
| --- | --- |
| AmmoPack | AmmoPack |
| Bag | Bag |
| Bale | Bale |
| Barrel | Barrel |
| Beam | Beam |
| Bottle | Bottle |
| Box | Box |
| BoxWithInnerContainer | BoxWithInnerContainer |
| BulkBag | BulkBag |
| Bundle | Bundle |
| Can | Can |
| Carboy | Carboy |
| Carton | Carton |
| Case | Case |
| Cask | Cask |
| Coil | Coil |
| Cones | Cones |
| Container | Container |
| Crate | Crate |
| Cylinder | Cylinder |
| Drum | Drum |
| Flask | Flask |
| GarmentsOnHangers | GarmentsOnHangers |
| HouseholdGoods | HouseholdGoods |
| Keg | Keg |
| Kit | Kit |
| Lifts | Lifts |
| OnOwnWheel | OnOwnWheel |
| Other | Other |
| Package | Package |
| Pail | Pail |
| Pallet | Pallet |
| Pieces | Pieces |
| Rack | Rack |
| Reel | Reel |
| Roll | Roll |
| Sheet | Sheet |
| Skid | Skid |
| Slip | Slip |
| Spool | Spool |
| Tank | Tank |
| TriWallBox | TriWallBox |
| Tube | Tube |
| Units | Units |
| Unknown | Unknown |
| Vehicles | Vehicles |

<a href="#type-index">Back to type index</a>
## ProcessingEstablishmentIDCodeSimpleType

A data type for a the identification code specifying the slaughtering, freezing, or other processing establishment.

| Code | Definition |
| --- | --- |
| DUNS | DUNS |
| EAN | EAN |

<a href="#type-index">Back to type index</a>
## RoleOfPartyCategoryCodeSimpleType

A data type for the category of role played by the Party/Organization in the given context of a transaction

| Code | Definition |
| --- | --- |
| Agent | Agent |
| Buyer | Buyer |
| Carrier | Carrier |
| Consignee | Consignee |
| Consignor | Consignor |
| Consolidator | Consolidator |
| ConsortiumCarrier | ConsortiumCarrier |
| ContainerTerminalOperator | ContainerTerminalOperator |
| Deconsolidator | Deconsolidator |
| Exporter | Exporter |
| Importer | Importer |
| IntermediateCarrier | IntermediateCarrier |
| IntermediateConsignee | IntermediateConsignee |
| LoadingProofParty | LoadingProofParty |
| Manufacturer | Manufacturer |
| Master | Master |
| NonVesselOperatingCarrier | NonVesselOperatingCarrier |
| NotifyParty | NotifyParty |
| ProcessingEstablishment | ProcessingEstablishment |
| Seller | Seller |
| Stevedore | Stevedore |
| StuffingEstablishment | StuffingEstablishment |
| TransportContractDocument | TransportContractDocument |
| TransportEquipment | TransportEquipment |
| TransportMeansOperator | TransportMeansOperator |
| TransportMeansOwner | TransportMeansOwner |
| UNDGContact | UNDGContact |

<a href="#type-index">Back to type index</a>
## SealIntactStatusCodeSimpleType

A data type for the status conditions of seal.

| Code | Definition |
| --- | --- |
| Absent | The seal is missing. |
| Broken | The seal has been broken. |
| Intact | The seal is intact. |

<a href="#type-index">Back to type index</a>
## SealVerificationStatusCodeSimpleType

A data type for the status of seal verification.

| Code | Definition |
| --- | --- |
| unknown | The status of seal verification is unknown. |
| unverified | The seal has not been verified by a CBP/CSI officer. |
| verified | The seal has been verified by a CBP/CSI officer. |

<a href="#type-index">Back to type index</a>
## ShapeCodeSimpleType

A data type for the kinds of geometric shapes.

| Code | Definition |
| --- | --- |
| box | box |
| horizontal cylinder | horizontal cylinder |
| irregular | irregular |
| other | other |
| pyramid | pyramid |
| sphere | sphere |
| vertical cylinder | vertical cylinder |

<a href="#type-index">Back to type index</a>
## StatusCodeSimpleType

A data type for a status in the process

| Code | Definition |
| --- | --- |
| 1 | To be done. Remark that the requested service in the order remains outstanding. |
| 10 | 0 day available.  The amount is available today. |
| 100 | Satisfied. Adequately met, fulfilled or complied with all conditions. |
| 101 | Set aside. Set aside by using ones authority |
| 102 | Settled.  Concluded by mutual agreement. |
| 103 | Settled out of court. The matter has been settled out of court. |
| 104 | Stayed. A stopping of the proceedings. |
| 105 | Terminated. Brought to an end. |
| 106 | Arranged. Planned or provided for. |
| 107 | Not arranged.  Not planned or provided for. |
| 108 | Instructed to start. Received instruction to start. |
| 109 | Instructed to stop. Received instruction to stop. |
| 11 | 1 day available,  The amount is available on the next banking office day after the booking date |
| 110 | Stock quantity corrected. A difference in quantity between stocks has been corrected. |
| 111 | Inactive.  Not in operation. |
| 112 | Active.   In operation. |
| 113 | Incomplete data.  The data is incomplete. |
| 114 | Booked when overbooked. The booking has been made although there is no more availability. |
| 115 | Provisional. The object is in a provisional status. |
| 116 | Ticketed. The ticket has been issued. |
| 117 | Washed. The object is washed. |
| 118 | Unwashed. The object is not washed. |
| 119 | Out of date. The information is out of date. |
| 12 | 2 days available. The amount is available on the second banking office day  after the booking date. |
| 120 | Alternative.  The information is an alternative to the request. |
| 121 | Complete. Entire. |
| 122 | Partial.  Not complete. |
| 123 | Contracted.    Governed by a contract. |
| 124 | Technically limited. Governed by technical limitations. |
| 125 | Adjusted. The information is adjusted. |
| 126 | Expected delivery. The consignment which is/was expected. |
| 127 | Measured.  The referenced item has been measured. |
| 128 | Ready for loading. The referenced item is ready for loading. |
| 129 | Not heat treated. The object is not heat treated. |
| 13 | 3 days available.  The amount available on the third banking office day   after the booking date. |
| 130 | Heat treated. The object is heat treated. |
| 131 | Fully cooked.   The object is fully cooked. |
| 132 | Not fully cooked. The object is not fully cooked. |
| 133 | Hothouse grown. The object is hothouse grown. |
| 134 | Knocked down. The object is disassembled. |
| 135 | Solid. The object is a solid. |
| 136 | Liquid. The object is a liquid. |
| 137 | Gas. The object is in a gaseous form. |
| 138 | Sludge.The object is a semi-solid material. |
| 14 | Uncollected funds  Funds not collected by beneficiary. |
| 15 | Nil.  The amount or quantity is zero. |
| 16 | None advised. No status or condition has been advised. |
| 17 | Requested. A status or condition has been requested. |
| 18 | Free of charge.    No charge is to be made. |
| 19 | Rounded.   The quantity has been the subject of a rounding  operation. |
| 2 | Done. The instruction has been completed. |
| 20 | Permanent.   Intended to last or function indefinitely. |
| 21 | Temporary.   Lasting or intended to last or function for a limited  time. |
| 22 | Subject to agreed condition.     Subject to agreed condition. |
| 23 | Added. In addition to. |
| 24 | Deducted.     A deduction from. |
| 25 | Included.  Is included in. |
| 26 | Subject to clearing.      Clearing operations are to be applied. |
| 27 | Subject to bilaterally agreed condition. Bilaterally agreed conditions are to be applied. |
| 28 | Transaction expected to be executed. The transaction is expected to be executed. |
| 29 | Debit.   The object has a status of debit. |
| 3 | Passed on.  The information has been passed on. |
| 30 | Credit.  The object has a status of credit. |
| 31 | Positive debit.  The object has a status of positive debit. |
| 32 | Negative debit. The object has a status of negative debit. |
| 33 | Positive credit.        The object has a status of positive credit. |
| 34 | Negative credit.   The object has a status of negative credit. |
| 35 | Started. To specify an event has started. |
| 36 | Revised.    To indicate a revision has been made. |
| 37 | Stolen.   A consignment or goods have been stolen. |
| 38 | Assigned. A value has been assigned to an item. |
| 39 | Approved. Approval has been given. |
| 4 | Final.  The amount has the status of finality. |
| 40 | Withdrawn. Item is withdrawn. |
| 41 | Rejected. Item is rejected. |
| 42 | Approval pending.  Approval is pending. |
| 43 | Postponed.  Further action is delayed. |
| 44 | Replaced.  Item has been replaced. |
| 45 | No status.  There is no status information to report. |
| 46 | Does not exist.  Non existent. |
| 47 | Draft version.    A preliminary version. |
| 48 | Live version. A version with a live status. |
| 49 | Expired version.  A version which no longer has a live status. |
| 5 | Subject to final payment. The amount is subject to finality. |
| 50 | Part-time. Using only part of the available time. |
| 51 | Full-time. Using the whole of the available time. |
| 52 | Not a student. Not enrolled in an educational program. |
| 53 | To be extracted.  To be removed. |
| 54 | Impacted tooth.  Tooth wedged between another tooth and the jaw. |
| 55 | Extracted.  Removed. |
| 56 | Estimated. The value is estimated. |
| 57 | Undefined incident. An undefined incident has occurred. |
| 58 | Quantity error. The quantity is an error. |
| 59 | Monetary amount error. The monetary amount is an error. |
| 6 | Minimum. The amount quoted is a minimum tariff. |
| 60 | Product not ordered. The product was not ordered. |
| 61 | Uncertain. The value is uncertain. |
| 62 | Significant. Noteworthy. |
| 63 | Not accepted. The item has not been accepted. |
| 64 | Order or request cancelled. The referenced order or request has been cancelled. |
| 65 | Negative. Negative status. |
| 66 | Unsigned amount. The status of the amount is unsigned. |
| 67 | Preliminary. Preparatory to. |
| 68 | Split. Divided into parts. |
| 69 | Recommended. The object is favoured in preference to other alternatives. |
| 7 | Fixed.The amount quoted is a fixed tariff. |
| 70 | Issued. Has been given out. |
| 71 | Available for ordering.  Goods are available for ordering. |
| 72 | Not available for ordering. Goods are not available for ordering. |
| 73 | Confirmed.   Officially acknowledged. |
| 74 | Expiry date exceeded.  The expiry date has been exceeded. |
| 75 | Prescribed.  Advised the use of. |
| 76 | All published issues since subscription start. Applies to all published issues since subscription start. |
| 77 | All published issues since issue specified in claim.  Applies to all published issues since issue specified in claim. |
| 78 | All published issues from and including issue specified in claim. |
| 79 | Specified published issue only.  Applies to specified published issue only. |
| 8 | Maximum. The amount quoted is a maximum tariff. |
| 80 | Publication issue cancelled.  Publication issue has been cancelled. |
| 81 | Definitive.  The status is definitive. |
| 82 | Supplementary. An addition to something. |
| 83 | Under legal appeal. An application to a court for a reconsideration of the decision |
| 84 | Legally assigned. Transferred legally to another party. |
| 85 | Updated. Brought up to date. |
| 86 | Ratified. Made valid or binding by some formal or legal act. |
| 87 | Under consideration. Being considered. |
| 88 | Countersued. A response to institute legal proceedings in which an entity has filed a law suit. |
| 89 | Legal item dismissed. Refused further hearing to a legal matter. |
| 9 | Information.  The amount is quoted for information only, it is not  part of the charges to be deducted or added. |
| 90 | Disputed.  Questioned validity. |
| 91 | Enforced. Compelled observance. |
| 92 | Legal documentation filed.  Submitted a petition, document or application to the    appropriate authority. |
| 93 | Judgement for defendant. A judgement for the defendant was rendered. |
| 94 | Judgement for plaintiff. A judgement for the plaintiff was rendered. |
| 95 | Unchanged.  Unaltered. |
| 96 | Legal documentation not filed.  No petition, document or application was submitted to the appropriate authority. |
| 97 | Pending. Awaiting decision or settlement. |
| 98 | Debt released. Released a debt. |
| 99 | Law suit filed. A law suit was filed. |

<a href="#type-index">Back to type index</a>
## TransportMeansCodeSimpleType

A data type for the code that represents the kind of Transport means.

| Code | Definition |
| --- | --- |
| Air | IATA International Aircraft Type Codes |
| Rail | Locomotive number |
| Road | national license |
| SEA | ITU Standard or Lloyds |

<a href="#type-index">Back to type index</a>
## UNECECategoryCodeSimpleType

A data type for the UNECE Categorization of the container/Packaging.

| Code | Definition |
| --- | --- |
| 1A | Drum, steel |
| 1B | Drum, aluminium |
| 1D | Drum, plywood |
| 1G | Drum, fibre |
| 1W | Drum, wooden |
| 2C | Barrel, wooden |
| 3A | Jerrican, steel |
| 3H | Jerrican, plastic |
| 43 | Bag, super bulk |
| 4A | Box, steel |
| 4B | Box, aluminium |
| 4C | Box, natural wood |
| 4D | Box, plywood |
| 4F | Box, reconstituted wood |
| 4G | Box, fibreboard |
| 4H | Box, plastic |
| 5H | Bag, woven plastic |
| 5L | Bag, textile |
| 5M | Bag, paper |
| 6H | Composite packaging, plastic receptacle |
| 6P | Composite packaging, glass receptacle |
| AA | Intermediate bulk container, rigid plastic |
| AB | Receptacle, fibre |
| AC | Receptacle, paper |
| AD | Receptacle, wooden |
| AE | Aerosol |
| AF | Pallet, modular, collars 80cms * 60cms |
| AG | Pallet, shrinkwrapped |
| AH | Pallet, 100cms * 110cms |
| AI | Clamshell |
| AJ | Cone |
| AM | Ampoule, non-protected |
| AP | Ampoule, protected |
| AT | Atomizer |
| AV | Capsule |
| BA | Barrel |
| BB | Bobbin |
| BC | Bottlecrate / bottlerack |
| BD | Board |
| BE | Bundle |
| BF | Balloon, non-protected |
| BG | Bag |
| BH | Bunch |
| BI | Bin |
| BJ | Bucket |
| BK | Basket |
| BL | Bale, compressed |
| BM | Basin |
| BN | Bale, non-compressed |
| BO | Bottle, non-protected, cylindrical |
| BP | Balloon, protected |
| BQ | Bottle, protected cylindrical |
| BR | Bar |
| BS | Bottle, non-protected, bulbous |
| BT | Bolt |
| BU | Butt |
| BV | Bottle, protected bulbous |
| BW | Box, for liquids |
| BX | Box |
| BY | Board, in bundle/bunch/truss |
| BZ | Bars, in bundle/bunch/truss |
| CA | Can, rectangular |
| CB | Crate, beer |
| CC | Churn |
| CD | Can, with handle and spout |
| CE | Creel |
| CF | Coffer |
| CG | Cage |
| CH | Chest |
| CI | Canister |
| CJ | Coffin |
| CK | Cask |
| CL | Coil |
| CM | Card |
| CN | Container, not otherwise specified as transport equipment |
| CO | Carboy, non-protected |
| CP | Carboy, protected |
| CQ | Cartridge |
| CR | Crate |
| CS | Case |
| CT | Carton |
| CU | Cup |
| CV | Cover |
| CW | Cage, roll |
| CX | Can, cylindrical |
| CY | Cylinder |
| CZ | Canvas |
| DA | Crate, multiple layer, plastic |
| DB | Crate, multiple layer, wooden |
| DC | Crate, multiple layer, cardboard |
| DG | Cage, Commonwealth Handling Equipment Pool  (CHEP) |
| DH | Box, Commonwealth Handling Equipment Pool (CHEP), Eurobox |
| DI | Drum, iron |
| DJ | Demijohn, non-protected |
| DK | Crate, bulk, cardboard |
| DL | Crate, bulk, plastic |
| DM | Crate, bulk, wooden |
| DN | Dispenser |
| DP | Demijohn, protected |
| DR | Drum |
| DS | Tray, one layer no cover, plastic |
| DT | Tray, one layer no cover, wooden |
| DU | Tray, one layer no cover, polystyrene |
| DV | Tray, one layer no cover, cardboard |
| DW | Tray, two layers no cover, plastic tray |
| DX | Tray, two layers no cover, wooden |
| DY | Tray, two layers no cover, cardboard |
| EC | Bag, plastic |
| ED | Case, with pallet base |
| EE | Case, with pallet base, wooden |
| EF | Case, with pallet base, cardboard |
| EG | Case, with pallet base, plastic |
| EH | Case, with pallet base, metal |
| EI | Case, isothermic |
| EN | Envelope |
| FC | Crate, fruit |
| FD | Crate, framed |
| FI | Firkin |
| FL | Flask |
| FO | Footlocker |
| FP | Filmpack |
| FR | Frame |
| FT | Foodtainer |
| FW | Cart, flatbed |
| FX | Bag, flexible container |
| GB | Bottle, gas |
| GI | Girder |
| GR | Receptacle, glass |
| GU | Tray, containing horizontally stacked flat items |
| GZ | Girders, in bundle/bunch/truss |
| HA | Basket, with handle, plastic |
| HB | Basket, with handle, wooden |
| HC | Basket, with handle, cardboard |
| HG | Hogshead |
| HR | Hamper |
| IA | Package, display, wooden |
| IB | Package, display, cardboard |
| IC | Package, display, plastic |
| ID | Package, display, metal |
| IE | Package, show |
| IF | Package, flow |
| IG | Package, paper wrapped |
| IH | Drum, plastic |
| IK | Package, cardboard, with bottle grip-holes |
| IL | Tray, rigid, lidded stackable (CEN TS 14482:2002) |
| IN | Ingot |
| IZ | Ingots, in bundle/bunch/truss |
| JC | Jerrican, rectangular |
| JG | Jug |
| JR | Jar |
| JT | Jutebag |
| JY | Jerrican, cylindrical |
| KG | Keg |
| LG | Log |
| LT | Lot |
| LV | Liftvan |
| LZ | Logs, in bundle/bunch/truss |
| MB | Bag, multiply |
| MC | Crate, milk |
| MR | Receptacle, metal |
| MS | Sack, multi-wall |
| MT | Mat |
| MW | Receptacle, plastic wrapped |
| MX | Matchbox |
| NA | Not available |
| NE | Unpacked or unpackaged |
| NF | Unpacked or unpackaged, single unit |
| NG | Unpacked or unpackaged, multiple units |
| NS | Nest |
| NT | Net |
| NU | Net, tube, plastic |
| NV | Net, tube, textile |
| OA | Pallet, CHEP 40 cm x 60 cm |
| OB | Pallet, CHEP 80 cm x 120 cm |
| OC | Pallet, CHEP 100 cm x 120 cm |
| OD | Pallet, AS 4068-1993 |
| OE | Pallet, ISO T11 |
| OF | Platform, unspecified weight or dimension |
| OK | Block |
| PA | Packet |
| PB | Pallet, box Combined open-ended box and pallet |
| PC | Parcel |
| PD | Pallet, modular, collars 80cms * 100cms |
| PE | Pallet, modular, collars 80cms * 120cms |
| PF | Pen |
| PG | Plate |
| PH | Pitcher |
| PI | Pipe |
| PJ | Punnet |
| PK | Package |
| PL | Pail |
| PN | Plank |
| PO | Pouch |
| PR | Receptacle, plastic |
| PT | Pot |
| PU | Tray |
| PV | Pipes, in bundle/bunch/truss |
| PX | Pallet |
| PY | Plates, in bundle/bunch/truss |
| PZ | Planks, in bundle/bunch/truss |
| QA | Drum, steel, non-removable head |
| QB | Drum, steel, removable head |
| QC | Drum, aluminium, non-removable head |
| QD | Drum, aluminium, removable head |
| QF | Drum, plastic, non-removable head |
| QG | Drum, plastic, removable head |
| QH | Barrel, wooden, bung type |
| QJ | Barrel, wooden, removable head |
| QK | Jerrican, steel, non-removable head |
| QL | Jerrican, steel, removable head |
| QM | Jerrican, plastic, non-removable head |
| QN | Jerrican, plastic, removable head |
| QP | Box, wooden, natural wood, ordinary |
| QQ | Box, wooden, natural wood, with sift proof walls |
| QR | Box, plastic, expanded |
| QS | Box, plastic, solid |
| RD | Rod |
| RG | Ring |
| RJ | Rack, clothing hanger |
| RK | Rack |
| RL | Reel |
| RO | Roll |
| RT | Rednet |
| RZ | Rods, in bundle/bunch/truss |
| SA | Sack |
| SB | Slab |
| SC | Crate, shallow |
| SD | Spindle |
| SE | Sea-chest |
| SH | Sachet |
| SI | Skid |
| SK | Case, skeleton |
| SL | Slipsheet |
| SM | Sheetmetal |
| SO | Spool |
| SP | Sheet, plastic wrapping |
| SS | Case, steel |
| ST | Sheet |
| SU | Suitcase |
| SV | Envelope, steel |
| SW | Shrinkwrapped |
| SX | Set |
| SY | Sleeve |
| SZ | Sheets, in bundle/bunch/truss |
| TB | Tub |
| TC | Tea-chest |
| TD | Tube, collapsible |
| TI | Tierce |
| TK | Tank, rectangular |
| TL | Tub, with lid |
| TN | Tin |
| TO | Tun |
| TR | Trunk |
| TS | Truss |
| TU | Tube |
| TV | Tube, with nozzle |
| TY | Tank, cylindrical |
| TZ | Tubes, in bundle/bunch/truss |
| UC | Uncaged |
| VA | Vat |
| VG | Bulk, gas (at 1031 mbar and 15 degrees C) |
| VI | Vial |
| VK | Vanpack |
| VL | Bulk, liquid |
| VN | Vehicle |
| VO | Bulk, solid, large particles ('nodules') |
| VP | Vacuum-packed |
| VQ | Bulk, liquefied gas (at abnormal temperature/pressure) |
| VR | Bulk, solid, granular particles ('grains') |
| VY | Bulk, solid, fine particles ('powders') |
| WA | Intermediate bulk container |
| WB | Wickerbottle |
| WC | Intermediate bulk container, steel |
| WD | Intermediate bulk container, aluminium |
| WF | Intermediate bulk container, metal |
| WG | Intermediate bulk container, steel, pressurised greater than 10 kpa |
| WH | Intermediate bulk container, aluminium, pressurised greater than 10 kpa |
| WJ | Intermediate bulk container, metal, pressure 10 kpa |
| WK | Intermediate bulk container, steel, liquid |
| WL | Intermediate bulk container, aluminium, liquid |
| WM | Intermediate bulk container, metal, liquid |
| WN | Intermediate bulk container, woven plastic, without coat/liner |
| WP | Intermediate bulk container, woven plastic, coated |
| WQ | Intermediate bulk container, woven plastic, with liner |
| WR | Intermediate bulk container, woven plastic, coated and liner |
| WS | Intermediate bulk container, plastic film |
| WT | Intermediate bulk container, textile with out coat/liner |
| WU | Intermediate bulk container, natural wood, with inner liner |
| WV | Intermediate bulk container, textile, coated |
| WW | Intermediate bulk container, textile, with liner |
| WX | Intermediate bulk container, textile, coated and liner |
| WY | Intermediate bulk container, plywood, with inner liner |
| WZ | Intermediate bulk container, reconstituted wood, with inner liner |
| XA | Bag, woven plastic, without inner coat/liner |
| XB | Bag, woven plastic, sift proof |
| XC | Bag, woven plastic, water resistant |
| XD | Bag, plastics film |
| XF | Bag, textile, without inner coat/liner |
| XG | Bag, textile, sift proof |
| XH | Bag, textile, water resistant |
| XJ | Bag, paper, multi-wall |
| XK | Bag, paper, multi-wall, water resistant |
| YA | Composite packaging, plastic receptacle in steel drum |
| YB | Composite packaging, plastic receptacle in steel crate box |
| YC | Composite packaging, plastic receptacle in aluminium drum |
| YD | Composite packaging, plastic receptacle in aluminium crate |
| YF | Composite packaging, plastic receptacle in wooden box |
| YG | Composite packaging, plastic receptacle in plywood drum |
| YH | Composite packaging, plastic receptacle in plywood box |
| YJ | Composite packaging, plastic receptacle in fibre drum |
| YK | Composite packaging, plastic receptacle in fibreboard box |
| YL | Composite packaging, plastic receptacle in plastic drum |
| YM | Composite packaging, plastic receptacle in solid plastic box |
| YN | Composite packaging, glass receptacle in steel drum |
| YP | Composite packaging, glass receptacle in steel crate box |
| YQ | Composite packaging, glass receptacle in aluminium drum |
| YR | Composite packaging, glass receptacle in aluminium crate |
| YS | Composite packaging, glass receptacle in wooden box |
| YT | Composite packaging, glass receptacle in plywood drum |
| YV | Composite packaging, glass receptacle in wickerwork hamper |
| YW | Composite packaging, glass receptacle in fibre drum |
| YX | Composite packaging, glass receptacle in fibreboard box |
| YY | Composite packaging, glass receptacle in expandable plastic pack |
| YZ | Composite packaging, glass receptacle in solid plastic pack |
| ZA | Intermediate bulk container, paper, multi-wall |
| ZB | Bag, large |
| ZC | Intermediate bulk container, paper, multi-wall, water resistant |
| ZD | Intermediate bulk container, rigid plastic, with structural equipment, solids |
| ZF | Intermediate bulk container, rigid plastic, freestanding, solids |
| ZG | Intermediate bulk container, rigid plastic, with structural equipment, pressurised |
| ZH | Intermediate bulk container, rigid plastic, freestanding, pressurised |
| ZJ | Intermediate bulk container, rigid plastic, with structural equipment, liquids |
| ZK | Intermediate bulk container, rigid plastic, freestanding, liquids |
| ZL | Intermediate bulk container, composite, rigid plastic, solids |
| ZM | Intermediate bulk container, composite, flexible plastic, solids |
| ZN | Intermediate bulk container, composite, rigid plastic, pressurised |
| ZP | Intermediate bulk container, composite, flexible plastic, pressurised |
| ZQ | Intermediate bulk container, composite, rigid plastic, liquids |
| ZR | Intermediate bulk container, composite, flexible plastic, liquids |
| ZS | Intermediate bulk container, composite |
| ZT | Intermediate bulk container, fibreboard |
| ZU | Intermediate bulk container, flexible |
| ZV | Intermediate bulk container, metal, other than steel |
| ZW | Intermediate bulk container, natural wood |
| ZX | Intermediate bulk container, plywood |
| ZY | Intermediate bulk container, reconstituted wood |
| ZZ | Mutually defined |

<a href="#type-index">Back to type index</a>
## VolumeMeasureUnitCodeSimpleType

A data type for the units of measure in which volume may be expressed.

| Code | Definition |
| --- | --- |
| acre foot | acre foot |
| acre-inch | acre-inch |
| barrel (Imperial) | barrel (Imperial) |
| barrel (petroleum) | barrel (petroleum) |
| barrel (U.S. dry) | barrel (U.S. dry) |
| barrel (U.S. fluid) | barrel (U.S. fluid) |
| beer gallon | beer gallon |
| board-foot | board-foot |
| breakfast cup | breakfast cup |
| bucket (Imperial) | bucket (Imperial) |
| bushel (Imperial) | bushel (Imperial) |
| bushel (U.S. dry heaped) | bushel (U.S. dry heaped) |
| bushel (U.S. dry level) | bushel (U.S. dry level) |
| butt, pipe | butt, pipe |
| coomb | coomb |
| cord (firewood) | cord (firewood) |
| cord-foot | cord-foot |
| cubic fathom | cubic fathom |
| cubic foot | cubic foot |
| cubic inch | cubic inch |
| cubic metre (SI unit) | cubic metre (SI unit) |
| cubic mile | cubic mile |
| cubic yard | cubic yard |
| cup (Canadian) | cup (Canadian) |
| cup (metric) | cup (metric) |
| cup (U.S.) | cup (U.S.) |
| dash (Imperial) | dash (Imperial) |
| dash (U.S.) | dash (U.S.) |
| dessertspoon (Imperial) | dessertspoon (Imperial) |
| displacement ton | displacement ton |
| drop (Imperial) | drop (Imperial) |
| drop (Imperial) (alt) | drop (Imperial) (alt) |
| drop (medical) | drop (medical) |
| drop (metric) | drop (metric) |
| drop (U.S.) | drop (U.S.) |
| drop (U.S.) (alt) | drop (U.S.) (alt) |
| fifth | fifth |
| firkin | firkin |
| fluid drachm (Imperial) | fluid drachm (Imperial) |
| fluid dram (U.S.); U.S. fluidram | fluid dram (U.S.); U.S. fluidram |
| fluid ounce (Imperial) | fluid ounce (Imperial) |
| fluid ounce (U.S.) | fluid ounce (U.S.) |
| fluid scruple (Imperial) | fluid scruple (Imperial) |
| freight ton | freight ton |
| gallon (Imperial) | gallon (Imperial) |
| gallon (U.S. dry) | gallon (U.S. dry) |
| gallon (U.S. fluid; Wine) | gallon (U.S. fluid; Wine) |
| gill (Imperial); Noggin | gill (Imperial); Noggin |
| gill (U.S.) | gill (U.S.) |
| hogshead (Imperial) | hogshead (Imperial) |
| hogshead (U.S.) | hogshead (U.S.) |
| jigger | jigger |
| kilderkin | kilderkin |
| lambda | lambda |
| last | last |
| litre | litre |
| load | load |
| minim (Imperial) | minim (Imperial) |
| minim (U.S.) | minim (U.S.) |
| peck (Imperial) | peck (Imperial) |
| peck (U.S. dry) | peck (U.S. dry) |
| perch | perch |
| pinch (Imperial) | pinch (Imperial) |
| pinch (U.S.) | pinch (U.S.) |
| pint (Imperial) | pint (Imperial) |
| pint (U.S. dry) | pint (U.S. dry) |
| pint (U.S. fluid) | pint (U.S. fluid) |
| pony | pony |
| pottle; quartern | pottle; quartern |
| quarter; pail | quarter; pail |
| quart (Imperial) | quart (Imperial) |
| quart (U.S. dry) | quart (U.S. dry) |
| quart (U.S. fluid) | quart (U.S. fluid) |
| register ton | register ton |
| sack (Imperial); bag | sack (Imperial); bag |
| sack (U.S.) | sack (U.S.) |
| seam | seam |
| shot | shot |
| strike (Imperial) | strike (Imperial) |
| strike (U.S.) | strike (U.S.) |
| tablespoon (Canadian) | tablespoon (Canadian) |
| tablespoon (Imperial) | tablespoon (Imperial) |
| tablespoon (metric) | tablespoon (metric) |
| tablespoon (U.S.) | tablespoon (U.S.) |
| teaspoon (Canadian) | teaspoon (Canadian) |
| teaspoon (Imperial) | teaspoon (Imperial) |
| teaspoon (metric) | teaspoon (metric) |
| teaspoon (U.S.) | teaspoon (U.S.) |
| timber foot | timber foot |
| tun | tun |
| water ton | water ton |
| wey (U.S.) | wey (U.S.) |

<a href="#type-index">Back to type index</a>
