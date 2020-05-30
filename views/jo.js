/* 
    * Jo-Sword 2020 - I love my work. *
*/
const header = document.querySelector('.header')
const height_noel = document.querySelector('.noel')

document.addEventListener('scroll', () => {
    window.scrollY > height_noel.offsetHeight-220 ? header.classList.add('down') : header.classList.remove('down')
})