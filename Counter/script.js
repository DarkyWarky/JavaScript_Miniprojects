const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const increase = document.getElementById("increase")
const counterno = document.getElementById("counter")

reset.addEventListener("click",function () {
    counterno.textContent = 0
    counterno.style.color = 'black'; 
})
increase.addEventListener("click",function(){
    let num = Number.parseInt(counterno.textContent)
    num+=1;
    counterno.textContent = num
    if (num > 0) {
        counterno.style.color = 'green';
      } else if (num < 0) {
        counterno.style.color = 'red';
      } else {
        counterno.style.color = 'black';
      }
})
decrease.addEventListener("click",function(){
    let num = Number.parseInt(counterno.textContent)
    num-=1;
    counterno.textContent = num
    if (num > 0) {
        counterno.style.color = 'green';
      } else if (num < 0) {
        counterno.style.color = 'red';
      } else {
        counterno.style.color = 'black';
      }
})
let number = Number.parseInt(counterno)
if (number>0) {
    counterno.style.color ='green'
}