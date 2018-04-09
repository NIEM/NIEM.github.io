# NIEM.github.io

Source repo for the website [NIEM.Github.io](http://niem.github.io/).

The website runs under Github pages, which runs Jekyll.

The main repository for this repo is https://github.com/niem/niem.github.io/.

## Dependencies

* Ruby
  * Jekyll
  * Bundler
* Graphviz

## Installation

Run the following from a Unix-like command line:

```bash
$ git clone https://github.com/niem/niem.github.io.git
$ cd niem.github.io
$ git submodule init
$ git submodule update
$ bundle install
$ bundle exec jekyll serve
```

Point your browser at http://127.0.0.1:4000 to view the site.

# Editing

Edits and updates to the page are welcome. It would be very helpful if you
would:

1. Please fetch and merge in the master branch.
1. Please rebase any series of commits down to a single commit to be merged in
   (run "`rebase -i master`" and squash commits to a single commit). This is
   easiest if you work in a dev branch, not the master branch.
1. Please submit the commit as a Github pull request.
