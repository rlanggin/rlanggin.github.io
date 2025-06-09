---
layout: page
permalink: /tutorials/
title: tutorials
description: Follow the Beginning Python Tutorials respository below to begin your own coding for Physics and Astronomy adventure! Coding tutorials focusing on Gravitational-Waves for high-school students are under development currently (check back Fall 2025). 
nav: true
nav_order: 4
---

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
