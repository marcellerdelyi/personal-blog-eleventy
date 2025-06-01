---
title: "Sequential Data-driven Animations in Blender"
description: "How I made a sequential, data-driven 3D animation in Blender, using digital Lego bricks."
date: 2025-05-22
---
{% image "./Windmill_Hero_1600x1200.png", "Hero Image of the Lego Windmill" %}
# Abstract
How I made a sequential data-driven animations in Blender using digital Lego bricks, spreadsheets, LLMs, and python scripting.

# Background
In the autumn of 2024, in a small town in the middle of Norway, I was holding a presentation at a local university where former students were sharing stories about how they transitioned into work life after finishing their studies. I did my best to prepare for my presentation, but I ultimately only had time to create a brief speech and a 3D animation video. We were in a big auditorium, and I was the last to present. Behind me, on two large screens my video was playing, an assembly animation of an offshore windmill made out of digital Lego bricks. 

Just a couple days before this event, I was sitting at my home desk getting ready for my presentation. Since I work a lot with 3D animation in my daily job, it made sense to show something related to that.

I work for an engineering firm, where I create 3D animations based on technical assembly manuals, illustrating step-by-step how massive offshore steel structures are put together. These structures are primarily used in fossil and renewable energy production.

I've discovered that dealing with these building animations and reading through countless instruction manuals is a very similar process to one of my favourite hobbies, building with Lego bricks. Both involve sequential assembly steps and manuals or in Lego's case, instruction booklets, showing how to put everything together.

This sparked the idea to create my own tiny assembly animation made out of digital Lego bricks, using spreadsheet data and Python scripting in Blender to create the animation. This animation was what I ended up presenting at the university.

Working on the project just took a few days, but writing this article took many months to complete. I intend to write this article as a way to share my experience, in case it proves to be useful for others with similar interests. If you notice any mistakes or see anything I’ve overlooked, please reach out to me.

# Building without constraints
Digital technology has significantly changed how enthusiasts of Lego express their creativity. Applications such as Bricklink Studio remove physical boundaries, providing unlimited access to every Lego element in any color imaginable. This allows anyone with a computer regardless of access to physical Lego bricks, available space, or economic circumstances to fully explore their creativity and build without limitations.

## The oceans of digital Lego tools
If you’ve ever googled how to create digital Lego models, you might have been overwhelmed by the options as I was. Here I collected a handful of tools mentioned across the internet.

