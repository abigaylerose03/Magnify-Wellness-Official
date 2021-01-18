#!/bin/bash -e
# Run `bash ./update-press-with-csv.sh PATH/TO/CSV_FILENAME` to run this script
# before running this script, if jq, npm and the npm package csvtojson aren't installed, install them first.

CSV_DATA=$1
PRESS_DATA_DIR="./press-data/"
PRESS_RAW_PATH="${PRESS_DATA_DIR}press-data-raw.json"
PRESS_OBJS_PATH="${PRESS_DATA_DIR}press-data-objs.txt"
PRESS_JS="press.js"

# end script if CSV_DATA path not valid
if [ ! -f $CSV_DATA ]; then
    echo "Error! ${CSV_DATA} doesn't exist. Make sure to specify the correct filepath."
    exit 1
fi

# convert the csv to json w/ csv2json 
if [ ! -d $PRESS_DATA_DIR ]; then
    echo "Creating directory ${PRESS_DATA_DIR}"
    mkdir -p $PRESS_DATA_DIR
fi
#csvtojson $CSV_DATA | jq > $PRESS_RAW_PATH # for nicer obj formatting
csvtojson $CSV_DATA > $PRESS_RAW_PATH # for more compact obj formatting

# create new file that's just the objs not in a list (delete 1st and last lines)
sed '1d; $d' $PRESS_RAW_PATH > $PRESS_OBJS_PATH

# insert 3 tabs before all lines in the json to match press.js indentation
sed -i 's/^/\t\t\t/' $PRESS_OBJS_PATH

# determine start and end of current objects to delete in press.js
START=$(sed -n '\#const cards = \[# =' $PRESS_JS) 
END=$(sed -n '\#\]//END# =' $PRESS_JS)
DELETE_START=$(( $START+1 ))
DELETE_END=$(( $END-1 ))
#echo $START ; echo $END
# if errors, make sure the exact lines `const cards = [` and  `]//END` exist in press.js

if [ $DELETE_START -le $DELETE_END ] ; then
    # delete all lines between DELETE_START and DELETE_END
    echo "Deleting objects located from line ${DELETE_START} to line ${DELETE_END}."
    sed -i.bak "${DELETE_START},${DELETE_END}d" $PRESS_JS
else
    echo "No objects to delete."
fi

if [ -s $PRESS_OBJS_PATH ] ; then 
    # insert contents of press-data.json at START
    echo "Adding new data objects."
    sed -i.bak "${START}r ${PRESS_OBJS_PATH}" $PRESS_JS
else 
    echo "No objects in ${PRESS_OBJS_PATH} to add."
fi

echo "Run complete."