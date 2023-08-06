---
slug: demo-session-picostack
date: 2023-08-24T10:00
tags:
  - Demo
  - Ecosystem
  - Founders
excerpt: Discover PicoStack with Tony Ivanov. Have a quick walkthrough of the stack using a to-do app and learn how you can use it to build your own P2P web apps.
author:
  - dpaez
  - ninabreznik
banner: http://localhost:8080/content/images/2023/08/cover-picostack.svg
cover:
title: "​​Demo Session #1: First Steps With PicoStack"
---
<style>
  .post-full-image {
    background-size: 75%;
    background-repeat: no-repeat;
  }
</style>

<div>
Welcome to our first demo session! We are opening this new space to founders to introduce their projects. It’s a great opportunity to have a quick view into that new project you just heard of and see how it works and how it can be used.
<br/><br/>

Our first founder is Tony Ivanov from [PicoStack](https://github.com/telamon/picostack). PicoStack is a modular P2P development kit, it allows you to build progressive web apps without any servers.

In this session, Tony will be covering the basics of PicoStack, including: handling local storage, replication and peer discovery.
The demo is a minimal _to-do_ app. You can try it here: https://pico-todo.surge.sh/
<div class="container">
  <div class="image">
    <img src="/content/images/2023/08/demo-picostack.svg" alt="picostack logo and dat robot" style="width: 100%;" />
  </div>
  <div>
  <h2>Main takeaways</h2>

  - [00:18]() PicoStack to-do app intro
  - [1:40]() Data Replication between multiple peers
  - [2:10]() Creating pick blocks (data units)
  - [3:00]() Consensus Model (simple model, all blocks are accepted)

  </div>
</div>
<div class="note">
ℹ️ <b>Project status</b> <br/>
PicoStack is at an <u>early state</u> in active development. This means lots of things can change. Currently, Tony is rebuilding the state and garbage-collector modules.
</div>

Without further ado, let’s jump to the session! 🎥
<a href="https://youtu.be/iHgskRYQPMg" target="_blank">
 <img src="/content/images/2023/07/keet-video-preview.png" alt="Watch the picostack demo session" style="width: 100%;" />
</a>

💡 **You can help PicoStack**. All feedback is welcomed. Just visit [picostack repo](https://github.com/telamon/picostack), open an issue and leave your thoughts/ideas. You can also engage with Tony on its own project channel at dat ecosystem discord: https://discord.gg/BqcRNKDV6X

## Demo Links:
- PicoStack Repo: https://github.com/telamon/picostack
- PicoStack To-do demo app: https://github.com/telamon/pico-template (to-do app is actually built with the pico template app)

Hasta la proxima! 👋
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

@media only screen and (min-width: 1024px) {

  .container {
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
  }

  .image {
    flex-basis: 30%;
  }

  .note {
    padding: 16px 32px;
  }
}

.image-right {
  float:right;
}
.image-left {
  float:left;
}
.image {
  flex-grow: 1;
  margin-left: 30px;
  max-width: 80%;
}
.image img {
  display:block;
  width:100%;
}
</style>
</div>

------

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

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: minmax(50px, auto);
    gap: 10px;
    max-width: 600px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #333;
  }
  .name {
    font-weight: bold;
  }
  .link {
    color: #337ab7;
    text-decoration: none;
    overflow-wrap: break-word;
    word-break: break-all;
  }
  .link:hover {
    color: #23527c;
    text-decoration: underline;
  }
</style>
