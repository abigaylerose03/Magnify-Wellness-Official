$(document).ready(function () {
    const addEmptyCard = (html) => {
        html += '<div class="col press-card filler-card"></div>';
        return html;
    }

    const makeCards = () => {
        // DO NOT EDIT THESE CARDS DIRECTLY OR YOUR CHANGES MAY BE OVERWRITTEN.
        // Read the README to see the process or ask Katie Taylor

        // DO NOT EDIT THE LINE BELOW
        const cards = [
			{"Type":"Feature","Organization":"The Paris Project","Title":"Mental Health Heros: Story Telling with Abby from Magnify Wellness","Date":"January 17, 2021","Link":"https://open.spotify.com/episode/6HG8GtFpWlmAn8EctSlRXG?si=28jhVAkKR1mm8VzsbJ4L7A"},
			{"Type":"Feature","Organization":"The Western Front Online","Title":"First-year Western Student Creates Mental Wellness App for Students","Date":"December 6, 2020","Link":"https://www.westernfrontonline.com/2020/12/06/mentalwellness/"},
			{"Type":"Feature","Organization":"And This is How It Started Podcast","Title":"How it Started: Magnify Wellness with Abigayle Peterson","Date":"November 23, 2020","Link":"https://open.spotify.com/episode/7wnJBKkr8XCH6UHIT4o6jH?si=Kid1T6p9Rk2m7UmNoPOJeg"},
			{"Type":"Feature","Organization":"HEARO UW","Title":"Recenter Yourself: Self Defense with Abigayle Peterson & Harrison Toppen Ryan","Date":"November 15, 2020","Link":"https://www.youtube.com/watch?v=TouDp6taF8g&t=654s&ab_channel=HEAROInitiative"},
			{"Type":"Feature","Organization":"Western Washington University Today","Title":"Honors student Abigayle Peterson develops new wellness app for the Apple Store","Date":"November 4, 2020","Link":"https://westerntoday.wwu.edu/features/honors-student-abigayle-peterson-develops-new-wellness-app-for-the-apple-store"},
			{"Type":"Feature","Organization":"STEMlights","Title":"STEMlights Newsletter Edition 21 -- Stem Spotlight: Abigayle Peterson","Date":"October 4, 2020","Link":"https://stemlights.stemchats.org/edition/21.html"},
			{"Type":"Feature","Organization":"Channel Kindness","Title":"Magnifying the Importance of Mental Health","Date":"September 6, 2020","Link":"https://www.channelkindness.org/magnifying-mental-health/"},
			{"Type":"Feature","Organization":"Lemonades Life Newsletter","Title":"Lemons & Life — Issue 4: Spotlight Mention — Magnify Wellness","Date":"August 24, 2020","Link":"https://lemonsandlifeorg.substack.com/p/lemons-and-life-issue-4?utm_medium=email&utm_campaign=cta"}
			,
			{"Type":"Feature","Organization":"STEAMChangersCA","Title":"STEAMChangers: Abigayle Peterson","Date":"August 3, 2020","Link":"https://steampowerca.org/steamchangers/abbypeterson"},
			{"Type":"Feature","Organization":"The Positive Note","Title":"BIPOC Mental Health Month: The Power of Empathy","Date":"July 13, 2020","Link":"https://medium.com/@thepositivenote/bipoc-mental-health-month-the-power-of-empathy-6c5ae52fcf10"},
			{"Type":"Feature","Organization":"The Scholarship Track","Title":"GHC Scholarship Interview – Abigayle Peterson","Date":"June 21, 2020","Link":"https://scholarshiptrack.org/2020/06/21/ghc-abigayle-peterson/"}
			,
			{"Type":"Workshop/Speaker","Organization":"Stemology","Title":"Magnify CEO Hosts AI Hacks II App Development Workshop","Date":"December 27, 2020","Link":"https://docs.google.com/presentation/d/1tgTKn69LekTrDeR-1FRFI9CaUwyy_Wo44MPZ9esJoF8/edit"},
			{"Type":"Workshop/Speaker","Organization":"Saluburious Organization","Title":"Magnify CEO Hosts IOS Development Workshop","Date":"December 26, 2020","Link":"https://docs.google.com/presentation/d/1uzxXPeGZKtzD6C_tCEE-BCYgEHXL6pfUHNKQ55egkPU/edit#slide=id.g94c3a170b3_1_5"},
			{"Type":"Workshop/Speaker","Organization":"She Creates Makeathon","Title":"Magnify CEO Speaks at She Creates Makeathon: Creating the Future Starts with You","Date":"August 4, 2020","Link":"https://shecreates.carrd.co/#speakers"},
			{"Type":"Workshop/Speaker","Organization":"UnsinkableYouth","Title":"Unsinkable Stories: Abigayle Peterson","Date":"July 23, 2020","Link":"https://weareunsinkable.com/leading-with-empathy-abigayle-peterson/"}
        ]//END
        //DO NOT EDIT THE LINE ABOVE

        const totalCardCount = Object.keys(cards).length;
        const totalRowCount = Math.ceil(totalCardCount/2);

        // Count number of feature cards
        let featureCardCount = 0;
        for (let objIndex=0; objIndex < totalCardCount; objIndex++) {
            if (cards[objIndex].Type == "Feature") {
                featureCardCount++;
            }
        }
        const workshopCardCount = totalCardCount - featureCardCount;
        console.log("There are " + totalCardCount + " cards in total: " + featureCardCount + " feature cards and " + workshopCardCount + " workshop cards.");
        
        const featureRowCount = Math.ceil(featureCardCount/2)
        const workshopRowCount = Math.ceil(workshopCardCount/2)
        console.log("There are " + totalRowCount + " rows in total: " + featureRowCount + " feature rows and " + workshopRowCount + " workshop rows.");
        
        let cardIndex = 0;
        let html = `
        <h1>Press</h1>`;

        // Generate Features section
        html += `
            <h3>Features</h3>`;
        for (let row=0; row<featureRowCount; row++) {
            html += `
            <div class="row d-xl-flex flex-column flex-lg-row">`
            for (let col=0; col<2; col++) {
                if (cardIndex == featureCardCount) {
                    html = addEmptyCard(html);
                    break;
                } else {
                    html += `
                    <div class="col press-card">
                        <p class="press-card-organization">` + cards[cardIndex].Organization + `</p>
                        <hr/>
                        <p class="press-card-title">` + cards[cardIndex].Title + `</p>
                        <p class="press-card-date">` + cards[cardIndex].Date + `</p>
                        <div class="btn-div">
                            <a class="btn" role="button" href="` + cards[cardIndex].Link + `">Read more</a>
                        </div>
                    </div>
                    `;
                    cardIndex++;
                }
            }
            html += `
            </div>`;
        }

        // Generate Workshops section
        html += `
            <h3>Workshops</h3>`;
        for (let row=0; row<workshopRowCount; row++) {
            html += `
            <div class="row d-xl-flex flex-column flex-lg-row">`
            for (let col=0; col<2; col++) {
                if (cardIndex == workshopCardCount) {
                    html = addEmptyCard(html);
                    break;
                } else {
                    html += `
                    <div class="col press-card">
                        <p class="press-card-organization">` + cards[cardIndex].Organization + `</p>
                        <hr/>
                        <p class="press-card-title">` + cards[cardIndex].Title + `</p>
                        <p class="press-card-date">` + cards[cardIndex].Date + `</p>
                        <div class="btn-div">
                            <a class="btn" role="button" href="` + cards[cardIndex].Link + `">Learn more</a>
                        </div>
                    </div>
                    `;
                    cardIndex++;
                }
            }
            html += `
            </div>`;
        }

        $("#press-content-container").html(html);
    }

    // LOAD THE HEADER AND FOOTER
    $('#navbar').load('./navbar/navbar.html');
    $('#footer').load('./footer/footer.html');

    makeCards();
}) 