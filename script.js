const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navigation__links');

// hamburger.addEventListener('click',() => {
//     if (navlinks.style.display === 'flex') {
//         navlinks.style.display = 'none'

//     } else {
//         navlinks.style.display = 'flex'
//     }
// })


hamburger.addEventListener('click',() => {
    if (navlinks.style.transform === 'ScaleY(1)') {
        navlinks.style.transform = 'ScaleY(0)'

    } else {
        navlinks.style.transform = 'ScaleY(1)'
    }
})