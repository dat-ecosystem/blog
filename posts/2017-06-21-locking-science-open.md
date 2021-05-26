---
slug: locking-science-open
date: 2017-06-21T15:15
tags: Science
author: okdistribute
banner: /content/images/2017/06/14499185038_cdd258ef1e_z-1.jpg
featured: true
title: Locking Science Open with Decentralized Scientific Archives
excerpt: |
  Last year, we spoke at Internet Archive's Decentralized Web Summit and demonstrated Dat as a way to lock open scientific articles, data, and code together in one decentralized archive.
---

Last year, we spoke at Internet Archive's [Decentralized Web Summit](https://www.decentralizedweb.net/) and demonstrated Dat as a way to lock open scientific articles, data, and code together in one decentralized archive.  The Internet Archive has been publicly calling for decentralized and distributed technology as a way to improve the health of the overall Internet, by [locking data open](http://brewster.kahle.org/2015/08/11/locking-the-web-open-a-call-for-a-distributed-web-2/). 

But what do we mean by 'locking data open' in the context of scientific archives? 
    
> "While different websites are located all over 
 the world, in most cases, any particular website has only one physical location. Therefore, if the hardware in that particular location is down then no one can see that website. In this way, the Web is centralized: if someone controls the hardware of a website or the communication line to a website, then they control all the uses of that website." - *Brewster Kahle*

Standard practice now for scientific archives is to use HTTP links to datasets stored on centralized servers, which can cause dead links  -- [one that librarians and thousands of volunteers are desperate to solve](/mention-in-the-new-york-times/).

#### The proposal

What we're offering with decentralized infrastructure is a slightly more complicated approach to storing and distributing data, with great benefits. This approach **does not** remove DOI or DNS or HTTP -- it's simply a way to reference data in a unified way so that it can be downloaded from many servers at once. In a decentralized architecture, anyone has the ability to download and re-host data without changing it's permanent identifier. 

The scholarly archiving infrastructure can be upgraded to incorporate more decentralized components without changing the 'UX' for the researcher. The archives can mask the links to raw data the same way they do today by using friendly naming systems like DNS or DOI. In Dat's case, which is different than IPFS, a public key is your address, not the hash -- which means that data can even be updated over time with history intact, without losing future-proof benefits.

For us, peer-to-peer is about user control, resiliency, and distribution efficiency. A peer-to-peer system would scale with the amount of data and link rot we see in the future, while the current infrastructure is already beginning to crumble in the face of a serious reproducibility crisis.

#### On 'future-proofing' and hash collisions

Max Ogden pointed me to David Rosenthal's [*Blockchain as an Infrastructure for Science*](http://blog.dshr.org/2017/05/blockchain-as-infrastructure-for-science.html) which talks about how peer-to-peer tools like Dat and IPFS would not work for scientific archives. David said that decentralized infrastructure that uses cryptographic hashes would not work as a future-proof method because "*Hashes are not persistent over the timescales needed because, as technology improves over time, it becomes possible to create 'hash collisions', as we have seen recently with SHA1.*" 

The hash collision problem that David brings up is a huge stretch, and not applicable to the popular decentralized web technologies such as Dat. 

We asked [Richard Smith-Unna](https://github.com/blahah), a researcher and former Mozilla Science fellow about this: 
> Right now, there is one known full SHA1 collision and exploiting it to attack the BitTorrent protocol requires poisoning the original data and the spoof data with the two known clashing files. It was a huge effort to generate the collision. The stronger hashing algorithms present in most modern applications pushes this problem so far into the future that the entire cryptographic infrastructure of the world would be at risk before it caused a problem for scientific archives. If hash collision attacks were to be on the horizon, you release a new version of the protocol that prefers the stronger hash. Announce it and stable nodes upgrade, over time corresponding to the adoption of the upgrade the stronger hash dominates until it completely replaces the old one. This is already happening with bittorrent moving to sha256. - *Richard Smith-Unna*

We're very confident in the impressive theoretical and practical work of hundreds of cryptographers that are endorsing the use of SHA256 and elliptic curve cryptography. There are reasons why an organization may not want to use a decentralized data infrastructure -- but hash collisions are not one of them.

##### Sustaining the Archive

Currently, large institutions that run scientific archives sustain themselves by charging libraries and researchers to access data. The theory goes that this centralized control of data therefore helps their business model, and giving away scientific archives for free would destroy the market, and thus the archives themselves.

In actuality, these large institutions already commit to long-term funding of data storage and availability with no user-facing cost. With a decentralized architecture, it would be the same -- but the load on those systems would be lower. The burden is on libraries and scientific publishers to keep at least one server available with the data, like they currently do -- but everyone benefits from lower bandwidth cost as more data is decentralized.

#### What's next

Since then, we've been working hard to build partnerships with libraries and universities to use Dat to store these scientific bundles and lock them open forever. We're excited about decentralizing more data beyond our current work with [Data Refuge](https://www.datarefuge.org/) to partner with research labs, universities, and libraries to reduce their costs while advancing openness. It seems like whether large institutions like it or not, decentralized data tools like Dat are starting to be a viable distribution mechanism amongst the most advanced scientists today. 

