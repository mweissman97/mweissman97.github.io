---
layout: archive
title: <img src='/images/cv.png'>
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
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

{% include base_path %}

Education
======
* B.S. in Cellular and Molecular Biology, San Diego State University, 2019
  * Minor in Mathematics
* PhD in Ecology and Evolutionary Biology, Brown University, Expected 2024

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Awards, Fellowships, and Certificates
======
* 2020: NSF Graduate Research Fellowship Program Honorable Mention
* 2020: NIH Predoctoral Training Program Trainee
  * PI: Sohini Ramachandran
  * Brown University
* 2019: Reflective Teaching Certificate
  * Sheridan Teaching Center, Brown University
* 2019: Undergraduate Research Excellence Award
  * Student Research Symposium, San Diego State University
  
Skills
======
* Computer Programming
  * MatLab
  * Python
  * Unix
  * R
* Wet Lab Techniques
* Public Speaking
* Creative Problem Solving
* Conflict Resolution

Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
 
Relevant Experience
======
* 2018-2019: Undergraduate Researcher
  * San Diego State University
  * Independently worked on mathematically modeling HIV dynamics as well as the coral reef microbiome.
  * Supervisor: Professor Naveen Vaidya
  
Other Experience
======
* 2016-2019: Resident Advisor
  * San Diego State University
  * Assisted freshmen in their transition to on-campus living and promoted their positive growth into scholars, citizens, and leaders.
  * Supervisor: Dr. Kara Bauer
