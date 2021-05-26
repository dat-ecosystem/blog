---
slug: dat-in-the-lab-ucdavis-1
date: 2017-10-06T14:23
tags: Science
excerpt: |
  To kick off Dat in the Lab, our collaboration with UC researchers, Max, Stephen, and Danielle traveled to the University of California at Davis to talk to Nick Santos and others at the UC Davis Center for Watershed Sciences (CWS).
author: daniellerobinson
banner: /content/images/2018/03/0000405-DSC01580-1.jpg
title: |
  Dat in the Lab at UC Davis: A tale of office dogs, watershed sciences, and user feedback.
---

To kick off Dat in the Lab, our collaboration with UC researchers, Max, Stephen, and Danielle traveled to the [University of California at Davis](https://www.ucdavis.edu/) to talk to [Nick Santos](https://nicksantos.com/) and others at the UC Davis [Center for Watershed Sciences](https://watershed.ucdavis.edu/) (CWS). 

![IMG_0054-1-resize](/content/images/2017/10/IMG_0054-1-resize.JPG) Stephen, Max, and Nick pose on the picturesque Davis Campus

We were impressed with the local flora, the charming and talented office dogs, the hammocks on the quad, resident outdoor cat, and the sheer volume of bikes. 

![IMG_0051-1-resize](/content/images/2017/10/IMG_0051-1-resize.JPG) Bike and hammocks? We will be back.

We started the day off talking to Nick about his research workflows and the local data infrastructure. After getting the lay of the land at the Center for Watershed Sciences, we visited the [Data Science Initiative](http://dsi.ucdavis.edu/) (DSI) at UC Davis.  

UC Davis’s DSI is run by an interdisciplinary team with a mission to “foster, promote, and facilitate” data science through consulting, education, and training. Housed in the beautiful [Shields Library](https://www.library.ucdavis.edu/library/), the DSI supports students in learning new skills and researchers involved in data-driven projects. We met with members of DSI to discuss the Dat in the Lab project at UC Davis. DSI members raised valuable questions around Dat’s current conflict management model. 

How does Dat manage conflicts now? In the current version of Dat, one person creates and shares a Dat. This “one writer” has write-access to the files. Others can download (`dat clone`) the files and keep up to date with changes (`dat sync`).  However, these other writers can not push their changes back to the original file. Essentially, Dat is so conflict averse that we do not even allow conflicts to happen. Why this design? Our early use cases were published datasets. “One writer” is effective at getting people access to datasets, or parts of datasets, that are updated by a main data source via cloning and syncing. However, our conversations at UC Davis highlighted an additional set of researcher needs. In order to work with researchers engaged in data generation and analysis, we need to address collaboration. 

To move upstream from publishing in the research process, Dat will need to be optimized for collaboration.  “One writer” design means that one computer controls changes to the dataset. Dat needs to enable “multi-writer” collaboration in order to bring researchers into Dat-based workflows early in their projects. Lucky for us, our team-member Mathias Buus, or [mafintosh](https://twitter.com/mafintosh) as he is known to the world, is working on a “multi-writer” feature that will allow one writer to invite multiple collaborators. That feature is now prioritized for deployment! 

After meeting with DSI, we delivered our shiny new hands-on workshop (complete with all the bugs of the first instance of a hands-on workshop).  

![0000405-DSC01576-resize](/content/images/2017/10/0000405-DSC01576-resize.jpg)

We met people in the CWS and beyond and learned about fish genomics, [groundwater nitrates](http://groundwaternitrate.ucdavis.edu/), the [PISCES](https://pisces.ucdavis.edu/), and more. Thank you for being patient with the bugs at the workshop, UC Davis! We also uncovered some unique issues with UC campus wifi, which blocked local peer-to-peer laptop communication. So we had the opportunity to develop some workarounds for that. Nevertheless, workshop participants were able to use Dat command line tools to share, sync, and publish to the web. We learned from the workshop attendees and are looking forward to reconnecting to hear about their ideas for Dat in workflows. Thanks to all for a productive visit!

![0000405-DSC01583-resize](/content/images/2017/10/0000405-DSC01583-resize.jpg)

Next week we’ll be heading to sunny UC Merced to meet with [Mike Dawson’s lab](http://mnd.ucmerced.edu/)! We can’t wait to learn more about their research and discuss data workflows. Stay tuned [@dat_project](https://twitter.com/dat_project) and at the [Dat Blog](/).

We invite you at try Dat at try-dat.com - and when/if you find bugs, [let us know](https://github.com/maxogden/get-dat/issues).

![0000105-DSC01589-resize](/content/images/2017/10/0000105-DSC01589-resize.jpg) 

