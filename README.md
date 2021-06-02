# Magnify Wellness Official Website
Ignore the "andrew-Magnify" folder

# How to update content on press cards
Do NOT directly edit the objects and surrounding comments in the press.js file.
1. If the software tools jq, npm and the npm package csvtojson aren't already installed, install them, or step 3 will generate errors.
2. Download the finalized-press-data sheet from the Speaker/Workshops/Features Google Sheet containing the edits you wish to apply.
3. In the command line (from the root of the Magnify-Wellness-Official directory), run `bash ./update-press-with-csv.sh PATH/TO/CSV_FILE`, which runs a custom bash script to update press.js based on a csv file.

If you have any questions, please ask Katie Taylor.

# Updating Slack Invite links
The Slack invite link expires every 3-4 weeks. In order to keep it up to date and ensure that potential community members do not get deterred by a invalid link, we need to update it every so often. To update it, generate a new link from the Slack workspace and edit the links on `get-involved.html` and `contact.html`.

# Adding/Editing Merch Store Items
1. Navigate to `merch` folder, then open `merch.js`
2. Copy the following and add in the proper information, making sure to leave quotation marks, commas, and curly braces where they are. It's okay to leave the imgSrc and itemLink blank if they are not available: 


  
     
       { 
       
             name: "INSERT ITEM NAME",

             price: "$INSERT ITEM PRICE",

             imgSrc: "INSERT LINK TO THE IMAGE",

             itemLink: "INSERT LINK TO THE ITEM WEBPAGE", 
             
        
        },
        
   
    
    
3. Add the item to the end of the merchItems array
    
