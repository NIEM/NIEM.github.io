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

{% assign prev_url = "" %}
{% assign prev_len = 0 %}

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

{% assign pages = site.html_pages | sort: "url" %}

{% comment %} Set up content page and redirect page arrays {% endcomment %}

{% assign contentURLs = "" %}
{% assign redirectURLs = "" %}
{% assign siteURLs = "" %}

{% for page in pages %}
  {% if page.url contains "vendor" or page.url == false or page.url == "/titlepage.html/" or page.url == "/tocpage.html/" %}
    {% comment %} Ignore these pages {% endcomment %}

  {% elsif page.redirect %}
    {% assign redirectURLs = redirectURLs | append: "," | append: page.url %}

  {% elsif page.path contains "site/" %}
    {% assign siteURLs = siteURLs | append: "," | append: page.url %}

  {% elsif page.redirect_from and page.redirect_from.first %}
    {% comment %} Page is a content page but has a redirect array listed in the front matter {% endcomment %}
    {% assign contentURLs = contentURLs | append: "," | append: page.url %}
    {% assign urls = page.redirect_from | join: "," %}
    {% assign redirectURLs = redirectURLs | append: "," | append: urls %}

  {% elsif page.redirect_from %}
    {% comment %} Page is a content page but has a redirect string listed in the front matter {% endcomment %}
    {% assign contentURLs = contentURLs | append: "," | append: page.url %}
    {% assign redirectURLs = redirectURLs | append: "," | append: page.redirect_from %}

  {% else %}
    {% assign contentURLs = contentURLs | append: "," | append: page.url %}
  {% endif %}
{% endfor %}

### Content pages

*Click [here](#site-pages) to jump ahead to the next section.*

{% include page/sitemap-index-section.html urls=contentURLs label="content"%}

### Site pages

{% include page/sitemap-index-section.html urls=siteURLs label="site-specific"%}

### Redirect pages

{% include page/sitemap-index-section.html urls=redirectURLs label="redirect"%}
