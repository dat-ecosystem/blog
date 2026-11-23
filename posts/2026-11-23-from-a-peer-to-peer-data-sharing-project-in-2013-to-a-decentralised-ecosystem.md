---
slug: from-a-peer-to-peer-data-sharing-project-in-2013-to-a-decentralised-ecosystem
date: 2026-11-23T10:00
tags:
  - History
  - Ecosystem
  - Peer-to-Peer
  - Dat
excerpt: From its beginnings as a peer-to-peer data-sharing project in 2013, Dat has grown into a decentralised ecosystem built around open protocols, collaboration, and user-controlled data.
author:
  - serapath
banner: /content/images/2026/11/dat-ecosystem-graph.png
cover: https://blog.dat-ecosystem.org/content/images/2026/11/dat-ecosystem-graph.png
title: "From a Peer-to-Peer Data-Sharing Project in 2013 to a Decentralised Ecosystem"
---

*From combining Git and BitTorrent for open data science to building a decentralised ecosystem for software development, collaboration and funding.*

## Origins

Dat started in 2013 with a simple idea: **combine Git and BitTorrent to make open data science possible.**

The idea was to make any dataset easy to version control, publish, share, synchronise and verify, without relying on centralised infrastructure. Researchers could collaborate on data while maintaining its integrity and history to ensure reproducibility.

## From a project to an ecosystem

The first Dat prototype focused on tabular data. Dat Alpha followed in 2014, adding support for large files and directory synchronisation. Dat Beta arrived in 2015 with Hyperlog, a decentralised, graph-based data model that enabled collaborative workflows and cryptographically verifiable history.

As the project evolved, experience with research users revealed that supporting both tabular data and files through separate workflows made Dat unnecessarily complex. In 2016, the team therefore redesigned it around a files-first approach: treating files as the common foundation while leaving more specialised data workflows to be built on top. This simplified the user experience and laid the groundwork for Hypercore and the modular peer-to-peer stack that followed.

As adoption grew, so did the community and its independent projects and contributors. Code for Science & Society was established as a nonprofit in 2017 to provide organisational support, followed by the transition from the Dat Project to the Dat Protocol Foundation in 2019, reflecting the growing role of independent development.

Between 2013 and 2021, Dat evolved from a data-sharing protocol into a collection of reusable peer-to-peer modules for distributed storage, networking, databases, replication and communication. In 2021, following extensive community discussions and a vote, the decision was made to decentralise responsibility for the Dat Stack to protect against organisational capture and single points of failure, while ensuring continued development. Rather than concentrating control and maintenance within one foundation, responsibility would be distributed across existing and future ecosystem projects.

Supported by a dedicated grant, the transition took 12–18 months: Foundation-maintained projects moved to willing ecosystem maintainers, while those without maintainers were preserved in the [dat-ecosystem-archive](https://github.com/dat-ecosystem-archive) GitHub organisation for anyone to explore or revive.

### A decentralised approach to the Dat Stack

Rather than centrally developing and prescribing an official stack, the Dat Ecosystem consortium maintains a curated list of foundational modules, initially reflecting the stack as it had evolved by 2021. Published in `blessed.json`, this list seeds an open-source crawler that discovers dependencies and dependents across projects, making adoption and relationships between modules visible.

It evolves as projects and organisations adopt, develop and depend on different modules. The result is a continuously updated picture of what the ecosystem actually uses and maintains: shared adoption and industry practice shaping the Dat Stack rather than a centrally prescribed standard.

## The Dat Stack

The Dat Stack consists of interconnected, independently maintained modules for creating peer-to-peer applications and infrastructure and is built on the principles of Free Software as defined by the Free Software Foundation (FSF): software that respects users' freedom to run, study, modify and redistribute it. These four essential freedoms ensure that users retain control over the technology and can adapt, share and improve it.

The following modules form the foundation of the stack and are released under free and open-source software licences:
- [b4a](https://github.com/holepunchto/b4a)
- [protomux](https://github.com/holepunchto/protomux)
- [compact-encoding](https://github.com/holepunchto/compact-encoding)
- [blind-pairing](https://github.com/holepunchto/blind-pairing)
- [blind-peering](https://github.com/holepunchto/blind-peering)
- [blind-relay](https://github.com/holepunchto/blind-relay)
- [hyper-webrtc](https://github.com/lukks/hyper-webrtc)
- [sodium-universal](https://github.com/holepunchto/sodium-universal)
- [hyperswarm-dht-relay](https://github.com/holepunchto/hyperswarm-dht-relay)
- [streamx](https://github.com/mafintosh/streamx)
- [mirror-drive](https://github.com/holepunchto/mirror-drive)
- [hyperswarm-secret-stream](https://github.com/holepunchto/hyperswarm-secret-stream)
- [bip39-mnemonic](https://github.com/holepunchto/bip39-mnemonic)
- [abstract-encoding](https://github.com/mafintosh/abstract-encoding)
- [hyperschema](https://github.com/holepunchto/hyperschema)
- [hyperdb](https://github.com/holepunchto/hyperdb)
- [corestore](https://github.com/holepunchto/corestore)
- [hyperblobs](https://github.com/holepunchto/hyperblobs)
- [hyperdrive](https://github.com/holepunchto/hyperdrive)
- [hyperswarm](https://github.com/holepunchto/hyperswarm)
- [hyperdht](https://github.com/holepunchto/hyperdht)
- [hyperbee](https://github.com/holepunchto/hyperbee)
- [hypercore](https://github.com/holepunchto/hypercore)
- [autobee](https://github.com/holepunchto/autobee)
- [autobase](https://github.com/holepunchto/autobase)

This is a curated starting point, not an exhaustive inventory or an official whitelist. The stack continues to evolve as projects introduce, maintain and adopt new modules.

### The next chapter

In 2024, Dat Ecosystem entered a new chapter in its organisational development by becoming a fiscally sponsored project of the [Apereo Foundation](https://www.apereo.org/). This provides a supportive institutional home, access to an established international network and decades of experience supporting open-source communities, particularly in higher education. It strengthens the organisational foundations for collaboration, outreach and long-term sustainability, while the community continues to guide the development of its technology.

## Where Dat is heading

Dat began by decentralising data sharing, then extended those principles to the development and maintenance of its technology. Now, they are being applied to the economic and organisational infrastructure needed to sustain the ecosystem.

The curent focus is on bringing Dat to the web and applying its peer-to-peer principles to the way the ecosystem operates and sustains itself. First steps will focus on creating a robust prototyping environment, but the long-term vision is an open, collaborative network of projects and people, where development, contributions and funding flow without dependence on centralised platforms or institutions. This means decentralising the entire software supply network: the modules and their dependencies, the projects that use them, and the people who develop and maintain them. The challenge is to build peer-to-peer alternatives for the whole development lifecycle, including repositories, pull requests, issues, discussions, project coordination and funding.

### Decentralised collaboration and development

All contributions — from commits and reviews to discussions and other forms of participation — are captured in standardised, machine-readable JSON files for each project. Together with standardised dependency information, this creates a continuously updated record of the ecosystem's projects, relationships and contributions.

The underlying Task Management methodology brings collaboration, coordination and contribution attribution into one unified peer-to-peer process.

### Decentralised funding

The vision is to distribute funding automatically throughout the software supply network, allocating it to projects and individual contributors according to their recorded contributions. Funding an application or library should ultimately support the entire network of projects and people that make it possible, potentially involving thousands of projects and individual contributors receiving payments. This requires open monetary infrastructure capable of supporting real-time micropayments and automated distribution.
