$(document).ready(function () {


    // CLOSES RESPONSIVE MENU WHEN USER CLICKS LINK
    const links = document.querySelectorAll('.nav-links');

    links.forEach((link) => {
        link.addEventListener('click', function () {
            document.querySelector('#check').checked = false;
        })

    });



});