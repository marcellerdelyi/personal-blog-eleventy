---
title: "Using BIM inside Blender: How to build a virtual replica of your own living space"
description: " How to build an interactive experiences of your home using Blender and Unity"
date: 2026-01-01
---

An exploration project that focuses on how to build, edit and maintain a digital, virual copy of my own living space, and how this model can be easily.

# Background

In the spring of 2024, in preparation for a future sale, I decided to try and dig up a layout for my apartment unit. To my surprise, I discovered that no official drawings existed for the building. Built in the 1950s, originally as a convenience store, and later turned into an apartment complex that was renovated in 2014, my apartment lacked any formal construction or renovation documentation. This is rather strange considering I live in Norway, a country known for strict regulations nowadays ,but it seems regulations were much more lenient back in the 50s. Strangely, very little documentation follows the 2014 renovation either, which should have had paperwork in place to legally carry out upgrades to the dwellings. This was before my time owning the property. After speaking with neighbors, I learned that any existing plans were likely lost; they were hand-drawn by a local architect who held the last known copies of the building's blueprints and passed away some time ago.

With no existing plans to rely on, I took it upon myself to draft my own 2D floor plan. I myself not an architect, or someone with experiance from the "traditional" construction industry ,but I'm certainly not entiriley clueless either. I work with visualisation of offshore steel struktures in my day-to-day job, so the concept of reading construction manual PDFs and understanding and working with technical CAD drawings and detailed fabrication 3D models are not a foreign concept for me. I work heavily with 3D models ,but also thats how my brain is wired, can much easily understand complicated concepot in a 3D space, so I decided to investigatge how I can turn a 3D model to a 2D floorplan and vis a virsa, on demapnd, whenenver I need one or the other. Therefore my first real challenge was figuring out how to combine these two formats without doubling the work. Creating a separate 2D plan and 3D model would mean updating both every time something changed, which felt inefficient and easy to get wrong. Instead, I wanted one true source that could represent the visual geometry while also containing information like wall thickness, doors, and window parameters, which I could then turn into a 2D drawing.

# Research & BIM

To define how the appartment should be represented and what kind of information it should contain, my research was guided by two key aspects: how to represent the apartment visually, and how to store useful information inside that representation.

## BIM
After doing some research, I discovered that this is a common problem faced by architects and people in the construction indusrty. The solution I found is something called Building Information Modelling(BIM). BIM allows you to work with both 3D models and 2D plans simultaneously. What makes BIM unique is that it lets you create a 3D model that isn’t just made up of empty solids. BIM also stores detailed information about what each element represents, whether it’s a wall, column, or beam, as well as what materials they’re made of. This is not unique to BIM necessary ,but you can generate floor plans from the model, and any changes made to the 3D model are instantly reflected in the 2D plans.

## Bonsai

To build my BIM model, I will use a Blender add-on called Bonsai, previously known as BlenderBIM. Bonsai enables IFC based OpenBIM workflows. IFC, short for Industry Foundation Classes, is an open standard for storing and exchanging building information between different BIM tools.

For my project, Bonsai is useful because it allows me to create parametric 3D model elements such as walls, doors, and windows, and then use the same model to generate floor plans directly within the same software.

{% image "./Bonsai_BIM_LandingPage.jpg", "Landing page of the Blender addon Bonsai" %}

# 3D scanning


Before I could start modeling my appartment in Blender, I needed to collect enough real-world measurements to understand the apartment’s real size, proportions and layout.

To start with, I decided to 3D scan my apartment. I didn’t need anything too fancy, just something accurate enough for this purpose. A colleague of mine recommended Scaniverse, a 3D scanning app for iPhones and iPads that uses LiDAR and photogrammetry technology to capture 3D models. I don’t own any Apple products capable of running the app, but luckily I was able to borrow an iPad from work.

{% image "./Measuring_Dialog.jpg", "measurement tools and methods" %}

The scanning results turned out quite okay. Given the layout of my apartment, I didn’t need to capture every room. Scanning the living room and the bedroom furthest from the entrance gave me enough reference to work from. Later, I could draw a straight line from the outer walls of the bedroom towards the entrance at an angle, and connect that line to the entrance wall. After that, I also went around and manually measured the walls, corners, crevices, windows, and doors myself, since I didn’t want to rely on the scan data alone.

{% image "./Kvennavikgata_Grid_Spaces.jpg", "rooms and spaces in the apartment" %}

The appartment consist of the following spaces.
- Hallway/entrance
- Bathroom
- Bedroom 1
- Bedroom 2
- Bedroom 3
- Living room/kitchen

Entering the unit you will find 3 bedrooms to the left, first a bathroom to the right then a entrance to the pentry. Moving further in, there is the combined kitchen/Living room area, which is the largest of all the spaces.

# Modelling with Bonsai

In the upcoming parts of this series, I will dive deeper into each step of the process, sharing practical examples, from scanning the apartment, to building the 3D model in Blender, and finally generating the floor plan.

