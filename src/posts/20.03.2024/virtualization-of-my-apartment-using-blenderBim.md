---
title: "Bonsai BIM: A case study of building a BIM model of your own living space in Blender"
description: "A case study of rebuilding my apartment as a BIM model in Blender using Bonsai, 3D scanning, manual measurements, and IFC-based drawing generation."
date: 2026-06-01
---

A personal case study project in which I used the Blender addon bonsai to reconstruct my apartment as a BIM model, using data from 3D scanning and other measurement techniques to build a data-rich 3D model capable of generating an on-demand floorplan.

{% image "./Kvennavikgata_Building_Block.jpg", "Thumbnail, hero image, showing the surrounding area of the apartment location" %}


# Background

In the spring of 2024, in preparation for a future sale, I decided to search for a floor plan for my apartment unit, but to my surprise, I could not find any plans or records.
Before it became an apartment complex, the building was used as a convenience store in the 1950s. It was converted in 2014, which was before I owned the property. After speaking with neighbors, I learned that any existing plans were likely lost, as the company that renovated the complex declared bankruptcy in 2017, and some of the drawings went with them, including the one for my apartment.

With no existing drawings to rely on, I decided to create my own. I don't have a degree in architecture or engineering, but I am not completely unfamiliar with this type of work either. My day-to-day job involves the visualisation of offshore steel structures, so understanding construction drawings and detailed 3D models are not strange concepts to me. 

Since I work a lot with 3D, I also find it easier to understand spaces through a 3D model than only through a 2D drawing. Because of this, I wanted to explore how I could create both a 3D model and a 2D floor plan without doing the work twice.

# Research

My research for this project was guided by these aspects: how to represent the apartment in a 3D model that can also be used to generate a 2D floor plan automatically, or with minimal modification, when needed.

## BIM

After doing some research, I discovered that this is a common problem faced by people working in architecture, engineering and construction (AEC) industry. The solution I found is something called Building Information modelling, or BIM.

But what does that actually mean?

