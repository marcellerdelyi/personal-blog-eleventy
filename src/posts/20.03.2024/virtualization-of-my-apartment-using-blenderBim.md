---
title: "Virtualization of my apartment using Blender BIM "
description: "An introduction to a blog series on 3D modeling my apartment using 3D scanning, Blender, and the Blender BIM addon."
date: 2024-03-20
---


This is an introduction to a blog series where I will explore the capabilities of the Blender BIM addon by creating a 3D model and floor plan of my own apartment as part of this experiment.

# Background

A few months ago, I decided to review my apartment's layout in preparation for a future renovation. To my surprise, I discovered that no official drawings existed. Built in the 1950s and renovated between 2005-2007, my apartment lacked any formal construction or renovation documentation. After speaking with a neighbour, I learned that the building was originally a local convenience store, and any existing plans were likely lost.

With no existing plans to rely on, I decided to create my own and document the process.

# Introduction

From the beginning, I knew I didn’t want to settle for just a 2D floor plan. I wanted to make a 3D model as well, to get a more complete picture of my space. The first major challenge was figuring out how to combine both formats without doubling the work. I didn’t want to create a separate 2D plan and then a 3D model, as that would mean constantly updating two versions every time I made changes. This seemed inefficient and prone to errors. I should also mention that I'm not completely new to this. In my day-to-day job, I navigate through CAD drawings and 3D models constantly, so I have had a fair share of frustrating times when data was lost during an export from CAD software.

After doing some research, I discovered that this is a common problem faced by architects and people in the construction indusrty. The solution I found is something called Building Information Modelling(BIM). BIM allows you to work with both 3D models and 2D plans simultaneously. What makes BIM unique is that it lets you create a 3D model that isn’t just made up of empty solids. BIM also stores detailed information about what each element represents, whether it’s a wall, column, or beam, as well as what materials they’re made of. With BIM, you can automatically generate floor plans from the model, and any changes made to the 3D model are instantly reflected in the 2D plans.

While BIM offers additional features like scheduling and building stories, my focus will remain on the 3D-2D integration for this project.

# Scope of the Project

As I plan out this project, the first challenge will be gathering accurate data about my apartment’s layout. A colleague recommended using Scaniverse, a 3D scanning app available for iPhones and iPads. Since I don’t own either, I’m thinking of borrowing an iPad to do the scans. Hopefully, this will give me the precision I need for the next steps.

Once I have the data, I’ll need software to convert those measurements into a 3D environment where I can build the model and generate the floor plan. Blender is my choice for this, not just because it's open-source ,but because I'm already familiar with it. Blender is primarily used for creating 3D models, animations, simulations, rendering and more. That being said, my main reason for choosing Blender is because there is an addon called BlenderBIM. It's an open-source addon designed to bring BIM workflows to Blender. Among its features is one that would allow me to print floor plans from my 3D models.
Overall, based on what I’ve researched so far, the addon should be more than capable of helping me with this project.

# What's Next?

In the upcoming parts of this series, I will dive deeper into each step of the process, sharing practical examples, from scanning the apartment, to building the 3D model in Blender, and finally generating the floor plan.

