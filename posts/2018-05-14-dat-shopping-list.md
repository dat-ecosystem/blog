---
slug: dat-shopping-list
date: 2018-05-14T02:54
tags:
  - Announcement
  - Recently
  - Decentralization
excerpt: |
  We've been busy developing HyperDB, a distributed scalable database for peer-to-peer collaboration. Dat Shopping List is an application that makes grocery shopping fun again! HyperDB will be integrated in Hyperdrive to allow for multi-user collaboration with Dat archives.
author: jimpick
banner: /content/images/2018/05/tartine-manufactory-sf.jpg
title: |
  Demo: A Collaborative Shopping List Built On Dat
---

Over the last year, we've been developing [HyperDB](https://github.com/mafintosh/hyperdb), a distributed scalable database for peer-to-peer collaboration. To demonstrate HyperDB, I built Dat Shopping List — an application that makes grocery shopping fun again!* Along with being a powerful decentralized key-value database, HyperDB will be integrated in Hyperdrive to allow for multi-user collaboration with Dat archives. We are really excited about the potential of this and working on integration over the coming months. Read more to learn about the most decentralized shopping list ever built!*

<small>\*_wild claims may not be accurate_</small>

![decentralised-dog](/content/images/2018/05/decentralised-dog.png) <small>Dat works without centralized servers. (Credit: @mafintosh)</small>

Dat is a purpose-built tool to allow sharing of research data in a way that enables effective collaboration and reproducibility. Out-of-the-box, it gives you a distributed network, data history, and security. With the development of HyperDB, we are excited to see Dat growing to the foundation for other community collaboration tools.

## Dat is growing and evolving

Since its initial release, Dat has attracted an enthusiastic developer community with ideas and use cases that extend beyond its original mission. Dat has evolved into a whole ecosystem of related open source tools, libraries, and services. Some examples:

