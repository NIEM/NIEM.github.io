---
title: IEPD Series
icon: fa-graduation-cap
description: Examples designed to demonstrate various unique aspects of the NIEM technical framework.
---

{% assign superhero_iepd_path = "https://github.com/NIEM/Developer-Network-IEPD-Series--SuperHero" %}
{% assign github_link = superhero_iepd_path | append: "/tree/master" %}

The material in this area is designed to demonstrate various unique aspects of the NIEM technical framework. It is referred to as the "Superhero" family of IEPDs because they describe comic book characters. This theme was chosen because most people know who Batman and Superman are, and it allowed us to show the NIEM technical framework in a context independent of the existing NIEM domains.

These examples presume a familiarity with the NIEM v3.0 technical specifications (i.e., MPD, NDR, etc.) and common XML principles (i.e., root element, complex type, simple type, etc.). If you are not, the latest NIEM technical specifications are accessible from links at [http://reference.niem.gov](http://reference.niem.gov), and knowledge of XML may be acquired from [http://www.w3schools.com/xml/default.asp](http://www.w3schools.com/xml/default.asp) and other online services.

---

[SuperHero IEPDs Archive]({{ superhero_iepd_path }}/archive/master.zip)
: Download all SuperHero IEPDs as a single zip file.

[Super Hero IEPD]({{ github_link }}/base_iepd)
: IEPD established the parental base for the family by introducing a super hero through a simple extension schema document.

[SuperHero Augmentation]({{ github_link }}/augmentation)
: Builds upon SuperHero IEPD to demonstrate several ways of implementing the augmentation concept in NIEM.

[SuperHero Specialization]({{ github_link }}/specialization)
: Builds upon SuperHero IEPD showing how to create specializations (i.e., xs:extension) in NIEM.

[SuperHero Association]({{ github_link }}/association)
: Builds upon SuperHero IEPD showing how to create associations in NIEM.

[SuperHero Local Terminology]({{ github_link }}/local_terminology)
: Builds upon SuperHero IEPD showing how to create local terminology in NIEM.

[SuperHero ISM]({{ github_link }}/ism)
: Builds upon SuperHero IEPD showing how to apply the Intelligence Community ISM (IC-ISM) markings.

[SuperHero Reference]({{ github_link }}/reference)
: Builds upon SuperHero IEPD demonstrating how to use references in a NIEM IEPD.

