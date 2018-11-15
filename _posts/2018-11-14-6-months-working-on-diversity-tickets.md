---
layout: post
title: 6 months working on Diversity Tickets
author: Candela and Jessica
twitter: travis_fnd 

---

*[Candela](https://github.com/mauditecandela) and [Jessica](https://twitter.com/guainumbi_) are the recipients of one of the Prototype Fund grants for 2018 and developers on the Open Source project Diversity Tickets.*

---

In the blog post “[Diversity Tickets meets Prototype Fund](https://foundation.travis-ci.org/2018/07/24/diversity-tickets-meets-prototype-fund/)” we wrote about our collaboration on the Diversity Tickets platform as part of the Prototype Fund’s 3rd round and already introduced some of the features we had developed up until then. Now 6 months have passed since the beginning of our work, our funding phase is over and we would like to share some more of our contributions and our results with you. 

Wow, time flies when you’re having fun — and a long list of features to implement ;)

## What’s new?

### User Profiles

While working on the user profiles feature, we implemented personalized profiles for applicants in addition to those for admins and event organizers. (You can find more details about that [in our earlier post](https://foundation.travis-ci.org/2018/07/24/diversity-tickets-meets-prototype-fund/)). Since our last update users can now also save fields of interest to their profiles, such as certain programming languages, spoken languages or fields of expertise, and choose to get notified if a new event has been published on Diversity Tickets that matches these fields. 

![Screenshot of account settings on diversitytickets.org](/images/blog/2018-11-14-screenshot-1.png)

If you are an event organizer, you now also have the option to get notified once the number of submitted applications has exceeded the number of offered tickets, so you can decide whether you would like to open up more tickets for application. You can even choose to get notified each time the application number breaks the threshold for multiple rounds of ticket increases. But don’t worry — You will always receive only one email per threshold mark.

### User Applications / Drafts

![Screenshot of a user application draft on diversitytickets.org](/images/blog/2018-11-14-screenshot-2.png)

Did we mention you can now save drafts for your applications in your user profile? Pretty neat, indeed. We even included a deadline reminder for you that will notify you a couple of days before the deadline of the event you saved your draft for, to make sure you do not miss your opportunity to apply.

### Translations

Diversity Tickets is available in English AND Spanish now! If you are a developer and would like to contribute to the Diversity Tickets open source repository [[link here](https://github.com/rubymonsters/diversity_ticketing)] — it just became much easier to add new languages to the site. We set up the rails app for internationalization and added yaml-files for each language.

### Event search

![Screenshot of the filter & search system on diversitytickets.org](/images/blog/2018-11-14-screenshot-3.png)

We added an event search to help you find events more easily. As the platform and its user-base is growing, Diversity Tickets is receiving more and more events. To help you navigate through them and find the events you are looking for, we implemented a filter-by-tags system and a keyword search. They work combined as well as individually.

## Conclusion 

Before starting with the project we made a list of all the things we wanted to work on and features we were hoping to implement for Diversity Tickets within our 6 months. Fortunately, we were able to reach all of our goals and quite some more. We wanted to be on the safe side, so we planned in lots of time for unforeseeable events while making our roadmap: We were for example not sure how long the upgrade to Rails 5 would take us and how many tests there were to begin with. This turned out to be a good thing, since it allowed us to carefully research on topics that came our way, which we did not expect and had to learn about — such as the GDPR. Occasionally, we also spend more time than we had liked on fixing problems regarding our local environment setups or trying to figure out why that certain error in heroku would keep showing up, until we learned that it was in fact not our fault but a temporary bug on heroku itself… However, all in all we kept a good pace and were able to implement more than we originally planned. It was extremely helpful to have regular feedback meetings with Laura from the Travis Foundation to develop ideas further and update our feature list with up-to-date topics.

Diversity Tickets is an open source platform and would not be where it is today, if it was not for all the contributors that helped to develop the project along the way and supported the foundation with donations. If you are a developer and would like to contribute, please feel free to check out [our github repository](https://github.com/rubymonsters/diversity_ticketing).  
If you like what Diversity Tickets does, help spread the word about the platform or [consider a donation](https://foundation.travis-ci.org/donate) to further enable the work of the Travis Foundation. 

## Diversity Tickets at BMBF

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">.<a href="https://twitter.com/guainumbi_?ref_src=twsrc%5Etfw">@guainumbi_</a> and <a href="https://twitter.com/mauditecandela?ref_src=twsrc%5Etfw">@mauditecandela</a> on stage for <a href="https://twitter.com/hashtag/prototypedemos?src=hash&amp;ref_src=twsrc%5Etfw">#prototypedemos</a>, to present all the work they’ve done on <a href="https://twitter.com/hashtag/DiversityTickets?src=hash&amp;ref_src=twsrc%5Etfw">#DiversityTickets</a> over the last 6 months supported by <a href="https://twitter.com/travis_fnd?ref_src=twsrc%5Etfw">@travis_fnd</a>  🙏💪🏼💖🎉 <a href="https://t.co/do17gJxm4l">pic.twitter.com/do17gJxm4l</a></p>&mdash; Laura (@alicetragedy) <a href="https://twitter.com/alicetragedy/status/1048128237170245632?ref_src=twsrc%5Etfw">October 5, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


In early October this year we had the opportunity to talk about Diversity Tickets at the German Federal Ministry of Education and Research (BMBF), which hosted the Demo Day of [Prototype Fund’s 3rd Round “Diversity”](https://prototypefund.de/projects/round3/) and enabled our work over the past 6 months. As participants of the program we presented our work on the platform and introduced Diversity Tickets to the audience and other teams who presented their projects that day.  
We are immensely proud to be able to contribute to this amazing project and would like to thank, once again, everyone who made this work possible: **The Prototype Fund, the Open Knowledge Foundation, Travis CI, RubyMonstas, Laura, Anika, Sven, Andy** and everyone else who helped to make it happen. <3 

You can find links to a video about the Prototype Fund Demo Day and the slides of our presentation below:  
[[Video](https://www.youtube.com/watch?v=zgkci_5avz0)]  
[[download presentation](/images/blog/2018-11-14-Diversity-Tickets-Prototype-Fund.pdf)]   

![Rubymonstas and Travis Foundation](/images/blog/2018-11-14-rubymonstas-travis-foundation.jpg)
*From left to right: Laura, Candela, Jess, Anika*