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
        name: "shirt",
        price: "$xx",
        imgSrc: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
        itemLink: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    },
    {
        name: "hoodie",
        price: "$xx",
        imgSrc: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        itemLink: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
    {
        name: "sticker",
        price: "$xx",
        imgSrc: "https://images.unsplash.com/photo-1500576992153-0271099def59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        itemLink: "https://images.unsplash.com/photo-1500576992153-0271099def59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
        name: "notes",
        price: "$xx",
        imgSrc: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        itemLink: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
    {
        name: "popsocket",
        price: "$xx",
        imgSrc: "https://images.unsplash.com/photo-1549298620-833e1e37670b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        itemLink: "https://images.unsplash.com/photo-1549298620-833e1e37670b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
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
