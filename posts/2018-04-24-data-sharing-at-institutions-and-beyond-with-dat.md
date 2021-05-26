---
slug: data-sharing-at-institutions-and-beyond-with-dat
date: 2018-04-24T15:27
tags: Science
excerpt: |
  Interested in beta testing secure data sharing software? Try out the new Dat install and data sharing workflow with a friend and let us know how it went.
author: dat
banner: /content/images/2018/04/0003811-DSC01725-resize.jpg
title: Data sharing between institutions
---

Data intensive research depends increasingly on the sharing and reuse of datasets. Unfortunately, collaboration can be stalled by technical roadblocks around sharing large datasets between institutions. Today, sharing files between institutions remains challenging without extensive technical infrastructure or external services. 

As a part of the [Dat in the Lab](/tags/science/) project — a project done in partnership with [California Digital Library](https://www.cdlib.org/) and funded by the [Gordon and Betty Moore Foundation](https://www.moore.org/)  — we have worked with University of California researchers to better understand barriers in their work. This is part of our participant-driven design process and our goal is to identify where we can remove blockers for people in data intensive fields with Dat-based workflows. What have we learned? Read on!

At the start of the project, one issue came up immediately — researchers still struggle to share large datasets between institutions. Why is this? Many commercial or open platforms exist for transferring files. But many of these tools require file transfer through a centralized server. By adding a third party, the act of transferring a file becomes more complex, more expensive, and reduces security. Dat works by linking the two people directly, without needing a third-party server. However, as anyone who's worked in institutional computing knows, connecting two institutional networks is not always straightforward. As we learned, institutional network security does not always mix well with peer-to-peer protocols. 

We want make Dat great for researchers, but many researchers lack access to install software globally on their systems. With that in mind, we also created a new simplified install process and improved the feedback in the Dat command line tool to make it more intuitive. Our new installation method makes it easy to install Dat without `sudo` or `npm`, in just one step!

We've always aimed to make Dat great at data transfer. But sitting down with researchers and walking through each step showed us where we needed to improve. Dat in the Lab has provided new chances to try Dat out in new contexts, with folks at various levels of experience. From these experiences, we have made improvement that will make Dat easier for everyone to use. 

## Case Study: UC Davis to Washington State University Data Transfer

Here’s a short summary of a recent data sharing use case we facilitated. We've designed a workflow to enable researchers to share data across institutions, from easy installation to direct data transfer.

For Dat in the Lab, we helped a researcher from UC Davis securely share pre-publication genomic data with an external collaborator based in Washington State. At UC Davis, PhD student Ryan Peek is sequencing Sierra yellow-legged frogs (endangered species, Rana Sierrae) and Meghan Parsley, a PhD student at Washington State University (WSU) wants to collaborate on Ryan’s data. 

In the end, we successfully helped Ryan and Meghan to send the data from Ryan’s server at Davis to Meghan's laptop at WSU. Ryan’s genomics group at Davis had a server that we installed Dat onto using the new standalone installer method. Ryan used the `dat share` command (in the folder where his data was located) to start sharing his research data and sent the Dat link to Meghan.

Initially, we tried to transfer the data onto a server on the internal network at WSU. We immediately ran into connection problems, where Dat was unable to connect to external networks. To troubleshoot this, we ran `dat doctor` on both ends. Dat doctor tests general connectivity and provides a command to test peer-to-peer connectivity. The Dat doctor determined that the server at WSU was not able to connect directly to Davis, most likely due to institutional firewall settings. We are always try to make the doctor better at spotting networking issues that may prevent Dat from working!

To get away from the institutional firewall, we instead transfered the data to a researcher's laptop. It worked! Ryan and Meghan were able to exchange data directly between their computers. This transfer did not require any external infrastructure or costly platforms. Additionally, Meghan was able to close her laptop and have the data transfer automatically resume when she was back online. Dat provides researchers with flexibility for quick file transfers with powerful features underneath for users that need more advanced features.

## Work Flow — Dat For Data Transfer

Interested in beta testing Dat for secure data sharing? Try out the data sharing workflow with a friend and let us know how it went!
Follow this workflow and share your experience at hi@datproject.org, especially if you work as a researcher. We want to know if you succeed, or get stuck, or have an thoughts or feedback. We're interested in hearing from you, so don't hesitate! 

1. [Install the Dat command line tool](https://github.com/datproject/dat/#installation) on two separate computers that you want to share data between (can be both yours, or it's more fun with a friend).
2. With Dat, one person shares a folder and the other downloads. On the sharing side, `cd` into the folder of data you'd like to share and run the command `dat share`. It will print out a long link that starts with `dat://...`. If you want to cancel the share at any time, type CTRL+C. Your data is also private, so nobody can discover or access your data without giving the Dat link to that person.
3. On the downloading side, run the command `dat clone dat://…` with the link you received. This will create a new folder where the data will be downloaded.
4. During the transfer, you should see connection statistics and progress bars on both computers.
5. If the transfer fails or never starts, send a screenshot of the output of the command line to hi@datproject.org so we can understand where users are getting stuck.
6. If the transfer succeeds, you successfully distributed your data over a secure peer-to-peer network!

Ok — how’d it go? We'd love to hear what you think, email and tell us about it. We're also interested to chat about potential use cases for Dat in your research workflow! 

Want to play around some more? Try some more advanced topics over at [try-dat.com](https://try-dat.com). (*Note this tutorial starts with the `npm` installation, you can `npm` install or [one line install](https://github.com/datproject/dat/#installation).*)

