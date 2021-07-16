#!/user/bin

# Fixes issue on Windows with running jekyll serve with live reload

# Update the -x64 eventmachine gem to install and build the native ruby version
gem uninstall eventmachine-1.2.7-x64-mingw32 --force
gem install eventmachine --platform ruby
echo "Check Gemfile.lock and manually remove eventmachine-1.2.7-x64-mingw32 if needed"
