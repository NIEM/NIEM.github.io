---
title: Model Content
release_version: 3.0
release_url: http://release.niem.gov/niem/domains

flower_parts:
  - title: Screening
    href: screening
    coords: '10,233,131,203,132,218,135,226,25,306,12,281,9,256,10,232'

  - title: Immigration
    href: immigration
    coords: '38,145,141,171,135,187,134,195,14,226,16,196,28,165'

  - title: Infrastructure Protection
    href: infrastructureProtection
    coords: '44,138,146,163,166,141,105,65,80,88,59,113,44,137'

  - title: Intelligence
    href: intelligence
    coords: '110,60,171,137,195,124,193,13,160,27,129,44,110,60'

  - title: Maritime
    href: maritime
    coords: '202,11,203,120,218,117,230,118,285,0,254,-1,224,4,202,11'

  - title: Biometrics
    href: biometrics
    coords: '241,115,291,2,314,5,333,12,357,29,260,127,241,115'

  - title: CBRN
    href: cbrn
    coords: '264,129,362,34,384,59,392,80,394,95,274,150,269,137'

  - title: International Trade
    href: internationalTrade
    coords: '276,156,394,102,397,130,390,182,274,183'

  - title: MilOps
    coords: '270,191,385,189,366,233,341,266,258,215'

  - title: Justice
    href: http://release.niem.gov/niem/domains/jxdm/5.0/namespace
    coords: '252,222,336,273,302,307,263,334,229,239'

  - title: Emergency Management
    href: emergencyManagement
    coords: '221,245,255,340,211,360,171,369,195,254'

  - title: Children, Youth, and Family Services
    href: cyfs
    coords: '188,256,162,373,121,373,88,364,163,253'

  - title: Future Domains
    href: https://www.niem.gov/aboutniem/Pages/Domain-Onboarding.aspx
    coords: '138,232,158,251,66,385,42,373,13,347,2,330'

  - title: NIEM Core
    href: http://release.niem.gov/niem/niem-core/3.0/namespace
    coords: '161,153,176,139,199,126,224,121,244,123,259,132,269,143,273,157,273,169,270,185,263,200,252,216,239,229,221,242,203,249,185,253,171,252,157,246,146,237,139,225,136,213,135,202,142,180,152,164'
---

<map name="flower-model-map" id="flower-model-map">
  {% for part in page.flower_parts %}
    {% assign href = '' %}
    {% if part.href %}
      {% assign part_href_http_processed = part.href | split: 'http://' %}
      {% assign part_href_https_processed = part.href | split: 'https://' %}
      {% if part_href_http_processed.size > 1 or part_href_https_processed.size > 1 %}
        {% capture href %}href="{{ part.href }}"{% endcapture %}
      {% else %}
        {% capture href %}href="{{ page.release_url }}/{{ part.href }}/{{ page.release_version }}/namespace"{% endcapture %}
      {% endif %}
    {% endif %}

    <area alt="{{ part.title }}" {{ href }} shape="poly" coords="{{ part.coords }}" target="_blank" />
  {% endfor %}
</map>

The use of NIEM results in machine-readable, license-free exchanges. NIEM uses eXtensible Markup Language (XML). The NIEM model is defined using [W3C](http://www.w3.org/standards/xml/) XML Schema&mdash;which is technology-and platform-independent. You can also represent NIEM in Unified Modeling Language (UML) with tooling that implements the NIEM-UML profile and automatically produces NIEM-conformant XML schema.

The NIEM model provides common, agreed-upon terms, definitions, formats, and relationships independent of how information is stored in individual systems.

It consists of two related vocabularies, ***NIEM core*** and individual ***NIEM domains***.

*NIEM core* consists of data elements that are commonly understood and defined across domains, such as person, activity, document, location, and item.

*NIEM domains* contain mission-specific data components that build upon NIEM core concepts and add content specific to the community supporting that mission.

*Future domains* are added to NIEM as necessary, based on an established business need. Learn more about our Domain Onboarding Process [here](https://www.niem.gov/aboutniem/Pages/Domain-Onboarding.aspx).

* Learn more about the NIEM model [here](https://www.niem.gov/technical/Pages/The-Model.aspx).
* The current model release can be found [here](http://release.niem.gov/).

***Click on the graphic below to view the associated model content.***

<p style="margin-top: 2em;">
  <img src="./assets/flower-model.png" alt="Flower Model" height="400" width="407" id="flower-model" usemap="#flower-model-map" />
</p>

<script>
$(function() {
  var flowerBase,
      flowerBaseDimensions,
      flowerHover,
      flowerMap,
      flowerOverlay,
      flowerWrap;

  flowerBase = $('#flower-model');
  flowerBaseDimensions = {
    width: flowerBase.attr('width'),
    height: flowerBase.attr('height')
  };

  flowerMap = $(flowerBase.attr('usemap'));

  flowerOverlay = $('<img />', {
    width: flowerBaseDimensions.width,
    height: flowerBaseDimensions.height,
    src: './assets/transparent.png',
    usemap: flowerBase.attr('usemap')
  }).css({
    position: 'absolute',
    left: 0,
    top: 0,
    'z-index': 2
  });

  flowerHover = $('<img />', {
    src: './assets/flower-model-hover.png',
    width: flowerBaseDimensions.width
  }).css({
    position: 'absolute',
    left: 0,
    top: 0,
    'z-index': 1,
    display: 'none',
  });

  flowerWrap = flowerBase.wrapAll('<div />')
    .parent()
    .css({
      height: flowerBaseDimensions.height,
      width: flowerBaseDimensions.width,
      position: 'relative',
      overflow: 'hidden',
    });

  $('area', flowerMap).hover(function() {
    var offset;

    offset = $(this).index() * flowerBaseDimensions.height * -1;

    flowerHover
      .stop(true, true)
      .css('top', offset)
      .fadeIn();
  }, function() {
    flowerHover
      .fadeOut({
        queue: false,
        complete: function() {
          flowerHover.css('top', 0);
        }
      });
  });

  flowerWrap
    .prepend(flowerHover)
    .prepend(flowerOverlay);

  flowerBase.removeAttr('usemap');
});
</script>
