---
slug: upgrade-your-dat
date: 2017-05-24T13:50
tags: Releases
author: okdistribute
title: Upgrade for 100x speed, history, and other goodies
excerpt: |
  Beginning this week, you can update your Dat to the latest version (13) and get a new slew of features, including a 100x speed improvement.  Upgrade to the latest version with the following
---

Beginning this week, you can update your Dat to the latest version (13) and get a new slew of features, including a **100x** speed improvement.

Upgrade to the latest version with the following command in your terminal:
```
npm install -g dat@latest
```

Note: this version is incompatible with the older dat (version 12.x.x), so you'll have to re-create your older Dats -- which means generating new keys.

To do this, you'll first have to delete your old .dat folder and re-share it using the same command as before:
```
cd path/to/my/dat
rm -rf .dat
dat share
```

You'll notice that the data is imported much faster than before.


### So what changed exactly?

There has been a lot of work in the past few months to make Hyperdrive and Hypercore, the underlying building blocks of Dat, more efficient.

The most important and breaking change is the removal of leveldb as a dependency in Dat. Instead, Dat is now using a file format called [SLEEP](https://docs.datproject.org/terms#sleep) to save the metadata directly on the filesystem. Since Dat no longer needs a database, you can now host a Dat by simply putting the SLEEP files on a static file server, such as Amazon S3. Removing this dependency on leveldb also means that Dat will install much faster than before.

### Preview a dat link in the browser!

Give it a spin today! Send a link to your friend and they can view files inside the dat without even downloading the desktop application or command line tool.

After you create a dat, you can take the link and put it at the end of `datproject.org`, for example: `https://datproject.org/637574bec555a748615244417aa525ab0d49baa7aec7b86164a259fdc6f310db`. Once you visit it, we save the metadata on our server. This means that you can close your laptop and it will still show a preview of your dat. Cool! [Read more about how that works](/a-public-dat-peer/).

