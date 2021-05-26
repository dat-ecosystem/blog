---
slug: announcing-the-dat-anacapa-container
date: 2018-09-18T15:06
tags: Science
excerpt: |
  Today we are releasing Anacapa Container, which enables reproducibility of research environment and data across campuses.
author:
  - maxogden
  - daniellerobinson
banner: /content/images/2018/09/Sky-copy.jpg
title: Announcing The Dat Anacapa Container
---

Today we are releasing [Anacapa Container](http://github.com/datproject/anacapa-container), which enables reproducibility of research environment and data across campuses.

If you've been following our work over the last year you'll be aware of the Dat in the Lab project, funded by the Gordon and Betty Moore foundation (read our previous writeups on [a lab visit](/uc-merced-1/), [eDNA](/draft-pipelines-edna-and-more/), and [containerization challenges](/challenges-of-decentralized-hpc-containerization/)). As this project comes to a close, we are excited to release this final piece of work. A final project wrap-up will be released later this fall.  

The Anacapa Container project has been a collaboration between the Code for Science & Society team and researchers at five different University of California campuses: UCLA, UC Merced, UC Davis, UC Riverside and UC Santa Cruz. Our goal was to take the [Anacapa pipeline](https://github.com/limey-bean/Anacapa) from UCLA and use a combination of Dat plus containerization technologies to replicate the pipeline across the various University of California research cluster environments.

The Anacapa pipeline itself is a collection of software written in Bash, Python, R and Perl that takes eDNA sequences and performs computationally expensive and complex analysis on the data to do things such as detect which species were in the sample. Anacapa is the core analysis tool for the CALeDNA consortium, and there are a number of collaborating institutions within California that wish to use the pipeline. Additionally, there are now a growing number of research groups world-wide who are interested in re-using the Anacapa pipeline for their own local eDNA research.

#### Problem: Complex Software Installation

One of the most challenging parts of using any complex scientific pipeline is installing all of the necessary software dependencies to run it. This may not seem challenging at first, but scientific software is usually poorly documented, and rarely tested on research servers beyond the ones at the originating institution. A growing number of researchers now are using modern software development practices, such as writing user friendly documentation and putting their projects on GitHub, but it can still be weeks or months of effort to replicate the dependencies from the originating institution at a new software environment.

In our case, the CALeDNA consortium includes members of 6 universities. This means for a researcher at UC Merced that wants to run Anacapa, they would have to request that the UC Merced Research Cluster install a long list of specific versions of the R, Python, Perl and Shell bioinformatics utilities that UCLA's Hoffman cluster provides. The UCLA-based authors of Anacapa may have never had to do this for certain software packages, as many of them may have already been installed via requests from other researchers who also use the Hoffman cluster. UC Merced has a different independently maintained research cluster. This means a completely different set of pre-installed packages, and a different Linux distribution. All of this results in a lot of back and forth between researchers and research cluster administrators at both campuses to try and debug the many differences that pop up when trying to replicate the exact environment that is composed of dozens of independent software packages. 

When we started working on this project, one particular researcher had already spent two months working on getting the necessary packages installed locally, but had not yet finished them all. We realized we needed a way to simplify the installation of the Anacapa environment so that every new research group could avoid months of setup work.

#### Anacapa Container

We decided to use the [Singularity](http://github.com/singularityware) containerization software as the main dependency for Dat Container. Singularity is an open source software container developed by folks from Lawrence Berkeley National Laboratory, learn more [here](https://www.sylabs.io/). It has a security model that works well for university compute cluster users. While looking into the other options, we learned that the approach taken by the popular container software Docker requires sudo access. Unfortunately, most universities are unable to offer Docker containers to researchers as university compute clusters can not offer that to individual users. Singularity, on the other hand, uses a different technique to load the containerized environment without requiring sudo privileges. Docker is much more popular in the general tech industry, but this issue eliminated it as an option for us. Singularity is a young project that is developing quite rapidly and it has worked well for this application.

The [Anacapa Container](https://github.com/datproject/anacapa-container) itself is a singularity image that we developed to include all of the software dependencies needed to run the Anacapa Toolkit from UCLA. We have a script called a Containerfile that step-by-step installs each software package into a Ubuntu Linux server operating system disk image file. At the end of the process, a single 2GB disk image file can be distributed. Instead of requiring that the numerous dependencies get installed onto new systems, the only dependency is the Singularity runtime. This simplifies the request a researcher has to maketo their system administrator.

To make it easy for people on other UC campuses to run Anacapa, we have been involved in getting Singularity installed at five UC campuses. Even though Singularity is a relatively straightforward package, we encounted numerous install errors that had to be corrected with tedious back and forth remote technical support with sysadmins. Even with our streamlined approach that only required one new package get installed (singularity), it was still painful at times. This issue is faced by anyone looking to share resources between institutions. We are hoping that we can improve this process for others who wish to share analysis environments. Singularity is now up and running at five UC campuses, and any future projects that use Singularity images as a distribution format will require zero new software package requests, as they already have everything they need.

Dat sits in the Anacapa software container and is used to replicate the details of the original Anacapa compute environment.This means that the as the container is replicated and reused, folks can use Dat to version and share their new versions of the container environment.

To work with the Anacapa Container, users only need to download the Anacapa Container file, run a singularity command, and they are in a shell prompt that has all of the Anacapa software pre-installed. Due to the containerization approach that Singularity takes, the heavy compute resources on the host machines are available as native resources in the container, meaning there is no loss in performance (as is the case with virtualization based approaches like VirtualBox).

#### Software as data

We often think as data as separate from analysis scripts, software, and compute environments. In reality, these are different types of digital information that can be handled by Dat. By treating the software as data, we can approach preservation, versioning, and sharing differently.  We like the simplicity of the single file disk images that Singularity uses, as it fits well with the Dat ethos of sharing your research as one folder that includes your manuscript, your datasets, your papers website, and now your entire research software environment. 

This another step towards easy software reproducibility. The image ensures all of the exact software versions required are being used at runtime. The traditional problem of a system wide update of a Python package breaking everyones existing scripts that depended on the old version is no longer an issue. Researchers can simply load the environment they want by grabbing a specific Singularity image.

By representing the software environment as a file that can get archived along with the dataset, we can ensure future researchers can always quickly get up and running in their quest to reproduce or modify the Anacapa pipeline. One of our partners on this project is the California Digital Library, who are a group inside the University of California that (among other things) are developing tools to ensure research datasets can get archived and made accessible forever. The challenge at hand is building a system that can coordinate dataset archiving across the giant distributed system that is the University of California and all of the external research groups that depend on UC data.

We have made this work [available through DASH](https://dash.ucmerced.edu/stash/dataset/doi:10.6071/M31H29), which is a data repository hosted by California Digital Library. Any UC researcher has access to publish datasets through DASH, and we are hoping Anacapa Container can serve as a model for how to distribute reproducible software as part of the research dataset.

#### Dat and Singularity

Distributing the research container as a single file means that it can be used in conjunction with Dat as the distribution tool. We have only scratched the surface of the possibilities here, but we are looking forward to more partnerships with data repository providers like California Digital Library and the Internet Archive to build a distributed data archive that includes executable software containers. This would ensure data does not simply go to a data repository never to get used again, as the container would allow for the dataset to become interactive and available instantly.

