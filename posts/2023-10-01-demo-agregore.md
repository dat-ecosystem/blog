---
slug: demo-session-agregore
date: 2023-10-01T10:00
tags:
  - Demo
  - Ecosystem
  - Founders
excerpt: Check out Agregore, a new kind of browser for the distributed web. From localhost to the swarm, cloud-free.
author:
  - dpaez
  - ninabreznik
banner: /content/images/2023/10/cover-agregore.svg
cover:  https://blog.dat-ecosystem.org/content/images/2023/10/video-preview-agregore.png
title: "Demo Session #4: Explore the distributed web"
---
<div>
Let's unveil the browser for the P2P era with Agregore. With a minimal API surface approach and extentions-oriented, aggregore offers a solid approach to surf the distributed web and create local first apps & sites. Agregore supports hyper, ipfs and bittorent.
Don't miss the demo to see how easy you can start creating local-first content.

<br/><br/>

A new demo session appeared! This time is all about the distributed web. Mauve, a prolific P2P developer will introduce us to creating local-first apps using Agregore browser. This new browser has a small but super capable and flexible API that makes it easy to create local-first content and even apps.

With agregore you can navigate to `hyper://` and `ipfs://` like any other site on the regular web. Every site you visit is locally saved and reshared. This offers 2 direct benefits:
- Content resiliency, every site is a local-first site.
- Populates the distributed web.

