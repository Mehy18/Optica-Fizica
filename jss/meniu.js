const Open = document.querySelector('#Open')
const mySidenav = document.querySelector('#mySidenav')
menuBtn.addEventListener('click', () => { closeNav()
})
document.addEventListener('click', e => {
if(!menu.contains(e.target) && e.target !== Open) { closeNav()
}
})
