const menu = document.getElementById("menu")
const navbar =document.getElementById("navigation")
const togglenavbar = document.getElementById("second-navi")
const navitems =document.getElementById("navi2")

menu.addEventListener('mouseenter',function(){
    menu.classList.add('fa-spin')
})
menu.addEventListener('mouseleave',function(){
    menu.classList.remove('fa-spin')
})
menu.addEventListener('click',function(){
    togglenavbar.classList.toggle("on-toggle1")
})