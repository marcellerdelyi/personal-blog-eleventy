---
title: "Bonsai BIM: A case study about how to build a BIM modell of your own living space"
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
After doing some research, I discovered that this is a common problem faced by people working in architecture, engineering and construction (AEC) industry. The solution I found is something called Building Information Modelling, or BIM.

But what does that actually mean?

Oliver Thomas from the YouTube channel *Architect Network* gives a simple explanation of BIM:

*"Bim is really just a 3D modell and the moment it becomes a BIM modell is when the geometry itself is not just a meaningless shape ,but it is packed full of data, and information inside the modell"*

— Oliver Thomas, Architect Network [WHAT IS BIM AND HOW IS IT USED IN PRACTICE?](https://www.youtube.com/watch?v=Vp1r9UHNZ-c&t=571s)

In other words, BIM allows you to work with both threedimensionnaly as well as interact with underlying data and information simultaneously. On a BIM modell, each element can contain information about what it represents, whether it is a wall, column, beam, floor, or another building component. It can also include data about materials, dimensions, quantities, and other properties.

Have to aknowledge that BIM is an inescapable buzzword these days in the practice of AEC industry. BIM is commonly reffered to as both building information modeling (the process) and building information model (the digital artifact). In this project I will use BIM to refer mainly to the modelling process, whereas for my 3D modell I will call that a BIM modell.

## Bonsai

To build my own BIM modell for this project, I will use a Blender add-on called Bonsai, previously known as BlenderBIM. 

In Bonsai all the intercation is through a dedicated modelling interface that interacts with IFC data model. IFC, short for Industry Foundation Classes, is an ISO standard that describes geometry, data, objects, processes, and relationships, in the built environment (i.e. BIM). Through this interface, I can create parametric elements such as walls, doors, and windows, and also generate 2D drawings from them automatically. This means the floor plan is not created separately, like in a more traditional CAD program.

{% image "./Bonsai_BIM_LandingPage.jpg", "Landing page of the Blender addon Bonsai" %}
**FIGURE xy** _BonsaiBIM is a free & open source BIM/CAD platform built on Blender [Check out the addon here:](https://bonsaibim.org/)_

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

# Building the apartment in Bonsai BIM

{% image "./Blender_Scan_import.jpg", "Scanniverse Blender imports and scan alignment" %}
**FIGURE xy** _Imported Scaniverse 3D scans in Blender_

The 3D scans were exported from Scaniverse as FBX files. In Blender, after resetting their origins, I needed to align the two scans. I used reference points from the door and from a shared wall that connected Bedroom 3 with the living room. The alignment was far from 100% precise, but more than good enough for the purpose of this project.

## Walls

{% image "./Wall100_Example.jpg", "Example of the type of data an IFC wall contains" %}

**FIGURE xy** _An IFC wall, It is a fully editable parametric and data-rich object. Just like columns, doors, windows, beams, roofs, and foundations, is controlled by settings specific to what that element represents. A wall can contain both structural and architectural information, including graphical and numerical data. Highlighting shows how object information is presented in Bonsai BIM_

### Wall types and libaries

Based on the measurements and scan data, I identified three different wall types: external masonry walls, internal plaster walls used as room dividers, and unit-separating walls that separate my apartment from the neighbouring units.

{% image "./Different_Wall_Thickness.jpg", "Different IFC wall thicknesses, ranging from 100 to 300 mm" %}
**FIGURE xy** _A libary of IFC wall types_

Using this data, I built a small library of IFC wall types with three different thicknesses: 300 mm, 200 mm, and 100 mm.

{% image "./Colour_Coded_Walls.jpg", "Wall thickness by colour" %}
**FIGURE xy** _Colour-coded wall types_

| Thickness | Wall Type                             | Colour |
|-----------|---------------------------------------|--------|
| 300 mm    | External / masonry wall               | White  |
| 200 mm    | Unit-separating wall                  | Blue   |
| 100 mm    | Lightweight internal plaster wall     | Green  |


## Openings

According to the [buildingSMART](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_3/HTML/lexical/IfcOpeningElement.htm?utm_source=chatgpt.com) definition, an IFC opening is a BIM object that represents a void, recess, chase, or hole within a physical building element, typically used to model spaces for doors, windows, penetrations, ventilation, access, or services.

In simpler terms, this means that a window opening in a wall is modelled as an IfcOpeningElement that cuts into the wall, while the actual window element fills that opening.

### Windows
{% image "./Kvennavikgata_Coloured_Windows.jpg", "Colour coded windows by dimentions" %}
**FIGURE xy** _Colour-coded window types_

I identified only two window types. The first measured 1300 × 1100 mm and had no handles or opening function. The second measured 1225 × 1195 mm and had a handle, allowing it to open. Both used a one-sided partition type.

Partitioning type describes how a window is divided into panels or sections.

| Dimentions        | Partitioning Type | Can be opened? | Colour |
|-------------------|-------------------|----------------|--------|
| 1300 x 1100 mm    | Single sided      |       No       | Red    |
| 1225 x 1195 mm    | Single sided      |       Yes      | Yellow |

### Doors

For the doors, I also identified two main types. Most of them are lightweight internal plywood doors, measuring 2140 × 980 mm. There are five of these in total: four with a right-hand swing type and one with a left-hand swing type. The entrance door is much wider (2140 x 1000 mm) and heavier, than the inner doors,and it also has a left-hand swing operation.

{% image "./Kvennavikgata_Coloured_Doors_v02.jpg", "Colour coded doors by dimentions" %}
**FIGURE xy** _Colour-coded door types_

| Dimentions        | Swing Operation Type              | Colour |
|-------------------|-----------------------------------|--------|
| 2140 × 980 mm     | Both left & right hand swing type | Purple |
| 2140 x 1000 mm    | left-hand swing type              | Pink   |

![Top technical drawing of the front door](../Door_Top_Drawing.svg)

### Saving IFC file

In Bonsai, using **Save IFC Project** stores the BIM model as an ".ifc" file, rather than as Blender’s native ".blend" file.

Regular Blender objects are therefore not automatically become part of the IFC model. For example, if I add a normal Blender mesh such as a cube or sphere, it will not be saved into the IFC file unless it is assigned or converted into an IFC element with a proper IFC class and representation.

If I want to preserve Blender-specific settings, scene setup, or other non-IFC elements, I would need to save a separate `.blend` file as well.

# Drawing generation






