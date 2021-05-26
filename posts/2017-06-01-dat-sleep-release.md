---
slug: dat-sleep-release
date: 2017-06-01T10:00
tags: Releases
author: joehand
banner: /content/images/2017/08/Screen-Shot-2017-08-03-at-10.51.25-PM.png
title: Dat 2.0 - White paper & New App Releases
excerpt: |
  A few weeks ago, after being charmed by the comma llama (an alpaca), the Dat team put our final touches on the Dat protocol white paper. Today, we are releasing Dat Desktop, dat
---

A few weeks ago, after being charmed by the [comma llama](https://twitter.com/CSVConference/status/859876757448433664) (an alpaca), the Dat team put our final touches on the **Dat protocol** [white paper](https://github.com/datproject/docs/blob/master/papers/dat-paper.pdf). Today, we are releasing Dat Desktop, dat command line, and [datproject.org](http://datproject.org) with full protocol support! We are seriously excited for this release and believe it is a big step forward in sharing our vision for Dat and the future of public data.

See the release notes to learn more about the changes for each app, and see install details below:

* [Dat Desktop v2](https://github.com/datproject/dat-desktop/releases/tag/v2.0.0)
* [dat command line v13](https://github.com/datproject/dat/releases/tag/v13.0.0)
* [datproject.org](https://github.com/datproject/datproject.org/releases/tag/1.1.0)

Read on to learn more about why we upgraded and what makes the new Dat protocol special.

## The New Dat Protocol

Dat is a distributed data tool putting security and speed first. The open Dat protocol makes automatic version history, encrypted transfer, and dynamic data storage the default. Building on our protocol, we created a new kind of file syncing and data publishing software in Dat Desktop and dat command line.

With the needs of researchers, librarians, and developers in mind, Dat's unique design works wherever you store your files. Dat virtually ties folders together across computers. This means you can share a folder on your computer, send your link, and other users can instantly have a live copy or view the files on datproject.org. By combining user-friendly applications with modern distributed infrastructure, scientists can more easily collaborate on data while improving privacy, reproducibility, and long-term preservation.

Use Dat to publish research data, create resilient archives, or run continuous file backup. With [Dat's new HTTP support](https://docs.datproject.org/http), you can sync folders live from your computer to the web. Dat gives your existing filesystem magical powers.

<img src="/content/images/2017/05/Screen-Shot-2017-05-26-at-19.46.58.png" alt="Dat" style="width:75%;"/>
<p align="center">
<em>Share folders from your computer to anyone in seconds with your dat link. Dat transfers data directly between computers for fast and secure sharing.</em>
</p>

The Dat protocol and Dat's open source libraries empower developers to create novel yet powerful tools using public and decentralized data. Applications, such as [Science Fair](https://github.com/codeforscience/sciencefair#readme) and the [Beaker Browser](http://beakerbrowser.com), can leverage Dat for painless data management and secure peer-to-peer browsing. Dat's Javascript reference implementation allows for greater portability. If you were familiar with Dat before, we are happy to tell you the new protocol improved speeds up to 100x!

Dat project is led by [Code for Science & Society](http://codeforscience.org), a U.S. nonprofit, with a global open source community. Learn More about Dat and the new protocol at [docs.datproject.org](https://docs.datproject.org). 

## Install Today

Explore datasets on [datproject.org](https://datproject.org/explore) or install Dat Desktop and dat command line. We hope you try out Dat and share some cool data. You can ask questions, open issues, or talk to us at [@dat_project](http://twitter.com/dat_project), on [Github](http://github.com/datproject/dat), or in our [chat room](https://gitter.im/datproject/discussions) (#dat on IRC). Thank you!

<div style="display:flex; flex-wrap:wrap; align-items: stretch; padding-bottom:30px;">
     <div style="flex:1 0 250px;align-self:right;">
       <a href="https://datproject.org/install#desktop" target="_blank" title="Install Dat Desktop"><img src="/content/images/2017/05/install_desktop.png" alt="Install Dat Desktop" style="width:250px"/></a>
     </div>
     <div style="flex:1 0 250px;align-self:left;">
       <a href="https://datproject.org/install#terminal" target="_blank" title="Install dat command line"><img src="/content/images/2017/05/install_cli.png" alt="Install dat command line" style="width:250px"/></a>
     </div>
     <div style="flex:1 0 500px;align-self:stretch;">
       <a href="https://datproject.org/explore" target="_blank" title="Explore dats on datproject.org"><img src="/content/images/2017/05/Screen-Shot-2017-05-26-at-22.09.09.png" alt="Explore dats on datproject.org" style="width:550px"/></a>
     </div>
</div>

## White Paper 

**Dat - Distributed Dataset Synchronization And Versioning ([Full text](https://github.com/datproject/docs/blob/master/papers/dat-paper.pdf))**

**Abstract:**

> Dat is a protocol designed for syncing folders of data, even if they are large or changing constantly. Dat uses a cryptographically secure register of changes to prove that the requested data version is distributed. A byte range of any file's version can be efficiently streamed from a Dat repository over a network connection. Consumers can choose to fully or partially replicate the contents of a remote Dat repository, and can also subscribe to live changes. To ensure writer and reader privacy, Dat uses public key cryptography to encrypt network traffic. A group of Dat clients can connect to each other to form a public or private decentralized network to exchange data between each other. A reference implementation is provided in JavaScript.

