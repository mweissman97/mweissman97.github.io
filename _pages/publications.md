---
layout: archive
title: "<img src='/images/pubsheader.png'>"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{https://orcid.org/0000-0002-6054-1752}}">my ORCID profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
