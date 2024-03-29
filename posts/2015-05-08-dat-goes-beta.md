---
slug: dat-goes-beta
date: 2015-05-08T16:44
tags: Releases
author: okdistribute
title: Dat goes beta!
excerpt: |
  After a long year of alpha testing, which started in August of las year, we are excited to announce our launch of a new phase of dat. Beta starts now. Let us know...
---

After a long year of alpha testing, which started in August of las year, we are excited to announce our launch of a new phase of dat. [Beta starts _now_](https://github.com/maxogden/dat).

Let us know what you’re working on and how dat might work for you. We’ll even come to your lab to help you get up and running, implement features, and fix bugs in real time.

Get started and and break things (but don’t forget to [let us know](#chat-with-us) if things break):

```
npm install -g dat
```

### From Data Sharing to a Data Ecosystem

Dat is a data collaboration tool. We think most people will use it to simplify the process of downloading and updating datasets, but we are also very excited about how people will use it to fork, collaborate on, and publish new datasets for others to consume.

We’ve been testing dat with the generous help of physicists, data hackers, machine learning experts, biostatisticians, government developers, sociologists, and informaticians. We brought our work to [Mozilla Science Lab to integrate with Federated Wiki](https://www.youtube.com/watch?v=AKpJgNoT1b8), [the Sanger Institute to show off dat and Bionode](https://www.youtube.com/watch?v=AKpJgNoT1b8), [Berkeley Institute for Data Science where one of us co-works](https://www.youtube.com/watch?v=psmtJUyZHE0), [ROpenSci to talk about visual diffing](http://unconf.ropensci.org/), [JSConf to get our nerd on](https://www.youtube.com/watch?v=iM3Pr7tfHF0), and [to SRCCON to demo with Flatsheet](http://srccon.org/docs/transcripts/datflatsheet/), just to name a few.

Finally, we’ve landed on an internal and external design that we believe covers the key use cases in the collaboration of data science and open data. With dat beta, you now can:

1) **[Put multiple data tables in a single repository](https://github.com/maxogden/dat/blob/master/docs/whitepaper.md#31-importing-datasets)**. With dat alpha, the entire dat was one tabular entity—now, dat supports complex, heterogeneous datasets composed of different schemas or types of files. Datasets are kind of like SQL tables, except these datasets don’t support robust querying or joins.

2) **[Trust versions with cryptographic accuracy](https://github.com/maxogden/dat/blob/master/docs/whitepaper.md#32-versioning)**. Versions are now represented as uniquely identifiable SHA-256 hashes, and you can attach a message and timestamp for a coarse-grained view of the data’s history. You can also easily (O(1)) revert to a historical version to view and edit the data.

3) **[Fork, diff and merge](https://github.com/maxogden/dat/blob/master/docs/whitepaper.md#34-one-thousand-forks-when-all-you-need-is-a-knife-isnt-irony)**. Although forks could be represented as conflicts to be merged immediately (as one might expect in a version control system such as Git), dat’s philosophy is the opposite. We think that data tools should embrace forks as key support for experimentation during the scientific process. Now dat is a decentralized, versioned, [directed acyclic graph](https://github.com/mafintosh/hyperlog), so fork away!

4) Deploy over HTTP or SSH. Dat is transport-agnostic and easy to deploy. This means your IT team is happy because your existing authentication schemes will work the same as ever. Feel free to give read-only access through HTTP, too.

5) Integrate with other backend engines. Now you can use dat on top of any database that implements the [AbstractLevelDOWN api](https://github.com/Level/abstract-leveldown)—that means PostgreSQL, Redis, Mongo, Google Drive, etc. This feature is one of the many that still need extensive testing, but we are excited about the prospect.

6) **Focus on internals**. We’ve decided to scale back our initial offerings of the dat editor and server in favor of relying on a community of modules across languages that are built on top of dat, using dat as a data storage and collaboration tool instead of a jack-of-all-trades-master-of-none. Check out [flatsheet](http://github.com/flatsheet) for a dat editor replacement and [karissa/dat-rest-server](http://github.com/karissa/dat-rest-server) for a REST server replacement.

7) **It’s faster**. Yeah, it’s faster. And it’ll only get faster as time goes by.

### The Future

After being granted the security to continue working on dat for the next two years, [courtesy of the Alfred P. Sloan Foundation](https://usopendata.org/2015/04/03/sloan/), we are doubling down on reliability on our approach to a full-featured 1.0 release in the coming months. We want to make it easier to:

* track forks (with names, for starters);
* verify tabular schemas through test suites, with inspiration from [sensorQC](https://github.com/USGS-R/sensorQC) and [testdat](https://github.com/ropensci/testdat);
* add a robust set of complex and heterogenous data security, privacy, and access settings;
* make BitTorrent support easy for fast data transfer (for cases like [all of the stars in the sky](http://trillianverse.org/)); and,
* integrate into user-friendly editors like [flatsheet](http://flatsheet.io) and [the Jupyter Project](https://jupyter.org/).

But we can’t do it without your help (really). Every little piece of feedback counts. We’re particularly looking for bug testing, feature requests, and integration with existing data sharing systems. We can’t wait to see your feedback, comments, questions, and pull requests.

[Read more about the motivation and design of dat’s new beta](https://github.com/maxogden/dat/blob/master/docs/whitepaper.md) in the whitepaper.

### Chat with Us

We’re mostly always available in #dat on [freenode](https://webchat.freenode.net), or [datproject/discussions on gitter.im](https://gitter.im/datproject/discussions), so join us!

