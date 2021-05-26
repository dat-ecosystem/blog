---
slug: a-public-dat-peer
date: 2017-05-08T18:27
tags: Releases
author: okdistribute
banner: /content/images/2017/08/preview-filelist.png
title: A Public Dat Peer
excerpt: |
  This week, we’re excited to release the next version of datproject.org. This public service will preview dat contents in the browser! You can view the dat's file list, number of sources,...
---

This week, we’re excited to release [the next version of datproject.org](https://datproject.org). This public service will preview dat contents *in the browser*! You can view the dat's file list, number of sources, and download files under 10MB without having dat installed. This is great news for those of us who share data to non-technical users on the regular, or want to share data with the general public. See the [release notes here for more details](https://github.com/datproject/datproject.org/releases/tag/1.02).

## A Public Source

Now, datproject.org will save files and metadata that are viewed on datproject.org. That means data is downloaded and re-hosted when you visit `https://datproject.org/f34d58370…`. It will attempt to connect to the dat and display the file list.

 ![preview-filelist](https://datproject.org/public/img/blog/preview-filelist.png)

This view previews the list of the latest files that were added to the dat, along with the last time they were edited as well as the size of each file. This file list is now saved on our server to improve speed and reliability.

If the directory list won’t load, it might be because your dat is hosted behind a firewall or on a slow internet connection. Check [these troubleshooting tips](https://docs.datproject.org/dat#troubleshooting) and the [FAQ](https://docs.datproject.org/faq) to see if that helps you.

You can then click on a file to preview its contents.

  ![preview-file](https://datproject.org/public/img/blog/preview-file.png)

As files in the dat are added or updated, the changes will automatically be reflected in the browser without refreshing. Cool!

## Sustainability and Security

This public peer is great for sending quick links to friends and colleagues, but not intended to be for permanent storage. If you need help hosting a dat on a permanent server, check out the [guide for hosting dats from a server.](https://www.datprotocol.com/guides/hosting-dats-from-a-server.html)

Server-side caching has tradeoffs between security and usability, and we've prioritized usability in this release. We are storing files in a way that should not be used for private or secure documents. Be careful with your data.

## Coming next

  * Permanent links to files within the dat.
  * Go back in time – view older versions of the dat, including the file contents if they’re still served over the network.
  * Render text files incrementally so that even large ones can be previewed.
  * Create an account on datproject.org to publish a shortname for a dat.

## Found a bug?

We’re always on the bug hunt. Shoot us a message on #dat in freenode, or [file a bug report on our GitHub repository](http://github.com/datproject/datproject.org).


