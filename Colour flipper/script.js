const colours =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const button = document.getElementById("btn");
const color = document.getElementsByTagName("section");
const colorName = document.getElementById("colorName");

btn.addEventListener("click",function(){
    let hexcode = '#'
    for (let i = 0; i < 6; i++) {
        hexcode += colours[Math.floor(Math.random()*colours.length)]
    }
    document.body.style.backgroundColor= hexcode
    colorName.textContent = hexcode
})