1. **Lego Digital Designer (LDD)** - Deprecated
LDD was Lego’s official digital modelling software until it was officially replaced by Bricklink Studio in 2022. Although discontinued and no longer updated, it remains functional. I briefly used it back in 2017 and I still have an older version installed on my PC. One feature I liked was its automatic and interactive building instructions, with an option to export to HTML.
2. **LeoCAD** - LeoCAD is one of the oldest programs for digital Lego building, first released in 1997. It’s designed to work with the LDraw library, this requires you to install and link to the external LDraw library in LeoCAD's preferences.
3. **LDraw** - LDraw is not a program but an open-source brick library, arguably the largest available in the galaxy. Its file format is highly interoperable with other software because many tools use the LDraw library as their foundation.
4. **Bricklink Studio (a.k.a. Stud.io)** - Stud.io offers an extensive brick library (backed by Ldraw) and the ability to export a parts list of your creation, which you can use to order real Lego pieces and build your model in real life. Some users say its color support is limited, but I haven’t encountered this issue myself with my limited experience.
5. **Mecabricks** - Finally there is Mecabricks. Mecabricks runs entirely in your browser and has a dedicated Blender addon that works flawlessly out of the box. Its geometry is clean and render-friendly, with no gaps in imported bricks. While I haven’t tested its brick library extensively, I’ve read that it’s excellent for designing minifigures and includes many of the latest molds. [The creator of Mecabricks mentions](https://rockraidersunited.com/topic/7898-ldraw-vs-mecabricks-vs-ldd-for-game-models/) that they create their own bricks, and directly in Blender, using techniques such as 3D scanning, to accurately represent real Lego pieces digitally.
6. **ImportLdraw Blender Plug-in** - An alternative to the Mecabricks Blender plug-in, this tool imports LDraw files directly into Blender without any additional setup—just install the plug-in from GitHub. Accurate, compatible, and quick imports are its main advantages.

### For further reading:
- Reddit discussion: [Best program? : r/DigitalLego](https://www.reddit.com/r/DigitalLego/comments/1b4rpkg/best_program/)
- (Only in Norwegian) Discussion about tool preferences and a take on LDD: LDD - [LEGO Digital Design - Generelt / Annet LEGO-relatert - Brikkelauget](https://www.brikkelauget.no/t/ldd-lego-digital-design/5651)

# Bricklink and Stud.io
For this project, I've decided to use Bricklink's Stud.io to build the digital Lego set. For the install, I went directly to Bricklink.com and downloaded [Stud.io](https://www.bricklink.com/v3/studio/download.page). 

As a first impression, I found the UI and navigation in the program intuitive, but I'm not yet comfortable with the building controls, something I have to get used to. I love how large Stud.io's part library is. It allows you to basically create anything in any colour you ever wanted. It truly feels like building with real Lego bricks, once you get the hang of it.

After some playing around, I decided to try to make something myself.

I landed on creating a tiny micro scale Floating Offshore Wind Turbine (FOWT).
{% image "./Agucadoura_WindFloat_Prototype_edited.jpg", "Agucadoura WindFloat Prototype, CC BY-SA 3.0" %}
_An image of a FOWT that I used as a reference. Credit: [“Agucadoura WindFloat Prototype”](https://commons.wikimedia.org/wiki/File:Agucadoura_WindFloat_Prototype.jpg) by [Untrakdrover](https://commons.wikimedia.org/wiki/User:Untrakdrover), licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/))_

After browsing around I did find an already existing Polybag model, in similar dimensions as I wanted it. To create the white turbine I used parts from [LEGO Wind Energy Set 11952](https://www.bricklink.com/v2/catalog/catalogitem.page?S=11952-1&name=Wind%20Turbine%20and%20Wind%20Mill%20polybag&category=%5BExplorer%5D#T=S&O=%22iconly%22:0), and a few 1x1 round brick pieces and 1x6 plates in yellow colour, to create the floating ballast tanks.
{% image "./11952-1.png", "LEGO Wind Energy Set 11952" %}
_I used the white turbine from the LEGO Wind Energy Set 11952_

When searching for the right pieces I mainly used the inbuilt part library in Stud.io in combination with Set Inventory on Bricklink. Set Inventory displays parts from existing Lego sets. This feature is particularly helpful if you're trying to find a specific piece from a set you remember or own.Whenever I was stuck I looked up the part number names here and then pasted it into Stud.io.

# Stud.io to Blender Workflow

The diagram below illustrates the steps and decision-making requires to transfer a model from Stud.io to blender.
![diagram showing the model and data flow from Stud.io to Blende](../Studio_Blender_Flow_drawio.svg)

_diagram showing the model and data flow from Stud.io to Blender_

# Stud.io and Blender
After I finished modelling, I moved over to Blender to continue the process. Stud.io does not have native support for Blender, but then how could I import my model and use it in Blender?

There is an open source addon called Import Ldraw that lets Blender import ldraw files. Alternatively, there is Mecabricks which I briefly mentioned under the “The Ocean of tools” selection. Mecabrics comes with an editor and a plugin that is better integrated with Blender, and its imported materials also look very nice.

In my case, I used both addons for different purposes, so I couldn’t decide which one I preferred.

**Exporting from Stud.io**:

When it comes to file formats in Stud.io, you have the following available options for you.

- **Wavefront (.obj)** is a simple format that merges your model on export, so if you want to keep every piece of your model separate you need to use another format
- **Ldraw**, The most versatile format, this will keep each piece separate. This I ended up using myself.
- **Collada (.dae)**: If your model includes stickers or decals, you will need to export a Collada file beside your Ldraw to preserve the textures.

## Blender addons
### Import Ldraw addon

To start using the Ldraw plugin go to [this github repo](https://github.com/TobyLobster/ImportLDraw) download and install the plugin.

The advantage of this workflow is that I can quickly make changes to my model in Stud.io, then hop over to Blender and re-import it using the addon. This allows me to do quick iterations with the least amount of manual clicks and hoops to jump through. Importing can sometimes take a while, depending on your model’s size.

### Mecabricks
For Mecabricks I used their Blender plugin to transfer my model into Blender using a format called .zmbx.
You can use any Blender version as long as it supports the latest Mecabricks addon. Mecabricks offers two versions of their addon: the free Lite version and the paid Advanced version. I used the Lite version.

To get access to the addon simply:

1. Go to [Mecabricks.com](https://mecabricks.com/en/)
2. Create an account
3. Download the [Mecabricks Lite Blender addon](https://mecabricks.com/en/shop/product/2)

_Note:_
1. While you can import LDraw models into Mecabricks without logging in, you must be logged in to export them.
2. To install the Mecabricks Lite, open Blender, navigate to Edit > Preferences > addons, click install and select the zip file you just downloaded.

#### Import model into Mecabricks
After creating an account, navigate to the "Workshop" page. Import your model file by selecting Import LDraw.

#### Export from Mecabricks
Before exporting, I briefly reviewed my model for any issues. Then I clicked on File, then Export from the dropdown menu

In the export dialog box, I set the Format field to Blender addon (.zmbx).
Click Export to save the file.
{% image "./Mecabricks_Export.png", "dialog box, choose .zmbx" %}
_Export dialog window in the Mecabricks web editor_

# Blender scene setup

**Importing a model (Ldraw)**
Navigate to File > Import > Ldraw

**Importing a model (Mecabricks)**
Navigate to File > Import > Mecabricks (.zmbx). Once imported, I scale the model down to 0.001m to correct its size.

**Scene setup**

After the import, I started with adding a simple plane that I scaled up by 50 units, which gave me a total plane dimension of 100 meters along both the X and Y axes.

Then, I applied scale.
{% image "./When_in_doubt.png", "When in doubt" %}
_A famous line from Andrew Price Blender conference 2024_

For the plane material, I created this blue checker matte texture based on Blender's built in brick texture. I adjusted the parameters on the brick texture until I got the look I was aiming for.

Next I added a camera and adjusted it using the fly navigation mode.I set the focal length to 75 mm. Initially, I experimented with a 150 mm focal length because it felt less distorted, but I preferred the look of the 75 mm.

After placing the camera, I switched the render engine to Cycles and ran a test render by pressing F12. At this point, I noticed the scene was very dark — it needed lights!

Returning to the viewport, I added a point light with the settings shown below, but you can experiment with different types of lights to see what works best for you.

Since I wanted a dark, black-void background, I went into the World Properties panel, and under Surface properties, I lowered the values on the Color properties.

{% image "./Blender_Scene_Setup.png", "Scene setup" %}
_How the scene is setup, backdrop plane, camera and empties controlling the camera depth of field_
# Animation
With the scene complete, it was time to animate the Lego pieces. In the next segment, I'm going to show how I started by manually experimenting with simple animations and finally moving over to a partially automated process using scripting.

## Experimenting with manual keyframe animations
Initially, I created simple animations by manually keyframing objects to move between two points. However, I quickly realised I wanted to have more steps and to have a good control over how I wanted my Lego bricks to be animated.

I settled on these tree core animation actions:
- bricks appearing from nowhere
- pausing briefly
- smoothly settling into their final positions

I decided the easiest approach was keyframing these positions in reverse order. This helped me visualise the process clearly, essentially "disassembling" my model first to understand the assembly sequence.

## First prototype: LLM script
After creating and testing the motions I wanted for the animation seqeunce, as a next step I aimed to speed up the process using scripting. Due to limited Python experience at the time, I turned to ChatGPT for assistance.

After just a few exchanges and iterations I already had a functional script that allowed me to:
- Define basic animation presets.
- Import assembly-order data from a CSV file, (initially created using Google Sheets.)
- Automate the process of animating objects sequentially.

Although this version was quickly put together and somewhat crude, it successfully demonstrated the concept and allowed me to rapidly produce a working prototype in time for my presentation. However, during this process, I discovered several limitations:
- The animations ran in reverse compared to my intended assembly order.
- There were redundant parameters in the CSV file better handled directly by the script.
- I lacked easy ways to control the animation direction, starting frames, and playback range dynamically.

## Second prototype and current version
After completing my initial prototype and gaining a bit more experience, along with a clearer understanding of Python in Blender, I decided to revisit the script. I felt confident I could reshape the entire script on my own. I systematically dissected the original script line-by-line until things started to break, and then figured out ways to fix it myself while cleaning up the LLM-generated code so it was easier for me to understand. In the end, I had a script that was more aligned with the project's original goal.

Beside scripting, I also simplified my Blender scene. I went back to the basics, I added three cubes with three different colours and made the csv data with only three rows. This reduced complexity made me focus more on what actually mattered the most and made it a lot easier for my brain to focus on nailig down the animation that the scipt was outputting. Down below you will see an ecample spreadsheet. This simple, three row csv data I used for testing out the animation.

{% image "./Simplified_Blender_Scene.png", "Simplified Blender scene with 3 differently coloured cubes" %}
_The simplified Blender scene after starting over_


### Script overview
The script consists 6 key components:
1. **Clear existing animations**: Automatically clears all existing keyframes, so I don’t have to do this manually each time I want to test the animation.
2. **Set file paths**: Here the path needs to be set to the csv file containing the order of assembly.
```python
csvfilepath = r"C:\path\to\your\list.csv"
```
3. **Animation parameters**: User-defined parameters that control the timing, pacing, and positions of animation elements.
```python
hide_z = -1000      # Position far below the scene to hide objects initially
spawn_z = 5         # Height from which objects appear
hold_keyframe = 12  # Frames to pause after spawning
next_keyframe = 24  # Frames for final movement
```

4. **Reading CSV data**: The script reads assembly order data from a user-defined CSV file, listing objects in the sequence they'll appear.

| AssemblyOrder | ObjectName |
| ------------ | --------- |
| 1             | part.001   |
| 2             | part.002   |
| 3             | part.003   |

5. **Animating objects sequentially**: The script uses the CSV to animate objects either in their listed order or reversed, based on a boolean (list_order). Each object:
    - Moves to the hidden position.
    - Appears at a spawn position.
    - Hold briefly.
    - Moves to its final assembled location.

6. **Adjust playback range**: The script sets Blender's playback range based on the inputs.

Here's the part that creates the actual animations:

```python
# -------------------------------------------------------
# 6) Animate objects in a sorted order
# -------------------------------------------------------

def animator(current_frame, list_order):
    
    if list_order:  
        # If True, reverse the existing sorted 'rows'
        iteration_sequence = reversed(rows)
    else:
        # If False, just use them as-is
        iteration_sequence = rows

    for assembly_order, object_name in iteration_sequence:

        ob = bpy.data.objects.get(object_name)

        bpy.context.view_layer.objects.active = ob
        ob.select_set(True)
        
        # Grab the current z location of the object
        obj_loc_z = bpy.context.active_object.location[2]
        
        # 1. Keyframe: hide location on the current frame
        ob.location.z += hide_z
        ob.keyframe_insert(data_path="location", frame=current_frame)
        
        # 2. Keyframe: move one keyframe and set location z on the object at spawn_z location
        current_frame += 1
        ob.location.z = obj_loc_z + spawn_z
        ob.keyframe_insert(data_path="location", frame=current_frame)
        
        # 3. Keyframe: move another amount of frames on the timeline
        current_frame += hold_keyframe
        ob.keyframe_insert(data_path="location", frame=current_frame)
        
        # 4. Keyframe: move an extra amount of keyframes and keyframe at the initial location of the object
        current_frame += next_keyframe
        ob.location.z = obj_loc_z
        ob.keyframe_insert(data_path="location", frame=current_frame)

        ob.select_set(False)
        
    return None
```

### Using the Script in Practice
With the current version, animating is a lot more straightforward. I need to adjust a few parameters to achieve different looks:
- **spawn_z:** Adjust height from which the object drops. Adjusting this value makes the object's first appearance on screen more dramatic..
- **hold_keyframe:** Control the pause duration between object placements. 
If I increase this number, I’ll get longer pauses between each object animating. This can be really useful if I want to slow things down and make sure each step of the assembly is super clear to see. Lower it creates a faster, snappier animation.
Increasing this number creates longer pauses between animations of each object, useful if the goal is to make the assembly step more obvious and slow. Lower values create a faster, snappier animation.
- **next_keyframe**: Fine-tune animation pacing.I rarely need to change this compared to the other settings.

The **hide_z** and **current_frame** values generally remain constant, working well with their defaults in most scenarios.

**list_order** controls the build direction, forward or reverse. I keep it set to False so the animation builds from the first element to the last.

I can set the desired playback range with **Start Frame** and **End Frame** either in Blender's timeline settings or directly in the script. This setting is hardcoded in the current version of the script, so it's honestly a bit pointless, as the same can be done by adjusting the settings in Blender’s timeline UI, but the option is there.

```python
bpy.data.scenes["Scene"].frame_start = 0
bpy.data.scenes["Scene"].frame_end = 888  # Adjust according to your animation length
```

{% image "./Blender_Final_Scene_Setup.png", "Final Blender scene with all the materials" %}
_The final render scene with all the materials, ready for rendering_

# Rendering and making animation sequence into video

![Alt text](../Windmill.gif)

For the final renders I used Cycles, but for all the testing I used Eevee.
When it comes to settings, I changed a few default options.
- Changed the render device from CPU to GPU
- Under the Sampling menu, I set the Max Samples to 256 for both Viewport and Render, although I think 128 could also be sufficient
- Enabled Denoising on rendering (if it hasn’t been by default)

_**Some rendering tips**: It's always good practice to experiment with test renders. I often play around with Sample Rates, Denoising, Noise Thresholds, and Persistent Data. For animations, enabling Persistent Data significantly speeds up rendering. Normally, Blender builds the scene data for each frame. With Persistent Data enabled, the build time only occurs on the first frame, and subsequent frames only use rendering time because the data is cached._

**Motion Blur**

Adding Motion blur directly in your scene in real time can be a bit finicky. While it's not as precise as adding it later in compositing, Blender's built-in motion blur does a decent job for general use. In my experience, setting the Position to Center on Frame gave the best results.

**Combining the image sequence into video**

For simple animations like this, I combine my rendered image sequences directly in Blender’s compositor.
To use it, I switched over to the Compositor workspace, then loaded my rendered image sequence into the compositor and continued from there.

_**Tip**: You can use an alpha channel node to blend rendered images with a different background._

# Conclusion

In the end, the reworked version was significantly better than my original script. It also helped me to reduce manual work and gave me more precise control over animation timing. The complete code is available on my [Github](https://github.com/marcellerdelyi/soa).

On a personal note, this was the most fun I had with a project in a long time. I learned how I can make Lego animations using Stud.io and Blender, and that I'm not restricted by the physical need to acquire Lego bricks to build my creations.

And that’s it! There is nothing more to it; I wish there were, so that I could ramble on about it until eternity. Until next time!

