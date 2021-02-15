/* TO ADD A MERCH ITEM: 

copy the following (including the curly braces), add in the proper info, and add it to merchItems

    {
        name: "item name",
        price: "$item price",
        imgSrc: "link to the image that will be displayed",
        itemLink: "link to the item page",
    },


*/

const merchItems = [
    {
        name: "hoodie",
        price: "$xx",
        imgSrc: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
        itemLink: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
    },
    {
        name: "shirt",
        price: "$xx",
        imgSrc: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
        itemLink: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
    },
    {
        name: "sticker",
        price: "$xx",
        imgSrc: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
        itemLink: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
    },
    {
        name: "notes",
        price: "$xx",
        imgSrc: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
        itemLink: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
    },
    {
        name: "popsocket",
        price: "$xx",
        imgSrc: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
        itemLink: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
    },
    {
        name: "other",
        price: "$xx",
        imgSrc: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
        itemLink: "https://cdn.shopify.com/s/files/1/0055/1242/products/IND5000P-GHR_2048x.jpg?v=1559238178",
    }
]












const makeCards = (merchItems) => {
    let shop = document.getElementsByClassName('shop-items')[0];
    merchItems.map(item => {
        const { name, price, imgSrc, itemLink } = item;

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