Oliver Thomas from the YouTube channel [ArchiTech Network](https://www.youtube.com/@architech.network) gives a simple explanation of BIM:

*"Bim is really just a 3D model and the moment it becomes a BIM model is when the geometry itself is not just a meaningless shape ,but it is packed full of data, and information inside the model"*

— Oliver Thomas, ArchiTech Network [WHAT IS BIM AND HOW IS IT USED IN PRACTICE?](https://www.youtube.com/watch?v=Vp1r9UHNZ-c&t=571s)

In other words, BIM allows you to work with both threedimensionnaly as well as interact with underlying data and information simultaneously. On a BIM model, each element can contain information about what it represents, whether it is a wall, column, beam, floor, or another building component. It can also include data about materials, dimensions, quantities, and other properties.

I think many have to admit that BIM has become an unavoidable buzzword these days in the AEC industry. BIM is commonly referred to as both building information modelling (the process) and building information model (the digital artifact). In this project, I will use BIM primarily to refer to the modelling process, whereas for my 3D model I will call that a BIM model.

## Bonsai

To build my own BIM model for this project, I will use a Blender add-on called Bonsai, previously known as BlenderBIM. 

In Bonsai all the interaction is through a dedicated modelling interface that interacts with IFC data model. IFC, short for Industry Foundation Classes, is an ISO standard that describes geometry, data, objects, processes, and relationships, in the built environment (i.e. BIM). Through this interface, I can create parametric elements such as walls, doors, and windows, and also generate 2D drawings from them automatically. This means the floor plan is not drafted separately as independent 2D linework, as in a conventional 2D CAD workflow.

{% image "./Bonsai_BIM_LandingPage.jpg", "Landing page of the Blender addon Bonsai" %}
**FIGURE 1** _BonsaiBIM is a free & open source BIM/CAD platform built on Blender [Check out the addon here:](https://bonsaibim.org/)_

# Understanding the apartment layout

The apartment is a 3 bedroom, first floor apartment with a combined kitchen/living room space and one large bathroom, with a total of 74 m² usable area.

{% image "./Kvennavikgata_Grid_Spaces.jpg", "rooms and spaces in the apartment" %}
**FIGURE 2** _Images showing the different rooms and spaces in the apartment_

## Rooms & Spaces

Here is a list of all available spaces:
  - **Hallway/entrance**
  - **Bathroom**
  - **Bedroom 1**
  - **Bedroom 2**
  - **Bedroom 3**
  - **Living room/kitchen**

When entering the unit, there are three bedrooms on the left-hand side. On the right-hand side, there is first the bathroom, followed by the pantry. Moving further into the apartment, you reach the combined kitchen and living room area, which is the largest space in the unit.

# Measuring & 3D scanning

Before I could start modelling my apartment in Blender, I needed to collect enough real-world measurements to understand the apartment’s real size, proportions and layout.

I used 3D scanning together with manual measurements taken with a laser meter and measuring tape. For the scanning, I didn’t need anything too fancy, just something that could capture data accurately enough for this purpose. A colleague of mine recommended Scaniverse, a 3D scanning app for iPhones and iPads that uses LiDAR and photogrammetry. I don’t own any Apple products capable of running the app, but luckily I was able to borrow an iPad from work.

{% image "./Measuring_Dialog.jpg", "measurement tools and methods" %}
**FIGURE 3** _Images from the measuring process_

In total, I carried out two 3D scans that needed to be aligned with each other. The quality of the scans was sufficient for the purpose of the project. Given the layout of my apartment, I didn’t need to capture every room. Scanning the living room and the bedroom furthest from the entrance gave me enough reference to work from.

# Building the apartment in Bonsai BIM

The 3D scans were exported from Scaniverse as FBX files. In Blender, after resetting their origins, I needed to align the two scans. I used reference points from the door and from a shared wall that connected Bedroom 3 with the living room. The alignment was far from 100% precise, but more than good enough for the purpose of this project.

{% image "./Blender_Scan_import.jpg", "Scanniverse Blender imports and scan alignment" %}
**FIGURE 4** _Imported Scaniverse 3D scans in Blender_


## Saving files: `.Ifc` vs. `.blend`

In Bonsai, when you save a project, you use `Save IFC Project`, which stores the BIM model as an `.ifc` file rather than Blender’s native `.blend` file.

Regular Blender objects therefore do not automatically become part of the IFC model. For example, if I add a normal Blender mesh such as a cube or sphere, it will not be saved into the IFC file unless it is assigned or converted into an IFC element with a proper IFC class and representation.

Therefore, if I also want to keep any non-ifc-compatible objects in my scene, such as my 3D scans for this project, I need to save a separate `.blend` file as well.

## Walls

In Bonsai, an IFC wall is a fully editable parametric and data-rich object. Just like columns, doors, windows, beams, roofs, and foundations, is controlled by settings specific to what that element represents. A wall can contain both structural and architectural information, including graphical and numerical data. Highlighting shows how object information is presented in Bonsai BIM

{% image "./Wall100_Example.jpg", "Example of the type of data an IFC wall contains" %}

**FIGURE 5** _An example of an IFC wall_

### Wall types and libraries

Based on the measurements and scan data, I identified three different wall types: **external masonry walls**, **internal plaster walls** used as room dividers, and **unit-separating walls** that separate my apartment from the neighbouring units.

{% image "./Different_Wall_Thickness.jpg", "Different IFC wall thicknesses, ranging from 100 to 300 mm" %}
**FIGURE 6** _A library of IFC wall types_

Using this data, I built a small library of IFC wall types with three different thicknesses: 300 mm, 200 mm, and 100 mm.

{% image "./Colour_Coded_Walls.jpg", "Wall thickness by colour" %}
**FIGURE 7** _Colour-coded wall types_

| Thickness | Wall Type                             | Colour |
|-----------|---------------------------------------|--------|
| 300 mm    | External / masonry wall               | White  |
| 200 mm    | Unit-separating wall                  | Blue   |
| 100 mm    | Lightweight internal plaster wall     | Green  |


## Openings

According to the [buildingSMART](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_3/HTML/lexical/IfcOpeningElement.htm?utm_source=chatgpt.com) definition, an IFC opening is a BIM object that represents a void, recess, chase, or hole within a physical building element, typically used to model spaces for doors, windows, penetrations, ventilation, access, or services.

### Windows

I identified only two window types. The first measured 1300 × 1100 mm and had no handles or opening function. The second measured 1225 × 1195 mm and had a handle, allowing it to open. Both used a one-sided partition type. Partitioning type describes how a window is divided into panels or sections.

{% image "./Kvennavikgata_Coloured_Windows.jpg", "Colour coded windows by Dimensions" %}
**FIGURE 8** _Colour-coded window types_

| Dimensions        | Partitioning Type | Can be opened? | Colour |
|-------------------|-------------------|----------------|--------|
| 1300 x 1100 mm    | Single sided      |       No       | Red    |
| 1225 x 1195 mm    | Single sided      |       Yes      | Yellow |

### Doors

For the doors, I also identified two main types. Most of them are lightweight internal plywood doors, measuring 2140 × 980 mm. There are five of these in total: four with a right-hand swing type and one with a left-hand swing type. The entrance door is much wider (2140 x 1000 mm) and heavier, than the inner doors,and it also has a left-hand swing operation.

{% image "./Kvennavikgata_Coloured_Doors_v02.jpg", "Colour coded doors by Dimensions" %}
**FIGURE 9** _Colour-coded door types_

| Dimensions        | Swing Operation Type              | Colour |
|-------------------|-----------------------------------|--------|
| 2140 × 980 mm     | Both left & right hand swing type | Purple |
| 2140 x 1000 mm    | left-hand swing type              | Pink   |

Below is an illustration of the main entrance door swing. Door swing indicates the direction a door opens and which side it hinges from.

![Top technical drawing of the front door](../Door_Top_Drawing.svg)
**FIGURE 10** _Top-view view example of a single door swing_

# Understanding drawing generation

In many traditional 2D CAD workflows, the drawing often comes first. An architectural plan or floor plan is created as 2D linework, from which any 3D representation can be generated later on.

In Bonsai, the workflow is different. The drawings are generated directly from IFC BIM model. Bonsai does this by cutting through the 3D model at a set height and turning the visible elements into 2D linework. Dimensions, labels, tags, and symbols can then be added on top.

The 2D drawings are connected to the 3D model and can be viewed together, instead of living separately as a set of 2D lines that has to be maintained by hand. If something changes, you only need to update the model, drawing settings, or annotations, and then regenerate the drawing.

Drawings generated from an IFC model can come in many forms, fulfilling different functions.

- **Architectural IFC drawings:** These drawings contain floor plans, elevation plans, section plans, facade plans, and cladding plans.

- **Structural IFC drawings:** These drawings contain plans for beams, columns, foundations, and other structural elements. They are important for the stability and safety of the building.

- **MEP IFC drawings:** MEP stands for Mechanical, Electrical, and Plumbing. These drawings include electrical schematics, plumbing plans, and HVAC layouts. Their main function is to describe the building services that provide comfort and functionality for the inhabitants.

In this project, I focus only on architectural IFC drawings.

## Drawing generation in Bonsai

Simplified drawing generation pipeline in Bonsai, showing how a model view is converted into 2D vector drawings:

{% image "./Bonsai Drawing Generation Pipeline.jpg", "Diagram of drawing generation pipeline" %}
**FIGURE 11** _Diagram of drawing generation pipeline in Bonsai_

{% image "./Floor_Plan_Creation.jpg", "The drawing creation menu inside Bonsai" %}
**FIGURE 12** _The drawing creation menu inside Bonsai_

In Bonsai, the drawing generation tools live under the **1., Drawings and Documents** menu. Once the camera is **2., adjusted**, you can press **3., Create Drawing** to generate the floor plan from your active camera view.

## The floor plan

For the floor plan, I didn’t need an extreme level of detail, just enough to show the room sizes and the overall layout. I plan to add furniture and more details in the future, but that goes beyond the scope of this article.

![Kvennavikgata Floor Plan](../PLAN_VIEW.svg)

# Acknowledgement

I would like to thank my friend and former colleague [Isak J. Bråthen](https://www.linkedin.com/in/isak-br%C3%A5then-21a041186/) for his ongoing efforts to teach me Blender-related skills for the past 5 years. For this project specifically, he provided assistance to the 3D scanning, showed me how to use the [BlenderGIS](https://github.com/domlysz/BlenderGIS) addon, how to create a height-based colour mask using Blender's shader editor, how to render [cryptomatte](https://docs.blender.org/manual/en/latest/compositing/types/mask/cryptomatte.html) to create a mask for compositing for the thumbnail image, and some sick Miro tricks.



