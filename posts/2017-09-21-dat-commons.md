---
slug: dat-commons
date: 2017-09-21T10:13
tags:
  - Decentralization
  - Conferences
excerpt: |
  Decentralization is not just a technological problem, it is also a human one. With a commons approach to the decentralized web, the most ideal approach is guided from where we came. New protocols should be optimizing for science and mutual collaboration rather than optimizing for profit.
author: okdistribute
banner: https://images.unsplash.com/photo-1476725376606-78bd56004997?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=00ac9806539fa5c086a5b77908e0e8e1
title: The Web of Commons
---

*This is an overview of Karissa's Keynote for [2017 Full Stack Fest's](https://2017.fullstackfest.com). Feel free to watch the video or scroll down to read the notes.*
<iframe width="560" height="315" src="https://www.youtube.com/embed/bE1LAxYazbY" frameborder="0" allowfullscreen></iframe>

In the 18th, 19th centuries it was thought that property ownership was the only way to protect common resources such as grazing pastures. Garrrett Hardin famously put it: "The individual benefits as an individual from his ability to deny the truth even though society as a whole, of which he is a part, suffers."
 
It was thought that communities that only act in rational self interest destroy the common pool resource they are sharing. This is described as "the tragedy of the commons": that isolated, autonomous individuals will always choose the path best for them as individuals.

Elinor Ostrom introduced a new body of research to challenge this. Over 40 years of research, she was able to prove that Hardin exaggerated the problems involved in managing a commons. In 2009, Elinor Ostrom was the first woman to win the Nobel Prize in economics. She talked about how people actually *are* able to come to together to form norms and rules that sustain their mutual cooperation. For example, she went to Nepal and studied how people there were managing their own irrigation systems. She found that if communities simply follow eight principles, a sort of blueprint, communities use to self-govern and sustain the resource without depleting it.

What about applying this to the internet? Before her death in 2012 Ostrom published a book with Charlotee Hess called *Understanding Knowledge as a Commons*. This book laid the groundwork for thinking of digital knowledge as a commons (that is the digital artifacts in libraries, wikis, open source code, scientific articles, and everything in between).

## The Internet as a Commons

Looking at the internet as a commons — as a shared resource — allows us to understand both its unlimited possibilities and also what threatens it. 

What threatens the internet? Right now, private companies that control large parts of the internet are trying to prevent the internet of commons. If products fail or are deemed not economically viable (for example Vine, Google Reader, etc), the whole suffers. Monopolies, like Google, are able to keep their power by influencing the political landscape. However, in the internet of commons, monopolies are no longer in control, and users would be trusted to self-govern the commons.

Decentralization has been the most recent proposal as our technological means to get away from this and give the power to users. In a decentralized world, users get to control the contracts of the website, can choose to fork that website, re-host data to fix broken links, evade censorship, and overall take ownership of their data. Freedom of expression, privacy, and universal access to all knowledge should be inherent to the web. But right now, those values are not.

### Locking the Web Open

Thinking of the internet as a commons allows us to think of different ways we can moderate and grow spaces, allow innovation to flourish, and improve the quality of knowledge and information sharing. As Brewster Kahle puts it, decentralization ‘Locks the Web Open.’ 

I’m not just dreaming of a new world with Brewster Kahle about the future of the internet. The internet of commons is here today. Peer-to-peer (p2p) applications already exist, are being built, as well as used by real users as we speak — you can build one too! [Secure Scuttlebutt](http://scuttlebot.io/), for example, is a completely p2p protocol for syncing data. [Patchwork](https://github.com/ssbc/patchwork) is a social networking application built on top of the Secure Scuttlebutt Protocol. People can join a public server and make friends, then use a gossip approach to find friends of friends. Many early adopters come from IRC and have started using it instead of IRC. It’s immensely successful as a little protocol and you can build something with it today.
 
Dat is inspired by BitTorrent and built in a similar fashion to Scuttlebutt. It is a decentralized protocol for storing, versioning, and syncing streams of potentially very large datasets. We’re a non-profit, funded by grants and, so far, we've operated more like a research lab than a company.

A foundational part of what we’ve been doing for the past three years is to work with university labs, libraries, researchers, and universities to help them manage their scientific data. Scientific articles and their related data are very specific and yet good use case for a commons approach to the internet.

As companies privatize data they create silos or they put up paywalls, and prevent the growth of the commons — another kind of enclosure. This means that certain people with power close the pathways into the commons so that they can profit from it... but it actually detracts from everyone’s ability to use it and also prevents its ability to flourish. Innovation suffers, as fewer people have access to the knowledge and it is much harder to produce contributions that could improve that research. The rationale given for companies to create paywalls is that it is expensive to collect, store, organize, present, and provide bandwidth for the billions of pages of articles and datasets.  

Decentralization is a clear way we can reduce the costs of this hosting and bandwidth — as more people come to download the articles and data from the journal or library or university, the faster it gets. The dream is that universities could turn their currently siloed servers into a common resource that is shared amongst many universities. This would cut costs for everyone, improve download speed, and reduce the likelihood that data is lost.

Decentralization of data produces challenges though — just like a torrent, data that is decentralized can go offline if there aren’t any stable and trusted peers. In the case of scientific data, this is an immense failure. To mitigate it, we invoke the human part of a commons — the data will be commonly managed. For example, we can detect how many copies are available in different places, just like a BitTorrent, and compute health for a dat — for example, a dat hosted at the Internet Archive, University of Pennsylvania, and UC Berkeley is probably very healthy and has low probability of ever going offline, while a dat hosted by 5 laptops might go down tomorrow — even though there are more peers. When a dat becomes less healthy, the community can be alerted and make sure the resource does not go down. Decentralized tech and decentralized humans working together to use commons methodology in practice.

Along with this, what we get by design is that links can last forever, no matter what server they are hosted on — using a decentralized network based on cryptographic links and integrity checks allow many servers to host the same content without security risks, a property not present in http.

This concept of decentralization isn’t new. The internet was built upon the concept of it being very resilient, that if a node failed, it’d find another way to get information to other computers. The internet was originally decentralized, but over time it became clear that centralized parties were needed to fund and maintain websites on the internet. The move towards decentralization is almost a yearning for the past, a way to get around this really centralized section of internet history.

## Building the Future

A way we’ve been thinking about building protocols for decentralization is looking to how current popular protocols were developed and mirroring those methods. Current very popular modes for transfer were developed by people like Tim Berners-Lee (CERN, www) and Vint Cerf (DARPA TCP/IP) who worked in research labs. They gave away their protocols for free to the public, as products of scientific inquiry. The secret sauce of what they did was to craft open standards that don’t need permission to use and reuse, prioritized usability, and involved no or low barriers to access. Even Google was founded from two folks in a university lab, who published their search algorithm PageRank.

Today, I look at the decentralized landscape in context of what these people were doing back in the day and wonder if we’re continuing their legacy. Ideally, new decentralized protocols could be built into browsers that people already use today. Alongside `http://`, we imagine `dat://` view websites or data from a distributed network (which you can now do with the [Beaker Browser](https://beakerbrowser.com/)!).

I look at initial coin offerings (ICOs) and new blockchain companies that claim to be revolutionizing the way we work on the internet, and I’m not seeing this same model. I’m seeing white papers that are published, and sometimes even implemented in open source. But if you look at what they propose, many offer siloed networks that are privatized, with money being invested into specialized coins that create new enclosures. A big component of these ICOs are trust-less networks, which remove the human elements of trust and social groups from the network.

Decentralization then, is not just a technological problem, it is also a human one. Researchers at MIT have been [looking into](http://dci.mit.edu/decentralizedweb) many of these decentralized tools and are [reaching similar conclusions](https://www.wired.com/story/decentralized-social-networks-sound-great-too-bad-theyll-never-work/) — the technical problems are hard but we must solve the social and people problems if we want to progress: "Decentralized web advocates have good intentions, but there is no silver-bullet technical solution for the challenges that lie ahead."

To top it off, over $1.6 billion was invested in these ICOs in the past year alone. Where are we going? Is the future of decentralization going to be rooted in paywalls and coins, with the management of those coins and that technology trusted to a single individual or group? Is that really where we want to end up?

With a commons approach to the decentralized web, the most ideal approach is guided from where we came. I am much more excited about creating protocols that are easy to use, develop with, and extend without asking for permission and without paying or having much money at all. That means that they are driven by the community, built for the public good, and given away for free. If the company or organization dies, the protocols should still be usable. Any blockchains involved should not be tied to a particular for-profit company. I should not be tying my data to any one coin or blockchain for fear of enclosure. The protocols should be optimizing for **science** (broadly speaking, as in developing knowledge) and mutual collaboration rather than optimizing for **profit**. Let us not recreate the problem we are trying to solve.

