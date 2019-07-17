# Contributing to the Travis Foundation site

First off, thank you for taking the time to contribute 🙌🏼  Any contribution is welcome and appreciated. Below you'll find an overview of contribution guidelines, with what's expected of contributors.  
Before you get started, please make sure you read and understand our [Code of Conduct](CODE_OF_CONDUCT.md).

**Table of contents**
1. [Setting up and getting started](#setting-up-and-getting-started)
2. [Reporting a bug](#reporting-a-bug)
3. [Suggesting a new feature](#suggesting-a-new-feature)
4. [Contributing to an existing issue](#contributing-to-an-existing-feature)
5. [Issue labels](#issue-labels)

## Setting up and getting started
The [Travis Foundation website](https://foundation.travis-ci.org/) is built using [Jekyll](https://jekyllrb.com/). In order to set up and run the site locally for development, you'll need to have Ruby installed on your machine, have a GitHub account, and [fork our repo](https://help.github.com/en/articles/fork-a-repo).  
Once you're all set up, you'll have to bundle the gems using bundler and start jekyll:  

```
gem install bundler
bundle install
bundle exec jekyll serve --watch

```
To see the site locally, just head to `http://localhost:4000` in your browser. If you are new to Jekyll, you can find more about it [here](https://jekyllrb.com/docs/). Otherwise, you're ready to go!  

## Reporting a bug
Before reporting a bug, please check if it has [already been reported](https://github.com/travis-ci/travis-foundation/issues?&q=is%3Aissue%20label%3Abug%20). If it hasn't and you want to file [a new bug report](https://github.com/travis-ci/travis-foundation/issues/new), provide the following information:

- Where/on which page did the error happen?
- How can the error be reproduced?
- What was the expected and what the actual behaviour?
- Can you provide an error message or a screenshot that illustrates the problem?

## Suggesting a new feature
We are open to suggestions and ideas to improve the website. As with filing a bug report, before suggesting a new feature or giving feedback please check it has not been [suggested before](https://github.com/travis-ci/travis-foundation/issues/). And if it hasn't, feel free to share your ideas [on our issue tracker](https://github.com/travis-ci/travis-foundation/issues/new)!

## Contributing to an existing issue

You can view all of the currently open issues [on our issue tracker](https://github.com/travis-ci/travis-foundation/issues/). Most are [labeled](#issue-labels), to give you an idea of the sort of contribution that is expected.

### Finding an issue

A good starting point if you're new to open source is the list of `beginner-friendly` issues. These are issues that don't require much prior knowledge of our structure or our website to get started. Before getting started, please check that no one else is working on the issue: this will be clear by the assigned user (if there is one) and by the issue's comments/discussion.

If it seems like no one is working on the issue, great! You've officially found an issue to work on. You can leave a comment mentioning you'd like to work on the issue. Feel free to also leave a comment with your questions if anything is unclear or if you need help: Is the issue still valid? Are there any more detailed specifications to the issue?

### Creating a pull request

Once you're happy with your changes, commit them and make a pull request. You can find very thorough information on Pull Requests in [GitHub's documentation](https://help.github.com/en/articles/creating-a-pull-request). The most important thing to keep in mind is that all pull requests should be made against `master`, which is our main branch.  

## Issue labels
We use labels to track, manage and organise issues and pull requests.  

| Label Name         | Issues                  | Description |
| ------------------ |:-----------------------:| ------------|
| `beginner-friendly`| [🔍][beginner]      | Less complex issues, suitable for your first steps in open source. |
| `bug`              | [🔍][bug]           | Confirmed misbehavior of the application code. |
| `design/styling`              | [🔍][design]           | CSS, UI and design-related issues. |
| `documentation`    | [🔍][documentation] | improvements to current documentation (e.g. README, contribution files) |
| `duplicate`        | [🔍][duplicate]     | Issues which have already been reported. |
| `enhancement`      | [🔍][enhancement]   | *"nice to have"* features, but not necessary. |
| `in progress`      | [🔍][in progress]   | Work in progress, things which are already taken care of. |
| `pair with me`      | [🔍][pairwithme]   | Looking for someone to pair on this. |
| `question`         | [🔍][question]      | Feature and code related questions which are no bug reports or feature requests. |
| `quick win`            | [🔍][quick-win]         | Issues and pull requests which have been reviewed and are ready to be closed or merged. |
| `ready`            | [🔍][ready]         | Issues and pull requests which have been reviewed and are ready to be closed or merged. |
| `wontfix`          | [🔍][wontfix]       | The team has decided to not fix these things for now, e.g. because the whole feature will be replaced soon. |


[beginner]:      https://github.com/travis-ci/travis-foundation/labels/beginner-friendly
[bug]:           https://github.com/travis-ci/travis-foundation/labels/bug
[design]: https://github.com/travis-ci/travis-foundation/labels/design%2Fstyling
[documentation]: https://github.com/travis-ci/travis-foundation/labels/documentation
[duplicate]:     https://github.com/travis-ci/travis-foundation/labels/duplicate
[enhancement]:   https://github.com/travis-ci/travis-foundation/labels/enhancement
[in progress]:   https://github.com/travis-ci/travis-foundation/labels/in%20progress
[pairwithme]:   https://github.com/travis-ci/travis-foundation/labels/pair%20with%20me
[question]:      https://github.com/travis-ci/travis-foundation/labels/question
[quick-win]:     https://github.com/travis-ci/travis-foundation/labels/quick%20win
[ready]:         https://github.com/travis-ci/travis-foundation/labels/ready
[wontfix]:       https://github.com/travis-ci/travis-foundation/labels/wontfix
