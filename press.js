$(document).ready(function () {
    const addEmptyCard = (html) => {
        html += '<div class="col press-card filler-card"><p class="press-card-source"></p><hr/><a href=""><p class="press-card-title"></p></a><p class="press-card-date"></p></div>';
        return html;
    }

    const makeCards = () => {
        // DO NOT EDIT THESE CARDS DIRECTLY OR YOUR CHANGES MAY BE OVERWRITTEN.
        // Read the README to see the process or ask Katie Taylor

        // DO NOT EDIT THE LINE BELOW
        const cards = [
            { 
                source: "Western Today",
                href: "https://westerntoday.wwu.edu/features/honors-student-abigayle-peterson-develops-new-wellness-app-for-the-apple-store",
                title: "Honors student Abigayle Peterson develops new wellness app for the Apple Store",
                date: "November 4, 2020"
            },
            {
                source: "Source",
                href: "https://link.edu",
                title: "gkeaogaejewagpijewajie  wewpogjeawopgeawgpie fwqfwqjqwj  johiohoioj hjb wqoifwqijf fne fjwiofjewoi jfeiw fefe",
                date: "Date"
            },
            {
                source: "Western Today",
                href: "https://westerntoday.wwu.edu/features/honors-student-abigayle-peterson-develops-new-wellness-app-for-the-apple-store",
                title: "Honors student Abigayle Peterson develops new wellness app for the Apple Store",
                date: "November 4, 2020"
            }, 
        ]//END
        //DO NOT EDIT THE LINE ABOVE

        const totalCardCount = Object.keys(cards).length;
        const totalRowCount = Math.ceil(totalCardCount/2);

        // Count number of feature cards
        let numFeatureCards = 0;
        for (let objIndex=0; objIndex < totalCardCount; objIndex++) {
            if (cards[objIndex]) {
                numFeatureCards++;
            }
        }
        const numWorkshopCards = totalCardCount - numFeatureCards;
        
        const featureRowCount = Math.ceil(featureCardCount/2)
        const workshopRowCount = Math.ceil(workshopCardCount/2)
        console.log("There are " + totalRowCount + " rows in total: " + featureRowCount + " feature rows and " + workshopRowCount + " workshop rows.");
        
        let cardIndex = 0;
        let html = "<h1>Press</h1>";
        for (let row=0; row<totalRowCount; row++) {
            html += `
            <div class="row d-xl-flex flex-column flex-lg-row">`
            for (let col=0; col<2; col++) {
                if (cardIndex==totalCardCount) {
                    html = addEmptyCard(html);
                    break;
                } else {
                    html += `
                    <div class="col press-card">
                        <p class="press-card-source">` + cards[cardIndex].Organization + `</p>
                        <hr/>
                        <a href="` + cards[cardIndex].Link + `">
                            <p class="press-card-title">` + cards[cardIndex].Title + `</p>
                        </a>
                        <p class="press-card-date">` + cards[cardIndex].Date + `</p>
                    </div>
                    `
                    cardIndex++
                }
            }
            html += `
            </div>`
        }

        $(".container").html(html);
    }

    // LOAD THE HEADER AND FOOTER
    $('#navbar').load('./navbar/navbar.html');
    $('#footer').load('./footer/footer.html');

    makeCards();
}) 