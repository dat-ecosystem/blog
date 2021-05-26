---
slug: dat-privacy-models
date: 2018-01-16T10:21
tags:
  - Decentralization
  - Business
author: joehand
banner: https://images.unsplash.com/photo-1493305344584-c928c32c2af1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=bc3ca3daafa13895060eaadc5f27e1c1
title: |
  Dat Privacy Models: Creating Communities of Trust
excerpt: |
  Privacy on the web is an elusive thing. We often think our data is private only to later learn the company we trusted is using it for something we find unsavory...
---

Privacy on the web is an elusive thing. We often think our data is private only to later learn the company we trusted is using it for something we find unsavory (or it gets hacked and released en masse). In our view, this is one of the central shortcomings of the current system — centralized services are the *only* option for communities. This forces us to trust these services with our data, even if we do not want to or do not know how they are using it. For many, they view this as the cost of life online (which is now all but required for life offline). But it does not need to be.

In [a recent post](/dont-ship/), we shared questions we ask before shipping software. Part of the post raised privacy concerns around hosting Wikipedia on Dat. Many people in our community asked: what does this mean for privacy on Dat in general? Should I be worried!? These are great questions! And thank you for keeping us accountable.

We apologize for raising these points and not addressing all of them (the last post was getting a bit long!). You can read more about [reader privacy models](/reader-privacy-on-the-p2p-web/) specific to hosting large public datasets (like Wikipedia); this post will address how Dat privacy currently works and what we can do better. 

## Trust Someone

To live in this world we need to trust people (I will try to keep this grounded in reality and back to privacy soon!). When we get in a car, we trust other drivers to follow the rules. We trust that the planners and engineers did their job correctly. We trust the mechanic and car designers thought about our safety. If not, we trust our government to hold people accountable. We cannot engage in social life without trust.

The same is true for life online. There are two questions you have to answer when thinking about trust and privacy online:

* Who am I trusting?
* What information am I trusting them with?

For example, if you post on Facebook, you are trusting the company and employees of Facebook with your data. You are also trusting the people you have added as friends to not share your data. This feels strange because we have two very different groups to trust. On one hand, you have a community of friends where you have some measure of how much to trust them. On the other, you have to extend trust to Facebook without much to substantiate that trust (beyond our democratic institutions and social or economic pressures).

*(There are systems that aim to minimize trust, such as Tor or blockchain systems. While these do allow for less trust, they also have other negative trade-offs. In order to decrease trust, you have to make the system more complex and slower. We seek to find a balance where users can decide on how much complexity they want for their security needs (you can use Dat over Tor!). For example, we want to trust the local public library without needing to connect via Tor or use a blockchain to checkout a book.)*

To us, the question is not: how can we remove all trust from the system? Trust is human. The question is: **how can we create communities where we can choose who to trust and with what information?** Right now we are forced to opt-in to trusting organizations to connect online. We strive to make that optional, more explicit, and more flexible.

## Foundation of Dat Privacy

The foundation of Dat privacy rests on private-by-default and end-to-end encryption for all metadata and content. Whenever you create and share information over Dat, only other users you **explicitly share** that information with can see it. There is no way other users can discover what you are sharing. This is as true for a "public" dat site and a private dat you are sharing with one person.

The second point, which we raised in the Wikipedia post, is how and when your IP address gets shared. This is where things get confusing because it depends on who you are connecting to and how you are connecting (and also where we can most improve documentation and implementation). We'll dive into different examples of how these work in practice.

## Dat Privacy Examples

### Private Peer-to-Peer

The simplest example, and default state for Dat, is private peer-to-peer sharing. In this case, we can imagine Joe wants to share some food pictures with Danielle. They discover each other using DNS and connect directly. No one else can see their IP addresses or Joes's food pictures. All metadata and content is private and encrypted in transit. 

Key points in this example:

* Private Dat sharing has world class privacy (encrypted, no third-parties)
* Users sharing a common Dat trust other connections with your logs. Not all applications need a large pool of peers, as in our Wikipedia example.

### Community Peer-to-Peer

