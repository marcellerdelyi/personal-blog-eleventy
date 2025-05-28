---
title: "Sequential Data-driven Animations in Blender"
description: "How I made a sequential, data-driven 3D animation in Blender, using digital Lego bricks."
date: 2025-05-22
---

# Abstract
How I made a sequential, data-driven 3D animation in Blender, using digital Lego bricks.

# Background
In the autumn of 2024, in a small town in the middle of Norway, I was holding a presentation at a local University where former students were sharing stories about how they transitioned into work life after finishing their studies. I did my best to prepare for my presentation, but I ultimately only had time to create a brief speech and a 3D animation video. We were in a big auditorium, and I was the last to present. Behind me, on two large screens was playing my video, an assembly animation of an offshore windmill made out of digital Lego bricks. 

Just a couple days before this event, I was sitting at my home desk getting ready for my presentation. Since I produce a lot of 3D animation in my daily job, it made sense to me to show something related to this. The only issue was that strict NDA regulations prevented me from showcasing actual customer projects, so I had to be creative to make something that resembled a comparable workflow.

I work for an engineering firm where I'm in charge of visualising and producing 3D animated building sequences of the assembly process of massive offshore steel structures, mainly used in the production of fossil and renewable energy sources.

I've discovered that dealing with these building animations and reading through countless instruction manuals is a very similar process to one of my favourite hobbies, assembling Lego sets following the instruction booklet.

This sparked the idea to create my own tiny assembly animation made out of digital Lego bricks, using spreadsheet data and Python scripting in Blender to drive the animation. This animation was what I ended up presenting at the Alumni meeting.

Working on the project just took a few days, but writing this article took many months to complete. I intend to write this article as a way to share my experience, in case it proves to be useful for others with similar interests. If you notice any mistakes or see anything I’ve overlooked, please reach out to me.

# Building without constraints
Digital technology has significantly changed how enthusiasts of Lego express their creativity. Applications such as Bricklink Studio remove physical boundaries, providing unlimited access to every Lego element in any color imaginable. This allows anyone with a computer regardless of access to physical Lego bricks, available space, or economic circumstances to fully explore their creativity and build without limitations.

## The oceans of digital Lego tools

