#!/bin/bash

# Searches the files for the given argument with the following search options:
# - recursive, case-insensitive, report line numbers, exclude binary results
# - exclude .git, _site, and vendor folders

grep -RinI --color --exclude-dir .git --exclude-dir _site --exclude-dir vendor $1
