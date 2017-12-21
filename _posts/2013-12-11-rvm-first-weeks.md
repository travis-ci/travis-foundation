---
layout: post
title: The first weeks of RVM's journey to 2.0
author: Michal Papis
twitter: mpapis
---

*Michal Papis is the the current maintainer of RVM. Travis Foundation has secured funding for RVM from [PAYMILL](https://www.paymill.com/de) so that Michal can continue working on RVM for two months, beginning mid November.*

---

For the last two weeks I started working on RVM 2.0 while fixing some issues in RVM 1.x, so the progress was slower than I hoped, but finally I got down to it and here it is! The [beginning of RVM 2.0](https://github.com/rvm/rvm2-ui). It’s a work-in-progress still, but already very close to the target solution. While on my way to the Paymill office (that’s why I love train travel!), I created [a piece of RVM 2.0](https://github.com/rvm/gem-wrappers) that can also be used in RVM 1.x and will soon be a part of RVM 1.x.

The major change in RVM 2.0 will be switching from shell script to Ruby. This will allow a lot of things, but most importantly that the tool can be splitted into smaller gems and that we can add tests to them. Thanks to the modularization and extended testing, RVM 2.0 will not only be just a tool for Ruby -  it will become a tool for managing the whole development environment including other languages, databases, libraries, dependencies….

Here is my talk about RVM 2 at Rubyshift 2012:

<object width="560" height="315"><param name="movie" value="//www.youtube.com/v/wN-iIC3S1ZM?hl=en_US&amp;version=3"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="//www.youtube.com/v/wN-iIC3S1ZM?hl=en_US&amp;version=3" type="application/x-shockwave-flash" width="560" height="315" allowscriptaccess="always" allowfullscreen="true"></embed></object>

My time working on this project is generously sponsored by PAYMILL through Travis Foundation, but it is not only about funding, they also give me the chance to meet and travel: this week I am visiting the PAYMILL office in Munich. This will give me a chance to work in a team for a week, which I hope will bring new ideas and speed up the development process for RVM 2.0.

Thanks to my time in Munich from the 9th to 13th, I will get the chance to visit two Ruby events! First, I'll be at [Munich Rubyshift](http://www.meetup.com/Munich-Rubyshift-Ruby-User-Group/events/150475432/), the Ruby User Group.
Second, on my way back home to [Gorzow](https://maps.google.com/?q=Gorzow&z=7), I'll swing by the [Winter Hackday with Rails Girls Berlin](http://railsgirlsberlin.de/2013/11/10/winter-hacking-rails-girls-berlin/). For both events I will give a short talk about “RVM wrappers: A dive into Ruby and gems configuration and what RVM does to help you”.

I am excited about all the travels and changes; I will meet new friends, visit new places, write new code. It is all for Open Source, so everyone can benefit!
Thank you PAYMILL and Travis Foundation for this opportunity.

---

*Stay tuned for more and swing by, if you are in Munich tonight: Michal is giving his short talk at the [Munich Rubyshift meetup](http://www.meetup.com/Munich-Rubyshift-Ruby-User-Group/events/150475432/), starting 6:30 at Blutenburgstr. 43.*
