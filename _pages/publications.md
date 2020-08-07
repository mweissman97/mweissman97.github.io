---
layout: archive
title: "<img src='/images/pubsheader.png'>"
permalink: /publications/
author_profile: true
---
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-174576010-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-174576010-1');
</script>
</head>

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{https://orcid.org/0000-0002-6054-1752}}">my ORCID profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
