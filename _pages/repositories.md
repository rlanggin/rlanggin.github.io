---
layout: page
permalink: /tutorials/
title: tutorials
description: Learn Python for Physics and Astronomy through hands-on coding tutorials.
nav: true
nav_order: 4
---

## Getting Started with Python for Physics & Astronomy

Whether you're a student or curious learner, this set of tutorials is designed to help you build programming skills for real scientific applications. These notebooks include examples drawn from introductory astronomy and physics college courses.

Follow the [Beginning Python Tutorials]([https://github.com/your-username/your-repo](https://github.com/rlanggin/Beginning_Python_Notebooks) to start coding right away.

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

## Coming Soon (Fall 2025)

I am actively building more student-friendly tutorials on topics like:

- Understanding Gravitational Waves using basic high school physics
- Exploring Gravitational Wave Detectors — current observatories and what's coming next
- Simulating Gravitational Waveforms and an introduction to parameter estimation
  
These resources will grow over time as part of a **student-led collaboration**, helping more learners discover Gravitational-Wave science through code.

This project is for:
- High school students curious about space and coding
- Teachers looking to introduce Python into physics or astronomy lessons
- Beginners who want to learn science by doing

If you'd like to contribute, or are interested in hosting these tutorials in your own classroom, feel free to [reach out](mailto:rachel.langgin@unlv.edu)!

Stay tuned!
