---
slug: draft-pipelines-edna-and-more
date: 2017-11-28T14:07
tags: Science
excerpt: |
  Last month we introduced on this blog the research groups at UC Davis and UC Merced that we'll be working with for the Dat in the Lab project. Read on to hear where this project is taking us (hint in the header photo).
author: daniellerobinson
banner: /content/images/2017/11/LA-arial-view-resize.jpeg
title: Virtualizing environments for eDNA analysis
---

Last month we introduced on this blog the research groups at [UC Davis](/dat-in-the-lab-ucdavis-1/) and [UC Merced](/uc-merced-1/) that we'll be working with for the [Dat in the Lab project](/dat-in-the-lab/). Read on to hear where this project is taking us (hint in the header photo).

Discussions with these research groups have highlighted the need for easy reproducible research environments.  Researchers often need to run another group's analysis pipeline, but software dependencies can turn this seemingly simple task into a long process. Every university has a different computing environment on their local clusters. Another side of this issue is that research groups need to archive pipelines so that future group members can use and learn from them. To address this issue, we've been developing Dat Container to create customizable versioned environments. 

Through the Dawson Lab at UC Merced, we were introduced to the exciting [CALeDNA program](http://www.ucedna.com/) run by the University of California Conservation Genomics Consortium. This initiative seeks mobilize citizen scientists to collect eDNA samples to monitor California's biodiversity. 

What's eDNA? eDNA stands for environmental DNA and it refers to DNA collected from soil, sand, water, or other material that will reflect organisms that have been through the place where the sample was taken. Every organism sheds cells and every cell contains DNA, DNA can be collected in from the cells an organism leaves behind in the environment. 

For most traditional genetic or genomic analysis, DNA samples are collected directly from an organism's saliva, hair, skin, or other cells. We can use eDNA to scale up genetic analysis from individuals to entire communities by non-invasively collecting environmental samples. These environmental samples should contain eDNA from all of the organisms that pass through an environment. This allows us to monitor the diversity of animals, plants, fungi, and prokaryotes without the need to individually sample each organism. This works particularly well for monitoring hard to capture, endangered, and cryptic species. For more on eDNA, start [here](http://www.ucedna.com/what-is-environmental-dna/). 

![cal-eDNA](/content/images/2017/11/cal-eDNA.jpg) *CALeDNA citizen science sample collection.*

Are you based in California? You can take part - learn more about the CALeDNA citizen science program [here](http://newsroom.ucla.edu/releases/be-a-citizen-scientist-and-help-preserve-californias-biodiversity). Volunteers get training, a sample collection kit, a phone app to guide their documentation of California's rich biodiversity, and bragging rights. 

Our use-case for this pilot is UC Merced postdoctoral researcher Dannise V. Ruiz-Ramos, who wants to use an eDNA pipeline developed at UCLA on the UC Merced cluster to analyze DNA from soil samples. She is interested in estimating biodiversity and detecting threatened or endangered species in vernal pools in UC Merced grassland reserve. At UCLA, postdoctoral researcher [Emily Curd](https://www.ioes.ucla.edu/person/emily-curd/) (along with a all-star team including graduate students Gaurav Kandlikar, Zack Gold, and Rachel Turba, post-doc Baochen Shi, Executive Director of the UC Conservation Genomics Consortium Rachel Meyer, and software engineer Jesse Gomer) developed a software pipeline to process and assign taxonomy to genetic material collected in eDNA samples for the CALeDNA program. 

![UCLA-campus-selfiestick-resize](/content/images/2017/11/UCLA-campus-selfiestick-resize.jpeg) *Janns Steps and Royce Hall on the beautiful UCLA campus.*

This pipeline runs on the [Hoffman2](https://idre.ucla.edu/hoffman2) computing cluster. The pipeline developed by Dr. Curd and her team calls on the local versions R, Perl, Python, and Anaconda and many other software packages installed on Hoffman2. When Dr. Ruiz-Ramos attempts to run the pipeline on the UC Merced cluster, she needs to run it in an environment with the exact same versions of the each software package. Getting this sorted out usually takes cluster teams and research teams at both institutions working together and generally takes weeks to months.

Our approach is to develop an container-based emulation of the Hoffman2 cluster that can run on any machine. By creating a container that includes the complete software environment of Hoffman2, researchers across the UC system and beyond can quickly get Hoffman2-based analysis pipelines up and running. 

To do this, we are working with [Mathias Buus](https://github.com/mafintosh) to develop [Dat Container](https://github.com/mafintosh/dat-container), which will version control containerized research environments along with data and code. Researchers will be able to visit [Datbase](https://datbase.org/) to download a containerized computing environment specific to [the pipeline they want to run]. Researchers can then run [pipeline of interest] on their local computing cluster, in the cloud, or on a laptop without the hassle of installing multiple software packages. By emulating the Hoffman2 environment, we'll help researchers save time and effort. To facilitate archiving the work, a Dat Container can be stored along with data and code. Our goal is to create an reproducible research environment that can be archived, accessed when needed without hassle, and shared with collaborators. This pilot will lay the foundation for us to build out Dat Container as a solution for researchers looking to share and archive research environments. 

Moving forward, making it easier to replicate bioinfomatic analysis will help the CALeDNA project become accessible to citizen science groups and other collaborators outside the UC system. Over here in Dat land, we are big fans of the CALeDNA program. We hope that our work on Dat Container will allow people outside universities to play with real scientific analysis pipelines and data!

*Magical header photo of downtown LA with a marine layer by Max Ogden, from a plane, [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/).*

