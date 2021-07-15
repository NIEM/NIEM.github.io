#!/bin/bash

# Note that .sh scripts work only on Mac. If you're on Windows, install Git Bash and use that as your client.

echo 'Kill all Jekyll instances'
kill -9 $(ps aux | grep '[j]ekyll' | awk '{print $2}')
clear

echo "Building PDF-friendly HTML site for Mydoc ...";
bundle exec jekyll serve --detach --config _config.yml,_scripts/pdf/_config_pdf.yml;
echo "done";

echo "Building the PDF ...";
prince --javascript --input-list=_site/assets/pdf/file-list.txt -o assets/pdf/niem.github.io.pdf;
echo "Done. Look in the assets/pdf directory to see if it printed successfully."
