---
title: "Recreating My Apartment with Blender and Blender BIM "
description: "An introduction to a blog series on 3D modeling my apartment using 3D scanning, Blender, and the Blender BIM addon."
date: 2024-03-20
---


This post serves as an introduction to a series where I will use the Blender BIM tool to cereate a 3D model and a floor plan of my apartment. It’s a practical example demonstrating how Blender can be utilized for such tasks. Throughout the series, I will cover topics including 3D scanning, Blender, BIM, and the Blender BIM addon.

This is my first time not only building something but also documenting the process. As I continue, there may be some mistakes or formatting issues that I'll correct as the project progresses.

# Background

A few months ago, I decided to review my apartment's layout in preparation for a future renovation. To my surprise, I discovered that no official drawings existed. Built in the 1950s and renovated between 2005-2007, my apartment lacked any formal construction or renovation documentation. After speaking with a neighbour, I learned that the building was originally a local convenience store, and any existing plans were likely lost.

With no documents to rely on, I decided to create my own digital model.

# Challenges

From the beginning, I knew I didn’t want to settle for just a 2D floor plan. I wanted a 3D model as well to get a more complete picture of my space. The first major challenge was figuring out how to combine both formats without doubling the work. I didn’t want to create a separate 2D plan and then a 3D model, as that would mean constantly updating two versions every time I made changes. This seemed inefficient and prone to errors.

After doing some research, I discovered that this is a common problem faced by architects and people in the construction indusrty. The solution I found is something called Building Information Modelling(BIM). BIM allows you to work with both 3D models and 2D plans simultaneously. What makes BIM unique is that it lets you create a 3D model that isn’t just made up of empty solids. BIM also stores detailed information about what each element represents, whether it’s a wall, column, or beam, as well as what materials they’re made of. With BIM, you can automatically generate floor plans from the model, and any changes made to the 3D model are instantly reflected in the 2D plans.

While BIM offers additional features like scheduling and building stories, my focus will remain on the 3D-2D integration for this project.

# Scope of the Project

As I plan out this project, the first challenge will be gathering accurate data about my apartment’s layout. A colleague recommended using Scaniverse, a 3D scanning app available for iPhones and iPads. Since I don’t own either, I’m thinking of borrowing an iPad to do the scans. Hopefully, this will give me the precision I need for the next steps.

Once I have the data, I’ll need software to convert those measurements into a 3D environment where I can build the model and generate the floor plan. Blender is my choise for this not just because it's open-source ,but because I'm already familiar with it. Blender is primarly used for creating 3D models, anmimations, simulations, rendering and more. To handle the BIM aspects, I’m planning to use BlenderBIM, an open-source addon designed to bring BIM workflows into BLender. Based on what I’ve researched so far, it should be more than capable of helping me with this project.

# What's Next?

In the upcoming parts of this series, I will dive deeper into each step of the process, sharing practical examples, from scanning the apartment, to building the 3D model in Blender, and finally generating the floor plan.

