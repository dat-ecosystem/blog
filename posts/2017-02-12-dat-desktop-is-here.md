---
slug: dat-desktop-is-here
date: 2017-02-12T18:22
tags: Releases
author: ywuyts
banner: /content/images/2017/08/screenshot-dat-desktop.png
title: Dat Desktop is here
excerpt: |
  Today we’re announcing the release of Dat Desktop, a peer to peer data sharing app built for humans.  Dat is a new way to share data over the distributed web.
---

Today we’re announcing the release of Dat Desktop, a peer to peer data sharing app built for humans.

Dat is a new way to share data over the distributed web.
It makes sharing folders on your computer secure and convenient. It's open source and non-profit, unlike BitTorrent Sync and doesn't send your raw unencrypted data to any servers to be sold or surveilled, unlike DropBox.

## Install

For Mac OS, You can [download the latest Dat Desktop release here](https://github.com/datproject/dat-desktop/releases). We will support Windows and Linux soon.

## Try It Out

To get started, hit <span class="ttu">Create New Dat</span> and choose a local folder of data that you want to share.

  ![Screenshot of Dat Desktop](https://datproject.org/public/img/screenshot-dat-desktop-empty.png)

A Dat link will be created that you can share with someone else using the desktop app, the [command line tool](http://docs.datproject.org), or [Node.js library](http://github.com/datproject/dat-node). The two computers will look for each other and the data will be sent directly between the two computers securely with end-to-end encryption.

Alternatively, you can import existing datasets, like the public example datasets featured on our homepage. Copy the key to one of the example datasets, for example: <code>6fa91405f280c30cedd461dfcd3b4fffffb27759e26f8135b7cbdfe08870ccb2</code>. This is a dat archive of data released at open.whitehouse.gov by President Barack Obama. Paste this dat link into the <span class="ttu">Import Dat</span> box, and downloading will start.

  ![Screenshot of Dat Desktop](https://datproject.org/public/img/screenshot-dat-desktop-import-dat.png)

Dat and Dat Desktop use the Node.js library Hyperdrive, developed by [Mathias Buus (mafintosh)](http://github.com/mafintosh/hyperdrive) with support from the [Sloan Foundation](http://codeforscience.org). It has been designed to efficiently share terabytes of of scientific data in real time between research institutions on multiple continents, but it works fine to share text files on the local network too. Learn more about [how dat works here](https://docs.datproject.org/how-dat-works).

## Updating Dat Desktop

You only have to install Dat Desktop once - we’ll make sure you’ll always be running the latest and greatest. Some of the features to come include:

- preview modes for a wide range of data formats
- tagging, versioning and snapshotting of Dats
- publishing Dats with shortnames to a GitHub-style Dat Registry and Dat Cloud
- forever improving stability and performance

## Give Feedback and Contribute

Dat Desktop is currently under heavy development and moves fast – your feedback helps us to improve. Found a bug, got a question? [Open an issue on
GitHub][issues], reach us [on Twitter][twitter] or drop by on
[Freenode#dat](https://webchat.freenode.net/).

---

We hope you have as much fun using Dat Desktop as we do building it!

[download]: https://download.datproject.org
[source]: https://github.com/datproject/dat-desktop
[issues]: https://github.com/datproject/dat-desktop/issues
[twitter]: https://twitter.com/dat_project

