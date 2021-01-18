# Magnify-Wellness-Official-Website
Ignore the "andrew-Magnify" folder

# How to update content on press cards
Do NOT directly edit the objects and surrounding comments in the press.js file.
0. If the software tools jq, npm and the npm package csvtojson aren't already installed, install them, or step 2 will generate errors.
1. Download the finalized-press-data sheet from the Speaker/Workshops/Features Google Sheet containing the edits you wish to apply.
2. In the command line, run `source ./update-press-with-csv INSERT_CSV_FILE`, which runs a custom bash script to update press.js based on a csv file.
If you have any questions, please ask Katie Taylor.