In the demo, Mauve also mentions that agregore is compatible with other publishing tools like [Distributed Press](https://docs.distributed.press/deployment).

Outside of loading data, agregore offers a way to author data using its own P2P-compatible version of [`fetch` API](https://github.com/AgregoreWeb/agregore-browser/tree/master/docs). Mauve made something really interesting extending the fetch API functionality. This way we can use a regular POST method to create new content, like a new site, right from the browser 🆒.

[Their docs](https://agregore.mauve.moe/docs/) are a great entry place to learn more about agregore internals and the fetch API.

<div class="container">
  <div class="image">
    <img src="/content/images/2023/10/demo-agregore.svg" alt="agregore logo with dat robot" style="width: 100%;" />
  </div>
  <div>
  <h2>Main takeaways</h2>

  - [00:30](https://youtu.be/BtAtgLWzyXU?t=30) Agregore Intro / Main Interface
  - [01:10](https://youtu.be/BtAtgLWzyXU?t=68) Agregore can Surf the Distributed Web
  - [02:02](https://youtu.be/BtAtgLWzyXU?t=122) Local-first Navigation & Resharing
  - [02:46](https://youtu.be/BtAtgLWzyXU?t=163) Using Distributed Press as a Publishing Tool
  - [03:46](https://youtu.be/BtAtgLWzyXU?t=226) Interact with the Distributed Web with the P2P Fetch API
  - [04:47](https://youtu.be/BtAtgLWzyXU?t=287) Creating a new P2P Website
  - [08:46](https://youtu.be/BtAtgLWzyXU?t=526) Agregore Extensions and Web Archiving
  </div>
</div>

Discover Agregore with Mauve ▶️
<iframe style="width: 100%; aspect-ratio: 16/9; border-radius: 0.5rem;" src="https://www.youtube.com/embed/BtAtgLWzyXU?si=Mh_TJw7w1ScpSevP" title="Agregore Demo Session" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="note">
ℹ️ <b>Project Status</b> <br/>
Agregore is under active development. The project counts with 16 contributors and last release was made last month (~August). Check out the Agregore Org on GitHub (https://github.com/AgregoreWeb) to see the latest & related projects.
</div>
<br/>

🎥 **AMA Session with Mauve**. We'll host an AMA session with Mauve on Thursday 5th, 6PM GMT+1 on Dat Ecosystem Discord. [Join today](https://discord.gg/rRXD2nakX4).

## Demo Links:
- Agregore Browser Repo: https://github.com/AgregoreWeb/agregore-browser
- Agregore Browser Site: https://agregore.mauve.moe/
- Agregore Github Org: https://github.com/AgregoreWeb
- Distributed Press: https://docs.distributed.press/

Hasta la próxima! 👋

<style>
  /* mobile first */
.container {
  display: flex;
  flex-direction: column;
}

.note {
  width: 100%;
  background-color: rgb(226 232 240);
  padding: 16px;
  font-size: 1.5rem;
  line-height: 2rem;
  border: 2px solid rgb(148 163 184);
  border-radius: 0.5rem;
  margin: 16px 0;
  text-align: justify;
}

.note b {
  display: inline-block;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.post-full-image {
  background-size: 75%;
  background-repeat: no-repeat;
}

.image-right {
  float:right;
}
.image-left {
  float:left;
}
/* .image {
  flex-grow: 1;
  margin-left: 30px;
  max-width: 30%;
} */
.image img {
  display:block;
  width:100%;
}

.container {
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
}

.image {
  flex-basis: 30%;
}

@media only screen and (min-width: 1024px) {
  .post-full-image {
    background-size: 50%;
  }

  .container {
    flex-direction: row;
    gap: 30px;
  }

  .image {
    flex-basis: 25%;
  }

  .note {
    padding: 16px 32px;
  }
}
</style>
</div>

------
<div class="about-ecosystem">

### Dat Ecosystem

This demo session was conducted as part of the **[Code for Science & society](https://www.codeforsociety.org/)** grant, awarded to enhance interoperability between the various projects within the Dat ecosystem.

**Donate to support volunteers & our independent work at Dat Ecosystem
Open Collective: https://opencollective.com/dat**

Stay connected in this jungle of confusion that we call the internet. With so many changes happening, it's important to have outposts in various places.

<div class="grid">
  <div class="name">Webpage</div>
  <div class="link"><a target="_blank" href="https://dat-ecosystem.org/">https://dat-ecosystem.org/</a></div>
  <div class="name">Open collective</div>
  <div class="link"><a target="_blank" href="https://opencollective.com/dat">https://opencollective.com/dat</a></div>
  <div class="name">Cabal p2p chat</div>
  <div class="link"><a target="_blank" href="#">cabal://ebdbcf8cd9c704844ca47b88fe7526a3c9f865be998486ca16ae3431e019d0cc?admin=728192b47c8077d34534b20e25693edc1e7ece1ea7054e3bf1ad86434682a4f4</a></div>
  <div class="name">Keet p2p hangout</div>
  <div class="link"><a target="_blank" href="#">punch://jc38t9nr7fasay4nqfxwfaawywfd3y14krnsitj67ymoubiezqdy/ymfwqg59ihu9b7c1fbw147gpubta7g4kj8ximkdy1tu3689b15qbzafzzqxx4dqwcdxfon7fu68hefytnrxztx8uty15whjubs1f9661yry968du9rqeoyeyybycwxwt1wu1qa5f9uwph4h694sc6ubien6fs5js1dqy9ahr6io5hntwsr9mj3tx19higq55dhkqzoy9cpnp8h3w75bqg94hbmpcdoqgba</a></div>
  <div class="name">Mastodon</div>
  <div class="link"><a target="_blank" href="https://fosstodon.org/@dat_ecosystem">https://fosstodon.org/@dat_ecosystem</a></div>
  <div class="name">Matrix</div>
  <div class="link"><a target="_blank" href="https://matrix.to/#/#datproject_discussions:gitter.im">https://matrix.to/#/#datproject_discussions:gitter.im</a></div>
  <div class="name">Reddit</div>
  <div class="link"><a target="_blank" href="https://www.reddit.com/r/dat_ecosystem/">https://www.reddit.com/r/dat_ecosystem/</a></div>
  <div class="name">Github</div>
  <div class="link"><a target="_blank" href="https://github.com/dat-ecosystem/">https://github.com/dat-ecosystem/</a></div>
  <div class="name">Twitter</div>
  <div class="link"><a target="_blank" href="https://twitter.com/dat_ecosystem">https://twitter.com/dat_ecosystem</a></div>
  <div class="name">Discord</div>
  <div class="link"><a target="_blank" href="https://discord.gg/jukapbdep5">https://discord.gg/jukapbdep5</a></div>
  <div class="name">Youtube</div>
  <div class="link"><a target="_blank" href="https://www.youtube.com/@DatEcosystem">https://www.youtube.com/@DatEcosystem</a></div>
</div>
</div>
