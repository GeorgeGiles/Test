const menu = document.querySelector('#mobile-menu');
const menuLinks =document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


let data = [
    {
        name: 'John'
    },
    {
        name: 'Ringo'
    }
]

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return (
        '<button class="main__btn"><a>' + item.name + '</a></button>'
    )
})

info.innerHTML = details.join('\n');
