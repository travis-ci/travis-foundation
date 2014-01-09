---
layout: post
title: Half the way with Travis Foundation and PAYMILL
author: Michal Papis
twitter: mpapis
---

*Michal Papis is the the current maintainer of RVM. Travis Foundation has secured funding for RVM from [PAYMILL](Paymill.com) so that Michal can continue working on RVM for two months, beginning mid November.*

---

It’s been a month now as I’m doing my Open Source work under the wings of the Travis Foundation and PAYMILL. I implemented small bits of RVM 2.0, some of which I already released as gems. From the 9th to the 14th of December, I went to Munich to visit the PAYMILL offices: I finally got to know the excellent people sponsoring RVM development! 

I was not sure what to expect, but was pleasantly surprised. I wrote most of the gem-wrappers gem in that short time. It’s a replacement for RVM wrappers. I also backported gem-wrappers to RVM 1.25, which has been released now. It took quite a few days to integrate it, but I used this time to further clean up the codebase and improve few aspects of RVM, making the user experience better than ever.

While in Munich, I made some time to visit a few local events. The first one was a Rails Girls Munich meeting on Tuesday. I did meet some delightful people learning Ruby on Rails. As I already had experiences with most of the web technologies used at the meeting, I was able to help [Sara](http://twitter.com/sareg0) implement a Javascript countdown till Christmas. 
![countdown](https://f.cloud.github.com/assets/1711357/1877372/e24f7116-7924-11e3-966c-73309dcfdb64.png)


We had an amazing time learning JavaScript from the bottom up. One goal was trying to follow good practices, especially keeping code in small chunks. Check it out on [GitHub](https://github.com/sareg0/Christmas-Counter).

The next day, I visited the [Munich Ruby User Group](http://munich.rubyshift.org/) - “RubyShift”, and I gave an intro to RVM wrappers and the gem-wrappers replacement. I’ve met inspiring people and hope to visit them again soon. 

After three nights of meetings, I took Friday evening off to regain the energy for Saturday’s “Winter Hacking” with [Rails Girls Berlin](http://railsgirlsberlinb.de). In the meantime, I was working on RVM2-ui (https://github.com/rvm/rvm2-ui). It’s a Ruby library for handling the console output in RVM 2.0. By the time I reached Berlin I had a good test coverage and everything was working as expected.
At the event, I helped some of the attendees to understand Rails and automated testing. After the attendees made it through a day of hacking, there was some mulled wine and time to sum up everything. At the end of the day, I caught the train home, my head still buzzing with the amazing conversations we had about software and life. 

Back home, I was charged with energy after such exciting times and got right back to coding. I made further improvements to [gem-wrappers](https://github.com/rvm/gem-wrappers), moved [pluginator](https://github.com/rvm/pluginator) to version 1.0.0 added support for Ruby versions older than 2.0. Most importantly, I have put more work into extracting pieces of RVM 1.x into RubyGems. That way they can be reused by anyone. The last of these is [gem-empty](https://github.com/rvm/gem-empty), another gem useful outside of RVM.


All in all, a lot happened the last month, I made new friends and wrote lots of great code. What a way to end the year and start the new one!

--
*Michal Papis is visting Berlin from the 9th till 10th of January. He will give an introduction to RVM 2 at [rug-b](http://berlin.onruby.de/) on the 9th and afterwards discuss and brainstorm some new ideas for RVM 2 with Michal. Hope to see you all there, Berliners!*

