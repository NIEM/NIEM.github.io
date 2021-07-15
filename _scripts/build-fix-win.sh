#!/bin/bash

# Fixes issue on Windows with running jekyll serve with live reload
gem uninstall eventmachine --platform mingw32 --force
gem install eventmachine --platform ruby
sed -i -e '/eventmachine/s/-x64-mingw32)/)/g' Gemfile.lock