* the `dat` [command line tool](https://docs.datproject.org/install#in-the-terminal) for sharing data ([online tutorial](https://try-dat.com/))
* the [Dat Desktop](https://github.com/dat-land/dat-desktop) app for sharing files over the internet
* a full ecosystem of open source libraries in [JavaScript](https://docs.datproject.org/ecosystem) (plus a new [Rust](https://datrs.yoshuawuyts.com/) project is growing fast)
* commercial services such as [Hashbase](https://hashbase.io/) are providing hosted solutions
* [Beaker Browser](https://beakerbrowser.com/) is a powerful vision of a web browser that gives all people the power to publish their work to the web without servers
* the community has even organized grassroots [Peer-to-Peer Web](https://peer-to-peer-web.com/) conferences in Los Angeles and Berlin, and soon New York

![peer-to-peer-web-la-tara](/content/images/2018/05/peer-to-peer-web-la-tara.jpg)
<small>Tara Vancil giving a talk at Peer-to-Peer Web L.A. (Credit: @jimpick)</small>

Dat is designed to evolve. The initial version of Dat was designed to allow a single researcher to publish a set of files to the world, and to be able to update the files over time ... all while preserving history for reproducibility. But quickly, Dat caught on with other use in a variety of communities.

## HyperDB: Dat Multiwriter

One of the most desired features for Dat is collaboration between multiple users, known as *multiwriter* (as opposed to *singlewriter*, which Dat is currently). We especially heard this need in the [feedback from the research community](/dat-in-the-lab-ucdavis-1/). Led by Mathias Buus ([@mafintosh](https://github.com/mafintosh)), we have spent more than a year developing HyperDB, a distributed key-value database. Alongside this, we are upgrading the core internal libraries of Dat to use HyperDB and support improved collaboration. HyperDB is working today, but we are continuing to test and integrate into hyperdrive and other Dat tools.

Multiwriter support is a major change. To ensure a smooth roll out, we are working with the [Dat Protocol Working Group](http://github.com/datprotocol/) to define backwards compatibility requirements. This process, and work on integration will be a priority in the coming months.

## *Dat Shopping List* Demo

The *Dat Shopping List* application demonstrates how to use HyperDB to collaborate with other users on a single database. We built this to showcase multiwriter support and guide others on its use. [Code for Science & Society](https://codeforscience.org/), the non-profit organization sponsoring Dat, contracted me ([Jim Pick](https://jimpick.com/)) to demonstrate how HyperDB works, improve any API peculiarities, and surface any remaining bugs.

You can launch the demo in any web browser:

* [https://dat-shopping-list.glitch.me/](https://dat-shopping-list.glitch.me/)

![dat-shopping-list-basic](/content/images/2018/05/dat-shopping-list-basic.gif)
<small>A quick preview of what you can do with the app</small>

The demo is a simple to do list app, in the spirit of the [TodoMVC](http://todomvc.com/) project. 

### Video Walkthrough

Here is a short (2.5 minute) walkthrough of the demo.

<video src="https://dat-shopping-list-video-jimpick.hashbase.io/dat-shopping-list-1.mp4" controls></video>

### Mobile phone support

Where the demo really shines is on your mobile phone. The demo is built using some [cutting-edge](https://developers.google.com/web/progressive-web-apps/) web browser features, so you can use *Add to Home Screen* on your phone, and you can use it just like you would use any other app.

![dat-shopping-list-pwa](/content/images/2018/05/dat-shopping-list-pwa.jpg)

### Offline support

When you create a shopping list, under the covers, you are actually creating a multiwriter Dat archive. Each shopping list is a separate Dat archive, and each shopping list item is just a tiny little file inside a directory.

![dat-next-under-the-covers](/content/images/2018/05/dat-next-under-the-covers.png)

The master copy is stored in the storage of your web browser, along with the secret key which ensures that you are the only one that can modify it. 

Having the master copy inside your web browser is great, because that lets you make changes to the document, even when you aren't connected to the internet. So you can put your phone in airplane mode, and still use the app.

![online-offline](/content/images/2018/05/online-offline.gif)
<small>Making changes anytime is okay, even when offline. Changes sync when going back online.</small>

### Synchronizing and Keys

Of course, a multiwriter demo would be boring if it only ran on one device. Dat has always had great support for replicating data across the internet.

Dat has been single writer up until now, and it's identity model was essentially a single *key pair*, a set of keys — one public key and one private key. With the new support for multiple writers, each writer will have its own key pair, and users exchange keys to grant access to new writers.

In this demo, the user shares their keys to the shopping list owners to get authorized.

![authorization-1](/content/images/2018/05/authorization-1.png)
<small>We authorize new writers by copying and pasting their keys into the owners shopping list.</small>

![authorization-2](/content/images/2018/05/authorization-2.png)
<small>Once authorized, other users can update the shopping list.</small>

A truly user-friendly application might hide the keys and key exchange details from the end users by incorporating some sort of identity-based account and login system. But, for this demo, we wanted to illustrate the core authorization mechanism that multiwriter Dat uses. Asking people to understand and do the key exchange manually is not very friendly, but it is flexible and powerful.

### Node.js Gateway

This demo works in any modern browser. It has been tested in Chrome, Firefox, Safari and Microsoft Edge, as well as Mobile Safari and Chrome on Android.

If the demo had been written for [Beaker Browser](https://beakerbrowser.com/), which speaks the Dat protocol natively to the internet, there would be no need for a gateway. But in order to allow the demo to work across many browsers, the app replicates the shopping list data across a websocket connection to the server from which it was loaded. The Node.js server will then talk to the rest of the peer-to-peer swarm on behalf of the client.

By necessity, the data is shared with the gateway, so if you want to share data privately, you will need to run your own private gateway. It is not as scary as it sounds though... all the code is on [GitHub](https://github.com/jimpick/dat-shopping-list), and you can [remix](https://glitch.com/edit/#!/remix/dat-shopping-list) the demo on Glitch with a single click. 

### Podcast Interview with Mathias Buus

If you would like to learn a bit more, Mathias was a recent guest on the [DatCast podcast](https://dat-cast.hashbase.io/) and talked a bit about the origins of the Dat project and how multiwriter and hyperdb came to be.

## Support the Dat Project!!!

Thank you to [Code for Science & Society](https://codeforscience.org/) for hiring me to build the demo. They are a non-profit and depend on contributions to continue running. [Donations](https://donate.datproject.org/) are greatly appreciated.

