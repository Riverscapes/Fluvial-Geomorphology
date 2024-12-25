---
title: 	Instream Geomorphic Units from GUT
weight: 8
---
# Module 8 - Instream Geomorphic Units from GUT

<div align="center">
<a class="button secondary" href="{{ site.baseurl }}/Course_Topics/module-08.html"><i class="fa fa-reply" aria-hidden="true"></i> See Corresponding Learning Module <i class="fa fa-leanpub" aria-hidden="true"></i></a></div>

## The Set-Up
We will take you to the basalt canyons of the Asotin Watershed in southeast Washington. The [Asotin is the focus of an Intensively Monitored Watershed](https://wa-rco.maps.arcgis.com/apps/Cascade/index.html?appid=0ff5118943a843c79571cc2d7015f92e) and experimental restoration to recover Steelhead populations where we have over eight years of repeat topographic surveys (n=112 surveys) across 18 different sites. Scroll through Story Map  below for a brief overview of the IMW:
<div class="responsive-embed">
<iframe width="100%" height="800px" src="https://wa-rco.maps.arcgis.com/apps/Cascade/index.html?appid=0ff5118943a843c79571cc2d7015f92e" frameborder="0" scrolling="yes"></iframe></div>
See [Asotin Creek IMW Annual Progress Report (2020)](https://ecologicalresearchinc.box.com/s/t9ulgtjl482h3i37lxevl3yb5pri0p6s) for more information and or [this lecture from Steve Bennett](http://lowtechpbr.restoration.usu.edu/workshops/2020/SGI/Modules/module2#d-post-assisted-log-structures-case-study-asotin-creek).

In the [book]({{ site.baseurl }}/Fluvial-Geomorphology/syllabus/2021_Spring.html#fyirs--brierley-2013), you learned about instream geomorphic units. In [lecutre]() and the [field](https://riverscapes.github.io/Fluvial-Geomorphology/Course_Topics/module-08.html#field-trip-handout), you learned how to systematically apply the Wheaton et al. (2015) [Fluvial Taxonomy](https://riverscapes.github.io/Fluvial-Geomorphology/Course_Topics/module-08.html#2015-fluvial-taxonomy) to identify geomorphic units. In this assignment, you will explore the outputs of the Geomorphic Unit Tool ([GUT](http://gut.riverscapes.xyz)) on some of those repeat surveys at two (of the 18) contrasting sites on the North Fork of the Asotin ([GUT portion of lecture](https://youtu.be/GscrxxlT5v8). 

## Purpose
<a href="http://gut.riverscapes.xyz"><img class="float-right" src="{{ site.baseurl }}/assets/images/logos/GUT.png"></a>
The goals of this assignment is to i) give you more **experience exploring topographic datasets that reflect  geomorphic units**, and ii) help you **interpret outputs of  [GUT](http://gut.riverscapes.xyz)** analyses of those topographic datasets that attempt to derive geomorphic units. The outputs are not perfect, but they should help you better make the connection between the topographic definitions we discussed in lecture and the field, and how we approximate outputs of those from real data. 

----------------
## Prerequisites
Students/Participants are expected to have some previous GIS experience, familiarity with ArcGIS (don’t need to be an expert), and some understanding of topographic data and digital elevation models. Note, you can view these projects with QGIS, but you will have to manually load the layers and symbolize them

If its been a while since you've used ArcGIS and you want a refresher, you may find these '[Getting Organized and Oriented](http://gis.joewheaton.org/assignments/labs/lab01/getting-organized-and-oriented)' pages helpful, or you may find [Task 1](http://gis.joewheaton.org/assignments/labs/lab01/task-1---build-map) of this [Intro to GIS Lab Exercise](http://gis.joewheaton.org/assignments/labs/lab01)  helpful (don't bother with the making a website portion; Task 2 and 3). 

#### Computer & Software  Requirements

Before you get to workshop/class, all students/participants will need access to a computer with ArcGIS 10.6 or later   (note the QCNR computer labs and Engineering Computer labs have this). Although in development, there are currently NOT RAVE versions for QGIS, ArcGIS Pro or the Web.

- If you use your own  computer, it will need a Windows OS (Windows 10 recommended) 
  - For ArcGIS to run efficiently in Windows, 8 GB or more of RAM is recommended 
  - A mouse is strongly encouraged over a trackpad
- Required Software (to follow demos)
  - [RAVE Add-In](http://rave.riverscapes.xyz/) ([Requires ArcGIS 10.6 or later](http://rave.riverscapes.xyz/getting-started.html)) - **NOTE** if you are working in a computer lab, you CAN [install this Add-In](http://rave.riverscapes.xyz/install.html), but may need to reinstall it each time you come to the lab.

If you need a [Education Edition](http://esri.com/educationedition/) license for a new or existing installation of ArcGIS, email Joe.

-----------
# The Assignment

Explore outputs of GUT maps at two sites and explain what is going on. I will take you to two sites on the North Fork Asotin Creek, which are in the same type of reach, but are experiencing different conditions (i.e., behavior/process) and therefor you see that reflected in different assemblages of geomorphic units. 

**Two Sites**: Specifically, you will explore **two sites**, each roughly 250 m in length, approximately 3.5 km away from each other on the North Fork Asotin Creek. The first is a relatively simple, moderate condition "wandering gravel bed river" site called  NF_F4 P1 (North Fork Fish 4 Site Part 1). The second is  a more interesting, good condition "wandering gravel bed river" site called NF_F6 P2.  

**Two Surveys at Each Site**: There are roughly annual topographic surveys at each of these two sites between 2011 and 2017. Choose two surveys (at least) so you can look at temporal contrasts at each site. You can optionally use GCD, but are not required to. 

<div class="row small-up-2 medium-up-2">

 <div class="column">
    <div class="card">


      <div class="card-section">
        <h4> Don't Get Lost - Overivew</h4>
        <div class="responsive-embed"> 

<iframe width="560" height="315" src="https://www.youtube.com/embed/xPvlcR851wY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>


</div>
In this video I show you what you're doing in this assignment. <br> <i class="fa fa-clock-o" aria-hidden="true"></i> 6 minutes <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</div>

**Answer Questions**: Some basic questions are provided below to get you to engage with exploring these sites. You will need to prepare a web page with your answers to these questions. I expect you to use some mix of figures, maps, screen shots or even recorded videos to substantiate your answers and do more than just "tell me" the answer but "show me" and explain your interpretations. 

---------
## Getting it Done
### Part 1 - Get Data, Unzip & Explore with RAVE

For the first part of this assignment, I want you to do:
- 1.A Download the [Provided Asotin  Data](https://s3-us-west-2.amazonaws.com/etalweb.joewheaton.org/Courses/fluvial/2021/Labs/Asotin.zip) (also scroll down to *[Assignment Dataset](#assignment-dataset)* for more info) and see "[Getting Data Downloaded and Organized video](https://www.youtube.com/embed/VJneqqnEW8s)"
<div align="center">
<a class="button hollow" href="https://s3-us-west-2.amazonaws.com/etalweb.joewheaton.org/Courses/fluvial/2021/Labs/Asotin.zip"><i class="fa fa-file-archive-o" aria-hidden="true"></i>
Download  Asotin Riverscapes Data for Lab <i class="fa fa-cloud-download" aria-hidden="true"></i> </a>
</div>
- 1.B Figure out your way around [RAVE](http://rave.riverscapes.xyz) & Viewing [GUT](http://gut.riverscapes.xyz) projects

The videos below go through how to do 1A and 1B  if you need help.

<div class="row small-up-2 medium-up-2">

 <div class="column">
    <div class="card">


      <div class="card-section">
        <h4> 1A - Getting Data Downloaded and Organized</h4>
        <div class="responsive-embed"> 

<iframe width="560" height="315" src="https://www.youtube.com/embed/VJneqqnEW8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>


</div>
In this video I show you how to download the  <a href="https://s3-us-west-2.amazonaws.com/etalweb.joewheaton.org/Courses/fluvial/2021/Labs/Asotin.zip">dataset</a> that include all the riverscape projects you need for this lab and how to get them organized on your disk. <br> <i class="fa fa-clock-o" aria-hidden="true"></i> 6 minutes <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </div>
    </div>
  </div>

<div class="column">
    <div class="card">


      <div class="card-section">
        <h4> 1B - Getting Started with GUT in Asotin</h4>
        <div class="responsive-embed"> 

<iframe width="560" height="315" src="https://www.youtube.com/embed/1cMG2hDgJ7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>


</div>
In this video I show you how to  load up data from the Asotin  using  <a href="http://rave.riverscapes.xyz">RAVE</a>. <br> <i class="fa fa-clock-o" aria-hidden="true"></i> 16 minutes <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </div>
    </div>
  </div>

</div>

### Part 2 - Interpret It

Answer (with visual aids) and address the following questions. You will base your answers on the model outputs provided, but you can optionally provide commentary or point out parts of the outputs you disagree with or are confused by. Please organize your answers on your web page in order (okay to refer in answer to previous figure or video, but label accordingly).  I am not expecting a dissertation for each question. A concise, but thoughtful answer will do. If some of them are easier for you to record your thoughts by talking, that is fine (just don't make it all one video and make it organized).

#### 1 North Fork Asotin Creek
-  Please provide a brief (short paragraph max) description of the North Fork Asotin Creek where these two sites are located.

#### 2  North Fork Asotin  F4
- **2.1**: Qualitatively describe the in-channel geomorphology of this reach.
- **2.2**: Choose at least two survey years at this site to consider the temporal variability of morphology at this site. Which survey years are they and why did you choose them?
- **2.3**: What Tier 2 Forms are present in each year? Do they differ?
- **2.4**: Do any of the Tier 2 Forms dominate the assemblage or is it fairly mixed? Is this true through time?
- **2.5**: What Tier 3 Geomorphic Units are present in each year?
- **2.6**: Zoom in to 2 to 5 x bankfull width portion of the reach and look at the arrangement of geomorphic units. Is it coherent? Does it make sense based on what you have learned so far?
- **2.7**: How well does GUT appear to be doing in each year at discriminating the in channel geomorphic units? Point out any weaknesses or concerns you might have.
- **2.7**: Identify in one of your surveys for this reach a distinctive pool, bar and planar feature. For all three identify all five attributes from the fluvial taxonomy (i.e., Table 6), then use those to identify the tier 3 name from Table 7 or 8 (this may differ than what GUT output is because it is not as resolved) and explain which attribute(s) were key for discriminating that unit from other units. 
  -  2.7A : Pool 
     - 2.7 A1: GU Forcing
     - 2.7 A2: GU Orientation
     - 2.7 A3: GU Position
     - 2.7 A4: GU Low Flow WS Slope
     - 2.7 A5: GU Low Flow Relative Roughness 
     - 2.7 A6: Tier 3 Name
     - 2.7 A7: Which attributes key for discriminating?
     - 2.7 A8: Differences with GUT
  -  2.7B : Bar 
     - 2.7 B1: GU Forcing
     - 2.7 B2: GU Orientation
     - 2.7 B3: GU Position
     - 2.7 B4: GU Low Flow WS Slope
     - 2.7 B5: GU Low Flow Relative Roughness 
     - 2.7 B6: Tier 3 Name
     - 2.7 B7: Which attributes key for discriminating?
     - 2.7 B8: Differences with GUT
  -  2.7C : Planar 
     - 2.7 C1: GU Forcing
     - 2.7 C2: GU Orientation
     - 2.7 C3: GU Position
     - 2.7 C4: GU Low Flow WS Slope
     - 2.7 C5: GU Low Flow Relative Roughness 
     - 2.7 C6: Tier 3 Name
     - 2.7 C7: Which attributes key for discriminating?
     - 2.7 C8: Differences with GUT  
- **2.8**: Turn off GUT and look just at the Topo DEM (e.g Detrended DEM and Contours) for one of the surveys. Manually map one geomorphic unit you think you can read in the topography.
  - 2.8A - What is the tier 2 Form and the tier 3 shape of the unit you manually identified?
  - 2.8B - How do the boundaries of the unit you mapped compare with what GUT derived? 
  - 2.8C - How does the type you identified compare with what GUT identified? Explain the discrepancies if they exist. 

#### 3  North Fork Asotin  F6
- **3.1**: Qualitatively describe the in-channel geomorphology of this reach.
- **3.2**: Choose at least two survey years at this site to consider the temporal variability of morphology at this site. Which survey years are they and why did you choose them?
- **3.3**: What Tier 2 Forms are present in each year? Do they differ?
- **3.4**: Do any of the Tier 2 Forms dominate the assemblage or is it fairly mixed? Is this true through time?
- **3.5**: What Tier 3 Geomorphic Units are present in each year?
- **3.6**: Zoom in to 2 to 5 x bankfull width portion of the reach and look at the arrangement of geomorphic units. Is it coherent? Does it make sense based on what you have learned so far?
- **3.7**: How well does GUT appear to be doing in each year at discriminating the in channel geomorphic units? Point out any weaknesses or concerns you might have.
- **3.7**: Identify in one of your surveys for this reach a distinctive pool, bar and planar feature. For all three identify all five attributes from the fluvial taxonomy (i.e. Table 6), then use those to identify the tier 3 name from Table 7 or 8 (this may differ than what GUT output is because it is not as resolved) and explain which attribute(s) were key for discriminating that unit from other units. 
  -  3.7A : Pool 
     - 3.7 A1: GU Forcing
     - 3.7 A2: GU Orientation
     - 3.7 A3: GU Position
     - 3.7 A4: GU Low Flow WS Slope
     - 3.7 A5: GU Low Flow Relative Roughness 
     - 3.7 A6: Tier 3 Name
     - 3.7 A7: Which attributes key for discriminating?
     - 3.7 A8: Differences with GUT
  -  3.7B : Bar 
     - 3.7 B1: GU Forcing
     - 3.7 B2: GU Orientation
     - 3.7 B3: GU Position
     - 3.7 B4: GU Low Flow WS Slope
     - 3.7 B5: GU Low Flow Relative Roughness 
     - 3.7 B6: Tier 3 Name
     - 3.7 B7: Which attributes key for discriminating?
     - 3.7 B8: Differences with GUT
  -  3.7C : Planar 
     - 3.7 C1: GU Forcing
     - 3.7 C2: GU Orientation
     - 3.7 C3: GU Position
     - 3.7 C4: GU Low Flow WS Slope
     - 3.7 C5: GU Low Flow Relative Roughness 
     - 3.7 C6: Tier 3 Name
     - 3.7 C7: Which attributes key for discriminating?
     - 3.7 C8: Differences with GUT  
- **3.8**: Turn off GUT and look just at the Topo DEM (e.g Detrended DEM and Contours) for one of the surveys. Manually map one geomorphic unit you think you can read in the topography.
  - 3.8A - What is the tier 2 Form and the tier 3 shape of the unit you manually identified?
  - 3.8B - How do the boundaries of the unit you mapped compare with what GUT derived? 
  - 3.8C - How does the type you identified compare with what GUT identified? Explain the discrepancies if they exist. 

#### 3  Differences between F4 & F6
- **3. 1** : What are the primary differences from exploring GUT between these two sites that you noticed between the in channel geomorphic units of these two sites?
- **3. 2** : What inferences can you make about geomorphic processes and behavior when contrasting GUT outputs between these two sites?
- **3.3** : If you only had one GUT output from each of these two sites (i.e. one snap shot) how representative would be your inferences about geomorphic processes? If you did not have the luxury of six or seven surveys, but just one, would your conclusions above be different?

#### 4 Synthesis
- **4. 1** : How are the Tier 2 Forms from GUT different than what we discussed in field?
- **4. 2** : How are the Tier 3 GUs GUT exports different then the ones we discussed? Why do you think GUT does not output the same things?
- **4.3** : How would you apply Tier 4? Do you have enough information here to do that?
- **4.4** : Does exploring these GUT outputs give you more or less confidence in applying the fluvial taxonomy through manual mapping off of topography versus identification in the field?


---------
## What to Turn in 

A link to a complete web page with headings and subheadings for the numbers (for each question) above so it is easy to apply the rubric and see what parts you have done and provide you feedback. 

-----------------
## Optional Information
### Concepts and Context to Illustrate & Explain
Although not absolutely necessary to complete this assignment, the hydraulics, topo and GCD projects have all been provided to help you interpret the datasets and dig a little deeper if you are curious. Moreover, these projects connect the [current module]({{ site.baseurl }}/Fluvial-Geomorphology/Course_Topics/module-08.html) on geomorphic units to the past modules on [geomorphic processes]({{ site.baseurl }}/Fluvial-Geomorphology/Course_Topics/module-06.html) and [hydraulics]({{ site.baseurl }}/Fluvial-Geomorphology/Course_Topics/module-05.html). I **do not** expect you to watch all 40 minutes of these videos to complete the homework assignment. These are here to explain where these additional contextual projects came from, what they are, and help you better interpret the instream geomorphic units you are looking at. 

<div class="row small-up-2 medium-up-2">


  <div class="column">
    <div class="card">


      <div class="card-section">
        <h4> Topo Project</h4>
        <div class="responsive-embed"> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/BKhH3rEFZJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>


</div>
In this video I show you how to  explore a single <a href="https://www.champmonitoring.org/">CHaMP Topo Survey</a> of the Asotin North Fork (F6-S2) site from 2017 (produced using <a href="http://champtools.northarrowresearch.com/"> CHaMP Topo Processing Tools</a>. <br> <i class="fa fa-clock-o" aria-hidden="true"></i> 18 minutes <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </div>
    </div>
  </div>
<div class="column">
    <div class="card">


      <div class="card-section">
        <h4>Hydraulics</h4>
        <div class="responsive-embed"> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/TtuBK-LFdwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>


</div>
In this video I show you how to  explore the context of hydraulic information at one of the Asotin North Fork (F6-S2) sites for the 2017 visit at a 0.45 cumec flow.  <br> <i class="fa fa-clock-o" aria-hidden="true"></i> 11 minutes <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </div>
    </div>
  </div>

</div>

<div class="row small-up-2 medium-up-2">
  <div class="column">
    <div class="card">


      <div class="card-section">
        <h4> GCD Project</h4>
        <div class="responsive-embed"> 

<iframe width="560" height="315" src="https://www.youtube.com/embed/LFOjLZBDgVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>


</div>
In this video I show you how to  explore the context of geomorphic changes through time at one of the Asotin North Fork (F6-S2) sites using <a href="http://gcd.riverscapes.xyz">GCD</a>. <br> <i class="fa fa-clock-o" aria-hidden="true"></i> 10 minutes <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </div>
    </div>
  </div>

</div>





-------
# Resources

## Assignment Dataset

This lab's data includes: i) a Riverscapes Context project, ii) GUT projects for two sites, iii) Corresponding Topographic Survey projects for those two sites for seven visits each; iv) corresponding GCD projects, v) some example hydraulic model simulations for 2011 and 2017 at each site.

<div align="center">
<a class="button large" href="https://s3-us-west-2.amazonaws.com/etalweb.joewheaton.org/Courses/fluvial/2021/Labs/Asotin.zip"><i class="fa fa-file-archive-o" aria-hidden="true"></i>
Download  Asotin Riverscapes Data for Lab <i class="fa fa-cloud-download" aria-hidden="true"></i> </a>
</div>
<a href="https://riverscapes.xyz/"><img class="float-left" src="http://riverscapes.xyz/assets/images/rc/RiverscapesConsortium_Logo_Black_BHS_200w.png"></a>
<a href="http://data.riverscapes.xyz"><img class="float-right" src="http://riverscapes.xyz/assets/images/data/RiverscapesWarehouseCloud_128.png"></a>
The data collected for you all came from the [Riverscapes Consortium's](https://riverscapes.xyz/) [Data Warehouse](http://data.riverscapes.xyz).

<div class="row small-up-2 medium-up-2">


  <div class="column">
    <div class="card">


      <div class="card-section">
        <h4>Data from lab in Asotin Warehouse </h4>
        <div class="responsive-embed"> 

<iframe width="560" height="315" src="https://www.youtube.com/embed/_8ad2I6xhvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>


</div>
In this video, I show you how to get data I provided from <a href="http://data.riverscapes.xyz">warehouse</a>.<br> <i class="fa fa-clock-o" aria-hidden="true"></i> 6 minutes <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </div>
    </div>
  </div>


</div>



## Geomorphic Unit Toolkit
<a href="http://gut.riverscapes.xyz"><img class="float-right" src="{{ site.baseurl }}/assets/images/logos/GUT.png"></a>
- [Geomorphic Unit Toolkit](http://gut.riverscapes.xyz)
- [GUT Projects in Riverscapes Warehouse](http://data.riverscapes.xyz)

## Relevant Papers
### 2015 Fluvial Taxonomy
<a href="https://s3-us-west-2.amazonaws.com/etalweb.joewheaton.org/Courses/Ecohydraulic/2020/Reading/Wheaton_FluvialTaxonomy.pdf"><img class="float-right" src="{{ site.baseurl }}/assets/images/covers/Wheaton2015.png"></a>
- <a href="https://s3-us-west-2.amazonaws.com/etalweb.joewheaton.org/Courses/Ecohydraulic/2020/Reading/Wheaton_FluvialTaxonomy.pdf"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></a> Wheaton J, Fryirs K, Brierley GJ, Bangen SG, Bouwes N, O’Brien G. 2015. [Geomorphic Mapping and Taxonomy of Fluvial Landforms](https://s3-us-west-2.amazonaws.com/etalweb.joewheaton.org/Courses/Ecohydraulic/2020/Reading/Wheaton_FluvialTaxonomy.pdf). Geomorphology 248 : 273–295. DOI: [10.1016/j.geomorph.2015.07.010](https://dx.doi.org/10.1016/j.geomorph.2015.07.010)

### 2020 GUT
- Williams RD, Bangen S, Gillies E, Kramer N, Moir H, Wheaton J. 2020. Let the river erode! Enabling lateral migration increases geomorphic unit diversity. Science of The Total Environment : 136817. DOI: [10.1016/j.scitotenv.2020.136817](10.1016/j.scitotenv.2020.136817)

