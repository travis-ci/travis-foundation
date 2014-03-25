---
layout: post
title: CocoaPods - First day of three months 
author: Fabio Pelosin
twitter: fabiopelosin
---
*Fabio Pelosin is the co-author of CocoaPods. Travis Foundation has secured funding for CocoaPods from [SoundCloud](http://soundcloud.com) so that Fabio can work on CocoaPods for three months, beginning  today.*

---

I'm thrilled to announce that the work sponsored by [SoundCloud ](https://soundcloud.com) on [CocoaPods](http://cocoapods.org) is starting today.

CocoaPods is an application level dependency manager for the Objective-C community. In simple terms this means that Objective-C developers can specify the name and any version requirement of the libraries that they intend to use in their projects. Once the dependencies have been specified, CocoaPods takes care of fetching the sources of the libraries and of integrating them in the project of the user. This automation reduces development times and allows for a fine control of the dependencies that would not be possible importing libraries manually.

Dependency managers are common in the various programming communities and thus it might be strange that a community with a long tradition like the Objective-C one has been lacking in this regard until recently. The reason is that there have been important factors which hindered the development of a dependency manager for Objective-C. The most significant one is the requirement to interoperate with the formats of Xcode which are undocumented. Another important factor is that Objective-C is a reasonably low level programming language and thus less suited for the development of an application whose requirements are constantly shifting, for this reason CocoaPods is implemented in Ruby.

During the 3 months of sponsored work I plan to focus my effort in the following areas

+ Support the specification of dependencies per build configuration. As there are important restrictions on the applications which can be distributed via the app stores it is important to remove any library which uses forbidden functionality for debug or similar purposes before shopping the application.
+ Provide support for local development dependencies. This feature is about being able to conveniently use a checkout of a dependency for development purposes without requiring the other users working on the project to do a checkout for that specific library and keep it in sync.
+  Pod "edit" command. Would allow to conveniently edit and contribute back to the source of a library without leaving the context of the project.
+ Iterative resolver. This feature is a must have for every respectable dependency manager and involves the ability to resolve any version requirement conflict without user intervention if possible. There hasn't been a lot of direct demand for this functionality by the users, nonetheless it is important because it allows to properly develop other more popular features (like the ability to just update a library) without bandaid solutions which might prove costly down the road.
+ Document the architecture to facilitate higher level contributions.
+ Housekeeping and consolidation of the existing codebase.

As many software developers know, during development assumptions can and often will change, therefore I can’t promise that the aforementioned list is definitive. However, I’m confident that this sponsorship will help CocoaPods to move closer to `1.0`. So if you are an Objective-C developer stay tuned!

As a final remark, I would like to express my admiration for the work that the Travis Foundation and SoundCloud are doing to help the Open Source community. I think that Open Source Software provides vital value but struggles to obtain the resources necessaries to its development. A big thumbs-up for helping us escaping the [tragedy of the commons](http://en.wikipedia.org/wiki/Tragedy_of_the_commons).



