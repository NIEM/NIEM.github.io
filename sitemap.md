---
title: Sitemap
layout: landing_page
rootURLs:
  - url: /training/
  - url: /reference/
  - url: /json/
  - url: /community/
  - url: /geospatial/
  - url: /niem-releases/
otherURLs:
---

{:toc}
- TOC

## Sections

The sitemap below shows the cards on the home page and their immediate sub-sections.  Expand each sub-section to see the pages within.

{% assign prev_url = "" %}
{% assign prev_len = 0 %}

{% for rootURL in page.rootURLs %}

  {% assign rootPage = site.pages | where: "url", rootURL.url | first %}

  <h3>{{ rootPage.title }}</h3>

  {{ rootPage.description }}<br/>
  <a href="{{ rootPage.url | relative_url }}">{{ site.url | relative_url }}{{ rootPage.url }}</a> <br/>

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
        <a href="{{ sectionPage.url | relative_url }}">{{ site.url | relative_url }}{{ sectionPage.url }}</a>
      </p>

      {% include page/sitemap-links.html links=sectionPage.links %}
    </div>
  </details>

    {% endif %}

  {% endfor %}

{% endfor %}

## Content page list

{% assign pages = site.html_pages | sort: "url" %}

{% comment %} Set up content page and redirect page arrays {% endcomment %}

{% assign contentURLs = "" %}
{% assign redirectURLs = "" %}

{% for page in pages %}
  {% if page.url contains "vendor" or page.url == false or page.url == "/titlepage.html/" or page.url == "/tocpage.html/" %}
    {% comment %} Ignore these pages {% endcomment %}

  {% elsif page.redirect %}
    {% assign redirectURLs = redirectURLs | append: "," | append: page.url %}

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

{% assign urls = contentURLs | split: "," %}
This site has {{ urls | size }} content pages.

<ul>
  {% for url in urls %}
    {% if url != "" %}
      <li><a href="{{ url | relative_url }}">{{ url }}</a></li>
    {% endif %}
  {% endfor%}
</ul>

## Redirect page list

{% assign urls = redirectURLs | split: "," | uniq | sort %}
This site has {{ urls | size }} redirect pages.

<ul>
  {% for url in urls %}
    {% if url != "" %}
      <li><a href="{{ url | relative_url }}">{{ url }}</a></li>
    {% endif %}
  {% endfor%}
</ul>