Sharing data with a community of peers is a feature unique to Dat. It is a feature impossible to mimic on how the web works today. This is somewhere in between BitTorrent (global peer-to-peer) and one-to-one connections (client-server or direct peer-to-peer). As the network grows, we have to start being a bit more careful about the privacy implications.

In this example, I create a feed to share on [Rotonde](https://github.com/Rotonde/rotonde-client), a decentralized social network. When I share that key with my friends, they can re-share my feed. Similarly to how we trust our friends with Facebook data, we may be trusting our friends to keep the information private. (However, we can start to add more complexity when privacy needs to be guaranteed, with trade-offs).

These communities can be organized socially (sharing with friends I know IRL) or more organically as we've seen with Rotonde, where connections of connections start sharing feeds. Thus, trust in this situation becomes a people problem, in other words — messy. 

### Public Data

When considering publicly shared data, the chief concern is reader privacy (since we can assume that the data is okay to share widely). The two aspects of reader privacy are:

* Who can see what IP addresses are in the swarm?
* Can users in the swarm see specifically what content other users are requesting?

Concerns about sharing IP addresses may warrant its own post, as they become quite nuanced. IP addresses publicly identify your computer on a network. Whenever you connect to a website, they can view your IP address (and many analytics services store them). We want to minimize access to IP addresses and will continue to improve here. However, we need to be most careful in leaking IP addresses where there may be other surveillance or censorship concerns (such as in the Wikipedia example). Here again, we have to balance complexity and difficulty of use with common use cases — and maintain privacy in situations where it may be paramount.

The second question, of whether users can see what content is being requested, is similar to the difference between HTTPS and HTTP. Without HTTPS sites, ISPs (or other middlemen) can see exactly what page of wikipedia.org you request, whereas with HTTPS they only see a connection to wikipedia.org. Our [reader privacy on the p2p web](/reader-privacy-on-the-p2p-web/) post covers all the nuances, but we'll address some key points here.

#### Dat with "Old Web" Security

The first point is that Dat can **always** be at least as secure as the "old web." That is, trusting one centralized organization with IP logs and information about what users are requesting.

Dat can be used over HTTP to act as a traditional web service (with the added benefit of having versioned websites and verifying content isn't corrupted between the source and the user). We can also have applications that connect to trusted peers directly, mimicking a client-server model but over the peer-to-peer network.

#### Peer-to-Peer

Public data with peer-to-peer distribution will be most useful in cases where we need to distribute bandwidth. As before, we can continue to increase complexity to add more privacy (see reader privacy post for more):

* Get data from a trusted sets of peers, i.e. Web of Trust.
* Make it more difficult for single users to "win" discovery, ensuring a more unique distribution of peers in each swarm.
* Mask content requests by adding in noise, making it harder to identify requested content.

### Protocol Options

Beyond different peer-to-peer models, we can start using different protocols. Dat gives users control over how to discover & connect to peers, giving more flexibility compared to the existing web. For example, you can run Dat in an offline network where all connections stay in the local network. This flexibility is what allows us to run Dat over HTTP connections.

Being protocol agnostic allows for more flexibility in security models. But with this customization we also have make sure security and privacy implications of different implementations are clear, an area we can really improve on.

## Where We Can Improve

Thinking through this post and the questions we got, we see a few areas we can definitely improve:

* Improve our DHT module so IP addresses are more secure
* Provide option to opt-out of peer-to-peer for public data applications (i.e. use the web's traditional trust model)
* Demonstrate how Dat over HTTP or other "old web" and trusted peer models can work via Dat.
* Improve transparency! Make nice pictures that show how things work; this stuff is complicated.

Most importantly, we can talk about privacy and security more! We can ask hard questions. This is an area we feel the old web really falls short and we are still building models for how this can work in the future. The balance will always be between complexity, speed, usability, and privacy. We want to be able to shift this balance as necessary for different applications but always make it clear what the trade-offs are.

Thanks to the community for bringing up the privacy questions. Let us know if you have more [on Twitter](https://twitter.com/dat_project) or our [chatroom](http://chat.datproject.org/).

