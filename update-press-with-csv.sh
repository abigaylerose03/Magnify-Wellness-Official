#!/bin/bash -e
# REPLACE press.js with press.js before putting into production (sed -i 's/press.js/press.js/g' update-press-with-csv.sh)
# Run `source ./insert-json-into-press.sh CSV_FILENAME` to run this script
# before running this script, if jq, npm and the npm package csvtojson aren't installed, install them first. I don't feel like scripting that for different OSs
CSV_DATA=$1

# convert the csv to json w/ csv2json 
if [ ! -d ./press-data/ ]; then
    echo "Creating directory press-data/"
    mkdir -p ./press-data/
fi
csvtojson $1 | jq > ./press-data/press-data-raw.json

# create new file that's just the objs not in a list (delete 1st and last lines)
sed '1d; $d' ./press-data/press-data-raw.json > ./press-data/press-data-objs.txt

# insert 3 tabs before all lines in the json to match press.js indentation
sed -i 's/^/\t\t\t/' ./press-data/press-data-objs.txt

# determine start and end of current objects to delete in press.js
START=$(sed -n '\#const cards = \[# =' press.js) 
END=$(sed -n '\#\]//END# =' press.js)
DELETE_START=$(( $START+1 ))
DELETE_END=$(( $END-1 ))
#echo $START ; echo $END
# if errors, make sure the exact lines `const cards = [` and  `]//END` exist in press.js

if [ $DELETE_START -le $DELETE_END ] ; then
    # delete all lines between DELETE_START and DELETE_END
    echo "Deleting objects located from line ${DELETE_START} to line ${DELETE_END}."
    sed -i.bak "${DELETE_START},${DELETE_END}d" press.js 
else
    echo "No objects to delete."
fi

# insert contents of press-data.json at START
echo "Adding new data objects."
sed -i.bak "${START}r ./press-data/press-data-objs.txt" press.js
#code press.js

echo "Run complete."