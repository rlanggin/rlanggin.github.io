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

Whether you're a student or curious learner, this set of tutorials is designed to help you build programming skills for real scientific applications. These notebooks include examples drawn from **introductory astronomy and physics college courses**.

Follow the **[Beginning Python Tutorials](https://github.com/rlanggin/Beginning_Python_Notebooks)** below to start coding right away.

<div class="notebook-container" style="
    display: flex;
    flex-wrap: wrap;
    justify-content: center;  /* centers horizontally */
    gap: 1rem;
">
  {% for repo in site.data.repositories.github_repos %}
    {% if repo.repository == "rlanggin/Beginning_Python_Notebooks" %}
      <div class="repo-card" style="
          flex: 1 1 30%;
          min-width: 220px;
          max-width: 32%;
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.15);
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
      ">
        {% if repo.image %}
          <img src="{{ repo.image }}" alt="{{ repo.repository }} icon" style="width:80px; height:80px; object-fit:contain; margin-bottom:1rem; border-radius:8px;">
        {% endif %}
        <h4>{{ repo.description }}</h4>
        <a href="https://colab.research.google.com/github/{{ repo.repository }}" target="_blank" style="text-decoration: none; color: #1a73e8;">Open in Colab →</a>
      </div>
    {% endif %}
  {% endfor %}
</div>

---

## Gravitational-Wave Explorer — A Beginner’s Guide

The **[GW Explorer: A Beginner's Guide](https://github.com/rlanggin/GW_Explorer_A_Beginners_Guide/tree/main)** project was developed in collaboration with a **local Las Vegas high school student** to make Gravitational-Wave astrophysics accessible to high school students. Our aim is to help students:

- Understand the physics behind compact object mergers  
- Simulate Gravitational-Wave signals with Python  
- Explore Parameter Estimation using real data from LIGO, Virgo, and KAGRA  

Eventually, we hope these notebooks will also be **hosted on the [Gravitational-Wave Open Science Center (GWOSC)](https://www.gw-openscience.org/)** to link high school classroom learning with real scientific data.

### GW Explorer Repository

<div class="repo-card" style="margin-bottom: 2rem; padding: 1rem; border-radius: 12px; box-shadow: 0 4px 18px rgba(0,0,0,0.15); background: #f9f9f9;">
  <h3><a href="https://github.com/rlanggin/GW_Explorer_A_Beginners_Guide" target="_blank" style="text-decoration: none; color: #1a73e8;">GW Explorer: A Beginner’s Guide</a></h3>
  <p>
    Interactive Python notebooks for exploring Gravitational-Wave astrophysics, including waveform simulations, binary merger physics, and beginner-friendly parameter estimation exercises.
  </p>
</div>

#### Pre-Survey (Before You Begin)

<div style="margin-bottom: 2rem; padding: 1rem; border-radius: 12px; background: #f9f9f9; box-shadow: 0 3px 10px rgba(0,0,0,0.1); text-align: center;">
  <p>
    Before starting the GW Explorer activities, please take a few minutes to complete the short  
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbTzn3XoIySoXvOa5ajYg2tJqrssi-N6nn5PaqCcN87beawQ/viewform?usp=sharing&ouid=112310447946088646823"
       target="_blank" style="color: #1a73e8; font-weight: 600; text-decoration: none;">
       Pre-Survey
    </a>.  
    Your feedback helps us understand how students engage with these materials and what background knowledge they bring into gravitational-wave topics.
  </p>
</div>

---

### Available Notebooks

<div class="notebook-container" style="
    display: flex;
    flex-wrap: wrap;
    justify-content: center;  /* centers horizontally */
    gap: 1rem;
">
  {% for nb in site.data.repositories.GW_Explorer_notebooks %}
    <div class="repo-card" style="
        flex: 1 1 30%;
        min-width: 220px;
        max-width: 32%;
        padding: 1rem;
        border-radius: 12px;
        box-shadow: 0 4px 18px rgba(0,0,0,0.15);
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    ">
      {% if nb.image %}
        <img src="{{ nb.image }}" alt="{{ nb.title }} icon" style="width:80px; height:80px; object-fit:contain; margin-bottom:1rem; border-radius:8px;">
      {% endif %}
      <h4>{{ nb.title }}</h4>
      <p>{{ nb.description }}</p>
      <a href="https://colab.research.google.com/github/rlanggin/GW_Explorer_A_Beginners_Guide/blob/main/{{ nb.filename }}" target="_blank" style="text-decoration: none; color: #1a73e8;">Open in Colab →</a>
    </div>
  {% endfor %}
</div>

<div class="caption" style="margin-top:1rem;">
  These notebooks guide students step-by-step through simulating binary black hole and neutron star mergers, exploring waveform generation, and learning the basics of Bayesian Parameter Estimation. Run interactively on Google Colab today!
</div>

---

#### Post-Survey (After Completing the Notebooks)

<div style="margin-top: 2rem; padding: 1rem; border-radius: 12px; background: #f9f9f9; box-shadow: 0 3px 10px rgba(0,0,0,0.1); text-align: center;">
  <p>
    After completing one or more GW Explorer notebooks, please share your thoughts in the  
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScQPKPLOm3XSZ-SxSdLcqYnx-KSWXbtQ-0g_OgcVR5kqfzLEg/viewform?usp=sharing&ouid=112310447946088646823"
       target="_blank" style="color: #1a73e8; font-weight: 600; text-decoration: none;">
       Post-Survey
    </a>.  
    Your feedback helps improve accessibility, clarity, and the overall experience for future students learning gravitational-wave science through coding.
  </p>
</div>

---

We hope these tutorials inspire students to explore Gravitational-Wave astrophysics and provide a bridge between high school STEM learning and undergraduate Gravitational-Wave research.
