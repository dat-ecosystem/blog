---
slug: dat-protocol-renamed-hypercore-protocol
date: 2020-05-15T11:24
tags:
  - Community
  - Announcement
  - Releases
excerpt: |
  The "Dat Protocol" has been renamed to the "Hypercore Protocol" and created a new organization for governing its tech. The "Dat community" will continue as the collective of teams and projects that have evolved from the original Dat CLI project.
authors:
  - okdistribute
  - pfrazee
title: Dat Protocol renamed Hypercore Protocol
---

The "Dat Protocol" has been renamed to the "Hypercore Protocol" and there is a [new organization for governing its tech](https://github.com/hypercore-protocol). The "Dat community" will continue as the collective of teams and projects that have evolved from the original Dat CLI project.

### Background

Since 2013, grant funding for research into scientific data sharing use cases drove the design and development of dat. This user research drove the creation of the "dat" command line tool as well as the "dat protocol," a peer-to-peer protocol for building decentralized applications.

There are a wide variety of core mission partners that are developing applications that use this protocol, including a web browser for developing peer-to-peer websites ([Beaker Browser](https://beakerbrowser.com)), a community-based mapping and monitoring application ([Mapeo](https://www.digital-democracy.org/mapeo/)), a cooperatively-owned data infrastructure ([Cobox](https://cobox.cloud/)), a privacy-oriented chat application ([Cabal](https://cabal.chat/)), a decentralized operating system ([DxOS](https://github.com/dxos/)), a paid content distribution platform ([Ara](https://ara.one/)), an offline-friendly alternative to commercial map providers ([Peermaps](https://peermaps.org)), a distributed hosting network ([DatDot](https://playproject.io/datdot-substrate/)), an application utilizing the [p2pcommons](https://github.com/p2pcommons/sdk-js/) for as-you-go research communication ([Hypergraph](https://github.com/hypergraph-xyz/desktop)) and [the list goes on](https://dat.foundation/explore/projects/).

The breadth of these applications show the power and flexibility of the protocol for building the next-generation Web. 

### Challenges

As grant money has become thin over the past few years, the development of the dat commandline tool has been very slow. It has become increasingly difficult to find volunteers and grant funding to maintain the dat commandline tool. 

Meanwhile, **development of the applications listed above (and others) has become stronger than ever**. As the protocol has matured over the past 3 years, the core maintainers have put in significant effort into ensuring the stability and security of the protocol that directly affects the success of these applications.

As the commandline tool is no longer a driving force for the development of the protocol, it is becoming increasingly clear that more fine-grained control and modularity is needed. Thus, the core maintainers of the protocol have decided to retire the 'dat' protocol and rename it to reflect it's underlying component called 'hypercore'.

This change from 'dat protocol' to 'hypercore protocol' largely reflects existing core technologies that the dat protocol was dependent upon, and those technologies will be grouped under a single GitHub organization with it's own decision making process, rather than on a variety of personal accounts.

Enter [Hypercore Protocol](https://hypercore-protocol.org).


### What's changing

There is now a new [Hypercore Protocol GitHub organization](https://github.com/hypercore-protocol) comprised of active maintainers, whereas the [Dat Project GitHub organization](https://github.com/datproject) will continue to house the commandline tool and other higher-level software development toolkits that utilize the hypercore-protocol. There is also a new [Hypercore Protocol website](https://hypercore-protocol.org) that contains architectural documentation and specifications.

Hypercore Protocol is a collection of modules and protocol extensions which can be used together or individually. It includes a connectivity layer (Hyperswarm), a secure append-only log with efficient replication (Hypercore), and a POSIX-compatible filesystem (Hyperdrive). 

Hypercore also includes a new URL scheme, `hyper://`, for referencing any Hypercore-based data structure. As Hypercores declare their data structure, this URL scheme can be used for a wide variety of use-cases. This URL scheme can improve interoperability among applications by providing flexible and modular access to hypercore directly.

As a decentralized and open-source protocol, it's important to have an open RFC process for making proposals to update the Hypercore protocol. This process is being developed in the [Hypercore Protocol org](https://github.com/hypercore-protocol).

### The future of dat

"Dat" will continue to exist as a community. It is the collective of projects that have emerged over the years from the original Dat CLI. When we talk about the Dat community, we're often referring to that collective: [Cabal](https://cabal.chat/), [Peermaps](https://peermaps.org), [Cobox](https://cobox.cloud/), [Beaker Browser](https://beakerbrowser.com), [Mapeo](https://www.digital-democracy.org/mapeo/), [Ara](https://ara.one/), and even the Hypercore Protocol.

The datproject GitHub organization will continue as an open community rather than a guarded open source project. This will allow new maintainers to get started more easily, have impact over the development of the dat commandline tool and the surrounding ecosystem of projects that depend upon the hypercore-protocol, such as the [software development toolkit](https://github.com/datproject/sdk).

The `dat` commandline tool is a community-run project comprised of volunteers. If you're currently using it as a key part of your organization or business, or are generally interested in participating in its maintenance, please get involved in the [dat cli repo](https://github.com/datproject/dat/). 

If you would like to become a part of the community, please feel free to attend the [datproject public comm-comm](https://github.com/datproject/comm-comm) that happens every week!

There will be some larger website changes to the https://dat.foundation website to reflect this new shift over the coming month. We will also be depreciating the datprotocol GitHub organization and moving any active repositories to the datproject GitHub organization.

As inertia is real, it might take some time for people, including users, to adopt 'hypercore protocol' rather than 'dat protocol' in their language as part of technical communication, but our aim is that with time this will become more clear.

For comments and questions, please feel free to join us in our community chat channel on [IRC](https://webchat.freenode.net/#dat) or [Gitter](https://gitter.im/datproject/discussions) or on the [discourse forum](https://dat.discourse.group/).

