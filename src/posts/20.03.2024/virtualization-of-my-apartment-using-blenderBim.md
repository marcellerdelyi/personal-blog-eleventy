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

To define how the appartment should be represented and what kind of information it should contain, my research was guided by two key aspects: how to represent the apartment virtually using 3D geometry, and how to store useful information inside that representation.

## BIM
After doing some research, I discovered that this is a common problem faced by architects and people in the construction indusrty. The solution I found is something called Building Information Modelling, or BIM.

But what does that actually mean?

Oliver Thomas from the YouTube channel *Architect Network* gives a simple explanation of BIM:

*"Bim is really just a 3D modell and the moment it becomes a BIM modell is when the geometry itself is not just a meaningless shape ,but it is packed full of data, and information inside the modell"*

— Oliver Thomas, Architect Network [WHAT IS BIM AND HOW IS IT USED IN PRACTICE?](https://www.youtube.com/watch?v=Vp1r9UHNZ-c&t=571s)

In other words, BIM allows you to work with both 3D models and 2D plans simultaneously. What makes BIM unique is that it lets you create a 3D model that isn’t just made up of empty solids. Each element can contain information about what it represents, whether it is a wall, column, beam, floor, or another building component. It can also include data about materials, dimensions, quantities, and other properties.

## Bonsai

To build my BIM model, I will use a Blender add-on called Bonsai, previously known as BlenderBIM. 

This addon allows me to create parametric 3D model elements such as walls, doors, and windows, and then use the same model to generate floor plans directly within Blender.

{% image "./Bonsai_BIM_LandingPage.jpg", "Landing page of the Blender addon Bonsai" %}
_BonsaiBIM is a free & open source BIM/CAD platform built on Blender [Bonsai BIM landing page](https://bonsaibim.org/)_

# Understanding the apartment layout

{% image "./Kvennavikgata_Grid_Spaces.jpg", "rooms and spaces in the apartment" %}

The appartment consist of the following spaces:
- Hallway/entrance
- Bathroom
- Bedroom 1
- Bedroom 2
- Bedroom 3
- Living room/kitchen

When entering the unit, there are three bedrooms on the left-hand side. On the right-hand side, there is first the bathroom, followed by the entrance to the pantry. Moving further into the apartment, you reach the combined kitchen and living room area, which is the largest space in the unit.

# Measuring & 3D scanning

Before I could start modelling my appartment in Blender, I needed to collect enough real-world measurements to understand the apartment’s real size, proportions and layout.

In order to understand the existing conditions of the apartment, I used 3D scanning together with manual measurements taken with a laser meter and measuring tape. For the scanning, I didn’t need anything too fancy, just something that could capture data accurately enough for this purpose. A colleague of mine recommended Scaniverse, a 3D scanning app for iPhones and iPads that uses LiDAR and photogrammetry. I don’t own any Apple products capable of running the app, but luckily I was able to borrow an iPad from work.

{% image "./Measuring_Dialog.jpg", "measurement tools and methods" %}

In total, I carried out two 3D scans that needed to be aligned with each other. The quality of the scans was sufficient for the purpose of the project. Given the layout of my apartment, I didn’t need to capture every room. Scanning the living room and the bedroom furthest from the entrance gave me enough reference to work from. Later, I could draw a straight line from the outer walls of the bedroom towards the entrance at an angle, and connect that line to the entrance wall.

After that, I also went around and manually measured the walls, corners, crevices, windows, and doors myself, since I didn’t want to rely on the scan data alone.

# Building BIM Modell in Bonsai

One of the many things I truly like about Blender is its gigantic feature and add-on ecosystem. It is on the path to becoming the standard platform for everything 3D.

It is this versatility that Bonsai BIM builds upon.

In the Bonsai Bim Add-on, CAD modelling works through a dedicated modelling interface that interacts with the IFC data model. IFC, short for Industry Foundation Classes, is an ISO standard that describes geometry, data, objects, processes, and relationships, in the built environment (i.e. BIM). In theory, this standard should allow for smoother information exchange between different BIM platforms. In practice, however, IFC exchange still depends heavily on how each software handles IFC import and export. Platforms such as Revit, ArchiCAD, and Tekla may support different IFC versions, export settings, model view definitions, property sets, and object mappings. Because of this, the same IFC file is not always interpreted in exactly the same way across different applications.

Therefore, file exchange is still strongly dependent on the quality and capabilities of the IFC importers and exporters in the software being used.

First steps, 3d scan imports to blender

{% image "./Blender_Scan_import.jpg", "Scanniverse Blender imports and scan alignment" %}

.blend vs .ifc

Briefly about how the bonsai addon works, navigation where to find what, how to create models

## What Is IFC? 

Disclaimer: IFC is a complex and wide topic, so this chapter will only cover selected examples, definitions, and relations that are relevant to the scope of this project. The goal is not to provide a complete technical explanation of IFC, but rather to give enough context to support the practical work presented here. Therefore, some definitions may be simplified or generalised. 

IFC-Industry Foundation Classes: an industry-developed product data model for the design and full lifecycle of buildings, supported by buildingSMART. It has broad support by most software companies; it is weakened by varied nonconsistent implementations. 

## IFC classes


### IFC Wall

### IFC door

### IFC Window




