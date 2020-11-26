import './navbar'
import '../scss/main.scss'

const btnBurger = document.querySelector('.navbar__btn')
const menu = document.querySelector('.navbar__menu')

btnBurger.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle("open") 
})