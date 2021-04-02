/* TO ADD A MERCH ITEM: 

copy the following (including the curly braces), add in the proper info, and add it to merchItems

    {
        name: "item name",
        price: "$item price",
        imgSrc: "link to the image that will be displayed",
        itemLink: "link to the item page",
    },

if no imgSrc is given, it will default to a picture of maggie
if no itemLink is give, it will default to the same link as the img

*/

const merchItems = [
    {
        name: "hoodie",
        price: "$30",
        imgSrc: "../merch/hoddie1.png",
        itemLink: "",
    },
    {
        name: "stickers",
        price: "1 for $2, 2 for $3",
        imgSrc: "../merch/stickers.jpg",
        itemLink: "",
    },
   
    
]



const makeCards = (merchItems) => {
    let shop = document.getElementsByClassName('shop-items')[0];
    merchItems.map(item => {
        const { name, price } = item;
        const imgSrc = item.imgSrc ? item.imgSrc : "../merch/maggie.png";
        const itemLink = item.itemLink ? item.itemLink : imgSrc;
        let card = document.createElement("a");
        card.href=itemLink;
        card.target="_blank";
        card.classList.add('shop-items__item');

        card.appendChild(createImage(imgSrc));
        card.appendChild(createTextElements(name, price))
        shop.appendChild(card);
    })
}

const createImage = (imgSrc) => {
    let imgBox = document.createElement('div');
    imgBox.classList.add('shop-items__item__img');

    let img = document.createElement('img');
    img.src = imgSrc;
    imgBox.appendChild(img);

    return imgBox;
}

const createTextElements = (itemName, itemPrice) => {
    let textBox = document.createElement('div');
    textBox.classList.add('shop-items__item__text');

    let name = document.createElement('p');
    name.appendChild(document.createTextNode(itemName));

    let price = document.createElement('h3');
    price.appendChild(document.createTextNode(itemPrice));

    textBox.appendChild(name);
    textBox.appendChild(price);

    return textBox;
}

window.onload = () => {
    makeCards(merchItems);
}
