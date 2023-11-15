---
slug: demo-session-cabal
date: 2023-10-26T10:00
tags:
  - Demo
  - Ecosystem
  - Founders
excerpt: Discover Cabal, the experimental P2P community chat platform.
author:
  - dpaez
  - ninabreznik
banner: /content/images/2023/10/cover-cabal.svg
cover:  https://blog.dat-ecosystem.org/content/images/2023/10/video-preview-cabal.png
title: "Demo Session #5: Cabal, the P2P Chat Platform"
---

<div>
One of the most fundamental human needs is to communicate. It allows us to organize and lever up communities. In the internet era, chat apps have become a commodity. These kind of apps, are so important to us. We use them daily without even noticing. Most of the time, we are using centralized chat. These apps have become one of the main data collection points, real privacy is never a priority.
Cabal, offers an alternative take. Built upon the hyper-stack and with an offline-first approach --no servers needed. It becomes a very interesting community-based option.
<br/><br/>

Cool! A new demo session arrived. This time Alex breaks down [`cabal-cli`](https://github.com/cabal-club/cabal-cli). With an IRC-like aspect, cabal-cli allows us to connect and chat with other friends directly.

Whilst, Cabal can be tagged as an experimental chat platform, we can not ignore the fact that has been battle-tested since day 1 (around 2018).

With Cabal you can list, create, archive and join channels. You can also create topics and you can even **moderate** them by sharing a cabal link with an special admin key. This way we are sharing a filtered/protected view of a cabal (eg: filtering out bad actors).
These are powerful features for a P2P communication platform and a sign that indicates how the Cabal Community cares about building a safe and secure place.

In the demo, Alex guides us through the different commands that you can use on Cabal to have a rich communication experience.

<div class="container">
  <div class="image">
    <img src="/content/images/2023/10/demo-cabal.svg" alt="cabal logo with dat robot" style="width: 100%;" />
  </div>
  <div>
  <h2>Main takeaways</h2>

  - [00:43](https://youtu.be/0NeCCONtsoM?t=43) Cabal CLI Intro
  - [02:12](https://youtu.be/0NeCCONtsoM?t=132) Name Yourself
  - [02:44](https://youtu.be/0NeCCONtsoM?t=164) The Cabal Key 🔑
  - [03:17](https://youtu.be/0NeCCONtsoM?t=197) The Admin Portion 🔑
  - [06:20](https://youtu.be/0NeCCONtsoM?t=380) Offline-first Capabilities / Sync History from other peers
  - [09:30](https://youtu.be/0NeCCONtsoM?t=570) Moderators and Admins / Layers of Trust
  </div>
</div>

Discover Cabal with Alex ▶️
<iframe style="width: 100%; aspect-ratio: 16/9; border-radius: 0.5rem;" src="https://www.youtube.com/embed/0NeCCONtsoM?si=OlCH0iu7gJJ8OZUq" title="Cabal Demo Session" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="note">
ℹ️ <b>Project Status</b> <br/>
Cabal is an ongoing effort since 2018. Is under active development. One of the most exciting news is this new protocol they are working on called <code>cable</code> which is custom-made for cabal's needs. Learn more <a href="https://github.com/cabal-club/cable/">here</a>.
The new protocol is still in its early days. Some community members have made exploratory implementations in erlang and elixir, there are also terminal chat clients in rust and in nodejs. See more  <a href="https://archive.org/details/cable-interop-demo-2023-09">here</a>.
</div>
<br/>

🎥 **AMA Session with Alex**. We'll host an AMA session with Alex on Thursday 26th, 6PM GMT+1 on Jitsi. [RSVP now](https://meet.jit.si/moderated/b59efb59c25f8bb83ca0c5e23d59ff375ebb396fac6e7d1fcc1d1521322126fe).


## Demo Links:
- Cabal CLI Repo: https://github.com/cabal-club/cabal-cli
- Cabal Site: https://cabal.chat/
- Cabal Github Org: https://github.com/cabal-club/

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
