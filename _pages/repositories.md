---
layout: page
permalink: /tutorials/
title: tutorials
description: Learn Python for Physics and Astronomy through hands-on coding tutorials.
nav: true
nav_order: 5
thumbnail: /assets/img/HubbleOriginal.png
og_image: /assets/img/HubbleOriginal.png
---

## Getting Started with Python for Physics & Astronomy

Whether you're a student or curious learner, this set of tutorials is designed to help you build programming skills for real scientific applications. These notebooks include examples drawn from introductory astronomy and physics college courses.

Follow the [Beginning Python Tutorials](https://github.com/rlanggin/Beginning_Python_Notebooks) below to start coding right away.

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

## Gravitational-Wave Explorer — A Beginner’s Guide

The **GW_Explorer project** was developed in collaboration with a **local high school student** to make gravitational-wave astrophysics accessible to learners of all ages. Our goal is to help students understand the physics behind compact object mergers, simulate gravitational-wave signals, and explore parameter estimation—all through interactive Python notebooks.

Eventually, these notebooks will also be **hosted on the [Gravitational-Wave Open Science Center (GWOSC)](https://www.gw-openscience.org/)** for broader public use, linking classroom learning with real scientific data.

### Available Notebooks

{% if site.data.repositories.GW_Explorer_notebooks %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-start">
  {% for nb in site.data.repositories.GW_Explorer_notebooks %}
    <div class="repo-card" style="flex: 1 1 45%; min-width: 250px; margin-bottom: 1.5rem;">
      <h4>{{ nb.title }}</h4>
      <p>{{ nb.description }}</p>
      <a href="https://nbviewer.org/github/rlanggin/GW_Explorer_A_Beginners_Guide/blob/main/{{ nb.filename }}" target="_blank" style="text-decoration: none; color: #1a73e8;">View Notebook →</a>
    </div>
  {% endfor %}
</div>
{% else %}
<p>No notebooks are available yet. Check back soon!</p>
{% endif %}

---

These notebooks include:

- Step-by-step instructions to simulate **Binary Black Hole and Neutron Star mergers**
- Interactive Python code for exploring **waveform generation**
- Exercises introducing **Bayesian Parameter Estimation** in a simplified, beginner-friendly way
- Connections to real data and science from LIGO, Virgo, and KAGRA

We hope these tutorials inspire students to explore Gravitational-Wave astrophysics and provide a bridge between high school STEM learning and cutting-edge research.
