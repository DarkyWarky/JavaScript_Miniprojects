const modal = document.getElementById("modal");
const close = document.getElementById("close");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    modal.style.height = "300px";
});

close.addEventListener("click", function () {
    modal.style.height = "0";
});
