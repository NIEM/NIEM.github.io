---
title: Sitemap
permalink: /sitemap/
layout: landing_page
rootURLs:
  - url: /training/
  - url: /reference/
  - url: /json/
  - url: /community/
  - url: /geospatial/
  - url: /niem-releases/
---

{:toc}
- TOC

## Sections

These are the major sections of this website.  Expand each sub-section to see the pages within.

{% for rootURL in page.rootURLs %}

  {% assign rootPage = site.pages | where: "url", rootURL.url | first %}

  <h3>{{ rootPage.title }}</h3>

  {{ rootPage.description }}<br/>
  <a href="{{ rootPage.url | relative_url }}">{{ rootPage.url | relative_url }}</a> <br/>

  {% for link in rootPage.links %}

    {% if link.url %}

      {% assign sectionPage = site.pages | where: "url", link.url | first %}

      {% assign count = 0 %}
      {% for page in site.pages %}
        {% if page.url contains sectionPage.url %}
          {% assign contentPage = site.pages | where: "url", page.url | first %}
          {% unless contentPage.redirect %}
            {% assign count = count | plus: 1 %}
          {% endunless %}
        {% endif %}
      {% endfor %}

  <details>
    <summary><strong style="padding-left: 15px;">{{ sectionPage.title }} ({{ count }})</strong></summary>
    <div class="box">
      <p>
        {{ sectionPage.description }} <br/>
        <a href="{{ sectionPage.url | relative_url }}">{{ sectionPage.url | relative_url }}</a>
      </p>

      {% include page/sitemap-links.html links=sectionPage.links %}
    </div>
  </details>

    {% endif %}

  {% endfor %}

{% endfor %}

## Page index

### Active pages

{% assign urls = site.html_pages | where_exp: "page", "page.layout != 'redirect'" | where: "category", "content" | map: "url" | sort %}
{% include page/sitemap-index-section.html urls=urls label="active"%}

### Redirects for former pages

{% assign urls = site.html_pages | where: "layout", "redirect" | map: "url" %}
{% include page/sitemap-index-section.html urls=urls label="redirect"%}