1. **Lego Digital Designer (LDD)** - Deprecated
LDD was Lego’s official digital modelling software until it was officially replaced by Bricklink Studio in 2022. Although discontinued and no longer updated, it remains functional. I briefly used it back in 2017 and I still have an older version installed on my PC. One feature I liked was its automatic and interactive building instructions, with an option to export to HTML.
2. **LeoCAD** - LeoCAD is one of the oldest programs for digital Lego building, first released in 1997. It’s designed to work with the LDraw library, this requires you to install and link to the external LDraw library in LeoCAD's preferences.
3. **LDraw** - LDraw is not a program but an open-source brick library, arguably the largest available in the galaxy. Its file format is highly interoperable with other software because many tools use the LDraw library as their foundation.
4. **Bricklink Studio (a.k.a. Stud.io)** - Stud.io offers an extensive brick library (backed by Ldraw) and the ability to export a parts list of your creation, which you can use to order real Lego pieces and build your model in real life. Some users say its color support is limited, but I haven’t encountered this issue myself with my limited experience.
5. **Mecabricks** - Finally there is Mecabricks. Mecabricks runs entirely in your browser and has a dedicated Blender add-on that works flawlessly out of the box. Its geometry is clean and render-friendly, with no gaps in imported bricks. While I haven’t tested its brick library extensively, I’ve read that it’s excellent for designing minifigures and includes many of the latest molds. [The creator of Mecabricks mentions](https://rockraidersunited.com/topic/7898-ldraw-vs-mecabricks-vs-ldd-for-game-models/) that they create their own bricks, and directly in Blender, using techniques such as 3D scanning, to accurately represent real Lego pieces digitally.
6. **ImportLdraw Blender Plug-in** - An alternative to the Mecabricks Blender plug-in, this tool imports LDraw files directly into Blender without any additional setup—just install the plug-in from GitHub. Accurate, compatible, and quick imports are its main advantages.

### For further reading:
- Reddit discussion: [Best program? : r/DigitalLego](https://www.reddit.com/r/DigitalLego/comments/1b4rpkg/best_program/)
- (Only in Norwegian) Discussion about tool preferences and a take on LDD: LDD - [LEGO Digital Design - Generelt / Annet LEGO-relatert - Brikkelauget](https://www.brikkelauget.no/t/ldd-lego-digital-design/5651)

# Stud.io to Blender Workflow

The model below shows the steps and decision-making required to convert my model from Stud.io to blender.
Later, I added additional bits related to work whitin the Blender side of things. 
In the end, it became a model of the entire process, from Stud.io to final output from Blender, the MP4 file containing the animated sequence.
// {% image "./Studio_Blender_Flow.jpg", "Stut.io to Blender pipeline"%}
_diagram showing the model and data flow from Stud.io to Blender and then to the final outp_

# Bricklink and Stud.io
When it comes to this project I have decided to use Bricklink Studio where i created my digital Lego set. For the install, I went directly to Bricklink.com and downloaded Stud.io.

As a first impression, I found the UI and navigation in the program intuitive, but I'm not yet comfortable with the building controls. This I have to get used to. I love how large Studio's part library is. It allows you to basically create anything in any colour you ever wanted. It truly feels like building with real Lego bricks, once you get the hang of it.

After some playing around, I decided to try to make something myself.

I landed on creating a tiny micro scale Floating Offshore Wind Turbine (FOWT), After browsing around I did find an already existing Polybag model, in similar dimensions as I wanted it. To create the white turbine I used parts from LEGO Wind Energy Set 11952, and a few 1x1 round brick pieces and 1x6 plates in yellow colour, to create the floating ballast tanks. When searching for the right pieces I mainly used the inbuilt part library in Studio in combination with Set Inventory on Bricklink. Set Inventory displays parts from existing Lego sets. This feature is particularly helpful if you're trying to find a specific piece from a set you remember or own.Whenever I was stuck I looked up the part number names here and then pasted it into Stud.io.

# Stud.io and Blender
After I finished modelling, I moved over to Blender to continue the process. Stud.io does not have native support for Blender, but then how could I import my model and use it in Blender?

There is an open source addon called Import Ldraw that lets Blender import ldraw files. Alternatively, there is Mecabricks which I briefly mentioned under the “The Ocean of tools” selection. Mecabrics comes with an editor and a plugin that is better integrated with Blender, and its imported materials also look very nice.

In my case, I used both addons for different purposes, so I couldn’t decide which one I preferred.

## Exporting from Studio
When it comes to file formats in Studio, you have the following available options for you.

- **Wavefront (.obj)** is a simple format that merges your model on export, so if you want to keep every piece of your model separate you need to use another format
- **Ldraw**, The most versatile format, this will keep each piece separate. This I ended up using myself.
- **Collada (.dae)**: If your model includes stickers or decals, you will need to export a Collada file beside your Ldraw to preserve the textures.

## Blender Imports
### Import Ldraw addon

To start using the Ldraw plugin go to this github repo download and install the plugin.

The advantage of this workflow is that I can quickly make changes to my model in Studio, then hop over to Blender and re-import it using the addon. This allows me to do quick iterations with the least amount of manual clicks and hoops to jump through. Importing can sometimes take a while, depending on your model’s size.

### Mecabricks
For Mecabricks I used their Blender plugin to transfer my model into Blender using a format called .zmbx.

#### To get access to the addon
1. Go to Mecabricks.com
2. Create an account
3. Download the Blender add-on

_Note:_ While you can import LDraw models into Mecabricks without logging in, you must be logged in to export them.

#### Import model into Mecabricks
After creating an account, navigate to the "Workshop" page. Import your model file by selecting Import LDraw.

#### Export from Mecabricks
Before exporting, I briefly reviewed my model for any issues. Then I clicked on File, then Export from the dropdown menu

In the export dialog box, I set the Format field to Blender Add-on (.zmbx).
Click Export to save the file.
[Insert image of the dialog box here]

#### Install Blender and the Mecabricks Add-on
You can use any Blender version as long as it supports the latest Mecabricks add-on.  At the time of writing, I’m using Blender version 4.1.1. Mecabricks offers two versions of their add-on: the free Lite version and the paid Advanced version. I used the Lite version.

- Download Blender: [Link to Blender download]
- Download the Mecabricks Lite Blender add-on: [Link to add-on download]

To install the Mecabricks Lite, open Blender, navigate to Edit > Preferences > Add-ons, click install and select the zip file you just downloaded.

# Blender setup

## Importing a model (Ldraw)
Something about Ldraw imports…

## Importing a model (Mecabricks)
Navigate to File > Import > Mecabricks (.zmbx). Once imported, I scaled the model down to 0.001m to correct its size.

## Setting up a scene
First I started with adding a simple plane that I scaled up by 50 units, which gave me a total plane dimension of 100 meters along both the X and Y axes.
Then, I applied scale (Insert Blender meme)

For the plane material, I created this blue checker matte texture based on Blender's built in brick texture. I adjusted the parameters on the brick texture until I got the look I was aiming for.

Next I added a camera and adjusted it using the fly navigation mode.I set the focal length to 75 mm. Initially, I experimented with a 150 mm focal length because it felt less distorted, but I preferred the look of the 75 mm.

After placing the camera, I switched the render engine to Cycles and ran a test render by pressing F12. At this point, I noticed the scene was very dark — it needed lights!

Returning to the viewport, I added a point light with the settings shown below, but you can experiment with different types of lights to see what works best for you.

Since I wanted a dark, black-void background, I went into the World Properties panel, and under Surface properties, I lowered the values on the Color properties.

### Render settings
As I mentioned earlier, for rendering I used Cycles and I changed the render device from CPU to GPU. Under the Sampling menu, I set the Max Samples to 256 for both Viewport and Render, although I think 128 could also be sufficient. Finally I enabled Denoising on rendering (if it hasn’t been by default)

### Motion Blur
Motion blur can be a bit finicky. While it's not as precise as adding it later in compositing, Blender's built-in motion blur does a decent job for general use. In my experience, setting the Position to Center on Frame gave the best results.

### Rendering tips
It’s always a good idea to do experimental renders. Play around with sample rates, denoising, noise threshold rates, persistent data. Especially for animations, enabling persistent data can save a lot of time when rendering. When you press render you have a built time and a render time that runs on each frame to build your image. With persistent data enabled, your built time will run only once on the first frame and any subsequent frames will be running rendering time only, in other words the data is cached.

It's always good practice to experiment with test renders. I often play around with Sample Rates, Denoising, Noise Thresholds, and Persistent Data.For animations, enabling Persistent Data significantly speeds up rendering. Normally, Blender builds the scene data for each frame. With Persistent Data enabled, the build time only occurs on the first frame, and subsequent frames only use rendering time because the data is cached.

### Combining the image sequence into video
For simple animations like this, I combine my rendered image sequences directly in Blender’s compositor.
To use it, I switched over to the Compositor workspace. Then I loaded my rendered image sequence into the compositor and continued from there.

Tip! You can use an alpha channel node to blend rendered images with a different background.

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

### Script overview
The script consists of five key components:
1. **Clear existing animations**: Automatically clears all existing keyframes, so I don’t have to do this manually each time I want to test the animation.
2. **Animation settings**: User-defined parameters that control the timing, pacing, and positions of animation elements:
    - **hide_z**: Position far below the scene to hide objects initially.
    - **spawn_z**: Height from which the object appears.
    - **hold_keyframe**: Number of frames an object pauses after spawning.
    - **next_keyframe**: Frames between the hold and final keyframe positions of an object.
3. **Reading CSV data**: The script reads assembly order data from a user-defined CSV file, listing objects in the sequence they'll appear.

| AssemblyOrder | ObjectName |
| ------------ | --------- |
| 1             | part.001   |
| 2             | part.002   |
| 3             | part.003   |

4. **Animating objects sequentially**: The script uses the CSV to animate objects either in their listed order or reversed, based on a boolean (list_order). Each object:
    - Moves to the hidden position.
    - Appears at a spawn position.
    - Hold briefly.
    - Moves to its final assembled location.

5. **Adjust playback range**: The script sets Blender's playback range based on the inputs.

Here's the part that creates the actual animations:

```python
# -------------------------------------------------------
# 5) Animate objects in a sorted order
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
![Alt text](../Windmill.gif)

# Conclusion

In the end, the reworked version was significantly better than my original script. It also helped me to reduce manual work and gave me more precise control over animation timing. The complete code is available on my [Github](https://github.com/marcellerdelyi/personal-blog-eleventy).

On a personal note, this was the most fun I had with a project in a long time. I learned how I can make Lego animations using Stud.io and Blender, and that I'm not restricted by the physical need to acquire Lego bricks to build my creations.

And that’s it! There is nothing more to it; I wish there were, so that I could ramble on about it until eternity. Until next time!

