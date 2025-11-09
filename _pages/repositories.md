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

{% assign beginning_python_repo = site.data.repositories.github_repos | where: "repository", "rlanggin/Beginning_Python_Notebooks" | first %}
{% if beginning_python_repo %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo.liquid repository=beginning_python_repo %}
</div>
{% endif %}
---

## Gravitational-Wave Explorer — A Beginner’s Guide

The **GW Explorer: A Beginner's Guide** project was developed in collaboration with a **local Las Vegas high school student** to make Gravitational-Wave astrophysics accessible to learners of all ages. Our aim is to help students:

- Understand the physics behind compact object mergers  
- Simulate Gravitational-Wave signals with Python  
- Explore **Parameter Estimation** using real data from LIGO, Virgo, and KAGRA  

Eventually, these notebooks will also be **hosted on the [Gravitational-Wave Open Science Center (GWOSC)](https://www.gw-openscience.org/)** to link classroom learning with real scientific data.

### GW Explorer Repository

<div class="repo-card" style="margin-bottom: 2rem; padding: 1rem; border-radius: 12px; box-shadow: 0 4px 18px rgba(0,0,0,0.15); background: #f9f9f9;">
  <h3><a href="https://github.com/rlanggin/GW_Explorer_A_Beginners_Guide" target="_blank" style="text-decoration: none; color: #1a73e8;">GW Explorer: A Beginner’s Guide</a></h3>
  <p>
    Interactive Python notebooks for exploring Gravitational-Wave astrophysics, including waveform simulations, binary merger physics, and beginner-friendly parameter estimation exercises.
  </p>
</div>

### Available Notebooks

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-start">
  {% for nb in site.data.repositories.GW_Explorer_notebooks %}
    <div class="repo-card" style="flex: 1 1 45%; min-width: 250px; margin-bottom: 1.5rem; padding: 1rem; border-radius: 12px; box-shadow: 0 4px 18px rgba(0,0,0,0.15); background: #fff;">
      <h4>{{ nb.title }}</h4>
      <p>{{ nb.description }}</p>
      <a href="https://nbviewer.org/github/rlanggin/GW_Explorer_A_Beginners_Guide/blob/main/{{ nb.filename }}" target="_blank" style="text-decoration: none; color: #1a73e8;">View Notebook →</a>
    </div>
  {% endfor %}
</div>

<div class="caption" style="margin-top: 1rem;">
  These notebooks guide students step-by-step through simulating **binary black hole and neutron star mergers**, exploring **waveform generation**, and learning the basics of **Bayesian Parameter Estimation**. They provide a bridge from high school STEM learning to cutting-edge astrophysical research.
</div>

<style>
  .repo-card h3, .repo-card h4 {
    margin-bottom: 0.5rem;
  }
  .repo-card p {
    font-size: 0.95rem;
    color: #555;
  }
  .caption {
    font-size: 0.9rem;
    color: #555;
  }
</style>

---

We hope these tutorials inspire students to explore Gravitational-Wave astrophysics and provide a bridge between high school STEM learning and cutting-edge research.
